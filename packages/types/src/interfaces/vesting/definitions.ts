// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

export default {
  rpc: {},
  types: {
    VestingInfo: {
      locked: 'Balance',
      perBlock: 'Balance',
      startingBlock: 'BlockNumber'
    }
  }
} as Definitions;
