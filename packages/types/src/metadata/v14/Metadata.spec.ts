// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { testMeta } from '../util/testUtil';
import polkadotData from './polkadot-hex';
import polkadotJson from './polkadot-json.json';
import polkadotTypes from './polkadot-types.json';
import substrateData from './substrate-hex';
import substrateJson from './substrate-json.json';
import substrateTypes from './substrate-types.json';

testMeta(14, {
  polkadot: {
    compare: polkadotJson as Record<string, unknown>,
    data: polkadotData,
    types: polkadotTypes as Record<string, unknown>
  },
  substrate: {
    compare: substrateJson as Record<string, unknown>,
    data: substrateData,
    types: substrateTypes as Record<string, unknown>
  }
});
