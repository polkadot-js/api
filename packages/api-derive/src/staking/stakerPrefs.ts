// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveStakerPrefs } from '../types.js';

import { map } from 'rxjs';

import { memo } from '../util/index.js';
import { erasHistoricApplyAccount } from './util.js';

export function _stakerPrefs (instanceId: string, api: DeriveApi): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerPrefs[]> {
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], _withActive: boolean): Observable<DeriveStakerPrefs[]> =>
    api.query.staking.erasValidatorPrefs.multi(eras.map((e) => [e, accountId])).pipe(
      map((all): DeriveStakerPrefs[] =>
        all.map((validatorPrefs, index): DeriveStakerPrefs => ({
          era: eras[index],
          validatorPrefs
        }))
      )
    )
  );
}

/**
 * @name stakerPrefs
 * @param { Uint8Array | string } accountId The stakers AccountId.
 * @param { boolean } withActive Whether to include the active era.
 * @description Retrieves the validator preferences for a given staker across historical eras.
 * @example
 * ```javascript
 * const prefs = await api.derive.staking.stakerPrefs(
 *   ALICE, //Alice accountId
 *   false
 * );
 * console.log(
 *   'Validator Preferences:',
 *   prefs.map(
 *     ({ era, validatorPrefs }) => `Era ${era}: Commission ${validatorPrefs.commission.toString()}`
 *   )
 * );
 * ```
*/
export const stakerPrefs = /*#__PURE__*/ erasHistoricApplyAccount('_stakerPrefs');
