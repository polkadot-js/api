// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import substrateData from '@polkadot/types-support/metadata/v9/substrate-hex';
import substrateJson from '@polkadot/types-support/metadata/v9/substrate-json.json';

import { testMeta } from '../util/testUtil';

testMeta(9, {
  substrate: {
    compare: substrateJson as Record<string, unknown>,
    data: substrateData
  }
}, false);
