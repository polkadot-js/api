// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { ActiveEraInfo, Balance, EraIndex, EraRewardPoints } from '@polkadot/types/interfaces';
import { DeriveEraPointsAll, DeriveEraValPoints } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option, u32 } from '@polkadot/types';

import { memo } from '../util';

function getAvailableIndexes (api: ApiInterfaceRx, withActive?: boolean): Observable<EraIndex[]> {
  return api.query.staking?.activeEra
    ? api.queryMulti<[Option<ActiveEraInfo>, u32]>([
      api.query.staking.activeEra,
      api.query.staking.historyDepth
    ]).pipe(
      map(([activeEraOpt, historyDepth]): EraIndex[] => {
        const result: EraIndex[] = [];
        const max = historyDepth.toNumber();
        let lastEra = activeEraOpt.unwrapOrDefault().index.subn(withActive ? 0 : 1);

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

function mapValidators ({ individual }: EraRewardPoints): DeriveEraValPoints {
  return [...individual.entries()]
    .filter(([, points]): boolean => points.gtn(0))
    .reduce((result: DeriveEraValPoints, [validatorId, points]): DeriveEraValPoints => {
      result[validatorId.toString()] = points;

      return result;
    }, {});
}

export function erasPoints (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraPointsAll[]> {
  return memo((withActive?: boolean): Observable<DeriveEraPointsAll[]> =>
    getAvailableIndexes(api, withActive).pipe(
      switchMap((indexes): Observable<[EraIndex[], EraRewardPoints[], Option<Balance>[]]> =>
        combineLatest([
          of(indexes),
          indexes.length
            ? api.query.staking.erasRewardPoints.multi<EraRewardPoints>(indexes)
            : of([]),
          indexes.length
            ? api.query.staking.erasValidatorReward.multi<Option<Balance>>(indexes)
            : of([])
        ])
      ),
      map(([eras, points, rewards]): DeriveEraPointsAll[] =>
        eras.map((era, index): DeriveEraPointsAll => ({
          era,
          eraPoints: points[index].total,
          eraReward: rewards[index].unwrapOrDefault(),
          validators: mapValidators(points[index])
        }))
      )
    )
  );
}
