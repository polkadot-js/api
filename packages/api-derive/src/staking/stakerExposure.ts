// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { DeriveEraValidatorExposure, DeriveStakerExposure } from './types';

import { map, switchMap } from 'rxjs';

import { firstMemo, memo } from '../util';

export function _stakerExposures (instanceId: string, api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive?: boolean) => Observable<DeriveStakerExposure[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive = false): Observable<DeriveStakerExposure[][]> => {
    const stakerIds = accountIds.map((a) => api.registry.createType('AccountId', a).toString());

    return api.derive.staking._erasExposure(eras, withActive).pipe(
      map((exposures): DeriveStakerExposure[][] =>
        stakerIds.map((stakerId) =>
          exposures.map(({ era, nominators: allNominators, validators: allValidators }): DeriveStakerExposure => {
            const isValidator = !!allValidators[stakerId];
            const validators: DeriveEraValidatorExposure = {};
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

export function stakerExposures (instanceId: string, api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[], withActive?: boolean) => Observable<DeriveStakerExposure[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], withActive = false): Observable<DeriveStakerExposure[][]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerExposures(accountIds, eras, withActive))
    )
  );
}

export const stakerExposure = firstMemo(
  (api: ApiInterfaceRx, accountId: Uint8Array | string, withActive?: boolean) =>
    api.derive.staking.stakerExposures([accountId], withActive)
);
