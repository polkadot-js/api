// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, Registry } from '../types';

import { u8aToHex } from '@polkadot/util';

function formatFailure (error: Error, type: string | null, u8a: Uint8Array, key?: string): string {
  return `decodeU8a: failed at ${u8aToHex(u8a)}…${key ? ` on ${key}` : ''}${type ? `: ${type}` : ''}:: ${error.message}`;
}

function getRawType (registry: Registry, Type: CodecClass): string | null {
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
export function decodeU8a <T extends Codec = Codec, E = T> (registry: Registry, result: unknown[], u8a: Uint8Array, [Types, keys]: [CodecClass[], string[]], withZip?: boolean): [E[], number] {
  let offset = 0;

  for (let i = 0; i < result.length; i++) {
    try {
      const value = new Types[i](registry, u8a.subarray(offset));

      offset += value.initialU8aLength || value.encodedLength;
      result[i] = withZip
        ? [keys[i], value]
        : value;
    } catch (error) {
      throw new Error(formatFailure(
        error as Error,
        getRawType(registry, Types[i]),
        u8a.subarray(offset, offset + 16),
        keys[i]
      ));
    }
  }

  return [result as E[], offset];
}

// Split from decodeU8a since this is specialized to 1 instance ... yes duplication, but
// since we have to do less checks (and these are intensive anyway), much faster
export function decodeU8aVec <T extends Codec = Codec> (registry: Registry, result: unknown[], u8a: Uint8Array, startAt: number, Type: CodecClass<T>): [number, number] {
  const count = result.length;
  let offset = startAt;

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

  return [offset, offset - startAt];
}
