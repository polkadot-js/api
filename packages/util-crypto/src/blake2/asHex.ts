// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aToHex } from '@plugnet/util';

import blake2AsU8a from './asU8a';

/**
 * @name blake2AsHex
 * @summary Creates a blake2b hex from the input.
 * @description
 * From a `Uint8Array` input, create the blake2b and return the result as a hex string with the specified `bitLength`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { blake2AsHex } from '@plugnet/util-crypto';
 *
 * blake2AsHex('abc'); // => 0xba80a53f981c4d0d
 * ```
 */
export default function blake2AsHex (data: Uint8Array | string, bitLength: number = 256): string {
  return u8aToHex(
    blake2AsU8a(data, bitLength)
  );
}
