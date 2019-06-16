// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId, Vector, Vote } from '@polkadot/types';

import { drr } from '../util/drr';

export function votes (api: ApiInterface$Rx) {
  return (referendumId: BN, accountIds: Array<AccountId> = []): Observable<Array<Vote>> => {
    return ((
      !accountIds || !accountIds.length
        ? of([])
        : api.query.democracy.voteOf.multi(
            accountIds.map((accountId) => [referendumId, accountId])
          )
     ) as Observable<Vector<Vote>>).pipe(drr());
  };
}
