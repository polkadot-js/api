// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest, Observable } from 'rxjs';
import ApiRx from '@polkadot/api/rx';
import { AccountId, Vote } from '@polkadot/types/index';

import { drr } from '../util/drr';

export function votes (api: ApiRx) {
  return (referendumId: BN, ...accountIds: Array<AccountId>): Observable<Array<Vote>> =>
    combineLatest(
      accountIds.map(
        (accountId) => api.query.democracy.voteOf([referendumId, accountId]) as Observable<Vote>
      )
    ).pipe(
      drr()
    );
}
