// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { Vector } from '@polkadot/types/codec';
import { AccountId } from '@polkadot/types/index';

import { DerivedBalances } from '../types';
import { drr } from '../util/drr';
import { votingBalances } from './votingBalances';

export function votingBalancesNominatorsFor (api: ApiInterface$Rx) {
  return (accountId: AccountId | string): Observable<Array<DerivedBalances>> => {
    // tslint:disable-next-line
    return (api.query.staking.nominatorsFor(accountId) as Observable<Vector<AccountId>>)
      .pipe(
        switchMap(votingBalances(api)),
        drr()
      ) as Observable<Array<DerivedBalances>>;
  };
}
