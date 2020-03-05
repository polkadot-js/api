// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Exposure } from '@polkadot/types/interfaces';
import { DeriveStakerReward } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

export function stakerRewards (api: ApiInterfaceRx): (accountId: Uint8Array | string) => Observable<DeriveStakerReward[]> {
  return memo((accountId: Uint8Array | string): Observable<DeriveStakerReward[]> => {
    const stakerId = api.registry.createType('AccountId', accountId).toString();

    return api.derive.staking.erasRewards().pipe(
      map((rewards): DeriveStakerReward[] =>
        rewards
          .map(({ era, nominators: allNominators, validators: allValidators }): DeriveStakerReward => {
            const isValidator = !!allValidators[stakerId];
            const validators: Record<string, Exposure> = {};
            let nominating: [string, number][] = [];

            if (isValidator) {
              validators[stakerId] = allValidators[stakerId];
            } else if (allNominators[stakerId]) {
              nominating = allNominators[stakerId];

              nominating.forEach(([validatorId]): void => {
                validators[validatorId] = allValidators[validatorId];
              });
            }

            return { era, isValidator, nominating, validators };
          })
          .filter(({ validators }): boolean => Object.keys(validators).length !== 0)
      )
    );
  });
}
