// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, Observable, of } from 'rxjs';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address } from '@polkadot/types';

import { DerivedBalances } from '../types';
import { drr } from '../util/drr';
import { all } from './all';

export function votingBalances (api: ApiInterface$Rx) {
  return (addresses?: Array<AccountId | AccountIndex | Address | string>): Observable<Array<DerivedBalances>> => {
    return (
      !addresses || !addresses.length
        ? of([] as Array<DerivedBalances>)
        : combineLatest(addresses.map(all(api)))
    ).pipe(
      drr()
    );
  };
}
