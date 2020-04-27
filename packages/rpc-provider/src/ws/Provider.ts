// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable @typescript-eslint/camelcase */

import { JsonRpcResponse, ProviderInterface, ProviderInterfaceCallback, ProviderInterfaceEmitted, ProviderInterfaceEmitCb } from '../types';

import EventEmitter from 'eventemitter3';
import { assert, isNull, isUndefined, logger } from '@polkadot/util';

import Coder from '../coder';
import defaults from '../defaults';
import getWSClass from './getWSClass';

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

interface WSProviderInterface extends ProviderInterface {
  connect (): void;
}

const ALIASSES: { [index: string]: string } = {
  chain_finalisedHead: 'chain_finalizedHead',
  chain_subscribeFinalisedHeads: 'chain_subscribeFinalizedHeads',
  chain_unsubscribeFinalisedHeads: 'chain_unsubscribeFinalizedHeads'
};

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
 * import WsProvider from '@polkadot/rpc-provider/ws';
 *
 * const provider = new WsProvider('ws://127.0.0.1:9944');
 * const api = new Api(provider);
 * ```
 *
 * @see [[HttpProvider]]
 */
export default class WsProvider implements WSProviderInterface {
  readonly #coder: Coder;

  readonly #endpoint: string;

  readonly #eventemitter: EventEmitter;

  readonly #handlers: Record<string, WsStateAwaiting> = {};

  readonly #queued: Record<string, string> = {};

  readonly #waitingForId: Record<string, JsonRpcResponse> = {};

  #autoConnectMs: number;

  #isConnected = false;

  #subscriptions: Record<string, WsStateSubscription> = {};

  #websocket: WebSocket | null;

  /**
   * @param {string}  endpoint    The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944`
   * @param {boolean} autoConnect Whether to connect automatically or not.
   */
  constructor (endpoint: string = defaults.WS_URL, autoConnectMs: number | false = 1000) {
    assert(/^(wss|ws):\/\//.test(endpoint), `Endpoint should start with 'ws://', received '${endpoint}'`);

    this.#eventemitter = new EventEmitter();
    this.#autoConnectMs = autoConnectMs || 0;
    this.#coder = new Coder();
    this.#endpoint = endpoint;
    this.#websocket = null;

    if (autoConnectMs > 0) {
      this.connect();
    }
  }

  /**
   * @summary `true` when this provider supports subscriptions
   */
  public get hasSubscriptions (): boolean {
    return true;
  }

  /**
   * @description Returns a clone of the object
   */
  public clone (): WsProvider {
    return new WsProvider(this.#endpoint);
  }

  /**
   * @summary Manually connect
   * @description The [[WsProvider]] connects automatically by default, however if you decided otherwise, you may
   * connect manually using this method.
   */
  public async connect (): Promise<void> {
    try {
      const WS = await getWSClass();

      this.#websocket = new WS(this.#endpoint);
      this.#websocket.onclose = this.#onSocketClose;
      this.#websocket.onerror = this.#onSocketError;
      this.#websocket.onmessage = this.#onSocketMessage;
      this.#websocket.onopen = this.#onSocketOpen;
    } catch (error) {
      l.error(error);
    }
  }

  /**
   * @description Manually disconnect from the connection, clearing autoconnect logic
   */
  public disconnect (): void {
    if (isNull(this.#websocket)) {
      throw new Error('Cannot disconnect on a non-open websocket');
    }

    // switch off autoConnect, we are in manual mode now
    this.#autoConnectMs = 0;

    // 1000 - Normal closure; the connection successfully completed
    this.#websocket.close(1000);
    this.#websocket = null;
  }

  /**
   * @summary Whether the node is connected or not.
   * @return {boolean} true if connected
   */
  public isConnected (): boolean {
    return this.#isConnected;
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
   * @param params Encoded paramaters as appliucable for the method
   * @param subscription Subscription details (internally used)
   */
  public send (method: string, params: any[], subscription?: SubscriptionHandler): Promise<any> {
    return new Promise((resolve, reject): void => {
      try {
        const json = this.#coder.encodeJson(method, params);
        const id = this.#coder.getId();

        const callback = (error?: Error | null, result?: any): void => {
          error
            ? reject(error)
            : resolve(result);
        };

        l.debug((): string[] => ['calling', method, json]);

        this.#handlers[id] = {
          callback,
          method,
          params,
          subscription
        };

        if (this.isConnected() && !isNull(this.#websocket)) {
          this.#websocket.send(json);
        } else {
          this.#queued[id] = json;
        }
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
  public async subscribe (type: string, method: string, params: any[], callback: ProviderInterfaceCallback): Promise<number> {
    const id = await this.send(method, params, { callback, type });

    return id as number;
  }

  /**
   * @summary Allows unsubscribing to subscriptions made with [[subscribe]].
   */
  public async unsubscribe (type: string, method: string, id: number): Promise<boolean> {
    const subscription = `${type}::${id}`;

    // FIXME This now could happen with re-subscriptions. The issue is that with a re-sub
    // the assigned id now does not match what the API user originally received. It has
    // a slight complication in solving - since we cannot rely on the send id, but rather
    // need to find the actual subscription id to map it
    if (isUndefined(this.#subscriptions[subscription])) {
      l.debug((): string => `Unable to find active subscription=${subscription}`);

      return false;
    }

    delete this.#subscriptions[subscription];

    const result = await this.send(method, [id]);

    return result as boolean;
  }

  #emit = (type: ProviderInterfaceEmitted, ...args: any[]): void => {
    this.#eventemitter.emit(type, ...args);
  }

  #onSocketClose = (event: CloseEvent): void => {
    if (this.#autoConnectMs > 0) {
      l.error(`disconnected from ${this.#endpoint} code: '${event.code}' reason: '${event.reason}'`);
    }

    this.#isConnected = false;
    this.#emit('disconnected');

    if (this.#autoConnectMs > 0) {
      setTimeout((): void => {
        this.connect();
      }, this.#autoConnectMs);
    }
  }

  #onSocketError = (error: Event): void => {
    l.debug((): any => ['socket error', error]);
    this.#emit('error', error);
  }

  #onSocketMessage = (message: MessageEvent): void => {
    l.debug((): any => ['received', message.data]);

    const response: JsonRpcResponse = JSON.parse(message.data as string);

    return isUndefined(response.method)
      ? this.#onSocketMessageResult(response)
      : this.#onSocketMessageSubscribe(response);
  }

  #onSocketMessageResult = (response: JsonRpcResponse): void => {
    const handler = this.#handlers[response.id];

    if (!handler) {
      l.debug((): string => `Unable to find handler for id=${response.id}`);

      return;
    }

    try {
      const { method, params, subscription } = handler;
      const result = this.#coder.decodeResponse(response);

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
    const method = ALIASSES[response.method as string] || response.method;
    const subId = `${method}::${response.params.subscription}`;
    const handler = this.#subscriptions[subId];

    if (!handler) {
      // store the JSON, we could have out-of-order subid coming in
      this.#waitingForId[subId] = response;

      l.debug((): string => `Unable to find handler for subscription=${subId}`);

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

    l.debug((): any[] => ['connected to', this.#endpoint]);

    this.#isConnected = true;

    this.#emit('connected');
    this.#sendQueue();
    this.#resubscribe();

    return true;
  }

  #resubscribe = (): void => {
    const subscriptions = this.#subscriptions;

    this.#subscriptions = {};

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    Object.keys(subscriptions).forEach(async (id): Promise<void> => {
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
    });
  }

  #sendQueue = (): void => {
    Object.keys(this.#queued).forEach((id): void => {
      try {
        // we have done the websocket check in onSocketOpen, if an issue, will catch it
        (this.#websocket as WebSocket).send(
          this.#queued[id]
        );

        delete this.#queued[id];
      } catch (error) {
        l.error(error);
      }
    });
  }
}
