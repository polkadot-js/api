// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveEraRewardsAll } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

export function erasRewards (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraRewardsAll[]> {
  return memo((withActive?: boolean): Observable<DeriveEraRewardsAll[]> =>
    api.derive.staking.erasExposure(withActive).pipe(
      map((exposures): DeriveEraRewardsAll[] =>
        exposures.map(({ all, era, eraPoints }): DeriveEraRewardsAll =>
          Object
            .entries(all)
            .reduce((rewards: DeriveEraRewardsAll, [validatorId, data]): DeriveEraRewardsAll => {
              rewards.validators[validatorId] = data;

              data.exposure.others.forEach(({ who }, index): void => {
                const nominatorId = who.toString();

                rewards.nominators[nominatorId] = rewards.nominators[nominatorId] || [];
                rewards.nominators[nominatorId].push([validatorId, index]);
              });

              return rewards;
            }, { era, eraPoints, nominators: {}, validators: {} })
        )
      )
    )
  );
}
