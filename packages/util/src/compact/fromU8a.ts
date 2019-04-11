// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BitLength } from './types';

import BN from 'bn.js';

import { u8aToBn, u8aToU8a } from '../u8a';
import { DEFAULT_BITLENGTH } from './defaults';

/**
 * @name compactFromU8a
 * @description Retrievs the offset and encoded length from a compact-prefixed value
 * @example
 * <BR>
 *
 * ```javascript
 * import { compactFromU8a } from '@plugnet/util';
 *
 * const [offset, length] = compactFromU8a(new Uint8Array([254, 255, 3, 0]), 32));
 *
 * console.log('value offset=', offset, 'length=', length); // 4, 0xffff
 * ```
 */
export default function compactFromU8a (_input: Uint8Array | string, bitLength: BitLength = DEFAULT_BITLENGTH): [number, BN] {
  const input = u8aToU8a(_input);
  const flag = input[0] & 0b11;

  if (flag === 0b00) {
    return [1, new BN(input[0]).shrn(2)];
  } else if (flag === 0b01) {
    return [2, u8aToBn(input.slice(0, 2), true).shrn(2)];
  } else if (flag === 0b10) {
    return [4, u8aToBn(input.slice(0, 4), true).shrn(2)];
  }

  const length = new BN(input[0])
    .shrn(2) // clear flag
    .addn(4) // add 4 for base length
    .toNumber();
  const offset = 1 + length;

  return [offset, u8aToBn(input.subarray(1, offset), true)];
}
