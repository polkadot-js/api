// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Logger } from '@polkadot/util/types';
import { RpcCoder } from '../coder/json/types';
import { ProviderInterface, ProviderInterface$Callback, ProviderInterface$Emitted, ProviderInterface$EmitCb } from '../types';

import './polyfill';

import assert from '@polkadot/util/assert';
import logger from '@polkadot/util/logger';

import coder from '../coder/json';

const ERROR_SUBSCRIBE = 'HTTP Provider does not have subscriptions, use WebSockets instead';

/**
 * @name HttpProvider
 * @summary The HTTP Provider allows sending requests using HTTP.
 * @description It does not support subscriptions so you won't be able to listen to events
 * such as new blocks or balance changes. It is usually preferrable using the [[WsProvider]].
 *
 * @example
 * <BR><PRE><CODE>
 * import createApi from '@polkadot/api';
 * import WsProvider from '@polkadot/api-provider/ws';
 * <BR>
 * const provider = new WsProvider('http://127.0.0.1:9933');
 * const api = createApi(provider);
 * </CODE></PRE>
 *
 * @see [[WsProvider]]
 */
export default class HttpProvider implements ProviderInterface {
  private coder: RpcCoder;
  private endpoint: string;
  private l: Logger;

  /**
   * @param {string} endpoint The endpoint url starting with http://
   */
  constructor (endpoint: string) {
    assert(/^(https|http):\/\//.test(endpoint), `Endpoint should start with 'http://', received '${endpoint}'`);

    this.coder = coder();
    this.endpoint = endpoint;
    this.l = logger('api-http');
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
    this.l.error(`HTTP Provider does not have 'on' emitters, use WebSockets instead`);
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
    this.l.error(ERROR_SUBSCRIBE);

    throw new Error(ERROR_SUBSCRIBE);
  }

  /**
   * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
   */
  async unsubscribe (type: string, method: string, id: number): Promise<boolean> {
    this.l.error(ERROR_SUBSCRIBE);

    throw new Error(ERROR_SUBSCRIBE);
  }
}
