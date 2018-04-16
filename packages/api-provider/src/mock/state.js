// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { MockState } from './types';

const interfaces = require('@polkadot/api-jsonrpc');
const l = require('@polkadot/util/logger')('api-mock');

const METHODS = Array.prototype.concat.apply(
  [], Object.keys(interfaces).map((section) => {
    return Object
      .keys(interfaces[section].methods)
      .filter((method) => interfaces[section].methods[method].isSubscription)
      .map((method) => `${section}_${method}`);
  })
);

module.exports = function state (): MockState {
  const subscriptions = METHODS.reduce((subscriptions, name) => {
    subscriptions[name] = {
      callbacks: {},
      lastValue: null
    };

    return subscriptions;
  }, {});

  return {
    l,
    subscriptionId: 0,
    subscriptionMap: {},
    subscriptions
  };
};
