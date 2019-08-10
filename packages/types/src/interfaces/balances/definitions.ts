// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    VestingSchedule: {
      offset: 'Balance',
      perBlock: 'Balance',
      startingBlock: 'BlockNumber'
    },
    WithdrawReasons: {
      _set: {
        TransactionPayment: 0b00000001,
        Transfer: 0b00000010,
        Reserve: 0b00000100,
        Fee: 0b00001000
      }
    },
    BalanceLock: {
      id: 'LockIdentifier',
      amount: 'Balance',
      until: 'BlockNumber',
      reasons: 'WithdrawReasons'
    }
  }
};
