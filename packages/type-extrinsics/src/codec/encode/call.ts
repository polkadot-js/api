// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { EncodingVersions } from '@polkadot/params/types';
import { ExtrinsicWithAccount, ExtrinsicWithIndex } from '../types';

import sizes from '@polkadot/params/sizes';
import defaultSizes from '@polkadot/primitives/sizes';
import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aConcat from '@polkadot/util/u8a/concat';

export default function encodeCall (publicKey: Uint8Array, nonce: number | BN, data: ExtrinsicWithIndex, version: EncodingVersions): ExtrinsicWithAccount {
  return u8aConcat(
    publicKey,
    bnToU8a(nonce, sizes.AccountIndex.get(version) || defaultSizes.AccountIndex, true),
    data
  );
}
