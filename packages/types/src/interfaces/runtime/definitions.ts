// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    AccountId: 'GenericAccountId',
    AccountIdOf: 'AccountId',
    AccountIndex: 'GenericAccountIndex',
    Address: 'GenericAddress',
    AssetId: 'u32',
    Balance: 'u128',
    BalanceOf: 'Balance',
    BlockNumber: 'u64',
    Hash: 'H256',
    Index: 'u64',
    KeyTypeId: 'u32',
    LockIdentifier: '[u8; 8]',
    Moment: 'u64',
    Perbill: 'u32',
    Permill: 'u32',
    Phantom: 'Null',
    PhantomData: 'Null',
    ValidatorId: 'AccountId',
    Weight: 'u32',
    WeightMultiplier: 'Fixed64',

    // storage helpers
    KeyValue: '(StorageKey, StorageData)',

    // signatures (used in block & extrinsics)
    Signature: 'H512',
    Ed25519Signature: 'Signature',
    Sr25519Signature: 'Signature',

    // extrinsic definition
    Call: 'GenericCall',
    Origin: 'GenericOrigin',
    ImmortalEra: 'GenericImmortalEra',
    MortalEra: 'GenericMortalEra',
    ExtrinsicEra: 'GenericExtrinsicEra',
    ExtrinsicPayload: 'GenericExtrinsicPayload',
    Extrinsic: 'GenericExtrinsic',

    // block definition
    // :: digest
    ConsensusEngineId: 'GenericConsensusEngineId',
    PreRuntime: '(ConsensusEngineId, Bytes)',
    SealV0: '(u64, Signature)',
    Seal: '(ConsensusEngineId, Bytes)',
    Consensus: '(ConsensusEngineId, Bytes)',
    DigestItem: 'GenericDigestItem',
    Digest: 'GenericDigest',
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
    }
  }
};
