// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';
import { Extrinsic } from '@polkadot/types';

import extrinsics from './static';

const keyring = testingPairs({ type: 'ed25519' }, false);

describe('extrinsics', (): void => {
  it('encodes an actual transfer (actual data)', (): void => {
    expect(
      new Extrinsic(
        extrinsics.balances.transfer(keyring.bob.publicKey, 6969)
      ).sign(keyring.alice, {
        blockHash: '0xec7afaf1cca720ce88c1d1b689d81f0583cc15a97d621cf046dd9abf605ef22f',
        nonce: 0
      }).toHex()
    ).toEqual(
      '0x' +
      '2502' + // length
      '81' + // signed flag
      'ffd172a74cda4c865912c32ba0a80a57ae69abae410e5ccb59dee84e2f4432db4f' + // who
      'fa4c192f6960a3bcdbdee5bcd9c26a3f971b131081912abcc31eab6a0b7589ab' + // sig1
      '7f99b81a01738cb5e2a911a19d5daa5c0b654d4b8dbc521a6b29090c6d205903' + // sig2
      '0000' + // nonce & era
      '0500' + // balances.transfer
      'ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' + // to
      'e56c' // value
    );
  });
});
