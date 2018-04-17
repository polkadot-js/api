// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

// FIME: This file is way too long and way too messy

import type { KeyringPair } from '@polkadot/util-keyring/types';
import type { MockState, MockState$Subscription$Callback } from './types';

const BN = require('bn.js');
const headerEncode = require('@polkadot/primitives-json/header/encode');
const bnToU8a = require('@polkadot/util/bn/toU8a');
const randomAsU8a = require('@polkadot/util-crypto/random/asU8a');
const testKeyring = require('@polkadot/util-keyring/testing');

const storageKey = require('./storageKey');

const keyring = testKeyring();

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

function updateSubs (subscriptions, method, value) {
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
}

function setStorageBn (storage, prefix: string, key: Uint8Array, value: BN): void {
  storage[storageKey(prefix, key)] = bnToU8a(value, 64, true);
}

module.exports = function mocks ({ storage, subscriptions }: MockState): void {
  let newHead = makeBlockHeader(new BN(-1));

  setInterval(() => {
    newHead = makeBlockHeader(newHead.number);

    Object.values(keyring).forEach((pair, index) => {
      // flowlint-next-line unclear-type:off
      const publicKey = ((pair: any): KeyringPair).publicKey();
      const balance = newHead.number.muln(3).iaddn(index);

      setStorageBn(storage, 'sta:bal:', publicKey, balance);
    });

    updateSubs(subscriptions, 'subscribe_newHead', headerEncode(newHead));
  }, 5000);
};
