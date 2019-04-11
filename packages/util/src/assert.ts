// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ExtError from './ext/error';
import isFunction from './is/function';

type MessageFn = () => string;

type Falsy = null | undefined | false | 0 | ''; // No NaN type

/**
 * @name assert
 * @summary Checks for a valid test, if not ExtError is thrown.
 * @description
 * Checks that `test` is a truthy value. If value is falsy (`null`, `undefined`, `false`, ...), it throws an ExtError with the supplied `message` and an optional `code` and `data`. When `test` passes, `true` is returned.
 * @example
 * <BR>
 *
 * ```javascript
 * const { assert } from '@plugnet/util';
 *
 * assert(true, 'True should be true'); // true returned
 * assert(false, 'False should not be true'); // ExtError thrown
 * assert(false, () => 'message'); // ExtError with 'message'
 * ```
 */
export default function assert<T> (test: Falsy | T, message: string | MessageFn, code: number = ExtError.CODES.ASSERT, data?: any): test is T {
  if (test) {
    return true;
  }

  if (isFunction(message)) {
    message = message();
  }

  throw new ExtError(message, code, data);
}
