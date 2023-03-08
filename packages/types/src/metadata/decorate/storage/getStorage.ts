// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { StorageEntry } from '../../../primitive/types.js';
import type { Storage } from '../types.js';

import { substrate } from './substrate.js';

/** @internal */
export function getStorage (registry: Registry): Storage {
  const storage: Record<string, StorageEntry> = {};
  const entries = Object.entries(substrate);

  for (let e = 0; e < entries.length; e++) {
    storage[entries[e][0]] = entries[e][1](registry);
  }

  return { substrate: storage };
}
