// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes, Registry } from '../../types';
import { FromReg } from './types';

import { InterfaceRegistry } from '../../interfaceRegistry';
import { getTypeClass } from './getTypeClass';
import { getTypeDef } from './getTypeDef';

export function createClass<T extends Codec = Codec, K extends string = string> (registry: Registry, type: K): Constructor<FromReg<T, K>> {
  return getTypeClass<FromReg<T, K>>(registry, getTypeDef(type));
}

// An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, if it cannot be parsed, it will yield
// a runtime error.
export function ClassOfUnsafe<T extends Codec = Codec, K extends string = string> (registry: Registry, name: K): Constructor<FromReg<T, K>> {
  return createClass<T, K>(registry, name);
}

// alias for createClass
export function ClassOf<K extends InterfaceTypes> (registry: Registry, name: K): Constructor<InterfaceRegistry[K]> {
  // TS2589: Type instantiation is excessively deep and possibly infinite.
  // The above happens with as Constructor<InterfaceRegistry[K]>;
  return ClassOfUnsafe<Codec, K>(registry, name) as any;
}
