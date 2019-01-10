// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ApiRx from '@polkadot/api/rx';
import { ENUMSET_SIZE } from '@polkadot/types/AccountIndex';
import { Vector } from '@polkadot/types/codec';
import { AccountId, AccountIndex } from '@polkadot/types/index';

export function accountIndexToId (api: ApiRx) {
  return (accountIndex: AccountIndex | string): Observable<AccountId> => {
    const _accountIndex = accountIndex instanceof AccountIndex
      ? accountIndex
      : new AccountIndex(accountIndex);

    return (api.query.balances.enumSet(accountIndex) as Observable<Vector<AccountId>>)
      .pipe(
        map((accounts) => (accounts || [])[_accountIndex.mod(ENUMSET_SIZE).toNumber()])
      );
  };

}
