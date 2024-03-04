// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import kusamaData from '@polkadot/types-support/metadata/v13/kusama-hex';
import polkadotData from '@polkadot/types-support/metadata/v13/polkadot-hex';
import substrateData from '@polkadot/types-support/metadata/v13/substrate-hex';

import { testMeta } from '../util/testUtil.js';

testMeta(13, {
  kusama: {
    data: kusamaData,
    fails: [
      // RawSolution has 24 entries
      'SignedSubmissionOf'
    ]
  },
  polkadot: {
    data: polkadotData
  },
  substrate: {
    data: substrateData
  }
});
