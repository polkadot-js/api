// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { MockState, MockState$Storage } from './types';

const interfaces = require('@polkadot/api-jsonrpc');
const l = require('@polkadot/util/logger')('api-mock');

const SUBSCRIPTIONS = Array.prototype.concat.apply(
  [], Object.keys(interfaces).map((section) => {
    return Object
      .keys(interfaces[section].methods)
      .filter((method) => interfaces[section].methods[method].isSubscription)
      .map((method) => `subscribe_${method}`);
  })
);

const REQUESTS = {
  'state_getStorage': (storage: MockState$Storage, params: Array<mixed>): Uint8Array => {
    // flowlint-next-line unclear-type:off
    return storage[((params[0]: any): string)];
  }
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
    l,
    requests: Object.assign({}, REQUESTS),
    storage,
    subscriptionId: 0,
    subscriptionMap: {},
    subscriptions
  };
};
