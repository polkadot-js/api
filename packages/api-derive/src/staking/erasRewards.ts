// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Exposure } from '@polkadot/types/interfaces';
import { DeriveEraRewardsAll } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

function includeExposure (validatorId: string, { others }: Exposure, nominators: Record<string, [string, number][]>): void {
  others.forEach(({ who }, index): void => {
    const nominatorId = who.toString();

    nominators[nominatorId] = nominators[nominatorId] || [];
    nominators[nominatorId].push([validatorId, index]);
  });
}

export function erasRewards (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraRewardsAll[]> {
  return memo((withActive?: boolean): Observable<DeriveEraRewardsAll[]> =>
    api.derive.staking.erasExposure(withActive).pipe(
      map((exposures): DeriveEraRewardsAll[] =>
        exposures.map(({ era, eraPoints, eraReward, validators }): DeriveEraRewardsAll =>
          Object
            .entries(validators)
            .reduce((rewards: DeriveEraRewardsAll, [validatorId, { exposure }]): DeriveEraRewardsAll => {
              includeExposure(validatorId, exposure, rewards.nominators);

              return rewards;
            }, { era, eraPoints, eraReward, nominators: {}, validators })
        )
      )
    )
  );
}
