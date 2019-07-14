// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address, Vector } from '@polkadot/types';

import { idAndIndex } from '../accounts/idAndIndex';
import { DerivedBalances } from '../types';
import { drr } from '../util/drr';
import { votingBalances } from './votingBalances';

export function votingBalancesNominatorsFor (api: ApiInterfaceRx): (address: AccountId | AccountIndex | Address | string) => Observable<DerivedBalances[]> {
  return (address: AccountId | AccountIndex | Address | string): Observable<DerivedBalances[]> => {
    return idAndIndex(api)(address).pipe(
      switchMap(([accountId]): Observable<AccountId[]> =>
        accountId
          ? (api.query.staking.nominatorsFor<Vector<AccountId>>(accountId))
          : of([] as AccountId[])
      ),
      switchMap(votingBalances(api)),
      drr()
    );
  };
}
