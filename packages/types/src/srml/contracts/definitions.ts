// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    CodeHash: 'Hash',
    TrieId: 'Bytes',
    AliveContractInfo: {
      trieId: 'TrieId',
      storageSize: 'u32',
      codeHash: 'CodeHash',
      rentAllowance: 'Balance',
      deductBlock: 'BlockNumber',
      lastWrite: 'Option<BlockNumber>'
    },
    TombstoneContractInfo: 'Hash',
    ContractInfo: {
      _enum: {
        Alive: 'AliveContractInfo',
        Tombstone: 'TombstoneContractInfo'
      }
    },
    ContractStorageKey: '[u8; 32]',
    Gas: 'u64',
    PrefabWasmModuleReserved: 'Option<Null>',
    PrefabWasmModule: {
      scheduleVersion: 'Compact<u32>',
      initial: 'Compact<u32>',
      maximum: 'Compact<u32>',
      _reserved: 'PrefabWasmModuleReserved',
      code: 'Bytes'
    },
    Schedule: {
      version: 'u32',
      putCodePerByteCost: 'Gas',
      growMemCost: 'Gas',
      regularOpCost: 'Gas',
      returnDataPerByteCost: 'Gas',
      eventDataPerByteCost: 'Gas',
      eventPerTopicCost: 'Gas',
      eventBaseCost: 'Gas',
      sandboxDataReadCost: 'Gas',
      sandboxDataWriteCost: 'Gas',
      maxEventTopics: 'u32',
      maxStackHeight: 'u32',
      maxMemoryPages: 'u32',
      enablePrintln: 'Bool',
      maxSubjectLen: 'u32'
    }
  }
};
