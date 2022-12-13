// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, Vec } from '@polkadot/types';
import type { AccountId, Hash, ReferendumInfoTo239, Vote } from '@polkadot/types/interfaces';
import type { PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyVoteVoting } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { DeriveApi, DeriveBalancesAccount, DeriveReferendum, DeriveReferendumVote, DeriveReferendumVotes } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { isFunction, objectSpread } from '@polkadot/util';

import { memo } from '../util';
import { calcVotes, getImageHash, getStatus } from './util';

type VotingDelegating = PalletDemocracyVoteVoting['asDelegating'];
type VotingDirect = PalletDemocracyVoteVoting['asDirect'];
type VotingDirectVote = VotingDirect['votes'][0];

function votesPrev (api: DeriveApi, referendumId: BN): Observable<DeriveReferendumVote[]> {
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
        balance: balances[index].votingBalance || api.$registry.createType('Balance'),
        isDelegating: false,
        vote: votes[index] || api.$registry.createType('Vote')
      }))
    )
  );
}

function extractVotes (mapped: [AccountId, PalletDemocracyVoteVoting][], referendumId: BN): DeriveReferendumVote[] {
  return mapped
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
          result.push(
            objectSpread({
              accountId,
              isDelegating: false
            }, vote.asStandard)
          );
        }

        return result;
      }, result), []
    );
}

function votesCurr (api: DeriveApi, referendumId: BN): Observable<DeriveReferendumVote[]> {
  return api.query.democracy.votingOf.entries().pipe(
    map((allVoting): DeriveReferendumVote[] => {
      const mapped = allVoting.map(([{ args: [accountId] }, voting]): [AccountId, PalletDemocracyVoteVoting] => [accountId, voting]);
      const votes = extractVotes(mapped, referendumId);
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
            vote: api.$registry.createType('Vote', { aye: to.vote.isAye, conviction })
          });
        }
      });

      return votes;
    })
  );
}

export function _referendumVotes (instanceId: string, api: DeriveApi): (referendum: DeriveReferendum) => Observable<DeriveReferendumVotes> {
  return memo(instanceId, (referendum: DeriveReferendum): Observable<DeriveReferendumVotes> =>
    combineLatest([
      api.derive.democracy.sqrtElectorate(),
      isFunction(api.query.democracy.votingOf)
        ? votesCurr(api, referendum.index)
        : votesPrev(api, referendum.index)
    ]).pipe(
      map(([sqrtElectorate, votes]) =>
        calcVotes(sqrtElectorate, referendum, votes)
      )
    )
  );
}

export function _referendumsVotes (instanceId: string, api: DeriveApi): (referendums: DeriveReferendum[]) => Observable<DeriveReferendumVotes[]> {
  return memo(instanceId, (referendums: DeriveReferendum[]): Observable<DeriveReferendumVotes[]> =>
    referendums.length
      ? combineLatest(
        referendums.map((referendum): Observable<DeriveReferendumVotes> =>
          api.derive.democracy._referendumVotes(referendum)
        )
      )
      : of([])
  );
}

export function _referendumInfo (instanceId: string, api: DeriveApi): (index: BN, info: Option<PalletDemocracyReferendumInfo | ReferendumInfoTo239>) => Observable<DeriveReferendum | null> {
  return memo(instanceId, (index: BN, info: Option<PalletDemocracyReferendumInfo | ReferendumInfoTo239>): Observable<DeriveReferendum | null> => {
    const status = getStatus(info);

    return status
      ? api.derive.democracy.preimage(
        (status as PalletDemocracyReferendumStatus).proposal ||
        (status as unknown as { proposalHash: Hash }).proposalHash
      ).pipe(
        map((image): DeriveReferendum => ({
          image,
          imageHash: getImageHash(status),
          index: api.$registry.createType('ReferendumIndex', index),
          status
        }))
      )
      : of(null);
  });
}

export function referendumsInfo (instanceId: string, api: DeriveApi): (ids: BN[]) => Observable<DeriveReferendum[]> {
  return memo(instanceId, (ids: BN[]): Observable<DeriveReferendum[]> =>
    ids.length
      ? api.query.democracy.referendumInfoOf.multi(ids).pipe(
        switchMap((infos): Observable<(DeriveReferendum | null)[]> =>
          combineLatest(
            ids.map((id, index): Observable<DeriveReferendum | null> =>
              api.derive.democracy._referendumInfo(id, infos[index])
            )
          )
        ),
        map((infos) =>
          infos.filter((r): r is DeriveReferendum => !!r)
        )
      )
      : of([])
  );
}
