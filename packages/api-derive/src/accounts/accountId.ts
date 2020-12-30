// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';

import { assertReturn, isU8a } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';
import { of } from '@polkadot/x-rxjs';
import { map } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

function retrieve (api: ApiInterfaceRx, address: Address | AccountId | AccountIndex | string | null | undefined): Observable<AccountId> {
  const decoded = isU8a(address)
    ? address
    : decodeAddress((address || '').toString());

  if (decoded.length > 8) {
    return of(api.registry.createType('AccountId', decoded));
  }

  const accountIndex = api.registry.createType('AccountIndex', decoded);

  return api.derive.accounts.indexToId(accountIndex.toString()).pipe(
    map((accountId) => assertReturn(accountId, 'Unable to retrieve accountId'))
  );
}

/**
 * @name accountId
 * @param {(Address | AccountId | AccountIndex | string | null)} address - An accounts address in various formats.
 * @description  An [[AccountId]]
 */
export function accountId (instanceId: string, api: ApiInterfaceRx): (address?: Address | AccountId | AccountIndex | string | null) => Observable<AccountId> {
  return memo(instanceId, (address?: Address | AccountId | AccountIndex | string | null): Observable<AccountId> =>
    retrieve(api, address));
}
