// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, CodecRegistry } from '@polkadot/types-codec/types';
import type { DetectCodec } from '../types';
import type { CreateOptions } from './types';

import { Bytes, Option } from '@polkadot/types-codec';
import { assert, isHex, isU8a, u8aEq, u8aToHex, u8aToU8a } from '@polkadot/util';

import { createClass } from './createClass';

// With isPedantic, actually check that the encoding matches that supplied. This
// is much slower, but verifies that we have the correct types defined
function checkInstance (created: Codec, matcher: Uint8Array): void {
  const u8a = created.toU8a();
  const rawType = created.toRawType();
  const isOk = (
    // full match, all ok
    u8aEq(u8a, matcher) ||
    (
      // on a length-prefixed type, just check the actual length
      ['Bytes', 'Text', 'Type'].includes(rawType) &&
      matcher.length === (created as Bytes).length
    ) ||
    (
      // when the created is empty and matcher is also empty, let it slide...
      created.isEmpty &&
      matcher.every((v) => !v)
    )
  );

  assert(isOk, () => `${rawType}:: Decoded input doesn't match input, received ${u8aToHex(matcher, 512)} (${matcher.length} bytes), created ${u8aToHex(u8a, 512)} (${u8a.length} bytes)`);
}

function checkPedantic (created: Codec, [value]: unknown[], isPedantic = false): void {
  if (isPedantic) {
    if (isU8a(value)) {
      checkInstance(created, value);
    } else if (isHex(value)) {
      checkInstance(created, u8aToU8a(value));
    }
  }
}

// Initializes a type with a value. This also checks for fallbacks and in the cases
// where isPedantic is specified (storage decoding), also check the format/structure
function initType<T extends Codec> (registry: CodecRegistry, Type: CodecClass, params: unknown[] = [], { blockHash, isOptional, isPedantic }: CreateOptions = {}): T {
  const created = new (isOptional ? Option.with(Type) : Type)(registry, ...params);

  checkPedantic(created, params, isPedantic);

  if (blockHash) {
    created.createdAtHash = createType(registry, 'Hash', blockHash);
  }

  return created as T;
}

// An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, when it cannot parse, will yield a
// runtime error.
export function createTypeUnsafe<T extends Codec = Codec, K extends string = string> (registry: CodecRegistry, type: K, params: unknown[] = [], options: CreateOptions = {}): DetectCodec<T, K> {
  let Clazz: CodecClass | null = null;
  let firstError: Error | null = null;

  try {
    Clazz = createClass(registry, type);

    return initType(registry, Clazz, params, options);
  } catch (error) {
    firstError = new Error(`createType(${type}):: ${(error as Error).message}`);
  }

  if (Clazz && Clazz.__fallbackType) {
    try {
      Clazz = createClass(registry, Clazz.__fallbackType as unknown as K);

      return initType(registry, Clazz, params, options);
    } catch {
      // swallow, we will throw the first error again
    }
  }

  throw firstError;
}

/**
 * Create an instance of a `type` with a given `params`.
 * @param type - A recognizable string representing the type to create an
 * instance from
 * @param params - The value to instantiate the type with
 */
export function createType<T extends Codec = Codec, K extends string = string> (registry: CodecRegistry, type: K, ...params: unknown[]): DetectCodec<T, K> {
  return createTypeUnsafe(registry, type, params);
}
