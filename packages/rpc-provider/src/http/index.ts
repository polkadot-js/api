// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { JsonRpcResponse, ProviderInterface, ProviderInterfaceCallback, ProviderInterfaceEmitCb, ProviderInterfaceEmitted, ProviderStats } from '../types.js';

import { logger } from '@polkadot/util';
import { fetch } from '@polkadot/x-fetch';

import { RpcCoder } from '../coder/index.js';
import defaults from '../defaults.js';
import { LRUCache } from '../lru.js';

const ERROR_SUBSCRIBE = 'HTTP Provider does not have subscriptions, use WebSockets instead';

const l = logger('api-http');

/**
 * # @polkadot/rpc-provider
 *
 * @name HttpProvider
 *
 * @description The HTTP Provider allows sending requests using HTTP to a HTTP RPC server TCP port. It does not support subscriptions so you won't be able to listen to events such as new blocks or balance changes. It is usually preferable using the [[WsProvider]].
 *
 * @example
 * <BR>
 *
 * ```javascript
 * import Api from '@polkadot/api/promise';
 * import { HttpProvider } from '@polkadot/rpc-provider';
 *
 * const provider = new HttpProvider('http://127.0.0.1:9933');
 * const api = new Api(provider);
 * ```
 *
 * @see [[WsProvider]]
 */
export class HttpProvider implements ProviderInterface {
  private readonly __$$_callCache = new LRUCache();
  private readonly __$$_coder: RpcCoder;
  private readonly __$$_endpoint: string;
  private readonly __$$_headers: Record<string, string>;
  private readonly __$$_stats: ProviderStats;

  /**
   * @param {string} endpoint The endpoint url starting with http://
   */
  constructor (endpoint: string = defaults.HTTP_URL, headers: Record<string, string> = {}) {
    if (!/^(https|http):\/\//.test(endpoint)) {
      throw new Error(`Endpoint should start with 'http://' or 'https://', received '${endpoint}'`);
    }

    this.__$$_coder = new RpcCoder();
    this.__$$_endpoint = endpoint;
    this.__$$_headers = headers;
    this.__$$_stats = {
      active: { requests: 0, subscriptions: 0 },
      total: { bytesRecv: 0, bytesSent: 0, cached: 0, errors: 0, requests: 0, subscriptions: 0, timeout: 0 }
    };
  }

  /**
   * @summary `true` when this provider supports subscriptions
   */
  public get hasSubscriptions (): boolean {
    return false;
  }

  /**
   * @description Returns a clone of the object
   */
  public clone (): HttpProvider {
    return new HttpProvider(this.__$$_endpoint, this.__$$_headers);
  }

  /**
   * @description Manually connect from the connection
   */
  public async connect (): Promise<void> {
    // noop
  }

  /**
   * @description Manually disconnect from the connection
   */
  public async disconnect (): Promise<void> {
    // noop
  }

  /**
   * @description Returns the connection stats
   */
  public get stats (): ProviderStats {
    return this.__$$_stats;
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
    return true;
  }

  /**
   * @summary Events are not supported with the HttpProvider, see [[WsProvider]].
   * @description HTTP Provider does not have 'on' emitters. WebSockets should be used instead.
   */
  public on (_type: ProviderInterfaceEmitted, _sub: ProviderInterfaceEmitCb): () => void {
    l.error('HTTP Provider does not have \'on\' emitters, use WebSockets instead');

    return (): void => {
      // noop
    };
  }

  /**
   * @summary Send HTTP POST Request with Body to configured HTTP Endpoint.
   */
  public async send <T> (method: string, params: unknown[], isCacheable?: boolean): Promise<T> {
    this.__$$_stats.total.requests++;

    const [, body] = this.__$$_coder.encodeJson(method, params);
    let resultPromise: Promise<T> | null = isCacheable
      ? this.__$$_callCache.get(body) as Promise<T>
      : null;

    if (!resultPromise) {
      resultPromise = this.__$$_send(body);

      if (isCacheable) {
        this.__$$_callCache.set(body, resultPromise);
      }
    } else {
      this.__$$_stats.total.cached++;
    }

    return resultPromise;
  }

  private async __$$_send <T> (body: string): Promise<T> {
    this.__$$_stats.active.requests++;
    this.__$$_stats.total.bytesSent += body.length;

    try {
      const response = await fetch(this.__$$_endpoint, {
        body,
        headers: {
          Accept: 'application/json',
          'Content-Length': `${body.length}`,
          'Content-Type': 'application/json',
          ...this.__$$_headers
        },
        method: 'POST'
      });

      if (!response.ok) {
        throw new Error(`[${response.status}]: ${response.statusText}`);
      }

      const result = await response.text();

      this.__$$_stats.total.bytesRecv += result.length;

      const decoded = this.__$$_coder.decodeResponse(JSON.parse(result) as JsonRpcResponse) as T;

      this.__$$_stats.active.requests--;

      return decoded;
    } catch (e) {
      this.__$$_stats.active.requests--;
      this.__$$_stats.total.errors++;

      throw e;
    }
  }

  /**
   * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  public async subscribe (_types: string, _method: string, _params: unknown[], _cb: ProviderInterfaceCallback): Promise<number> {
    l.error(ERROR_SUBSCRIBE);

    throw new Error(ERROR_SUBSCRIBE);
  }

  /**
   * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  public async unsubscribe (_type: string, _method: string, _id: number): Promise<boolean> {
    l.error(ERROR_SUBSCRIBE);

    throw new Error(ERROR_SUBSCRIBE);
  }
}
