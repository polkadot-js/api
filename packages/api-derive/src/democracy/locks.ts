// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountId, ReferendumInfo, ReferendumInfoFinished, ReferendumInfoTo239, Vote, VotingDelegating, VotingDirect, VotingDirectVote } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveDemocracyLock } from '../types';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';
import { BN_ZERO, isUndefined } from '@polkadot/util';

import { memo } from '../util';

const LOCKUPS = [0, 1, 2, 4, 8, 16, 32];

function parseEnd (api: ApiInterfaceRx, vote: Vote, { approved, end }: ReferendumInfoFinished): [BN, BN] {
  return [
    end,
    (approved.isTrue && vote.isAye) || (approved.isFalse && vote.isNay)
      ? end.add(api.consts.democracy.enactmentPeriod.muln(LOCKUPS[vote.conviction.index]))
      : BN_ZERO
  ];
}

function parseLock (api: ApiInterfaceRx, [referendumId, accountVote]: VotingDirectVote, referendum: ReferendumInfo): DeriveDemocracyLock {
  const { balance, vote } = accountVote.asStandard;
  const [referendumEnd, unlockAt] = referendum.isFinished
    ? parseEnd(api, vote, referendum.asFinished)
    : [BN_ZERO, BN_ZERO];

  return { balance, isDelegated: false, isFinished: referendum.isFinished, referendumEnd, referendumId, unlockAt, vote };
}

function delegateLocks (api: ApiInterfaceRx, { balance, conviction, target }: VotingDelegating): Observable<DeriveDemocracyLock[]> {
  return api.derive.democracy.locks(target).pipe(
    map((available): DeriveDemocracyLock[] =>
      available.map(({ isFinished, referendumEnd, referendumId, unlockAt, vote }): DeriveDemocracyLock => ({
        balance,
        isDelegated: true,
        isFinished,
        referendumEnd,
        referendumId,
        unlockAt: unlockAt.isZero()
          ? unlockAt
          : referendumEnd.add(api.consts.democracy.enactmentPeriod.muln(LOCKUPS[conviction.index])),
        vote: api.registry.createType('Vote', { aye: vote.isAye, conviction })
      }))
    )
  );
}

function directLocks (api: ApiInterfaceRx, { votes }: VotingDirect): Observable<DeriveDemocracyLock[]> {
  if (!votes.length) {
    return of([]);
  }

  return api.query.democracy.referendumInfoOf.multi<Option<ReferendumInfo | ReferendumInfoTo239>>(votes.map(([referendumId]) => referendumId)).pipe(
    map((referendums) =>
      votes
        .map((vote, index): [VotingDirectVote, ReferendumInfo | ReferendumInfoTo239 | null] =>
          [vote, referendums[index].unwrapOr(null)]
        )
        .filter((item): item is [VotingDirectVote, ReferendumInfo] =>
          !!item[1] && isUndefined((item[1] as ReferendumInfoTo239).end) && item[0][1].isStandard
        )
        .map(([directVote, referendum]) =>
          parseLock(api, directVote, referendum)
        )
    )
  );
}

export function locks (instanceId: string, api: ApiInterfaceRx): (accountId: string | AccountId) => Observable<DeriveDemocracyLock[]> {
  return memo(instanceId, (accountId: string | AccountId): Observable<DeriveDemocracyLock[]> =>
    api.query.democracy.votingOf
      ? api.query.democracy.votingOf(accountId).pipe(
        switchMap((voting): Observable<DeriveDemocracyLock[]> =>
          voting.isDirect
            ? directLocks(api, voting.asDirect)
            : voting.isDelegating
              ? delegateLocks(api, voting.asDelegating)
              : of([])
        )
      )
      : of([])
  );
}
