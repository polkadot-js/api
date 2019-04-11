// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aToHex } from '@plugnet/util';

import keccakAsU8a from './asU8a';

/**
 * @name keccakAsHex
 * @summary Creates a keccak hex string from the input.
 * @description
 * From either a `string` or a `Buffer` input, create the keccak and return the result as a `0x` prefixed hex string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { keccakAsHex } from '@plugnet/util-crypto';
 *
 * keccakAsHex('123'); // => 0x...
 * ```
 */
export default function keccakAsHex (value: Buffer | Uint8Array | string): string {
  return u8aToHex(
    keccakAsU8a(value)
  );
}
