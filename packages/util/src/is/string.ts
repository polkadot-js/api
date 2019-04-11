// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name isString
 * @summary Tests for a string.
 * @description
 * Checks to see if the input value is a JavaScript string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isString } from '@plugnet/util';
 *
 * console.log('isString', isString('test')); // => true
 * ```
 */
export default function isString (value: any): value is string | String {
  return typeof value === 'string' || value instanceof String;
}
