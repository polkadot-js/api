// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aConcat from '@polkadot/util/u8a/concat';

export default function encodeLength (...values: Array<Uint8Array>): Uint8Array {
  const length = values.reduce((length, u8a) => {
    return length + u8a.length;
  }, 0);

  return u8aConcat(
    bnToU8a(length, 32, true),
    ...values
  );
}
