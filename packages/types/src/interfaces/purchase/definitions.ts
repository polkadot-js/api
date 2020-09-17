// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
