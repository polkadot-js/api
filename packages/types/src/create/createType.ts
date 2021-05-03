// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, InterfaceTypes, Registry } from '../types';
import type { FromReg } from './types';

import { assert, isHex, isU8a, logger, u8aEq, u8aToHex, u8aToU8a } from '@polkadot/util';

import { createClass } from './createClass';

interface CreateOptions {
  blockHash?: Uint8Array | string | null;
  isPedantic?: boolean;
  withoutLog?: boolean;
}

const l = logger('registry');

// With isPedantic, actually check that the encoding matches that supplied. This
// is much slower, but verifies that we have the correct types defined
// eslint-disable-next-line @typescript-eslint/ban-types
function checkInstance<T extends Codec = Codec, K extends string = string> (value: Uint8Array, created: FromReg<T, K>): void {
  const u8a = created.toU8a();
  const rawType = created.toRawType();
  const isEqual = u8aEq(value, u8a) ||
    // :code entries and singular bytes don't have length-prefixes (when from storage)
    (rawType === 'Bytes' && value.length === u8a.length);

  assert(isEqual, () => `${rawType}:: Decoded input doesn't match input, received ${u8aToHex(value, 384)}, created ${u8aToHex(u8a, 384)}`);
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
export function createTypeUnsafe<T extends Codec = Codec, K extends string = string> (registry: Registry, type: K, params: any[] = [], options: CreateOptions = {}): T {
  try {
    // Circle back to isPedantic when it handles all cases 100% - as of now,
    // it provides false warning which is more hinderance than help
    return initType(registry, createClass<T, K>(registry, type), params, options);
  } catch (error) {
    !options.withoutLog && l.error(error);

    throw new Error(`createType(${type}):: ${(error as Error).message}`);
  }
}

/**
 * Create an instance of a `type` with a given `params`.
 * @param type - A recognizable string representing the type to create an
 * instance from
 * @param params - The value to instantiate the type with
 */
export function createType<K extends keyof InterfaceTypes> (registry: Registry, type: K, ...params: any[]): InterfaceTypes[K] {
  return createTypeUnsafe<InterfaceTypes[K], K>(registry, type, params);
}
