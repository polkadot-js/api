// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, EraRewardPoints } from '@polkadot/types/interfaces';
import { DeriveEraPoints, DeriveEraValPoints } from '../types';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { deriveCache, memo } from '../util';

const CACHE_KEY = '_erasPoints';

function mapValidators ({ individual }: EraRewardPoints): DeriveEraValPoints {
  return [...individual.entries()]
    .filter(([, points]): boolean => points.gtn(0))
    .reduce((result: DeriveEraValPoints, [validatorId, points]): DeriveEraValPoints => {
      result[validatorId.toString()] = points;

      return result;
    }, {});
}

function mapPoints (eras: EraIndex[], points: EraRewardPoints[]): DeriveEraPoints[] {
  return eras.map((era, index): DeriveEraPoints => ({
    era,
    eraPoints: points[index].total,
    validators: mapValidators(points[index])
  }));
}

export function _erasPoints (api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraPoints[]> {
  return memo((_eras: EraIndex[], withActive: boolean): Observable<DeriveEraPoints[]> => {
    if (!_eras.length) {
      return of([]);
    }

    const cached: DeriveEraPoints[] = deriveCache.get(CACHE_KEY) || [];
    const eras = withActive
      ? _eras
      : _eras.filter((era) => !cached.some((cached) => era.eq(cached.era)));

    if (!eras.length) {
      return of(
        _eras
          .map((era) => cached.find((cached) => era.eq(cached.era)))
          .filter((value): value is DeriveEraPoints => !!value)
      );
    }

    return api.query.staking.erasRewardPoints.multi<EraRewardPoints>(eras).pipe(
      map((points) => {
        const retrieved = mapPoints(eras, points);

        return deriveCache.set(
          CACHE_KEY,
          _eras
            .map((era) =>
              cached.find((cached) => era.eq(cached.era)) ||
              retrieved.find((retrieved) => era.eq(retrieved.era))
            )
            .filter((value): value is DeriveEraPoints => !!value)
        );
      })
    );
  });
}

export function erasPoints (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraPoints[]> {
  return memo((withActive = false): Observable<DeriveEraPoints[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasPoints(eras, withActive))
    )
  );
}
