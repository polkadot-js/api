// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes } from '../../types';
import { FromReg } from './types';

import { InterfaceRegistry } from '../../interfaceRegistry';
import { getTypeClass } from './getTypeClass';
import { getTypeDef } from './getTypeDef';

export function createClass<T extends Codec = Codec, K extends string = string> (
  type: K
): Constructor<FromReg<T, K>> {
  return getTypeClass<FromReg<T, K>>(getTypeDef(type));
}

// An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, if not parseable, will yield a
// runtime error.
export function ClassOfUnsafe<T extends Codec = Codec, K extends string = string> (name: K): Constructor<FromReg<T, K>> {
  return createClass<T, K>(name);
}

// alias for createClass
export function ClassOf<K extends InterfaceTypes> (name: K): Constructor<InterfaceRegistry[K]> {
  return ClassOfUnsafe<Codec, K>(name) as Constructor<InterfaceRegistry[K]>;
}
