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
    ContractExecResultSuccess: {
      flags: 'u32',
      data: 'Vec<u8>',
      gasConsumed: 'u64'
    },
    ContractExecResult: {
      _enum: {
        Success: 'ContractExecResultSuccess',
        Error: 'Null'
      }
    },
    ContractInfo: {
      _enum: {
        Alive: 'AliveContractInfo',
        Tombstone: 'TombstoneContractInfo'
      }
    },
    ContractStorageKey: '[u8; 32]',
    Gas: 'u64',
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
      opCostGrowMem: 'Weight',
      opCostRegular: 'Weight',
      apiCostCaller: 'Weight',
      apiCostAddress: 'Weight',
      apiCostGasLeft: 'Weight',
      apiCostBalance: 'Weight',
      apiCostValueTransferred: 'Weight',
      apiCostMinimumBalance: 'Weight',
      apiCostTombstoneDeposit: 'Weight',
      apiCostRentAllowance: 'Weight',
      apiCostBlockNumber: 'Weight',
      apiCostNow: 'Weight',
      apiCostWeightToFee: 'Weight',
      apiCostGas: 'Weight',
      apiCostInput: 'Weight',
      apiCostInputPerByte: 'Weight',
      apiCostReturn: 'Weight',
      apiCostReturnPerByte: 'Weight',
      apiCostTerminate: 'Weight',
      apiCostRestoreTo: 'Weight',
      apiCostRestoreToPer_delta: 'Weight',
      apiCostRandom: 'Weight',
      apiCostDepositEvent: 'Weight',
      apiCostDepositEventPerTopic: 'Weight',
      apiCostDepositEventPerByte: 'Weight',
      apiCostSetRentAllowance: 'Weight',
      apiCostSetStorage: 'Weight',
      apiCostSetStoragePerByte: 'Weight',
      apiCostClearStorage: 'Weight',
      apiCostGetStorage: 'Weight',
      apiCostGetStoragePerByte: 'Weight',
      apiCostTransfer: 'Weight',
      apiCostCall: 'Weight',
      apiCostCallTransferSurcharge: 'Weight',
      apiCostCallPerInputByte: 'Weight',
      apiCostCallPerOutputByte: 'Weight',
      apiCostInstantiate: 'Weight',
      apiCostInstantiatePerInputByte: 'Weight',
      apiCostInstantiatePerOutputByte: 'Weight',
      apiCostHashSha2256: 'Weight',
      apiCostHashSha2256PerByte: 'Weight',
      apiCostHashKeccak256: 'Weight',
      apiCostHashKeccak256PerByte: 'Weight',
      apiCostHashBlake2256: 'Weight',
      apiCostHashBlake2256PerByte: 'Weight',
      apiCostHashBlake2128: 'Weight',
      apiCostHashBlake2128PerByte: 'Weight',
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
