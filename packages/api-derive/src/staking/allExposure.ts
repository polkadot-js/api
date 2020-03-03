// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, Exposure } from '@polkadot/types/interfaces';
import { DeriveEraExposure } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

function queryClipped (api: ApiInterfaceRx): Observable<[[EraIndex, string][], Exposure[]]> {
  return api.derive.staking.erasPoints().pipe(
    switchMap((allPoints): Observable<[[EraIndex, string][], Exposure[]]> => {
      const indexes: [EraIndex, string][] = [];

      allPoints.forEach(({ all, era }): void => {
        Object.keys(all).forEach((validatorId): void => {
          indexes.push([era, validatorId]);
        });
      });

      // FIXME use prefix queries, get going first
      return combineLatest([
        of(indexes),
        indexes.length
          ? api.query.staking.eraStakersClipped.multi<Exposure>(indexes)
          : of([] as Exposure[])
      ]);
    })
  );
}

export function erasExposure (api: ApiInterfaceRx): () => Observable<DeriveEraExposure[]> {
  return memo((): Observable<DeriveEraExposure[]> =>
    queryClipped(api).pipe(
      map(([indexes, exposures]): DeriveEraExposure[] => {
        const result: DeriveEraExposure[] = [];

        indexes.forEach(([era, validatorId], index): void => {
          let entry = result.find((entry): boolean => entry.era.eq(era));

          if (!entry) {
            entry = { all: {}, era };

            result.push(entry);
          }

          entry.all[validatorId] = exposures[index];
        });

        return result;
      })
    )
  );
}
