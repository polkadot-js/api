// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveCache } from './types';

const mapCache = new Map<string, any>();

export const deriveMapCache: DeriveCache = {
  del: (key: string): void => {
    mapCache.delete(key);
  },
  forEach: (cb: (key: string, value: any) => void): void => {
    for (const [k, v] of mapCache.entries()) {
      cb(k, v);
    }
  },
  get: <T = any> (key: string): T | undefined => {
    return mapCache.get(key) as T;
  },
  set: (key: string, value: any): void => {
    mapCache.set(key, value);
  }
};

export const deriveNoopCache: DeriveCache = {
  del: (): void => undefined,
  forEach: () => undefined,
  get: (): undefined => undefined,
  set: (_: string, value: unknown): unknown => value
};
