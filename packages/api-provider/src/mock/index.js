// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface } from '../types';

const mocks = require('./mocks');
const send = require('./send');
const state = require('./state');
const subscribe = require('./subscribe');
const unsubscribe = require('./unsubscribe');

module.exports = function mockProvider (): ProviderInterface {
  const self = state();

  mocks(self);

  return {
    isConnected: (): boolean =>
      true,
    send: (method: string, params: Array<mixed>): Promise<mixed> =>
      send(self, method, params),
    subscribe: (method: string, ...params: Array<mixed>): Promise<number> =>
      subscribe(self, method, params),
    unsubscribe: (id: number): Promise<boolean> =>
      unsubscribe(self, id)
  };
};
