// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import nacl from 'tweetnacl';

/**
 * @name naclDecrypt
 * @summary Decrypts a message using the supplied secretKey and nonce
 * @description
 * Returns an decrypted message, using the `secret` and `nonce`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclDecrypt } from '@plugnet/util-crypto';
 *
 * naclDecrypt([...], [...], [...]); // => [...]
 * ```
 */
export default function naclDecrypt (encrypted: Uint8Array, nonce: Uint8Array, secret: Uint8Array): Uint8Array | null {
  return nacl.secretbox.open(encrypted, nonce, secret) || null;
}
