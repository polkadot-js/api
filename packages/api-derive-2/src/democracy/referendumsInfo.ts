// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option, StorageKey, Vec } from '@polkadot/types';
import type { AccountId, AccountId32, ReferendumInfoTo239, Vote } from '@polkadot/types/interfaces';
import type { PalletDemocracyReferendumInfo, PalletDemocracyVoteVoting } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { DeriveBalancesAccount, DeriveReferendum, DeriveReferendumVote, DeriveReferendumVotes } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { memo } from '../util';
import { calcVotes, getStatus, parseImage } from './util';

type VotingDelegating = PalletDemocracyVoteVoting['asDelegating'];

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

function extractVotes (mapped: [AccountId, PalletDemocracyVoteVoting][], referendumId: BN): DeriveReferendumVote[] {
  const result: DeriveReferendumVote[] = [];

  for (let i = 0; i < mapped.length; i++) {
    const [accountId, voting] = mapped[i];

    if (voting.isDirect) {
      const { votes } = voting.asDirect;

      for (let j = 0; j < votes.length; j++) {
        const [idx, vote] = votes[j];

        if (vote.isStandard && idx.eq(referendumId)) {
          result.push({
            accountId,
            isDelegating: false,
            ...vote.asStandard
          });
        }
      }
    }
  }

  return result;
}

function votesCurr (api: ApiInterfaceRx, referendumId: BN): Observable<DeriveReferendumVote[]> {
  const mapResult = ([{ args: [accountId] }, voting]: [StorageKey<[AccountId32]>, PalletDemocracyVoteVoting]): [AccountId, PalletDemocracyVoteVoting] =>
    [accountId, voting];

  return api.query.democracy.votingOf.entries().pipe(
    map((allVoting): DeriveReferendumVote[] => {
      const mapped = allVoting.map(mapResult);
      const votes = extractVotes(mapped, referendumId);
      const delegations: [AccountId, VotingDelegating][] = [];

      // extract delegations
      for (let i = 0; i < mapped.length; i++) {
        const [accountId, voting] = mapped[i];

        if (voting.isDelegating) {
          delegations.push([accountId, voting.asDelegating]);
        }
      }

      // add delegations
      for (let i = 0; i < delegations.length; i++) {
        // Are we delegating to a delegator
        const [accountId, { balance, conviction, target }] = delegations[i];
        const toDelegator = delegations.find(([a]) => a.eq(target));
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
      }

      return votes;
    })
  );
}

export function _referendumVotes (instanceId: string, api: ApiInterfaceRx): (referendum: DeriveReferendum) => Observable<DeriveReferendumVotes> {
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

export function _referendumsVotes (instanceId: string, api: ApiInterfaceRx): (referendums: DeriveReferendum[]) => Observable<DeriveReferendumVotes[]> {
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

export function _referendumInfo (instanceId: string, api: ApiInterfaceRx): (index: BN, info: Option<PalletDemocracyReferendumInfo | ReferendumInfoTo239>) => Observable<DeriveReferendum | null> {
  return memo(instanceId, (index: BN, info: Option<PalletDemocracyReferendumInfo | ReferendumInfoTo239>): Observable<DeriveReferendum | null> => {
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

function filterReferendum (referendum: DeriveReferendum | null): referendum is DeriveReferendum {
  return !!referendum;
}

export function referendumsInfo (instanceId: string, api: ApiInterfaceRx): (ids: BN[]) => Observable<DeriveReferendum[]> {
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
        map((infos) => infos.filter(filterReferendum))
      )
      : of([])
  );
}
