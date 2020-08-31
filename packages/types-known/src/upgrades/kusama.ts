// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainUpgrades } from '@polkadot/types/types';

import { hexToU8a } from '@polkadot/util';

const upgrades: ChainUpgrades = {
  genesisHash: hexToU8a('0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe'),
  versions: []
};

export default upgrades;
