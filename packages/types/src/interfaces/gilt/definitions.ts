// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

export default {
  rpc: {},
  types: {
    ActiveGilt: {
      proportion: 'Perquintill',
      amount: 'Balance',
      who: 'AccountId',
      expiry: 'BlockNumber'
    },
    ActiveGiltsTotal: {
      frozen: 'Balance',
      proportion: 'Perquintill',
      index: 'ActiveIndex',
      target: 'Perquintill'
    },
    ActiveIndex: 'u32',
    GiltBid: {
      amount: 'Balance',
      who: 'AccountId'
    }
  }
} as Definitions;
