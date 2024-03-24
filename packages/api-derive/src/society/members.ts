// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { PalletSocietyVote, PalletSocietyVouchingStatus } from '@polkadot/types/lookup';
import type { ITuple } from '@polkadot/types/types';
import type { bool, Option, u32, u128, Vec } from '@polkadot/types-codec';
import type { DeriveApi, DeriveSocietyMember } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util/index.js';

function _membersPrev (api: DeriveApi, accountIds: AccountId[]): Observable<DeriveSocietyMember[]> {
  return combineLatest([
    of(accountIds),
    api.query.society.payouts.multi<Vec<ITuple<[u32, u128]>>>(accountIds),
    api.query.society['strikes'].multi<u32>(accountIds),
    api.query.society.defenderVotes.multi<Option<PalletSocietyVote>>(accountIds),
    api.query.society.suspendedMembers.multi<bool>(accountIds),
    api.query.society['vouching'].multi<Option<PalletSocietyVouchingStatus>>(accountIds)
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
  );
}

function _membersCurr (api: DeriveApi, accountIds: AccountId[]): Observable<DeriveSocietyMember[]> {
  return combineLatest([
    of(accountIds),
    api.query.society.members.multi(accountIds),
    api.query.society.payouts.multi(accountIds),
    api.query.society.challengeRoundCount().pipe(
      switchMap((round) =>
        api.query.society.defenderVotes.multi(accountIds.map((accountId) => [round, accountId]))
      )
    ),
    api.query.society.suspendedMembers.multi(accountIds)
  ]).pipe(
    map(([accountIds, members, payouts, defenderVotes, suspendedMembers]) =>
      accountIds
        .map((accountId, index) =>
          members[index].isSome
            ? {
              accountId,
              isDefenderVoter: defenderVotes[index].isSome,
              isSuspended: suspendedMembers[index].isSome,
              member: members[index].unwrap(),
              payouts: payouts[index].payouts
            }
            : null
        )
        .filter((m): m is NonNullable<typeof m> => !!m)
        .map(({ accountId, isDefenderVoter, isSuspended, member, payouts }) => ({
          accountId,
          isDefenderVoter,
          isSuspended,
          payouts,
          strikes: member.strikes,
          vouching: member.vouching.unwrapOr(undefined)
        }))
    )
  );
}

export function _members (instanceId: string, api: DeriveApi): (accountIds: AccountId[]) => Observable<DeriveSocietyMember[]> {
  return memo(instanceId, (accountIds: AccountId[]): Observable<DeriveSocietyMember[]> =>
    api.query.society.members.creator.meta.type.isMap
      ? _membersCurr(api, accountIds)
      : _membersPrev(api, accountIds)
  );
}

/**
 * @description Get the member info for a society
 */
export function members (instanceId: string, api: DeriveApi): () => Observable<DeriveSocietyMember[]> {
  return memo(instanceId, (): Observable<DeriveSocietyMember[]> =>
    api.query.society.members.creator.meta.type.isMap
      ? api.query.society.members.keys().pipe(
        switchMap((keys) =>
          api.derive.society._members(
            keys.map(({ args: [accountId] }) => accountId)
          )
        )
      )
      : api.query.society.members<Vec<AccountId>>().pipe(
        switchMap((members) => api.derive.society._members(members))
      )
  );
}
