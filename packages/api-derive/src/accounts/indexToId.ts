// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId, AccountIndex } from '@polkadot/types/interfaces';
import type { DeriveApi } from '../types.js';

import { map, of } from 'rxjs';

import { memo } from '../util/index.js';

/**
 * @name indexToId
 * @description Resolves an AccountIndex (short address) to the full AccountId.
 * @param {( AccountIndex | string )} accountIndex An accounts index in different formats.
 * @example
 * ```javascript
 * const ALICE = "13AU";
 * const id = await api.derive.accounts.indexToId(ALICE);
 * console.log(id);
 * ```
 */
export function indexToId (instanceId: string, api: DeriveApi): (accountIndex: AccountIndex | string) => Observable<AccountId | undefined> {
  return memo(instanceId, (accountIndex: AccountIndex | string): Observable<AccountId | undefined> =>
    api.query.indices
      ? api.query.indices.accounts(accountIndex).pipe(
        map((optResult): AccountId | undefined =>
          optResult.unwrapOr([])[0]
        )
      )
      : of(undefined)
  );
}
