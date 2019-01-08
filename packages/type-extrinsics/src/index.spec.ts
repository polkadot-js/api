// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
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
      129, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 19, 0, 0, 0, 213, 157
    ]));
  });

  it('encodes an actual transfer (actual data)', () => {
    expect(
      new Extrinsic(
        extrinsics.balances.transfer(keyring.bob.publicKey(), 6969)
      ).sign(keyring.alice, 0, '0xec7afaf1cca720ce88c1d1b689d81f0583cc15a97d621cf046dd9abf605ef22f').toU8a()
    ).toEqual(new Uint8Array([
      37, 2, 129, 255, 209, 114, 167, 76, 218, 76, 134, 89, 18, 195, 43, 160, 168, 10, 87, 174, 105, 171, 174, 65, 14, 92, 203, 89, 222, 232, 78, 47, 68, 50, 219, 79, 148, 105, 162, 165, 130, 138, 239, 1, 131, 69, 7, 221, 50, 12, 137, 86, 22, 117, 195, 168, 94, 166, 49, 143, 78, 169, 34, 247, 161, 99, 134, 204, 95, 205, 47, 14, 216, 95, 190, 220, 24, 13, 75, 218, 172, 137, 229, 86, 11, 246, 111, 80, 204, 192, 213, 13, 101, 245, 230, 65, 33, 21, 129, 6, 0, 0, 2, 0, 255, 215, 86, 142, 95, 10, 126, 218, 103, 168, 38, 145, 255, 55, 154, 196, 187, 164, 249, 201, 184, 89, 254, 119, 155, 93, 70, 54, 59, 97, 173, 45, 185, 229, 108
    ]));
  });
});
