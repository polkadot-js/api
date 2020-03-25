// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Balance, ReferendumIndex, ReferendumInfo, ReferendumInfoTo239, ReferendumStatus, Vote, Voting, VotingDirectVote } from '@polkadot/types/interfaces';
import { DerivedBalancesAccount, DerivedReferendum, DerivedReferendumExt, DerivedReferendumVote } from '../types';

import BN from 'bn.js';
import { Observable, of, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option, Vec } from '@polkadot/types';
import { bnSqrt } from '@polkadot/util';

import { memo } from '../util';
import { PreImage } from './proposals';
import { calcVotes, getStatus } from './util';

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

function constructInfo (api: ApiInterfaceRx, index: BN | number, status: ReferendumStatus | ReferendumInfoTo239, _preimage?: PreImage): DerivedReferendum | null {
  const preImage = _preimage?.isSome
    ? _preimage.unwrap()
    : null;

  return {
    index: api.registry.createType('PropIndex', index),
    hash: status.proposalHash,
    proposal: preImage
      ? api.registry.createType('Proposal', preImage[0].toU8a(true))
      : undefined,
    preimage: preImage
      ? {
        at: preImage[3],
        balance: preImage[2],
        proposer: preImage[1]
      }
      : undefined,
    status
  };
}

function retrieveInfo (api: ApiInterfaceRx, index: BN | number, info: Option<ReferendumInfo | ReferendumInfoTo239>): Observable<DerivedReferendum | null> {
  const status = getStatus(info);

  return status
    ? api.query.democracy.preimages(status.proposalHash).pipe(
      map((preimage?: PreImage): DerivedReferendum | null =>
        constructInfo(api, index, status, preimage)
      )
    )
    : of(null);
}

function referendumInfos (api: ApiInterfaceRx, ids: BN[]): Observable<DerivedReferendum[]> {
  return api.query.democracy.referendumInfoOf.multi<Option<ReferendumInfo>>(ids).pipe(
    switchMap((infos): Observable<(DerivedReferendum | null)[]> =>
      combineLatest(
        ids.map((id, index): Observable<DerivedReferendum | null> =>
          retrieveInfo(api, id, infos[index])
        )
      )
    ),
    map((infos) => infos.filter((referendum): referendum is DerivedReferendum => !!referendum))
  );
}

function retrieveDerived (api: ApiInterfaceRx, totalIssuance: Balance, earliest: ReferendumIndex, referendumCount: ReferendumIndex): Observable<[BN, DerivedReferendum[]]> {
  return combineLatest([
    of(bnSqrt(totalIssuance)),
    referendumCount.gt(earliest)
      ? referendumInfos(api, [
        ...Array(referendumCount.sub(earliest).toNumber())
      ].map((_, i): BN => earliest.addn(i)))
      : of([])
  ]);
}

function retrieveVotes (api: ApiInterfaceRx, sqrtElectorate: BN, referendums: DerivedReferendum[]): Observable<[BN, DerivedReferendum[], DerivedReferendumVote[][]]> {
  return combineLatest([
    of(sqrtElectorate),
    of(referendums),
    referendums.length
      ? combineLatest(
        referendums.map((referendum): Observable<DerivedReferendumVote[]> =>
          api.query.democracy.votingOf
            ? votesCurr(api, referendum.index)
            : votesPrev(api, referendum.index)
        )
      )
      : of([])
  ]);
}

export function referendums (api: ApiInterfaceRx): () => Observable<DerivedReferendumExt[]> {
  return memo((): Observable<DerivedReferendumExt[]> =>
    api.query.democracy?.lowestUnbaked
      ? api.queryMulti<[Balance, ReferendumIndex, ReferendumIndex]>([
        api.query.balances.totalIssuance,
        api.query.democracy.lowestUnbaked,
        api.query.democracy.referendumCount
      ]).pipe(
        switchMap(([totalIssuance, earliest, referendumCount]) =>
          retrieveDerived(api, totalIssuance, earliest, referendumCount)
        ),
        switchMap(([sqrtElectorate, referendums]) =>
          retrieveVotes(api, sqrtElectorate, referendums)
        ),
        map(([sqrtElectorate, referendums, votes]) =>
          referendums.map((referendum, index): DerivedReferendumExt => ({
            ...referendum,
            ...calcVotes(sqrtElectorate, referendum, votes[index])
          }))
        )
      )
      : of([])
  );
}
