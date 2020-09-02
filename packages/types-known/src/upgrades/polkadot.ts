// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainUpgradesRaw } from './types';

const upgrades: ChainUpgradesRaw = {
  genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
  versions: [
    [0, 0], [29231, 1], [188836, 5], [199405, 6], [214264, 7],
    [244358, 8], [303079, 9], [314201, 10], [342400, 11], [443963, 12],
    [528470, 13], [687751, 14], [746085, 15], [787923, 16], [799302, 17],
    [1205128, 18]
  ]
};

export default upgrades;
