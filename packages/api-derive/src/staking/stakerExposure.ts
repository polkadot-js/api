// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveEraValidatorExposure, DeriveStakerExposure } from '../types';

import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

export function _stakerExposure (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerExposure[]> {
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean): Observable<DeriveStakerExposure[]> => {
    const stakerId = api.registry.createType('AccountId', accountId).toString();

    return api.derive.staking._erasExposure(eras, withActive).pipe(
      map((exposures): DeriveStakerExposure[] =>
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
    );
  });
}

export function stakerExposure (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerExposure[]> {
  return memo(instanceId, (accountId: Uint8Array | string, withActive = false): Observable<DeriveStakerExposure[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerExposure(accountId, eras, withActive))
    )
  );
}
