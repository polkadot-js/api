// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import substrateData from '@polkadot/types-support/metadata/v12/substrate-hex';

import { testMeta } from '../util/testUtil.js';

testMeta(12, {
  substrate: {
    data: substrateData
  }
});
