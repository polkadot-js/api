// Copyright 2017-2026 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { DeriveApi } from '../types.js';

import { firstValueFrom, of } from 'rxjs';

import { createApiWithAugmentations } from '../test/helpers.js';
import { all } from './all.js';

describe('balances all', (): void => {
  const api = createApiWithAugmentations();
  const registry = api.registry;

  it('ends a vesting schedule on the block that unlocks the remainder', async (): Promise<void> => {
    const mock = {
      derive: {
        balances: { account: () => of({ freeBalance: registry.createType('Balance', 10) }) },
        chain: { bestNumber: () => of(registry.createType('BlockNumber', 1)) }
      },
      query: {
        balances: { locks: () => of([]), reserves: () => of([]) },
        system: { account: () => of() },
        vesting: { vesting: () => of(registry.createType('Option<Vec<PalletVestingVestingInfo>>', [{ locked: 10, perBlock: 3, startingBlock: 100 }])) }
      },
      registry,
      runtimeVersion: { specName: 'node' }
    } as unknown as DeriveApi;

    const { vesting } = await firstValueFrom(all('', mock)('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'));

    expect(vesting[0].endBlock.toNumber()).toEqual(104);
  });
});
