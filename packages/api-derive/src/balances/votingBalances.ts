// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveBalancesAccount } from '../types.js';

import { combineLatest, of } from 'rxjs';

import { memo } from '../util/index.js';

/**
 * @name votingBalances
 * @description Retrieves the balance information for multiple accounts, typically used in governance-related contexts to check voting power.
 * @param {(AccountId | AccountIndex | Address | string)[]} addresses An array of account identifiers.
 * @example
 * ```javascript
 * const addresses = ["5D4b...Zf1", "5HGj...yrV"];
 * const balances = await api.derive.balances.votingBalances(addresses);
 * console.log("Voting Balances:", balances);
 * ```
 */
export function votingBalances (instanceId: string, api: DeriveApi): (addresses?: (AccountId | AccountIndex | Address | string)[]) => Observable<DeriveBalancesAccount[]> {
  return memo(instanceId, (addresses?: (AccountId | AccountIndex | Address | string)[]): Observable<DeriveBalancesAccount[]> =>
    !addresses?.length
      ? of([] as DeriveBalancesAccount[])
      : combineLatest(
        addresses.map((accountId): Observable<DeriveBalancesAccount> =>
          api.derive.balances.account(accountId)
        )
      )
  );
}
