// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { MockState, MockState$Storage } from './types';

const EventEmitter = require('eventemitter3');
const interfaces = require('@polkadot/jsonrpc');
const u8aToHex = require('@polkadot/util/u8a/toHex');
const l = require('@polkadot/util/logger')('api-mock');

const SUBSCRIPTIONS = Array.prototype.concat.apply(
  [], Object.keys(interfaces).map((section) => {
    return Object
      .keys(interfaces[section].public)
      .filter((method) => interfaces[section].public[method].isSubscription)
      .map((method) => `subscribe_${method}`);
  })
);

const REQUESTS = {
  'state_getStorage': (storage: MockState$Storage, params: Array<mixed>): string => {
    return u8aToHex(
      // flowlint-next-line unclear-type:off
      storage[((params[0]: any): string)]
    );
  },
  'system_chain': (): string => 'mockChain',
  'system_name': (): string => 'mockClient',
  'system_version': (): string => '9.8.7'
};

module.exports = function state (): MockState {
  const storage = {};
  const subscriptions = SUBSCRIPTIONS.reduce((subscriptions, name) => {
    subscriptions[name] = {
      callbacks: {},
      lastValue: null
    };

    return subscriptions;
  }, {});

  return {
    emitter: new EventEmitter(),
    l,
    requests: Object.assign({}, REQUESTS),
    storage,
    subscriptionId: 0,
    subscriptionMap: {},
    subscriptions
  };
};
