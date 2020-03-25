// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Vote, Voting, VotingDirectVote } from '@polkadot/types/interfaces';
import { DerivedBalancesAccount, DerivedReferendum, DerivedReferendumExt, DerivedReferendumVote } from '../types';

import BN from 'bn.js';
import { Observable, of, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Vec } from '@polkadot/types';
import { bnSqrt } from '@polkadot/util';

import { memo } from '../util';
import { calcVotes } from './util';

function votesPrev (api: ApiInterfaceRx, referendumId: BN): Observable<DerivedReferendumVote[]> {
  return api.query.democracy.votersFor<Vec<AccountId>>(referendumId).pipe(
    switchMap((votersFor): Observable<[Vec<AccountId>, Vote[], DerivedBalancesAccount[]]> =>
      combineLatest([
        of(votersFor),
        votersFor.length
          ? api.query.democracy.voteOf.multi<Vote>(
            votersFor.map((accountId): [BN | number, AccountId] =>
              [referendumId, accountId]
            )
          )
          : of([]),
        api.derive.balances.votingBalances(votersFor)
      ])
    ),
    map(([votersFor, votes, balances]): DerivedReferendumVote[] =>
      votersFor.map((accountId, index): DerivedReferendumVote => ({
        accountId,
        balance: balances[index].votingBalance || api.registry.createType('Balance'),
        vote: votes[index] || api.registry.createType('Vote')
      }))
    )
  );
}

function votesCurr (api: ApiInterfaceRx, referendumId: BN): Observable<DerivedReferendumVote[]> {
  return api.query.democracy.votingOf.entries<Voting>().pipe(
    map((allVoting): DerivedReferendumVote[] =>
      allVoting
        .map(([key, voting]): [AccountId, Voting] => [key.args[0] as AccountId, voting])
        // FIXME We are ignoring delegated votes
        .filter(([, voting]) => voting.isDirect)
        .map(([accountId, voting]): [AccountId, VotingDirectVote[]] => [
          accountId,
          voting.asDirect.votes.filter(([idx]) => idx.eq(referendumId))
        ])
        .filter(([, directVotes]) => !!directVotes.length)
        .reduce((result: DerivedReferendumVote[], [accountId, votes]) =>
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
        )
    )
  );
}

function retrieveVotes (api: ApiInterfaceRx, sqrtElectorate: BN, referendums: DerivedReferendum[]): Observable<DerivedReferendumExt[]> {
  return combineLatest(
    referendums.map((referendum): Observable<DerivedReferendumVote[]> =>
      api.query.democracy.votingOf
        ? votesCurr(api, referendum.index)
        : votesPrev(api, referendum.index)
    )
  ).pipe(
    map((votes) =>
      referendums.map((referendum, index): DerivedReferendumExt => ({
        ...referendum,
        ...calcVotes(sqrtElectorate, referendum, votes[index])
      }))
    )
  );
}

function sqrtElectorate (api: ApiInterfaceRx): Observable<BN> {
  return api.query.balances.totalIssuance().pipe(
    map((totalIssuance) =>
      bnSqrt(totalIssuance)
    )
  );
}

export function referendums (api: ApiInterfaceRx): () => Observable<DerivedReferendumExt[]> {
  return memo((): Observable<DerivedReferendumExt[]> =>
    combineLatest([
      sqrtElectorate(api),
      api.derive.democracy.referendumsActive()
    ]).pipe(
      switchMap(([sqrtElectorate, referendums]) =>
        referendums.length
          ? retrieveVotes(api, sqrtElectorate, referendums)
          : of([])
      )
    )
  );
}
