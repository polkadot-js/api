// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingEraRewardPoints } from '@polkadot/types/lookup';
import type { DeriveEraPoints, DeriveEraValPoints } from '../types';

import { map, of, switchMap } from 'rxjs';

import { BN_ZERO } from '@polkadot/util';

import { deriveCache, memo } from '../util';
import { filterEras } from './util';

const CACHE_KEY = 'eraPoints';

function mapValidators ({ individual }: PalletStakingEraRewardPoints): DeriveEraValPoints {
  const result: DeriveEraValPoints = {};

  for (const [validatorId, points] of individual.entries()) {
    if (points.gt(BN_ZERO)) {
      result[validatorId.toString()] = points;
    }
  }

  return result;
}

function mapPoints (eras: EraIndex[], points: PalletStakingEraRewardPoints[]): DeriveEraPoints[] {
  const result = new Array<DeriveEraPoints>(eras.length);

  for (let i = 0; i < eras.length; i++) {
    result[i] = {
      era: eras[i],
      eraPoints: points[i].total,
      validators: mapValidators(points[i])
    };
  }

  return result;
}

function filterPoints (points?: DeriveEraPoints): points is DeriveEraPoints {
  return !!points;
}

export function _erasPoints (instanceId: string, api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraPoints[]> {
  return memo(instanceId, (eras: EraIndex[], withActive: boolean): Observable<DeriveEraPoints[]> => {
    if (!eras.length) {
      return of([]);
    }

    const cached: DeriveEraPoints[] = withActive
      ? []
      : eras
        .map((e) => deriveCache.get<DeriveEraPoints>(`${CACHE_KEY}-${e.toString()}`))
        .filter(filterPoints);
    const remaining = filterEras(eras, cached);

    return !remaining.length
      ? of(cached)
      : api.query.staking.erasRewardPoints.multi(remaining).pipe(
        map((points): DeriveEraPoints[] => {
          const query = mapPoints(remaining, points);

          !withActive && query.forEach((q) => deriveCache.set(`${CACHE_KEY}-${q.era.toString()}`, q));

          const result = new Array<DeriveEraPoints>(eras.length);

          for (let i = 0; i < eras.length; i++) {
            const era = eras[i];

            result[i] = cached.find((c) => era.eq(c.era)) || query.find((q) => era.eq(q.era)) as DeriveEraPoints;
          }

          return result;
        })
      );
  });
}

export function erasPoints (instanceId: string, api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraPoints[]> {
  return memo(instanceId, (withActive = false): Observable<DeriveEraPoints[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasPoints(eras, withActive))
    )
  );
}
