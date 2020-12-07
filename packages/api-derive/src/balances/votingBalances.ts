// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import type { Observable } from 'rxjs';
import type { DeriveBalancesAccount } from '../types';

import { combineLatest, of } from 'rxjs';

import { ApiInterfaceRx } from '@polkadot/api/types';

import { memo } from '../util';

export function votingBalances (instanceId: string, api: ApiInterfaceRx): (addresses?: (AccountId | AccountIndex | Address | string)[]) => Observable<DeriveBalancesAccount[]> {
  return memo(instanceId, (addresses?: (AccountId | AccountIndex | Address | string)[]): Observable<DeriveBalancesAccount[]> =>
    !addresses || !addresses.length
      ? of([] as DeriveBalancesAccount[])
      : combineLatest(
        addresses.map((accountId): Observable<DeriveBalancesAccount> =>
          api.derive.balances.account(accountId)
        )
      )
  );
}
