// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Compact, Enum, Option, Raw, Struct, U8aFixed } from '@polkadot/types/codec';
import { Bytes, Null, bool, u32, u64, u8 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

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
  readonly status: u8;
  readonly data: Raw;
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

/** @name SeedOf */
export interface SeedOf extends Hash {}

/** @name TombstoneContractInfo */
export interface TombstoneContractInfo extends Hash {}

/** @name TrieId */
export interface TrieId extends Bytes {}

export type PHANTOM_CONTRACTS = 'contracts';
