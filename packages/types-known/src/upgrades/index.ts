// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ChainUpgrades } from '@polkadot/types/types';
import type { ChainUpgradesRaw } from './types';

import BN from 'bn.js';

import { assert, hexToU8a } from '@polkadot/util';

import kusama from './kusama';
import polkadot from './polkadot';
import westend from './westend';

/** @internal */
function checkOrder (network: string, versions: [number, number][]): [number, number][] {
  const ooo = versions.filter((curr, index): boolean => {
    const prev = versions[index - 1];

    return index === 0
      ? false
      : curr[0] <= prev[0] || curr[1] <= prev[1];
  });

  assert(!ooo.length, `${network}: Mismatched upgrade ordering: ${JSON.stringify(ooo)}`);

  return versions;
}

/** @internal */
function rawToFinal (network: string, { genesisHash, versions }: ChainUpgradesRaw): ChainUpgrades {
  return {
    genesisHash: hexToU8a(genesisHash),
    network,
    versions: checkOrder(network, versions).map(([blockNumber, specVersion]) => ({
      blockNumber: new BN(blockNumber),
      specVersion: new BN(specVersion)
    }))
  };
}

// Type overrides for specific spec types & versions as given in runtimeVersion
const upgrades: ChainUpgrades[] = [
  rawToFinal('kusama', kusama),
  rawToFinal('polkadot', polkadot),
  rawToFinal('westend', westend)
];

export default upgrades;
