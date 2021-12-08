// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EraIndex } from '@polkadot/types/interfaces';

import { deriveCache } from '../util';

export function getEraCache <T> (CACHE_KEY: string, era: EraIndex, withActive?: boolean): [string, T | undefined] {
  const cacheKey = `${CACHE_KEY}-${era.toString()}`;

  return [
    cacheKey,
    withActive
      ? undefined
      : deriveCache.get<T>(cacheKey)
  ];
}

export function getEraMultiCache <T> (CACHE_KEY: string, eras: EraIndex[], withActive?: boolean): T[] {
  const cached: T[] = withActive
    ? []
    : eras
      .map((e) => deriveCache.get<T>(`${CACHE_KEY}-${e.toString()}`))
      .filter((v): v is T => !!v);

  return cached;
}
