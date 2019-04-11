// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import nacl from 'tweetnacl';

import randomAsU8a from '../random/asU8a';

type Encrypted = {
  encrypted: Uint8Array,
  nonce: Uint8Array
};

/**
 * @name naclEncrypt
 * @summary Encrypts a message using the supplied secretKey and nonce
 * @description
 * Returns an encrypted message, using the `secretKey` and `nonce`. If the `nonce` was not supplied, a random value is generated.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclEncrypt } from '@plugnet/util-crypto';
 *
 * naclEncrypt([...], [...]); // => [...]
 * ```
 */
export default function naclEncrypt (message: Uint8Array, secret: Uint8Array, nonce: Uint8Array = randomAsU8a(24)): Encrypted {
  return {
    encrypted: nacl.secretbox(message, nonce, secret),
    nonce
  };
}
