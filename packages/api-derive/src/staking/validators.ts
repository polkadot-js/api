// Copyright 2017-2026 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveStakingValidators } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { memo } from '../util/index.js';
import { electedKeysAt } from './util.js';

/**
 * @name nextElected
 * @description Retrieves the list of accounts that are set to be the next elected validators in the staking system. It provides a preview of who will be validators in the next staking era.
 * @example
 * ```javascript
 * const nextElected = await api.derive.staking.nextElected();
 * console.log(
 *   "Next Elected Validators:",
 *   nextElected.map((acc) => acc.toString())
 * );
 * ```
 */
export function nextElected (instanceId: string, api: DeriveApi): () => Observable<AccountId[]> {
  return memo(instanceId, (): Observable<AccountId[]> =>
    // Compatibility for future generation changes in staking.
    isFunction(api.query.staking.erasStakersOverview) || isFunction(api.query.staking.erasStakers)
      ? api.derive.session.indexes().pipe(
        // only populate for next era in the last session, so track both here - entries are not
        // subscriptions, so we need a trigger - currentIndex acts as that trigger to refresh
        switchMap(({ currentEra }) => electedKeysAt(api, currentEra))
      )
      : api.query.staking['currentElected']<AccountId[]>()
  );
}

/**
 * @name validators
 * @description Retrieve latest list of validators.
 * @example
 * ```javascript
 * const { validators, nextElected } = await api.derive.staking.validators();
 * console.log(
 *   "Current Validators:",
 *   validators.map((v) => v.toString())
 * );
 * console.log(
 *   "Next Elected Validators:",
 *   nextElected.map((v) => v.toString())
 * );
 * ```
 */
export function validators (instanceId: string, api: DeriveApi): () => Observable<DeriveStakingValidators> {
  return memo(instanceId, (): Observable<DeriveStakingValidators> =>
    // Sadly the node-template is (for some obscure reason) not comprehensive, so while the derive works
    // in all actual real-world deployed chains, it does create some confusion for limited template chains
    combineLatest([
      api.query.session
        ? api.query.session.validators()
        : of([]),
      api.query.staking
        ? api.derive.staking.nextElected()
        : of([])
    ]).pipe(
      map(([validators, nextElected]): DeriveStakingValidators => ({
        nextElected: nextElected.length
          ? nextElected
          : validators,
        validators
      }))
    ));
}
