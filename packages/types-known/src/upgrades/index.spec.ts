// Copyright 2017-2022 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { u8aEq } from '@polkadot/util';

import all from '.';

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
