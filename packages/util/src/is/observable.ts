// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import isFunction from './function';
import isObject from './object';

type Observable = {
  next: (...paarams: any[]) => any
};

/**
 * @name isBObservable
 * @summary Tests for a `Observable` object instance.
 * @description
 * Checks to see if the input object is an instance of `BN` (bn.js).
 * @example
 * <BR>
 *
 * ```javascript
 * import { isObservable } from '@plugnet/util';
 *
 * console.log('isObservable', isObservable(...));
 * ```
 */
export default function isObservable (value: any): value is Observable {
  return isObject(value) && isFunction((value as Observable).next);
}
