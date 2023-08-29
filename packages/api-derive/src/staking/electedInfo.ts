// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveStakingElected, StakingQueryFlags } from '../types.js';

import { map, switchMap } from 'rxjs';

import { arrayFlatten } from '@polkadot/util';

import { memo } from '../util/index.js';

const DEFAULT_FLAGS = { withController: true, withExposure: true, withPrefs: true };

function combineAccounts (nextElected: AccountId[], validators: AccountId[]): AccountId[] {
  return arrayFlatten([nextElected, validators.filter((v) => !nextElected.find((n) => n.eq(v)))]);
}

export function electedInfo (instanceId: string, api: DeriveApi): (flags?: StakingQueryFlags) => Observable<DeriveStakingElected> {
  return memo(instanceId, (flags: StakingQueryFlags = DEFAULT_FLAGS): Observable<DeriveStakingElected> =>
    api.derive.staking.validators().pipe(
      switchMap(({ nextElected, validators }): Observable<DeriveStakingElected> =>
        api.derive.staking.queryMulti(combineAccounts(nextElected, validators), flags).pipe(
          map((info): DeriveStakingElected => ({
            info,
            nextElected,
            validators
          }))
        )
      )
    )
  );
}
