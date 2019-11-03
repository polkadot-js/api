// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, EraPoints } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedStakingOverview } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { createType, Vec } from '@polkadot/types';

import { drr } from '../util';
import { indexes as sessionIndexes } from '../session';

/**
 * @description Retrieve the staking overview, including elected and points earned
 */
export function overview (api: ApiInterfaceRx): () => Observable<DerivedStakingOverview> {
  const sessionIndexesCall = sessionIndexes(api);

  return (): Observable<DerivedStakingOverview> =>
    combineLatest([
      sessionIndexesCall(),
      api.queryMulti<[Vec<AccountId>, Vec<AccountId>]>([
        api.query.session.validators,
        api.query.staking.currentElected
      ])
    ]).pipe(
      switchMap(([{ currentEra, currentIndex, validatorCount }, [validators, currentElected]]) =>
        combineLatest([
          of({ currentElected, currentEra, currentIndex, validators, validatorCount }),
          // this will change on a per block basis, keep it innermost (and it needs eraIndex)
          api.query.staking.currentEraPointsEarned
            ? api.query.staking.currentEraPointsEarned<EraPoints>(currentEra)
            : of(createType('EraPoints'))
        ])
      ),
      map(([{ currentElected, currentEra, currentIndex, validators, validatorCount }, eraPoints]): DerivedStakingOverview => ({
        currentElected, currentEra, currentIndex, eraPoints, validators, validatorCount
      })),
      drr()
    );
}
