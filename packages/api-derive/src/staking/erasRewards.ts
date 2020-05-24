// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Balance, EraIndex } from '@polkadot/types/interfaces';
import { DeriveEraRewards } from '../types';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { deriveCache, memo } from '../util';

const CACHE_KEY = 'eraRewards';

function mapRewards (eras: EraIndex[], optRewards: Option<Balance>[]): DeriveEraRewards[] {
  return eras.map((era, index): DeriveEraRewards => ({
    era,
    eraReward: optRewards[index].unwrapOrDefault()
  }));
}

export function _erasRewards (api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraRewards[]> {
  return memo((eras: EraIndex[], withActive: boolean): Observable<DeriveEraRewards[]> => {
    if (!eras.length) {
      return of([]);
    }

    const cached: DeriveEraRewards[] = withActive
      ? []
      : eras
        .map((era) => deriveCache.get<DeriveEraRewards>(`${CACHE_KEY}-${era.toString()}`))
        .filter((value): value is DeriveEraRewards => !!value);
    const remaining = eras.filter((era) => !cached.some((cached) => era.eq(cached.era)));

    if (!remaining.length) {
      return of(cached);
    }

    return api.query.staking.erasValidatorReward.multi<Option<Balance>>(remaining).pipe(
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

export function erasRewards (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraRewards[]> {
  return memo((withActive = false): Observable<DeriveEraRewards[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasRewards(eras, withActive))
    )
  );
}
