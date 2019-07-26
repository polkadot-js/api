// Auto-generated via `yarn build:interfaces`, do not edit

import { Compact, Enum, Option, Struct, Vec } from '../../codec';
import { Bool, Bytes, Null, u32, u64, u8 } from '../../primitive';
import { Balance, BlockNumber, Hash } from '../runtime';

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
export type CodeHash = Hash;

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

/** Vec<u8> */
export type ContractStorageKey = Vec<u8>;

/** u64 */
export type Gas = u64;

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
export type PrefabWasmModuleReserved = Option<Null>;

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
  /** Bool */
  readonly enablePrintln: Bool;
  /** u32 */
  readonly maxSubjectLen: u32;
}

/** Hash */
export type SeedOf = Hash;

/** Hash */
export type TombstoneContractInfo = Hash;

/** Bytes */
export type TrieId = Bytes;

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    CodeHash: CodeHash;
    'Option<CodeHash>': Option<CodeHash>;
    'Vec<CodeHash>': Vec<CodeHash>;
    TrieId: TrieId;
    'Option<TrieId>': Option<TrieId>;
    'Vec<TrieId>': Vec<TrieId>;
    AliveContractInfo: AliveContractInfo;
    'Option<AliveContractInfo>': Option<AliveContractInfo>;
    'Vec<AliveContractInfo>': Vec<AliveContractInfo>;
    TombstoneContractInfo: TombstoneContractInfo;
    'Option<TombstoneContractInfo>': Option<TombstoneContractInfo>;
    'Vec<TombstoneContractInfo>': Vec<TombstoneContractInfo>;
    ContractInfo: ContractInfo;
    'Option<ContractInfo>': Option<ContractInfo>;
    'Vec<ContractInfo>': Vec<ContractInfo>;
    ContractStorageKey: ContractStorageKey;
    'Option<ContractStorageKey>': Option<ContractStorageKey>;
    'Vec<ContractStorageKey>': Vec<ContractStorageKey>;
    Gas: Gas;
    'Compact<Gas>': Compact<Gas>;
    'Option<Gas>': Option<Gas>;
    'Vec<Gas>': Vec<Gas>;
    PrefabWasmModuleReserved: PrefabWasmModuleReserved;
    'Option<PrefabWasmModuleReserved>': Option<PrefabWasmModuleReserved>;
    'Vec<PrefabWasmModuleReserved>': Vec<PrefabWasmModuleReserved>;
    PrefabWasmModule: PrefabWasmModule;
    'Option<PrefabWasmModule>': Option<PrefabWasmModule>;
    'Vec<PrefabWasmModule>': Vec<PrefabWasmModule>;
    Schedule: Schedule;
    'Option<Schedule>': Option<Schedule>;
    'Vec<Schedule>': Vec<Schedule>;
    SeedOf: SeedOf;
    'Option<SeedOf>': Option<SeedOf>;
    'Vec<SeedOf>': Vec<SeedOf>;
  }
}
