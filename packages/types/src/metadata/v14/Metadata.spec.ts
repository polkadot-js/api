// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { testMeta } from '../util/testUtil';
import polkadotData from './hex/static-polkadot';
import substrateData from './hex/static-substrate';
import polkadotJson from './json/static-polkadot.json';
import polkadotTypes from './json/static-polkadot-types.json';
import substrateJson from './json/static-substrate.json';
import substrateTypes from './json/static-substrate-types.json';

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
