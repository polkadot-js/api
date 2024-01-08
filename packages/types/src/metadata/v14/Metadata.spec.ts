// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import kusamaData from '@polkadot/types-support/metadata/v14/kusama-hex';
import polkadotData from '@polkadot/types-support/metadata/v14/polkadot-hex';
import substrateData from '@polkadot/types-support/metadata/v14/substrate-hex';

import { testMeta } from '../util/testUtil.js';

testMeta(14, {
  kusama: {
    data: kusamaData
  },
  polkadot: {
    data: polkadotData
  },
  substrate: {
    data: substrateData
  }
});
