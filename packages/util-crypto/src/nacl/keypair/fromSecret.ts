// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keypair } from '../../types';

import nacl from 'tweetnacl';

/**
 * @name naclKeypairFromSecret
 * @summary Creates a new public/secret keypair from a secret.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied secret.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromSecret } from '@plugnet/util-crypto';
 *
 * naclKeypairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export default function naclKeypairFromSecret (secret: Uint8Array): Keypair {
  return nacl.sign.keyPair.fromSecretKey(secret);
}
