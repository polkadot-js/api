// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address, Vector } from '@polkadot/types';

import { idAndIndex } from '../accounts/idAndIndex';
import { DerivedBalances } from '../types';
import { drr } from '../util/drr';
import { votingBalances } from './votingBalances';

export function votingBalancesNominatorsFor (api: ApiInterface$Rx) {
  return (address: AccountId | AccountIndex | Address | string): Observable<Array<DerivedBalances>> => {
    return idAndIndex(api)(address).pipe(
      switchMap(([accountId]) =>
        accountId
          ? (api.query.staking.nominatorsFor<Vector<AccountId>>(accountId))
          : of([] as Array<AccountId>)
      ),
      switchMap(votingBalances(api)),
      drr()
    );
  };
}
