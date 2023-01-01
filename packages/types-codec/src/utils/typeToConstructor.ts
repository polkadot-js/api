// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, Registry } from '../types';

import { isString } from '@polkadot/util';

export function typeToConstructor <T extends Codec = Codec> (registry: Registry, type: string | CodecClass<T>): CodecClass<T> {
  return (
    isString(type)
      ? registry.createClassUnsafe(type)
      : type
  );
}
