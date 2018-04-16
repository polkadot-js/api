// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { MockState, MockState$Subscription$Callback } from './types';

const BN = require('bn.js');
const headerEncode = require('@polkadot/primitives-json/header/encode');
const bnToU8a = require('@polkadot/util/bn/toU8a');
const randomAsU8a = require('@polkadot/util-crypto/random/asU8a');

function makeBlockHeader (prevNumber: BN) {
  const blockNumber = prevNumber.addn(1);

  return {
    digest: {
      logs: []
    },
    extrinsicsRoot: randomAsU8a(),
    number: blockNumber,
    parentHash: prevNumber.eqn(-1)
      ? new Uint8Array(32)
      : bnToU8a(prevNumber, 256),
    stateRoot: bnToU8a(blockNumber, 256)
  };
}

module.exports = function mocks ({ subscriptions }: MockState): void {
  let newHead = makeBlockHeader(new BN(-1));

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

    updateSubs('subscribe_newHead', headerEncode(newHead));
  }, 5000);
};
