// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    AccountId: 'GenericAccountId',
    AccountIdOf: 'AccountId',
    AccountIndex: 'GenericAccountIndex',
    Address: 'GenericAddress',
    Balance: 'u128',
    BalanceOf: 'Balance',
    BlockNumber: 'u64',

    // block
    // :: signature
    Signature: 'H512',
    Ed25519Signature: 'Signature',
    Sr25519Signature: 'Signature',
    // :: digest
    ConsensusEngineId: 'GenericConsensusEngineId',
    PreRuntime: '(ConsensusEngineId, Bytes)',
    SealV0: '(u64, Signature)',
    Seal: '(ConsensusEngineId, Bytes)',
    Consensus: '(ConsensusEngineId, Bytes)',
    DigestItem: 'GenericDigestItem',
    Digest: 'GenericDigest',
    Hash: 'H256',
    // :: parts
    Header: {
      parentHash: 'Hash',
      number: 'Compact<BlockNumber>',
      stateRoot: 'Hash',
      extrinsicsRoot: 'Hash',
      digest: 'Digest'
    },
    Justification: 'Bytes',
    // :: definitions
    Block: 'GenericBlock',
    SignedBlock: {
      block: 'Block',
      justification: 'Justification'
    },

    KeyTypeId: 'u32',
    LockIdentifier: '[u8; 8]',
    Index: 'u64',
    Perbill: 'u32',
    Permill: 'u32',
    Phantom: 'Null',
    SessionKeys: {
      ed25519: 'AccountId'
    },
    StorageData: 'Bytes',
    KeyValue: '(StorageKey, StorageData)',
    ValidatorId: 'AccountId',
    Weight: 'u32',
    WeightMultiplier: 'Fixed64',

    // extrinsics
    Method: 'GenericMethod',
    Origin: 'GenericOrigin',
    ImmortalEra: 'GenericImmortalEra',
    MortalEra: 'GenericMortalEra',
    ExtrinsicEra: 'GenericExtrinsicEra',
    ExtrinsicPayload: 'GenericExtrinsicPayload',
    Extrinsic: 'GenericExtrinsic'
  }
};
