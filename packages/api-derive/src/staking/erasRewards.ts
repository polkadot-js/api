// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option } from '@polkadot/types';
import type { Balance, EraIndex } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveEraRewards } from '../types';

import { map, of } from 'rxjs';

import { memo } from '../util';
import { filterCachedEras, getEraMultiCache, setEraMultiCache } from './cache';
import { erasHistoricApply, filterEras } from './util';

const CACHE_KEY = 'eraRewards';

function mapRewards (eras: EraIndex[], optRewards: Option<Balance>[]): DeriveEraRewards[] {
  return eras.map((era, index): DeriveEraRewards => ({
    era,
    eraReward: optRewards[index].unwrapOrDefault()
  }));
}

export function _erasRewards (instanceId: string, api: DeriveApi): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraRewards[]> {
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
      map((r) => filterCachedEras(eras, cached, setEraMultiCache(CACHE_KEY, withActive, mapRewards(remaining, r))))
    );
  });
}

export const erasRewards = erasHistoricApply('_erasRewards');
