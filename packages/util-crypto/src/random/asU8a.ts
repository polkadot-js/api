// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import nacl from 'tweetnacl';

/**
 * @name randomAsU8a
 * @summary Creates a Uint8Array filled with random bytes.
 * @description
 * Returns a `Uint8Array` with the specified (optional) length filled with random bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsU8a } from '@plugnet/util-crypto';
 *
 * randomAsU8a(); // => Uint8Array([...])
 * ```
 */
export default function randomAsU8a (length: number = 32): Uint8Array {
  return nacl.randomBytes(length);
}
