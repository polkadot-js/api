// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { ActiveEraInfo, EraIndex, EraRewardPoints, RewardPoint } from '@polkadot/types/interfaces';
import { DeriveEraPointsAll } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option, u32 } from '@polkadot/types';

import { memo } from '../util';

function getAvailableIndexes (api: ApiInterfaceRx): Observable<EraIndex[]> {
  return api.query.staking?.activeEra
    ? api.queryMulti<[Option<ActiveEraInfo>, u32]>([
      api.query.staking.activeEra,
      api.query.staking.historyDepth
    ]).pipe(
      map(([activeEraOpt, historyDepth]): EraIndex[] => {
        const result: EraIndex[] = [];
        const max = historyDepth.toNumber();
        let lastEra = activeEraOpt.unwrapOrDefault().index.subn(1);

        while (lastEra.gten(0) && result.length < max) {
          result.push(api.registry.createType('EraIndex', lastEra));

          lastEra = lastEra.subn(1);
        }

        // go from oldest to newest
        return result.reverse();
      })
    )
    : of([]);
}

export function erasPoints (api: ApiInterfaceRx): () => Observable<DeriveEraPointsAll[]> {
  return memo((): Observable<DeriveEraPointsAll[]> =>
    getAvailableIndexes(api).pipe(
      switchMap((indexes): Observable<[EraIndex[], EraRewardPoints[]]> =>
        combineLatest([
          of(indexes),
          indexes.length
            ? api.query.staking.erasRewardPoints.multi<EraRewardPoints>(indexes)
            : of([])
        ])
      ),
      map(([eras, rewards]): DeriveEraPointsAll[] =>
        eras.map((era, index): DeriveEraPointsAll => ({
          all: [...rewards[index].individual.entries()]
            .filter(([, points]): boolean => points.gtn(0))
            .reduce((all: Record<string, RewardPoint>, [validatorId, points]): Record<string, RewardPoint> => {
              all[validatorId.toString()] = points;

              return all;
            }, {}),
          era,
          total: rewards[index].total
        }))
      )
    )
  );
}
