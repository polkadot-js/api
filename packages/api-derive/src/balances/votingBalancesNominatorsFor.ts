// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@plugnet/api/types';
import { AccountId, AccountIndex, Address, Vector, VectorAny } from '@plugnet/types';

import { idAndIndex } from '../accounts/idAndIndex';
import { DerivedBalances } from '../types';
import { drr } from '../util/drr';
import { votingBalances } from './votingBalances';

export function votingBalancesNominatorsFor (api: ApiInterface$Rx) {
  return (address: AccountId | AccountIndex | Address | string): Observable<VectorAny<DerivedBalances>> => {
    return idAndIndex(api)(address).pipe(
      switchMap(([accountId]) =>
        accountId
          ? (api.query.staking.nominatorsFor(accountId) as Observable<Vector<AccountId>>)
          : of([] as Array<AccountId>)
      ),
      switchMap(votingBalances(api)),
      drr()
    );
  };
}
