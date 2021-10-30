// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageEntry } from '../../../primitive/types';
import type { Registry } from '../../../types';
import type { Storage } from '../types';

import { substrate } from './substrate';

/** @internal */
export function getStorage (registry: Registry): Storage {
  return {
    substrate: Object
      .entries(substrate)
      .reduce((storage: Record<string, StorageEntry>, [key, fn]): Record<string, StorageEntry> => {
        storage[key] = fn(registry);

        return storage;
      }, {})
  };
}
