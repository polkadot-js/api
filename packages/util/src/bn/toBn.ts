// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

/**
 * @name bnToBn
 * @summary Creates a BN value from a BN.js bignumber or number input.
 * @description
 * `null` inputs returns a `0x0` result, BN values returns the value, numnbers returns a BN representation.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnToBn } from '@plugnet/util';
 *
 * bnToBn(0x1234); // => BN(0x1234)
 * bnToBn(new BN(0x1234)); // => BN(0x1234)
 * ```
 */
export default function bnToBn (value?: BN | number | null): BN {
  if (!value) {
    return new BN(0);
  }

  return BN.isBN(value)
    ? value
    : new BN(value);
}
