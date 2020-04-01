// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    AccountData: {
      free: 'Balance',
      reserved: 'Balance',
      miscFrozen: 'Balance',
      feeFrozen: 'Balance'
    },
    BalanceLockTo212: {
      id: 'LockIdentifier',
      amount: 'Balance',
      until: 'BlockNumber',
      reasons: 'WithdrawReasons'
    },
    BalanceLock: {
      id: 'LockIdentifier',
      amount: 'Balance',
      reasons: 'Reasons'
    },
    ReleasesBalances: {
      _enum: ['V1_0_0', 'V2_0_0']
    },
    Reasons: {
      _enum: ['Fee', 'Misc', 'All']
    },
    VestingSchedule: {
      offset: 'Balance',
      perBlock: 'Balance',
      startingBlock: 'BlockNumber'
    },
    WithdrawReasons: {
      _set: {
        TransactionPayment: 0b0000_0001,
        Transfer: 0b0000_0010,
        Reserve: 0b0000_0100,
        Fee: 0b0000_1000,
        Tip: 0b0001_0000
      }
    }
  }
} as Definitions;
