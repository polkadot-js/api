// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes, Registry } from '../../types';

import { isString } from '@polkadot/util';

export default function typeToConstructor <T = Codec> (registry: Registry, type: keyof InterfaceTypes | Constructor<T>): Constructor<T> {
  return (
    isString(type)
      ? registry.createClass(type)
      : type
  ) as Constructor<T>;
}
