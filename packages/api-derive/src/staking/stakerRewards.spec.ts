// Copyright 2017-2026 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { ApiPromise } from '@polkadot/api';
import type { DeriveApi, DeriveEraExposureNominating, DeriveStakerReward } from '../types.js';

import { firstValueFrom, of } from 'rxjs';

import { createApiWithAugmentations } from '../test/helpers.js';
import { _stakerRewards } from './stakerRewards.js';

const NOMINATOR = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const PAID = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';
const OWED = '5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy';
const ERA = 100;

describe('staking _stakerRewards', () => {
  let api: ApiPromise;

  beforeAll(() => {
    api = createApiWithAugmentations();
  });

  // A nominator backing `backing` in ERA. Any validator in `paid` has had every page of
  // the era paid out, i.e. it appears in its own claimedRewardsEras.
  function mockApi (backing: string[], paid: string[]): DeriveApi {
    const era = api.registry.createType('EraIndex', ERA);
    const exposure = () => api.registry.createType('Exposure', {
      others: [{ value: 1_000_000, who: NOMINATOR }],
      own: 5_000_000,
      total: 6_000_000
    });

    return {
      derive: {
        staking: {
          _stakerExposures: () => of([[{
            era,
            isEmpty: false,
            isValidator: false,
            nominating: backing.map((validatorId) => ({ validatorId, validatorIndex: 0 })),
            validators: Object.fromEntries(backing.map((v) => [v, exposure()]))
          }]]),
          _stakerRewardsEras: () => of([
            [{ era, eraPoints: api.registry.createType('u32', 100), validators: Object.fromEntries(backing.map((v) => [v, api.registry.createType('u32', 50)])) }],
            [{ era, validators: Object.fromEntries(backing.map((v) => [v, { commission: api.registry.createType('Compact<Perbill>', 0) }])) }],
            [{ era, eraReward: api.registry.createType('Balance', 1_000_000) }]
          ]),
          queryMulti: (ids: (Uint8Array | string)[]) => of(ids.map((id) => {
            const accountId = api.registry.createType('AccountId', id);
            const address = accountId.toString();

            return {
              accountId,
              // a nominator has no claimedRewards of its own, the validators carry them
              claimedRewardsEras: api.registry.createType('Vec<u32>', paid.includes(address) ? [ERA] : []),
              stakingLedger: api.registry.createType('PalletStakingStakingLedger', { active: 1, stash: address, total: 1 }),
              stashId: accountId
            };
          }))
        }
      },
      registry: api.registry
    } as unknown as DeriveApi;
  }

  function rewardsFor (backing: string[], paid: string[]): Promise<DeriveStakerReward[]> {
    return firstValueFrom(
      _stakerRewards('', mockApi(backing, paid))([NOMINATOR], [api.registry.createType('EraIndex', ERA)], false)
    ).then(([rewards]) => rewards);
  }

  it('keeps an era unclaimed while any backed validator still owes it', async () => {
    const rewards = await rewardsFor([PAID, OWED], [PAID]);

    expect(rewards).toHaveLength(1);
    expect(rewards[0].isClaimed).toBe(false);
  });

  it('does not depend on the order the validators are listed in', async () => {
    const rewards = await rewardsFor([OWED, PAID], [PAID]);

    expect(rewards).toHaveLength(1);
    expect(rewards[0].isClaimed).toBe(false);
  });

  it('drops the validators that have already paid, so only what is owed is reported', async () => {
    const rewards = await rewardsFor([PAID, OWED], [PAID]);

    // NOTE nominators is attached by filterRewards, it is not on DeriveStakerReward
    const { nominators } = rewards[0] as unknown as { nominators: DeriveEraExposureNominating[] };

    expect(Object.keys(rewards[0].validators)).toEqual([OWED]);
    expect(nominators.map(({ validatorId }) => validatorId)).toEqual([OWED]);
  });

  it('drops the era entirely once every backed validator has paid', async () => {
    const rewards = await rewardsFor([PAID, OWED], [PAID, OWED]);

    expect(rewards).toHaveLength(0);
  });

  it('reports the era when no validator has paid', async () => {
    const rewards = await rewardsFor([PAID, OWED], []);

    expect(rewards).toHaveLength(1);
    expect(rewards[0].isClaimed).toBe(false);
    expect(Object.keys(rewards[0].validators).sort()).toEqual([PAID, OWED].sort());
  });
});
