// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    // Metadata v0
    NewAccountOutcome: {
      _enum: ['NoHint', 'GoodHint', 'BadHint']
    },

    // Metadata v1
    // :: fees
    Amount: 'Balance',
    AssetOf: 'u32',

    // Metadata v2
    // :: contracts
    ContractAccountInfo: {
      trieId: 'Bytes',
      currentMemStored: 'u64'
    },

    // Metadata v3
    // :: democracy
    LockPeriods: 'i8',

    // Metadata v4
    // :: consensus
    InherentOfflineReport: '()',
    SessionKey: 'AccountId',

    // Metadata v5
    // :: session
    OpaqueKey: 'Bytes'
  }
};
