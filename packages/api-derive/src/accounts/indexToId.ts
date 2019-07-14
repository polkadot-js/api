// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { ENUMSET_SIZE } from '@polkadot/types/primitive/AccountIndex';
import { AccountId, AccountIndex, Vector } from '@polkadot/types';

import { drr } from '../util/drr';

/**
 * @name indexToId
 * @param {( AccountIndex | string )} accountIndex - An accounts index in different formats.
 * @returns Returns the corresponding AccountId.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.accounts.indexToId('F7Hs', (accountId) => {
 *   console.log(`The AccountId of F7Hs is ${accountId}`);
 * });
 * ```
 */
export function indexToId (api: ApiInterfaceRx): (accountIndex: AccountIndex | string) => Observable<AccountId | undefined> {
  return (_accountIndex: AccountIndex | string): Observable<AccountId | undefined> => {
    const querySection = api.query.indices || api.query.balances;
    const accountIndex = _accountIndex instanceof AccountIndex
      ? _accountIndex
      : new AccountIndex(_accountIndex);

    return (querySection.enumSet<Vector<AccountId>>(accountIndex.div(ENUMSET_SIZE)))
      .pipe(
        startWith([]),
        map((accounts): AccountId | undefined =>
          (accounts || [])[accountIndex.mod(ENUMSET_SIZE).toNumber()]
        ),
        drr()
      );
  };
}
