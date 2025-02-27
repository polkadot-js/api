// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { DeriveApi } from '../types.js';
import type { DeriveEraValidatorExposurePaged, DeriveStakerExposure } from './types.js';

import { map, switchMap } from 'rxjs';

import { firstMemo, memo } from '../util/index.js';

export function _stakerExposures (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive?: boolean) => Observable<DeriveStakerExposure[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive = false): Observable<DeriveStakerExposure[][]> => {
    const stakerIds = accountIds.map((a) => api.registry.createType('AccountId', a).toString());

    return api.derive.staking._erasExposure(eras, withActive).pipe(
      map((exposures): DeriveStakerExposure[][] =>
        stakerIds.map((stakerId) =>
          exposures.map(({ era, nominators: allNominators, validators: allValidators }): DeriveStakerExposure => {
            const isValidator = !!allValidators[stakerId];
            const validators: DeriveEraValidatorExposurePaged = {};
            const nominating = allNominators[stakerId] || [];

            if (isValidator) {
              validators[stakerId] = allValidators[stakerId];
            } else if (nominating) {
              nominating.forEach(({ validatorId }): void => {
                validators[validatorId] = allValidators[validatorId];
              });
            }

            return { era, isEmpty: !Object.keys(validators).length, isValidator, nominating, validators };
          })
        )
      )
    );
  });
}

/**
 * @name stakerExposures
 * @param { (Uint8Array | string)[] } accountIds List of validator stash accounts.
 * @param { boolean } withActive Whether to include the active era.
 * @description Retrieves staking exposure for multiple accounts across historical eras.
 * @example
 * ```javascript
 * const exposure = await api.derive.staking.stakerExposures(
 *   [ALICE, BOB],
 *   true
 * );
 * ```
*/
export function stakerExposures (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], withActive?: boolean) => Observable<DeriveStakerExposure[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], withActive = false): Observable<DeriveStakerExposure[][]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerExposures(accountIds, eras, withActive))
    )
  );
}

/**
 * @name stakerExposure
 * @param { Uint8Array | string } accountId The validator stash account.
 * @param { boolean } withActive Whether to include the active era.
 * @description Retrieves staking exposure for a single account across historical eras. Exposure refers to the total stake associated with a validator.
 * @example
 * ```javascript
 * const exposure = await api.derive.staking.stakerExposure(
 *   ALICE,
 *   true
 * );
 * ```
*/
export const stakerExposure = /*#__PURE__*/ firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, withActive?: boolean) =>
    api.derive.staking.stakerExposures([accountId], withActive)
);
