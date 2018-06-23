// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

// FIME: This file is way too long and way too messy

import { Storage$Key } from '@polkadot/storage/types';
import { KeyringPair } from '@polkadot/util-keyring/types';
import { ProviderInterface$Emitted } from '../types';
import { MockState, MockState$Subscription$Callback } from './types';

import BN from 'bn.js';
import headerEncode from '@polkadot/primitives-json/header/encode';
import createKey from '@polkadot/storage/key';
import state from '@polkadot/storage';
import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aToHex from '@polkadot/util/u8a/toHex';
import randomAsU8a from '@polkadot/util-crypto/random/asU8a';
import testKeyring from '@polkadot/util-keyring/testing';

const keyring = testKeyring();

const emitEvents: Array<ProviderInterface$Emitted> = ['connected', 'disconnected'];
let emitIndex = 0;

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
        ((cb: any): MockState$Subscription$Callback)(null, value);
      } catch (error) {
        console.error(`Error on '${method}' subscription`, error);
      }
    });
}

function setStorageBn (storage, key: Storage$Key, value: BN | number, ...keyParams: Array<Uint8Array>): void {
  const keyValue = u8aToHex(
    createKey(key).apply(null, keyParams)
  );

  storage[keyValue] = bnToU8a(value, 64, true);
}

export default function mocks ({ emitter, storage, subscriptions }: MockState): void {
  let newHead = makeBlockHeader(new BN(-1));

  setInterval(() => {
    if (++emitIndex === emitEvents.length) {
      emitIndex = 0;
    }

    emitter.emit(emitEvents[emitIndex]);

    newHead = makeBlockHeader(newHead.number);

    keyring.getPairs().forEach(({ publicKey }: KeyringPair, index: number) => {
      setStorageBn(storage, state.staking.public.freeBalanceOf, newHead.number.muln(3).iaddn(index), publicKey());
      setStorageBn(storage, state.system.public.accountIndexOf, newHead.number.addn(index), publicKey());
    });

    setStorageBn(storage, state.timestamp.public.current, Math.floor(Date.now() / 1000));

    updateSubs(subscriptions, 'subscribe_newHead', headerEncode(newHead));
  }, 5000);
};
