// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name isBoolean
 * @summary Tests for a boolean value.
 * @description
 * Checks to see if the input value is a JavaScript boolean.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isBoolean } from '@plugnet/util';
 *
 * isBoolean(false); // => true
 * ```
 */
export default function isBoolean (value: any): value is boolean {
  return typeof value === 'boolean';
}
