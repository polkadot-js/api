// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, Registry } from '../../types';

import { isString } from '@polkadot/util';

export function typeToConstructor <T = Codec> (registry: Registry, type: string | Constructor<T>): Constructor<T> {
  return (
    isString(type)
      ? registry.createClass(type)
      : type
  ) as Constructor<T>;
}
