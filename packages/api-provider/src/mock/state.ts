// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MockState, MockState$Storage } from './types';

import EventEmitter from 'eventemitter3';
import interfaces from '@polkadot/jsonrpc';
import u8aToHex from '@polkadot/util/u8a/toHex';
import logger from '@polkadot/util/logger';

const l =logger('api-mock');

const SUBSCRIPTIONS = Array.prototype.concat.apply(
  [], Object.keys(interfaces).map((section) => {
    return Object
      .keys(interfaces[section].public)
      .filter((method) => interfaces[section].public[method].isSubscription)
      .map((method) => `subscribe_${method}`);
  })
);

const REQUESTS = {
  'state_getStorage': (storage: MockState$Storage, params: Array<any>): string => {
    return u8aToHex(
      storage[((params[0]: any): string)]
    );
  },
  'system_chain': (): string => 'mockChain',
  'system_name': (): string => 'mockClient',
  'system_version': (): string => '9.8.7'
};

export default function state (): MockState {
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
}
