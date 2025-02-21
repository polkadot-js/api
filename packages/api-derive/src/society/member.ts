// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveSocietyMember } from '../types.js';

import { map } from 'rxjs';

import { memo } from '../util/index.js';

/**
 * @name member
 * @description Get the member info for a society
 * @param { AccountId } accountId
 * @example
 * ```javascript
 * const member = await api.derive.society.member(ALICE);
 * console.log(member);
 * ```
 */
export function member (instanceId: string, api: DeriveApi): (accountId: AccountId) => Observable<DeriveSocietyMember> {
  return memo(instanceId, (accountId: AccountId): Observable<DeriveSocietyMember> =>
    api.derive.society._members([accountId]).pipe(
      map(([result]) => result)
    )
  );
}
