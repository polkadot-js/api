// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveEraExposures, DeriveStakerReward } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

export function stakerRewards (api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerReward[]> {
  return memo((accountId: Uint8Array | string, withActive?: boolean): Observable<DeriveStakerReward[]> => {
    const stakerId = api.registry.createType('AccountId', accountId).toString();

    return api.derive.staking.erasRewards(withActive).pipe(
      map((rewards): DeriveStakerReward[] =>
        rewards.map(({ era, eraPoints, nominators: allNominators, validators: allValidators }): DeriveStakerReward => {
          const isValidator = !!allValidators[stakerId];
          const validators: DeriveEraExposures = {};
          let nominating: [string, number][] = [];

          if (isValidator) {
            validators[stakerId] = allValidators[stakerId];
          } else if (allNominators[stakerId]) {
            nominating = allNominators[stakerId];

            nominating.forEach(([validatorId]): void => {
              validators[validatorId] = allValidators[validatorId];
            });
          }

          return { era, eraPoints, isEmpty: !Object.keys(validators).length, isValidator, nominating, validators };
        })
      )
    );
  });
}
