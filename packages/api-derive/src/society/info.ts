// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, BalanceOf, Bid } from '@polkadot/types/interfaces';
import { DeriveSociety } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Option, Vec, u32 } from '@polkadot/types';

import { memo } from '../util';

type Result = [Vec<Bid>, Option<AccountId>, Option<AccountId>, Option<AccountId>, u32, BalanceOf]

/**
 * @description Get the overall info for a society
 */
export function info (api: ApiInterfaceRx): () => Observable<DeriveSociety> {
  return memo((): Observable<DeriveSociety> =>
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
