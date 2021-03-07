// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, InterfaceTypes, Registry } from '../types';
import type { FromReg } from './types';

import { logger } from '@polkadot/util';

import { createClass } from './createClass';

interface CreateOptions {
  blockHash?: Uint8Array | string | null;
  isPedantic?: boolean;
  withoutLog?: boolean;
}

const l = logger('registry');

// TODO: Fix and re-enable
// With isPedantic, actually check that the encoding matches that supplied. This
// is much slower, but verifies that we have the correct types defined
// function checkInstance<T extends Codec = Codec, K extends string = string> (value: Uint8Array, created: FromReg<T, K>): void {
//   // the underlying type created.toRawType()
//   const rawType = created.toRawType();

//   // ignore bytes completely - this is probably a FIXME, since these are somewhat
//   // breaking for at least online queries - not quite sure wtf is going wrong here
//   if (rawType === 'Bytes') {
//     return;
//   }

//   // the hex values for what we have
//   const inHex = u8aToHex(value);
//   const crHex = created.toHex();

//   // Check equality, based on some different approaches (as decoded)
//   const isEqual = inHex === crHex || // raw hex values, quick path
//     inHex === created.toHex(true) || // wrapped options
//     u8aToHex(value.reverse()) === crHex; // reverse (for numbers, which are BE)

//   // if the hex doesn't match and the value for both is non-empty, complain... bitterly
//   if (!isEqual && (u8aHasValue(value) || u8aHasValue(created.toU8a(true)))) {
//     l.warn(`${rawType}:: Input doesn't match output, received ${u8aToHex(value)}, created ${crHex}`);
//   }
// }

// Initializes a type with a value. This also checks for fallbacks and in the cases
// where isPedantic is specified (storage decoding), also check the format/structure
function initType<T extends Codec = Codec, K extends string = string> (registry: Registry, Type: Constructor<FromReg<T, K>>, params: any[] = [], { blockHash }: CreateOptions = {}): FromReg<T, K> {
  const created = new Type(registry, ...params);

  if (blockHash) {
    created.createdAtHash = createType(registry, 'Hash', blockHash);
  }

  // if (isPedantic && isU8a(value)) {
  //   checkInstance(value, created);
  // }

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
