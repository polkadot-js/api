// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, InterfaceTypes, Registry, WrappedConstructor } from '../../types';

import { isString } from '@polkadot/util';

import { isWrappedClass } from './isWrappedClass';

export function typeToConstructor <T extends Codec = Codec> (registry: Registry, type: keyof InterfaceTypes | Constructor<T> | WrappedConstructor<T>): Constructor<T> {
  return (
    isString(type)
      ? registry.createClass(type)
      : isWrappedClass(type)
        ? type.Clazz
        : type
  ) as Constructor<T>;
}
