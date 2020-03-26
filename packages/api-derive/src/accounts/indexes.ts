// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, AccountIndex } from '@polkadot/types/interfaces';
import { AccountIndexes } from '../types';

import { Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { ENUMSET_SIZE } from '@polkadot/types/generic/AccountIndex';
import { Vec } from '@polkadot/types';

import { memo } from '../util';

const enumsetSize = ENUMSET_SIZE.toNumber();

function queryEnumSet (api: ApiInterfaceRx): Observable<AccountIndexes> {
  return api.query.indices.nextEnumSet<AccountIndex>().pipe(
    // use the nextEnumSet (which is a counter of the number of sets) to construct
    // a range of values to query [0, 1, 2, ...]. Retrieve the full enum set for the
    // specific index - each query can return up to ENUMSET_SIZE (64) records, each
    // containing an AccountId
    switchMap((next: AccountIndex): Observable<Vec<AccountId>[]> =>
      api.query.indices.enumSet.multi<Vec<AccountId>>([...Array(next.toNumber() + 1).keys()])
    ),
    map((all: AccountId[][]): AccountIndexes =>
      all.reduce((indexes: AccountIndexes, list, outerIndex): AccountIndexes => {
        (list || []).forEach((accountId, innerIndex): void => {
          // re-create the index based on position 0 is [0][0] and likewise
          // 64 (0..63 in first) is [1][0] (the first index value in set 2)
          const index = (outerIndex * enumsetSize) + innerIndex;

          indexes[accountId.toString()] = api.registry.createType('AccountIndex', index);
        });

        return indexes;
      }, {})
    )
  );
}

function queryAccounts (api: ApiInterfaceRx): Observable<AccountIndexes> {
  return api.query.indices.accounts.entries().pipe(
    map((entries): AccountIndexes =>
      entries.reduce((indexes: AccountIndexes, [key, idOpt]): AccountIndexes => {
        if (idOpt.isSome) {
          indexes[idOpt.unwrap()[0].toString()] = key.args[0] as AccountIndex;
        }

        return indexes;
      }, {})
    )
  );
}

/**
 * @name indexes
 * @returns Returns all the indexes on the system.
 * @description This is an unwieldly query since it loops through
 * all of the enumsets and returns all of the values found. This could be up to 32k depending
 * on the number of active accounts in the system
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.accounts.indexes((indexes) => {
 *   console.log('All existing AccountIndexes', indexes);
 * });
 * ```
 */
export function indexes (api: ApiInterfaceRx): () => Observable<AccountIndexes> {
  return memo((): Observable<AccountIndexes> =>
    (api.query.indices
      ? api.query.indices.accounts
        ? queryAccounts(api)
        : queryEnumSet(api)
      : of({} as AccountIndexes)
    ).pipe(startWith({}))
  );
}
