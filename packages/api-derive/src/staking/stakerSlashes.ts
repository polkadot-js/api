// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveStakerSlashes } from '../types.js';

import { map } from 'rxjs';

import { memo } from '../util/index.js';
import { erasHistoricApplyAccount } from './util.js';

export function _stakerSlashes (instanceId: string, api: DeriveApi): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerSlashes[]> {
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean): Observable<DeriveStakerSlashes[]> => {
    const stakerId = api.registry.createType('AccountId', accountId).toString();

    return api.derive.staking._erasSlashes(eras, withActive).pipe(
      map((slashes): DeriveStakerSlashes[] =>
        slashes.map(({ era, nominators, validators }): DeriveStakerSlashes => ({
          era,
          total: nominators[stakerId] || validators[stakerId] || api.registry.createType('Balance')
        }))
      )
    );
  });
}

export const stakerSlashes = /*#__PURE__*/ erasHistoricApplyAccount('_stakerSlashes');
