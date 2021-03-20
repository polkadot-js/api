// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { bool, Option, Vec } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber, SocietyVote, StrikeCount, VouchingStatus } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveSocietyMember } from '../types';

import { combineLatest, of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

type Result = [AccountId[], Vec<ITuple<[BlockNumber, Balance]>>[], StrikeCount[], Option<SocietyVote>[], bool[], Option<VouchingStatus>[]];

export function _members (instanceId: string, api: ApiInterfaceRx): (accountIds: AccountId[]) => Observable<DeriveSocietyMember[]> {
  return memo(instanceId, (accountIds: AccountId[]): Observable<DeriveSocietyMember[]> =>
    combineLatest<Result>([
      of(accountIds),
      api.query.society.payouts.multi(accountIds),
      api.query.society.strikes.multi(accountIds),
      api.query.society.defenderVotes.multi(accountIds),
      api.query.society.suspendedMembers.multi(accountIds),
      api.query.society.vouching.multi(accountIds)
    ]).pipe(
      map(([accountIds, payouts, strikes, defenderVotes, suspended, vouching]) =>
        accountIds.map((accountId, index) => ({
          accountId,
          isDefenderVoter: defenderVotes[index].isSome,
          isSuspended: suspended[index].isTrue,
          payouts: payouts[index],
          strikes: strikes[index],
          vote: defenderVotes[index].unwrapOr(undefined),
          vouching: vouching[index].unwrapOr(undefined)
        }))
      )
    )
  );
}

/**
 * @description Get the member info for a society
 */
export function members (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveSocietyMember[]> {
  return memo(instanceId, (): Observable<DeriveSocietyMember[]> =>
    api.query.society.members<AccountId[]>().pipe(
      switchMap((members) => api.derive.society._members(members))
    )
  );
}
