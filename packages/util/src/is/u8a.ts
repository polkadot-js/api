// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import isInstanceOf from './instanceOf';

/**
 * @name isU8a
 * @summary Tests for a `Uint8Array` object instance.
 * @description
 * Checks to see if the input object is an instance of `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isUint8Array } from '@plugnet/util';
 *
 * console.log('isU8a', isU8a([])); // => false
 * ```
 */
export default function isU8a (value?: any): value is Uint8Array {
  return isInstanceOf(value, Uint8Array);
}
