// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {
    call: {
      description: 'Executes a call to a contract',
      params: [
        {
          name: 'callRequest',
          type: 'ContractCallRequest'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'ContractExecResult'
    },
    getStorage: {
      description: 'Returns the value under a specified storage key in a contract',
      params: [
        {
          name: 'address',
          type: 'AccountId'
        },
        {
          name: 'key',
          type: 'H256'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Option<Bytes>'
    },
    rentProjection: {
      description: 'Returns the projected time a given contract will be able to sustain paying its rent',
      params: [
        {
          name: 'address',
          type: 'AccountId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Option<BlockNumber>'
    }
  },
  types: {
    AliveContractInfo: {
      trieId: 'TrieId',
      storageSize: 'u32',
      emptyPairCount: 'u32',
      totalPairCount: 'u32',
      codeHash: 'CodeHash',
      rentAllowance: 'Balance',
      deductBlock: 'BlockNumber',
      lastWrite: 'Option<BlockNumber>'
    },
    CodeHash: 'Hash',
    ContractCallRequest: {
      origin: 'AccountId',
      dest: 'AccountId',
      value: 'Balance',
      gasLimit: 'u64',
      inputData: 'Bytes'
    },
    ContractExecResultSuccessTo255: {
      status: 'u8',
      data: 'Raw'
    },
    ContractExecResultTo255: {
      _enum: {
        Success: 'ContractExecResultSuccessTo255',
        Error: 'Null'
      }
    },
    ContractExecResultSuccessTo260: {
      flags: 'u32',
      data: 'Bytes',
      gasConsumed: 'u64'
    },
    ContractExecResultTo260: {
      _enum: {
        Success: 'ContractExecResultSuccessTo260',
        Error: 'Null'
      }
    },
    ContractExecResultErrModule: {
      index: 'u8',
      error: 'u8',
      message: 'Option<Text>'
    },
    ContractExecResultErr: {
      _enum: {
        Other: 'Text',
        CannotLookup: 'Null',
        BadOrigin: 'Null',
        Module: 'ContractExecResultErrModule'
      }
    },
    ContractExecResultOk: {
      flags: 'u32',
      data: 'Bytes'
    },
    ContractExecResultResult: {
      _enum: {
        Ok: 'ContractExecResultOk',
        Err: 'ContractExecResultErr'
      }
    },
    ContractExecResult: {
      gasConsumed: 'u64',
      debugMessage: 'Text',
      result: 'ContractExecResultResult'
    },
    ContractInfo: {
      _enum: {
        Alive: 'AliveContractInfo',
        Tombstone: 'TombstoneContractInfo'
      }
    },
    ContractStorageKey: '[u8; 32]',
    Gas: 'u64',
    HostFnWeights: {
      caller: 'Weight',
      address: 'Weight',
      gasLeft: 'Weight',
      balance: 'Weight',
      valueTransferred: 'Weight',
      minimumBalance: 'Weight',
      tombstoneDeposit: 'Weight',
      rentAllowance: 'Weight',
      blockNumber: 'Weight',
      now: 'Weight',
      weightToFee: 'Weight',
      gas: 'Weight',
      input: 'Weight',
      inputPerByte: 'Weight',
      return: 'Weight',
      returnPerByte: 'Weight',
      terminate: 'Weight',
      restoreTo: 'Weight',
      restoreToPerDelta: 'Weight',
      random: 'Weight',
      depositEvent: 'Weight',
      depositEventPerTopic: 'Weight',
      depositEventPerByte: 'Weight',
      setRentAllowance: 'Weight',
      setStorage: 'Weight',
      setStoragePerByte: 'Weight',
      clearStorage: 'Weight',
      getStorage: 'Weight',
      getStoragePerByte: 'Weight',
      transfer: 'Weight',
      call: 'Weight',
      callTransferSurcharge: 'Weight',
      callPerInputByte: 'Weight',
      callPerOutputByte: 'Weight',
      instantiate: 'Weight',
      instantiatePerInputByte: 'Weight',
      instantiatePerOutputByte: 'Weight',
      hashSha2256: 'Weight',
      hashSha2256PerByte: 'Weight',
      hashKeccak256: 'Weight',
      hashKeccak256PerByte: 'Weight',
      hashBlake2256: 'Weight',
      hashBlake2256PerByte: 'Weight',
      hashBlake2128: 'Weight',
      hashBlake2128PerByte: 'Weight'
    },
    InstructionWeights: {
      growMem: 'Weight',
      regular: 'Weight'
    },
    PrefabWasmModule: {
      scheduleVersion: 'Compact<u32>',
      initial: 'Compact<u32>',
      maximum: 'Compact<u32>',
      _reserved: 'PrefabWasmModuleReserved',
      code: 'Bytes'
    },
    PrefabWasmModuleReserved: 'Option<Null>',
    ScheduleTo212: {
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
      enablePrintln: 'bool',
      maxSubjectLen: 'u32'
    },
    ScheduleTo258: {
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
      transferCost: 'Gas',
      maxEventTopics: 'u32',
      maxStackHeight: 'u32',
      maxMemoryPages: 'u32',
      enablePrintln: 'bool',
      maxSubjectLen: 'u32'
    },
    Schedule: {
      version: 'u32',
      instructionWeights: 'InstructionWeights',
      hostFnWeights: 'HostFnWeights',
      enablePrintln: 'bool',
      maxEventTopics: 'u32',
      maxStackHeight: 'u32',
      maxMemoryPages: 'u32',
      maxTableSize: 'u32',
      maxSubjectLen: 'u32',
      maxCodeSize: 'u32'
    },
    SeedOf: 'Hash',
    TombstoneContractInfo: 'Hash',
    TrieId: 'Bytes'
  }
} as Definitions;
