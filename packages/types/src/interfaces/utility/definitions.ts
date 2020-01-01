// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    Timepoint: {
      height: 'BlockNumber',
      index: 'u32'
    },
    Multisig: {
      when: 'Timepoint<BlockNumber>',
      deposit: 'Balance',
      depositor: 'AccountId',
      approvals: 'Vec<AccountId>'
    }
  }
};
