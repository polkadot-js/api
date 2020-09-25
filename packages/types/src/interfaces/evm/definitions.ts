// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    Account: {
      nonce: 'U256',
      balance: 'U256'
    },
    Log: {
      address: 'H160',
      topics: 'Vec<H256>',
      data: 'Bytes'
    },
    Vicinity: {
      gasPrice: 'U256',
      origin: 'H160'
    }
  }
} as Definitions;
