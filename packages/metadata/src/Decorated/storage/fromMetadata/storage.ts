// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { Registry } from '@polkadot/types/types';
import { Storage } from '../../types';

import * as substrate from './substrate';

/** @internal */
export default function getStorage (registry: Registry, metaVersion: number): Storage {
  return {
    substrate: Object
      .entries(substrate)
      .reduce((storage: Record<string, StorageEntry>, [key, fn]): Record<string, StorageEntry> => {
        (storage as Record<string, unknown>)[key] = fn(registry, metaVersion);

        return storage;
      }, {})
  };
}
