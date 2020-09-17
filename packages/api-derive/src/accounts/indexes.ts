// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, AccountIndex } from '@polkadot/types/interfaces';
import { AccountIndexes } from '../types';

import { Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { ENUMSET_SIZE } from '@polkadot/types/generic/AccountIndex';
import { Vec } from '@polkadot/types';
import { isFunction } from '@polkadot/util';

import { memo } from '../util';

const enumsetSize = ENUMSET_SIZE.toNumber();

let indicesCache: AccountIndexes | null = null;

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
export function indexes (instanceId: string, api: ApiInterfaceRx): () => Observable<AccountIndexes> {
  return memo(instanceId, (): Observable<AccountIndexes> =>
    indicesCache
      ? of(indicesCache)
      : (
        api.query.indices
          ? isFunction(api.query.indices.accounts)
            ? queryAccounts(api).pipe(startWith({}))
            : queryEnumSet(api).pipe(startWith({}))
          : of({} as AccountIndexes)
      ).pipe(
        map((indices): AccountIndexes => {
          indicesCache = indices;

          return indices;
        })
      )
  );
}
