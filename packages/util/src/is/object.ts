// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

type ObjectIndexed = {
  [index: string]: any
};

/**
 * @name isObject
 * @summary Tests for an `object`.
 * @description
 * Checks to see if the input value is a JavaScript object.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isObject } from '@plugnet/util';
 *
 * isObject({}); // => true
 * isObject('something'); // => false
 * ```
 */
export default function isObject (value: any): value is ObjectIndexed {
  return typeof value === 'object';
}
