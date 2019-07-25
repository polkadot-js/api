// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    AccountIdOf: 'AccountId',
    Balance: 'u128',
    BalanceOf: 'Balance',
    BlockNumber: 'u64',
    Hash: 'H256',
    Justification: 'Bytes',
    KeyTypeId: 'u32',
    LockIdentifier: '[u8; 8]',
    Index: 'u64',
    Perbill: 'u32',
    Permill: 'u32',
    SessionKeys: {
      ed25519: 'AccountId'
    },
    Signature: 'H512',
    Ed25519Signature: 'Signature',
    Sr25519Signature: 'Signature',
    ValidatorId: 'AccountId',
    Weight: 'u32',
    WeightMultiplier: 'Fixed64'
  }
};
