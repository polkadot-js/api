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

const CACHE_KEY = '_erasRewards';

function mapRewards (eras: EraIndex[], optRewards: Option<Balance>[]): DeriveEraRewards[] {
  return eras.map((era, index): DeriveEraRewards => ({
    era,
    eraReward: optRewards[index].unwrapOrDefault()
  }));
}

export function _erasRewards (api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraRewards[]> {
  return memo((_eras: EraIndex[], withActive: boolean): Observable<DeriveEraRewards[]> => {
    if (!_eras.length) {
      return of([]);
    }

    const cached: DeriveEraRewards[] = deriveCache.get(CACHE_KEY) || [];
    const eras = withActive
      ? _eras
      : _eras.filter((era) => !cached.some((cached) => era.eq(cached.era)));

    if (!eras.length) {
      return of(
        _eras
          .map((era) => cached.find((cached) => era.eq(cached.era)))
          .filter((value): value is DeriveEraRewards => !!value)
      );
    }

    return api.query.staking.erasValidatorReward.multi<Option<Balance>>(eras).pipe(
      map((optRewards) => {
        const retrieved = mapRewards(eras, optRewards);

        return deriveCache.set(
          CACHE_KEY,
          _eras
            .map((era) =>
              cached.find((cached) => era.eq(cached.era)) ||
              retrieved.find((retrieved) => era.eq(retrieved.era))
            )
            .filter((value): value is DeriveEraRewards => !!value)
        );
      })
    );
  });
}

export function erasRewards (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraRewards[]> {
  return memo((withActive = false): Observable<DeriveEraRewards[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasRewards(eras, false))
    )
  );
}
