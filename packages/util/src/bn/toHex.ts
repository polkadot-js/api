// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import isNumber from '../is/number';
import bnToU8a from './toU8a';
import { ToBnOptions } from '../types';
import { u8aToHex } from '../u8a';

const ZERO_STR = '0x00';

interface Options extends ToBnOptions {
  bitLength?: number;
}

/**
 * @name bnToHex
 * @summary Creates a hex value from a BN.js bignumber object.
 * @description
 * `null` inputs returns a `0x` result, BN values return the actual value as a `0x` prefixed hex value. Anything that is not a BN object throws an error. With `bitLength` set, it fixes the number to the specified length.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnToHex } from '@plugnet/util';
 *
 * bnToHex(new BN(0x123456)); // => '0x123456'
 * ```
 */
export default function bnToHex (
  value?: BN | number | null,
  options: number | Options = { bitLength: -1, isLe: false, isNegative: false }
): string {
  if (!value) {
    return ZERO_STR;
  }

  const _options = {
    isLe: false,
    isNegative: false,
    // Backwards-compatibility
    ...(isNumber(options) ? { bitLength: options } : options)
  };

  return u8aToHex(bnToU8a(value, _options));
}
