// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { PalletStakingEraRewardPoints } from '@polkadot/types/lookup';
import type { DeriveApi } from '../types';

import { switchMap } from 'rxjs';

import { memo } from '../util';

/**
 * @description Retrieve the staking overview, including elected and points earned
 */
export function currentPoints (instanceId: string, api: DeriveApi): () => Observable<PalletStakingEraRewardPoints> {
  return memo(instanceId, (): Observable<PalletStakingEraRewardPoints> =>
    api.derive.session.indexes().pipe(
      switchMap(({ activeEra }) =>
        api.query.staking.erasRewardPoints<PalletStakingEraRewardPoints>(activeEra)
      )
    ));
}
