// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, Observable, of } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address } from '@polkadot/types';

import { DerivedBalances } from '../types';
import { drr } from '../util/drr';
import { all } from './all';

export function votingBalances (api: ApiInterfaceRx): (addresses?: (AccountId | AccountIndex | Address | string)[]) => Observable<DerivedBalances[]> {
  return (addresses?: (AccountId | AccountIndex | Address | string)[]): Observable<DerivedBalances[]> => {
    return (
      !addresses || !addresses.length
        ? of([] as DerivedBalances[])
        : combineLatest(addresses.map(all(api)))
    ).pipe(
      drr()
    );
  };
}
