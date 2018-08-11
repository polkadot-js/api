// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import extrinsics from '../../index';
import hexToU8a from '@polkadot/util/hex/toU8a';
import testingPairs from '@polkadot/util-keyring/testingPairs';

import encode from './unchecked';

const keyring = testingPairs();

describe('unchecked', () => {
  it('encodes extrinsic correctly (nobody)', () => {
    expect(
      encode(keyring.nobody, 1234)(
        extrinsics.timestamp.public.set,
        [10101]
      )
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

  it('encodes extrinsic correctly (one)', () => {
    expect(
      encode(keyring.one, 258, 'poc-1')(
        extrinsics.staking.public.transfer,
        [keyring.two.publicKey(), 69]
      )
    ).toEqual(
      new Uint8Array([
        // publicKey
        47, 140, 97, 41, 216, 22, 207, 81, 195, 116, 188, 127, 8, 195, 230, 62, 209, 86, 207, 120, 174, 251, 74, 101, 80, 217, 123, 135, 153, 121, 119, 238,
        // account nonce
        2, 1, 0, 0, 0, 0, 0, 0,
        // extrinsic index
        2, 0,
        // values
        // (recipient)
        215, 90, 152, 1, 130, 177, 10, 183, 213, 75, 254, 211, 201, 100, 7, 58, 14, 225, 114, 243, 218, 166, 35, 37, 175, 2, 26, 104, 247, 7, 81, 26,
        // (amount)
        69, 0, 0, 0, 0, 0, 0, 0,
        // signature
        144, 233, 93, 195, 106, 86, 2, 230, 182, 5, 62, 128, 120, 148, 21, 128, 86, 5, 74, 15, 128, 100, 255, 179, 172, 13, 102, 206, 117, 208, 175, 107, 107, 77, 209, 126, 129, 51, 1, 198, 184, 202, 100, 240, 0, 118, 150, 188, 67, 10, 154, 84, 224, 103, 17, 151, 163, 45, 78, 249, 219, 169, 96, 2
      ])
    );
  });

  it('encodes extrinsic correctly (one + latest)', () => {
    expect(
      encode(keyring.one, 258)(
        extrinsics.staking.public.transfer,
        [keyring.two.publicKey(), 69]
      )
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
      encode(keyring.nobody, 0)(
        extrinsics.timestamp.public.set,
        [0x5b13c37b]
      )
    ).toEqual(
      hexToU8a(
        '0xff00000000000000000000000000000000000000000000000000000000000000000000000003007bc3135b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
      )
    );
  });

  it('encoded parachains.setHeads correctly (actual values)', () => {
    expect(
      encode(keyring.nobody, 0)(
        extrinsics.parachains.public.setHeads,
        [[]]
      )
    ).toEqual(
      hexToU8a(
        '0xff00000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
      )
    );
  });
});
