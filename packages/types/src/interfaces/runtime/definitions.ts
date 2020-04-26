// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
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
    DispatchClass: {
      _enum: ['Normal', 'Operational', 'Mandatory']
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
    Fixed128: 'Int<128, Fixed128>',
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
    ModuleId: 'LockIdentifier',
    Moment: 'u64',
    Origin: 'DoNotConstruct<Origin>',
    Perbill: 'u32',
    Percent: 'u8',
    Permill: 'u32',
    Perquintill: 'u64',
    Phantom: 'Null',
    PhantomData: 'Null',
    RuntimeDbWeight: {
      read: 'Weight',
      write: 'Weight'
    },
    SignedBlock: {
      block: 'Block',
      justification: 'Justification'
    },
    StorageData: 'Bytes',
    ValidatorId: 'AccountId',
    Weight: 'u64',
    WeightMultiplier: 'Fixed64',

    // digest
    PreRuntime: '(ConsensusEngineId, Bytes)',
    SealV0: '(u64, Signature)',
    Seal: '(ConsensusEngineId, Bytes)',
    Consensus: '(ConsensusEngineId, Bytes)'
  }
} as Definitions;
