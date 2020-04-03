// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
    }
  }
} as Definitions;
