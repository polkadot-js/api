// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, Registry } from '@polkadot/types-codec/types';
import type { DetectCodec } from '../types/index.js';

import { createClassUnsafe } from '@polkadot/types-create';

export function createClass<T extends Codec = Codec, K extends string = string> (registry: Registry, type: K): CodecClass<DetectCodec<T, K>> {
  return createClassUnsafe(registry, type);
}
