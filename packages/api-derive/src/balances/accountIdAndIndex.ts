// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import ApiRx from '@polkadot/api/rx';
import { decodeAddress } from '@polkadot/keyring';
import { AccountId, AccountIndex } from '@polkadot/types/index';

import { accountIdToIndex } from './accountIdToIndex';
import { accountIndexToId } from './accountIndexToId';

export type IdAndIndex = [AccountId | undefined, AccountIndex | undefined];

export function accountIdAndIndex (api: ApiRx) {
  return (address: AccountId | AccountIndex | string | null | undefined)
    : Observable<(AccountIndex | AccountId | undefined)[]> => {
    try {
      // yes, this can fail, don't care too much, catch will catch it
      const { length } = decodeAddress((address as any).toString());

      if (length === 32) {
        const accountId = new AccountId(address as string);

        return accountIdToIndex(api)(accountId).pipe(
          map((accountIndex) => [accountId, accountIndex])
        );
      }

      const accountIndex = new AccountIndex(address as string);

      return accountIndexToId(api)(accountIndex).pipe(
        map((accountId) => [accountId, accountIndex])
      );
    } catch (error) {
      return of([undefined, undefined]);
    }
  };
}
