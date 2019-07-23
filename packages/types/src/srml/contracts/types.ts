/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Enum, Option, Struct, Vector } from '../../codec';
import { Balance, Bool, Bytes, Hash, Null, u32, u64, u8 } from '../../primitive';
import { BlockNumber } from '../../type';

export interface AliveContractInfo extends Struct {
  readonly trieId: TrieId;
  readonly storageSize: u32;
  readonly codeHash: CodeHash;
  readonly rentAllowance: Balance;
  readonly deductBlock: BlockNumber;
  readonly lastWrite: Option<BlockNumber>;
}

export interface CodeHash extends Hash {}

export interface ContractInfo extends Enum {
  /**
   * @description 0:: Alive(AliveContractInfo)
   */
  readonly isAlive: boolean;
  readonly asAlive: AliveContractInfo;
  /**
   * @description 1:: Tombstone(TombstoneContractInfo)
   */
  readonly isTombstone: boolean;
  readonly asTombstone: TombstoneContractInfo;
}

export interface ContractStorageKey extends Vector<u8> {}

export interface Gas extends u64 {}

export interface PrefabWasmModule extends Struct {
  readonly scheduleVersion: Compact<u32>;
  readonly initial: Compact<u32>;
  readonly maximum: Compact<u32>;
  readonly _reserved: PrefabWasmModuleReserved;
  readonly code: Bytes;
}

export interface PrefabWasmModuleReserved extends Option<Null> {}

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
  readonly enablePrintln: Bool;
  readonly maxSubjectLen: u32;
}

export interface TombstoneContractInfo extends Hash {}

export interface TrieId extends Bytes {}
