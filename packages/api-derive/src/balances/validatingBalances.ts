// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId } from '@polkadot/types/index';

import { DerivedBalancesMap } from '../types';
import { drr } from '../util/drr';
import { validatingBalance } from './validatingBalance';

export function validatingBalances (api: ApiInterface$Rx) {
  return (accountIds: Array<AccountId | string>): Observable<DerivedBalancesMap> => {
    return !accountIds || !accountIds.length
      ? of({}).pipe(drr())
      : combineLatest(
        accountIds.map(validatingBalance(api))
      ).pipe(
        map((result) => {
          return result.reduce((balances, balance) => {
            balances[balance.accountId.toString()] = balance;

            return balances;
          }, {} as DerivedBalancesMap);
        }),
        drr()
      );
  };
}
