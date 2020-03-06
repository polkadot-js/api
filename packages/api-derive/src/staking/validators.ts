// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Exposure } from '@polkadot/types/interfaces';
import { DeriveStakingValidators } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StorageKey } from '@polkadot/types';

import { memo } from '../util';

function queryNextStakers (api: ApiInterfaceRx): Observable<AccountId[]> {
  // only populate for next era in the last session, so track both here - entries are not
  // subscriptions, so we need a trigger - currentIndex acts as that trigger to refresh
  return api.derive.session.indexes().pipe(
    switchMap(({ activeEra }): Observable<[StorageKey, Exposure][]> =>
      api.query.staking.erasStakers.entries(activeEra.addn(1))
    ),
    map((entries): AccountId[] =>
      entries.map(([key]): AccountId => key.args[1] as AccountId)
    )
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
        ? api.query.staking.erasStakers
          ? queryNextStakers(api)
          : api.query.staking.currentElected<AccountId[]>()
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
