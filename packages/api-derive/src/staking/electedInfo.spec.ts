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

  function mockApi (plannedKeys: string[], calls: QueryCall[]): DeriveApi {
    return {
      derive: {
        session: {
          indexes: () => of({ activeEra: api.registry.createType('EraIndex', ACTIVE_ERA), currentEra: api.registry.createType('EraIndex', PLANNED_ERA) })
        },
        staking: {
          queryMulti: (stashes: AccountId[], _flags: unknown, _page: number, era: EraIndex) => {
            calls.push({ era: era.toNumber(), stashes: stashes.map((s) => s.toString()) });

            return of(stashes.map((accountId): DeriveStakingQuery => ({ accountId }) as DeriveStakingQuery));
          }
        }
      },
      query: {
        session: { validators: () => of([LEAVING, STAYING].map(accountId)) },
        staking: {
          erasStakersOverview: { keys: (era: EraIndex) => of(era.eq(PLANNED_ERA) ? storageKeys(plannedKeys) : []) }
        }
      },
      registry: api.registry
    } as unknown as DeriveApi;
  }

  it('resolves the planned set at the planned era and the rest at the active era', async () => {
    // GIVEN an election stored for the planned era, dropping one validator and adding a stash that
    // is not validating yet
    const calls: QueryCall[] = [];
    const mock = mockApi([STAYING, ENTERING], calls);

    // WHEN the elected info is retrieved
    const { info, nextElected, validators } = await firstValueFrom(electedInfo('', mock)());

    // THEN each stash is read against the era it was elected for, the entrant included, and the
    // validator that is not re-elected against the era it is still serving
    expect(calls).toEqual([
      { era: PLANNED_ERA, stashes: [STAYING, ENTERING] },
      { era: ACTIVE_ERA, stashes: [LEAVING] }
    ]);
    expect(info.map((i) => i.accountId.toString())).toEqual([STAYING, ENTERING, LEAVING]);

    // AND the set reported back is the one the split was taken from
    expect(nextElected.map((a) => a.toString())).toEqual([STAYING, ENTERING]);
    expect(validators.map((a) => a.toString())).toEqual([LEAVING, STAYING]);
  });

  it('resolves everything at the active era while the planned era has no exposure', async () => {
    // GIVEN a planned era whose election result has not been stored yet
    const calls: QueryCall[] = [];
    const mock = mockApi([], calls);

    // WHEN the elected info is retrieved
    const { info, nextElected } = await firstValueFrom(electedInfo('', mock)());

    // THEN nothing is read against the planned era, where every stash would come back unexposed,
    // and the current validators stand in for the next set
    expect(calls).toEqual([
      { era: PLANNED_ERA, stashes: [] },
      { era: ACTIVE_ERA, stashes: [LEAVING, STAYING] }
    ]);
    expect(info.map((i) => i.accountId.toString())).toEqual([LEAVING, STAYING]);
    expect(nextElected.map((a) => a.toString())).toEqual([LEAVING, STAYING]);
  });
});
