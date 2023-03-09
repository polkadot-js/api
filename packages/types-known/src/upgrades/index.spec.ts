// Copyright 2017-2023 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import type { ChainUpgradesExpanded, ChainUpgradesRaw } from './types.js';

import { stringify, u8aEq } from '@polkadot/util';

import * as allGen from './e2e/index.js';
import * as allMan from './manual/index.js';
import all from './index.js';

interface TestDef {
  genesisHash: string;
  network: string;
  versions: [number, [number, number]][];
}

const TESTS: TestDef[] = [
  {
    genesisHash: '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
    network: 'kusama',
    versions: [
      [0, [0, 1020]],
      [17, [901442, 1045]]
    ]
  },
  {
    genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
    network: 'polkadot',
    versions: [
      [0, [0, 0]],
      [19, [2436698, 26]]
    ]
  },
  {
    genesisHash: '0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e',
    network: 'westend',
    versions: [
      [0, [214356, 4]],
      [23, [4207800, 48]]
    ]
  }
];

function checkOrder (network: string, versions: [number, number, ...unknown[]][]): void {
  const ooo = versions.filter((curr, index): boolean => {
    const prev = versions[index - 1];

    return index === 0
      ? false
      : curr[0] <= prev[0] || curr[1] <= prev[1];
  });

  if (ooo.length) {
    throw new Error(`${network}: Mismatched upgrade ordering: ${stringify(ooo)}`);
  }
}

describe('generated', (): void => {
  it('should have all the chains', (): void => {
    expect(Object.keys(allMan).sort()).toEqual(Object.keys(allGen).sort());
  });

  for (const chain of Object.keys(allMan)) {
    describe(chain, (): void => {
      it('should have all generated', (): void => {
        const missing = allMan[chain as keyof typeof allMan].filter(([na, sa]) =>
          !allGen[chain as keyof typeof allGen].some(([nb, sb]) =>
            nb === na &&
            sb === sa
          )
        );

        if (missing.length !== 0) {
          throw new Error(`${chain}:: missing generated apis found, run yarn test:one packages/types-known/src/upgrades/e2e`);
        }
      });

      it('manual should be correctly ordered', (): void => {
        checkOrder(chain, (allGen as Record<string, ChainUpgradesExpanded>)[chain]);
      });

      it('generated should be correctly ordered', (): void => {
        checkOrder(chain, (allMan as Record<string, ChainUpgradesRaw>)[chain]);
      });
    });
  }
});

describe('upgrades', (): void => {
  TESTS.forEach(({ genesisHash, network, versions }): void => {
    describe(network, (): void => {
      const chain = all.find((n) => n.network === network);

      if (!chain) {
        throw new Error(`Unable to find the entry for ${network}`);
      }

      it('has a valid genesisHash', (): void => {
        expect(u8aEq(chain.genesisHash, genesisHash)).toBe(true);
      });

      versions.forEach(([index, [blockNumber, specVersion]]): void => {
        it(`has a valid entry at index ${index}`, (): void => {
          const version = chain.versions[index];

          expect(version.blockNumber.eqn(blockNumber)).toBe(true);
          expect(version.specVersion.eqn(specVersion)).toBe(true);
        });
      });
    });
  });
});
