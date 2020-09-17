// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    ActiveRecovery: {
      created: 'BlockNumber',
      deposit: 'Balance',
      friends: 'Vec<AccountId>'
    },
    RecoveryConfig: {
      delayPeriod: 'BlockNumber',
      deposit: 'Balance',
      friends: 'Vec<AccountId>',
      threshold: 'u16'
    }
  }
} as Definitions;
