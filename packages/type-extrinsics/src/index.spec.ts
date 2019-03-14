// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';
import { Extrinsic } from '@polkadot/types';

import extrinsics from './static';

const keyring = testingPairs({ type: 'ed25519' });

describe('extrinsics', () => {
  it('encodes extrinsic correctly (nobody)', () => {
    expect(
      new Extrinsic(
        extrinsics.timestamp.set(10101)
      ).sign(
        keyring.nobody,
        {
          blockHash: new Uint8Array(),
          nonce: 1234
        }
      ).toU8a(true)
    ).toEqual(new Uint8Array([
      129, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 19, 0, 0, 0, 213, 157
    ]));
  });

  it('encodes an actual transfer (actual data)', () => {
    expect(
      new Extrinsic(
        extrinsics.balances.transfer(keyring.bob.publicKey(), 6969)
      ).sign(keyring.alice, {
        blockHash: '0xec7afaf1cca720ce88c1d1b689d81f0583cc15a97d621cf046dd9abf605ef22f',
        nonce: 0
      }).toU8a()
    ).toEqual(new Uint8Array([
      37, 2, 129, 255, 209, 114, 167, 76, 218, 76, 134, 89, 18, 195, 43, 160, 168, 10, 87, 174, 105, 171, 174, 65, 14, 92, 203, 89, 222, 232, 78, 47, 68, 50, 219, 79, 245, 228, 136, 9, 232, 31, 206, 95, 236, 20, 206, 189, 109, 251, 83, 198, 37, 79, 144, 90, 72, 33, 101, 250, 52, 0, 66, 80, 222, 78, 34, 124, 6, 101, 244, 44, 168, 225, 239, 153, 185, 58, 113, 221, 221, 136, 43, 237, 9, 6, 201, 17, 56, 110, 105, 78, 173, 109, 176, 100, 24, 78, 164, 15, 0, 0, 3, 0, 255, 215, 86, 142, 95, 10, 126, 218, 103, 168, 38, 145, 255, 55, 154, 196, 187, 164, 249, 201, 184, 89, 254, 119, 155, 93, 70, 54, 59, 97, 173, 45, 185, 229, 108
    ]));
  });
});
