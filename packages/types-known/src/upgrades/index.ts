// Copyright 2017-2022 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ChainUpgrades } from '@polkadot/types/types';
import type { ChainUpgradesRaw } from './types';

import { selectableNetworks } from '@polkadot/networks';
import { knownGenesis } from '@polkadot/networks/defaults';
import { assert, BN, hexToU8a, stringify } from '@polkadot/util';

import kusama from './kusama';
import polkadot from './polkadot';
import westend from './westend';

const allKnown = { kusama, polkadot, westend };

// testnets are not available in the networks map
const NET_EXTRA: Record<string, { genesisHash: string[] }> = {
  westend: {
    genesisHash: knownGenesis.westend
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

  assert(!ooo.length, () => `${network}: Mismatched upgrade ordering: ${stringify(ooo)}`);

  return versions;
}

/** @internal */
function mapRaw ([network, versions]: [string, ChainUpgradesRaw]): ChainUpgrades {
  const chain = selectableNetworks.find((n) => n.network === network) || NET_EXTRA[network];

  assert(chain, () => `Unable to find info for chain ${network}`);

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
const upgrades = Object.entries(allKnown).map(mapRaw);

export default upgrades;
