// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Balance, BlockNumber, StrikeCount, VouchingStatus, Vote } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveSocietyMember } from '../types';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { bool, Option, Vec } from '@polkadot/types';

import { memo } from '../util';

type ResultMulti = [Vec<ITuple<[BlockNumber, Balance]>>, StrikeCount];
type ResultSingle = [Option<Vote>, bool, Option<VouchingStatus>];
type Result = [ResultMulti, ResultSingle];

/**
 * @description Get the member info for a society
 */
export function member (api: ApiInterfaceRx): (accountId: AccountId) => Observable<DeriveSocietyMember> {
  return memo((accountId: AccountId): Observable<DeriveSocietyMember> =>
    combineLatest([
      api.queryMulti<ResultMulti>([
        [api.query.society.payouts, accountId],
        [api.query.society.strikes, accountId]
      ]),
      combineLatest([
        api.query.society.defenderVotes<Option<Vote>>(accountId),
        api.query.society.suspendedMembers<bool>(accountId),
        api.query.society.vouching<Option<VouchingStatus>>(accountId)
      ])
    ]).pipe(
      map(([[payouts, strikes], [defenderVote, suspended, vouching]]: Result): DeriveSocietyMember => ({
        accountId,
        payouts,
        isSuspended: suspended.isTrue,
        strikes,
        vote: defenderVote.unwrapOr(undefined),
        vouching: vouching.unwrapOr(undefined)
      }))
    )
  );
}
