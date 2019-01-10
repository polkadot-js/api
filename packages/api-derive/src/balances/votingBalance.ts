// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import ApiRx from '@polkadot/api/rx';
import { AccountId, AccountIndex, Balance } from '@polkadot/types/index';

import { accountIdAndIndex } from './accountIdAndIndex';
import { DerivedBalances } from '../types';
import { drr } from '../util/drr';

const EMPTY_ACCOUNT = new AccountId(new Uint8Array(32));

export function votingBalance (api: ApiRx) {
  return (address: AccountIndex | AccountId | string): Observable<DerivedBalances> =>
    accountIdAndIndex(api)(address).pipe(
      switchMap(([accountId]) => {
        if (accountId) {
          return combineLatest(
            of(accountId),
            api.query.balances.freeBalance(accountId),
            api.query.balances.reservedBalance(accountId)
          ) as Observable<[AccountId?, Balance?, Balance?]>;
        } else {
          return of([undefined, undefined, undefined]) as Observable<[AccountId?, Balance?, Balance?]>;
        }
      }),
      map(([accountId, freeBalance, reservedBalance]) => ({
        accountId: accountId || EMPTY_ACCOUNT,
        freeBalance: freeBalance || new Balance(0),
        nominatedBalance: new Balance(0),
        reservedBalance: reservedBalance || new Balance(0),
        stakingBalance: new Balance(0),
        votingBalance: new Balance(
          (freeBalance || new Balance(0)).add(reservedBalance || new Balance(0))
        )
      })),
      drr()
    );
}
