// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface, ProviderInterface$Callback } from '../types';
import type { HttpState } from './types';

require('./polyfill');

const assert = require('@polkadot/util/assert');

const coder = require('../jsonRpcCoder');
const send = require('./send');
const subscribe = require('./subscribe');
const unsubscribe = require('./unsubscribe');

module.exports = function httpProvider (endpoint: string): ProviderInterface {
  const self: HttpState = {
    coder: coder(),
    endpoint
  };

  assert(/^http:\/\//.test(endpoint), `Endpoint should start with 'http://', received '${endpoint}'`);

  return {
    isConnected: (): boolean =>
      true,
    send: (method: string, params: Array<mixed>): Promise<mixed> =>
      send(self, method, params),
    subscribe: (method: string, params: Array<mixed>, cb: ProviderInterface$Callback): Promise<number> =>
      subscribe(self, method, params, cb),
    unsubscribe: (id: number): Promise<boolean> =>
      unsubscribe(self, id)
  };
};
