// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type SubstrateConnect from '@substrate/connect';
import type { JsonRpcResponse, ProviderInterface, ProviderInterfaceCallback, ProviderInterfaceEmitCb, ProviderInterfaceEmitted } from '../types';

import EventEmitter from 'eventemitter3';

import { isError, logger, objectSpread } from '@polkadot/util';

import { RpcCoder } from '../coder';
import { healthChecker } from './Health';

type ResponseCallback = (response: string | Error) => void

const l = logger('api-substrate-connect');

// These methods have been taken from:
// https://github.com/paritytech/smoldot/blob/17425040ddda47d539556eeaf62b88c4240d1d42/src/json_rpc/methods.rs#L338-L462
// It's important to take into account that smoldot is adding support to the new
// json-rpc-interface https://paritytech.github.io/json-rpc-interface-spec/
// However, at the moment this list only includes methods that belong to the "old" API
const subscriptionUnsubscriptionMethods = new Map<string, string>([
  ['author_submitAndWatchExtrinsic', 'author_unwatchExtrinsic'],
  ['chain_subscribeAllHeads', 'chain_unsubscribeAllHeads'],
  ['chain_subscribeFinalizedHeads', 'chain_unsubscribeFinalizedHeads'],
  ['chain_subscribeFinalisedHeads', 'chain_subscribeFinalisedHeads'],
  ['chain_subscribeNewHeads', 'chain_unsubscribeNewHeads'],
  ['chain_subscribeNewHead', 'chain_unsubscribeNewHead'],
  ['chain_subscribeRuntimeVersion', 'chain_unsubscribeRuntimeVersion'],
  ['subscribe_newHead', 'unsubscribe_newHead'],
  ['state_subscribeRuntimeVersion', 'state_unsubscribeRuntimeVersion'],
  ['state_subscribeStorage', 'state_unsubscribeStorage']
]);

const scClients = new WeakMap<ScProvider, SubstrateConnect.ScClient>();

interface ActiveSubs {
  type: string,
  method: string,
  params: any[],
  callback: ProviderInterfaceCallback
}

export class ScProvider implements ProviderInterface {
  readonly #ScConnect: typeof SubstrateConnect;
  readonly #coder: RpcCoder = new RpcCoder();
  readonly #spec: string | SubstrateConnect.WellKnownChain;
  readonly #sharedSandbox?: ScProvider;
  readonly #subscriptions: Map<string, [ResponseCallback, { unsubscribeMethod: string; id: string | number }]> = new Map();
  readonly #resubscribeMethods: Map<string, ActiveSubs> = new Map();
  readonly #requests: Map<number, ResponseCallback> = new Map();
  readonly #wellKnownChains: Set<SubstrateConnect.WellKnownChain>;
  readonly #eventemitter: EventEmitter = new EventEmitter();
  #chain: Promise<SubstrateConnect.Chain> | null = null;
  #isChainReady = false;

  public constructor (ScConnect: typeof SubstrateConnect, spec: string | SubstrateConnect.WellKnownChain, sharedSandbox?: ScProvider) {
    this.#ScConnect = ScConnect;
    this.#spec = spec;
    this.#sharedSandbox = sharedSandbox;
    this.#wellKnownChains = new Set(Object.values(ScConnect.WellKnownChain));
  }

  public get hasSubscriptions (): boolean {
    // Indicates that subscriptions are supported
    return true;
  }

  public get isClonable (): boolean {
    return false;
  }

  public get isConnected (): boolean {
    return !!this.#chain && this.#isChainReady;
  }

  public clone (): ProviderInterface {
    throw new Error('clone() is not supported.');
  }

