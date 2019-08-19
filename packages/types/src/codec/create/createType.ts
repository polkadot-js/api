// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes } from '../../types';
import { FromReg } from './types';

import { InterfaceRegistry } from '../../interfaceRegistry';
import { createClass } from './createClass';

// With isPedantic, actually check that the encoding matches that supplied. This
// is much slower, but verifies that we have the correct types defined
function checkInstance<T extends Codec = Codec, K extends string = string> (value: any, created: FromReg<T, K>): void {
  const inHex = value.toHex(true);
  const crHex = created.toHex(true);
  const hasMatch = (inHex === crHex) || (value.toU8a(true).toString() === (
    created instanceof Uint8Array
      // strip the input length
      ? created.toU8a().toString()
      // compare raw. without additions
      : created.toU8a(true).toString()
  ));

  if (!hasMatch) {
    console.warn(`${created.toRawType()}:: Input doesn't match output, received ${inHex}, created ${crHex}`);
  }
}

// Initializes a type with a value. This also checks for fallbacks and in the cases
// where isPedantic is specified (storage decoding), also check the format/structure
function initType<T extends Codec = Codec, K extends string = string> (Type: Constructor<FromReg<T, K>>, params: any[] = [], isPedantic?: boolean): FromReg<T, K> {
  const created = new Type(...params);
  const [value] = params;

  if (isPedantic && value && value.toU8a && !value.isEmpty) {
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
  return createTypeUnsafe<Codec, K>(type, params) as InterfaceRegistry[K];
}
