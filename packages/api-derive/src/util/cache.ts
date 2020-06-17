// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveCache } from './types';

import { deriveNoopCache } from './cacheImpl';

interface CacheValue<T> {
  v: T;
  x: number;
}

const CHACHE_EXPIRY = 7 * (24 * 60) * (60 * 1000);

let deriveCache: DeriveCache;

function wrapCache (keyStart: string, cache: DeriveCache): DeriveCache {
  return {
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
    set: (partial: string, v: unknown): void => {
      cache.set(`${keyStart}${partial}`, { v, x: Date.now() });
    }
  };
}

function clearCache (cache: DeriveCache): void {
  // clear all expired values
  const now = Date.now();
  const all: any[] = [];

  cache.forEach((key: string, { x }: CacheValue<any>): void => {
    ((now - x) > CHACHE_EXPIRY) && all.push(key);
  });

  // don't do delete inside loop, just in-case
  all.forEach((key) => cache.del(key));
}

export function setDeriveCache (prefix = '', cache?: DeriveCache): void {
  deriveCache = cache
    ? wrapCache(`derive:${prefix}:`, cache)
    : deriveNoopCache;

  if (cache) {
    clearCache(cache);
  }
}

setDeriveCache();

export { deriveCache };
