// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { testMeta } from '../util/testUtil';
import substrateData from './hex/static-substrate';
import substrateJson from './json/static-substrate.json';

testMeta(12, {
  substrate: {
    compare: substrateJson as Record<string, unknown>,
    data: substrateData
  }
});
