// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    Bid: {
      who: 'AccountId',
      kind: 'BidKind',
      value: 'Balance'
    },
    BidKindVouch: '(AccountId, Balance)',
    BidKind: {
      _enum: {
        Deposit: 'Balance',
        Vouch: 'BidKindVouch'
      }
    },
    StrikeCount: 'u32',
    VouchingStatus: {
      _enum: ['Vouching', 'Banned']
    }
  }
};
