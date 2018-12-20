// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';
import { Extrinsic } from '@polkadot/types/index';
import { hexToU8a } from '@polkadot/util';

import extrinsics from './static';

const keyring = testingPairs();

describe('extrinsics', () => {
  it('encodes extrinsic correctly (nobody)', () => {
    expect(
      new Extrinsic(
        extrinsics.timestamp.set(10101)
      ).sign(
        keyring.nobody,
        1234,
        new Uint8Array()
      ).toU8a(true)
    ).toEqual(
      new Uint8Array([
        // version
        0x81,
        // prefix
        0xff,
        // publicKey
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        // signature
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        // account nonce
        210, 4, 0, 0, 0, 0, 0, 0,
        // era
        0,
        // call index
        2, 0,
        // values
        117, 39, 0, 0, 0, 0, 0, 0
      ])
    );
  });

  it('encodes an actual transfer (actual data)', () => {
    expect(
      new Extrinsic(
        extrinsics.balances.transfer(keyring.bob.publicKey(), 6969)
      ).sign(keyring.alice, 0, '0xec7afaf1cca720ce88c1d1b689d81f0583cc15a97d621cf046dd9abf605ef22f').toU8a()
    ).toEqual(
      hexToU8a(
        '0x' +
        // length
        '7902' +
        // version
        '81' +
        // prefix + alice's publicKey
        'ffd172a74cda4c865912c32ba0a80a57ae69abae410e5ccb59dee84e2f4432db4f' +
        // signature
        '2b0d3b52ed0c145542f7b20a2fee2cf082b1d90c2a7bf7b3ec1e20a3eaf2aa92' +
        '9349c137d5df7f8499532fe3d4abe4e15f0ffd1c184b4c0277729d549120e805' +
        // nonce
        '0000000000000000' +
        // era
        '00' +
        // call index
        '0100' +
        // prefix + bob's publicKey
        'ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' +
        '391b0000000000000000000000000000'
      )
    );
  });
});
