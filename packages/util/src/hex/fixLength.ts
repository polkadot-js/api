// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import hexAddPrefix from './addPrefix';
import hexStripPrefix from './stripPrefix';

/**
 * @name hexFixLength
 * @summary Shifts a hex string to a specific bitLength
 * @description
 * Returns a `0x` prefixed string with the specified number of bits contained in the return value. (If bitLength is -1, length checking is not done). Values with more bits are trimmed to the specified length. Input values with less bits are returned as-is by default. When `withPadding` is set, shorter values are padded with `0`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexFixLength } from '@plugnet/util';
 *
 * console.log('fixed', hexFixLength('0x12', 16)); // => 0x12
 * console.log('fixed', hexFixLength('0x12', 16, true)); // => 0x0012
 * console.log('fixed', hexFixLength('0x0012', 8)); // => 0x12
 * ```
 */
export default function hexFixLength (value: string, bitLength: number = -1, withPadding: boolean = false): string {
  const strLength = Math.ceil(bitLength / 4);
  const hexLength = strLength + 2;

  if (bitLength === -1 || value.length === hexLength || (!withPadding && value.length < hexLength)) {
    return hexAddPrefix(
      hexStripPrefix(value)
    );
  }

  if (value.length > hexLength) {
    return hexAddPrefix(
      hexStripPrefix(value).slice(-1 * strLength)
    );
  }

  return hexAddPrefix(
    `${'0'.repeat(strLength)}${hexStripPrefix(value)}`.slice(-1 * strLength)
  );
}
