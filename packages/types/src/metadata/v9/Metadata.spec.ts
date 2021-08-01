// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { testMeta } from '../util/testUtil';
import substrateData from './substrate-hex';
import substrateJson from './substrate-json.json';

testMeta(9, {
  substrate: {
    compare: substrateJson as Record<string, unknown>,
    data: substrateData
  }
}, false);
