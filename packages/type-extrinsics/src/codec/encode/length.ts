// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { UncheckedRaw } from '@polkadot/primitives/extrinsic';

import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aConcat from '@polkadot/util/u8a/concat';

export default function encodeLength (unchecked: UncheckedRaw): Uint8Array {
  return u8aConcat(
    bnToU8a(unchecked.length, 32, true),
    unchecked
  );
}
