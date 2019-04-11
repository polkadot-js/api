// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name isNull
 * @summary Tests for a `null` values.
 * @description
 * Checks to see if the input value is `null`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isNull } from '@plugnet/util';
 *
 * console.log('isNull', isNull(null)); // => true
 * ```
 */
export default function isNull (value?: any): value is null {
  return value === null;
}
