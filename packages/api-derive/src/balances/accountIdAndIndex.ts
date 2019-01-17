// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { decodeAddress } from '@polkadot/keyring';
import { AccountId, AccountIndex } from '@polkadot/types/index';

import { accountIdToIndex } from './accountIdToIndex';
import { accountIndexToId } from './accountIndexToId';
import { drr } from '../util/drr';

export type IdAndIndex = [AccountId?, AccountIndex?];

export function accountIdAndIndex (api: ApiInterface$Rx) {
  return (address?: AccountId | AccountIndex | string | null): Observable<IdAndIndex> => {
    try {
      // yes, this can fail, don't care too much, catch will catch it
      const decoded = decodeAddress(address as any);

      if (decoded.length === 32) {
        const accountId = new AccountId(decoded);

        return accountIdToIndex(api)(accountId).pipe(
          map((accountIndex) => [accountId, accountIndex] as IdAndIndex),
          drr()
        );
      }

      const accountIndex = new AccountIndex(address as string);

      return accountIndexToId(api)(accountIndex).pipe(
        map((accountId) => [accountId, accountIndex] as IdAndIndex),
        drr()
      );
    } catch (error) {
      return of([undefined, undefined] as IdAndIndex).pipe(drr());
    }
  };
}
