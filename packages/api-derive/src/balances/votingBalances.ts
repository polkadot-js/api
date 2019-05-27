// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@plugnet/api/types';
import { AccountId, AccountIndex, Address, VectorAny } from '@plugnet/types';

import { DerivedBalances } from '../types';
import { drr } from '../util/drr';
import { votingBalance } from './votingBalance';

export function votingBalances (api: ApiInterface$Rx) {
  return (addresses?: Array<AccountId | AccountIndex | Address | string>): Observable<VectorAny<DerivedBalances>> => {
    return (
      !addresses || !addresses.length
        ? of([] as Array<DerivedBalances>)
        : combineLatest(addresses.map(votingBalance(api)))
    ).pipe(
      map((balances) =>
        new VectorAny(...balances)
      ),
      drr()
    );
  };
}
