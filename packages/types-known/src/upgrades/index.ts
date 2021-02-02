// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ChainUpgrades } from '@polkadot/types/types';
import type { ChainUpgradesRaw } from './types';

import BN from 'bn.js';

import networks from '@polkadot/networks';
import { assert, hexToU8a } from '@polkadot/util';

import kusama from './kusama';
import polkadot from './polkadot';
import westend from './westend';

// testnets are not available in the networks map
const NET_EXTRA: Record<string, { genesisHash: string[] }> = {
  westend: {
    genesisHash: ['0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e']
  }
};

/** @internal */
function checkOrder (network: string, versions: ChainUpgradesRaw): [number, number][] {
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
function mapRaw ([network, versions]: [string, ChainUpgradesRaw]): ChainUpgrades {
  const chain = networks.find((n) => n.network === network) || NET_EXTRA[network];

  assert(chain, `Unable to find info for chain ${network}`);

  return {
    genesisHash: hexToU8a(chain.genesisHash[0]),
    network,
    versions: checkOrder(network, versions).map(([blockNumber, specVersion]) => ({
      blockNumber: new BN(blockNumber),
      specVersion: new BN(specVersion)
    }))
  };
}

// Type overrides for specific spec types & versions as given in runtimeVersion
const upgrades = Object.entries({ kusama, polkadot, westend }).map(mapRaw);

export default upgrades;
