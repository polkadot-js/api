// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, Registry } from '../../types';

import { isFunction, u8aToHex } from '@polkadot/util';

function identityZip <T, E> (key: string, value: T): E {
  return value as unknown as E;
}

/**
 * Given an u8a, and an array of Type constructors, decode the u8a against the
 * types, and return an array of decoded values.
 *
 * @param u8a - The u8a to decode.
 * @param result - The result array (will be returned with values pushed)
 * @param types - The array of Constructor to decode the U8a against.
 */
export function decodeU8a <T extends Codec = Codec, E = T> (registry: Registry, u8a: Uint8Array, types: Constructor | Constructor[] | { [index: string]: Constructor }, count?: number, zip: (key: string, value: T) => E = identityZip): [E[], number] {
  const [Type, Types, keys]: [Constructor | null, Constructor[], string[]] = isFunction(types)
    ? [types, [], []]
    : Array.isArray(types)
      ? [null, types, []]
      : [null, Object.values(types), Object.keys(types)];

  count = count || Types.length;

  const result = new Array<E>(count);
  let decodedLength = 0;

  for (let i = 0; i < count; i++) {
    try {
      const value = new (Type || Types[i])(registry, u8a.subarray(decodedLength));

      result[i] = zip(keys[i], value as T);
      decodedLength += value.initialU8aLength || value.encodedLength;
    } catch (error) {
      let rawType: string;

      try {
        rawType = new (Type || Types[i])(registry).toRawType();
      } catch {
        rawType = '';
      }

      throw new Error(`decodeU8a: failed at ${u8aToHex(u8a.subarray(decodedLength, decodedLength + 8))}…${keys[i] ? ` on ${keys[i]}` : ''}${rawType ? `: ${rawType}` : ''}:: ${(error as Error).message}`);
    }
  }

  return [result, decodedLength];
}
