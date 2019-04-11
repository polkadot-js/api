// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import xxhashjs from 'xxhashjs';
import { isBuffer, isString, u8aToBuffer } from '@plugnet/util';

/**
 * @name xxhash64AsValue
 * @summary Creates a hex number from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a hex number
 * @example
 * <BR>
 *
 * ```javascript
 * import { xxhash64AsValue } from '@plugnet/util-crypto';
 *
 * xxhash64AsValue('abcd', 0xabcd)); // => e29f70f8b8c96df7
 * ```
 */
export default function xxhash64AsValue (data: Buffer | Uint8Array | string, seed: number): number {
  if (isBuffer(data) || isString(data)) {
    // @ts-ignore Buffer is ArrayBuffer underlying
    return xxhashjs.h64(data, seed);
  }

  // @ts-ignore conversion works, yields correct result
  return xxhashjs.h64(
    u8aToBuffer(data),
    seed
  ) as any;
}
