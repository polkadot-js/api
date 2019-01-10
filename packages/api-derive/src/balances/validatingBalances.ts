// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ApiRx from '@polkadot/api/rx';
import { AccountId } from '@polkadot/types/index';

import { validatingBalance } from './validatingBalance';

import { DerivedBalancesMap } from '../types';

export function validatingBalances (api: ApiRx) {
  return (...params: Array<any>): Observable<DerivedBalancesMap> => {
    const accountIds: Array<AccountId | string> = params.slice(0, params.length - 1);
    return combineLatest(
      accountIds.map(validatingBalance(api))
    ).pipe(
      map((result) =>
        result.reduce((balances, balance) => {
          balances[balance.accountId.toString()] = balance;

          return balances;
        }, {} as DerivedBalancesMap)
      )
    );
  };

}
