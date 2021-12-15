// Copyright 2017-2021 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, CodecRegistry } from '../types';

import { u8aToHex } from '@polkadot/util';

function formatFailure (error: Error, type: string | null, u8a: Uint8Array, key?: string): string {
  return `decodeU8a: failed at ${u8aToHex(u8a)}…${key ? ` on ${key}` : ''}${type ? `: ${type}` : ''}:: ${error.message}`;
}

function getRawType (registry: CodecRegistry, Type: CodecClass): string | null {
  try {
    return new Type(registry).toRawType();
  } catch {
    return null;
  }
}

/**
 * Given an u8a, and an array of Type constructors, decode the u8a against the
 * types, and return an array of decoded values.
 *
 * @param u8a - The u8a to decode.
 * @param result - The result array (will be returned with values pushed)
 * @param types - The array of CodecClass to decode the U8a against.
 */
export function decodeU8a <T extends Codec = Codec, E = T> (registry: CodecRegistry, u8a: Uint8Array, types: CodecClass[] | { [index: string]: CodecClass }, withZip?: boolean): [E[], number] {
  const [Types, keys]: [CodecClass[], string[]] = Array.isArray(types)
    ? [types, []]
    : [Object.values(types), Object.keys(types)];

  const result = new Array<E>(Types.length);
  let offset = 0;

  for (let i = 0; i < Types.length; i++) {
    try {
      const value = new Types[i](registry, u8a.subarray(offset));

      offset += value.initialU8aLength || value.encodedLength;
      result[i] = withZip
        ? [keys[i], value] as unknown as E
        : value as unknown as E;
    } catch (error) {
      throw new Error(formatFailure(
        error as Error,
        getRawType(registry, Types[i]),
        u8a.subarray(offset, offset + 16),
        keys[i]
      ));
    }
  }

  return [result, offset];
}

// Split from decodeU8a since this is specialized to 1 instance ... yes duplication, but
// since we have to do less checks (and these are intensive anyway), much faster
export function decodeU8aVec <T extends Codec = Codec> (registry: CodecRegistry, u8a: Uint8Array, start: number, Type: CodecClass<T>, count: number): [T[], number, number] {
  const result = new Array<T>(count);
  let offset = start;

  for (let i = 0; i < count; i++) {
    try {
      const value = new Type(registry, u8a.subarray(offset));

      offset += value.initialU8aLength || value.encodedLength;
      result[i] = value;
    } catch (error) {
      throw new Error(formatFailure(
        error as Error,
        getRawType(registry, Type),
        u8a.subarray(offset, offset + 16)
      ));
    }
  }

  return [result, offset, offset - start];
}
