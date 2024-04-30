// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveStakingValidators } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util/index.js';

export function nextElected (instanceId: string, api: DeriveApi): () => Observable<AccountId[]> {
  return memo(instanceId, (): Observable<AccountId[]> =>
    // Compatibility for future generation changes in staking. 
    api.query.staking.erasStakersPaged
      ? api.derive.session.indexes().pipe(
        // only populate for next era in the last session, so track both here - entries are not
        // subscriptions, so we need a trigger - currentIndex acts as that trigger to refresh
        switchMap(({ currentEra }) => api.query.staking.erasStakersPaged.keys(currentEra)),
        map((keys) => keys.map(({ args: [, accountId] }) => accountId))
      )
      : api.query.staking.erasStakers
        ? api.derive.session.indexes().pipe(
          // only populate for next era in the last session, so track both here - entries are not
          // subscriptions, so we need a trigger - currentIndex acts as that trigger to refresh
          switchMap(({ currentEra }) => api.query.staking.erasStakers.keys(currentEra)),
          map((keys) => keys.map(({ args: [, accountId] }) => accountId))
        )
        : api.query.staking['currentElected']<AccountId[]>()
  );
}

/**
 * @description Retrieve latest list of validators
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
