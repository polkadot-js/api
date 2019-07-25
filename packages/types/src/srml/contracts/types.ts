/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Enum, Option, Struct, Vector } from '../../codec';
import { Bool, Bytes, Null, u32, u64, u8 } from '../../primitive';
import { Balance, BlockNumber, Hash } from '../runtime/types';

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

export interface SeedOf extends Hash {}

export interface TombstoneContractInfo extends Hash {}

export interface TrieId extends Bytes {}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    CodeHash: CodeHash;
    'Option<CodeHash>': Option<CodeHash>;
    'Vec<CodeHash>': Vector<CodeHash>;
    TrieId: TrieId;
    'Option<TrieId>': Option<TrieId>;
    'Vec<TrieId>': Vector<TrieId>;
    AliveContractInfo: AliveContractInfo;
    'Option<AliveContractInfo>': Option<AliveContractInfo>;
    'Vec<AliveContractInfo>': Vector<AliveContractInfo>;
    TombstoneContractInfo: TombstoneContractInfo;
    'Option<TombstoneContractInfo>': Option<TombstoneContractInfo>;
    'Vec<TombstoneContractInfo>': Vector<TombstoneContractInfo>;
    ContractInfo: ContractInfo;
    'Option<ContractInfo>': Option<ContractInfo>;
    'Vec<ContractInfo>': Vector<ContractInfo>;
    ContractStorageKey: ContractStorageKey;
    'Option<ContractStorageKey>': Option<ContractStorageKey>;
    'Vec<ContractStorageKey>': Vector<ContractStorageKey>;
    Gas: Gas;
    'Compact<Gas>': Compact<Gas>;
    'Option<Gas>': Option<Gas>;
    'Vec<Gas>': Vector<Gas>;
    PrefabWasmModuleReserved: PrefabWasmModuleReserved;
    'Option<PrefabWasmModuleReserved>': Option<PrefabWasmModuleReserved>;
    'Vec<PrefabWasmModuleReserved>': Vector<PrefabWasmModuleReserved>;
    PrefabWasmModule: PrefabWasmModule;
    'Option<PrefabWasmModule>': Option<PrefabWasmModule>;
    'Vec<PrefabWasmModule>': Vector<PrefabWasmModule>;
    Schedule: Schedule;
    'Option<Schedule>': Option<Schedule>;
    'Vec<Schedule>': Vector<Schedule>;
    SeedOf: SeedOf;
    'Option<SeedOf>': Option<SeedOf>;
    'Vec<SeedOf>': Vector<SeedOf>;
  }
}
