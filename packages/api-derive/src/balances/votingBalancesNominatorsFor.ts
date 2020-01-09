// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import { DerivedBalances } from '../types';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Vec } from '@polkadot/types';

import { memo } from '../util';

export function votingBalancesNominatorsFor (api: ApiInterfaceRx): (address: AccountId | AccountIndex | Address | string) => Observable<DerivedBalances[]> {
  return memo((address: AccountId | AccountIndex | Address | string): Observable<DerivedBalances[]> =>
    api.derive.accounts.info(address).pipe(
      switchMap(({ accountId }): Observable<AccountId[]> =>
        accountId
          ? api.query.staking.nominatorsFor<Vec<AccountId>>(accountId)
          : of([] as AccountId[])
      ),
      switchMap((accounts): Observable<DerivedBalances[]> =>
        api.derive.balances.votingBalances(accounts)
      )
    ));
}
