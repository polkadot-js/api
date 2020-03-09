// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Balance, EraIndex, Exposure, RewardPoint } from '@polkadot/types/interfaces';
import { DeriveEraExposure, DeriveEraExposures, DeriveEraPointsAll } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StorageKey } from '@polkadot/types';

import { memo } from '../util';

function queryClipped (api: ApiInterfaceRx, withActive?: boolean): Observable<[EraIndex, RewardPoint, Balance, [AccountId, Exposure, RewardPoint][]][]> {
  return api.derive.staking.erasPoints(withActive).pipe(
    switchMap((allPoints): Observable<[DeriveEraPointsAll[], [StorageKey, Exposure][][]]> =>
      combineLatest([
        of(allPoints),
        combineLatest(
          // we could just do entries over the full set, however the set can be quite large - split it into
          // batches - may need to re-visit this, or alternatively use pages keys for exceptionally large sets
          allPoints.map(({ era }): Observable<[StorageKey, Exposure][]> =>
            api.query.staking.erasStakers.entries(era)
          )
        )
      ])
    ),
    map(([allPoints, erasStakers]): [EraIndex, RewardPoint, Balance, [AccountId, Exposure, RewardPoint][]][] =>
      allPoints.map(({ all, era, eraPoints, eraReward }, index): [EraIndex, RewardPoint, Balance, [AccountId, Exposure, RewardPoint][]] => [
        era,
        eraPoints,
        eraReward,
        erasStakers[index].map(([key, exposure]): [AccountId, Exposure, RewardPoint] => [
          key.args[1] as AccountId,
          exposure,
          all[key.args[1].toString()]
        ])
      ])
    )
  );
}

export function erasExposure (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraExposure[]> {
  return memo((withActive?: boolean): Observable<DeriveEraExposure[]> =>
    queryClipped(api, withActive).pipe(
      map((clipped): DeriveEraExposure[] =>
        clipped.map(([era, eraPoints, eraReward, validators]): DeriveEraExposure => ({
          all: validators.reduce((all: DeriveEraExposures, [validtorId, exposure, points]): DeriveEraExposures => {
            all[validtorId.toString()] = {
              exposure,
              points
            };

            return all;
          }, {}),
          era,
          eraPoints,
          eraReward
        }))
      )
    )
  );
}
