// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, EraIndex, EraPoints, SessionIndex } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedStakingOverview } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Vec, u32 } from '@polkadot/types';

import { drr } from '../util';

/**
 * @description Retrieve the staking overview, including elected and points earned
 */
export function overview (api: ApiInterfaceRx): () => Observable<DerivedStakingOverview> {
  return (): Observable<DerivedStakingOverview> =>
    // these will change with an Era or epoch, keep it outmost - least amount of changes
    api.queryMulti<[SessionIndex, Vec<AccountId>, Vec<AccountId>, EraIndex, u32]>([
      api.query.session.currentIndex,
      api.query.session.validators,
      api.query.staking.currentElected,
      api.query.staking.currentEra,
      api.query.staking.validatorCount
    ]).pipe(
      switchMap(([currentSession, validators, currentElected, currentEra, validatorCount]) =>
        combineLatest([
          of({ currentElected, currentEra, currentSession, validators, validatorCount }),
          // this will change on a per block basis, keep it innermost (and it needs eraIndex)
          api.query.staking.currentEraPointsEarned<EraPoints>(currentEra)
        ])
      ),
      map(([{ currentElected, currentEra, currentSession, validators, validatorCount }, eraPoints]): DerivedStakingOverview => ({
        currentElected,
        currentEra,
        currentSession,
        eraPoints,
        validators,
        validatorCount
      })),
      drr()
    );
}
