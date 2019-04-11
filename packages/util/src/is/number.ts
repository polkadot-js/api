// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name isNumber
 * @summary Tests for a JavaScript number.
 * @description
 * Checks to see if the input value is a valid number.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isNumber } from '@plugnet/util';
 *
 * console.log('isNumber', isNumber(1234)); // => true
 * ```
 */
export default function isNumber (value: any): value is number {
  return typeof value === 'number';
}
