// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, Registry } from '../../types';

import { u8aToHex } from '@polkadot/util';

/**
 * Given an u8a, and an array of Type constructors, decode the u8a against the
 * types, and return an array of decoded values.
 *
 * @param u8a - The u8a to decode.
 * @param types - The array of Constructor to decode the U8a against.
 */
export function decodeU8a (registry: Registry, u8a: Uint8Array, _types: Constructor[] | { [index: string]: Constructor }, _keys?: string[]): Codec[] {
  const [types, keys]: [Constructor<Codec>[], string[]] = Array.isArray(_types)
    ? [_types, _keys || []]
    : [Object.values(_types), Object.keys(_types)];
  const result: Codec[] = [];
  let offset = 0;

  for (let i = 0; i < types.length; i++) {
    const Type = types[i];

    try {
      const value = new Type(registry, u8a.subarray(offset));

      result.push(value);
      offset += value.encodedLength;
    } catch (error) {
      let rawType: string;

      try {
        rawType = new Type(registry).toRawType();
      } catch {
        rawType = '';
      }

      throw new Error(`decodeU8a: failed at ${u8aToHex(u8a.subarray(offset).slice(0, 8))}… on ${keys[i] ? `${keys[i]}` : ''}${rawType ? `: ${rawType}` : ''}:: ${(error as Error).message}`);
    }
  }

  return result;
}
