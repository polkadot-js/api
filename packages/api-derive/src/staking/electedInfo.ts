// Copyright 2017-2026 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveStakingElected, StakingQueryFlags } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { arrayFlatten } from '@polkadot/util';

import { memo } from '../util/index.js';
import { electedKeysAt } from './util.js';

const DEFAULT_FLAGS = { withController: true, withExposure: true, withPrefs: true };

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
          api.query.session
            ? api.query.session.validators()
            : of([] as AccountId[]),
          electedKeysAt(api, currentEra)
        ]).pipe(
          switchMap(([validators, plannedElected]): Observable<DeriveStakingElected> => {
            // a stash is only exposed against the era it was elected for, so the stashes elected
            // for the planned era resolve against it and the validators it drops against the
            // active era - until the election result is stored the planned era has none at all,
            // and the current validators are the best answer for the next set as well
            const plannedIds = new Set(plannedElected.map((a) => a.toString()));
            const active = validators.filter((v) => !plannedIds.has(v.toString()));
            const nextElected = plannedElected.length
              ? plannedElected
              : validators;

            return combineLatest([
              api.derive.staking.queryMulti(plannedElected, flags, page, currentEra),
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
