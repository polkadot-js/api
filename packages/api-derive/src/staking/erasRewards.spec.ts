// Copyright 2017-2026 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { DeriveApi } from '../types.js';

import { firstValueFrom, of } from 'rxjs';

import { createApiWithAugmentations } from '../test/helpers.js';
import { _erasRewards } from './erasRewards.js';

const REWARD_POT = 100;
const INCENTIVE_POT = 50;

function mockStakingApi (withIncentive: boolean): DeriveApi {
  const api = createApiWithAugmentations();

  return {
    ...api,
    query: {
      ...api.query,
      staking: {
        erasValidatorReward: {
          multi: () => of([api.registry.createType('Option<Balance>', REWARD_POT)])
        },
        ...(withIncentive
          ? {
            erasValidatorIncentiveBudget: {
              multi: () => of([api.registry.createType('Balance', INCENTIVE_POT)])
            }
          }
          : {})
      }
    },
    registry: api.registry
  } as unknown as DeriveApi;
}

describe('staking _erasRewards', (): void => {
  const api = createApiWithAugmentations();
  const era = api.registry.createType('EraIndex', 2244);

  it('includes the validator-incentive budget in the era reward total', async (): Promise<void> => {
    const [eraReward] = await firstValueFrom(_erasRewards('staking-erasRewards-incentive', mockStakingApi(true))([era], true));

    expect(eraReward.eraReward.toBn().toNumber()).toEqual(REWARD_POT + INCENTIVE_POT);
  });

  it('falls back to the reward pot only when the incentive storage is absent', async (): Promise<void> => {
    const [eraReward] = await firstValueFrom(_erasRewards('staking-erasRewards-legacy', mockStakingApi(false))([era], true));

    expect(eraReward.eraReward.toBn().toNumber()).toEqual(REWARD_POT);
  });
});
