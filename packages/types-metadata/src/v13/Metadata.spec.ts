// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import kusamaData from '@polkadot/types-support/metadata/v13/kusama-hex';
import kusamaJson from '@polkadot/types-support/metadata/v13/kusama-json.json';
import polkadotData from '@polkadot/types-support/metadata/v13/polkadot-hex';
import polkadotJson from '@polkadot/types-support/metadata/v13/polkadot-json.json';
import substrateData from '@polkadot/types-support/metadata/v13/substrate-hex';
import substrateJson from '@polkadot/types-support/metadata/v13/substrate-json.json';

import { testMeta } from '../util/testUtil';

testMeta(13, {
  kusama: {
    compare: kusamaJson as Record<string, unknown>,
    data: kusamaData,
    fails: [
      // RawSolution has 24 entries
      'SignedSubmissionOf'
    ]
  },
  polkadot: {
    compare: polkadotJson as Record<string, unknown>,
    data: polkadotData
  },
  substrate: {
    compare: substrateJson as Record<string, unknown>,
    data: substrateData
  }
});
