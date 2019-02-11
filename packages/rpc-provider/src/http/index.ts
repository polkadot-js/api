// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface, ProviderInterface$Callback, ProviderInterface$Emitted, ProviderInterface$EmitCb } from '../types';

import './polyfill';

import { assert, logger } from '@polkadot/util';

import Coder from '../coder';
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
export default class HttpProvider implements ProviderInterface {
  private coder: Coder;
  private endpoint: string;

  /**
   * @param {string} endpoint The endpoint url starting with http://
   */
  constructor (endpoint: string = defaults.HTTP_URL) {
    assert(/^(https|http):\/\//.test(endpoint), `Endpoint should start with 'http://', received '${endpoint}'`);

    this.coder = new Coder();
    this.endpoint = endpoint;
  }

  /**
   * @summary `true` when this provider supports subscriptions
   */
  get hasSubscriptions (): boolean {
    return false;
  }

  /**
   * @description Returns a clone of the object
   */
  clone (): HttpProvider {
    throw new Error('Unimplemented');
  }

  /**
   * @description Manually disconnect from the connection
   */
  disconnect (): void {
    // noop
  }

  /**
   * @summary Whether the node is connected or not.
   * @return {boolean} true if connected
   */
  isConnected (): boolean {
    return true;
  }

  /**
   * @summary Events are not supported with the HttpProvider, see [[WsProvider]].
   * @description HTTP Provider does not have 'on' emitters. WebSockets should be used instead.
   */
  on (type: ProviderInterface$Emitted, sub: ProviderInterface$EmitCb): void {
    l.error(`HTTP Provider does not have 'on' emitters, use WebSockets instead`);
  }

  /**
   * @summary Send HTTP POST Request with Body to configured HTTP Endpoint.
   */
  async send (method: string, params: Array<any>): Promise<any> {
    const body = this.coder.encodeJson(method, params);
    const response = await fetch(this.endpoint, {
      body,
      headers: {
        'Accept': 'application/json',
        'Content-Length': `${body.length}`,
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    assert(response.ok, `[${response.status}]: ${response.statusText}`);

    const result = await response.json();

    return this.coder.decodeResponse(result);
  }

  /**
   * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
   */
  async subscribe (types: string, method: string, params: Array<any>, cb: ProviderInterface$Callback): Promise<number> {
    l.error(ERROR_SUBSCRIBE);

    throw new Error(ERROR_SUBSCRIBE);
  }

  /**
   * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
   */
  async unsubscribe (type: string, method: string, id: number): Promise<boolean> {
    l.error(ERROR_SUBSCRIBE);

    throw new Error(ERROR_SUBSCRIBE);
  }
}
