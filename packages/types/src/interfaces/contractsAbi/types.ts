// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '@polkadot/types/types';
import { Compact, Enum, Option, Raw, Struct } from '@polkadot/types/codec';
import { Bytes, Null, bool, u32, u64, u8 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

/** Struct */
export interface AliveContractInfo extends Struct {
  /** TrieId */
  readonly trieId: TrieId;
  /** u32 */
  readonly storageSize: u32;
  /** CodeHash */
  readonly codeHash: CodeHash;
  /** Balance */
  readonly rentAllowance: Balance;
  /** BlockNumber */
  readonly deductBlock: BlockNumber;
  /** Option<BlockNumber> */
  readonly lastWrite: Option<BlockNumber>;
}

/** Hash */
export interface CodeHash extends Hash {}

/** Struct */
export interface ContractCallRequest extends Struct {
  /** AccountId */
  readonly origin: AccountId;
  /** AccountId */
  readonly dest: AccountId;
  /** Balance */
  readonly value: Balance;
  /** u64 */
  readonly gasLimit: u64;
  /** Bytes */
  readonly inputData: Bytes;
}

/** Enum */
export interface ContractExecResult extends Enum {
  /** 0:: Success(ContractExecResultSuccess) */
  readonly isSuccess: boolean;
  /** ContractExecResultSuccess */
  readonly asSuccess: ContractExecResultSuccess;
  /** 1:: Error */
  readonly isError: boolean;
}

/** Struct */
export interface ContractExecResultSuccess extends Struct {
  /** u8 */
  readonly status: u8;
  /** Raw */
  readonly data: Raw;
}

/** Enum */
export interface ContractInfo extends Enum {
  /** 0:: Alive(AliveContractInfo) */
  readonly isAlive: boolean;
  /** AliveContractInfo */
  readonly asAlive: AliveContractInfo;
  /** 1:: Tombstone(TombstoneContractInfo) */
  readonly isTombstone: boolean;
  /** TombstoneContractInfo */
  readonly asTombstone: TombstoneContractInfo;
}

/** Uint8Array, Codec */
export interface ContractStorageKey extends Uint8Array, Codec {}

/** u64 */
export interface Gas extends u64 {}

/** Struct */
export interface PrefabWasmModule extends Struct {
  /** Compact<u32> */
  readonly scheduleVersion: Compact<u32>;
  /** Compact<u32> */
  readonly initial: Compact<u32>;
  /** Compact<u32> */
  readonly maximum: Compact<u32>;
  /** PrefabWasmModuleReserved */
  readonly _reserved: PrefabWasmModuleReserved;
  /** Bytes */
  readonly code: Bytes;
}

/** Option<Null> */
export interface PrefabWasmModuleReserved extends Option<Null> {}

/** Struct */
export interface Schedule extends Struct {
  /** u32 */
  readonly version: u32;
  /** Gas */
  readonly putCodePerByteCost: Gas;
  /** Gas */
  readonly growMemCost: Gas;
  /** Gas */
  readonly regularOpCost: Gas;
  /** Gas */
  readonly returnDataPerByteCost: Gas;
  /** Gas */
  readonly eventDataPerByteCost: Gas;
  /** Gas */
  readonly eventPerTopicCost: Gas;
  /** Gas */
  readonly eventBaseCost: Gas;
  /** Gas */
  readonly sandboxDataReadCost: Gas;
  /** Gas */
  readonly sandboxDataWriteCost: Gas;
  /** u32 */
  readonly maxEventTopics: u32;
  /** u32 */
  readonly maxStackHeight: u32;
  /** u32 */
  readonly maxMemoryPages: u32;
  /** bool */
  readonly enablePrintln: bool;
  /** u32 */
  readonly maxSubjectLen: u32;
}

/** Hash */
export interface SeedOf extends Hash {}

/** Hash */
export interface TombstoneContractInfo extends Hash {}

/** Bytes */
export interface TrieId extends Bytes {}
