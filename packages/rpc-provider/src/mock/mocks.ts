// Copyright 2017-2018 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

// FIXME: This file is way too long and way too messy

import { StorageFunction } from '@polkadot/types/StorageKey';
import { KeyringPair } from '@polkadot/util-keyring/types';
import { ProviderInterface$Emitted } from '../types';
import { MockState, MockState$Db, MockState$Subscriptions } from './types';

import BN from 'bn.js';
import storage from '@polkadot/storage/static';
import Header from '@polkadot/types/Header';
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
      : bnToU8a(prevNumber, 256, false),
    stateRoot: bnToU8a(blockNumber, 256, false)
  };
}

function updateSubs (subscriptions: MockState$Subscriptions, method: string, value: any) {
  subscriptions[method].lastValue = value;

  Object
    .values(subscriptions[method].callbacks)
    .forEach((cb) => {
      try {
        cb(null, value);
      } catch (error) {
        console.error(`Error on '${method}' subscription`, error);
      }
    });
}

function setStorageBn (db: MockState$Db, createKey: StorageFunction, value: BN | number, ...keyParams: Array<Uint8Array>): void {
  const keyValue = u8aToHex(
    createKey(...keyParams)
  );

  db[keyValue] = bnToU8a(value, 64, true);
}

export default function mocks ({ emitter, db, subscriptions }: MockState): void {
  let newHead = makeBlockHeader(new BN(-1));

  setInterval(() => {
    if (++emitIndex === emitEvents.length) {
      emitIndex = 0;
    }

    emitter.emit(emitEvents[emitIndex]);

    newHead = makeBlockHeader(newHead.number);

    keyring.getPairs().forEach(({ publicKey }: KeyringPair, index: number) => {
      setStorageBn(db, storage.balances.freeBalance, newHead.number.muln(3).iaddn(index), publicKey());
      setStorageBn(db, storage.system.accountNonce, newHead.number.addn(index), publicKey());
    });

    setStorageBn(db, storage.timestamp.now, Math.floor(Date.now() / 1000));

    updateSubs(subscriptions, 'chain_subscribeNewHead', new Header(newHead).toJSON());
  }, 5000);
}
