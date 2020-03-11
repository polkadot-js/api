// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakerExposure, DeriveEraValidatorExposure } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

export function stakerExposure (api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean | BN | number) => Observable<DeriveStakerExposure[]> {
  return memo((accountId: Uint8Array | string, withActive?: boolean | BN | number): Observable<DeriveStakerExposure[]> => {
    const stakerId = api.registry.createType('AccountId', accountId).toString();

    return api.derive.staking.erasExposure(withActive).pipe(
      map((exposures): DeriveStakerExposure[] =>
        exposures.map(({ era, nominators: allNominators, validators: allValidators }): DeriveStakerExposure => {
          const isValidator = !!allValidators[stakerId];
          const validators: DeriveEraValidatorExposure = {};
          let nominating: [string, number][] = [];

          if (isValidator) {
            validators[stakerId] = allValidators[stakerId];
          } else if (allNominators[stakerId]) {
            nominating = allNominators[stakerId];

            nominating.forEach(([validatorId]): void => {
              validators[validatorId] = allValidators[validatorId];
            });
          }

          return { era, isEmpty: !Object.keys(validators).length, isValidator, nominating, validators };
        })
      )
    );
  });
}
