// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AccountId } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveStakingValidators } from '../types';

import { combineLatest, of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

export function nextElected (instanceId: string, api: ApiInterfaceRx): () => Observable<AccountId[]> {
  return memo(instanceId, (): Observable<AccountId[]> =>
    api.query.staking.erasStakers
      ? api.derive.session.indexes().pipe(
        // only populate for next era in the last session, so track both here - entries are not
        // subscriptions, so we need a trigger - currentIndex acts as that trigger to refresh
        switchMap(({ currentEra }) => api.query.staking.erasStakers.keys(currentEra)),
        map((keys) => keys.map((key) => key.args[1] as AccountId))
      )
      : api.query.staking.currentElected<AccountId[]>()
  );
}

/**
 * @description Retrieve latest list of validators
 */
export function validators (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveStakingValidators> {
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
