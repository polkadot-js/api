// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex } from '@polkadot/types/interfaces';

import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { ENUMSET_SIZE } from '@polkadot/types/primitive/Generic/AccountIndex';
import { ClassOf, Vec, createType } from '@polkadot/types';

import { memo } from '../util';

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
  return memo((_accountIndex: AccountIndex | string): Observable<AccountId | undefined> => {
    const accountIndex = _accountIndex instanceof ClassOf(api.registry, 'AccountIndex')
      ? _accountIndex
      : createType(api.registry, 'AccountIndex', _accountIndex);

    return api.query.indices.enumSet
      ? api.query.indices.enumSet<Vec<AccountId>>(accountIndex.div(ENUMSET_SIZE)).pipe(
        startWith([]),
        map((accounts): AccountId | undefined =>
          (accounts || [])[accountIndex.mod(ENUMSET_SIZE).toNumber()]
        )
      )
      : of(undefined);
  });
}
