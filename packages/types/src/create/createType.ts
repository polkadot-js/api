// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes } from '../primitive/Bytes';
import type { Codec, Constructor, InterfaceTypes, Registry } from '../types';
import type { FromReg } from './types';

import { assert, isHex, isU8a, u8aEq, u8aToHex, u8aToU8a } from '@polkadot/util';

import { createClass } from './createClass';

interface CreateOptions {
  blockHash?: Uint8Array | string | null;
  isPedantic?: boolean;
}

// With isPedantic, actually check that the encoding matches that supplied. This
// is much slower, but verifies that we have the correct types defined
function checkInstance<T extends Codec = Codec, K extends string = string> (value: Uint8Array, created: FromReg<T, K>): void {
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

// Initializes a type with a value. This also checks for fallbacks and in the cases
// where isPedantic is specified (storage decoding), also check the format/structure
function initType<T extends Codec = Codec, K extends string = string> (registry: Registry, Type: Constructor<FromReg<T, K>>, params: unknown[] = [], { blockHash, isPedantic }: CreateOptions = {}): FromReg<T, K> {
  const created = new Type(registry, ...params);
  const value = params[0];

  if (isPedantic) {
    if (isU8a(value)) {
      checkInstance(value, created);
    } else if (isHex(value)) {
      checkInstance(u8aToU8a(value.toString()), created);
    }
  }

  if (blockHash) {
    created.createdAtHash = createType(registry, 'Hash', blockHash);
  }

  return created;
}

// An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, when it cannot parse, will yield a
// runtime error.
export function createTypeUnsafe<T extends Codec = Codec, K extends string = string> (registry: Registry, type: K, params: unknown[] = [], options: CreateOptions = {}): T {
  try {
    return initType(registry, createClass<T, K>(registry, type), params, options);
  } catch (error) {
    throw new Error(`createType(${type}):: ${(error as Error).message}`);
  }
}

/**
 * Create an instance of a `type` with a given `params`.
 * @param type - A recognizable string representing the type to create an
 * instance from
 * @param params - The value to instantiate the type with
 */
export function createType<K extends keyof InterfaceTypes> (registry: Registry, type: K, ...params: unknown[]): InterfaceTypes[K] {
  return createTypeUnsafe<InterfaceTypes[K], K>(registry, type, params);
}
