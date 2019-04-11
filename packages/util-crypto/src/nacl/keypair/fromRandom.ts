// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keypair } from '../../types';

import nacl from 'tweetnacl';

/**
 * @name naclKeypairFromRandom
 * @summary Creates a new public/secret keypair.
 * @description
 * Returns a new generate object containing a `publicKey` & `secretKey`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromRandom } from '@plugnet/util-crypto';
 *
 * naclKeypairFromRandom(); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export default function naclKeypairFromRandom (): Keypair {
  return nacl.sign.keyPair();
}
