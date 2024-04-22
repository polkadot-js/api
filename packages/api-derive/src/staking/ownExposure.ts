// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option } from '@polkadot/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { SpStakingExposurePage } from '@polkadot/types/lookup';
import type { DeriveApi, DeriveOwnExposure } from '../types.js';

import { combineLatest, map, of } from 'rxjs';

import { firstMemo, memo } from '../util/index.js';
import { erasHistoricApplyAccount } from './util.js';

export function _ownExposures (instanceId: string, api: DeriveApi): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveOwnExposure[]> {
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], _withActive: boolean): Observable<DeriveOwnExposure[]> => {
    return eras.length
      ? combineLatest([
        // Backwards and forward compat for historical integrity when using `erasHistoricApplyAccount`
        combineLatest(eras.map((e) => api.query.staking.erasStakersClipped(e, accountId))),
        combineLatest(eras.map((e) => api.query.staking.erasStakers(e, accountId))),
        combineLatest(eras.map((e) => api.query.staking.erasStakersPaged<Option<SpStakingExposurePage>>(e, accountId, 0))),
        combineLatest(eras.map((e) => api.query.staking.erasStakersOverview(e, accountId)))
      ]).pipe(
        map(([clp, exp, paged, expMeta]): DeriveOwnExposure[] =>
          eras.map((era, index) => ({ clipped: clp[index], era, exposure: exp[index], exposureMeta: expMeta[index], paged: paged[index] }))
        )
      )
      : of([]);
  }
  );
}

export const ownExposure = /*#__PURE__*/ firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, era: EraIndex) =>
    api.derive.staking._ownExposures(accountId, [era], true)
);

export const ownExposures = /*#__PURE__*/ erasHistoricApplyAccount('_ownExposures');
