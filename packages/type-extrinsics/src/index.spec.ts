// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';
import { Extrinsic, Method } from '@polkadot/types';

import extrinsics from './static';

const keyring = testingPairs({ type: 'ed25519' }, false);

describe('extrinsics', () => {
  it('encodes extrinsic correctly (nobody)', () => {
    expect(
      new Extrinsic(
        extrinsics.timestamp.set(10101),
        Method.findMeta(new Uint8Array([1, 0]), extrinsics)
      ).sign(
        keyring.nobody,
        {
          blockHash: new Uint8Array(),
          nonce: 1234
        }
      ).toU8a(true)
    ).toEqual(new Uint8Array([
      129, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 19, 0, 1, 0, 213, 157
    ]));
  });

  it('encodes an actual transfer (actual data)', () => {
    expect(
      new Extrinsic(
        extrinsics.balances.transfer(keyring.bob.publicKey, 6969),
        Method.findMeta(new Uint8Array([3, 0]), extrinsics)
      ).sign(keyring.alice, {
        blockHash: '0xec7afaf1cca720ce88c1d1b689d81f0583cc15a97d621cf046dd9abf605ef22f',
        nonce: 0
      }).toHex()
    ).toEqual(
      '0x' +
      '2502' + // length
      '81' + // signed flag
      'ffd172a74cda4c865912c32ba0a80a57ae69abae410e5ccb59dee84e2f4432db4f' + // who
      'f5e48809e81fce5fec14cebd6dfb53c6254f905a482165fa34004250de4e227c' + // sig1
      '0665f42ca8e1ef99b93a71dddd882bed0906c911386e694ead6db064184ea40f' + // sig2
      '0000' + // nonce
      '0300' + // balances.transfer
      'ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' + // to
      'e56c' // value
    );
  });
});
