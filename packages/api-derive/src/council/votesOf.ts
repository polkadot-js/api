// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveCouncilVote } from '../types.js';

import { map } from 'rxjs';

import { memo } from '../util/index.js';

/**
 * @name votesOf
 * @description Retrieves the council votes associated with a given account.
 * @returns The stake and the list of candidates the account has voted for.
 * @param {string | Uint8Array | AccountId} accountId The accountId to retrieve votes for.
 * @example
 * ```javascript
 * const accountId = "5Gw3s7qQ9Z..."; // Replace with a valid account ID
 * const votes = await api.derive.council.votesOf(accountId);
 * console.log("Account votes:", votes);
 * ```
 */
export function votesOf (instanceId: string, api: DeriveApi): (accountId: string | Uint8Array | AccountId) => Observable<DeriveCouncilVote> {
  return memo(instanceId, (accountId: string | Uint8Array | AccountId): Observable<DeriveCouncilVote> =>
    api.derive.council.votes().pipe(
      map((votes): DeriveCouncilVote =>
        (
          votes.find(([from]) => from.eq(accountId)) ||
          [null, { stake: api.registry.createType('Balance'), votes: [] as AccountId[] }]
        )[1]
      )
    )
  );
}
