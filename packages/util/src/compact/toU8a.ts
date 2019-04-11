// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import assert from '../assert';
import { bnToBn, bnToU8a } from '../bn';
import { u8aConcat } from '../u8a';

const MAX_U8 = new BN(2).pow(new BN(8 - 2)).subn(1);
const MAX_U16 = new BN(2).pow(new BN(16 - 2)).subn(1);
const MAX_U32 = new BN(2).pow(new BN(32 - 2)).subn(1);

/**
 * @name compactToU8a
 * @description Encodes a number into a compact representation
 * @example
 * <BR>
 *
 * ```javascript
 * import { compactToU8a } from '@plugnet/util';
 *
 * console.log(compactToU8a(511, 32)); // Uint8Array([0b11111101, 0b00000111])
 * ```
 */
export default function compactToU8a (_value: BN | number): Uint8Array {
  const value = bnToBn(_value);

  if (value.lte(MAX_U8)) {
    return new Uint8Array([value.toNumber() << 2]);
  } else if (value.lte(MAX_U16)) {
    return bnToU8a(value.shln(2).addn(0b01), 16, true);
  } else if (value.lte(MAX_U32)) {
    return bnToU8a(value.shln(2).addn(0b10), 32, true);
  }

  const u8a = bnToU8a(value);
  let length = u8a.length;

  // adjust to the minimum number of bytes
  while (u8a[length - 1] === 0) {
    length--;
  }

  assert(length >= 4, 'Previous tests match anyting less than 2^30; qed');

  return u8aConcat(
    new Uint8Array([
      // substract 4 as minimum (also catered for in decoding)
      ((length - 4) << 2) + 0b11
    ]),
    u8a.subarray(0, length)
  );
}
