// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest, Observable } from 'rxjs';
import ApiRx from '@polkadot/api/rx';
import { AccountId, bool as Bool } from '@polkadot/types/index';

import { drr } from '../util/drr';

export function votes (api: ApiRx) {
  return (...params: Array<any>): Observable<Array<Bool>> => {
    const referendumId: BN = params[0];
    const accountIds: Array<AccountId> = params.slice(1, params.length - 1);

    return (combineLatest(
      accountIds.map(
        (accountId) => api.query.democracy.voteOf([referendumId, accountId]) as Observable<Bool>
      )
    )).pipe(
      drr()
    );
  };

}
