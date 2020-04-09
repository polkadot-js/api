// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId } from '@polkadot/types/interfaces';
import { DeriveStakingValidators } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function nextElected (api: ApiInterfaceRx): () => Observable<AccountId[]> {
  return memo((): Observable<AccountId[]> =>
    api.query.staking.erasStakers
      ? api.derive.session.indexes().pipe(
        // only populate for next era in the last session, so track both here - entries are not
        // subscriptions, so we need a trigger - currentIndex acts as that trigger to refresh
        switchMap(({ currentEra }) => api.query.staking.erasStakers.keys(currentEra)),
        map((keys): AccountId[] =>
          keys.map((key): AccountId => key.args[1] as AccountId)
        )
      )
      : api.query.staking.currentElected<AccountId[]>()
  );
}

/**
 * @description Retrieve latest list of validators
 */
export function validators (api: ApiInterfaceRx): () => Observable<DeriveStakingValidators> {
  return memo((): Observable<DeriveStakingValidators> =>
    // Sadly the node-template is (for some obscure reason) not comprehensive, so while the derive works
    // in all actual real-world deployed chains, it does create some confusion for limited template chains
    // NOTE: Not doing multi queries here, since we have validators as a single in the derived newHead
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
