// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    CallIndex: '(u8, u8)',
    LotteryConfig: {
      price: 'Balance',
      start: 'BlockNumber',
      length: 'BlockNumber',
      delay: 'BlockNumber',
      repeat: 'bool'
    }
  }
} as Definitions;
