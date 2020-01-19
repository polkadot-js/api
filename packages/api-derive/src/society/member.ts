// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Balance, BlockNumber, StrikeCount, VouchingStatus } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveSocietyMember } from '../types';

import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { bool, Option, Vec } from '@polkadot/types';

import { memo } from '../util';

/**
 * @description Get the member info for a society
 */
export function member (api: ApiInterfaceRx): (accountId: AccountId) => Observable<DeriveSocietyMember> {
  return memo((accountId: AccountId): Observable<DeriveSocietyMember> =>
    combineLatest([
      api.query.society.payouts<Vec<ITuple<[BlockNumber, Balance]>>>(accountId),
      api.query.society.strikes<StrikeCount>(accountId),
      api.query.society.suspendedMembers<bool>(accountId),
      api.query.society.vouching<Option<VouchingStatus>>(accountId)
    ]).pipe(
      map(([payouts, strikes, suspended, vouching]: [Vec<ITuple<[BlockNumber, Balance]>>, StrikeCount, bool, Option<VouchingStatus>]): DeriveSocietyMember => ({
        accountId,
        payouts,
        isSuspended: !suspended.isEmpty,
        strikes,
        vouching: vouching.unwrapOr(undefined)
      }))
    )
  );
}
