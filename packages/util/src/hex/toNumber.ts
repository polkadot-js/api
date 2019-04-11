// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import hexToBn from './toBn';

/**
 * @name hexToNumber
 * @summary Creates a Number value from a Buffer object.
 * @description
 * `null` inputs returns an NaN result, `hex` values return the actual value as a `Number`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexToNumber } from '@plugnet/util';
 *
 * hexToNumber('0x1234'); // => 0x1234
 * ```
 */
export default function hexToNumber (value?: string | null): number {
  if (!value) {
    return NaN;
  }

  return hexToBn(value).toNumber();
}
