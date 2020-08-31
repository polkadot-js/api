// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainUpgrades } from '@polkadot/types/types';

import BN from 'bn.js';
import { hexToU8a } from '@polkadot/util';

const upgrades: ChainUpgrades = {
  genesisHash: hexToU8a('0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe'),
  versions: [
    [1375086, 1050], [1445458, 1051], [1472960, 1052], [1475648, 1053], [1491596, 1054], [1574408, 1055], [2064961, 1058], [2201991, 1062], [2671528, 2005], [2704202, 2007], [2728002, 2008], [2832534, 2011], [2962294, 2012], [3240000, 2013], [3274408, 2015], [3323565, 2019], [3534175, 2022]
  ].map(([blockNumber, specVersion]) => ({
    blockNumber: new BN(blockNumber),
    specVersion: new BN(specVersion)
  }))
};

export default upgrades;
