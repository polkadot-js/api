// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Codec, Constructor, Registry } from '../../types';

/**
 * Given an u8a, and an array of Type constructors, decode the u8a against the
 * types, and return an array of decoded values.
 *
 * @param u8a - The u8a to decode.
 * @param types - The array of Constructor to decode the U8a against.
 */
export default function decodeU8a (registry: Registry, u8a: Uint8Array, _types: Constructor[] | { [index: string]: Constructor }): Codec[] {
  const types = Array.isArray(_types)
    ? _types
    : Object.values(_types);

  if (!types.length) {
    return [];
  }

  const Type = types[0];
  const value = new Type(registry, u8a);

  return [value].concat(decodeU8a(registry, u8a.subarray(value.encodedLength), types.slice(1)));
}
