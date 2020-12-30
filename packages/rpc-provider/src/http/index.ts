// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ProviderInterface, ProviderInterfaceCallback, ProviderInterfaceEmitCb, ProviderInterfaceEmitted } from '../types';

import { assert, logger } from '@polkadot/util';
import { fetch } from '@polkadot/x-fetch';

import { RpcCoder } from '../coder';
import defaults from '../defaults';

const ERROR_SUBSCRIBE = 'HTTP Provider does not have subscriptions, use WebSockets instead';

const l = logger('api-http');

/**
 * # @polkadot/rpc-provider/https
 *
 * @name HttpProvider
 *
 * @description The HTTP Provider allows sending requests using HTTP to a HTTP RPC server TCP port. It does not support subscriptions so you won't be able to listen to events such as new blocks or balance changes. It is usually preferrable using the [[WsProvider]].
 *
 * @example
 * <BR>
 *
 * ```javascript
 * import Api from '@polkadot/api/promise';
 * import HttpProvider from '@polkadot/rpc-provider/http';
 *
 * const provider = new HttpProvider('http://127.0.0.1:9933');
 * const api = new Api(provider);
 * ```
 *
 * @see [[WsProvider]]
 */
export class HttpProvider implements ProviderInterface {
  readonly #coder: RpcCoder;

  readonly #endpoint: string;

  readonly #headers: Record<string, string>;

  /**
   * @param {string} endpoint The endpoint url starting with http://
   */
  constructor (endpoint: string = defaults.HTTP_URL, headers: Record<string, string> = {}) {
    assert(/^(https|http):\/\//.test(endpoint), `Endpoint should start with 'http://', received '${endpoint}'`);

    this.#coder = new RpcCoder();
    this.#endpoint = endpoint;
    this.#headers = headers;
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
    throw new Error('Unimplemented');
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public on (type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void {
    l.error('HTTP Provider does not have \'on\' emitters, use WebSockets instead');

    return (): void => {
      // noop
    };
  }

  /**
   * @summary Send HTTP POST Request with Body to configured HTTP Endpoint.
   */
  public async send (method: string, params: any[]): Promise<any> {
    const body = this.#coder.encodeJson(method, params);
    const response = await fetch(this.#endpoint, {
      body,
      headers: {
        Accept: 'application/json',
        'Content-Length': `${body.length}`,
        'Content-Type': 'application/json',
        ...this.#headers
      },
      method: 'POST'
    });

    assert(response.ok, `[${response.status}]: ${response.statusText}`);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await response.json();

    return this.#coder.decodeResponse(result);
  }

  /**
   * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/require-await
  public async subscribe (types: string, method: string, params: any[], cb: ProviderInterfaceCallback): Promise<number> {
    l.error(ERROR_SUBSCRIBE);

    throw new Error(ERROR_SUBSCRIBE);
  }

  /**
   * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/require-await
  public async unsubscribe (type: string, method: string, id: number): Promise<boolean> {
    l.error(ERROR_SUBSCRIBE);

    throw new Error(ERROR_SUBSCRIBE);
  }
}
