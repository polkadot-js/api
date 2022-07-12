// Copyright 2017-2022 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable camelcase */

import type { JsonRpcResponse, ProviderInterface, ProviderInterfaceCallback, ProviderInterfaceEmitCb, ProviderInterfaceEmitted, ProviderStats } from '../types';

import EventEmitter from 'eventemitter3';

import { isChildClass, isNull, isUndefined, logger, objectSpread } from '@polkadot/util';
import { xglobal } from '@polkadot/x-global';
import { WebSocket } from '@polkadot/x-ws';

import { RpcCoder } from '../coder';
import defaults from '../defaults';
import { LRUCache } from '../lru';
import { getWSErrorString } from './errors';

interface SubscriptionHandler {
  callback: ProviderInterfaceCallback;
  type: string;
}

interface WsStateAwaiting {
  callback: ProviderInterfaceCallback;
  method: string;
  params: unknown[];
  start: number;
  subscription?: SubscriptionHandler;
}

interface WsStateSubscription extends SubscriptionHandler {
  method: string;
  params: unknown[];
}

const ALIASES: { [index: string]: string } = {
  chain_finalisedHead: 'chain_finalizedHead',
  chain_subscribeFinalisedHeads: 'chain_subscribeFinalizedHeads',
  chain_unsubscribeFinalisedHeads: 'chain_unsubscribeFinalizedHeads'
};

const RETRY_DELAY = 2_500;

const DEFAULT_TIMEOUT_MS = 60 * 1000;
const TIMEOUT_INTERVAL = 5_000;

const MEGABYTE = 1024 * 1024;

const l = logger('api-ws');

