// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { decodeAddress } from '@polkadot/keyring';
import { AccountId, AccountIndex, Address } from '@polkadot/types';
import { isU8a } from '@polkadot/util';

import { idToIndex } from './idToIndex';
import { indexToId } from './indexToId';
import { drr } from '../util/drr';

export type AccountIdAndIndex = [AccountId?, AccountIndex?];

export function idAndIndex (api: ApiInterface$Rx) {
  return (address?: Address | AccountId | AccountIndex | string | null): Observable<AccountIdAndIndex> => {
    try {
      // yes, this can fail, don't care too much, catch will catch it
      const decoded = isU8a(address)
        ? address
        : decodeAddress((address || '').toString());

      if (decoded.length === 32) {
        const accountId = new AccountId(decoded);

        return idToIndex(api)(accountId).pipe(
          startWith(undefined),
          map((accountIndex) => [accountId, accountIndex] as AccountIdAndIndex),
          drr()
        );
      }

      const accountIndex = new AccountIndex(decoded);

      return indexToId(api)(accountIndex).pipe(
        startWith(undefined),
        map((accountId) => [accountId, accountIndex] as AccountIdAndIndex),
        drr()
      );
    } catch (error) {
      return of([undefined, undefined] as AccountIdAndIndex).pipe(drr());
    }
  };
}
