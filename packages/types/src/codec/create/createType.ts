// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes } from '../../types';
import { FromReg } from './types';

import { isU8a, u8aToHex } from '@polkadot/util';

import { InterfaceRegistry } from '../../interfaceRegistry';
import { createClass } from './createClass';

function u8aHasValue (value: Uint8Array): boolean {
  return value.some((v): boolean => !!v);
}

// With isPedantic, actually check that the encoding matches that supplied. This
// is much slower, but verifies that we have the correct types defined
function checkInstance<T extends Codec = Codec, K extends string = string> (value: Uint8Array, created: FromReg<T, K>): void {
  // For option, we are not adding  the initial byte (this is via storage)
  const crHex = created.toHex(true);
  const inHex = u8aToHex(value);

  // if the hex doesn't match and the value for both is non-empty, complain... bitterly
  if (inHex !== crHex && (u8aHasValue(value) || u8aHasValue(created.toU8a(true)))) {
    console.warn(`${created.toRawType()}:: Input doesn't match output, received ${inHex}, created ${crHex}`);
  }
}

// Initializes a type with a value. This also checks for fallbacks and in the cases
// where isPedantic is specified (storage decoding), also check the format/structure
function initType<T extends Codec = Codec, K extends string = string> (Type: Constructor<FromReg<T, K>>, params: any[] = [], isPedantic?: boolean): FromReg<T, K> {
  const created = new Type(...params);
  const [value] = params;

  if (isPedantic && isU8a(value)) {
    checkInstance(value, created);
  }

  return created;
}

// An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, if not parseable, will yield a
// runtime error.
export function createTypeUnsafe<T extends Codec = Codec, K extends string = string> (type: K, params: any[] = [], isPedantic?: boolean): FromReg<T, K> {
  try {
    return initType(createClass<T, K>(type), params, isPedantic);
  } catch (error) {
    throw new Error(`createType(${type}):: ${error.message}`);
  }
}

/**
 * Create an instance of a `type` with a given `params`.
 * @param type - A recognizable string representing the type to create an
 * instance from
 * @param params - The value to instantiate the type with
 */
export function createType<K extends InterfaceTypes> (type: K, ...params: any[]): InterfaceRegistry[K] {
  // error TS2589: Type instantiation is excessively deep and possibly infinite.
  // The above happens with as Constructor<InterfaceRegistry[K]>;
  return createTypeUnsafe<Codec, K>(type, params) as any;
}
