// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
    BalanceStatus: {
      _enum: ['Free', 'Reserved']
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
