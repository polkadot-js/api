// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveCache } from './types';

interface CacheValue<T> {
  v: T;
  x: number;
}

const CHACHE_EXPIRY = 7 * (24 * 60) * (60 * 1000);

const deriveNoopCache: DeriveCache = {
  del: (): void => undefined,
  forEach: () => undefined,
  get: (): undefined => undefined,
  set: (_: string, value: any): any => value
};

let deriveCache: DeriveCache;

export function setDeriveCache (prefix = '', cache = deriveNoopCache): void {
  const keyStart = `derive:${prefix}:`;

  deriveCache = {
    del: (partial: string): void => cache.del(`${keyStart}${partial}`),
    forEach: cache.forEach,
    get: <T = any> (partial: string): T | undefined => {
      const key = `${keyStart}${partial}`;
      const cached = cache.get<CacheValue<T>>(key);

      if (cached) {
        cached.x = Date.now();
        cache.set(key, cached);

        return cached.v;
      }

      return undefined;
    },
    set: (partial: string, v: any): void => {
      cache.set(`${keyStart}${partial}`, { v, x: Date.now() });
    }
  };

  // clear all expired values
  const now = Date.now();
  const all: any[] = [];

  cache.forEach((key: string, { x }: CacheValue<any>): void => {
    ((now - x) > CHACHE_EXPIRY) && all.push(key);
  });

  all.forEach((key) => cache.del(key));
}

setDeriveCache();

export { deriveCache };
