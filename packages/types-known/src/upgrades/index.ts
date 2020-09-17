// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ChainUpgrades } from '@polkadot/types/types';
import { ChainUpgradesRaw } from './types';

import BN from 'bn.js';
import { hexToU8a } from '@polkadot/util';

import kusama from './kusama';
import polkadot from './polkadot';
import westend from './westend';

function rawToFinal ({ genesisHash, versions }: ChainUpgradesRaw): ChainUpgrades {
  return {
    genesisHash: hexToU8a(genesisHash),
    versions: versions.map(([blockNumber, specVersion]) => ({
      blockNumber: new BN(blockNumber),
      specVersion: new BN(specVersion)
    }))
  };
}

// Type overrides for specific spec types & versions as given in runtimeVersion
const upgrades: ChainUpgrades[] = [
  rawToFinal(kusama),
  rawToFinal(polkadot),
  rawToFinal(westend)
];

export default upgrades;
