// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';

import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { isU8a } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';
import { createType } from '@polkadot/types';
import { idToIndex } from './idToIndex';
import { indexToId } from './indexToId';
import { drr } from '../util/drr';

export type AccountIdAndIndex = [AccountId?, AccountIndex?];

/**
 * @name idAndIndex
 * @param {(Address | AccountId | AccountIndex | string | null)} address - An accounts address in various formats.
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
export function idAndIndex (api: ApiInterfaceRx): (address?: Address | AccountId | AccountIndex | string | null) => Observable<AccountIdAndIndex> {
  const idToIndexCall = idToIndex(api);
  const indexToIdCall = indexToId(api);

  return (address?: Address | AccountId | AccountIndex | string | null): Observable<AccountIdAndIndex> => {
    try {
      // yes, this can fail, don't care too much, catch will catch it
      const decoded = isU8a(address)
        ? address
        : decodeAddress((address || '').toString());

      if (decoded.length === 32) {
        const accountId = createType('AccountId', decoded);

        return idToIndexCall(accountId).pipe(
          startWith(undefined),
          map((accountIndex): AccountIdAndIndex => [accountId, accountIndex] as AccountIdAndIndex),
          drr()
        );
      }

      const accountIndex = createType('AccountIndex', decoded);

      return indexToIdCall(accountIndex).pipe(
        startWith(undefined),
        map((accountId): AccountIdAndIndex => [accountId, accountIndex] as AccountIdAndIndex),
        drr()
      );
    } catch (error) {
      return of([undefined, undefined] as AccountIdAndIndex).pipe(drr());
    }
  };
}
