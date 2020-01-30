// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '@polkadot/types/types';
import { Compact, Enum, Option, Raw, Struct } from '@polkadot/types/codec';
import { Bytes, Null, bool, u32, u64, u8 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

/**
 * @name AliveContractInfo
 * @description extends [[Struct]]
 */
export interface AliveContractInfo extends Struct {
  readonly trieId: TrieId;
  readonly storageSize: u32;
  readonly codeHash: CodeHash;
  readonly rentAllowance: Balance;
  readonly deductBlock: BlockNumber;
  readonly lastWrite: Option<BlockNumber>;
}

/**
 * @name CodeHash
 * @description extends [[Hash]]
 */
export interface CodeHash extends Hash {}

/**
 * @name ContractCallRequest
 * @description extends [[Struct]]
 */
export interface ContractCallRequest extends Struct {
  readonly origin: AccountId;
  readonly dest: AccountId;
  readonly value: Balance;
  readonly gasLimit: u64;
  readonly inputData: Bytes;
}

/**
 * @name ContractExecResult
 * @description extends [[Enum]]
 */
export interface ContractExecResult extends Enum {
  readonly isSuccess: boolean;
  readonly asSuccess: ContractExecResultSuccess;
  readonly isError: boolean;
}

/**
 * @name ContractExecResultSuccess
 * @description extends [[Struct]]
 */
export interface ContractExecResultSuccess extends Struct {
  readonly status: u8;
  readonly data: Raw;
}

/**
 * @name ContractInfo
 * @description extends [[Enum]]
 */
export interface ContractInfo extends Enum {
  readonly isAlive: boolean;
  readonly asAlive: AliveContractInfo;
  readonly isTombstone: boolean;
  readonly asTombstone: TombstoneContractInfo;
}

/**
 * @name ContractStorageKey
 * @description extends [[Uint8Array, Codec]]
 */
export interface ContractStorageKey extends Uint8Array, Codec {}

/**
 * @name Gas
 * @description extends [[u64]]
 */
export interface Gas extends u64 {}

/**
 * @name PrefabWasmModule
 * @description extends [[Struct]]
 */
export interface PrefabWasmModule extends Struct {
  readonly scheduleVersion: Compact<u32>;
  readonly initial: Compact<u32>;
  readonly maximum: Compact<u32>;
  readonly _reserved: PrefabWasmModuleReserved;
  readonly code: Bytes;
}

/**
 * @name PrefabWasmModuleReserved
 * @description extends [[Option<Null>]]
 */
export interface PrefabWasmModuleReserved extends Option<Null> {}

/**
 * @name Schedule
 * @description extends [[Struct]]
 */
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
  readonly maxEventTopics: u32;
  readonly maxStackHeight: u32;
  readonly maxMemoryPages: u32;
  readonly enablePrintln: bool;
  readonly maxSubjectLen: u32;
}

/**
 * @name SeedOf
 * @description extends [[Hash]]
 */
export interface SeedOf extends Hash {}

/**
 * @name TombstoneContractInfo
 * @description extends [[Hash]]
 */
export interface TombstoneContractInfo extends Hash {}

/**
 * @name TrieId
 * @description extends [[Bytes]]
 */
export interface TrieId extends Bytes {}
