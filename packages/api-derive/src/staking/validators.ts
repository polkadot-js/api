// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakingValidators } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vec } from '@polkadot/types';

import { drr, memo } from '../util';

/**
 * @description Retrieve latest list of validators
 */
export const validators = memo((api: ApiInterfaceRx): () => Observable<DeriveStakingValidators> => {
  return (): Observable<DeriveStakingValidators> =>
    api.queryMulti<[Vec<AccountId>, Vec<AccountId>]>([
      api.query.session.validators,
      api.query.staking.currentElected
    ]).pipe(
      map(([validators, currentElected]): DeriveStakingValidators => ({
        currentElected, validators
      })),
      drr()
    );
}, true);
