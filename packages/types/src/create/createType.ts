// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes } from '../primitive/Bytes';
import type { Codec, Constructor, DetectCodec, Registry } from '../types';
import type { CreateOptions } from './types';

import { assert, isHex, isU8a, u8aEq, u8aToHex, u8aToU8a } from '@polkadot/util';

import { Option } from '../codec/Option';
import { createClass } from './createClass';

// With isPedantic, actually check that the encoding matches that supplied. This
// is much slower, but verifies that we have the correct types defined
function checkInstance (created: Codec, value: Uint8Array): void {
  const u8a = created.toU8a();
  const rawType = created.toRawType();

  assert(
    u8aEq(value, u8a) || (
      // when length-prefixed from hex, just check the actual length
      ['Bytes', 'Text', 'Type'].includes(rawType) &&
      value.length === (created as Bytes).length
    ),
    () => `${rawType}:: Decoded input doesn't match input, received ${u8aToHex(value, 512)} (${value.length} bytes), created ${u8aToHex(u8a, 512)} (${u8a.length} bytes)`
  );
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
function initType<T extends Codec = Codec, K extends string = string> (registry: Registry, Type: Constructor, params: unknown[] = [], { blockHash, isOptional, isPedantic }: CreateOptions = {}): DetectCodec<T, K> {
  const created = new (isOptional ? Option.with(Type) : Type)(registry, ...params);

  checkPedantic(created, params, isPedantic);

  if (blockHash) {
    created.createdAtHash = createType(registry, 'Hash', blockHash);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return created as any;
}

// An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, when it cannot parse, will yield a
// runtime error.
export function createTypeUnsafe<T extends Codec = Codec, K extends string = string> (registry: Registry, type: K, params: unknown[] = [], options: CreateOptions = {}): DetectCodec<T, K> {
  let Clazz: Constructor | null = null;
  let firstError: Error | null = null;

  try {
    Clazz = createClass<T, K>(registry, type);

    return initType(registry, Clazz, params, options);
  } catch (error) {
    firstError = new Error(`createType(${type}):: ${(error as Error).message}`);
  }

  if (Clazz && Clazz.__fallbackType) {
    try {
      Clazz = createClass<T, K>(registry, Clazz.__fallbackType as unknown as K);

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
export function createType<T extends Codec = Codec, K extends string = string> (registry: Registry, type: K, ...params: unknown[]): DetectCodec<T, K> {
  return createTypeUnsafe<T, K>(registry, type, params);
}
