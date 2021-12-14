// Copyright 2017-2021 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, CodecRegistry } from '../types';

import { isString } from '@polkadot/util';

export function typeToConstructor <T extends Codec = Codec> (registry: CodecRegistry, type: string | CodecClass<T>): CodecClass<T> {
  return (
    isString(type)
      ? registry.createClass(type)
      : type
  );
}
