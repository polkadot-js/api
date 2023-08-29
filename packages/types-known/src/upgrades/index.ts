// Copyright 2017-2023 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ChainUpgrades } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';
import type { ChainUpgradesExpanded } from './types.js';

import { selectableNetworks } from '@polkadot/networks';
import { BN, hexToU8a } from '@polkadot/util';

import * as allKnown from './e2e/index.js';

// testnets are not available in the networks map
const NET_EXTRA: Record<string, { genesisHash: HexString[] }> = {
  westend: {
    genesisHash: ['0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e']
  }
};

/** @internal */
function mapRaw ([network, versions]: [string, ChainUpgradesExpanded]): ChainUpgrades {
  const chain = selectableNetworks.find((n) => n.network === network) || NET_EXTRA[network];

  if (!chain) {
    throw new Error(`Unable to find info for chain ${network}`);
  }

  return {
    genesisHash: hexToU8a(chain.genesisHash[0]),
    network,
    versions: versions.map(([blockNumber, specVersion, apis]) => ({
      apis,
      blockNumber: new BN(blockNumber),
      specVersion: new BN(specVersion)
    }))
  };
}

// Type overrides for specific spec types & versions as given in runtimeVersion
export const upgrades = Object.entries<ChainUpgradesExpanded>(allKnown).map(mapRaw);
