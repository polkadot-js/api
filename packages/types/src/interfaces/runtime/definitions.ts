// Copyright 2017-2020 @polkadot/types authors & contributors
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
    Block: 'GenericBlock',
    BlockNumber: 'u32',
    Call: 'GenericCall',
    ChangesTrieConfiguration: {
      digestInterval: 'u32',
      digestLevels: 'u32'
    },
    ConsensusEngineId: 'GenericConsensusEngineId',
    Digest: 'GenericDigest',
    DigestItem: 'GenericDigestItem',
    DispatchClass: {
      _enum: ['Normal', 'Operational']
    },
    DispatchInfo: {
      weight: 'Weight',
      class: 'DispatchClass',
      paysFee: 'bool'
    },
    DispatchInfoTo190: {
      weight: 'Weight',
      class: 'DispatchClass'
    },
    Extrinsic: 'GenericExtrinsic',
    ExtrinsicEra: 'GenericExtrinsicEra',
    ExtrinsicPayload: 'GenericExtrinsicPayload',
    ExtrinsicPayloadUnknown: 'GenericExtrinsicPayloadUnknown',
    ExtrinsicPayloadV1: 'GenericExtrinsicPayloadV1',
    ExtrinsicPayloadV2: 'GenericExtrinsicPayloadV2',
    ExtrinsicPayloadV3: 'GenericExtrinsicPayloadV3',
    ExtrinsicPayloadV4: 'GenericExtrinsicPayloadV4',
    ExtrinsicUnknown: 'GenericExtrinsicUnknown',
    ExtrinsicV1: 'GenericExtrinsicV1',
    ExtrinsicV2: 'GenericExtrinsicV2',
    ExtrinsicV3: 'GenericExtrinsicV3',
    ExtrinsicV4: 'GenericExtrinsicV4',
    Hash: 'H256',
    Header: {
      parentHash: 'Hash',
      number: 'Compact<BlockNumber>',
      stateRoot: 'Hash',
      extrinsicsRoot: 'Hash',
      digest: 'Digest'
    },
    Index: 'u32',
    Justification: 'Bytes',
    KeyValue: '(StorageKey, StorageData)',
    KeyTypeId: 'u32',
    LockIdentifier: '[u8; 8]',
    Moment: 'u64',
    Origin: 'GenericOrigin',
    Perbill: 'u32',
    Percent: 'u8',
    Permill: 'u32',
    Perquintill: 'u64',
    Phantom: 'Null',
    PhantomData: 'Null',
    Signature: 'H512',
    SignedBlock: {
      block: 'Block',
      justification: 'Justification'
    },
    SignerPayload: 'GenericSignerPayload',
    ValidatorId: 'AccountId',
    Weight: 'u32',
    WeightMultiplier: 'Fixed64',

    // signatures (used in block & extrinsics)
    Ed25519Signature: 'Signature',
    Sr25519Signature: 'Signature',
    EcdsaSignature: '[u8; 65]',
    MultiSignature: {
      _enum: {
        Ed25519: 'Ed25519Signature',
        Sr25519: 'Sr25519Signature',
        Ecdsa: 'EcdsaSignature'
      }
    },

    // extrinsic definition
    ImmortalEra: 'GenericImmortalEra',
    MortalEra: 'GenericMortalEra',

    // digest
    PreRuntime: '(ConsensusEngineId, Bytes)',
    SealV0: '(u64, Signature)',
    Seal: '(ConsensusEngineId, Bytes)',
    Consensus: '(ConsensusEngineId, Bytes)'
  }
};
