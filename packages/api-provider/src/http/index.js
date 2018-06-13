// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface, ProviderInterface$Callback, ProviderInterface$Emitted, ProviderInterface$EmitCb } from '../types';

require('./polyfill');

const on = require('./on');
const send = require('./send');
const subscribe = require('./subscribe');
const state = require('./state');
const unsubscribe = require('./unsubscribe');

module.exports = function httpProvider (endpoint: string): ProviderInterface {
  const self = state(endpoint);

  return {
    isConnected: (): boolean =>
      true,
    on: (type: ProviderInterface$Emitted, sub: ProviderInterface$EmitCb): void =>
      on(self, type, sub),
    send: (method: string, params: Array<mixed>): Promise<mixed> =>
      send(self, method, params),
    subscribe: (method: string, params: Array<mixed>, cb: ProviderInterface$Callback): Promise<number> =>
      subscribe(self, method, params, cb),
    unsubscribe: (method: string, id: number): Promise<boolean> =>
      unsubscribe(self, method, id)
  };
};
