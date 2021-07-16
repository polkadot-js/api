// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, InterfaceTypes, WrappedConstructor } from '../../types';

import { isFunction } from '@polkadot/util';

export function isWrappedClass <T extends Codec = Codec> (value: unknown): value is WrappedConstructor<T> {
  return !!value && isFunction((value as WrappedConstructor).Clazz) && (value as WrappedConstructor).isWrapped;
}

export function unwrapClass <T extends Codec = Codec> (value: WrappedConstructor<T> | Constructor<T> | keyof InterfaceTypes): Constructor<T> | keyof InterfaceTypes {
  return isWrappedClass(value)
    ? value.Clazz
    : value;
}
