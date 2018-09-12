// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics';
import encodeUnchecked from '@polkadot/extrinsics/codec/encode/unchecked';
import hexToU8a from '@polkadot/util/hex/toU8a';
import testingPairs from '@polkadot/util-keyring/testingPairs';

import decode from './decodeRaw';

const keyring = testingPairs();

describe('decodeRaw', () => {
  it('encodes the block properly', () => {
    expect(
      decode(
        hexToU8a(
          '0x' +
          // parent_hash
          '0900000000000000000000000000000000000000000000000000000000000009' +
          // number
          '4300000000000000' +
          // state_root
          '0800000000000000000000000000000000000000000000000000000000000008' +
          // transaction_root
          '0700000000000000000000000000000000000000000000000000000000000007' +
          // digest
          '02000000' +
          '0100000001' +
          '0100000002' +
          // transactions
          '01000000' +
          '6f000000' +
          // prefix
          'ff' +
          '0000000000000000000000000000000000000000000000000000000000000000' +
          '00000000' +
          '0300' +
          '7527000000000000' +
          '0000000000000000000000000000000000000000000000000000000000000000' +
          '0000000000000000000000000000000000000000000000000000000000000000'
        )
      )
    ).toMatchObject({
      extrinsics: [
        encodeUnchecked(
          keyring.nobody, 0,
          extrinsics.timestamp.public.set,
          [10101]
        )
      ]
    });
  });
});
