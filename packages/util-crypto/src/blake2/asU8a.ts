// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import blakejs from 'blakejs';
import { u8aToU8a } from '@plugnet/util';
import { blake2b, isReady } from '@plugnet/wasm-crypto';

/**
 * @name blake2AsU8a
 * @summary Creates a blake2b u8a from the input.
 * @description
 * From a `Uint8Array` input, create the blake2b and return the result as a u8a with the specified `bitLength`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { blake2AsU8a } from '@plugnet/util-crypto';
 *
 * blake2AsU8a('abc'); // => [0xba, 0x80, 0xa53, 0xf98, 0x1c, 0x4d, 0x0d]
 * ```
 */
export default function blake2AsU8a (data: Uint8Array | string, bitLength: number = 256, key: Uint8Array | null = null): Uint8Array {
  const byteLength = Math.ceil(bitLength / 8);

  return isReady()
    ? blake2b(u8aToU8a(data), u8aToU8a(key), byteLength)
    : blakejs.blake2b(data, key, byteLength);
}
