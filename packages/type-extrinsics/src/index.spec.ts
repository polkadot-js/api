// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';
import { Extrinsic } from '@polkadot/types/index';

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
    ).toEqual(new Uint8Array([
      129, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 210, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 213, 157
    ]));
  });

  it('encodes an actual transfer (actual data)', () => {
    expect(
      new Extrinsic(
        extrinsics.balances.transfer(keyring.bob.publicKey(), 6969)
      ).sign(keyring.alice, 0, '0xec7afaf1cca720ce88c1d1b689d81f0583cc15a97d621cf046dd9abf605ef22f').toU8a()
    ).toEqual(new Uint8Array([
      65, 2, 129, 255, 209, 114, 167, 76, 218, 76, 134, 89, 18, 195, 43, 160, 168, 10, 87, 174, 105, 171, 174, 65, 14, 92, 203, 89, 222, 232, 78, 47, 68, 50, 219, 79, 78, 239, 232, 24, 167, 219, 153, 211, 226, 132, 22, 151, 169, 47, 140, 198, 86, 169, 91, 159, 253, 98, 242, 111, 12, 143, 192, 226, 250, 233, 158, 232, 195, 57, 44, 184, 25, 65, 228, 143, 200, 140, 84, 111, 179, 102, 187, 61, 1, 137, 148, 74, 168, 246, 131, 243, 228, 64, 10, 106, 138, 117, 209, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 255, 215, 86, 142, 95, 10, 126, 218, 103, 168, 38, 145, 255, 55, 154, 196, 187, 164, 249, 201, 184, 89, 254, 119, 155, 93, 70, 54, 59, 97, 173, 45, 185, 229, 108
    ]));
  });
});
