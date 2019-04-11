// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import nacl from 'tweetnacl';
import { isReady, sha512 } from '@plugnet/wasm-crypto';

/**
 * @name sha512AsU8a
 * @summary Creates sha-512 hash of the input.
 * @description
 * Returns a sha-512 `Uint8Array` from the supplied data.
 * @example
 * <BR>
 *
 * ```javascript
 * import { sha512AsU8a } from '@plugnet/util-crypto';
 *
 * sha512AsU8a(Uint8Array.from([...])); // => Uint8Array([...])
 * ```
 */
export default function sha512AsU8a (data: Uint8Array): Uint8Array {
  return isReady()
    ? sha512(data)
    : nacl.hash(data);
}
