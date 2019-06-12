// Copyright 2017-2019 @polkadot/types authors & contributors
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
export default function decodeU8a (u8a: Uint8Array, _types: Constructor[] | { [index: string]: Constructor }): Codec[] {
  const types = Array.isArray(_types)
    ? _types
    : Object.values(_types);

  if (!types.length) {
    return [];
  }

  const Type = types[0];

  try {
    const value = new Type(u8a);

    return [value].concat(decodeU8a(u8a.subarray(value.encodedLength), types.slice(1)));
  } catch (error) {
    throw new Error(`U8a: failed on '${Type.name}':: ${error.message}`);
  }
}
