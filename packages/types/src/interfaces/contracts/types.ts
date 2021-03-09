// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Enum, Null, Option, Raw, Struct, Text, U8aFixed, bool, u32, u64, u8 } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber, Hash, Weight } from '@polkadot/types/interfaces/runtime';

/** @name AliveContractInfo */
export interface AliveContractInfo extends Struct {
  readonly trieId: TrieId;
  readonly storageSize: u32;
  readonly emptyPairCount: u32;
  readonly totalPairCount: u32;
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
export interface ContractExecResult extends Struct {
  readonly gasConsumed: u64;
  readonly debugMessage: Text;
  readonly result: ContractExecResultResult;
}

/** @name ContractExecResultErr */
export interface ContractExecResultErr extends Enum {
  readonly isOther: boolean;
  readonly asOther: Text;
  readonly isCannotLookup: boolean;
  readonly isBadOrigin: boolean;
  readonly isModule: boolean;
  readonly asModule: ContractExecResultErrModule;
}

/** @name ContractExecResultErrModule */
export interface ContractExecResultErrModule extends Struct {
  readonly index: u8;
  readonly error: u8;
  readonly message: Option<Text>;
}

/** @name ContractExecResultOk */
export interface ContractExecResultOk extends Struct {
  readonly flags: u32;
  readonly data: Bytes;
}

/** @name ContractExecResultResult */
export interface ContractExecResultResult extends Enum {
  readonly isOk: boolean;
  readonly asOk: ContractExecResultOk;
  readonly isErr: boolean;
  readonly asErr: ContractExecResultErr;
}

/** @name ContractExecResultSuccessTo255 */
export interface ContractExecResultSuccessTo255 extends Struct {
  readonly status: u8;
  readonly data: Raw;
}

/** @name ContractExecResultSuccessTo260 */
export interface ContractExecResultSuccessTo260 extends Struct {
  readonly flags: u32;
  readonly data: Bytes;
  readonly gasConsumed: u64;
}

/** @name ContractExecResultTo255 */
export interface ContractExecResultTo255 extends Enum {
  readonly isSuccess: boolean;
  readonly asSuccess: ContractExecResultSuccessTo255;
  readonly isError: boolean;
}

/** @name ContractExecResultTo260 */
export interface ContractExecResultTo260 extends Enum {
  readonly isSuccess: boolean;
  readonly asSuccess: ContractExecResultSuccessTo260;
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

/** @name DeletedContract */
export interface DeletedContract extends Struct {
  readonly pairCount: u32;
  readonly trieId: TrieId;
}

/** @name Gas */
export interface Gas extends u64 {}

/** @name HostFnWeights */
export interface HostFnWeights extends Struct {
  readonly caller: Weight;
  readonly address: Weight;
  readonly gasLeft: Weight;
  readonly balance: Weight;
  readonly valueTransferred: Weight;
  readonly minimumBalance: Weight;
  readonly tombstoneDeposit: Weight;
  readonly rentAllowance: Weight;
  readonly blockNumber: Weight;
  readonly now: Weight;
  readonly weightToFee: Weight;
  readonly gas: Weight;
  readonly input: Weight;
  readonly inputPerByte: Weight;
  readonly return: Weight;
  readonly returnPerByte: Weight;
  readonly terminate: Weight;
  readonly terminatePerCodeByte: Weight;
  readonly restoreTo: Weight;
  readonly restoreToPerCallerCodeByte: Weight;
  readonly restoreToPerTombstoneCodeByte: Weight;
  readonly restoreToPerDelta: Weight;
  readonly random: Weight;
  readonly depositEvent: Weight;
  readonly depositEventPerTopic: Weight;
  readonly depositEventPerByte: Weight;
  readonly setRentAllowance: Weight;
  readonly setStorage: Weight;
  readonly setStoragePerByte: Weight;
  readonly clearStorage: Weight;
  readonly getStorage: Weight;
  readonly getStoragePerByte: Weight;
  readonly transfer: Weight;
  readonly call: Weight;
  readonly callPerCodeByte: Weight;
  readonly callTransferSurcharge: Weight;
  readonly callPerInputByte: Weight;
  readonly callPerOutputByte: Weight;
  readonly instantiate: Weight;
  readonly instantiatePerCodeByte: Weight;
  readonly instantiatePerInputByte: Weight;
  readonly instantiatePerOutputByte: Weight;
  readonly instantiatePerSaltByte: Weight;
  readonly hashSha2256: Weight;
  readonly hashSha2256PerByte: Weight;
  readonly hashKeccak256: Weight;
  readonly hashKeccak256PerByte: Weight;
  readonly hashBlake2256: Weight;
  readonly hashBlake2256PerByte: Weight;
  readonly hashBlake2128: Weight;
  readonly hashBlake2128PerByte: Weight;
}

/** @name HostFnWeightsTo264 */
export interface HostFnWeightsTo264 extends Struct {
  readonly caller: Weight;
  readonly address: Weight;
  readonly gasLeft: Weight;
  readonly balance: Weight;
  readonly valueTransferred: Weight;
  readonly minimumBalance: Weight;
  readonly tombstoneDeposit: Weight;
  readonly rentAllowance: Weight;
  readonly blockNumber: Weight;
  readonly now: Weight;
  readonly weightToFee: Weight;
  readonly gas: Weight;
  readonly input: Weight;
  readonly inputPerByte: Weight;
  readonly return: Weight;
  readonly returnPerByte: Weight;
  readonly terminate: Weight;
  readonly restoreTo: Weight;
  readonly restoreToPerDelta: Weight;
  readonly random: Weight;
  readonly depositEvent: Weight;
  readonly depositEventPerTopic: Weight;
  readonly depositEventPerByte: Weight;
  readonly setRentAllowance: Weight;
  readonly setStorage: Weight;
  readonly setStoragePerByte: Weight;
  readonly clearStorage: Weight;
  readonly getStorage: Weight;
  readonly getStoragePerByte: Weight;
  readonly transfer: Weight;
  readonly call: Weight;
  readonly callTransferSurcharge: Weight;
  readonly callPerInputByte: Weight;
  readonly callPerOutputByte: Weight;
  readonly instantiate: Weight;
  readonly instantiatePerInputByte: Weight;
  readonly instantiatePerOutputByte: Weight;
  readonly hashSha2256: Weight;
  readonly hashSha2256PerByte: Weight;
  readonly hashKeccak256: Weight;
  readonly hashKeccak256PerByte: Weight;
  readonly hashBlake2256: Weight;
  readonly hashBlake2256PerByte: Weight;
  readonly hashBlake2128: Weight;
  readonly hashBlake2128PerByte: Weight;
}

/** @name InstructionWeights */
export interface InstructionWeights extends Struct {
  readonly i64const: u32;
  readonly i64load: u32;
  readonly i64store: u32;
  readonly select: u32;
  readonly rIf: u32;
  readonly br: u32;
  readonly brIf: u32;
  readonly brIable: u32;
  readonly brIablePerEntry: u32;
  readonly call: u32;
  readonly callIndirect: u32;
  readonly callIndirectPerParam: u32;
  readonly localGet: u32;
  readonly localSet: u32;
  readonly local_tee: u32;
  readonly globalGet: u32;
  readonly globalSet: u32;
  readonly memoryCurrent: u32;
  readonly memoryGrow: u32;
  readonly i64clz: u32;
  readonly i64ctz: u32;
  readonly i64popcnt: u32;
  readonly i64eqz: u32;
  readonly i64extendsi32: u32;
  readonly i64extendui32: u32;
  readonly i32wrapi64: u32;
  readonly i64eq: u32;
  readonly i64ne: u32;
  readonly i64lts: u32;
  readonly i64ltu: u32;
  readonly i64gts: u32;
  readonly i64gtu: u32;
  readonly i64les: u32;
  readonly i64leu: u32;
  readonly i64ges: u32;
  readonly i64geu: u32;
  readonly i64add: u32;
  readonly i64sub: u32;
  readonly i64mul: u32;
  readonly i64divs: u32;
  readonly i64divu: u32;
  readonly i64rems: u32;
  readonly i64remu: u32;
  readonly i64and: u32;
  readonly i64or: u32;
  readonly i64xor: u32;
  readonly i64shl: u32;
  readonly i64shrs: u32;
  readonly i64shru: u32;
  readonly i64rotl: u32;
  readonly i64rotr: u32;
}

/** @name Limits */
export interface Limits extends Struct {
  readonly eventTopics: u32;
  readonly stackHeight: u32;
  readonly globals: u32;
  readonly parameters: u32;
  readonly memoryPages: u32;
  readonly tableSize: u32;
  readonly brTableSize: u32;
  readonly subjectLen: u32;
}

/** @name LimitsTo264 */
export interface LimitsTo264 extends Struct {
  readonly eventTopics: u32;
  readonly stackHeight: u32;
  readonly globals: u32;
  readonly parameters: u32;
  readonly memoryPages: u32;
  readonly tableSize: u32;
  readonly brTableSize: u32;
  readonly subjectLen: u32;
  readonly codeSize: u32;
}

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
  readonly enablePrintln: bool;
  readonly limits: Limits;
  readonly instructionWeights: InstructionWeights;
  readonly hostFnWeights: HostFnWeights;
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

/** @name ScheduleTo264 */
export interface ScheduleTo264 extends Struct {
  readonly version: u32;
  readonly enablePrintln: bool;
  readonly limits: LimitsTo264;
  readonly instructionWeights: InstructionWeights;
  readonly hostFnWeights: HostFnWeightsTo264;
}

/** @name SeedOf */
export interface SeedOf extends Hash {}

/** @name TombstoneContractInfo */
export interface TombstoneContractInfo extends Hash {}

/** @name TrieId */
export interface TrieId extends Bytes {}

export type PHANTOM_CONTRACTS = 'contracts';
