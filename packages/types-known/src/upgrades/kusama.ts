// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainUpgrades } from '@polkadot/types/types';

import BN from 'bn.js';
import { hexToU8a } from '@polkadot/util';

const upgrades: ChainUpgrades = {
  genesisHash: hexToU8a('0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe'),
  versions: [
    [0, 1020], [26669,	1021], [38245, 1022], [54248, 1023], [59659, 1024], [67651, 1025], [82191, 1027], [83238, 1028], [101503, 1029], [203466, 1030], [295787, 1031], [461692, 1032], [504329, 1033], [569327, 1038], [587687, 1039], [653183, 1040], [693488, 1042], [901442, 1045],
    [1375086, 1050], [1445458, 1051], [1472960, 1052], [1475648, 1053], [1491596, 1054], [1574408, 1055], [2064961, 1058], [2201991, 1062], [2671528, 2005], [2704202, 2007], [2728002, 2008], [2832534, 2011], [2962294, 2012], [3240000, 2013], [3274408, 2015], [3323565, 2019], [3534175, 2022]
  ].map(([blockNumber, specVersion]) => ({
    blockNumber: new BN(blockNumber),
    specVersion: new BN(specVersion)
  }))
};

export default upgrades;
