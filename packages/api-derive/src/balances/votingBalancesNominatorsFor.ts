// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import ApiRx from '@polkadot/api/rx';
import { AccountId } from '@polkadot/types/index';

import { DerivedBalances } from '../types';
import { votingBalances } from './votingBalances';

export function votingBalancesNominatorsFor (api: ApiRx) {
  return (accountId: AccountId | string): Observable<Array<DerivedBalances>> =>
    (api.query.staking.nominatorsFor(accountId) as Observable<Array<AccountId | undefined | null> | undefined>).pipe(
      map((nominators) => nominators || []),
      switchMap(votingBalances(api))
    );
}
