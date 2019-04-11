// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import xxhash64AsRaw from './asRaw';

/**
 * @name xxhash64AsBn
 * @summary Creates a xxhash BN from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a BN.
 * @example
 * <BR>
 *
 * ```javascript
 * import { xxhash64AsNumber } from '@plugnet/util-crypto';
 *
 * xxhash64AsBn('abcd', 0xabcd)); // => new BN(0xe29f70f8b8c96df7)
 * ```
 */
export default function xxhash64AsBn (data: Buffer | Uint8Array | string, seed: number): BN {
  return new BN(
    xxhash64AsRaw(data, seed),
    16
  );
}
