// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { Balance, EraIndex } from '@polkadot/types/interfaces';
import type { DeriveEraRewards } from '../types';

import { map, of } from 'rxjs';

import { deriveCache, memo } from '../util';
import { getEraMultiCache } from './cache';
import { erasHistoricApply, filterEras } from './util';

const CACHE_KEY = 'eraRewards';

function mapRewards (eras: EraIndex[], optRewards: Option<Balance>[]): DeriveEraRewards[] {
  return eras.map((era, index): DeriveEraRewards => ({
    era,
    eraReward: optRewards[index].unwrapOrDefault()
  }));
}

export function _erasRewards (instanceId: string, api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraRewards[]> {
  return memo(instanceId, (eras: EraIndex[], withActive: boolean): Observable<DeriveEraRewards[]> => {
    if (!eras.length) {
      return of([]);
    }

    const cached = getEraMultiCache<DeriveEraRewards>(CACHE_KEY, eras, withActive);
    const remaining = filterEras(eras, cached);

    if (!remaining.length) {
      return of(cached);
    }

    return api.query.staking.erasValidatorReward.multi(remaining).pipe(
      map((optRewards) => {
        const query = mapRewards(remaining, optRewards);

        !withActive && query.forEach((q) => deriveCache.set(`${CACHE_KEY}-${q.era.toString()}`, q));

        return eras.map((era): DeriveEraRewards =>
          cached.find((cached) => era.eq(cached.era)) ||
          query.find((query) => era.eq(query.era)) as DeriveEraRewards
        );
      })
    );
  });
}

export const erasRewards = erasHistoricApply('_erasRewards');
