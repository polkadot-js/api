// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Vote, Voting, VotingDirectVote } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { StorageKey, Vec } from '@polkadot/types';

import { DerivedBalancesAccount, DerivedReferendumVote } from '../types';
import { memo } from '../util';

function votesPrev (api: ApiInterfaceRx, referendumId: BN | number): Observable<DerivedReferendumVote[]> {
  return api.query.democracy.votersFor<Vec<AccountId>>(referendumId).pipe(
    switchMap((votersFor): Observable<[Vec<AccountId>, Vote[], DerivedBalancesAccount[]]> =>
      combineLatest([
        of(votersFor),
        !votersFor || !votersFor.length
          ? of([] as Vote[])
          : api.query.democracy.voteOf.multi<Vote>(
            votersFor.map((accountId): [BN | number, AccountId] =>
              [referendumId, accountId]
            )
          ),
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
  );
}

function mapVotes (referendumId: BN | number, allVoting: [StorageKey, Voting][]): DerivedReferendumVote[] {
  return allVoting
    .map(([key, voting]): [AccountId, Voting] => [
      key.args[0] as AccountId,
      voting
    ])
    // FIXME We are ignoring delegated votes
    .filter(([, voting]) => voting.isDirect)
    .map(([accountId, voting]): [AccountId, VotingDirectVote[]] => [
      accountId,
      voting.asDirect.votes.filter(([idx]) => idx.eq(referendumId))
    ])
    .filter(([, directVotes]) => !!directVotes.length)
    .reduce((result: DerivedReferendumVote[], [accountId, votes]): DerivedReferendumVote[] =>
      // FIXME We are ignoring split votes
      votes.reduce((result: DerivedReferendumVote[], [, vote]): DerivedReferendumVote[] => {
        if (vote.isStandard) {
          result.push({
            accountId,
            ...vote.asStandard
          });
        }

        return result;
      }, result), []
    );
}

function votes (api: ApiInterfaceRx, referendumId: BN | number): Observable<DerivedReferendumVote[]> {
  // Use referendumInfo as a trigger, entries are non-subscribable
  return api.derive.democracy.referendumInfo(referendumId).pipe(
    switchMap((info): Observable<[StorageKey, Voting][]> =>
      info
        ? api.query.democracy.votingOf.entries<Voting>()
        : of([])
    ),
    map((allVoting): DerivedReferendumVote[] =>
      mapVotes(referendumId, allVoting)
    )
  );
}

export function referendumVotes (api: ApiInterfaceRx): (referendumId: BN | number) => Observable<DerivedReferendumVote[]> {
  return memo((referendumId: BN | number): Observable<DerivedReferendumVote[]> =>
    api.query.democracy.votingOf
      ? votes(api, referendumId)
      : votesPrev(api, referendumId)
  );
}
