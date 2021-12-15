// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { StorageEntry } from '../../../primitive/types';
import type { Storage } from '../types';

import { substrate } from './substrate';

/** @internal */
export function getStorage (registry: CodecRegistry): Storage {
  const storage: Record<string, StorageEntry> = {};
  const entries = Object.entries(substrate);

  for (let e = 0; e < entries.length; e++) {
    storage[entries[e][0]] = entries[e][1](registry);
  }

  return { substrate: storage };
}
