// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { UncheckedRaw } from '../../extrinsic';

import uncheckedLength from '@polkadot/extrinsics/codec/encode/length';
import u8aConcat from '@polkadot/util/u8a/concat';

import encodeArray from '../encoder/array';

export default function encodeBlockRaw (header: Uint8Array, extrinsics: Array<UncheckedRaw> = []): Uint8Array {
  return u8aConcat(
    header,
    encodeArray(
      extrinsics.map(uncheckedLength)
    )
  );
}
