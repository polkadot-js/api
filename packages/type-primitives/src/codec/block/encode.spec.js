// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics';
import encodeUnchecked from '@polkadot/extrinsics/codec/encode/unchecked';
import hexToU8a from '@polkadot/util/hex/toU8a';
import testingPairs from '@polkadot/util-keyring/testingPairs';

import blockBuilder from '../../create/block';
import { encodeBlock } from './index';

const keyring = testingPairs();

describe('encodeBlock', () => {
  it('encodes a block correctly (actual values)', () => {
    expect(
      encodeBlock(
        blockBuilder({
          header: {
            number: 9,
            parentHash: hexToU8a('0x737d699e4e42f78dc2fb098f01bb85389f2c7f0a77bb41918adac6bfa5b3ee46'),
            stateRoot: hexToU8a('0xf707774183723f201b875024069f30e7089b7f83c3c3cdc534b10d15fca91262')
          },
          extrinsics: [
            encodeUnchecked(keyring.nobody, 0)(
              extrinsics.timestamp.public.set,
              [0x5b13c3a4]
            ),
            encodeUnchecked(keyring.nobody, 0)(
              extrinsics.parachains.public.setHeads,
              [[]]
            )
          ]
        })
      )
    ).toEqual(
      new Uint8Array([
        115, 125, 105, 158, 78, 66, 247, 141, 194, 251, 9, 143, 1, 187, 133, 56, 159, 44, 127, 10, 119, 187, 65, 145, 138, 218, 198, 191, 165, 179, 238, 70, 9, 0, 0, 0, 0, 0, 0, 0, 247, 7, 119, 65, 131, 114, 63, 32, 27, 135, 80, 36, 6, 159, 48, 231, 8, 155, 127, 131, 195, 195, 205, 197, 52, 177, 13, 21, 252, 169, 18, 98, 140, 102, 133, 98, 214, 123, 73, 173, 122, 252, 247, 48, 181, 86, 77, 188, 213, 161, 17, 19, 73, 96, 158, 181, 249, 69, 97, 15, 186, 12, 45, 157, 0, 0, 0, 0, 2, 0, 0, 0, 111, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 164, 195, 19, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ])
      // hexToU8a(
      //   '0x737d699e4e42f78dc2fb098f01bb85389f2c7f0a77bb41918adac6bfa5b3ee460900000000000000f707774183723f201b875024069f30e7089b7f83c3c3cdc534b10d15fca91262ab602f7974bbfb513f021f39777e2195094dc64a2c1b7c82a1781cb9fd4768a800000000020000006e0000000000000000000000000000000000000000000000000000000000000000000000000000000300a4c3135b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006a00000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
      // )
    );
  });
});
