// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { AccountId, AccountIndex, BalanceOf } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';

import { map, of } from 'rxjs';

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
export function indexToId (instanceId: string, api: ApiInterfaceRx): (accountIndex: AccountIndex | string) => Observable<AccountId | undefined> {
  return memo(instanceId, (accountIndex: AccountIndex | string): Observable<AccountId | undefined> =>
    api.query.indices
      ? api.query.indices.accounts<Option<ITuple<[AccountId, BalanceOf]>>>(accountIndex).pipe(
        map((optResult): AccountId | undefined =>
          optResult.unwrapOr([])[0]
        )
      )
      : of(undefined)
  );
}
