// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, ReferendumInfo, VotingDirect, VotingDirectVote } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveDemocracyLock } from '../types';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { memo } from '../util';
import BN from 'bn.js';

const LOCKUPS = [0, 1, 2, 4, 8, 16, 32];
const ZERO = new BN(0);

function directLocks (api: ApiInterfaceRx, { votes }: VotingDirect): Observable<DeriveDemocracyLock[]> {
  if (!votes.length) {
    return of([]);
  }

  return api.query.democracy.referendumInfoOf.multi<Option<ReferendumInfo>>(votes.map(([referendumId]) => referendumId)).pipe(
    map((referendums) =>
      votes
        .map((vote, index): [VotingDirectVote, ReferendumInfo | null] => [vote, referendums[index].unwrapOr(null)])
        .filter((item): item is [VotingDirectVote, ReferendumInfo] => !!item[1] && item[0][1].isStandard)
        .map(([[referendumId, directVote], referendum]): DeriveDemocracyLock => {
          const { balance, vote } = directVote.asStandard;
          let unlockAt = ZERO;

          if (referendum.isFinished) {
            const { approved, end } = referendum.asFinished;

            if ((approved.isTrue && vote.isAye) || (approved.isFalse && vote.isNay)) {
              unlockAt = end.add(api.consts.democracy.enactmentPeriod.muln(LOCKUPS[vote.conviction.index]));
            }
          }

          return { balance, isFinished: referendum.isFinished, referendumId, unlockAt, vote };
        })
    )
  );
}

export function locks (api: ApiInterfaceRx): (accountId: string | AccountId) => Observable<DeriveDemocracyLock[]> {
  return memo((accountId: string | AccountId): Observable<DeriveDemocracyLock[]> =>
    api.query.democracy.votingOf(accountId).pipe(
      switchMap((voting): Observable<DeriveDemocracyLock[]> =>
        voting.isDirect
          ? directLocks(api, voting.asDirect)
          : of([])
      )
    )
  );
}
