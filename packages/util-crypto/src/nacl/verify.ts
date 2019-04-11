// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import nacl from 'tweetnacl';
import { isReady, ed25519Verify } from '@plugnet/wasm-crypto';

/**
 * @name naclSign
 * @summary Verifies the signature on the supplied message.
 * @description
 * Verifies the `signature` on `message` with the supplied `plublicKey`. Returns `true` on sucess, `false` otherwise.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclVerify } from '@plugnet/util-crypto';
 *
 * naclVerify([...], [...], [...]); // => true/false
 * ```
 */
export default function naclVerify (message: Uint8Array, signature: Uint8Array, publicKey: Uint8Array): boolean {
  return isReady()
    ? ed25519Verify(signature, message, publicKey)
    : nacl.sign.detached.verify(message, signature, publicKey);
}
