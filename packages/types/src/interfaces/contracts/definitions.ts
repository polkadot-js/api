// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

import rpc from './rpc';

export default {
  rpc,
  types: {
    AliveContractInfo: {
      trieId: 'TrieId',
      storageSize: 'u32',
      pairCount: 'u32',
      codeHash: 'CodeHash',
      rentAllowance: 'Balance',
      rentPaid: 'Balance',
      deductBlock: 'BlockNumber',
      lastWrite: 'Option<BlockNumber>',
      _reserved: 'Option<Null>'
    },
    CodeHash: 'Hash',
    CodeSource: {
      _enum: {
        Upload: 'Bytes',
        Existing: 'Hash'
      }
    },
    ContractCallRequestTo267: {
      origin: 'AccountId',
      dest: 'AccountId',
      value: 'Balance',
      gasLimit: 'u64',
      inputData: 'Bytes'
    },
    ContractCallRequest: {
      _fallback: 'ContractCallRequestTo267',
      origin: 'AccountId',
      dest: 'AccountId',
      value: 'Balance',
      gasLimit: 'u64',
      storageDepositLimit: 'Option<Balance>',
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
      flags: 'ContractReturnFlags',
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
      flags: 'ContractReturnFlags',
      data: 'Bytes'
    },
    ContractExecResultResult: {
      _enum: {
        Ok: 'ContractExecResultOk',
        Err: 'ContractExecResultErr'
      }
    },
    ContractExecResultTo267: {
      gasConsumed: 'u64',
      debugMessage: 'Text',
      result: 'ContractExecResultResult'
    },
    ContractExecResult: {
      gasConsumed: 'u64',
      gasRequired: 'u64',
      storageDeposit: 'StorageDeposit',
      debugMessage: 'Text',
      result: 'ContractExecResultResult'
    },
    ContractInfo: {
      _enum: {
        Alive: 'AliveContractInfo',
        Tombstone: 'TombstoneContractInfo'
      }
    },
    ContractInstantiateRequest: {
      origin: 'AccountId',
      value: 'Balance',
      gasLimit: 'Gas',
      storageDepositLimit: 'Option<Balance>',
      code: 'CodeSource',
      data: 'Bytes',
      salt: 'Bytes'
    },
    ContractInstantiateResultResult: {
      _enum: {
        Ok: 'ContractInstantiateResultOk',
        Err: 'ContractExecResultErr'
      }
    },
    ContractInstantiateResult: {
      gasConsumed: 'u64',
      gasRequired: 'u64',
      storageDeposit: 'StorageDeposit',
      debugMessage: 'Text',
      result: 'ContractInstantiateResultResult'
    },
    ContractInstantiateResultOkTo267: {
      result: 'ExecReturnValue',
      accountId: 'AccountId',
      rentProjection: 'Option<RentProjection>'
    },
    ContractInstantiateResultOk: {
      _fallback: 'ContractInstantiateResultOkTo267',
      result: 'ExecReturnValue',
      accountId: 'AccountId'
    },
    ContractCallFlags: {
      _set: {
        _bitLength: 32,
        ForwardInput: 0b0000_0001,
        CloneInput: 0b0000_0010,
        TailCall: 0b0000_0100,
        AllowReentry: 0b0000_1000
      }
    },
    ContractReturnFlags: {
      _set: {
        _bitLength: 32,
        Revert: 0x0000_0001
      }
    },
    ContractStorageKey: '[u8; 32]',
    DeletedContract: {
      pairCount: 'u32',
      trieId: 'TrieId'
    },
    ExecReturnValue: {
      flags: 'ContractReturnFlags',
      data: 'Bytes'
    },
    Gas: 'u64',
    HostFnWeightsTo264: {
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
      terminatePerCodeByte: 'Weight',
      restoreTo: 'Weight',
      restoreToPerCallerCodeByte: 'Weight',
      restoreToPerTombstoneCodeByte: 'Weight',
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
      callPerCodeByte: 'Weight',
      callTransferSurcharge: 'Weight',
      callPerInputByte: 'Weight',
      callPerOutputByte: 'Weight',
      instantiate: 'Weight',
      instantiatePerCodeByte: 'Weight',
      instantiatePerInputByte: 'Weight',
      instantiatePerOutputByte: 'Weight',
      instantiatePerSaltByte: 'Weight',
      hashSha2256: 'Weight',
      hashSha2256PerByte: 'Weight',
      hashKeccak256: 'Weight',
      hashKeccak256PerByte: 'Weight',
      hashBlake2256: 'Weight',
      hashBlake2256PerByte: 'Weight',
      hashBlake2128: 'Weight',
      hashBlake2128PerByte: 'Weight',
      rentParams: 'Weight'
    },
    InstructionWeights: {
      i64const: 'u32',
      i64load: 'u32',
      i64store: 'u32',
      select: 'u32',
      rIf: 'u32',
      br: 'u32',
      brIf: 'u32',
      brIable: 'u32',
      brIablePerEntry: 'u32',
      call: 'u32',
      callIndirect: 'u32',
      callIndirectPerParam: 'u32',
      localGet: 'u32',
      localSet: 'u32',
      local_tee: 'u32',
      globalGet: 'u32',
      globalSet: 'u32',
      memoryCurrent: 'u32',
      memoryGrow: 'u32',
      i64clz: 'u32',
      i64ctz: 'u32',
      i64popcnt: 'u32',
      i64eqz: 'u32',
      i64extendsi32: 'u32',
      i64extendui32: 'u32',
      i32wrapi64: 'u32',
      i64eq: 'u32',
      i64ne: 'u32',
      i64lts: 'u32',
      i64ltu: 'u32',
      i64gts: 'u32',
      i64gtu: 'u32',
      i64les: 'u32',
      i64leu: 'u32',
      i64ges: 'u32',
      i64geu: 'u32',
      i64add: 'u32',
      i64sub: 'u32',
      i64mul: 'u32',
      i64divs: 'u32',
      i64divu: 'u32',
      i64rems: 'u32',
      i64remu: 'u32',
      i64and: 'u32',
      i64or: 'u32',
      i64xor: 'u32',
      i64shl: 'u32',
      i64shrs: 'u32',
      i64shru: 'u32',
      i64rotl: 'u32',
      i64rotr: 'u32'
    },
    LimitsTo264: {
      eventTopics: 'u32',
      stackHeight: 'u32',
      globals: 'u32',
      parameters: 'u32',
      memoryPages: 'u32',
      tableSize: 'u32',
      brTableSize: 'u32',
      subjectLen: 'u32',
      codeSize: 'u32'
    },
    Limits: {
      eventTopics: 'u32',
      stackHeight: 'u32',
      globals: 'u32',
      parameters: 'u32',
      memoryPages: 'u32',
      tableSize: 'u32',
      brTableSize: 'u32',
      subjectLen: 'u32'
    },
    PrefabWasmModule: {
      scheduleVersion: 'Compact<u32>',
      initial: 'Compact<u32>',
      maximum: 'Compact<u32>',
      refcount: 'Compact<u64>',
      _reserved: 'Option<Null>',
      code: 'Bytes',
      originalCodeLen: 'u32'
    },
    RentProjection: {
      _enum: {
        EvictionAt: 'BlockNumber',
        NoEviction: 'Null'
      }
    },
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
    ScheduleTo264: {
      version: 'u32',
      enablePrintln: 'bool',
      limits: 'LimitsTo264',
      instructionWeights: 'InstructionWeights',
      hostFnWeights: 'HostFnWeightsTo264'
    },
    Schedule: {
      version: 'u32',
      enablePrintln: 'bool',
      limits: 'Limits',
      instructionWeights: 'InstructionWeights',
      hostFnWeights: 'HostFnWeights'
    },
    SeedOf: 'Hash',
    StorageDeposit: {
      _enum: {
        Refund: 'Balance',
        Charge: 'Balance'
      }
    },
    TombstoneContractInfo: 'Hash',
    TrieId: 'Bytes'
  }
} as Definitions;
