// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { ProviderInterface } from '../types';

require('./polyfill');

const JsonRpcCoder = require('../jsonRpcCoder');

module.exports = class HttpProvider extends JsonRpcCoder implements ProviderInterface {
  _endpoint: string;

  constructor (endpoint: string) {
    super();

    this._endpoint = endpoint;
  }

  async send (method: string, params: Array<any>): Promise<any> {
    const body = this.encodeJson(method, params);
    const response = await fetch(this._endpoint, {
      body,
      headers: {
        'Accept': 'application/json',
        'Content-Length': `${body.length}`,
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error(`[${response.status}]: ${response.statusText}`);
    }

    const result = await response.json();

    return this.decodeResponse(result);
  }
};
