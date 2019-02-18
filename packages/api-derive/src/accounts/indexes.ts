// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { ENUMSET_SIZE } from '@polkadot/types/structs/AccountIndex';
import { AccountId, AccountIndex } from '@polkadot/types/index';

import { drr } from '../util/drr';

export type AccountIndexes = { [index: string]: AccountIndex };

export function indexes (api: ApiInterface$Rx) {
  return (): Observable<AccountIndexes> => {
    const querySection = api.query.indices || api.query.balances;

    return (querySection.nextEnumSet() as Observable<AccountIndex>)
      .pipe(
        map((next: AccountIndex) => {
          const enumRange = [...Array(next.div(ENUMSET_SIZE).toNumber() + 1).keys()];

          return enumRange;
        }),
        switchMap((enumRange) => combineLatest(
          enumRange.map((index) => (querySection.enumSet(index) as Observable<any>))
        )),
        map((all: Array<Array<AccountId> | undefined>) =>
          (all || []).reduce((result, list, outerIndex) => {
            (list || []).forEach((accountId, innerIndex) => {
              const index = (outerIndex * ENUMSET_SIZE.toNumber()) + innerIndex;

              result[accountId.toString()] = new AccountIndex(index);
            });

            return result;
          }, {} as AccountIndexes)),
        drr()
      );
  };
}
