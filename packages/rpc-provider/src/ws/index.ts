// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Constructor } from '@polkadot/util/types';
import type { EndpointStats, JsonRpcResponse, ProviderInterface, ProviderInterfaceCallback, ProviderInterfaceEmitCb, ProviderInterfaceEmitted, ProviderStats } from '../types.js';

import { EventEmitter } from 'eventemitter3';

import { isChildClass, isNull, isUndefined, logger, objectSpread } from '@polkadot/util';
import { xglobal } from '@polkadot/x-global';
import { WebSocket } from '@polkadot/x-ws';

import { RpcCoder } from '../coder/index.js';
import defaults from '../defaults.js';
import { LRUCache } from '../lru.js';
import { getWSErrorString } from './errors.js';

interface SubscriptionHandler {
  callback: ProviderInterfaceCallback;
  type: string;
}

interface WsStateAwaiting {
  callback: ProviderInterfaceCallback;
  method: string;
  params: unknown[];
  start: number;
  subscription?: SubscriptionHandler | undefined;
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

const l = logger('api-ws');

/** @internal Clears a Record<*> of all keys, optionally with all callback on clear */
function eraseRecord<T> (record: Record<string, T>, cb?: (item: T) => void): void {
  Object.keys(record).forEach((key): void => {
    if (cb) {
      cb(record[key]);
    }

    delete record[key];
  });
}

/** @internal Creates a default/empty stats object */
function defaultEndpointStats (): EndpointStats {
  return { bytesRecv: 0, bytesSent: 0, cached: 0, errors: 0, requests: 0, subscriptions: 0, timeout: 0 };
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
  private readonly __$$_callCache = new LRUCache();
  private readonly __$$_coder: RpcCoder;
  private readonly __$$_endpoints: string[];
  private readonly __$$_headers: Record<string, string>;
  private readonly __$$_eventemitter: EventEmitter;
  private readonly __$$_handlers: Record<string, WsStateAwaiting> = {};
  private readonly __$$_isReadyPromise: Promise<WsProvider>;
  private readonly __$$_stats: ProviderStats;
  private readonly __$$_waitingForId: Record<string, JsonRpcResponse> = {};

  private __$$_autoConnectMs: number;
  private __$$_endpointIndex: number;
  private __$$_endpointStats: EndpointStats;
  private __$$_isConnected = false;
  private __$$_subscriptions: Record<string, WsStateSubscription> = {};
  private __$$_timeoutId?: ReturnType<typeof setInterval> | null = null;
  private __$$_websocket: WebSocket | null;
  private __$$_timeout: number;

  /**
   * @param {string | string[]}  endpoint    The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944`, may provide an array of endpoint strings.
   * @param {number | false} autoConnectMs Whether to connect automatically or not (default). Provided value is used as a delay between retries.
   * @param {Record<string, string>} headers The headers provided to the underlying WebSocket
   * @param {number} [timeout] Custom timeout value used per request . Defaults to `DEFAULT_TIMEOUT_MS`
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

    this.__$$_eventemitter = new EventEmitter();
    this.__$$_autoConnectMs = autoConnectMs || 0;
    this.__$$_coder = new RpcCoder();
    this.__$$_endpointIndex = -1;
    this.__$$_endpoints = endpoints;
    this.__$$_headers = headers;
    this.__$$_websocket = null;
    this.__$$_stats = {
      active: { requests: 0, subscriptions: 0 },
      total: defaultEndpointStats()
    };
    this.__$$_endpointStats = defaultEndpointStats();
    this.__$$_timeout = timeout || DEFAULT_TIMEOUT_MS;

    if (autoConnectMs && autoConnectMs > 0) {
      this.connectWithRetry().catch((): void => {
        // does not throw
      });
    }

    this.__$$_isReadyPromise = new Promise((resolve): void => {
      this.__$$_eventemitter.once('connected', (): void => {
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
   * @summary `true` when this provider supports clone()
   */
  public get isClonable (): boolean {
    return true;
  }

  /**
   * @summary Whether the node is connected or not.
   * @return {boolean} true if connected
   */
  public get isConnected (): boolean {
    return this.__$$_isConnected;
  }

  /**
   * @description Promise that resolves the first time we are connected and loaded
   */
  public get isReady (): Promise<WsProvider> {
    return this.__$$_isReadyPromise;
  }

  public get endpoint (): string {
    return this.__$$_endpoints[this.__$$_endpointIndex];
  }

  /**
   * @description Returns a clone of the object
   */
  public clone (): WsProvider {
    return new WsProvider(this.__$$_endpoints);
  }

  protected selectEndpointIndex (endpoints: string[]): number {
    return (this.__$$_endpointIndex + 1) % endpoints.length;
  }

  /**
   * @summary Manually connect
   * @description The [[WsProvider]] connects automatically by default, however if you decided otherwise, you may
   * connect manually using this method.
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  public async connect (): Promise<void> {
    if (this.__$$_websocket) {
      throw new Error('WebSocket is already connected');
    }

    try {
      this.__$$_endpointIndex = this.selectEndpointIndex(this.__$$_endpoints);

      // the as here is Deno-specific - not available on the globalThis
      this.__$$_websocket = typeof xglobal.WebSocket !== 'undefined' && isChildClass(xglobal.WebSocket as unknown as Constructor, WebSocket)
        ? new WebSocket(this.endpoint)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - WS may be an instance of ws, which supports options
        : new WebSocket(this.endpoint, undefined, {
          headers: this.__$$_headers
        });

      if (this.__$$_websocket) {
        this.__$$_websocket.onclose = this.__$$_onSocketClose;
        this.__$$_websocket.onerror = this.__$$_onSocketError;
        this.__$$_websocket.onmessage = this.__$$_onSocketMessage;
        this.__$$_websocket.onopen = this.__$$_onSocketOpen;
      }

      // timeout any handlers that have not had a response
      this.__$$_timeoutId = setInterval(() => this.__$$_timeoutHandlers(), TIMEOUT_INTERVAL);
    } catch (error) {
      l.error(error);

      this.__$$_emit('error', error);

      throw error;
    }
  }

  /**
   * @description Connect, never throwing an error, but rather forcing a retry
   */
  public async connectWithRetry (): Promise<void> {
    if (this.__$$_autoConnectMs > 0) {
      try {
        await this.connect();
      } catch {
        setTimeout((): void => {
          this.connectWithRetry().catch((): void => {
            // does not throw
          });
        }, this.__$$_autoConnectMs);
      }
    }
  }

  /**
   * @description Manually disconnect from the connection, clearing auto-connect logic
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  public async disconnect (): Promise<void> {
    // switch off autoConnect, we are in manual mode now
    this.__$$_autoConnectMs = 0;

    try {
      if (this.__$$_websocket) {
        // 1000 - Normal closure; the connection successfully completed
        this.__$$_websocket.close(1000);
      }
    } catch (error) {
      l.error(error);

      this.__$$_emit('error', error);

      throw error;
    }
  }

  /**
   * @description Returns the connection stats
   */
  public get stats (): ProviderStats {
    return {
      active: {
        requests: Object.keys(this.__$$_handlers).length,
        subscriptions: Object.keys(this.__$$_subscriptions).length
      },
      total: this.__$$_stats.total
    };
  }

  public get endpointStats (): EndpointStats {
    return this.__$$_endpointStats;
  }

  /**
   * @summary Listens on events after having subscribed using the [[subscribe]] function.
   * @param  {ProviderInterfaceEmitted} type Event
   * @param  {ProviderInterfaceEmitCb}  sub  Callback
   * @return unsubscribe function
   */
  public on (type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void {
    this.__$$_eventemitter.on(type, sub);

    return (): void => {
      this.__$$_eventemitter.removeListener(type, sub);
    };
  }

  /**
   * @summary Send JSON data using WebSockets to configured HTTP Endpoint or queue.
   * @param method The RPC methods to execute
   * @param params Encoded parameters as applicable for the method
   * @param subscription Subscription details (internally used)
   */
  public send <T = any> (method: string, params: unknown[], isCacheable?: boolean, subscription?: SubscriptionHandler): Promise<T> {
    this.__$$_endpointStats.requests++;
    this.__$$_stats.total.requests++;

    const [id, body] = this.__$$_coder.encodeJson(method, params);
    let resultPromise: Promise<T> | null = isCacheable
      ? this.__$$_callCache.get(body)
      : null;

    if (!resultPromise) {
      resultPromise = this.__$$_send(id, body, method, params, subscription);

      if (isCacheable) {
        this.__$$_callCache.set(body, resultPromise);
      }
    } else {
      this.__$$_endpointStats.cached++;
      this.__$$_stats.total.cached++;
    }

    return resultPromise;
  }

  private async __$$_send <T> (id: number, body: string, method: string, params: unknown[], subscription?: SubscriptionHandler): Promise<T> {
    return new Promise<T>((resolve, reject): void => {
      try {
        if (!this.isConnected || this.__$$_websocket === null) {
          throw new Error('WebSocket is not connected');
        }

        const callback = (error?: Error | null, result?: T): void => {
          error
            ? reject(error)
            : resolve(result as T);
        };

        l.debug(() => ['calling', method, body]);

        this.__$$_handlers[id] = {
          callback,
          method,
          params,
          start: Date.now(),
          subscription
        };
        this.__$$_endpointStats.bytesSent += body.length;
        this.__$$_stats.total.bytesSent += body.length;
        this.__$$_websocket.send(body);
      } catch (error) {
        this.__$$_endpointStats.errors++;
        this.__$$_stats.total.errors++;

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
    this.__$$_endpointStats.subscriptions++;
    this.__$$_stats.total.subscriptions++;

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
    if (isUndefined(this.__$$_subscriptions[subscription])) {
      l.debug(() => `Unable to find active subscription=${subscription}`);

      return false;
    }

    delete this.__$$_subscriptions[subscription];

    try {
      return this.isConnected && !isNull(this.__$$_websocket)
        ? this.send<boolean>(method, [id])
        : true;
    } catch {
      return false;
    }
  }

  private __$$_emit = (type: ProviderInterfaceEmitted, ...args: unknown[]): void => {
    this.__$$_eventemitter.emit(type, ...args);
  };

  private __$$_onSocketClose = (event: CloseEvent): void => {
    const error = new Error(`disconnected from ${this.endpoint}: ${event.code}:: ${event.reason || getWSErrorString(event.code)}`);

    if (this.__$$_autoConnectMs > 0) {
      l.error(error.message);
    }

    this.__$$_isConnected = false;

    if (this.__$$_websocket) {
      this.__$$_websocket.onclose = null;
      this.__$$_websocket.onerror = null;
      this.__$$_websocket.onmessage = null;
      this.__$$_websocket.onopen = null;
      this.__$$_websocket = null;
    }

    if (this.__$$_timeoutId) {
      clearInterval(this.__$$_timeoutId);
      this.__$$_timeoutId = null;
    }

    // reject all hanging requests
    eraseRecord(this.__$$_handlers, (h) => {
      try {
        h.callback(error, undefined);
      } catch (err) {
        // does not throw
        l.error(err);
      }
    });
    eraseRecord(this.__$$_waitingForId);

    // Reset stats for active endpoint
    this.__$$_endpointStats = defaultEndpointStats();

    this.__$$_emit('disconnected');

    if (this.__$$_autoConnectMs > 0) {
      setTimeout((): void => {
        this.connectWithRetry().catch(() => {
          // does not throw
        });
      }, this.__$$_autoConnectMs);
    }
  };

  private __$$_onSocketError = (error: Event): void => {
    l.debug(() => ['socket error', error]);
    this.__$$_emit('error', error);
  };

  private __$$_onSocketMessage = (message: MessageEvent<string>): void => {
    l.debug(() => ['received', message.data]);

    this.__$$_endpointStats.bytesRecv += message.data.length;
    this.__$$_stats.total.bytesRecv += message.data.length;

    const response = JSON.parse(message.data) as JsonRpcResponse;

    return isUndefined(response.method)
      ? this.__$$_onSocketMessageResult(response)
      : this.__$$_onSocketMessageSubscribe(response);
  };

  private __$$_onSocketMessageResult = (response: JsonRpcResponse): void => {
    const handler = this.__$$_handlers[response.id];

    if (!handler) {
      l.debug(() => `Unable to find handler for id=${response.id}`);

      return;
    }

    try {
      const { method, params, subscription } = handler;
      const result = this.__$$_coder.decodeResponse(response) as string;

      // first send the result - in case of subs, we may have an update
      // immediately if we have some queued results already
      handler.callback(null, result);

      if (subscription) {
        const subId = `${subscription.type}::${result}`;

        this.__$$_subscriptions[subId] = objectSpread({}, subscription, {
          method,
          params
        });

        // if we have a result waiting for this subscription already
        if (this.__$$_waitingForId[subId]) {
          this.__$$_onSocketMessageSubscribe(this.__$$_waitingForId[subId]);
        }
      }
    } catch (error) {
      this.__$$_endpointStats.errors++;
      this.__$$_stats.total.errors++;

      handler.callback(error as Error, undefined);
    }

    delete this.__$$_handlers[response.id];
  };

  private __$$_onSocketMessageSubscribe = (response: JsonRpcResponse): void => {
    const method = ALIASES[response.method as string] || response.method || 'invalid';
    const subId = `${method}::${response.params.subscription}`;
    const handler = this.__$$_subscriptions[subId];

    if (!handler) {
      // store the JSON, we could have out-of-order subid coming in
      this.__$$_waitingForId[subId] = response;

      l.debug(() => `Unable to find handler for subscription=${subId}`);

      return;
    }

    // housekeeping
    delete this.__$$_waitingForId[subId];

    try {
      const result = this.__$$_coder.decodeResponse(response);

      handler.callback(null, result);
    } catch (error) {
      this.__$$_endpointStats.errors++;
      this.__$$_stats.total.errors++;

      handler.callback(error as Error, undefined);
    }
  };

  private __$$_onSocketOpen = (): boolean => {
    if (this.__$$_websocket === null) {
      throw new Error('WebSocket cannot be null in onOpen');
    }

    l.debug(() => ['connected to', this.endpoint]);

    this.__$$_isConnected = true;

    this.__$$_resubscribe();

    this.__$$_emit('connected');

    return true;
  };

  private __$$_resubscribe = (): void => {
    const subscriptions = this.__$$_subscriptions;

    this.__$$_subscriptions = {};

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

  private __$$_timeoutHandlers = (): void => {
    const now = Date.now();
    const ids = Object.keys(this.__$$_handlers);

    for (let i = 0; i < ids.length; i++) {
      const handler = this.__$$_handlers[ids[i]];

      if ((now - handler.start) > this.__$$_timeout) {
        try {
          handler.callback(new Error(`No response received from RPC endpoint in ${this.__$$_timeout / 1000}s`), undefined);
        } catch {
          // ignore
        }

        this.__$$_endpointStats.timeout++;
        this.__$$_stats.total.timeout++;
        delete this.__$$_handlers[ids[i]];
      }
    }
  };
}
