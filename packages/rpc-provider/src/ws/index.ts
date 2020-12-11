// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable camelcase */

import type { JsonRpcResponse, ProviderInterface, ProviderInterfaceCallback, ProviderInterfaceEmitCb, ProviderInterfaceEmitted } from '../types';

import EventEmitter from 'eventemitter3';

import { assert, isChildClass, isNull, isUndefined, logger } from '@polkadot/util';
import { WebSocket } from '@polkadot/x-ws';

import { RpcCoder } from '../coder';
import defaults from '../defaults';
import { getWSErrorString } from './errors';

interface SubscriptionHandler {
  callback: ProviderInterfaceCallback;
  type: string;
}

interface WsStateAwaiting {
  callback: ProviderInterfaceCallback;
  method: string;
  params: any[];
  subscription?: SubscriptionHandler;
}

interface WsStateSubscription extends SubscriptionHandler {
  method: string;
  params: any[];
}

const ALIASSES: { [index: string]: string } = {
  chain_finalisedHead: 'chain_finalizedHead',
  chain_subscribeFinalisedHeads: 'chain_subscribeFinalizedHeads',
  chain_unsubscribeFinalisedHeads: 'chain_unsubscribeFinalizedHeads'
};

const RETRY_DELAY = 1000;

const l = logger('api-ws');

/**
 * # @polkadot/rpc-provider/ws
 *
 * @name WsProvider
 *
 * @description The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the [[HttpProvider]], it does support subscriptions and allows listening to events such as new blocks or balance changes.
 *
 * @example
 * <BR>
 *
 * ```javascript
 * import Api from '@polkadot/api/promise';
 * import { WsProvider } from '@polkadot/rpc-provider/ws';
 *
 * const provider = new WsProvider('ws://127.0.0.1:9944');
 * const api = new Api(provider);
 * ```
 *
 * @see [[HttpProvider]]
 */
export class WsProvider implements ProviderInterface {
  readonly #coder: RpcCoder;

  readonly #endpoints: string[];

  readonly #headers: Record<string, string>;

  readonly #eventemitter: EventEmitter;

  readonly #handlers: Record<string, WsStateAwaiting> = {};

  readonly #isReadyPromise: Promise<WsProvider>;

  readonly #waitingForId: Record<string, JsonRpcResponse> = {};

  #autoConnectMs: number;

  #endpointIndex: number;

  #isConnected = false;

  #subscriptions: Record<string, WsStateSubscription> = {};

  #websocket: WebSocket | null;

