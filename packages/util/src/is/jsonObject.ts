// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

type ObjectIndexed = {
  [index: string]: any
};

/**
 * @name isJsonObject
 * @summary Tests for a valid JSON `object`.
 * @description
 * Checks to see if the input value is a valid JSON object.
 * It returns false if the input is JSON parsable, but not an Javascript object.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isJsonObject } from '@plugnet/util';
 *
 * isJsonObject({}); // => true
 * isJsonObject({
 *  "Test": "1234",
 *  "NestedTest": {
 *   "Test": "5678"
 *  }
 * }); // => true
 * isJsonObject(1234); // JSON parsable, but not an object =>  false
 * isJsonObject(null); // JSON parsable, but not an object => false
 * isJsonObject('not an object'); // => false
 * ```
 */

export default function isJsonObject (value: any): value is ObjectIndexed {

  value = typeof value !== 'string'
    ? JSON.stringify(value)
    : value;

  try {
    value = JSON.parse(value);

    return (typeof value === 'object' && value !== null);
  } catch (e) {
    return false;
  }
}
