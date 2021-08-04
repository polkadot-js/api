// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import polkadotData from '@polkadot/types-support/metadata/v13/polkadot-hex';
import polkadotJson from '@polkadot/types-support/metadata/v13/polkadot-json.json';
import substrateData from '@polkadot/types-support/metadata/v13/substrate-hex';
import substrateJson from '@polkadot/types-support/metadata/v13/substrate-json.json';

import { testMeta } from '../util/testUtil';

testMeta(13, {
  polkadot: {
    compare: polkadotJson as Record<string, unknown>,
    data: polkadotData
  },
  substrate: {
    compare: substrateJson as Record<string, unknown>,
    data: substrateData
  }
});
