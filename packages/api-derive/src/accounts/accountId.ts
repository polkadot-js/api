// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { isU8a, assert } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { memo } from '../util';

function retrieve (api: ApiInterfaceRx, address: Address | AccountId | AccountIndex | string | null | undefined): Observable<AccountId> {
  const decoded = isU8a(address)
    ? address
    : decodeAddress((address || '').toString());

  if (decoded.length === 32) {
    return of(api.registry.createType('AccountId', decoded));
  }

  const accountIndex = api.registry.createType('AccountIndex', decoded);

  return api.derive.accounts.indexToId(accountIndex.toString()).pipe(
    map((accountId) => {
      assert(accountId, 'Unable to retrieve accountId');

      return accountId;
    })
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
