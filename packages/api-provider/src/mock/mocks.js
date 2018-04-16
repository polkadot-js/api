// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { MockState, MockState$Subscription$Callback } from './types';

const bnToU8a = require('@polkadot/util/bn/toU8a');
const randomAsHex = require('@polkadot/util-crypto/random/asHex');

function makeBlockHeader (prevNumber: number) {
  const blockNumber = prevNumber++;

  return {
    digest: {
      logs: []
    },
    extrinsicsRoot: randomAsHex(),
    number: blockNumber,
    parentHash: prevNumber === -1
      ? '0x0000000000000000000000000000000000000000000000000000000000000000'
      : bnToU8a(prevNumber, 256),
    stateRoot: bnToU8a(blockNumber, 256)
  };
}

module.exports = function mocks ({ subscriptions }: MockState): void {
  let newHead = makeBlockHeader(-1);

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
    newHead = makeBlockHeader(newHead.number);

    updateSubs('extra_getBlockNumber', `0x${(newHead.number).toString(16)}`);
    updateSubs('chain_newHead', newHead);
  }, 5000);

  setInterval(() => {
    updateSubs('extra_getClientTime', `0x${Date.now().toString(16)}`);
  }, 1000);
};
