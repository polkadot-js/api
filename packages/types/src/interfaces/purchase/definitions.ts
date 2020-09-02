// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    AccountStatus: {
      validity: 'AccountValidity',
      freeBalance: 'Balance',
      lockedBalance: 'Balance',
      signature: 'Vec<u8>',
      vat: 'Permill'
    },
    AccountValidity: {
      _enum: ['Invalid', 'Initiated', 'Pending', 'ValidLow', 'ValidHigh', 'Completed']
    }
  }
} as Definitions;
