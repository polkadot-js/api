// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor } from '../../types';

/**
 * Given an u8a, and an array of Type constructors, decode the u8a against the
 * types, and return an array of decoded values.
 *
 * @param u8a - The u8a to decode.
 * @param types - The array of Constructor to decode the U8a against.
 */
export default function decodeU8a (u8a: Uint8Array, types: Constructor[]): Codec[] {
  if (!types.length) {
    return [];
  }

  const Type = types.shift() as Constructor;
  const value = new Type(u8a);

  return [value].concat(decodeU8a(u8a.subarray(value.encodedLength), types));
}