  /**
   * @param {string | string[]}  endpoint    The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944`, may provide an array of endpoint strings.
   * @param {boolean} autoConnect Whether to connect automatically or not.
   */
  constructor (endpoint: string | string[] = defaults.WS_URL, autoConnectMs: number | false = RETRY_DELAY, headers: Record<string, string> = {}) {
    const endpoints = Array.isArray(endpoint)
      ? endpoint
      : [endpoint];

    assert(endpoints.length !== 0, 'WsProvider requires at least one Endpoint');

    endpoints.forEach((endpoint) => {
      assert(/^(wss|ws):\/\//.test(endpoint), `Endpoint should start with 'ws://', received '${endpoint}'`);
    });

    this.#eventemitter = new EventEmitter();
    this.#autoConnectMs = autoConnectMs || 0;
    this.#coder = new RpcCoder();
    this.#endpointIndex = -1;
    this.#endpoints = endpoints;
    this.#headers = headers;
    this.#websocket = null;

    if (autoConnectMs > 0) {
      this.connectWithRetry().catch((): void => {
        // does not throw
      });
    }

    this.#isReadyPromise = new Promise((resolve): void => {
      this.#eventemitter.once('connected', (): void => {
        resolve(this);
      });
    });
  }

  /**
   * @summary `true` when this provider supports subscriptions
   */
  public get hasSubscriptions (): boolean {
    return true;
  }

  /**
   * @summary Whether the node is connected or not.
   * @return {boolean} true if connected
   */
  public get isConnected (): boolean {
    return this.#isConnected;
  }

  /**
   * @description Promise that resolves the first time we are connected and loaded
   */
  public get isReady (): Promise<WsProvider> {
    return this.#isReadyPromise;
  }

  /**
   * @description Returns a clone of the object
   */
  public clone (): WsProvider {
    return new WsProvider(this.#endpoints);
  }

  /**
   * @summary Manually connect
   * @description The [[WsProvider]] connects automatically by default, however if you decided otherwise, you may
   * connect manually using this method.
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  public async connect (): Promise<void> {
    try {
      this.#endpointIndex = (this.#endpointIndex + 1) % this.#endpoints.length;
      this.#websocket = typeof global.WebSocket !== 'undefined' && isChildClass(global.WebSocket, WebSocket)
        ? new WebSocket(this.#endpoints[this.#endpointIndex])
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - WS may be an instance of w3cwebsocket, which supports headers
        : new WebSocket(this.#endpoints[this.#endpointIndex], undefined, undefined, this.#headers, undefined, {
          // default: true
          fragmentOutgoingMessages: true,
          // default: 16K
          fragmentationThreshold: 256 * 1024
        });

      this.#websocket.onclose = this.#onSocketClose;
      this.#websocket.onerror = this.#onSocketError;
      this.#websocket.onmessage = this.#onSocketMessage;
      this.#websocket.onopen = this.#onSocketOpen;
    } catch (error) {
      l.error(error);

      this.#emit('error', error);

      throw error;
    }
  }

  /**
   * @description Connect, never throwing an error, but rather forcing a retry
   */
  public async connectWithRetry (): Promise<void> {
    try {
      await this.connect();
    } catch (error) {
      setTimeout((): void => {
        this.connectWithRetry().catch((): void => {
          // does not throw
        });
      }, this.#autoConnectMs || RETRY_DELAY);
    }
  }

  /**
   * @description Manually disconnect from the connection, clearing autoconnect logic
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  public async disconnect (): Promise<void> {
    try {
      assert(!isNull(this.#websocket), 'Cannot disconnect on a non-connected websocket');

      // switch off autoConnect, we are in manual mode now
      this.#autoConnectMs = 0;

      // 1000 - Normal closure; the connection successfully completed
      this.#websocket.close(1000);
      this.#websocket = null;
    } catch (error) {
      l.error(error);

      this.#emit('error', error);

      throw error;
    }
  }

  /**
   * @summary Listens on events after having subscribed using the [[subscribe]] function.
   * @param  {ProviderInterfaceEmitted} type Event
   * @param  {ProviderInterfaceEmitCb}  sub  Callback
   * @return unsubscribe function
   */
  public on (type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void {
    this.#eventemitter.on(type, sub);

    return (): void => {
      this.#eventemitter.removeListener(type, sub);
    };
  }

  /**
   * @summary Send JSON data using WebSockets to configured HTTP Endpoint or queue.
   * @param method The RPC methods to execute
   * @param params Encoded parameters as applicable for the method
   * @param subscription Subscription details (internally used)
   */
  public send (method: string, params: any[], subscription?: SubscriptionHandler): Promise<any> {
    return new Promise((resolve, reject): void => {
      try {
        assert(this.isConnected && !isNull(this.#websocket), 'WebSocket is not connected');

        const json = this.#coder.encodeJson(method, params);
        const id = this.#coder.getId();

        const callback = (error?: Error | null, result?: any): void => {
          error
            ? reject(error)
            : resolve(result);
        };

        l.debug(() => ['calling', method, json]);

        this.#handlers[id] = {
          callback,
          method,
          params,
          subscription
        };

        this.#websocket.send(json);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * @name subscribe
   * @summary Allows subscribing to a specific event.
   * @param  {string}                     type     Subscription type
   * @param  {string}                     method   Subscription method
   * @param  {any[]}                 params   Parameters
   * @param  {ProviderInterfaceCallback} callback Callback
   * @return {Promise<number>}                     Promise resolving to the dd of the subscription you can use with [[unsubscribe]].
   *
   * @example
   * <BR>
   *
   * ```javascript
   * const provider = new WsProvider('ws://127.0.0.1:9944');
   * const rpc = new Rpc(provider);
   *
   * rpc.state.subscribeStorage([[storage.system.account, <Address>]], (_, values) => {
   *   console.log(values)
   * }).then((subscriptionId) => {
   *   console.log('balance changes subscription id: ', subscriptionId)
   * })
   * ```
   */
  public async subscribe (type: string, method: string, params: any[], callback: ProviderInterfaceCallback): Promise<number | string> {
    const id = await this.send(method, params, { callback, type }) as Promise<number | string>;

    return id;
  }

  /**
   * @summary Allows unsubscribing to subscriptions made with [[subscribe]].
   */
  public async unsubscribe (type: string, method: string, id: number | string): Promise<boolean> {
    const subscription = `${type}::${id}`;

    // FIXME This now could happen with re-subscriptions. The issue is that with a re-sub
    // the assigned id now does not match what the API user originally received. It has
    // a slight complication in solving - since we cannot rely on the send id, but rather
    // need to find the actual subscription id to map it
    if (isUndefined(this.#subscriptions[subscription])) {
      l.debug(() => `Unable to find active subscription=${subscription}`);

      return false;
    }

    delete this.#subscriptions[subscription];

    const result = await this.send(method, [id]) as Promise<boolean>;

    return result;
  }

  #emit = (type: ProviderInterfaceEmitted, ...args: any[]): void => {
    this.#eventemitter.emit(type, ...args);
  }

  #onSocketClose = (event: CloseEvent): void => {
    if (this.#autoConnectMs > 0) {
      l.error(`disconnected from ${this.#endpoints[this.#endpointIndex]}: ${event.code}:: ${event.reason || getWSErrorString(event.code)}`);
    }

    this.#isConnected = false;
    this.#emit('disconnected');

    if (this.#autoConnectMs > 0) {
      setTimeout((): void => {
        this.connectWithRetry().catch(() => {
          // does not throw
        });
      }, this.#autoConnectMs);
    }
  }

  #onSocketError = (error: Event): void => {
    l.debug(() => ['socket error', error]);
    this.#emit('error', error);
  }

  #onSocketMessage = (message: MessageEvent<string>): void => {
    l.debug(() => ['received', message.data]);

    const response = JSON.parse(message.data) as JsonRpcResponse;

    return isUndefined(response.method)
      ? this.#onSocketMessageResult(response)
      : this.#onSocketMessageSubscribe(response);
  }

  #onSocketMessageResult = (response: JsonRpcResponse): void => {
    const handler = this.#handlers[response.id];

    if (!handler) {
      l.debug(() => `Unable to find handler for id=${response.id}`);

      return;
    }

    try {
      const { method, params, subscription } = handler;
      const result = this.#coder.decodeResponse(response) as string;

      // first send the result - in case of subs, we may have an update
      // immediately if we have some queued results already
      handler.callback(null, result);

      if (subscription) {
        const subId = `${subscription.type}::${result}`;

        this.#subscriptions[subId] = {
          ...subscription,
          method,
          params
        };

        // if we have a result waiting for this subscription already
        if (this.#waitingForId[subId]) {
          this.#onSocketMessageSubscribe(this.#waitingForId[subId]);
        }
      }
    } catch (error) {
      handler.callback(error, undefined);
    }

    delete this.#handlers[response.id];
  }

  #onSocketMessageSubscribe = (response: JsonRpcResponse): void => {
    const method = ALIASSES[response.method as string] || response.method || 'invalid';
    const subId = `${method}::${response.params.subscription}`;
    const handler = this.#subscriptions[subId];

    if (!handler) {
      // store the JSON, we could have out-of-order subid coming in
      this.#waitingForId[subId] = response;

      l.debug(() => `Unable to find handler for subscription=${subId}`);

      return;
    }

    // housekeeping
    delete this.#waitingForId[subId];

    try {
      const result = this.#coder.decodeResponse(response);

      handler.callback(null, result);
    } catch (error) {
      handler.callback(error, undefined);
    }
  }

  #onSocketOpen = (): boolean => {
    assert(!isNull(this.#websocket), 'WebSocket cannot be null in onOpen');

    l.debug(() => ['connected to', this.#endpoints[this.#endpointIndex]]);

    this.#isConnected = true;

    this.#emit('connected');
    this.#resubscribe();

    return true;
  }

  #resubscribe = (): void => {
    const subscriptions = this.#subscriptions;

    this.#subscriptions = {};

    Promise.all(Object.keys(subscriptions).map(async (id): Promise<void> => {
      const { callback, method, params, type } = subscriptions[id];

      // only re-create subscriptions which are not in author (only area where
      // transactions are created, i.e. submissions such as 'author_submitAndWatchExtrinsic'
      // are not included (and will not be re-broadcast)
      if (type.startsWith('author_')) {
        return;
      }

      try {
        await this.subscribe(type, method, params, callback);
      } catch (error) {
        l.error(error);
      }
    })).catch(l.error);
  }
}
