// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import hexFixLength from '../hex/fixLength';
import isNull from '../is/null';
import isUndefined from '../is/undefined';

/**
 * @name numberToHex
 * @summary Creates a hex value from a number.
 * @description
 * `null`/`undefined`/`NaN` inputs returns an empty `0x` result. `number` input values return the actual bytes value converted to a `hex`. With `bitLength` set, it converts the number to the equivalent size.
 * @example
 * <BR>
 *
 * ```javascript
 * import { numberToHex } from '@plugnet/util';
 *
 * numberToHex(0x1234); // => '0x1234'
 * numberToHex(0x1234, 32); // => 0x00001234
 * ```
 */
export default function numberToHex (value?: number | null, bitLength: number = -1): string {
  if (isUndefined(value) || isNull(value) || isNaN(value)) {
    return '0x';
  }

  return hexFixLength(
    (value || 0).toString(16),
    bitLength,
    true
  );
}
