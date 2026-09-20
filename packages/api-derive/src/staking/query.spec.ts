// Copyright 2017-2026 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { ApiPromise } from '@polkadot/api';
import type { Option } from '@polkadot/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { SpStakingPagedExposureMetadata } from '@polkadot/types/lookup';
import type { DeriveApi } from '../types.js';

import { firstValueFrom, of } from 'rxjs';

import { createApiWithAugmentations } from '../test/helpers.js';
import { queryMulti } from './query.js';

const STASH = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const ACTIVE_ERA = 2298;
const PLANNED_ERA = 2299;

describe('staking queryMulti', () => {
  let api: ApiPromise;

  beforeAll(() => {
    api = createApiWithAugmentations();
  });

  function eraIndex (era: number): EraIndex {
    return api.registry.createType('EraIndex', era);
  }

  function overviewOf (total: number): Option<SpStakingPagedExposureMetadata> {
    return api.registry.createType<Option<SpStakingPagedExposureMetadata>>('Option<SpStakingPagedExposureMetadata>', { nominatorCount: 7, own: 10001, pageCount: 1, total });
  }

  function storageKey (era: number) {
    return { args: [eraIndex(era), api.registry.createType('AccountId', STASH)] };
  }

  function mockApi (overviews: Record<number, Option<SpStakingPagedExposureMetadata>>, queriedEras: number[], pagedEras: number[] = []): DeriveApi {
    return {
      consts: { staking: { historyDepth: api.registry.createType('u32', 84) } },
      derive: {
        session: {
          indexes: () => of({ activeEra: eraIndex(ACTIVE_ERA), currentEra: eraIndex(PLANNED_ERA) })
        }
      },
      query: {
        staking: {
          erasStakersOverview: (era: EraIndex) => {
            queriedEras.push(era.toNumber());

            return of(overviews[era.toNumber()] || api.registry.createType('Option<SpStakingPagedExposureMetadata>', null));
          },
          erasStakersPaged: (era: EraIndex) => {
            pagedEras.push(era.toNumber());

            return of(api.registry.createType('Option<Null>', null));
          }
        }
      },
      registry: api.registry
    } as unknown as DeriveApi;
  }

  it('resolves the exposure at the active era by default', async () => {
    // GIVEN a stash exposed in both the active and the planned era
    const queriedEras: number[] = [];
    const mock = mockApi({ [ACTIVE_ERA]: overviewOf(1431324), [PLANNED_ERA]: overviewOf(1604598) }, queriedEras);

    // WHEN no era is requested
    const [info] = await firstValueFrom(queryMulti('', mock)([STASH], { withExposureMeta: true }));

    // THEN the active era backing is returned, and says which era it came from
    expect(info.exposureMeta.unwrap().total.eq(1431324)).toBe(true);
    expect(info.era?.eq(ACTIVE_ERA)).toBe(true);
    expect(queriedEras).toEqual([ACTIVE_ERA]);
  });

  it('resolves the exposure at the requested era', async () => {
    // GIVEN the same stash, elected into the planned era
    const queriedEras: number[] = [];
    const mock = mockApi({ [ACTIVE_ERA]: overviewOf(1431324), [PLANNED_ERA]: overviewOf(1604598) }, queriedEras);

    // WHEN the planned era is requested
    const [info] = await firstValueFrom(queryMulti('', mock)([STASH], { withExposureMeta: true }, 0, eraIndex(PLANNED_ERA)));

    // THEN the backing it was elected with is returned, in a single read
    expect(info.exposureMeta.unwrap().total.eq(1604598)).toBe(true);
    expect(info.era?.eq(PLANNED_ERA)).toBe(true);
    expect(queriedEras).toEqual([PLANNED_ERA]);
  });

  it('resolves the exposure meta and page against the same era', async () => {
    // GIVEN a page that does not exist in the active era - resolving each read on its own would
    // pair an active era meta with a planned era page
    const queriedEras: number[] = [];
    const pagedEras: number[] = [];
    const mock = mockApi({ [ACTIVE_ERA]: overviewOf(1431324), [PLANNED_ERA]: overviewOf(1604598) }, queriedEras, pagedEras);

    // WHEN both are requested for the planned era
    const [info] = await firstValueFrom(queryMulti('', mock)([STASH], { withExposure: true, withExposureMeta: true }, 1, eraIndex(PLANNED_ERA)));

    // THEN both are read against the era the result reports, and the page is simply absent
    expect(queriedEras).toEqual([PLANNED_ERA]);
    expect(pagedEras).toEqual([PLANNED_ERA]);
    expect(info.exposureMeta.isSome).toBe(true);
    expect(info.exposurePaged.isNone).toBe(true);
    expect(info.era?.eq(PLANNED_ERA)).toBe(true);
  });

  it('keeps the claimed rewards window anchored on the active era', async () => {
    // GIVEN a stash that claimed the oldest era of a two-era history, and rewards are only ever
    // payable for eras before the active one - the requested era must not shift that window
    const claimedEra = ACTIVE_ERA - 2;
    const mock = {
      consts: { staking: { historyDepth: api.registry.createType('u32', 2) } },
      derive: {
        session: {
          indexes: () => of({ activeEra: eraIndex(ACTIVE_ERA), currentEra: eraIndex(PLANNED_ERA) })
        }
      },
      query: {
        staking: {
          claimedRewards: { entries: () => of([[storageKey(claimedEra), api.registry.createType('Vec<u32>', [0])]]) },
          erasStakersOverview: { entries: () => of([[storageKey(claimedEra), overviewOf(1431324)]]) }
        }
      },
      registry: api.registry
    } as unknown as DeriveApi;

    // WHEN the exposure is resolved against the planned era
    const [info] = await firstValueFrom(queryMulti('', mock)([STASH], { withClaimedRewardsEras: true }, 0, eraIndex(PLANNED_ERA)));

    // THEN that claim is still within the window
    expect(info.claimedRewardsEras.toJSON()).toEqual([claimedEra]);
  });
});
