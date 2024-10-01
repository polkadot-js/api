// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import type { DeriveApi } from '../types.js';

import { map, of } from 'rxjs';

import { assertReturn, isU8a } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { memo } from '../util/index.js';

/**
 * @name accountId
 * @param {(Address | AccountId | AccountIndex | string | null)} address - An accounts address in various formats.
 * @description  An [[AccountId]]
 */
export function accountId (instanceId: string, api: DeriveApi): (address?: Address | AccountId | AccountIndex | string | null) => Observable<AccountId> {
  return memo(instanceId, (address?: Address | AccountId | AccountIndex | string | null): Observable<AccountId> => {
    const decoded = isU8a(address)
      ? address
      : decodeAddress((address || '').toString());

    if (decoded.length > 8) {
      return of(api.registry.createType(decoded.length === 20 ? 'AccountId20' : 'AccountId', decoded));
    }

    const accountIndex = api.registry.createType('AccountIndex', decoded);

    return api.derive.accounts.indexToId(accountIndex.toString()).pipe(
      map((a) => assertReturn(a, 'Unable to retrieve accountId'))
    );
  });
}
