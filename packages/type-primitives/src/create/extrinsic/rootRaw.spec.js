// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics';
import encodeUnchecked from '@polkadot/extrinsics/codec/encode/unchecked';
import hexToU8a from '@polkadot/util/hex/toU8a';
import testingPairs from '@polkadot/util-keyring/testingPairs';

import root from './rootRaw';

const keyring = testingPairs();

describe('root', () => {
  it('calculates the root correctly for no transactions', () => {
    expect(
      root()
    ).toEqual(
      hexToU8a(
        '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'
      )
    );
  });

  it('calculates the root correctly (actual)', () => {
    expect(
      root([
        encodeUnchecked(keyring.nobody, 0)(
          extrinsics.timestamp.public.set,
          [0x5b13c3a4]
        ),
        encodeUnchecked(keyring.nobody, 0)(
          extrinsics.parachains.public.setHeads,
          [[]]
        )
      ])
    ).toEqual(
      new Uint8Array([
        140, 102, 133, 98, 214, 123, 73, 173, 122, 252, 247, 48, 181, 86, 77, 188, 213, 161, 17, 19, 73, 96, 158, 181, 249, 69, 97, 15, 186, 12, 45, 157
      ])
      // hexToU8a(
      //   '0xab602f7974bbfb513f021f39777e2195094dc64a2c1b7c82a1781cb9fd4768a8'
      // )
    );
  });

  // [
  //   168, 135, 224, 93, 140, 222, 226, 83, 13, 116, 138, 197, 164, 6, 48, 190, 101, 18, 221, 166, 40, 179, 158, 112, 133, 154, 215, 198, 177, 76, 212, 228,
  //   1, 0, 0, 0, 0, 0, 0, 0,
  //   159, 216, 180, 61, 159, 12, 131, 80, 22, 196, 220, 94, 6, 222, 68, 159, 97, 60, 16, 69, 163, 149, 125, 138, 175, 36, 30, 93, 235, 4, 1, 168,
  //   245, 208, 141, 24, 250, 136, 158, 84, 67, 170, 59, 146, 17, 149, 62, 67, 254, 66, 126, 53, 20, 146, 252, 243, 137, 89, 224, 145, 252, 79, 109, 15,
  //   0, 0, 0, 0,
  //   2, 0, 0, 0,
  //   110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 188, 29, 21, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0

  it('calculates the root correctly (actual encoded)', () => {
    expect(
      root([
        new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          3, 0,
          188, 29, 21, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]),
        new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          8, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ])
      ])
    ).toEqual(
      new Uint8Array([
        245, 208, 141, 24, 250, 136, 158, 84, 67, 170, 59, 146, 17, 149, 62, 67, 254, 66, 126, 53, 20, 146, 252, 243, 137, 89, 224, 145, 252, 79, 109, 15
      ])
    );
  });
});
