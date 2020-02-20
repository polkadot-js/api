// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// Extrinsic definitions, extracted for readability
const extrinsic = {
  Extrinsic: 'GenericExtrinsic',
  ExtrinsicEra: 'GenericExtrinsicEra',
  ExtrinsicPayload: 'GenericExtrinsicPayload',
  ExtrinsicV1: 'GenericExtrinsicV1',
  ExtrinsicPayloadV1: 'GenericExtrinsicPayloadV1',
  ExtrinsicSignatureV1: 'GenericExtrinsicSignatureV1',
  ExtrinsicV2: 'GenericExtrinsicV2',
  ExtrinsicPayloadV2: 'GenericExtrinsicPayloadV2',
  ExtrinsicSignatureV2: 'GenericExtrinsicSignatureV2',
  ExtrinsicV3: 'GenericExtrinsicV3',
  ExtrinsicPayloadV3: 'GenericExtrinsicPayloadV3',
  ExtrinsicSignatureV3: 'GenericExtrinsicSignatureV3',
  ExtrinsicV4: 'GenericExtrinsicV4',
  ExtrinsicPayloadV4: 'GenericExtrinsicPayloadV4',
  ExtrinsicSignatureV4: 'GenericExtrinsicSignatureV4',
  ExtrinsicUnknown: 'GenericExtrinsicUnknown',
  ExtrinsicPayloadUnknown: 'GenericExtrinsicPayloadUnknown'
};

export default {
  types: {
    ...extrinsic,
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
    DigestItem: {
      _enum: {
        Other: 'Bytes', // 0
        AuthoritiesChange: 'Vec<AuthorityId>', // 1
        ChangesTrieRoot: 'Hash', // 2
        SealV0: 'SealV0', // 3
        Consensus: 'Consensus', // 4
        Seal: 'Seal', // 5
        PreRuntime: 'PreRuntime' // 6
      }
    },
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
    Fixed64: 'Int<64, Fixed64>',
    H160: '[u8; 20; H160]',
    H256: '[u8; 32; H256]',
    H512: '[u8; 64; H512]',
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
    LookupSource: 'Address',
    LookupTarget: 'AccountId',
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
