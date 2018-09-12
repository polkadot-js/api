// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import extrinsics from '@polkadot/extrinsics';
import encodeUnchecked from '@polkadot/extrinsics/codec/encode/unchecked';
import hexToU8a from '@polkadot/util/hex/toU8a';
import testingPairs from '@polkadot/util-keyring/testingPairs';

import block from './block';

const keyring = testingPairs();

describe('block', () => {
  it('creates a complete block from incomplete details', () => {
    expect(
      block({})
    ).toEqual({
      header: {
        digest: {
          logs: []
        },
        number: new BN(0),
        parentHash: new Uint8Array(32),
        stateRoot: new Uint8Array(32),
        extrinsicsRoot: new Uint8Array([
          86, 232, 31, 23, 27, 204, 85, 166, 255, 131, 69, 230, 146, 192, 248, 110, 91, 72, 224, 27, 153, 108, 173, 192, 1, 98, 47, 181, 227, 99, 180, 33
        ])
      },
      extrinsics: []
    });
  });

  it('creates a valid block, with defaults submitted', () => {
    const transactions = [
      encodeUnchecked(
        keyring.nobody, 0,
        extrinsics.timestamp.public.set,
        [0x5b13c3a4]
      ),
      encodeUnchecked(
        keyring.nobody, 0,
        extrinsics.parachains.public.setHeads,
        [[]]
      )
    ];

    expect(
      block({
        header: {
          number: 1,
          parentHash: hexToU8a(
            '0x4545454545454545454545454545454545454545454545454545454545454545'
          ),
          stateRoot: hexToU8a(
            '0x2481853da20b9f4322f34650fea5f240dcbfb266d02db94bfa0153c31f4a29db'
          )
        },
        extrinsics: transactions
      })
    ).toEqual({
      header: {
        digest: {
          logs: []
        },
        number: new BN(1),
        parentHash: hexToU8a(
          '0x4545454545454545454545454545454545454545454545454545454545454545'
        ),
        stateRoot: hexToU8a(
          '0x2481853da20b9f4322f34650fea5f240dcbfb266d02db94bfa0153c31f4a29db'
        ),
        extrinsicsRoot: new Uint8Array([
          140, 102, 133, 98, 214, 123, 73, 173, 122, 252, 247, 48, 181, 86, 77, 188, 213, 161, 17, 19, 73, 96, 158, 181, 249, 69, 97, 15, 186, 12, 45, 157
        ])
        // hexToU8a(
        //   '0xab602f7974bbfb513f021f39777e2195094dc64a2c1b7c82a1781cb9fd4768a8'
        // )
      },
      extrinsics: transactions
    });
  });
});
