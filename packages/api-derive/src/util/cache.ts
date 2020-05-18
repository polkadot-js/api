// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveCache } from './types';

const deriveNoopCache: DeriveCache = {
  get: (): undefined => undefined,
  set: (_: string, value: any): any => value
};

let deriveCache: DeriveCache = deriveNoopCache;

export function setDeriveCache (prefix: string, cache = deriveNoopCache): void {
  deriveCache = {
    get: <T = any> (key: string): T | undefined => cache.get<T>(`derive:${prefix}:${key}`),
    set: <T = any> (key: string, value: any): T => cache.set(`derive:${prefix}:${key}`, value)
  };
}

export { deriveCache };
