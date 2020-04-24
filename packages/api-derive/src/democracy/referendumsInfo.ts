// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, ReferendumInfo, ReferendumInfoTo239, Vote, Voting, VotingDirectVote, VotingDelegating } from '@polkadot/types/interfaces';
import { DeriveBalancesAccount, DeriveReferendum, DeriveReferendumVote, DeriveReferendumVotes } from '../types';

import BN from 'bn.js';
import { Observable, of, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option, Vec } from '@polkadot/types';

import { memo } from '../util';
import { calcVotes, getStatus, parseImage } from './util';

function votesPrev (api: ApiInterfaceRx, referendumId: BN): Observable<DeriveReferendumVote[]> {
  return api.query.democracy.votersFor<Vec<AccountId>>(referendumId).pipe(
    switchMap((votersFor): Observable<[Vec<AccountId>, Vote[], DeriveBalancesAccount[]]> =>
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
    map(([votersFor, votes, balances]): DeriveReferendumVote[] =>
      votersFor.map((accountId, index): DeriveReferendumVote => ({
        accountId,
        balance: balances[index].votingBalance || api.registry.createType('Balance'),
        isDelegating: false,
        vote: votes[index] || api.registry.createType('Vote')
      }))
    )
  );
}

function votesCurr (api: ApiInterfaceRx, referendumId: BN): Observable<DeriveReferendumVote[]> {
  return api.query.democracy.votingOf.entries<Voting>().pipe(
    map((allVoting): DeriveReferendumVote[] => {
      const mapped = allVoting.map(([key, voting]): [AccountId, Voting] => [key.args[0] as AccountId, voting]);
      const votes = mapped
        .filter(([, voting]) => voting.isDirect)
        .map(([accountId, voting]): [AccountId, VotingDirectVote[]] => [
          accountId,
          voting.asDirect.votes.filter(([idx]) => idx.eq(referendumId))
        ])
        .filter(([, directVotes]) => !!directVotes.length)
        .reduce((result: DeriveReferendumVote[], [accountId, votes]) =>
          // FIXME We are ignoring split votes
          votes.reduce((result: DeriveReferendumVote[], [, vote]): DeriveReferendumVote[] => {
            if (vote.isStandard) {
              result.push({
                accountId,
                isDelegating: false,
                ...vote.asStandard
              });
            }

            return result;
          }, result), []
        );
      const delegations = mapped
        .filter(([, voting]) => voting.isDelegating)
        .map(([accountId, voting]): [AccountId, VotingDelegating] => [accountId, voting.asDelegating]);

      // add delegations
      delegations.forEach(([accountId, { balance, conviction, target }]): void => {
        // Are we delegating to a delegator
        const toDelegator = delegations.find(([accountId]) => accountId.eq(target));
        const to = votes.find(({ accountId }) => accountId.eq(toDelegator ? toDelegator[0] : target));

        // this delegation has a target
        if (to) {
          votes.push({
            accountId,
            balance,
            isDelegating: true,
            vote: api.registry.createType('Vote', { aye: to.vote.isAye, conviction })
          });
        }
      });

      return votes;
    })
  );
}

export function _referendumVotes (api: ApiInterfaceRx): (referendum: DeriveReferendum) => Observable<DeriveReferendumVotes> {
  return memo((referendum: DeriveReferendum): Observable<DeriveReferendumVotes> =>
    combineLatest([
      api.derive.democracy.sqrtElectorate(),
      api.query.democracy.votingOf
        ? votesCurr(api, referendum.index)
        : votesPrev(api, referendum.index)
    ]).pipe(
      map(([sqrtElectorate, votes]) =>
        calcVotes(sqrtElectorate, referendum, votes)
      )
    )
  );
}

export function _referendumsVotes (api: ApiInterfaceRx): (referendums: DeriveReferendum[]) => Observable<DeriveReferendumVotes[]> {
  return memo((referendums: DeriveReferendum[]): Observable<DeriveReferendumVotes[]> =>
    referendums.length
      ? combineLatest(
        referendums.map((referendum): Observable<DeriveReferendumVotes> =>
          api.derive.democracy._referendumVotes(referendum)
        )
      )
      : of([])
  );
}

export function _referendumInfo (api: ApiInterfaceRx): (index: BN, info: Option<ReferendumInfo | ReferendumInfoTo239>) => Observable<DeriveReferendum | null> {
  return memo((index: BN, info: Option<ReferendumInfo | ReferendumInfoTo239>): Observable<DeriveReferendum | null> => {
    const status = getStatus(info);

    return status
      ? api.query.democracy.preimages(status.proposalHash).pipe(
        map((preimage): DeriveReferendum => ({
          image: parseImage(api, preimage),
          imageHash: status.proposalHash,
          index: api.registry.createType('ReferendumIndex', index),
          status
        }))
      )
      : of(null);
  });
}

export function referendumsInfo (api: ApiInterfaceRx): (ids: BN[]) => Observable<DeriveReferendum[]> {
  return memo((ids: BN[]): Observable<DeriveReferendum[]> =>
    ids.length
      ? api.query.democracy.referendumInfoOf.multi<Option<ReferendumInfo>>(ids).pipe(
        switchMap((infos): Observable<(DeriveReferendum | null)[]> =>
          combineLatest(
            ids.map((id, index): Observable<DeriveReferendum | null> =>
              api.derive.democracy._referendumInfo(id, infos[index])
            )
          )
        ),
        map((infos) =>
          infos.filter((referendum): referendum is DeriveReferendum => !!referendum)
        )
      )
      : of([])
  );
}
