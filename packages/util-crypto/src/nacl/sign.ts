// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keypair } from '../types';

import nacl from 'tweetnacl';
import { assert } from '@plugnet/util';
import { isReady, ed25519Sign } from '@plugnet/wasm-crypto';

/**
 * @name naclSign
 * @summary Signs a message using the supplied secretKey
 * @description
 * Returns message signature of `message`, using the `secretKey`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclSign } from '@plugnet/util-crypto';
 *
 * naclSign([...], [...]); // => [...]
 * ```
 */
export default function naclSign (message: Uint8Array, { publicKey, secretKey }: Partial<Keypair>): Uint8Array {
  assert(secretKey, 'Expected valid secretKey');

  return isReady()
    ? ed25519Sign(publicKey as Uint8Array, (secretKey as Uint8Array).subarray(0, 32), message)
    : nacl.sign.detached(message, secretKey as Uint8Array);
}
