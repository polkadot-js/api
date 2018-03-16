// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { MockState, MockState$Subscription$Callback } from './types';

module.exports = function mocks ({ subscriptions }: MockState): void {
  let blockNumber = 0;

  const updateSubs = (method, value) => {
    subscriptions[method].lastValue = value;

    Object
      .values(subscriptions[method].callbacks)
      .forEach((cb) => {
        try {
          // flowlint-next-line unclear-type:off
          ((cb: any): MockState$Subscription$Callback)(null, value);
        } catch (error) {
          console.error(`Error on '${method}' subscription`, error);
        }
      });
  };

  setInterval(() => {
    updateSubs('extra_getBlockNumber', `0x${(++blockNumber).toString(16)}`);
  }, 5000);

  setInterval(() => {
    updateSubs('extra_getClientTime', `0x${Date.now().toString(16)}`);
  }, 1000);
};
