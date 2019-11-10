// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakingValidators } from '../types';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vec } from '@polkadot/types';

import { drr } from '../util';

/**
 * @description Retrieve latest list of validators
 */
export function validators (api: ApiInterfaceRx): () => Observable<DeriveStakingValidators> {
  return (): Observable<DeriveStakingValidators> =>
    (
      api.query.session && api.query.staking
        ? api.queryMulti<[Vec<AccountId>, Vec<AccountId>]>([
          api.query.session.validators,
          api.query.staking.currentElected
        ])
        : of([[], []] as [AccountId[], AccountId[]])
    ).pipe(
      map(([validators, currentElected]): DeriveStakingValidators => ({
        currentElected, validators
      })),
      drr()
    );
}
