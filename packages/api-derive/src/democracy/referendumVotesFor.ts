// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId, Balance, Vector, Vote } from '@polkadot/types';

import { DerivedReferendumVote } from '../types';
import { drr } from '../util/drr';
import { votes } from './votes';
import { votingBalances } from '../balances/votingBalances';

export function referendumVotesFor (api: ApiInterface$Rx) {
  return (referendumId: BN | number): Observable<Array<DerivedReferendumVote>> =>
    (api.query.democracy.votersFor<Vector<AccountId>>(referendumId)).pipe(
      switchMap((votersFor) =>
        combineLatest([
          of(votersFor),
          votes(api)(referendumId as BN, votersFor),
          votingBalances(api)(votersFor)
        ])
      ),
      map(([votersFor, votes, balances]) =>
        votersFor.map((accountId, index): DerivedReferendumVote => ({
          accountId,
          balance: balances[index].votingBalance || new Balance(0),
          vote: votes[index] || new Vote(0)
        } as DerivedReferendumVote))
      ),
      drr()
    );
}
