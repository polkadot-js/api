// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import u8aToU8a from './toU8a';

/**
 * @name u8aConcat
 * @summary Creates a concatenated Uint8Array from the inputs.
 * @description
 * Concatenates the input arrays into a single `UInt8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aConcat } from '@plugnet/util';
 *
 * u8aConcat(
 *   new Uint8Array([1, 2, 3]),
 *   new Uint8Array([4, 5, 6])
 * ); // [1, 2, 3, 4, 5, 6]
 * ```
 */
export default function u8aConcat (..._list: Array<Uint8Array | string>): Uint8Array {
  const list: Array<Uint8Array> = _list.map(u8aToU8a);
  const length = list.reduce((total, item) => total + item.length, 0);
  const result = new Uint8Array(length);
  let offset = 0;

  return list.reduce((result, item) => {
    result.set(item, offset);
    offset += item.length;

    return result;
  }, result);
}
