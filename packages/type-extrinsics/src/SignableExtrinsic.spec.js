// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Index } from '@polkadot/types/index';
import hexToU8a from '@polkadot/util/hex/toU8a'
import testingPairs from '@polkadot/util-keyring/testingPairs';

import extrinsics from './testing';

const keyring = testingPairs();

describe('unchecked', () => {
  it('encodes extrinsic correctly (nobody)', () => {
    expect(
      extrinsics.timestamp.set(
        10101
      ).sign(
        keyring.nobody,
        new Index(1234)
      ).toU8a(true)
    ).toEqual(
      new Uint8Array([
        255,
        // publicKey
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        // account nonce
        210, 4, 0, 0,
        // extrinsic index
        3, 0,
        // values
        117, 39, 0, 0, 0, 0, 0, 0,
        // signature
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ])
    );
  });

  it('encodes extrinsic correctly (one + latest)', () => {
    expect(
      extrinsics.balances.transfer(
        keyring.two.publicKey(),
        69,
      ).sign(
        keyring.one,
        new Index(258),
      ).toU8a(true)
    ).toEqual(
      new Uint8Array([
        255,
        // publicKey
        47, 140, 97, 41, 216, 22, 207, 81, 195, 116, 188, 127, 8, 195, 230, 62, 209, 86, 207, 120, 174, 251, 74, 101, 80, 217, 123, 135, 153, 121, 119, 238,
        // account nonce
        2, 1, 0, 0,
        // extrinsic index
        2, 0,
        // values
        // (recipient)
        255,
        215, 90, 152, 1, 130, 177, 10, 183, 213, 75, 254, 211, 201, 100, 7, 58, 14, 225, 114, 243, 218, 166, 35, 37, 175, 2, 26, 104, 247, 7, 81, 26,
        // (amount)
        69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        // signature
        56, 1, 89, 195, 60, 171, 128, 242, 136, 64, 45, 43, 252, 199, 13, 115, 2, 76, 9, 19, 16, 80, 38, 164, 58, 229, 107, 225, 141, 107, 115, 176, 241, 242, 153, 177, 48, 92, 6, 61, 104, 112, 45, 223, 86, 198, 203, 78, 240, 223, 59, 190, 156, 116, 135, 188, 244, 219, 182, 58, 39, 140, 159, 11
      ])
    );
  });

  it('encodes timetamp.set extrinsic correctly (actual values)', () => {
    expect(
      extrinsics.timestamp.set(
        0x5b13c37b
      ).sign(
        keyring.nobody,
        new Index(0)
      ).toU8a(true)
    ).toEqual(
      hexToU8a(
        '0xff00000000000000000000000000000000000000000000000000000000000000000000000003007bc3135b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
      )
    );
  });

  // FIXME parachains module not in state_getMetadata
  it.skip('encoded parachains.setHeads correctly (actual values)', () => {
    expect(
      extrinsics.parachains.setHeads(
      ).sign(
        keyring.nobody,
        new Index(0)
      ).toU8a(true)
    ).toEqual(
      hexToU8a(
        '0xff00000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
      )
    );
  });
});