  // Config details can be found in @substrate/connect repo following the link:
  // https://github.com/paritytech/substrate-connect/blob/main/packages/connect/src/connector/index.ts
  async connect (config?: SubstrateConnect.Config, checkerFactory = healthChecker): Promise<void> {
    if (this.isConnected) {
      throw new Error('Already connected!');
    }

    // it could happen that after emitting `disconnected` due to the fact taht
    // smoldot is syncing, the consumer tries to reconnect after a certain amount
    // of time... In which case we want to make sure that we don't create a new
    // chain.
    if (this.#chain) {
      await this.#chain;

      return;
    }

    if (this.#sharedSandbox && !this.#sharedSandbox.isConnected) {
      await this.#sharedSandbox.connect();
    }

    const client = this.#sharedSandbox
      ? scClients.get(this.#sharedSandbox)
      : this.#ScConnect.createScClient(config);

    if (!client) {
      throw new Error('Unkown ScProvider!');
    }

    scClients.set(this, client);

    const hc = checkerFactory();

    const onResponse = (res: string): void => {
      const hcRes = hc.responsePassThrough(res);

      if (!hcRes) {
        return;
      }

      const response = JSON.parse(hcRes) as JsonRpcResponse;
      let decodedResponse: string | Error;

      try {
        decodedResponse = this.#coder.decodeResponse(response) as string;
      } catch (e) {
        decodedResponse = e as Error;
      }

      // It's not a subscription message, but rather a standar RPC response
      if (response.params?.subscription === undefined || !response.method) {
        return this.#requests.get(response.id)?.(decodedResponse);
      }

      // We are dealing with a subscription message
      const subscriptionId = `${response.method}::${response.params.subscription}`;

      const callback = this.#subscriptions.get(subscriptionId)?.[0];

      callback?.(decodedResponse);
    };

    const addChain = this.#wellKnownChains.has(this.#spec as SubstrateConnect.WellKnownChain)
      ? client.addWellKnownChain
      : client.addChain;

    this.#chain = addChain(this.#spec as SubstrateConnect.WellKnownChain, onResponse).then((chain) => {
      hc.setSendJsonRpc(chain.sendJsonRpc);

      this.#isChainReady = false;

      const cleanup = () => {
        // If there are any callbacks left, we have to reject/error them.
        // Otherwise, that would cause a memory leak.
        const disconnectionError = new Error('Disconnected');

        this.#requests.forEach((cb) => cb(disconnectionError));
        this.#subscriptions.forEach(([cb]) => cb(disconnectionError));
        this.#subscriptions.clear();
      };

      const staleSubscriptions: {
        unsubscribeMethod: string
        id: number | string
      }[] = [];

      const killStaleSubscriptions = () => {
        if (staleSubscriptions.length === 0) {
          return;
        }

        const stale = staleSubscriptions.pop();

        if (!stale) {
          throw new Error('Unable to get stale subscription');
        }

        const { id, unsubscribeMethod } = stale;

        Promise
          .race([
            this.send(unsubscribeMethod, [id]).catch(() => undefined),
            new Promise((resolve) => setTimeout(resolve, 500))
          ])
          .then(killStaleSubscriptions)
          .catch(() => undefined);
      };

      hc.start((health) => {
        const isReady =
          !health.isSyncing && (health.peers > 0 || !health.shouldHavePeers);

        // if it's the same as before, then nothing has changed and we are done
        if (this.#isChainReady === isReady) {
          return;
        }

        this.#isChainReady = isReady;

        if (!isReady) {
          // If we've reached this point, that means that the chain used to be "ready"
          // and now we are about to emit `disconnected`.
          //
          // This will cause the PolkadotJs API think that the connection is
          // actually dead. In reality the smoldot chain is not dead, of course.
          // However, we have to cleanup all the existing callbacks because when
          // the smoldot chain stops syncing, then we will emit `connected` and
          // the PolkadotJs API will try to re-create the previous
          // subscriptions and requests. Although, now is not a good moment
          // to be sending unsubscription messages to the smoldot chain, we
          // should wait until is no longer syncing to send the unsubscription
          // messages from the stale subscriptions of the previous connection.
          //
          // That's why -before we perform the cleanup of `this.#subscriptions`-
          // we keep the necessary information that we will need later on to
          // kill the stale subscriptions.
          [...this.#subscriptions.values()].forEach((s) => {
            staleSubscriptions.push(s[1]);
          });
          cleanup();

          this.#eventemitter.emit('disconnected');
        } else {
          killStaleSubscriptions();

          this.#eventemitter.emit('connected');

          if (this.#resubscribeMethods.size) {
            this.#resubscribe();
          }
        }
      });

      return objectSpread({}, chain, {
        remove: () => {
          hc.stop();
          chain.remove();
          cleanup();
        },
        sendJsonRpc: hc.sendJsonRpc.bind(hc)
      });
    });

    try {
      await this.#chain;
    } catch (e) {
      this.#chain = null;
      this.#eventemitter.emit('error', e);
      throw e;
    }
  }

  #resubscribe = (): void => {
    const promises: any[] = [];

    this.#resubscribeMethods.forEach((subDetails: ActiveSubs): void => {
      // only re-create subscriptions which are not in author (only area where
      // transactions are created, i.e. submissions such as 'author_submitAndWatchExtrinsic'
      // are not included (and will not be re-broadcast)
      if (subDetails.type.startsWith('author_')) {
        return;
      }

      try {
        const promise: Promise<void> = new Promise((resolve) => {
          this.subscribe(subDetails.type, subDetails.method, subDetails.params, subDetails.callback).catch((error) => console.log(error));
          resolve();
        });

        promises.push(promise);
      } catch (error) {
        l.error(error);
      }
    });

    Promise.all(promises).catch((err) => l.log(err));
  };

  async disconnect (): Promise<void> {
    if (!this.#chain) {
      return;
    }

    const chain = await this.#chain;

    this.#chain = null;
    this.#isChainReady = false;

    try {
      chain.remove();
    } catch (_) {}

    this.#eventemitter.emit('disconnected');
  }

  public on (type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void {
    // It's possible. Although, quite unlikely, that by the time that polkadot
    // subscribes to the `connected` event, the Provider is already connected.
    // In that case, we must emit to let the consumer know that we are connected.
    if (type === 'connected' && this.isConnected) {
      sub();
    }

    this.#eventemitter.on(type, sub);

    return (): void => {
      this.#eventemitter.removeListener(type, sub);
    };
  }

  public async send<T = any> (method: string, params: unknown[]): Promise<T> {
    if (!this.isConnected || !this.#chain) {
      throw new Error('Provider is not connected');
    }

    const chain = await this.#chain;
    const [id, json] = this.#coder.encodeJson(method, params);

    const result = new Promise<T>((resolve, reject): void => {
      this.#requests.set(id, (response) => {
        (isError(response) ? reject : resolve)(response as unknown as T);
      });

      try {
        chain.sendJsonRpc(json);
      } catch (e) {
        this.#chain = null;

        try {
          chain.remove();
        } catch (_) {}

        this.#eventemitter.emit('error', e);
      }
    });

    try {
      return await result;
    } finally {
      // let's ensure that once the Promise is resolved/rejected, then we remove
      // remove its entry from the internal #requests
      this.#requests.delete(id);
    }
  }

  public async subscribe (type: string, method: string, params: any[], callback: ProviderInterfaceCallback): Promise<number | string> {
    if (!subscriptionUnsubscriptionMethods.has(method)) {
      throw new Error(`Unsupported subscribe method: ${method}`);
    }

    const id = await this.send<number | string>(method, params);
    const subscriptionId = `${type}::${id}`;

    const cb = (response: Error | string) => {
      if (response instanceof Error) {
        callback(response, undefined);
      } else {
        callback(null, response);
      }
    };

    const unsubscribeMethod = subscriptionUnsubscriptionMethods.get(method);

    if (!unsubscribeMethod) {
      throw new Error('Invalid unsubscribe method found');
    }

    this.#resubscribeMethods.set(subscriptionId, { callback, method, params, type });

    this.#subscriptions.set(subscriptionId, [cb, { id, unsubscribeMethod }]);

    return id;
  }

  public unsubscribe (type: string, method: string, id: number | string): Promise<boolean> {
    if (!this.isConnected) {
      throw new Error('Provider is not connected');
    }

    const subscriptionId = `${type}::${id}`;

    if (!this.#subscriptions.has(subscriptionId)) {
      return Promise.reject(
        new Error(`Unable to find active subscription=${subscriptionId}`)
      );
    }

    this.#resubscribeMethods.delete(subscriptionId);
    this.#subscriptions.delete(subscriptionId);

    return this.send(method, [id]);
  }
}
