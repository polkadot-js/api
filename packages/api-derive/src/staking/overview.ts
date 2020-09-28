// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakingOverview } from '../types';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

/**
 * @description Retrieve the staking overview, including elected and points earned
 */
export function overview (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveStakingOverview> {
  return memo(instanceId, (): Observable<DeriveStakingOverview> =>
    combineLatest([
      api.derive.session.indexes(),
      api.derive.staking.validators()
    ]).pipe(
      map(([indexes, { nextElected, validators }]): DeriveStakingOverview => ({
        ...indexes,
        nextElected,
        validators
      }))
    ));
}
