// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { EraRewardPoints } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';

import { switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

/**
 * @description Retrieve the staking overview, including elected and points earned
 */
export function currentPoints (instanceId: string, api: ApiInterfaceRx): () => Observable<EraRewardPoints> {
  return memo(instanceId, (): Observable<EraRewardPoints> =>
    api.derive.session.indexes().pipe(
      switchMap(({ activeEra }) =>
        api.query.staking.erasRewardPoints<EraRewardPoints>(activeEra)
      )
    ));
}
