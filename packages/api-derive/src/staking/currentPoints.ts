// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, EraPoints, EraRewardPoints, RewardPoint } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

function retrievePointsPrev (api: ApiInterfaceRx, currentElected: AccountId[]): Observable<EraRewardPoints> {
  return api.query.staking.currentEraPointsEarned<EraPoints>().pipe(
    map(({ individual, total }): EraRewardPoints =>
      api.registry.createType('EraRewardPoints', {
        individual: new Map<AccountId, RewardPoint>(
          individual
            .map((points) => api.registry.createType('RewardPoint', points))
            .map((points, index): [AccountId, RewardPoint] => [currentElected[index], points])
        ),
        total
      })
    )
  );
}

/**
 * @description Retrieve the staking overview, including elected and points earned
 */
export function currentPoints (api: ApiInterfaceRx): () => Observable<EraRewardPoints> {
  return memo((): Observable<EraRewardPoints> =>
    api.derive.staking.overview().pipe(
      switchMap(({ activeEra, nextElected }) =>
        api.query.staking.erasRewardPoints
          ? api.query.staking.erasRewardPoints<EraRewardPoints>(activeEra)
          : api.query.staking.currentEraPointsEarned
            ? retrievePointsPrev(api, nextElected)
            : of(api.registry.createType('EraRewardPoints'))
      )
    ));
}
