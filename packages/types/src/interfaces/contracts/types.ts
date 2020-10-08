// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Compact, Enum, Option, Raw, Struct, U8aFixed } from '@polkadot/types/codec';
import { Bytes, Null, bool, u32, u64, u8 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber, Hash, Weight } from '@polkadot/types/interfaces/runtime';

/** @name AliveContractInfo */
export interface AliveContractInfo extends Struct {
  readonly trieId: TrieId;
  readonly storageSize: u32;
  readonly codeHash: CodeHash;
  readonly rentAllowance: Balance;
  readonly deductBlock: BlockNumber;
  readonly lastWrite: Option<BlockNumber>;
}

/** @name CodeHash */
export interface CodeHash extends Hash {}

/** @name ContractCallRequest */
export interface ContractCallRequest extends Struct {
  readonly origin: AccountId;
  readonly dest: AccountId;
  readonly value: Balance;
  readonly gasLimit: u64;
  readonly inputData: Bytes;
}

/** @name ContractExecResult */
export interface ContractExecResult extends Enum {
  readonly isSuccess: boolean;
  readonly asSuccess: ContractExecResultSuccess;
  readonly isError: boolean;
}

/** @name ContractExecResultSuccess */
export interface ContractExecResultSuccess extends Struct {
  readonly flags: u32;
  readonly data: Bytes;
  readonly gasConsumed: u64;
}

/** @name ContractExecResultSuccessTo255 */
export interface ContractExecResultSuccessTo255 extends Struct {
  readonly status: u8;
  readonly data: Raw;
}

/** @name ContractExecResultTo255 */
export interface ContractExecResultTo255 extends Enum {
  readonly isSuccess: boolean;
  readonly asSuccess: ContractExecResultSuccessTo255;
  readonly isError: boolean;
}

/** @name ContractInfo */
export interface ContractInfo extends Enum {
  readonly isAlive: boolean;
  readonly asAlive: AliveContractInfo;
  readonly isTombstone: boolean;
  readonly asTombstone: TombstoneContractInfo;
}

/** @name ContractStorageKey */
export interface ContractStorageKey extends U8aFixed {}

/** @name Gas */
export interface Gas extends u64 {}

/** @name PrefabWasmModule */
export interface PrefabWasmModule extends Struct {
  readonly scheduleVersion: Compact<u32>;
  readonly initial: Compact<u32>;
  readonly maximum: Compact<u32>;
  readonly _reserved: PrefabWasmModuleReserved;
  readonly code: Bytes;
}

/** @name PrefabWasmModuleReserved */
export interface PrefabWasmModuleReserved extends Option<Null> {}

/** @name Schedule */
export interface Schedule extends Struct {
  readonly version: u32;
  readonly opCostGrowMem: Weight;
  readonly opCostRegular: Weight;
  readonly apiCostCaller: Weight;
  readonly apiCostAddress: Weight;
  readonly apiCostGasLeft: Weight;
  readonly apiCostBalance: Weight;
  readonly apiCostValueTransferred: Weight;
  readonly apiCostMinimumBalance: Weight;
  readonly apiCostTombstoneDeposit: Weight;
  readonly apiCostRentAllowance: Weight;
  readonly apiCostBlockNumber: Weight;
  readonly apiCostNow: Weight;
  readonly apiCostWeightToFee: Weight;
  readonly apiCostGas: Weight;
  readonly apiCostInput: Weight;
  readonly apiCostInputPerByte: Weight;
  readonly apiCostReturn: Weight;
  readonly apiCostReturnPerByte: Weight;
  readonly apiCostTerminate: Weight;
  readonly apiCostRestoreTo: Weight;
  readonly apiCostRestoreToPer_delta: Weight;
  readonly apiCostRandom: Weight;
  readonly apiCostDepositEvent: Weight;
  readonly apiCostDepositEventPerTopic: Weight;
  readonly apiCostDepositEventPerByte: Weight;
  readonly apiCostSetRentAllowance: Weight;
  readonly apiCostSetStorage: Weight;
  readonly apiCostSetStoragePerByte: Weight;
  readonly apiCostClearStorage: Weight;
  readonly apiCostGetStorage: Weight;
  readonly apiCostGetStoragePerByte: Weight;
  readonly apiCostTransfer: Weight;
  readonly apiCostCall: Weight;
  readonly apiCostCallTransferSurcharge: Weight;
  readonly apiCostCallPerInputByte: Weight;
  readonly apiCostCallPerOutputByte: Weight;
  readonly apiCostInstantiate: Weight;
  readonly apiCostInstantiatePerInputByte: Weight;
  readonly apiCostInstantiatePerOutputByte: Weight;
  readonly apiCostHashSha2256: Weight;
  readonly apiCostHashSha2256PerByte: Weight;
  readonly apiCostHashKeccak256: Weight;
  readonly apiCostHashKeccak256PerByte: Weight;
  readonly apiCostHashBlake2256: Weight;
  readonly apiCostHashBlake2256PerByte: Weight;
  readonly apiCostHashBlake2128: Weight;
  readonly apiCostHashBlake2128PerByte: Weight;
  readonly enablePrintln: bool;
  readonly maxEventTopics: u32;
  readonly maxStackHeight: u32;
  readonly maxMemoryPages: u32;
  readonly maxTableSize: u32;
  readonly maxSubjectLen: u32;
  readonly maxCodeSize: u32;
}

/** @name ScheduleTo212 */
export interface ScheduleTo212 extends Struct {
  readonly version: u32;
  readonly putCodePerByteCost: Gas;
  readonly growMemCost: Gas;
  readonly regularOpCost: Gas;
  readonly returnDataPerByteCost: Gas;
  readonly eventDataPerByteCost: Gas;
  readonly eventPerTopicCost: Gas;
  readonly eventBaseCost: Gas;
  readonly sandboxDataReadCost: Gas;
  readonly sandboxDataWriteCost: Gas;
  readonly maxEventTopics: u32;
  readonly maxStackHeight: u32;
  readonly maxMemoryPages: u32;
  readonly enablePrintln: bool;
  readonly maxSubjectLen: u32;
}

/** @name ScheduleTo258 */
export interface ScheduleTo258 extends Struct {
  readonly version: u32;
  readonly putCodePerByteCost: Gas;
  readonly growMemCost: Gas;
  readonly regularOpCost: Gas;
  readonly returnDataPerByteCost: Gas;
  readonly eventDataPerByteCost: Gas;
  readonly eventPerTopicCost: Gas;
  readonly eventBaseCost: Gas;
  readonly sandboxDataReadCost: Gas;
  readonly sandboxDataWriteCost: Gas;
  readonly transferCost: Gas;
  readonly maxEventTopics: u32;
  readonly maxStackHeight: u32;
  readonly maxMemoryPages: u32;
  readonly enablePrintln: bool;
  readonly maxSubjectLen: u32;
}

/** @name SeedOf */
export interface SeedOf extends Hash {}

/** @name TombstoneContractInfo */
export interface TombstoneContractInfo extends Hash {}

/** @name TrieId */
export interface TrieId extends Bytes {}

export type PHANTOM_CONTRACTS = 'contracts';
