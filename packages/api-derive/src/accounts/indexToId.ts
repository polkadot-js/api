// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { ENUMSET_SIZE } from '@polkadot/types/type/AccountIndex';
import { AccountId, AccountIndex, Vector } from '@polkadot/types';

import { drr } from '../util/drr';

export function indexToId (api: ApiInterface$Rx) {
  return (_accountIndex: AccountIndex | string): Observable<AccountId> => {
    const querySection = api.query.indices || api.query.balances;
    const accountIndex = _accountIndex instanceof AccountIndex
      ? _accountIndex
      : new AccountIndex(_accountIndex);

    return (querySection.enumSet(accountIndex.div(ENUMSET_SIZE)) as Observable<Vector<AccountId>>)
      .pipe(
        startWith([]),
        map((accounts) => (accounts || [])[accountIndex.mod(ENUMSET_SIZE).toNumber()]),
        drr()
      );
  };

}
