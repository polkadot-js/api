// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import xxhash64AsValue from './asValue';

/**
 * @name xxhash64AsRaw
 * @summary Creates a xxhash non-prefixed hex from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a non-prefixed hex string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { xxhash64AsRaw } from '@plugnet/util-crypto';
 *
 * xxhash64AsRaw('abcd', 0xabcd)); // => e29f70f8b8c96df7
 * ```
 */
export default function xxhash64AsRaw (data: Buffer | Uint8Array | string, seed: number): string {
  return xxhash64AsValue(data, seed).toString(16);
}
