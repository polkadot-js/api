// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BitLength } from './types';

import { DEFAULT_BITLENGTH } from './defaults';
import compactFromU8a from './fromU8a';

/**
 * @name compactStripLength
 * @description Removes the length prefix, returning both the total length (including the value + compact encoding) and the decoded value with the correct length
 * @example
 * <BR>
 *
 * ```javascript
 * import { compactStripLength } from '@plugnet/util';
 *
 * console.log(compactStripLength(new Uint8Array([2 << 2, 0xde, 0xad]))); // [2, Uint8Array[0xde, 0xad]]
 * ```
 */
export default function compactStripLength (input: Uint8Array, bitLength: BitLength = DEFAULT_BITLENGTH): [number, Uint8Array] {
  const [offset, length] = compactFromU8a(input, bitLength);
  const total = offset + length.toNumber();

  return [
    total,
    input.subarray(offset, total)
  ];
}
