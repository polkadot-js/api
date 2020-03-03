// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId } from '@polkadot/types/interfaces';
import { DeriveStakingValidators } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

/**
 * @description Retrieve latest list of validators
 */
export function validators (api: ApiInterfaceRx): () => Observable<DeriveStakingValidators> {
  return memo((): Observable<DeriveStakingValidators> =>
    // Sadly the node-template is (for some obscure reason) not comprehensive, so while the derive works
    // in all actual real-world deployed chains, it does create some confusion for limited template chains
    // NOTE: Not doing multi queries here, since we have validators as a single in the derived newHead
    combineLatest([
      api.query.session
        ? api.query.session.validators()
        : of([]),
      // FIXME need a replacement for currentElected in new
      api.query.staking?.currentElected
        ? api.query.staking.erasStakers
          ? of(null)
          : api.query.staking.currentElected<AccountId[]>()
        : of([])
    ]).pipe(
      map(([validators, nextElected]): DeriveStakingValidators => ({
        nextElected: nextElected || validators,
        validators
      }))
    ));
}
