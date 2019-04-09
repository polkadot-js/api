// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { ENUMSET_SIZE } from '@polkadot/types/type/AccountIndex';
import { AccountId, AccountIndex } from '@polkadot/types';

import { drr } from '../util/drr';

export type AccountIndexes = { [index: string]: AccountIndex };

const enumsetSize = ENUMSET_SIZE.toNumber();

/**
 * Returns all the indexes on the system - this is an unwieldly query since it loops through
 * all of the enumsets and returns all of the values found. This could be up to 32k depending
 * on the number of active accounts in the system
 */
export function indexes (api: ApiInterface$Rx) {
  return (): Observable<AccountIndexes> => {
    return (api.query.indices.nextEnumSet() as Observable<AccountIndex>)
      .pipe(
        // use the nextEnumSet (which is a counter of the number of sets) to construct
        // a range of values to query [0, 1, 2, ...]
        map((next: AccountIndex) =>
          [...Array(next.toNumber() + 1).keys()]
        ),
        switchMap((enumRange) => combineLatest(
          // retrieve the full enum set for the specific index - each query can return
          // up to ENUMSET_SIZE (64) records, each containing an AccountId
          enumRange.map((index) => (api.query.indices.enumSet(index) as Observable<any>))
        )),
        map((all: Array<Array<AccountId> | undefined>) =>
          (all || []).reduce((result, list, outerIndex) => {
            (list || []).forEach((accountId, innerIndex) => {
              // re-create the index based on position 0 is [0][0] and likewise
              // 64 (0..63 in first) is [1][0] (the first index value in set 2)
              const index = (outerIndex * enumsetSize) + innerIndex;

              result[accountId.toString()] = new AccountIndex(index);
            });

            return result;
          }, {} as AccountIndexes)),
        drr()
      );
  };
}
