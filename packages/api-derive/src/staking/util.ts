// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { EraIndex } from '@polkadot/types/interfaces';

import { deriveCache } from '../util';

export function filterEras <T extends { era: EraIndex }> (eras: EraIndex[], list: T[]): EraIndex[] {
  return eras.filter((era) => !list.some((entry) => era.eq(entry.era)));
}

export function cacheMulti <T extends { era: EraIndex }> (key: string, list: T[], doCache: boolean): void {
  doCache && list.forEach((entry) => deriveCache.set(`${key}-${entry.era.toString()}`, entry));
}
