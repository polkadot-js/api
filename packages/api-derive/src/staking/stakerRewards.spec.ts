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

// Both generations are live across the chains we support, so every case runs against each.
//  - paged:  staking.claimedRewards records the paid eras (surfaced as claimedRewardsEras)
//            and exposure is SpStakingExposurePage
//  - legacy: claimedRewardsEras is always empty, the paid eras live on the validator's
//            ledger.legacyClaimedRewards, and exposure is SpStakingExposure
const GENERATIONS = ['paged', 'legacy'] as const;

type Generation = typeof GENERATIONS[number];

describe('staking _stakerRewards', () => {
  let api: ApiPromise;

  beforeAll(() => {
    api = createApiWithAugmentations();
  });

  function exposureFor (generation: Generation) {
    const others = [{ value: 1_000_000, who: NOMINATOR }];

    return generation === 'paged'
      ? api.registry.createType('SpStakingExposurePage', { others, pageTotal: 6_000_000 })
      : api.registry.createType('Exposure', { others, own: 5_000_000, total: 6_000_000 });
  }

  // `backing` is who the nominator backs in ERA, `paid` is who has fully paid it out
  function mockApi (generation: Generation, backing: string[], paid: string[]): DeriveApi {
    const era = api.registry.createType('EraIndex', ERA);

    return {
      derive: {
        staking: {
          _stakerExposures: () => of([[{
            era,
            isEmpty: false,
            isValidator: false,
            nominating: backing.map((validatorId) => ({ validatorId, validatorIndex: 0 })),
            validators: Object.fromEntries(backing.map((v) => [v, exposureFor(generation)]))
          }]]),
          // the era amounts are nominal - nothing here asserts a computed reward, they only
          // need to be non-zero so parseRewards does not treat the era as empty
          _stakerRewardsEras: () => of([
            [{ era, eraPoints: api.registry.createType('u32', 100), validators: Object.fromEntries(backing.map((v) => [v, api.registry.createType('u32', 50)])) }],
            [{ era, validators: Object.fromEntries(backing.map((v) => [v, { commission: api.registry.createType('Compact<Perbill>', 0) }])) }],
            [{ era, eraReward: api.registry.createType('Balance', 1_000_000) }]
          ]),
          queryMulti: (ids: (Uint8Array | string)[]) => of(ids.map((id) => {
            const accountId = api.registry.createType('AccountId', id);
            const address = accountId.toString();
            const isPaid = paid.includes(address);

            return {
              accountId,
              // a nominator never has claimed eras of its own, the validators carry them
              claimedRewardsEras: api.registry.createType('Vec<u32>', (generation === 'paged') && isPaid ? [ERA] : []),
              stakingLedger: api.registry.createType('PalletStakingStakingLedger', {
                active: 1,
                legacyClaimedRewards: (generation === 'legacy') && isPaid ? [ERA] : [],
                stash: address,
                total: 1
              }),
              stashId: accountId
            };
          }))
        }
      },
      registry: api.registry
    } as unknown as DeriveApi;
  }

  function rewardsFor (generation: Generation, backing: string[], paid: string[]): Promise<DeriveStakerReward[]> {
    return firstValueFrom(
      _stakerRewards('', mockApi(generation, backing, paid))([NOMINATOR], [api.registry.createType('EraIndex', ERA)], false)
    ).then(([rewards]) => rewards);
  }

  for (const generation of GENERATIONS) {
    describe(`${generation} rewards`, () => {
      it('keeps an era unclaimed while any backed validator still owes it', async () => {
        const rewards = await rewardsFor(generation, [PAID, OWED], [PAID]);

        expect(rewards).toHaveLength(1);
        expect(rewards[0].isClaimed).toBe(false);
      });

      it('does not depend on the order the validators are listed in', async () => {
        const rewards = await rewardsFor(generation, [OWED, PAID], [PAID]);

        expect(rewards).toHaveLength(1);
        expect(Object.keys(rewards[0].validators)).toEqual([OWED]);
      });

      it('drops the validators that have already paid, so only what is owed is reported', async () => {
        const rewards = await rewardsFor(generation, [PAID, OWED], [PAID]);
        // NOTE nominators is attached by filterRewards, it is not on DeriveStakerReward
        const { nominators } = rewards[0] as unknown as { nominators: DeriveEraExposureNominating[] };

        expect(Object.keys(rewards[0].validators)).toEqual([OWED]);
        expect(nominators.map(({ validatorId }) => validatorId)).toEqual([OWED]);
      });

      it('drops the era entirely once every backed validator has paid', async () => {
        const rewards = await rewardsFor(generation, [PAID, OWED], [PAID, OWED]);

        expect(rewards).toHaveLength(0);
      });

      it('reports the era when no validator has paid', async () => {
        const rewards = await rewardsFor(generation, [PAID, OWED], []);

        expect(rewards).toHaveLength(1);
        expect(Object.keys(rewards[0].validators).sort()).toEqual([PAID, OWED].sort());
      });
    });
  }
});
