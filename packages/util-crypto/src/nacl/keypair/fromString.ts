// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keypair } from '../../types';

import { stringToU8a } from '@plugnet/util';

import blake2AsU8a from '../../blake2/asU8a';
import fromSeed from './fromSeed';

/**
 * @name naclKeypairFromString
 * @summary Creates a new public/secret keypair from a string.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied string. The string is hashed and the value used as the input seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromString } from '@plugnet/util-crypto';
 *
 * naclKeypairFromString('test'); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export default function naclKeypairFromString (value: string): Keypair {
  return fromSeed(
    blake2AsU8a(
      stringToU8a(value),
      256
    )
  );
}
