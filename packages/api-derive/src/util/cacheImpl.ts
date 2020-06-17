// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveCache } from './types';

const mapCache = new Map<string, any>();

const deriveMapCache: DeriveCache = {
  del: (key: string): void => {
    mapCache.delete(key);
  },
  forEach: (cb: (key: string, value: any) => void): void => {
    const entries = mapCache.entries();

    for (const entry in entries) {
      cb(entry[0], entry[1]);
    }
  },
  get: <T = any> (key: string): T | undefined => {
    return mapCache.get(key) as T;
  },
  set: (key: string, value: any): void => {
    mapCache.set(key, value);
  }
};

const deriveNoopCache: DeriveCache = {
  del: (): void => undefined,
  forEach: () => undefined,
  get: (): undefined => undefined,
  set: (_: string, value: unknown): unknown => value
};

export { deriveMapCache, deriveNoopCache };
