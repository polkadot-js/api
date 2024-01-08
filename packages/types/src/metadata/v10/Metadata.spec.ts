// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import substrateData from '@polkadot/types-support/metadata/v10/substrate-hex';

import { testMeta } from '../util/testUtil.js';

testMeta(10, {
  substrate: {
    data: substrateData
  }
}, false);
