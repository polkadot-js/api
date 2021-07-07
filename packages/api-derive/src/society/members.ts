// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { bool, Option, Vec } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber, SocietyVote, StrikeCount, VouchingStatus } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveSocietyMember } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util';

export function _members (instanceId: string, api: ApiInterfaceRx): (accountIds: AccountId[]) => Observable<DeriveSocietyMember[]> {
  return memo(instanceId, (accountIds: AccountId[]): Observable<DeriveSocietyMember[]> =>
    combineLatest([
      of(accountIds),
      api.query.society.payouts.multi<Vec<ITuple<[BlockNumber, Balance]>>>(accountIds),
      api.query.society.strikes.multi<StrikeCount>(accountIds),
      api.query.society.defenderVotes.multi<Option<SocietyVote>>(accountIds),
      api.query.society.suspendedMembers.multi<bool>(accountIds),
      api.query.society.vouching.multi<Option<VouchingStatus>>(accountIds)
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
