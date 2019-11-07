// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Vote } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { drr } from '../util';

export function votes (api: ApiInterfaceRx): (referendumId: BN, accountIds?: AccountId[]) => Observable<Vote[]> {
  return (referendumId: BN, accountIds: AccountId[] = []): Observable<Vote[]> =>
    (
      !accountIds || !accountIds.length
        ? of([] as Vote[])
        : api.query.democracy.voteOf.multi<Vote>(
          accountIds.map((accountId): [BN, AccountId] =>
            [referendumId, accountId]
          )
        )
    ).pipe(drr());
}
