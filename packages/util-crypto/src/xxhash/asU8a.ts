// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aToU8a } from '@plugnet/util';
import { isReady, twox } from '@plugnet/wasm-crypto';

import xxhash64AsBn from './xxhash64/asBn';

/**
 * @name xxhashAsU8a
 * @summary Creates a xxhash64 u8a from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash64 and return the result as a `Uint8Array` with the specified `bitLength`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { xxhashAsU8a } from '@plugnet/util-crypto';
 *
 * xxhashAsU8a('abc'); // => 0x44bc2cf5ad770999
 * ```
 */
export default function xxhashAsU8a (data: Buffer | Uint8Array | string, bitLength: number = 64): Uint8Array {
  const iterations = Math.ceil(bitLength / 64);

  if (isReady()) {
    return twox(u8aToU8a(data), iterations);
  }

  const u8a = new Uint8Array(Math.ceil(bitLength / 8));

  for (let seed = 0; seed < iterations; seed++) {
    u8a.set(xxhash64AsBn(data, seed).toArray('le', 8), seed * 8);
  }

  return u8a;
}
