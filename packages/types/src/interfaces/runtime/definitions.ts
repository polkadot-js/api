// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

const numberTypes = {
  Fixed64: 'Int<64, Fixed64>',
  FixedI64: 'Int<64, FixedI64>',
  FixedU64: 'UInt<64, FixedU64>',
  Fixed128: 'Int<128, Fixed128>',
  FixedI128: 'Int<128, FixedI128>',
  FixedU128: 'UInt<128, FixedU128>',
  I32F32: 'Int<64, I32F32>',
  U32F32: 'UInt<64, U32F32>',
  PerU16: 'UInt<16, PerU16>',
  Perbill: 'UInt<32, Perbill>',
  Percent: 'UInt<8, Percent>',
  Permill: 'UInt<32, Permill>',
  Perquintill: 'UInt<64, Perquintill>'
};

export default {
  rpc: {},
  types: {
    ...numberTypes,
    AccountId: 'GenericAccountId',
    AccountIdOf: 'AccountId',
    AccountIndex: 'GenericAccountIndex',
    Address: 'MultiAddress',
    AssetId: 'u32',
    Balance: 'UInt<128, Balance>',
    BalanceOf: 'Balance',
    Block: 'GenericBlock',
    BlockNumber: 'u32',
    Call: 'GenericCall',
    CallHash: 'Hash',
    CallHashOf: 'CallHash',
    ChangesTrieConfiguration: {
      digestInterval: 'u32',
      digestLevels: 'u32'
    },
    ConsensusEngineId: 'GenericConsensusEngineId',
    CodecHash: 'Hash',
    Digest: {
      logs: 'Vec<DigestItem>'
    },
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
    ExtrinsicsWeight: {
      normal: 'Weight',
      operational: 'Weight'
    },
    H64: '[u8; 8; H64]',
    H128: '[u8; 16; H64]',
    H160: '[u8; 20; H160]',
    H256: '[u8; 32; H256]',
    H512: '[u8; 64; H512]',
    H1024: '[u8; 128; H1024]',
    H2048: '[u8; 256; H2048]',
    Hash: 'H256',
    Header: {
      parentHash: 'Hash',
      number: 'Compact<BlockNumber>',
      stateRoot: 'Hash',
      extrinsicsRoot: 'Hash',
      digest: 'Digest'
    },
    IndicesLookupSource: 'GenericLookupSource',
    Index: 'u32',
    Justification: 'Bytes',
    KeyValue: '(StorageKey, StorageData)',
    KeyTypeId: 'u32',
    LockIdentifier: '[u8; 8]',
    LookupSource: 'MultiAddress',
    LookupTarget: 'AccountId',
    ModuleId: 'LockIdentifier',
    MultiAddress: 'GenericMultiAddress',
    MultiSigner: {
      _enum: {
        Ed25519: '[u8; 32]',
        Sr25519: '[u8; 32]',
        Ecdsa: '[u8; 33]'
      }
    },
    Moment: 'UInt<64, Moment>',
    OpaqueCall: 'Bytes',
    Origin: 'DoNotConstruct<Origin>',
    OriginCaller: {
      _enum: {
        // this should be dynamically built from the actual modules, based on index
        System: 'SystemOrigin'
      }
    },
    PalletsOrigin: 'OriginCaller',
    PalletVersion: {
      major: 'u16',
      minor: 'u8',
      patch: 'u8'
    },
    Pays: {
      _enum: ['Yes', 'No']
    },
    Phantom: 'Null',
    PhantomData: 'Null',
    Releases: {
      _enum: ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10']
    },
    RuntimeDbWeight: {
      read: 'Weight',
      write: 'Weight'
    },
    SignedBlock: {
      block: 'Block',
      justification: 'Justification'
    },
    Slot: 'u64',
    StorageData: 'Bytes',
    StorageProof: {
      trieNodes: 'Vec<Bytes>'
    },
    TransactionPriority: 'u64',
    ValidatorId: 'AccountId',
    ValidatorIdOf: 'ValidatorId',
    Weight: 'u64',
    WeightMultiplier: 'Fixed64',

    // digest
    PreRuntime: '(ConsensusEngineId, Bytes)',
    SealV0: '(u64, Signature)',
    Seal: '(ConsensusEngineId, Bytes)',
    Consensus: '(ConsensusEngineId, Bytes)'
  }
} as Definitions;
