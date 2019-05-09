// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@plugnet/api/types';
import { AccountId, AccountIndex, Address, Balance } from '@plugnet/types';

import { idAndIndex } from '../accounts/idAndIndex';
import { DerivedBalances } from '../types';
import { drr } from '../util/drr';

const EMPTY_ACCOUNT = new AccountId(new Uint8Array(32));

export function votingBalance (api: ApiInterface$Rx) {
  return (address: AccountIndex | AccountId | Address | string): Observable<DerivedBalances> => {
    return idAndIndex(api)(address).pipe(
      switchMap(([accountId]) =>
        (accountId
          ? combineLatest([
            of(accountId),
            api.query.balances.freeBalance(accountId),
            api.query.balances.reservedBalance(accountId)
          ])
          : of([undefined, undefined, undefined])
        ) as Observable<[AccountId?, Balance?, Balance?]>
      ),
      map(([accountId = EMPTY_ACCOUNT, freeBalance = new Balance(0), reservedBalance = new Balance(0)]) => {
        return {
          accountId,
          freeBalance,
          nominatedBalance: new Balance(0),
          reservedBalance,
          stakingBalance: new Balance(0),
          votingBalance: new Balance(
            freeBalance.add(reservedBalance)
          ),
          availableBalance: new Balance(0),
          lockedBalance: new Balance(0),
          vestedBalance: new Balance(0)
        };
      }),
      drr()
    );
  };
}
