// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, u32, Vec } from '@polkadot/types';
import type { AccountId, BalanceOf } from '@polkadot/types/interfaces';
import type { PalletSocietyBid } from '@polkadot/types/lookup';
import type { ApiInterfaceRx } from '../../types';
import type { DeriveSociety } from '../types';

import { map } from 'rxjs';

import { memo } from '../util';

type Result = [Vec<PalletSocietyBid>, Option<AccountId>, Option<AccountId>, Option<AccountId>, u32, BalanceOf]

/**
 * @description Get the overall info for a society
 */
export function info (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveSociety> {
  return memo(instanceId, (): Observable<DeriveSociety> =>
    api.queryMulti<Result>([
      api.query.society.bids,
      api.query.society.defender,
      api.query.society.founder,
      api.query.society.head,
      api.query.society.maxMembers,
      api.query.society.pot
    ]).pipe(
      map(([bids, defender, founder, head, maxMembers, pot]: Result): DeriveSociety => ({
        bids,
        defender: defender.unwrapOr(undefined),
        founder: founder.unwrapOr(undefined),
        hasDefender: (defender.isSome && head.isSome && !head.eq(defender)) || false,
        head: head.unwrapOr(undefined),
        maxMembers,
        pot
      }))
    )
  );
}
