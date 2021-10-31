// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageEntry } from '../../../primitive/types';
import type { Registry } from '../../../types';
import type { Storage } from '../types';

import { substrate } from './substrate';

/** @internal */
export function getStorage (registry: Registry): Storage {
  const storage: Record<string, StorageEntry> = {};

  for (const [k, fn] of Object.entries(substrate)) {
    storage[k] = fn(registry);
  }
  return { substrate: storage };
}
