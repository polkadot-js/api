// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecRegistry } from '@polkadot/types-codec/types';
import type { DetectCodec } from '../types';

import { createTypeUnsafe } from '@polkadot/types-create';

/**
 * Create an instance of a `type` with a given `params`.
 * @param type - A recognizable string representing the type to create an
 * instance from
 * @param params - The value to instantiate the type with
 */
export function createType<T extends Codec = Codec, K extends string = string> (registry: CodecRegistry, type: K, ...params: unknown[]): DetectCodec<T, K> {
  return createTypeUnsafe(registry, type, params);
}
