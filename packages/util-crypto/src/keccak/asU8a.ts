// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import jssha3 from 'js-sha3';
import { u8aToU8a } from '@plugnet/util';
import { isReady, keccak256 } from '@plugnet/wasm-crypto';

/**
 * @name keccakAsU8a
 * @summary Creates a keccak Uint8Array from the input.
 * @description
 * From either a `string` or a `Buffer` input, create the keccak and return the result as a `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { keccakAsU8a } from '@plugnet/util-crypto';
 *
 * keccakAsU8a('123'); // => Uint8Array
 * ```
 */
export default function keccakAsU8a (value: Buffer | Uint8Array | string): Uint8Array {
  return isReady()
    ? keccak256(u8aToU8a(value))
    : new Uint8Array(
      jssha3.keccak256.update(value).arrayBuffer()
    );
}
