// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Vec } from '@polkadot/types';

import { info } from '../accounts/info';
import { DerivedBalances } from '../types';
import { drr, memo } from '../util';
import { votingBalances } from './votingBalances';

export const votingBalancesNominatorsFor = memo((api: ApiInterfaceRx): (address: AccountId | AccountIndex | Address | string) => Observable<DerivedBalances[]> => {
  const infoCall = info(api);

  return memo((address: AccountId | AccountIndex | Address | string): Observable<DerivedBalances[]> => {
    return infoCall(address).pipe(
      switchMap(({ accountId }): Observable<AccountId[]> =>
        accountId
          ? (api.query.staking.nominatorsFor<Vec<AccountId>>(accountId))
          : of([] as AccountId[])
      ),
      switchMap(votingBalances(api)),
      drr()
    );
  });
}, true);
