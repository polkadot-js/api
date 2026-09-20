// Copyright 2017-2026 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { ApiPromise } from '@polkadot/api';
import type { AccountId, EraIndex } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveStakingQuery } from '../types.js';

import { firstValueFrom, of } from 'rxjs';

import { createApiWithAugmentations } from '../test/helpers.js';
import { electedInfo } from './electedInfo.js';

const LEAVING = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const STAYING = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';
const ENTERING = '5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy';
const ACTIVE_ERA = 2298;
const PLANNED_ERA = 2299;

interface QueryCall {
  era: number;
  stashes: string[];
}

describe('staking electedInfo', () => {
  let api: ApiPromise;

  beforeAll(() => {
    api = createApiWithAugmentations();
  });

  function accountId (address: string): AccountId {
    return api.registry.createType('AccountId', address);
  }

  function storageKeys (addresses: string[]) {
    return addresses.map((a) => ({ args: [api.registry.createType('EraIndex', PLANNED_ERA), accountId(a)] }));
  }

  // nextElected is what validators() reports, which lags the storage it is derived from and
  // collapses onto the session validators when the planned era holds no election result
  function mockApi (elected: string[], nextElected: string[], calls: QueryCall[]): DeriveApi {
    const validators = [LEAVING, STAYING].map(accountId);

    return {
      derive: {
        session: {
          indexes: () => of({ activeEra: api.registry.createType('EraIndex', ACTIVE_ERA), currentEra: api.registry.createType('EraIndex', PLANNED_ERA) })
        },
        staking: {
          queryMulti: (stashes: AccountId[], _flags: unknown, _page: number, era: EraIndex) => {
            calls.push({ era: era.toNumber(), stashes: stashes.map((s) => s.toString()) });

            return of(stashes.map((accountId): DeriveStakingQuery => ({ accountId }) as DeriveStakingQuery));
          },
          validators: () => of({ nextElected: nextElected.map(accountId), validators })
        }
      },
      query: {
        staking: {
          erasStakersOverview: { keys: (era: EraIndex) => of(era.eq(PLANNED_ERA) ? storageKeys(elected) : []) }
        }
      },
      registry: api.registry
    } as unknown as DeriveApi;
  }

  it('resolves the planned set at the planned era and the rest at the active era', async () => {
    // GIVEN an election stored for the planned era, dropping one validator and adding another
    const calls: QueryCall[] = [];
    const mock = mockApi([STAYING, ENTERING], [STAYING, ENTERING], calls);

    // WHEN the elected info is retrieved
    const { info } = await firstValueFrom(electedInfo('', mock)());

    // THEN only the stashes exposed at the planned era are read against it, and the validator that
    // is not being re-elected is read against the era it is actually serving
    expect(calls).toEqual([
      { era: PLANNED_ERA, stashes: [STAYING, ENTERING] },
      { era: ACTIVE_ERA, stashes: [LEAVING] }
    ]);
    expect(info.map((i) => i.accountId.toString())).toEqual([STAYING, ENTERING, LEAVING]);
  });

  it('resolves everything at the active era while the planned era has no exposure', async () => {
    // GIVEN a planned era whose election result has not been stored yet - nextElected is empty and
    // validators() hands back the session validators instead
    const calls: QueryCall[] = [];
    const mock = mockApi([], [LEAVING, STAYING], calls);

    // WHEN the elected info is retrieved
    const { info } = await firstValueFrom(electedInfo('', mock)());

    // THEN nothing is read against the planned era, where every stash would come back unexposed
    expect(calls).toEqual([
      { era: PLANNED_ERA, stashes: [] },
      { era: ACTIVE_ERA, stashes: [LEAVING, STAYING] }
    ]);
    expect(info.map((i) => i.accountId.toString())).toEqual([LEAVING, STAYING]);
  });

  it('splits on the elected set of the era it resolves against, not on a stale one', async () => {
    // GIVEN validators() still replaying the previous era's elected set, as it does for a beat
    // after the era rotates, while the planned era holds a different one
    const calls: QueryCall[] = [];
    const mock = mockApi([STAYING, ENTERING], [STAYING, LEAVING], calls);

    // WHEN the elected info is retrieved
    await firstValueFrom(electedInfo('', mock)());

    // THEN the stale member is read against the active era, where it does have an exposure, rather
    // than against the planned era it is no longer part of
    expect(calls).toEqual([
      { era: PLANNED_ERA, stashes: [STAYING] },
      { era: ACTIVE_ERA, stashes: [LEAVING] }
    ]);
  });
});
