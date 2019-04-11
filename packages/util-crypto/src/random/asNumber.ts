// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { hexToBn } from '@plugnet/util';

import randomAsHex from './asHex';

const BN_53 = new BN(0b11111111111111111111111111111111111111111111111111111);

/**
 * @name randomAsNumber
 * @summary Creates a random number from random bytes.
 * @description
 * Returns a random number generated from the secure bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsNumber } from '@plugnet/util-crypto';
 *
 * randomAsNumber(); // => <random number>
 * ```
 */
export default function randomAsNumber (): number {
  return hexToBn(
    randomAsHex(8)
  ).and(BN_53).toNumber();
}
