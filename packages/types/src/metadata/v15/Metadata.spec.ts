// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import substrateData from '@polkadot/types-support/metadata/v15/substrate-hex';
import polkadotData from '@polkadot/types-support/metadata/v15/polkadot-hex';
import kusamaData from '@polkadot/types-support/metadata/v15/kusama-hex';

import { testMeta } from '../util/testUtil.js';

testMeta(15, {
  kusama: {
    data: kusamaData
  },
  polkadot: {
    data: polkadotData
  },
  substrate: {
    data: substrateData
  },
});
