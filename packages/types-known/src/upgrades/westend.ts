// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ChainUpgradesRaw } from './types';

const upgrades: ChainUpgradesRaw = {
  genesisHash: '0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e',
  versions: [
    [214356, 4], [392764, 7], [409740, 8], [809976, 20], [877581, 24],
    [879238, 25], [889472, 26], [902937, 27], [932751, 28], [991142, 29],
    [1030162, 31], [1119657, 32], [1199282, 33], [1342534, 34], [1392263, 35],
    [1431703, 36], [1433369, 37], [1490972, 41], [2087397, 43], [2316688, 44],
    [2549864, 45]
  ]
};

export default upgrades;
