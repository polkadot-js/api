// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageEntry } from '@polkadot/types/primitive/types';
import type { Registry } from '@polkadot/types/types';
import type { Storage } from '../types';

import { substrate } from './substrate';

/** @internal */
export function getStorage (registry: Registry): Storage {
  return {
    substrate: Object
      .entries(substrate)
      .reduce((storage: Record<string, StorageEntry>, [key, fn]): Record<string, StorageEntry> => {
        (storage as Record<string, unknown>)[key] = fn(registry);

        return storage;
      }, {})
  };
}
