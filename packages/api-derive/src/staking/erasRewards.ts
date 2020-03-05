// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveEraRewardsAll } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

export function erasRewards (api: ApiInterfaceRx): () => Observable<DeriveEraRewardsAll[]> {
  return memo((): Observable<DeriveEraRewardsAll[]> =>
    api.derive.staking.erasExposure().pipe(
      map((exposures): DeriveEraRewardsAll[] =>
        exposures.map(({ era, all }): DeriveEraRewardsAll =>
          Object
            .entries(all)
            .reduce((rewards: DeriveEraRewardsAll, [validatorId, exposure]): DeriveEraRewardsAll => {
              rewards.validators[validatorId] = exposure;

              exposure.others.forEach(({ who }): void => {
                const nominatorId = who.toString();

                rewards.nominators[nominatorId] = rewards.nominators[nominatorId] || [];
                rewards.nominators[nominatorId].push(validatorId);
              });

              return rewards;
            }, { era, nominators: {}, validators: {} })
        )
      )
    )
  );
}
