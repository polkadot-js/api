// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Vote } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Vec } from '@polkadot/types';

import { DerivedBalancesAccount, DerivedReferendumVote } from '../types';
import { memo } from '../util';

export function referendumVotesFor (api: ApiInterfaceRx): (referendumId: BN | number) => Observable<DerivedReferendumVote[]> {
  return memo((referendumId: BN | number): Observable<DerivedReferendumVote[]> =>
    api.query.democracy.votersFor<Vec<AccountId>>(referendumId).pipe(
      switchMap((votersFor): Observable<[Vec<AccountId>, Vote[], DerivedBalancesAccount[]]> =>
        combineLatest([
          of(votersFor),
          api.derive.democracy.votes(referendumId, votersFor),
          api.derive.balances.votingBalances(votersFor)
        ])
      ),
      map(([votersFor, votes, balances]): DerivedReferendumVote[] =>
        votersFor.map((accountId, index): DerivedReferendumVote => ({
          accountId,
          balance: balances[index].votingBalance || api.registry.createType('Balance'),
          vote: votes[index] || api.registry.createType('Vote')
        } as DerivedReferendumVote))
      )
    ));
}
