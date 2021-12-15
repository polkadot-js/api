// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, CodecRegistry } from '@polkadot/types-codec/types';
import type { DetectCodec } from '../types';

import { createClassUnsafe, createTypeUnsafe } from '@polkadot/types-create';

export * from '@polkadot/types-create';

export * from './lazy';
export * from './registry';

export function createClass<T extends Codec = Codec, K extends string = string> (registry: CodecRegistry, type: K): CodecClass<DetectCodec<T, K>> {
  return createClassUnsafe(registry, type);
}

/**
 * Create an instance of a `type` with a given `params`.
 * @param type - A recognizable string representing the type to create an
 * instance from
 * @param params - The value to instantiate the type with
 */
export function createType<T extends Codec = Codec, K extends string = string> (registry: CodecRegistry, type: K, ...params: unknown[]): DetectCodec<T, K> {
  return createTypeUnsafe(registry, type, params);
}