function eraseRecord<T> (record: Record<string, T>, cb?: (item: T) => void): void {
  Object.keys(record).forEach((key): void => {
    if (cb) {
      cb(record[key]);
    }

    delete record[key];
  });
}

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
  readonly #callCache = new LRUCache();

  readonly #coder: RpcCoder;

  readonly #endpoints: string[];

  readonly #headers: Record<string, string>;

  readonly #eventemitter: EventEmitter;

  readonly #handlers: Record<string, WsStateAwaiting> = {};

  readonly #isReadyPromise: Promise<WsProvider>;

  readonly #stats: ProviderStats;

  readonly #waitingForId: Record<string, JsonRpcResponse> = {};

  #autoConnectMs: number;

  #endpointIndex: number;

  #isConnected = false;

  #subscriptions: Record<string, WsStateSubscription> = {};

  #timeoutId?: ReturnType<typeof setInterval> | null = null;

  #websocket: WebSocket | null;

  #timeout: number;

  /**
   * @param {string | string[]}  endpoint    The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944`, may provide an array of endpoint strings.
   * @param {boolean} autoConnect Whether to connect automatically or not.
   * @param {number} [timeout] Custom timeout value
   */
  constructor (endpoint: string | string[] = defaults.WS_URL, autoConnectMs: number | false = RETRY_DELAY, headers: Record<string, string> = {}, timeout?: number) {
    const endpoints = Array.isArray(endpoint)
      ? endpoint
      : [endpoint];

    if (endpoints.length === 0) {
      throw new Error('WsProvider requires at least one Endpoint');
    }

    endpoints.forEach((endpoint) => {
      if (!/^(wss|ws):\/\//.test(endpoint)) {
        throw new Error(`Endpoint should start with 'ws://', received '${endpoint}'`);
      }
    });

    this.#eventemitter = new EventEmitter();
    this.#autoConnectMs = autoConnectMs || 0;
    this.#coder = new RpcCoder();
    this.#endpointIndex = -1;
    this.#endpoints = endpoints;
    this.#headers = headers;
    this.#websocket = null;
    this.#stats = {
      active: { requests: 0, subscriptions: 0 },
      total: { bytesRecv: 0, bytesSent: 0, cached: 0, errors: 0, requests: 0, subscriptions: 0, timeout: 0 }
    };
    this.#timeout = timeout || DEFAULT_TIMEOUT_MS;

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

      // the as typeof WebSocket here is Deno-specific - not available on the globalThis
      this.#websocket = typeof xglobal.WebSocket !== 'undefined' && isChildClass(xglobal.WebSocket as typeof WebSocket, WebSocket)
        ? new WebSocket(this.#endpoints[this.#endpointIndex])
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - WS may be an instance of w3cwebsocket, which supports headers
        : new WebSocket(this.#endpoints[this.#endpointIndex], undefined, undefined, this.#headers, undefined, {
          // default: true
          fragmentOutgoingMessages: true,
          // default: 16K (bump, the Node has issues with too many fragments, e.g. on setCode)
          fragmentationThreshold: 1 * MEGABYTE,
          // default: 1MiB (also align with maxReceivedMessageSize)
          maxReceivedFrameSize: 24 * MEGABYTE,
          // default: 8MB (however Polkadot api.query.staking.erasStakers.entries(356) is over that, 16M is ok there)
          maxReceivedMessageSize: 24 * MEGABYTE
        });

      if (this.#websocket) {
        this.#websocket.onclose = this.#onSocketClose;
        this.#websocket.onerror = this.#onSocketError;
        this.#websocket.onmessage = this.#onSocketMessage;
        this.#websocket.onopen = this.#onSocketOpen;
      }

      // timeout any handlers that have not had a response
      this.#timeoutId = setInterval(() => this.#timeoutHandlers(), TIMEOUT_INTERVAL);
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
    if (this.#autoConnectMs > 0) {
      try {
        await this.connect();
      } catch (error) {
        setTimeout((): void => {
          this.connectWithRetry().catch((): void => {
            // does not throw
          });
        }, this.#autoConnectMs);
      }
    }
  }

  /**
   * @description Manually disconnect from the connection, clearing auto-connect logic
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  public async disconnect (): Promise<void> {
    // switch off autoConnect, we are in manual mode now
    this.#autoConnectMs = 0;

    try {
      if (this.#websocket) {
        // 1000 - Normal closure; the connection successfully completed
        this.#websocket.close(1000);
      }
    } catch (error) {
      l.error(error);

      this.#emit('error', error);

      throw error;
    }
  }

  /**
   * @description Returns the connection stats
   */
  public get stats (): ProviderStats {
    return {
      active: {
        requests: Object.keys(this.#handlers).length,
        subscriptions: Object.keys(this.#subscriptions).length
      },
      total: this.#stats.total
    };
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
  public send <T = any> (method: string, params: unknown[], isCacheable?: boolean, subscription?: SubscriptionHandler): Promise<T> {
    this.#stats.total.requests++;

    const [id, body] = this.#coder.encodeJson(method, params);
    let resultPromise: Promise<T> | null = isCacheable
      ? this.#callCache.get(body)
      : null;

    if (!resultPromise) {
      resultPromise = this.#send(id, body, method, params, subscription);

      if (isCacheable) {
        this.#callCache.set(body, resultPromise);
      }
    } else {
      this.#stats.total.cached++;
    }

    return resultPromise;
  }

  async #send <T> (id: number, body: string, method: string, params: unknown[], subscription?: SubscriptionHandler): Promise<T> {
    return new Promise<T>((resolve, reject): void => {
      try {
        if (!this.isConnected || this.#websocket === null) {
          throw new Error('WebSocket is not connected');
        }

        const callback = (error?: Error | null, result?: T): void => {
          error
            ? reject(error)
            : resolve(result as T);
        };

        l.debug(() => ['calling', method, body]);

        this.#handlers[id] = {
          callback,
          method,
          params,
          start: Date.now(),
          subscription
        };
        this.#stats.total.bytesSent += body.length;
        this.#websocket.send(body);
      } catch (error) {
        this.#stats.total.errors++;

        reject(error);
      }
    });
  }

  /**
   * @name subscribe
   * @summary Allows subscribing to a specific event.
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
  public subscribe (type: string, method: string, params: unknown[], callback: ProviderInterfaceCallback): Promise<number | string> {
    this.#stats.total.subscriptions++;

    // subscriptions are not cached, LRU applies to .at(<blockHash>) only
    return this.send<number | string>(method, params, false, { callback, type });
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

    try {
      return this.isConnected && !isNull(this.#websocket)
        ? this.send<boolean>(method, [id])
        : true;
    } catch (error) {
      return false;
    }
  }

  #emit = (type: ProviderInterfaceEmitted, ...args: unknown[]): void => {
    this.#eventemitter.emit(type, ...args);
  };

  #onSocketClose = (event: CloseEvent): void => {
    const error = new Error(`disconnected from ${this.#endpoints[this.#endpointIndex]}: ${event.code}:: ${event.reason || getWSErrorString(event.code)}`);

    if (this.#autoConnectMs > 0) {
      l.error(error.message);
    }

    this.#isConnected = false;

    if (this.#websocket) {
      this.#websocket.onclose = null;
      this.#websocket.onerror = null;
      this.#websocket.onmessage = null;
      this.#websocket.onopen = null;
      this.#websocket = null;
    }

    if (this.#timeoutId) {
      // different method signatures for Node vs Browser/Deno
      clearInterval(this.#timeoutId as number);
      this.#timeoutId = null;
    }

    this.#emit('disconnected');

    // reject all hanging requests
    eraseRecord(this.#handlers, (h) => {
      try {
        h.callback(error, undefined);
      } catch (err) {
        // does not throw
        l.error(err);
      }
    });
    eraseRecord(this.#waitingForId);

    if (this.#autoConnectMs > 0) {
      setTimeout((): void => {
        this.connectWithRetry().catch(() => {
          // does not throw
        });
      }, this.#autoConnectMs);
    }
  };

  #onSocketError = (error: Event): void => {
    l.debug(() => ['socket error', error]);
    this.#emit('error', error);
  };

  #onSocketMessage = (message: MessageEvent<string>): void => {
    l.debug(() => ['received', message.data]);

    this.#stats.total.bytesRecv += message.data.length;

    const response = JSON.parse(message.data) as JsonRpcResponse;

    return isUndefined(response.method)
      ? this.#onSocketMessageResult(response)
      : this.#onSocketMessageSubscribe(response);
  };

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

        this.#subscriptions[subId] = objectSpread({}, subscription, {
          method,
          params
        });

        // if we have a result waiting for this subscription already
        if (this.#waitingForId[subId]) {
          this.#onSocketMessageSubscribe(this.#waitingForId[subId]);
        }
      }
    } catch (error) {
      this.#stats.total.errors++;

      handler.callback(error as Error, undefined);
    }

    delete this.#handlers[response.id];
  };

  #onSocketMessageSubscribe = (response: JsonRpcResponse): void => {
    const method = ALIASES[response.method as string] || response.method || 'invalid';
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
      this.#stats.total.errors++;

      handler.callback(error as Error, undefined);
    }
  };

  #onSocketOpen = (): boolean => {
    if (this.#websocket === null) {
      throw new Error('WebSocket cannot be null in onOpen');
    }

    l.debug(() => ['connected to', this.#endpoints[this.#endpointIndex]]);

    this.#isConnected = true;

    this.#emit('connected');
    this.#resubscribe();

    return true;
  };

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
  };

  #timeoutHandlers = (): void => {
    const now = Date.now();
    const ids = Object.keys(this.#handlers);

    for (let i = 0; i < ids.length; i++) {
      const handler = this.#handlers[ids[i]];

      if ((now - handler.start) > this.#timeout) {
        try {
          handler.callback(new Error(`No response received from RPC endpoint in ${this.#timeout / 1000}s`), undefined);
        } catch {
          // ignore
        }

        this.#stats.total.timeout++;
        delete this.#handlers[ids[i]];
      }
    }
  };
}
