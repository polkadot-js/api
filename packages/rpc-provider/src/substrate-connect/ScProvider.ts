// Copyright 2017-2022 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { JsonRpcResponse, ProviderInterface, ProviderInterfaceCallback, ProviderInterfaceEmitCb, ProviderInterfaceEmitted } from '../types';
import type { Config } from '@substrate/connect/dist/connector/smoldot-light';

import { Chain, createScClient, ScClient, WellKnownChain } from '@substrate/connect';
import EventEmitter from 'eventemitter3';

import { assert, isError } from '@polkadot/util';

import { RpcCoder } from '../coder';
import { healthChecker } from './Health';

type ResponseCallback = (response: string | Error) => void

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

const wellKnownChains = new Set(Object.values(WellKnownChain));
const scClients = new WeakMap<ScProvider, ScClient>();

export { WellKnownChain };
export class ScProvider implements ProviderInterface {
  readonly #coder: RpcCoder = new RpcCoder();
  readonly #spec: string | WellKnownChain;
  readonly #sharedSandbox?: ScProvider;
  readonly #subscriptions: Map<
  string,
  [ResponseCallback, { unsubscribeMethod: string; id: string | number }]
  > = new Map();

  readonly #requests: Map<number, ResponseCallback> = new Map();
  readonly #eventemitter: EventEmitter = new EventEmitter();
  #chain: Promise<Chain> | null = null;
  #isChainReady = false;

  public constructor (spec: string | WellKnownChain, sharedSandbox?: ScProvider) {
    this.#spec = spec;
    this.#sharedSandbox = sharedSandbox;
  }

  public get hasSubscriptions (): boolean {
    // Indicates that subscriptions are supported
    return true;
  }

  public get isConnected (): boolean {
    return !!this.#chain && this.#isChainReady;
  }

  public clone (): ProviderInterface {
    throw new Error('clone() is not supported.');
  }

  /**
   * The client prints logs in the console. Without passing parameter to connect, only log
   * levels 1, 2, and 3 (corresponding respectively to ERROR, WARN, and INFO) are printed.
   * In order to more easily debug problems, you can pass 4 (DEBUG) or more.
   *
   * This setting is only taken into account between the moment when you use this chain to add a
   * chain for the first time, and the moment when all the chains that you have added have been
   * removed.
   */
  async connect (config?: Config): Promise<void> {
    assert(!this.isConnected, 'Already connected!');

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
      : createScClient(config);

    assert(client, 'Unkown ScProvider!');
    scClients.set(this, client);

    const hc = healthChecker();

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

    const addChain = wellKnownChains.has(this.#spec as WellKnownChain)
      ? client.addWellKnownChain
      : client.addChain;

    this.#chain = addChain(this.#spec as WellKnownChain, onResponse).then((chain) => {
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

        assert(stale, 'Unable to get stale subscription');

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
        } else {
          killStaleSubscriptions();
        }

        this.#eventemitter.emit(isReady ? 'connected' : 'disconnected');
      });

      return {
        ...chain,
        remove: () => {
          hc.stop();
          chain.remove();
          cleanup();
        },
        sendJsonRpc: hc.sendJsonRpc.bind(hc)
      };
    });

    try {
      await this.#chain;
    } catch (e) {
      this.#chain = null;
      this.#eventemitter.emit('error', e);
      throw e;
    }
  }

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

  public on (
    type: ProviderInterfaceEmitted,
    sub: ProviderInterfaceEmitCb
  ): () => void {
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
    assert(this.isConnected && this.#chain, 'Provider is not connected');

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

  public async subscribe (
    type: string,
    method: string,
    params: any[],
    callback: ProviderInterfaceCallback
  ): Promise<number | string> {
    assert(
      subscriptionUnsubscriptionMethods.has(method),
      `Unsupported subscribe method: ${method}`
    );

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

    assert(unsubscribeMethod, 'Invalid unsubscribe method found');

    this.#subscriptions.set(subscriptionId, [cb, { id, unsubscribeMethod }]);

    return id;
  }

  public unsubscribe (
    type: string,
    method: string,
    id: number | string
  ): Promise<boolean> {
    assert(
      this.isConnected,
      'Provider is not connected'
    );

    const subscriptionId = `${type}::${id}`;

    if (!this.#subscriptions.has(subscriptionId)) {
      return Promise.reject(
        new Error(`Unable to find active subscription=${subscriptionId}`)
      );
    }

    this.#subscriptions.delete(subscriptionId);

    return this.send(method, [id]);
  }
}
export type ScProviderClass = typeof ScProvider
