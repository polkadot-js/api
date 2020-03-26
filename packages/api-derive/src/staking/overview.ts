// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, EraPoints, EraRewardPoints, RewardPoint } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedStakingOverview } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

function retrievePointsPrev (api: ApiInterfaceRx, currentElected: AccountId[]): Observable<EraRewardPoints> {
  return api.query.staking.currentEraPointsEarned<EraPoints>().pipe(
    map(({ individual, total }): EraRewardPoints =>
      api.registry.createType('EraRewardPoints', {
        total,
        individual: new Map<AccountId, RewardPoint>(
          individual
            .map((points): RewardPoint => api.registry.createType('RewardPoint', points))
            .map((points, index): [AccountId, RewardPoint] => [currentElected[index], points])
        )
      })
    )
  );
}

/**
 * @description Retrieve the staking overview, including elected and points earned
 */
export function overview (api: ApiInterfaceRx): () => Observable<DerivedStakingOverview> {
  return memo((): Observable<DerivedStakingOverview> =>
    combineLatest([
      api.derive.session.indexes(),
      api.derive.staking.validators()
    ]).pipe(
      switchMap(([indexes, { nextElected, validators }]) =>
        combineLatest([
          of({ ...indexes, nextElected, validators }),
          api.query.staking.erasRewardPoints
            ? api.query.staking.erasRewardPoints<EraRewardPoints>(indexes.activeEra)
            : api.query.staking.currentEraPointsEarned
              ? retrievePointsPrev(api, nextElected)
              : of(api.registry.createType('EraRewardPoints'))
        ])
      ),
      map(([info, eraPoints]): DerivedStakingOverview => ({
        ...info, eraPoints
      }))
    ));
}
