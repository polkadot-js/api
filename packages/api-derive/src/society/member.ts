// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Balance, BlockNumber, SocietyVote, StrikeCount, VouchingStatus } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveSocietyMember } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { bool, Option, Vec } from '@polkadot/types';

import { memo } from '../util';

type Result = [Vec<ITuple<[BlockNumber, Balance]>>, StrikeCount, Option<SocietyVote>, bool, Option<VouchingStatus>];

/**
 * @description Get the member info for a society
 */
export function member (instanceId: string, api: ApiInterfaceRx): (accountId: AccountId) => Observable<DeriveSocietyMember> {
  return memo(instanceId, (accountId: AccountId): Observable<DeriveSocietyMember> =>
    api.queryMulti<Result>([
      [api.query.society.payouts, accountId],
      [api.query.society.strikes, accountId],
      [api.query.society.defenderVotes, accountId],
      [api.query.society.suspendedMembers, accountId],
      [api.query.society.vouching, accountId]
    ]).pipe(
      map(([payouts, strikes, defenderVotes, suspended, vouching]: Result): DeriveSocietyMember => ({
        accountId,
        isSuspended: suspended.isTrue,
        payouts,
        strikes,
        vote: defenderVotes.unwrapOr(undefined),
        vouching: vouching.unwrapOr(undefined)
      }))
    )
  );
}
