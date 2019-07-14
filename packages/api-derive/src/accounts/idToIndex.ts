// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, AccountIndex } from '@polkadot/types';

import { indexes, AccountIndexes } from './indexes';
import { drr } from '../util/drr';

/**
 * @name idToIndex
 * @param {( AccountId | string )} accountId - An accounts Id in different formats.
 * @returns Returns the corresponding AccountIndex.
 * @example
 * <BR>
 *
 * ```javascript
 * const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
 * api.derive.accounts.idToIndex(ALICE, (accountIndex) => {
 *   console.log(`The AccountIndex of ${ALICE} is ${accountIndex}`);
 * });
 * ```
 */
export function idToIndex (api: ApiInterfaceRx): (accountId: AccountId | string) => Observable<AccountIndex | undefined> {
  return (accountId: AccountId | string): Observable<AccountIndex | undefined> =>
    indexes(api)()
      .pipe(
        startWith({}),
        map((indexes: AccountIndexes): AccountIndex | undefined =>
          (indexes || {})[accountId.toString()]
        ),
        drr()
      );
}
