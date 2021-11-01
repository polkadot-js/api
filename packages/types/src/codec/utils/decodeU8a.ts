// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, Registry } from '../../types';

import { isFunction, u8aToHex } from '@polkadot/util';

function formatFailure (error: Error, key: string, type: string, u8a: Uint8Array): string {
  return `decodeU8a: failed at ${u8aToHex(u8a)}…${key ? ` on ${key}` : ''}${type ? `: ${type}` : ''}:: ${error.message}`;
}

function getRawType (registry: Registry, Type: Constructor): string {
  try {
    return new Type(registry).toRawType();
  } catch {
    return '';
  }
}

/**
 * Given an u8a, and an array of Type constructors, decode the u8a against the
 * types, and return an array of decoded values.
 *
 * @param u8a - The u8a to decode.
 * @param result - The result array (will be returned with values pushed)
 * @param types - The array of Constructor to decode the U8a against.
 */
export function decodeU8a <T extends Codec = Codec, E = T> (registry: Registry, u8a: Uint8Array, types: Constructor | Constructor[] | { [index: string]: Constructor }, count?: number, zip?: (key: string, value: T) => E): [E[], number] {
  const [Type, Types, keys]: [Constructor | null, Constructor[], string[]] = isFunction(types)
    ? [types, [], []]
    : Array.isArray(types)
      ? [null, types, []]
      : [null, Object.values(types), Object.keys(types)];

  count = count || Types.length;

  const result = new Array<E>(count);
  let offset = 0;

  for (let i = 0; i < count; i++) {
    try {
      const value = new (Type || Types[i])(registry, u8a.subarray(offset));

      offset += value.initialU8aLength || value.encodedLength;
      result[i] = zip
        ? zip(keys[i], value as T)
        : value as unknown as E;
    } catch (error) {
      throw new Error(formatFailure(
        error as Error,
        keys[i],
        getRawType(registry, Type || Types[i]),
        u8a.subarray(offset, offset + 8)
      ));
    }
  }

  return [result, offset];
}
