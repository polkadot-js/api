// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, CodecRegistry } from '@polkadot/types-codec/types';
import type { DetectCodec } from '../types';

import { createClassUnsafe } from '@polkadot/types-create';

export function createClass<T extends Codec = Codec, K extends string = string> (registry: CodecRegistry, type: K): CodecClass<DetectCodec<T, K>> {
  return createClassUnsafe(registry, type);
}
