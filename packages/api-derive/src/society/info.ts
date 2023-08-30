// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, u32, Vec } from '@polkadot/types';
import type { AccountId, BalanceOf } from '@polkadot/types/interfaces';
import type { PalletSocietyBid } from '@polkadot/types/lookup';
import type { DeriveApi, DeriveSociety } from '../types.js';

import { combineLatest, map, of } from 'rxjs';

import { memo } from '../util/index.js';

type Result = [Vec<PalletSocietyBid>, Option<AccountId> | undefined, Option<AccountId>, Option<AccountId>, u32 | undefined, BalanceOf]

/**
 * @description Get the overall info for a society
 */
export function info (instanceId: string, api: DeriveApi): () => Observable<DeriveSociety> {
  return memo(instanceId, (): Observable<DeriveSociety> =>
    combineLatest<Result>([
      api.query.society.bids(),
      api.query.society['defender']
        ? api.query.society['defender']<Option<AccountId>>()
        : of(undefined),
      api.query.society.founder(),
      api.query.society.head(),
      api.query.society['maxMembers']
        ? api.query.society['maxMembers']<u32>()
        : of(undefined),
      api.query.society.pot()
    ]).pipe(
      map(([bids, defender, founder, head, maxMembers, pot]: Result): DeriveSociety => ({
        bids,
        defender: defender?.unwrapOr(undefined),
        founder: founder.unwrapOr(undefined),
        hasDefender: (defender?.isSome && head.isSome && !head.eq(defender)) || false,
        head: head.unwrapOr(undefined),
        maxMembers,
        pot
      }))
    )
  );
}
