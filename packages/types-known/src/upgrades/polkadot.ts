// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainUpgrades } from '@polkadot/types/types';

import BN from 'bn.js';
import { hexToU8a } from '@polkadot/util';

const upgrades: ChainUpgrades = {
  genesisHash: hexToU8a('0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3'),
  versions: [
    {
      blockNumber: new BN(0),
      specVersion: new BN(0)
    },
    {
      blockNumber: new BN(29231),
      specVersion: new BN(1)
    },
    {
      blockNumber: new BN(188836),
      specVersion: new BN(5)
    }
  ]
};

export default upgrades;
