// Copyright 2017-2026 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveStakingElected, StakingQueryFlags } from '../types.js';

import { combineLatest, map, switchMap } from 'rxjs';

import { arrayFlatten } from '@polkadot/util';

import { memo } from '../util/index.js';
import { electedKeysAt } from './util.js';

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
    api.derive.session.indexes().pipe(
      switchMap(({ activeEra, currentEra }): Observable<DeriveStakingElected> =>
        combineLatest([
          api.derive.staking.validators(),
          electedKeysAt(api, currentEra)
        ]).pipe(
          switchMap(([{ nextElected, validators }, plannedElected]): Observable<DeriveStakingElected> => {
            // a stash is only exposed against the era it was elected for - the planned era has no
            // exposure at all until the election result for it has been stored, hence we resolve
            // against it for the stashes found there and against the active era for the rest
            const plannedIds = new Set(plannedElected.map((a) => a.toString()));
            const combined = combineAccounts(nextElected, validators);
            const planned = combined.filter((a) => plannedIds.has(a.toString()));
            const active = combined.filter((a) => !plannedIds.has(a.toString()));

            return combineLatest([
              api.derive.staking.queryMulti(planned, flags, page, currentEra),
              api.derive.staking.queryMulti(active, flags, page, activeEra)
            ]).pipe(
              map(([plannedInfo, activeInfo]): DeriveStakingElected => ({
                info: arrayFlatten([plannedInfo, activeInfo]),
                nextElected,
                validators
              }))
            );
          })
        )
      )
    )
  );
}
