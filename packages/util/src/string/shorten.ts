// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name stringShorten
 * @summary Returns a string with maximum length
 * @description
 * Checks the string against the `prefixLength`, if longer than dopuble this, shortens it by placing `..` in the middle of it
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringShorten } from '@plugnet/util';
 *
 * stringShorten('1234567890', 2); // => 12..90
 * ```
 */
export default function stringShorten (_value?: any, prefixLength: number = 6): string {
  const value = `${_value}`;

  if (value.length <= 2 + 2 * prefixLength) {
    return value;
  }

  return `${value.substr(0, prefixLength)}..${value.slice(-prefixLength)}`;
}
