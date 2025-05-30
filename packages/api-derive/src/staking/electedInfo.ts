// Copyright 2017-2025 @polkadot/api-derive authors & contributors
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

/**
 * @name electedInfo
 * @param {StakingQueryFlags} flags? (Optional) Query flags to filter the staking data.
 * @param {number} page? (Optional) The page index for paginated results.
 * @description Retrieves detailed staking information about the next elected validators and their associated staking data.
 * @example
 * ```javascript
 * const { nextElected, validators, info } =
 *   await api.derive.staking.electedInfo();
 * console.log(
 *   "Next Elected Validators:",
 *   nextElected.map((acc) => acc.toString())
 * );
 * console.log(
 *   "Current Validators:",
 *   validators.map((acc) => acc.toString())
 * );
 * console.log("Validator Staking Info:", info);
 * ```
 */
export function electedInfo (instanceId: string, api: DeriveApi): (flags?: StakingQueryFlags, page?: number) => Observable<DeriveStakingElected> {
  return memo(instanceId, (flags: StakingQueryFlags = DEFAULT_FLAGS, page = 0): Observable<DeriveStakingElected> =>
    api.derive.staking.validators().pipe(
      switchMap(({ nextElected, validators }): Observable<DeriveStakingElected> =>
        api.derive.staking.queryMulti(combineAccounts(nextElected, validators), flags, page).pipe(
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
