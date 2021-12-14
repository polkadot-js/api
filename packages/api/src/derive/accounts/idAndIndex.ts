// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import type { ApiInterfaceRx } from '../../types';
import type { AccountIdAndIndex } from '../types';

import { map, of } from 'rxjs';

import { isU8a } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { memo } from '../util';

/**
 * @name idAndIndex
 * @param {(Address | AccountId | AccountIndex | Uint8Array | string | null)} address - An accounts address in various formats.
 * @description  An array containing the [[AccountId]] and [[AccountIndex]] as optional values.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.accounts.idAndIndex('F7Hs', ([id, ix]) => {
 *   console.log(`AccountId #${id} with corresponding AccountIndex ${ix}`);
 * });
 * ```
 */
export function idAndIndex (instanceId: string, api: ApiInterfaceRx): (address?: Address | AccountId | AccountIndex | Uint8Array | string | null) => Observable<AccountIdAndIndex> {
  return memo(instanceId, (address?: Address | AccountId | AccountIndex | Uint8Array | string | null): Observable<AccountIdAndIndex> => {
    try {
      // yes, this can fail, don't care too much, catch will catch it
      const decoded = isU8a(address)
        ? address
        : decodeAddress((address || '').toString());

      if (decoded.length > 8) {
        const accountId = api.registry.createType('AccountId', decoded);

        return api.derive.accounts.idToIndex(accountId).pipe(
          map((accountIndex): AccountIdAndIndex => [accountId, accountIndex])
        );
      }

      const accountIndex = api.registry.createType('AccountIndex', decoded);

      return api.derive.accounts.indexToId(accountIndex.toString()).pipe(
        map((accountId): AccountIdAndIndex => [accountId, accountIndex])
      );
    } catch (error) {
      return of([undefined, undefined]);
    }
  });
}
