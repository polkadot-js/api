// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Compact, Data, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { Era } from '@polkadot/types/interfaces/extrinsics';
import type { AccountId32, Call, H256, MultiAddress, PerU16, Perbill, Percent, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';

/** @name SpCoreCryptoAccountId32 */
export interface SpCoreCryptoAccountId32 extends AccountId32 {}

/** @name Lookup1 */
export interface Lookup1 extends U8aFixed {}

/** @name Lookup2 */
export interface Lookup2 extends u8 {}

/** @name FrameSystemAccountInfo */
export interface FrameSystemAccountInfo extends Struct {
  readonly nonce: u32;
  readonly consumers: u32;
  readonly providers: u32;
  readonly sufficients: u32;
  readonly data: {
    readonly free: u128;
    readonly reserved: u128;
    readonly miscFrozen: u128;
    readonly feeFrozen: u128;
  } & Struct;
}

/** @name Lookup4 */
export interface Lookup4 extends u32 {}

/** @name PalletBalancesAccountDataU128 */
export interface PalletBalancesAccountDataU128 extends Struct {
  readonly free: u128;
  readonly reserved: u128;
  readonly miscFrozen: u128;
  readonly feeFrozen: u128;
}

/** @name Lookup6 */
export interface Lookup6 extends u128 {}

/** @name FrameSupportWeightsPerDispatchClassU64 */
export interface FrameSupportWeightsPerDispatchClassU64 extends Struct {
  readonly normal: u64;
  readonly operational: u64;
  readonly mandatory: u64;
}

/** @name Lookup8 */
export interface Lookup8 extends u64 {}

/** @name PrimitiveTypesH256 */
export interface PrimitiveTypesH256 extends H256 {}

/** @name Lookup10 */
export interface Lookup10 extends Vec<u8> {}

/** @name SpRuntimeGenericDigest */
export interface SpRuntimeGenericDigest extends Struct {
  readonly logs: Vec<SpRuntimeGenericDigestDigestItem>;
}

/** @name Lookup12 */
export interface Lookup12 extends Vec<SpRuntimeGenericDigestDigestItem> {}

/** @name SpRuntimeGenericDigestDigestItem */
export interface SpRuntimeGenericDigestDigestItem extends Enum {
  readonly isOther: boolean;
  readonly asOther: Bytes;
  readonly isUnused1: boolean;
  readonly isChangesTrieRoot: boolean;
  readonly asChangesTrieRoot: H256;
  readonly isUnused3: boolean;
  readonly isConsensus: boolean;
  readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
  readonly isSeal: boolean;
  readonly asSeal: ITuple<[U8aFixed, Bytes]>;
  readonly isPreRuntime: boolean;
  readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
  readonly isChangesTrieSignal: boolean;
  readonly asChangesTrieSignal: SpRuntimeGenericDigestChangesTrieSignal;
}

/** @name Lookup14 */
export interface Lookup14 extends U8aFixed {}

/** @name SpRuntimeGenericDigestChangesTrieSignal */
export interface SpRuntimeGenericDigestChangesTrieSignal extends Enum {
  readonly isNewConfiguration: boolean;
  readonly asNewConfiguration: Option<SpCoreChangesTrieChangesTrieConfiguration>;
}

/** @name Lookup16 */
export interface Lookup16 extends Option<SpCoreChangesTrieChangesTrieConfiguration> {}

/** @name SpCoreChangesTrieChangesTrieConfiguration */
export interface SpCoreChangesTrieChangesTrieConfiguration extends Struct {
  readonly digestInterval: u32;
  readonly digestLevels: u32;
}

/** @name Lookup18 */
export interface Lookup18 extends Vec<FrameSystemEventRecord> {}

/** @name FrameSystemEventRecord */
export interface FrameSystemEventRecord extends Struct {
  readonly phase: {
    /** TODO generate fields **/
  } & Enum;
  readonly event: {
    /** TODO generate fields **/
  } & Enum;
  readonly topics: Vec<H256>;
}

/** @name FrameSupportWeightsDispatchInfo */
export interface FrameSupportWeightsDispatchInfo extends Struct {
  readonly weight: u64;
  readonly class: {
    /** TODO generate fields **/
  } & Enum;
  readonly paysFee: {
    /** TODO generate fields **/
  } & Enum;
}

/** @name FrameSupportWeightsDispatchClass */
export interface FrameSupportWeightsDispatchClass extends Enum {
  readonly isNormal: boolean;
  readonly isOperational: boolean;
  readonly isMandatory: boolean;
}

/** @name FrameSupportWeightsPays */
export interface FrameSupportWeightsPays extends Enum {
  readonly isYes: boolean;
  readonly isNo: boolean;
}

/** @name SpRuntimeDispatchError */
export interface SpRuntimeDispatchError extends Enum {
  readonly isOther: boolean;
  readonly isCannotLookup: boolean;
  readonly isBadOrigin: boolean;
  readonly isModule: boolean;
  readonly asModule: {
    readonly index: u8;
    readonly error: u8;
  } & Struct;
  readonly isConsumerRemaining: boolean;
  readonly isNoProviders: boolean;
  readonly isToken: boolean;
  readonly asToken: SpRuntimeTokenError;
  readonly isArithmetic: boolean;
  readonly asArithmetic: SpRuntimeArithmeticError;
}

/** @name SpRuntimeTokenError */
export interface SpRuntimeTokenError extends Enum {
  readonly isNoFunds: boolean;
  readonly isWouldDie: boolean;
  readonly isBelowMinimum: boolean;
  readonly isCannotCreate: boolean;
  readonly isUnknownAsset: boolean;
  readonly isFrozen: boolean;
  readonly isUnsupported: boolean;
}

/** @name SpRuntimeArithmeticError */
export interface SpRuntimeArithmeticError extends Enum {
  readonly isUnderflow: boolean;
  readonly isOverflow: boolean;
  readonly isDivisionByZero: boolean;
}

/** @name FrameSupportTraitsTokensMiscBalanceStatus */
export interface FrameSupportTraitsTokensMiscBalanceStatus extends Enum {
  readonly isFree: boolean;
  readonly isReserved: boolean;
}

/** @name PalletElectionProviderMultiPhaseElectionCompute */
export interface PalletElectionProviderMultiPhaseElectionCompute extends Enum {
  readonly isOnChain: boolean;
  readonly isSigned: boolean;
  readonly isUnsigned: boolean;
  readonly isEmergency: boolean;
}

/** @name Lookup34 */
export interface Lookup34 extends bool {}

/** @name Lookup35 */
export interface Lookup35 extends Option<PalletElectionProviderMultiPhaseElectionCompute> {}

/** @name Lookup39 */
export interface Lookup39 extends Vec<AccountId32> {}

/** @name PalletDemocracyVoteThreshold */
export interface PalletDemocracyVoteThreshold extends Enum {
  readonly isSuperMajorityApprove: boolean;
  readonly isSuperMajorityAgainst: boolean;
  readonly isSimpleMajority: boolean;
}

/** @name Lookup41 */
export interface Lookup41 extends Result<Null, SpRuntimeDispatchError> {
  readonly isErr: boolean;
  readonly asErr: SpRuntimeDispatchError;
  /** @deprecated Use isErr */
  readonly isError: boolean;
  /** @deprecated Use asErr */
  readonly asError: SpRuntimeDispatchError;
  readonly isOk: boolean;
}

/** @name Lookup42 */
export type Lookup42 = Null;

/** @name PalletCollectiveInstance1 */
export type PalletCollectiveInstance1 = Null;

/** @name PalletCollectiveInstance2 */
export type PalletCollectiveInstance2 = Null;

/** @name Lookup48 */
export interface Lookup48 extends Vec<ITuple<[AccountId32, u128]>> {}

/** @name Lookup49 */
export interface Lookup49 extends ITuple<[AccountId32, u128]> {}

/** @name PalletMembershipInstance1 */
export type PalletMembershipInstance1 = Null;

/** @name Lookup53 */
export interface Lookup53 extends Vec<ITuple<[U8aFixed, u64]>> {}

/** @name Lookup54 */
export interface Lookup54 extends ITuple<[U8aFixed, u64]> {}

/** @name Lookup55 */
export interface Lookup55 extends U8aFixed {}

/** @name Lookup56 */
export interface Lookup56 extends U8aFixed {}

/** @name Lookup61 */
export interface Lookup61 extends U8aFixed {}

/** @name Lookup62 */
export interface Lookup62 extends U8aFixed {}

/** @name Lookup63 */
export interface Lookup63 extends Vec<ITuple<[AccountId32, PalletStakingExposure]>> {}

/** @name Lookup64 */
export interface Lookup64 extends ITuple<[AccountId32, PalletStakingExposure]> {}

/** @name PalletStakingExposure */
export interface PalletStakingExposure extends Struct {
  readonly total: Compact<u128>;
  readonly own: Compact<u128>;
  readonly others: Vec<PalletStakingIndividualExposure>;
}

/** @name CompactU128 */
export interface CompactU128 extends Compact<u128> {}

/** @name Lookup67 */
export interface Lookup67 extends Vec<PalletStakingIndividualExposure> {}

/** @name PalletStakingIndividualExposure */
export interface PalletStakingIndividualExposure extends Struct {
  readonly who: AccountId32;
  readonly value: Compact<u128>;
}

/** @name Lookup70 */
export interface Lookup70 extends U8aFixed {}

/** @name PalletSocietyDefaultInstance */
export type PalletSocietyDefaultInstance = Null;

/** @name Lookup77 */
export interface Lookup77 extends ITuple<[u32, u32]> {}

/** @name Lookup78 */
export interface Lookup78 extends Option<Bytes> {}

/** @name NodeRuntimeProxyType */
export interface NodeRuntimeProxyType extends Enum {
  readonly isAny: boolean;
  readonly isNonTransfer: boolean;
  readonly isGovernance: boolean;
  readonly isStaking: boolean;
}

/** @name Lookup81 */
export interface Lookup81 extends u16 {}

/** @name PalletMultisigTimepointU32 */
export interface PalletMultisigTimepointU32 extends Struct {
  readonly height: u32;
  readonly index: u32;
}

/** @name Lookup88 */
export interface Lookup88 extends ITuple<[u8, u8]> {}

/** @name Lookup91 */
export interface Lookup91 extends Vec<u8> {}

/** @name Lookup92 */
export interface Lookup92 extends Vec<u32> {}

/** @name OptionU32 */
export interface OptionU32 extends Option<u32> {}

/** @name Lookup94 */
export interface Lookup94 extends Vec<u8> {}

/** @name Lookup95 */
export interface Lookup95 extends Vec<u8> {}

/** @name FrameSystemPhase */
export interface FrameSystemPhase extends Enum {
  readonly isApplyExtrinsic: boolean;
  readonly asApplyExtrinsic: u32;
  readonly isFinalization: boolean;
  readonly isInitialization: boolean;
}

/** @name Lookup98 */
export interface Lookup98 extends Vec<H256> {}

/** @name Lookup99 */
export interface Lookup99 extends Vec<ITuple<[u32, u32]>> {}

/** @name FrameSystemLastRuntimeUpgradeInfo */
export interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
  readonly specVersion: Compact<u32>;
  readonly specName: Text;
}

/** @name CompactU32 */
export interface CompactU32 extends Compact<u32> {}

/** @name Lookup102 */
export interface Lookup102 extends Text {}

/** @name SpArithmeticPerThingsPerbill */
export interface SpArithmeticPerThingsPerbill extends Perbill {}

/** @name Lookup105 */
export interface Lookup105 extends Vec<ITuple<[Bytes, Bytes]>> {}

/** @name Lookup106 */
export interface Lookup106 extends ITuple<[Bytes, Bytes]> {}

/** @name Lookup107 */
export interface Lookup107 extends Vec<Bytes> {}

/** @name FrameSystemLimitsBlockWeights */
export interface FrameSystemLimitsBlockWeights extends Struct {
  readonly baseBlock: u64;
  readonly maxBlock: u64;
  readonly perClass: {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  } & Struct;
}

/** @name FrameSupportWeightsPerDispatchClass */
export interface FrameSupportWeightsPerDispatchClass extends Struct {
  readonly normal: {
    readonly baseExtrinsic: u64;
    readonly maxExtrinsic: OptionU64;
    readonly maxTotal: OptionU64;
    readonly reserved: OptionU64;
  } & Struct;
  readonly operational: {
    readonly baseExtrinsic: u64;
    readonly maxExtrinsic: OptionU64;
    readonly maxTotal: OptionU64;
    readonly reserved: OptionU64;
  } & Struct;
  readonly mandatory: {
    readonly baseExtrinsic: u64;
    readonly maxExtrinsic: OptionU64;
    readonly maxTotal: OptionU64;
    readonly reserved: OptionU64;
  } & Struct;
}

/** @name FrameSystemLimitsWeightsPerClass */
export interface FrameSystemLimitsWeightsPerClass extends Struct {
  readonly baseExtrinsic: u64;
  readonly maxExtrinsic: Option<u64>;
  readonly maxTotal: Option<u64>;
  readonly reserved: Option<u64>;
}

/** @name OptionU64 */
export interface OptionU64 extends Option<u64> {}

/** @name FrameSystemLimitsBlockLength */
export interface FrameSystemLimitsBlockLength extends Struct {
  readonly max: {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  } & Struct;
}

/** @name FrameSupportWeightsPerDispatchClassU32 */
export interface FrameSupportWeightsPerDispatchClassU32 extends Struct {
  readonly normal: u32;
  readonly operational: u32;
  readonly mandatory: u32;
}

/** @name FrameSupportWeightsRuntimeDbWeight */
export interface FrameSupportWeightsRuntimeDbWeight extends Struct {
  readonly read: u64;
  readonly write: u64;
}

/** @name SpVersionRuntimeVersion */
export interface SpVersionRuntimeVersion extends Struct {
  readonly specName: Text;
  readonly implName: Text;
  readonly authoringVersion: u32;
  readonly specVersion: u32;
  readonly implVersion: u32;
  readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
  readonly transactionVersion: u32;
}

/** @name Lookup116 */
export interface Lookup116 extends Vec<ITuple<[U8aFixed, u32]>> {}

/** @name Lookup117 */
export interface Lookup117 extends Vec<ITuple<[U8aFixed, u32]>> {}

/** @name Lookup118 */
export interface Lookup118 extends ITuple<[U8aFixed, u32]> {}

/** @name Lookup119 */
export interface Lookup119 extends U8aFixed {}

/** @name Lookup122 */
export interface Lookup122 extends Vec<Call> {}

/** @name NodeRuntimeCall */
export interface NodeRuntimeCall extends Call {}

/** @name SpConsensusSlotsEquivocationProof */
export interface SpConsensusSlotsEquivocationProof extends Struct {
  readonly offender: U8aFixed;
  readonly slot: u64;
  readonly firstHeader: {
    readonly parentHash: H256;
    readonly number: CompactU32;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeGenericDigest;
  } & Struct;
  readonly secondHeader: {
    readonly parentHash: H256;
    readonly number: CompactU32;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeGenericDigest;
  } & Struct;
}

/** @name SpRuntimeGenericHeader */
export interface SpRuntimeGenericHeader extends Struct {
  readonly parentHash: H256;
  readonly number: Compact<u32>;
  readonly stateRoot: H256;
  readonly extrinsicsRoot: H256;
  readonly digest: {
    readonly logs: Vec<SpRuntimeGenericDigestDigestItem>;
  } & Struct;
}

/** @name Lookup127 */
export interface Lookup127 extends U8aFixed {}

/** @name SpConsensusSlotsSlot */
export interface SpConsensusSlotsSlot extends u64 {}

/** @name SpSessionMembershipProof */
export interface SpSessionMembershipProof extends Struct {
  readonly session: u32;
  readonly trieNodes: Vec<Bytes>;
  readonly validatorCount: u32;
}

/** @name SpConsensusBabeDigestsNextConfigDescriptor */
export interface SpConsensusBabeDigestsNextConfigDescriptor extends Enum {
  readonly isUnused0: boolean;
  readonly isV1: boolean;
  readonly asV1: {
    readonly c: ITuple<[u64, u64]>;
    readonly allowedSlots: SpConsensusBabeAllowedSlots;
  } & Struct;
}

/** @name Lookup131 */
export interface Lookup131 extends ITuple<[u64, u64]> {}

/** @name SpConsensusBabeAllowedSlots */
export interface SpConsensusBabeAllowedSlots extends Enum {
  readonly isPrimarySlots: boolean;
  readonly isPrimaryAndSecondaryPlainSlots: boolean;
  readonly isPrimaryAndSecondaryVrfSlots: boolean;
}

/** @name CompactU64 */
export interface CompactU64 extends Compact<u64> {}

/** @name Lookup136 */
export interface Lookup136 extends Vec<SpRuntimeGenericHeader> {}

/** @name SpRuntimeMultiaddressMultiAddress */
export interface SpRuntimeMultiaddressMultiAddress extends MultiAddress {}

/** @name Lookup140 */
export interface Lookup140 extends U8aFixed {}

/** @name PalletElectionProviderMultiPhaseRawSolution */
export interface PalletElectionProviderMultiPhaseRawSolution extends Struct {
  readonly compact: {
    readonly votes1: Vec<ITuple<[CompactU32, CompactU16]>>;
    readonly votes2: Vec<ITuple<[CompactU32, ITuple<[CompactU16, Compact<PerU16>]>, CompactU16]>>;
    readonly votes3: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes4: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes5: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes6: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes7: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes8: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes9: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes10: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes11: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes12: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes13: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes14: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes15: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
    readonly votes16: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  } & Struct;
  readonly score: Vec<u128>;
  readonly round: u32;
}

/** @name NodeRuntimeNposCompactSolution16 */
export interface NodeRuntimeNposCompactSolution16 extends Struct {
  readonly votes1: Vec<ITuple<[CompactU32, CompactU16]>>;
  readonly votes2: Vec<ITuple<[CompactU32, ITuple<[CompactU16, Compact<PerU16>]>, CompactU16]>>;
  readonly votes3: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes4: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes5: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes6: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes7: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes8: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes9: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes10: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes11: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes12: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes13: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes14: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes15: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
  readonly votes16: Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>>;
}

/** @name Lookup144 */
export interface Lookup144 extends Vec<ITuple<[CompactU32, CompactU16]>> {}

/** @name Lookup145 */
export interface Lookup145 extends ITuple<[CompactU32, CompactU16]> {}

/** @name CompactU16 */
export interface CompactU16 extends Compact<u16> {}

/** @name Lookup147 */
export interface Lookup147 extends Vec<ITuple<[CompactU32, ITuple<[CompactU16, Compact<PerU16>]>, CompactU16]>> {}

/** @name Lookup148 */
export interface Lookup148 extends ITuple<[CompactU32, ITuple<[CompactU16, Compact<PerU16>]>, CompactU16]> {}

/** @name Lookup149 */
export interface Lookup149 extends ITuple<[CompactU16, Compact<PerU16>]> {}

/** @name Lookup150 */
export interface Lookup150 extends Compact<PerU16> {}

/** @name SpArithmeticPerThingsPerU16 */
export interface SpArithmeticPerThingsPerU16 extends PerU16 {}

/** @name Lookup152 */
export interface Lookup152 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup153 */
export interface Lookup153 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup154 */
export interface Lookup154 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup155 */
export interface Lookup155 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup156 */
export interface Lookup156 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup157 */
export interface Lookup157 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup158 */
export interface Lookup158 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup159 */
export interface Lookup159 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup160 */
export interface Lookup160 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup161 */
export interface Lookup161 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup162 */
export interface Lookup162 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup163 */
export interface Lookup163 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup164 */
export interface Lookup164 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup165 */
export interface Lookup165 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup166 */
export interface Lookup166 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup167 */
export interface Lookup167 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup168 */
export interface Lookup168 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup169 */
export interface Lookup169 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup170 */
export interface Lookup170 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup171 */
export interface Lookup171 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup172 */
export interface Lookup172 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup173 */
export interface Lookup173 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup174 */
export interface Lookup174 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup175 */
export interface Lookup175 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup176 */
export interface Lookup176 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup177 */
export interface Lookup177 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup178 */
export interface Lookup178 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup179 */
export interface Lookup179 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup180 */
export interface Lookup180 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup181 */
export interface Lookup181 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup182 */
export interface Lookup182 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup183 */
export interface Lookup183 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup184 */
export interface Lookup184 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup185 */
export interface Lookup185 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup186 */
export interface Lookup186 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup187 */
export interface Lookup187 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup188 */
export interface Lookup188 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup189 */
export interface Lookup189 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup190 */
export interface Lookup190 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup191 */
export interface Lookup191 extends Vec<ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]>> {}

/** @name Lookup192 */
export interface Lookup192 extends ITuple<[CompactU32, Vec<ITuple<[CompactU16, Compact<PerU16>]>>, CompactU16]> {}

/** @name Lookup193 */
export interface Lookup193 extends Vec<ITuple<[CompactU16, Compact<PerU16>]>> {}

/** @name Lookup194 */
export interface Lookup194 extends Vec<u128> {}

/** @name PalletElectionProviderMultiPhaseSolutionOrSnapshotSize */
export interface PalletElectionProviderMultiPhaseSolutionOrSnapshotSize extends Struct {
  readonly voters: Compact<u32>;
  readonly targets: Compact<u32>;
}

/** @name Lookup196 */
export interface Lookup196 extends Option<Vec<u128>> {}

/** @name Lookup197 */
export interface Lookup197 extends Vec<ITuple<[AccountId32, SpNposElectionsSupport]>> {}

/** @name Lookup198 */
export interface Lookup198 extends ITuple<[AccountId32, SpNposElectionsSupport]> {}

/** @name SpNposElectionsSupport */
export interface SpNposElectionsSupport extends Struct {
  readonly total: u128;
  readonly voters: Vec<ITuple<[AccountId32, u128]>>;
}

/** @name PalletStakingRewardDestination */
export interface PalletStakingRewardDestination extends Enum {
  readonly isStaked: boolean;
  readonly isStash: boolean;
  readonly isController: boolean;
  readonly isAccount: boolean;
  readonly asAccount: AccountId32;
  readonly isNone: boolean;
}

/** @name PalletStakingValidatorPrefs */
export interface PalletStakingValidatorPrefs extends Struct {
  readonly commission: Compact<Perbill>;
  readonly blocked: bool;
}

/** @name Lookup203 */
export interface Lookup203 extends Compact<Perbill> {}

/** @name Lookup204 */
export interface Lookup204 extends Vec<MultiAddress> {}

/** @name SpArithmeticPerThingsPercent */
export interface SpArithmeticPerThingsPercent extends Percent {}

/** @name Lookup206 */
export interface Lookup206 extends Option<Percent> {}

/** @name NodeRuntimeSessionKeys */
export interface NodeRuntimeSessionKeys extends Struct {
  readonly grandpa: U8aFixed;
  readonly babe: U8aFixed;
  readonly imOnline: U8aFixed;
  readonly authorityDiscovery: U8aFixed;
}

/** @name Lookup209 */
export interface Lookup209 extends U8aFixed {}

/** @name PalletDemocracyVoteAccountVoteU128 */
export interface PalletDemocracyVoteAccountVoteU128 extends Enum {
  readonly isStandard: boolean;
  readonly asStandard: {
    readonly vote: Vote;
    readonly balance: u128;
  } & Struct;
  readonly isSplit: boolean;
  readonly asSplit: {
    readonly aye: u128;
    readonly nay: u128;
  } & Struct;
}

/** @name PalletDemocracyVote */
export interface PalletDemocracyVote extends Vote {}

/** @name PalletDemocracyConviction */
export interface PalletDemocracyConviction extends Enum {
  readonly isNone: boolean;
  readonly isLocked1X: boolean;
  readonly isLocked2X: boolean;
  readonly isLocked3X: boolean;
  readonly isLocked4X: boolean;
  readonly isLocked5X: boolean;
  readonly isLocked6X: boolean;
}

/** @name Lookup215 */
export interface Lookup215 extends Option<AccountId32> {}

/** @name PalletElectionsPhragmenRenouncing */
export interface PalletElectionsPhragmenRenouncing extends Enum {
  readonly isMember: boolean;
  readonly isRunnerUp: boolean;
  readonly isCandidate: boolean;
  readonly asCandidate: CompactU32;
}

/** @name SpFinalityGrandpaEquivocationProof */
export interface SpFinalityGrandpaEquivocationProof extends Struct {
  readonly setId: u64;
  readonly equivocation: {
    /** TODO generate fields **/
  } & Enum;
}

/** @name SpFinalityGrandpaEquivocation */
export interface SpFinalityGrandpaEquivocation extends Enum {
  readonly isPrevote: boolean;
  readonly asPrevote: Lookup223;
  readonly isPrecommit: boolean;
  readonly asPrecommit: Lookup229;
}

/** @name Lookup223 */
export interface Lookup223 extends Struct {
  readonly roundNumber: u64;
  readonly identity: U8aFixed;
  readonly first: ITuple<[FinalityGrandpaPrevote, U8aFixed]>;
  readonly second: ITuple<[FinalityGrandpaPrevote, U8aFixed]>;
}

/** @name FinalityGrandpaPrevote */
export interface FinalityGrandpaPrevote extends Struct {
  readonly targetHash: H256;
  readonly targetNumber: u32;
}

/** @name Lookup225 */
export interface Lookup225 extends U8aFixed {}

/** @name Lookup226 */
export interface Lookup226 extends U8aFixed {}

/** @name Lookup227 */
export interface Lookup227 extends U8aFixed {}

/** @name Lookup228 */
export interface Lookup228 extends ITuple<[FinalityGrandpaPrevote, U8aFixed]> {}

/** @name Lookup229 */
export interface Lookup229 extends Struct {
  readonly roundNumber: u64;
  readonly identity: U8aFixed;
  readonly first: ITuple<[FinalityGrandpaPrecommit, U8aFixed]>;
  readonly second: ITuple<[FinalityGrandpaPrecommit, U8aFixed]>;
}

/** @name FinalityGrandpaPrecommit */
export interface FinalityGrandpaPrecommit extends Struct {
  readonly targetHash: H256;
  readonly targetNumber: u32;
}

/** @name Lookup231 */
export interface Lookup231 extends ITuple<[FinalityGrandpaPrecommit, U8aFixed]> {}

/** @name PalletImOnlineHeartbeatU32 */
export interface PalletImOnlineHeartbeatU32 extends Struct {
  readonly blockNumber: u32;
  readonly networkState: {
    readonly peerId: Bytes;
    readonly externalAddresses: Vec<Bytes>;
  } & Struct;
  readonly sessionIndex: u32;
  readonly authorityIndex: u32;
  readonly validatorsLen: u32;
}

/** @name SpCoreOffchainOpaqueNetworkState */
export interface SpCoreOffchainOpaqueNetworkState extends Struct {
  readonly peerId: Vec<u8>;
  readonly externalAddresses: Vec<Bytes>;
}

/** @name Lookup238 */
export interface Lookup238 extends Vec<u8> {}

/** @name Lookup239 */
export interface Lookup239 extends Vec<Bytes> {}

/** @name Lookup240 */
export interface Lookup240 extends Vec<u8> {}

/** @name Lookup241 */
export interface Lookup241 extends U8aFixed {}

/** @name Lookup242 */
export interface Lookup242 extends U8aFixed {}

/** @name PalletIdentityTypesIdentityInfo */
export interface PalletIdentityTypesIdentityInfo extends Struct {
  readonly additional: Vec<ITuple<[Data, Data]>>;
  readonly display: Data;
  readonly legal: Data;
  readonly web: Data;
  readonly riot: Data;
  readonly email: Data;
  readonly pgpFingerprint: Option<U8aFixed>;
  readonly image: Data;
  readonly twitter: Data;
}

/** @name Lookup245 */
export interface Lookup245 extends Vec<ITuple<[Data, Data]>> {}

/** @name Lookup246 */
export interface Lookup246 extends ITuple<[Data, Data]> {}

/** @name PalletIdentityTypesData */
export interface PalletIdentityTypesData extends Data {}

/** @name Lookup248 */
export interface Lookup248 extends U8aFixed {}

/** @name Lookup249 */
export interface Lookup249 extends U8aFixed {}

/** @name Lookup250 */
export interface Lookup250 extends U8aFixed {}

/** @name Lookup251 */
export interface Lookup251 extends U8aFixed {}

/** @name Lookup252 */
export interface Lookup252 extends U8aFixed {}

/** @name Lookup253 */
export interface Lookup253 extends U8aFixed {}

/** @name Lookup254 */
export interface Lookup254 extends U8aFixed {}

/** @name Lookup255 */
export interface Lookup255 extends U8aFixed {}

/** @name Lookup256 */
export interface Lookup256 extends U8aFixed {}

/** @name Lookup257 */
export interface Lookup257 extends U8aFixed {}

/** @name Lookup258 */
export interface Lookup258 extends U8aFixed {}

/** @name Lookup259 */
export interface Lookup259 extends U8aFixed {}

/** @name Lookup260 */
export interface Lookup260 extends U8aFixed {}

/** @name Lookup261 */
export interface Lookup261 extends U8aFixed {}

/** @name Lookup262 */
export interface Lookup262 extends U8aFixed {}

/** @name Lookup263 */
export interface Lookup263 extends U8aFixed {}

/** @name Lookup264 */
export interface Lookup264 extends U8aFixed {}

/** @name Lookup265 */
export interface Lookup265 extends U8aFixed {}

/** @name Lookup266 */
export interface Lookup266 extends U8aFixed {}

/** @name Lookup267 */
export interface Lookup267 extends U8aFixed {}

/** @name Lookup268 */
export interface Lookup268 extends U8aFixed {}

/** @name Lookup269 */
export interface Lookup269 extends U8aFixed {}

/** @name Lookup270 */
export interface Lookup270 extends U8aFixed {}

/** @name Lookup271 */
export interface Lookup271 extends U8aFixed {}

/** @name Lookup272 */
export interface Lookup272 extends U8aFixed {}

/** @name Lookup273 */
export interface Lookup273 extends U8aFixed {}

/** @name Lookup274 */
export interface Lookup274 extends U8aFixed {}

/** @name Lookup275 */
export interface Lookup275 extends U8aFixed {}

/** @name Lookup276 */
export interface Lookup276 extends Vec<ITuple<[Data, Data]>> {}

/** @name Lookup277 */
export interface Lookup277 extends Option<U8aFixed> {}

/** @name Lookup278 */
export interface Lookup278 extends Vec<ITuple<[AccountId32, Data]>> {}

/** @name Lookup279 */
export interface Lookup279 extends ITuple<[AccountId32, Data]> {}

// SI: Lookup281

/** @name PalletIdentityTypesIdentityField */
export interface PalletIdentityTypesIdentityField extends Enum {
  readonly isUnused0: boolean;
  readonly isDisplay: boolean;
  readonly isLegal: boolean;
  readonly isUnused3: boolean;
  readonly isWeb: boolean;
  readonly isUnused5: boolean;
  readonly isUnused6: boolean;
  readonly isUnused7: boolean;
  readonly isRiot: boolean;
  readonly isUnused9: boolean;
  readonly isUnused10: boolean;
  readonly isUnused11: boolean;
  readonly isUnused12: boolean;
  readonly isUnused13: boolean;
  readonly isUnused14: boolean;
  readonly isUnused15: boolean;
  readonly isEmail: boolean;
  readonly isUnused17: boolean;
  readonly isUnused18: boolean;
  readonly isUnused19: boolean;
  readonly isUnused20: boolean;
  readonly isUnused21: boolean;
  readonly isUnused22: boolean;
  readonly isUnused23: boolean;
  readonly isUnused24: boolean;
  readonly isUnused25: boolean;
  readonly isUnused26: boolean;
  readonly isUnused27: boolean;
  readonly isUnused28: boolean;
  readonly isUnused29: boolean;
  readonly isUnused30: boolean;
  readonly isUnused31: boolean;
  readonly isPgpFingerprint: boolean;
  readonly isUnused33: boolean;
  readonly isUnused34: boolean;
  readonly isUnused35: boolean;
  readonly isUnused36: boolean;
  readonly isUnused37: boolean;
  readonly isUnused38: boolean;
  readonly isUnused39: boolean;
  readonly isUnused40: boolean;
  readonly isUnused41: boolean;
  readonly isUnused42: boolean;
  readonly isUnused43: boolean;
  readonly isUnused44: boolean;
  readonly isUnused45: boolean;
  readonly isUnused46: boolean;
  readonly isUnused47: boolean;
  readonly isUnused48: boolean;
  readonly isUnused49: boolean;
  readonly isUnused50: boolean;
  readonly isUnused51: boolean;
  readonly isUnused52: boolean;
  readonly isUnused53: boolean;
  readonly isUnused54: boolean;
  readonly isUnused55: boolean;
  readonly isUnused56: boolean;
  readonly isUnused57: boolean;
  readonly isUnused58: boolean;
  readonly isUnused59: boolean;
  readonly isUnused60: boolean;
  readonly isUnused61: boolean;
  readonly isUnused62: boolean;
  readonly isUnused63: boolean;
  readonly isImage: boolean;
  readonly isUnused65: boolean;
  readonly isUnused66: boolean;
  readonly isUnused67: boolean;
  readonly isUnused68: boolean;
  readonly isUnused69: boolean;
  readonly isUnused70: boolean;
  readonly isUnused71: boolean;
  readonly isUnused72: boolean;
  readonly isUnused73: boolean;
  readonly isUnused74: boolean;
  readonly isUnused75: boolean;
  readonly isUnused76: boolean;
  readonly isUnused77: boolean;
  readonly isUnused78: boolean;
  readonly isUnused79: boolean;
  readonly isUnused80: boolean;
  readonly isUnused81: boolean;
  readonly isUnused82: boolean;
  readonly isUnused83: boolean;
  readonly isUnused84: boolean;
  readonly isUnused85: boolean;
  readonly isUnused86: boolean;
  readonly isUnused87: boolean;
  readonly isUnused88: boolean;
  readonly isUnused89: boolean;
  readonly isUnused90: boolean;
  readonly isUnused91: boolean;
  readonly isUnused92: boolean;
  readonly isUnused93: boolean;
  readonly isUnused94: boolean;
  readonly isUnused95: boolean;
  readonly isUnused96: boolean;
  readonly isUnused97: boolean;
  readonly isUnused98: boolean;
  readonly isUnused99: boolean;
  readonly isUnused100: boolean;
  readonly isUnused101: boolean;
  readonly isUnused102: boolean;
  readonly isUnused103: boolean;
  readonly isUnused104: boolean;
  readonly isUnused105: boolean;
  readonly isUnused106: boolean;
  readonly isUnused107: boolean;
  readonly isUnused108: boolean;
  readonly isUnused109: boolean;
  readonly isUnused110: boolean;
  readonly isUnused111: boolean;
  readonly isUnused112: boolean;
  readonly isUnused113: boolean;
  readonly isUnused114: boolean;
  readonly isUnused115: boolean;
  readonly isUnused116: boolean;
  readonly isUnused117: boolean;
  readonly isUnused118: boolean;
  readonly isUnused119: boolean;
  readonly isUnused120: boolean;
  readonly isUnused121: boolean;
  readonly isUnused122: boolean;
  readonly isUnused123: boolean;
  readonly isUnused124: boolean;
  readonly isUnused125: boolean;
  readonly isUnused126: boolean;
  readonly isUnused127: boolean;
  readonly isTwitter: boolean;
}

/** @name PalletIdentityTypesJudgementU128 */
export interface PalletIdentityTypesJudgementU128 extends Enum {
  readonly isUnknown: boolean;
  readonly isFeePaid: boolean;
  readonly asFeePaid: u128;
  readonly isReasonable: boolean;
  readonly isKnownGood: boolean;
  readonly isOutOfDate: boolean;
  readonly isLowQuality: boolean;
  readonly isErroneous: boolean;
}

/** @name PalletSocietyJudgement */
export interface PalletSocietyJudgement extends Enum {
  readonly isRebid: boolean;
  readonly isReject: boolean;
  readonly isApprove: boolean;
}

/** @name PalletVestingVestingInfo */
export interface PalletVestingVestingInfo extends Struct {
  readonly locked: u128;
  readonly perBlock: u128;
  readonly startingBlock: u32;
}

/** @name Lookup289 */
export interface Lookup289 extends Option<ITuple<[u32, u32]>> {}

/** @name Lookup291 */
export interface Lookup291 extends Option<NodeRuntimeProxyType> {}

/** @name Lookup293 */
export interface Lookup293 extends Option<PalletMultisigTimepointU32> {}

/** @name PalletAssetsTypesDestroyWitness */
export interface PalletAssetsTypesDestroyWitness extends Struct {
  readonly accounts: Compact<u32>;
  readonly sufficients: Compact<u32>;
  readonly approvals: Compact<u32>;
}

/** @name Lookup300 */
export interface Lookup300 extends Compact<Perquintill> {}

/** @name SpArithmeticPerThingsPerquintill */
export interface SpArithmeticPerThingsPerquintill extends Perquintill {}

/** @name PalletUniquesTypesDestroyWitness */
export interface PalletUniquesTypesDestroyWitness extends Struct {
  readonly instances: Compact<u32>;
  readonly instanceMetadatas: Compact<u32>;
  readonly attributes: Compact<u32>;
}

/** @name Lookup304 */
export interface Lookup304 extends Option<MultiAddress> {}

/** @name SpTransactionStorageProofTransactionStorageProof */
export interface SpTransactionStorageProofTransactionStorageProof extends Struct {
  readonly chunk: Vec<u8>;
  readonly proof: Vec<Bytes>;
}

/** @name Lookup307 */
export interface Lookup307 extends Vec<ITuple<[U8aFixed, u64]>> {}

/** @name Lookup308 */
export interface Lookup308 extends ITuple<[U8aFixed, u64]> {}

/** @name Lookup309 */
export interface Lookup309 extends Vec<U8aFixed> {}

/** @name Lookup310 */
export interface Lookup310 extends Option<U8aFixed> {}

/** @name SpConsensusBabeBabeEpochConfiguration */
export interface SpConsensusBabeBabeEpochConfiguration extends Struct {
  readonly c: ITuple<[u64, u64]>;
  readonly allowedSlots: {
    /** TODO generate fields **/
  } & Enum;
}

/** @name Lookup313 */
export interface Lookup313 extends Vec<PalletAuthorshipUncleEntryItem> {}

/** @name PalletAuthorshipUncleEntryItem */
export interface PalletAuthorshipUncleEntryItem extends Enum {
  readonly isInclusionHeight: boolean;
  readonly asInclusionHeight: u32;
  readonly isUncle: boolean;
  readonly asUncle: ITuple<[H256, Option<AccountId32>]>;
}

/** @name Lookup316 */
export interface Lookup316 extends ITuple<[AccountId32, u128, bool]> {}

/** @name Lookup318 */
export interface Lookup318 extends Vec<PalletBalancesBalanceLockU128> {}

/** @name PalletBalancesBalanceLockU128 */
export interface PalletBalancesBalanceLockU128 extends Struct {
  readonly id: U8aFixed;
  readonly amount: u128;
  readonly reasons: {
    /** TODO generate fields **/
  } & Enum;
}

/** @name PalletBalancesReasons */
export interface PalletBalancesReasons extends Enum {
  readonly isFee: boolean;
  readonly isMisc: boolean;
  readonly isAll: boolean;
}

/** @name Lookup321 */
export interface Lookup321 extends Vec<PalletBalancesBalanceLockU128> {}

/** @name Lookup322 */
export interface Lookup322 extends Vec<PalletBalancesReserveData> {}

/** @name PalletBalancesReserveData */
export interface PalletBalancesReserveData extends Struct {
  readonly id: U8aFixed;
  readonly amount: u128;
}

/** @name Lookup324 */
export interface Lookup324 extends Vec<PalletBalancesReserveData> {}

/** @name PalletBalancesReleases */
export interface PalletBalancesReleases extends Enum {
  readonly isV100: boolean;
  readonly isV200: boolean;
}

/** @name SpArithmeticFixedPointFixedU128 */
export interface SpArithmeticFixedPointFixedU128 extends u128 {}

/** @name PalletTransactionPaymentReleases */
export interface PalletTransactionPaymentReleases extends Enum {
  readonly isV1Ancient: boolean;
  readonly isV2: boolean;
}

/** @name Lookup329 */
export interface Lookup329 extends Vec<FrameSupportWeightsWeightToFeeCoefficientU128> {}

/** @name FrameSupportWeightsWeightToFeeCoefficientU128 */
export interface FrameSupportWeightsWeightToFeeCoefficientU128 extends Struct {
  readonly coeffInteger: u128;
  readonly coeffFrac: Perbill;
  readonly negative: bool;
  readonly degree: u8;
}

/** @name PalletElectionProviderMultiPhasePhaseU32 */
export interface PalletElectionProviderMultiPhasePhaseU32 extends Enum {
  readonly isOff: boolean;
  readonly isSigned: boolean;
  readonly isUnsigned: boolean;
  readonly asUnsigned: ITuple<[bool, u32]>;
  readonly isEmergency: boolean;
}

/** @name Lookup332 */
export interface Lookup332 extends ITuple<[bool, u32]> {}

/** @name PalletElectionProviderMultiPhaseReadySolution */
export interface PalletElectionProviderMultiPhaseReadySolution extends Struct {
  readonly supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>;
  readonly score: Vec<u128>;
  readonly compute: {
    /** TODO generate fields **/
  } & Enum;
}

/** @name PalletElectionProviderMultiPhaseRoundSnapshot */
export interface PalletElectionProviderMultiPhaseRoundSnapshot extends Struct {
  readonly voters: Vec<ITuple<[AccountId32, u64, Vec<AccountId32>]>>;
  readonly targets: Vec<AccountId32>;
}

/** @name Lookup335 */
export interface Lookup335 extends Vec<ITuple<[AccountId32, u64, Vec<AccountId32>]>> {}

/** @name Lookup336 */
export interface Lookup336 extends ITuple<[AccountId32, u64, Vec<AccountId32>]> {}

/** @name Lookup337 */
export interface Lookup337 extends BTreeMap<Vec<u128>, u32> {}

/** @name Lookup338 */
export interface Lookup338 extends BTreeMap<Vec<u128>, u32> {}

/** @name Lookup339 */
export interface Lookup339 extends Vec<ITuple<[Vec<u128>, u32]>> {}

/** @name Lookup340 */
export interface Lookup340 extends ITuple<[Vec<u128>, u32]> {}

/** @name PalletElectionProviderMultiPhaseSignedSignedSubmission */
export interface PalletElectionProviderMultiPhaseSignedSignedSubmission extends Struct {
  readonly who: AccountId32;
  readonly deposit: u128;
  readonly solution: {
    readonly compact: NodeRuntimeNposCompactSolution16;
    readonly score: Vec<u128>;
    readonly round: u32;
  } & Struct;
}

/** @name PalletStakingStakingLedger */
export interface PalletStakingStakingLedger extends Struct {
  readonly stash: AccountId32;
  readonly total: Compact<u128>;
  readonly active: Compact<u128>;
  readonly unlocking: Vec<PalletStakingUnlockChunkU128>;
  readonly claimedRewards: Vec<u32>;
}

/** @name Lookup344 */
export interface Lookup344 extends Vec<PalletStakingUnlockChunkU128> {}

/** @name PalletStakingUnlockChunkU128 */
export interface PalletStakingUnlockChunkU128 extends Struct {
  readonly value: Compact<u128>;
  readonly era: Compact<u32>;
}

/** @name PalletStakingNominations */
export interface PalletStakingNominations extends Struct {
  readonly targets: Vec<AccountId32>;
  readonly submittedIn: u32;
  readonly suppressed: bool;
}

/** @name PalletStakingActiveEraInfo */
export interface PalletStakingActiveEraInfo extends Struct {
  readonly index: u32;
  readonly start: Option<u64>;
}

/** @name PalletStakingEraRewardPoints */
export interface PalletStakingEraRewardPoints extends Struct {
  readonly total: u32;
  readonly individual: BTreeMap<AccountId32, u32>;
}

/** @name Lookup349 */
export interface Lookup349 extends BTreeMap<AccountId32, u32> {}

/** @name Lookup350 */
export interface Lookup350 extends Vec<ITuple<[AccountId32, u32]>> {}

/** @name Lookup351 */
export interface Lookup351 extends ITuple<[AccountId32, u32]> {}

/** @name PalletStakingForcing */
export interface PalletStakingForcing extends Enum {
  readonly isNotForcing: boolean;
  readonly isForceNew: boolean;
  readonly isForceNone: boolean;
  readonly isForceAlways: boolean;
}

/** @name Lookup353 */
export interface Lookup353 extends Vec<PalletStakingUnappliedSlash> {}

/** @name PalletStakingUnappliedSlash */
export interface PalletStakingUnappliedSlash extends Struct {
  readonly validator: AccountId32;
  readonly own: u128;
  readonly others: Vec<ITuple<[AccountId32, u128]>>;
  readonly reporters: Vec<AccountId32>;
  readonly payout: u128;
}

/** @name Lookup355 */
export interface Lookup355 extends ITuple<[Perbill, u128]> {}

/** @name PalletStakingSlashingSlashingSpans */
export interface PalletStakingSlashingSlashingSpans extends Struct {
  readonly spanIndex: u32;
  readonly lastStart: u32;
  readonly lastNonzeroSlash: u32;
  readonly prior: Vec<u32>;
}

/** @name PalletStakingSlashingSpanRecordU128 */
export interface PalletStakingSlashingSpanRecordU128 extends Struct {
  readonly slashed: u128;
  readonly paidOut: u128;
}

/** @name PalletStakingReleases */
export interface PalletStakingReleases extends Enum {
  readonly isV100Ancient: boolean;
  readonly isV200: boolean;
  readonly isV300: boolean;
  readonly isV400: boolean;
  readonly isV500: boolean;
  readonly isV600: boolean;
  readonly isV700: boolean;
}

/** @name Lookup360 */
export interface Lookup360 extends Vec<ITuple<[AccountId32, NodeRuntimeSessionKeys]>> {}

/** @name Lookup361 */
export interface Lookup361 extends ITuple<[AccountId32, NodeRuntimeSessionKeys]> {}

/** @name Lookup362 */
export interface Lookup362 extends ITuple<[U8aFixed, Bytes]> {}

/** @name Lookup363 */
export interface Lookup363 extends U8aFixed {}

/** @name Lookup365 */
export interface Lookup365 extends Vec<ITuple<[u32, H256, AccountId32]>> {}

/** @name Lookup366 */
export interface Lookup366 extends ITuple<[u32, H256, AccountId32]> {}

/** @name Lookup367 */
export interface Lookup367 extends ITuple<[Vec<AccountId32>, u128]> {}

/** @name PalletDemocracyPreimageStatus */
export interface PalletDemocracyPreimageStatus extends Enum {
  readonly isMissing: boolean;
  readonly asMissing: u32;
  readonly isAvailable: boolean;
  readonly asAvailable: {
    readonly data: Bytes;
    readonly provider: AccountId32;
    readonly deposit: u128;
    readonly since: u32;
    readonly expiry: OptionU32;
  } & Struct;
}

/** @name PalletDemocracyTypesReferendumInfo */
export interface PalletDemocracyTypesReferendumInfo extends Enum {
  readonly isOngoing: boolean;
  readonly asOngoing: PalletDemocracyTypesReferendumStatus;
  readonly isFinished: boolean;
  readonly asFinished: {
    readonly approved: bool;
    readonly end: u32;
  } & Struct;
}

/** @name PalletDemocracyTypesReferendumStatus */
export interface PalletDemocracyTypesReferendumStatus extends Struct {
  readonly end: u32;
  readonly proposalHash: H256;
  readonly threshold: {
    /** TODO generate fields **/
  } & Enum;
  readonly delay: u32;
  readonly tally: {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  } & Struct;
}

/** @name PalletDemocracyTypesTallyU128 */
export interface PalletDemocracyTypesTallyU128 extends Struct {
  readonly ayes: u128;
  readonly nays: u128;
  readonly turnout: u128;
}

/** @name PalletDemocracyVoteVoting */
export interface PalletDemocracyVoteVoting extends Enum {
  readonly isDirect: boolean;
  readonly asDirect: {
    readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVoteU128]>>;
    readonly delegations: PalletDemocracyTypesDelegationsU128;
    readonly prior: PalletDemocracyVotePriorLock;
  } & Struct;
  readonly isDelegating: boolean;
  readonly asDelegating: {
    readonly balance: u128;
    readonly target: AccountId32;
    readonly conviction: PalletDemocracyConviction;
    readonly delegations: PalletDemocracyTypesDelegationsU128;
    readonly prior: PalletDemocracyVotePriorLock;
  } & Struct;
}

/** @name Lookup373 */
export interface Lookup373 extends Vec<ITuple<[u32, PalletDemocracyVoteAccountVoteU128]>> {}

/** @name Lookup374 */
export interface Lookup374 extends ITuple<[u32, PalletDemocracyVoteAccountVoteU128]> {}

/** @name PalletDemocracyTypesDelegationsU128 */
export interface PalletDemocracyTypesDelegationsU128 extends Struct {
  readonly votes: u128;
  readonly capital: u128;
}

/** @name PalletDemocracyVotePriorLock */
export interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

/** @name Lookup377 */
export interface Lookup377 extends ITuple<[H256, PalletDemocracyVoteThreshold]> {}

/** @name Lookup378 */
export interface Lookup378 extends ITuple<[u32, Vec<AccountId32>]> {}

/** @name PalletDemocracyReleases */
export interface PalletDemocracyReleases extends Enum {
  readonly isV1: boolean;
}

/** @name Lookup381 */
export interface Lookup381 extends Vec<H256> {}

/** @name PalletCollectiveVotes */
export interface PalletCollectiveVotes extends Struct {
  readonly index: u32;
  readonly threshold: u32;
  readonly ayes: Vec<AccountId32>;
  readonly nays: Vec<AccountId32>;
  readonly end: u32;
}

/** @name Lookup384 */
export interface Lookup384 extends Vec<H256> {}

/** @name Lookup386 */
export interface Lookup386 extends Vec<PalletElectionsPhragmenSeatHolder> {}

/** @name PalletElectionsPhragmenSeatHolder */
export interface PalletElectionsPhragmenSeatHolder extends Struct {
  readonly who: AccountId32;
  readonly stake: u128;
  readonly deposit: u128;
}

/** @name PalletElectionsPhragmenVoter */
export interface PalletElectionsPhragmenVoter extends Struct {
  readonly votes: Vec<AccountId32>;
  readonly stake: u128;
  readonly deposit: u128;
}

/** @name PalletGrandpaStoredStateU32 */
export interface PalletGrandpaStoredStateU32 extends Enum {
  readonly isLive: boolean;
  readonly isPendingPause: boolean;
  readonly asPendingPause: {
    readonly scheduledAt: u32;
    readonly delay: u32;
  } & Struct;
  readonly isPaused: boolean;
  readonly isPendingResume: boolean;
  readonly asPendingResume: {
    readonly scheduledAt: u32;
    readonly delay: u32;
  } & Struct;
}

/** @name PalletGrandpaStoredPendingChangeU32 */
export interface PalletGrandpaStoredPendingChangeU32 extends Struct {
  readonly scheduledAt: u32;
  readonly delay: u32;
  readonly nextAuthorities: Vec<ITuple<[U8aFixed, u64]>>;
  readonly forced: Option<u32>;
}

/** @name PalletTreasuryProposal */
export interface PalletTreasuryProposal extends Struct {
  readonly proposer: AccountId32;
  readonly value: u128;
  readonly beneficiary: AccountId32;
  readonly bond: u128;
}

/** @name Lookup395 */
export interface Lookup395 extends Vec<u32> {}

/** @name SpArithmeticPerThingsPermill */
export interface SpArithmeticPerThingsPermill extends Permill {}

/** @name Lookup397 */
export interface Lookup397 extends U8aFixed {}

/** @name PalletContractsWasmPrefabWasmModule */
export interface PalletContractsWasmPrefabWasmModule extends Struct {
  readonly instructionWeightsVersion: Compact<u32>;
  readonly initial: Compact<u32>;
  readonly maximum: Compact<u32>;
  readonly refcount: Compact<u64>;
  readonly reserved: Option<Null>;
  readonly code: Vec<u8>;
  readonly originalCodeLen: u32;
}

/** @name Lookup400 */
export interface Lookup400 extends Option<Null> {}

/** @name PalletContractsStorageContractInfo */
export interface PalletContractsStorageContractInfo extends Enum {
  readonly isAlive: boolean;
  readonly asAlive: PalletContractsStorageRawAliveContractInfo;
  readonly isTombstone: boolean;
  readonly asTombstone: H256;
}

/** @name PalletContractsStorageRawAliveContractInfo */
export interface PalletContractsStorageRawAliveContractInfo extends Struct {
  readonly trieId: Vec<u8>;
  readonly storageSize: u32;
  readonly pairCount: u32;
  readonly codeHash: H256;
  readonly rentAllowance: u128;
  readonly rentPaid: u128;
  readonly deductBlock: u32;
  readonly lastWrite: Option<u32>;
  readonly reserved: Option<Null>;
}

/** @name PalletContractsStorageRawTombstoneContractInfo */
export interface PalletContractsStorageRawTombstoneContractInfo extends H256 {}

/** @name SpRuntimeTraitsBlakeTwo256 */
export type SpRuntimeTraitsBlakeTwo256 = Null;

/** @name Lookup405 */
export interface Lookup405 extends Vec<PalletContractsStorageDeletedContract> {}

/** @name PalletContractsStorageDeletedContract */
export interface PalletContractsStorageDeletedContract extends Struct {
  readonly pairCount: u32;
  readonly trieId: Vec<u8>;
}

/** @name PalletContractsSchedule */
export interface PalletContractsSchedule extends Struct {
  readonly limits: {
    readonly eventTopics: u32;
    readonly stackHeight: u32;
    readonly globals: u32;
    readonly parameters: u32;
    readonly memoryPages: u32;
    readonly tableSize: u32;
    readonly brTableSize: u32;
    readonly subjectLen: u32;
    readonly callDepth: u32;
    readonly payloadLen: u32;
    readonly codeLen: u32;
  } & Struct;
  readonly instructionWeights: {
    readonly version: u32;
    readonly i64Const: u32;
    readonly i64Load: u32;
    readonly i64Store: u32;
    readonly select: u32;
    readonly r_if: u32;
    readonly br: u32;
    readonly brIf: u32;
    readonly brTable: u32;
    readonly brTablePerEntry: u32;
    readonly call: u32;
    readonly callIndirect: u32;
    readonly callIndirectPerParam: u32;
    readonly localGet: u32;
    readonly localSet: u32;
    readonly localTee: u32;
    readonly globalGet: u32;
    readonly globalSet: u32;
    readonly memoryCurrent: u32;
    readonly memoryGrow: u32;
    readonly i64Clz: u32;
    readonly i64Ctz: u32;
    readonly i64Popcnt: u32;
    readonly i64Eqz: u32;
    readonly i64Extendsi32: u32;
    readonly i64Extendui32: u32;
    readonly i32Wrapi64: u32;
    readonly i64Eq: u32;
    readonly i64Ne: u32;
    readonly i64Lts: u32;
    readonly i64Ltu: u32;
    readonly i64Gts: u32;
    readonly i64Gtu: u32;
    readonly i64Les: u32;
    readonly i64Leu: u32;
    readonly i64Ges: u32;
    readonly i64Geu: u32;
    readonly i64Add: u32;
    readonly i64Sub: u32;
    readonly i64Mul: u32;
    readonly i64Divs: u32;
    readonly i64Divu: u32;
    readonly i64Rems: u32;
    readonly i64Remu: u32;
    readonly i64And: u32;
    readonly i64Or: u32;
    readonly i64Xor: u32;
    readonly i64Shl: u32;
    readonly i64Shrs: u32;
    readonly i64Shru: u32;
    readonly i64Rotl: u32;
    readonly i64Rotr: u32;
  } & Struct;
  readonly hostFnWeights: {
    readonly caller: u64;
    readonly address: u64;
    readonly gasLeft: u64;
    readonly balance: u64;
    readonly valueTransferred: u64;
    readonly minimumBalance: u64;
    readonly tombstoneDeposit: u64;
    readonly rentAllowance: u64;
    readonly blockNumber: u64;
    readonly now: u64;
    readonly weightToFee: u64;
    readonly gas: u64;
    readonly input: u64;
    readonly inputPerByte: u64;
    readonly r_return: u64;
    readonly returnPerByte: u64;
    readonly terminate: u64;
    readonly restoreTo: u64;
    readonly restoreToPerDelta: u64;
    readonly random: u64;
    readonly depositEvent: u64;
    readonly depositEventPerTopic: u64;
    readonly depositEventPerByte: u64;
    readonly debugMessage: u64;
    readonly setRentAllowance: u64;
    readonly setStorage: u64;
    readonly setStoragePerByte: u64;
    readonly clearStorage: u64;
    readonly getStorage: u64;
    readonly getStoragePerByte: u64;
    readonly transfer: u64;
    readonly call: u64;
    readonly callTransferSurcharge: u64;
    readonly callPerInputByte: u64;
    readonly callPerOutputByte: u64;
    readonly instantiate: u64;
    readonly instantiatePerInputByte: u64;
    readonly instantiatePerOutputByte: u64;
    readonly instantiatePerSaltByte: u64;
    readonly hashSha2256: u64;
    readonly hashSha2256PerByte: u64;
    readonly hashKeccak256: u64;
    readonly hashKeccak256PerByte: u64;
    readonly hashBlake2256: u64;
    readonly hashBlake2256PerByte: u64;
    readonly hashBlake2128: u64;
    readonly hashBlake2128PerByte: u64;
  } & Struct;
}

/** @name PalletContractsScheduleLimits */
export interface PalletContractsScheduleLimits extends Struct {
  readonly eventTopics: u32;
  readonly stackHeight: u32;
  readonly globals: u32;
  readonly parameters: u32;
  readonly memoryPages: u32;
  readonly tableSize: u32;
  readonly brTableSize: u32;
  readonly subjectLen: u32;
  readonly callDepth: u32;
  readonly payloadLen: u32;
  readonly codeLen: u32;
}

/** @name PalletContractsScheduleInstructionWeights */
export interface PalletContractsScheduleInstructionWeights extends Struct {
  readonly version: u32;
  readonly i64Const: u32;
  readonly i64Load: u32;
  readonly i64Store: u32;
  readonly select: u32;
  readonly r_if: u32;
  readonly br: u32;
  readonly brIf: u32;
  readonly brTable: u32;
  readonly brTablePerEntry: u32;
  readonly call: u32;
  readonly callIndirect: u32;
  readonly callIndirectPerParam: u32;
  readonly localGet: u32;
  readonly localSet: u32;
  readonly localTee: u32;
  readonly globalGet: u32;
  readonly globalSet: u32;
  readonly memoryCurrent: u32;
  readonly memoryGrow: u32;
  readonly i64Clz: u32;
  readonly i64Ctz: u32;
  readonly i64Popcnt: u32;
  readonly i64Eqz: u32;
  readonly i64Extendsi32: u32;
  readonly i64Extendui32: u32;
  readonly i32Wrapi64: u32;
  readonly i64Eq: u32;
  readonly i64Ne: u32;
  readonly i64Lts: u32;
  readonly i64Ltu: u32;
  readonly i64Gts: u32;
  readonly i64Gtu: u32;
  readonly i64Les: u32;
  readonly i64Leu: u32;
  readonly i64Ges: u32;
  readonly i64Geu: u32;
  readonly i64Add: u32;
  readonly i64Sub: u32;
  readonly i64Mul: u32;
  readonly i64Divs: u32;
  readonly i64Divu: u32;
  readonly i64Rems: u32;
  readonly i64Remu: u32;
  readonly i64And: u32;
  readonly i64Or: u32;
  readonly i64Xor: u32;
  readonly i64Shl: u32;
  readonly i64Shrs: u32;
  readonly i64Shru: u32;
  readonly i64Rotl: u32;
  readonly i64Rotr: u32;
}

/** @name PalletContractsScheduleHostFnWeights */
export interface PalletContractsScheduleHostFnWeights extends Struct {
  readonly caller: u64;
  readonly address: u64;
  readonly gasLeft: u64;
  readonly balance: u64;
  readonly valueTransferred: u64;
  readonly minimumBalance: u64;
  readonly tombstoneDeposit: u64;
  readonly rentAllowance: u64;
  readonly blockNumber: u64;
  readonly now: u64;
  readonly weightToFee: u64;
  readonly gas: u64;
  readonly input: u64;
  readonly inputPerByte: u64;
  readonly r_return: u64;
  readonly returnPerByte: u64;
  readonly terminate: u64;
  readonly restoreTo: u64;
  readonly restoreToPerDelta: u64;
  readonly random: u64;
  readonly depositEvent: u64;
  readonly depositEventPerTopic: u64;
  readonly depositEventPerByte: u64;
  readonly debugMessage: u64;
  readonly setRentAllowance: u64;
  readonly setStorage: u64;
  readonly setStoragePerByte: u64;
  readonly clearStorage: u64;
  readonly getStorage: u64;
  readonly getStoragePerByte: u64;
  readonly transfer: u64;
  readonly call: u64;
  readonly callTransferSurcharge: u64;
  readonly callPerInputByte: u64;
  readonly callPerOutputByte: u64;
  readonly instantiate: u64;
  readonly instantiatePerInputByte: u64;
  readonly instantiatePerOutputByte: u64;
  readonly instantiatePerSaltByte: u64;
  readonly hashSha2256: u64;
  readonly hashSha2256PerByte: u64;
  readonly hashKeccak256: u64;
  readonly hashKeccak256PerByte: u64;
  readonly hashBlake2256: u64;
  readonly hashBlake2256PerByte: u64;
  readonly hashBlake2128: u64;
  readonly hashBlake2128PerByte: u64;
}

/** @name Lookup413 */
export interface Lookup413 extends Vec<U8aFixed> {}

/** @name SpStakingOffenceOffenceDetails */
export interface SpStakingOffenceOffenceDetails extends Struct {
  readonly offender: ITuple<[AccountId32, PalletStakingExposure]>;
  readonly reporters: Vec<AccountId32>;
}

/** @name PalletIdentityTypesRegistration */
export interface PalletIdentityTypesRegistration extends Struct {
  readonly judgements: Vec<ITuple<[u32, PalletIdentityTypesJudgementU128]>>;
  readonly deposit: u128;
  readonly info: {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  } & Struct;
}

/** @name Lookup417 */
export interface Lookup417 extends Vec<ITuple<[u32, PalletIdentityTypesJudgementU128]>> {}

/** @name Lookup418 */
export interface Lookup418 extends ITuple<[u32, PalletIdentityTypesJudgementU128]> {}

/** @name Lookup419 */
export interface Lookup419 extends Vec<ITuple<[u32, PalletIdentityTypesJudgementU128]>> {}

/** @name Lookup420 */
export interface Lookup420 extends ITuple<[u128, Vec<AccountId32>]> {}

/** @name Lookup421 */
export interface Lookup421 extends Vec<AccountId32> {}

/** @name Lookup422 */
export interface Lookup422 extends Vec<Option<PalletIdentityTypesRegistrarInfo>> {}

/** @name Lookup423 */
export interface Lookup423 extends Option<PalletIdentityTypesRegistrarInfo> {}

/** @name PalletIdentityTypesRegistrarInfo */
export interface PalletIdentityTypesRegistrarInfo extends Struct {
  readonly account: AccountId32;
  readonly fee: u128;
  readonly fields: {
    /** TODO generate fields **/
  } & Enum;
}

/** @name Lookup425 */
export interface Lookup425 extends Vec<Option<PalletIdentityTypesRegistrarInfo>> {}

/** @name Lookup427 */
export interface Lookup427 extends Vec<PalletSocietyBid> {}

/** @name PalletSocietyBid */
export interface PalletSocietyBid extends Struct {
  readonly who: AccountId32;
  readonly kind: {
    /** TODO generate fields **/
  } & Enum;
  readonly value: u128;
}

/** @name PalletSocietyBidKind */
export interface PalletSocietyBidKind extends Enum {
  readonly isDeposit: boolean;
  readonly asDeposit: u128;
  readonly isVouch: boolean;
  readonly asVouch: ITuple<[AccountId32, u128]>;
}

/** @name Lookup430 */
export interface Lookup430 extends ITuple<[u128, PalletSocietyBidKind]> {}

/** @name PalletSocietyVouchingStatus */
export interface PalletSocietyVouchingStatus extends Enum {
  readonly isVouching: boolean;
  readonly isBanned: boolean;
}

/** @name Lookup432 */
export interface Lookup432 extends Vec<ITuple<[u32, u128]>> {}

/** @name Lookup433 */
export interface Lookup433 extends ITuple<[u32, u128]> {}

/** @name PalletSocietyVote */
export interface PalletSocietyVote extends Enum {
  readonly isSkeptic: boolean;
  readonly isReject: boolean;
  readonly isApprove: boolean;
}

/** @name PalletRecoveryRecoveryConfig */
export interface PalletRecoveryRecoveryConfig extends Struct {
  readonly delayPeriod: u32;
  readonly deposit: u128;
  readonly friends: Vec<AccountId32>;
  readonly threshold: u16;
}

/** @name PalletRecoveryActiveRecovery */
export interface PalletRecoveryActiveRecovery extends Struct {
  readonly created: u32;
  readonly deposit: u128;
  readonly friends: Vec<AccountId32>;
}

/** @name Lookup440 */
export interface Lookup440 extends Vec<Option<PalletSchedulerScheduledV2>> {}

/** @name Lookup441 */
export interface Lookup441 extends Option<PalletSchedulerScheduledV2> {}

/** @name PalletSchedulerScheduledV2 */
export interface PalletSchedulerScheduledV2 extends Struct {
  readonly maybeId: Option<Bytes>;
  readonly priority: u8;
  readonly call: Call;
  readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
  readonly origin: {
    /** TODO generate fields **/
  } & Enum;
}

/** @name NodeRuntimeOriginCaller */
export interface NodeRuntimeOriginCaller extends Enum {
  readonly isSystem: boolean;
  readonly asSystem: FrameSystemRawOrigin;
  readonly isUnused1: boolean;
  readonly isUnused2: boolean;
  readonly isVoid: boolean;
  readonly isUnused4: boolean;
  readonly isUnused5: boolean;
  readonly isUnused6: boolean;
  readonly isUnused7: boolean;
  readonly isUnused8: boolean;
  readonly isUnused9: boolean;
  readonly isUnused10: boolean;
  readonly isUnused11: boolean;
  readonly isCouncil: boolean;
  readonly asCouncil: PalletCollectiveRawOriginInstance1;
  readonly isTechnicalCommittee: boolean;
  readonly asTechnicalCommittee: PalletCollectiveRawOriginInstance2;
}

/** @name FrameSystemRawOrigin */
export interface FrameSystemRawOrigin extends Enum {
  readonly isRoot: boolean;
  readonly isSigned: boolean;
  readonly asSigned: AccountId32;
  readonly isNone: boolean;
}

/** @name PalletCollectiveRawOriginInstance1 */
export interface PalletCollectiveRawOriginInstance1 extends Enum {
  readonly isMembers: boolean;
  readonly asMembers: ITuple<[u32, u32]>;
  readonly isMember: boolean;
  readonly asMember: AccountId32;
  readonly isPhantom: boolean;
}

/** @name PalletCollectiveRawOriginInstance2 */
export interface PalletCollectiveRawOriginInstance2 extends Enum {
  readonly isMembers: boolean;
  readonly asMembers: ITuple<[u32, u32]>;
  readonly isMember: boolean;
  readonly asMember: AccountId32;
  readonly isPhantom: boolean;
}

/** @name SpCoreVoid */
export type SpCoreVoid = Null;

/** @name PalletSchedulerReleases */
export interface PalletSchedulerReleases extends Enum {
  readonly isV1: boolean;
  readonly isV2: boolean;
}

/** @name Lookup450 */
export interface Lookup450 extends ITuple<[Vec<PalletProxyProxyDefinition>, u128]> {}

/** @name Lookup451 */
export interface Lookup451 extends Vec<PalletProxyProxyDefinition> {}

/** @name PalletProxyProxyDefinition */
export interface PalletProxyProxyDefinition extends Struct {
  readonly delegate: AccountId32;
  readonly proxyType: {
    /** TODO generate fields **/
  } & Enum;
  readonly delay: u32;
}

/** @name Lookup453 */
export interface Lookup453 extends Vec<PalletProxyProxyDefinition> {}

/** @name Lookup454 */
export interface Lookup454 extends ITuple<[Vec<PalletProxyAnnouncement>, u128]> {}

/** @name Lookup455 */
export interface Lookup455 extends Vec<PalletProxyAnnouncement> {}

/** @name PalletProxyAnnouncement */
export interface PalletProxyAnnouncement extends Struct {
  readonly real: AccountId32;
  readonly callHash: H256;
  readonly height: u32;
}

/** @name Lookup457 */
export interface Lookup457 extends Vec<PalletProxyAnnouncement> {}

/** @name PalletMultisigMultisig */
export interface PalletMultisigMultisig extends Struct {
  readonly when: {
    readonly height: u32;
    readonly index: u32;
  } & Struct;
  readonly deposit: u128;
  readonly depositor: AccountId32;
  readonly approvals: Vec<AccountId32>;
}

/** @name Lookup460 */
export interface Lookup460 extends ITuple<[Bytes, AccountId32, u128]> {}

/** @name PalletBountiesBounty */
export interface PalletBountiesBounty extends Struct {
  readonly proposer: AccountId32;
  readonly value: u128;
  readonly fee: u128;
  readonly curatorDeposit: u128;
  readonly bond: u128;
  readonly status: {
    /** TODO generate fields **/
  } & Enum;
}

/** @name PalletBountiesBountyStatus */
export interface PalletBountiesBountyStatus extends Enum {
  readonly isProposed: boolean;
  readonly isApproved: boolean;
  readonly isFunded: boolean;
  readonly isCuratorProposed: boolean;
  readonly asCuratorProposed: {
    readonly curator: AccountId32;
  } & Struct;
  readonly isActive: boolean;
  readonly asActive: {
    readonly curator: AccountId32;
    readonly updateDue: u32;
  } & Struct;
  readonly isPendingPayout: boolean;
  readonly asPendingPayout: {
    readonly curator: AccountId32;
    readonly beneficiary: AccountId32;
    readonly unlockAt: u32;
  } & Struct;
}

/** @name PalletTipsOpenTip */
export interface PalletTipsOpenTip extends Struct {
  readonly reason: H256;
  readonly who: AccountId32;
  readonly finder: AccountId32;
  readonly deposit: u128;
  readonly closes: Option<u32>;
  readonly tips: Vec<ITuple<[AccountId32, u128]>>;
  readonly findersFee: bool;
}

/** @name PalletAssetsTypesAssetDetails */
export interface PalletAssetsTypesAssetDetails extends Struct {
  readonly owner: AccountId32;
  readonly issuer: AccountId32;
  readonly admin: AccountId32;
  readonly freezer: AccountId32;
  readonly supply: u64;
  readonly deposit: u128;
  readonly minBalance: u64;
  readonly isSufficient: bool;
  readonly accounts: u32;
  readonly sufficients: u32;
  readonly approvals: u32;
  readonly isFrozen: bool;
}

/** @name PalletAssetsTypesAssetBalance */
export interface PalletAssetsTypesAssetBalance extends Struct {
  readonly balance: u64;
  readonly isFrozen: bool;
  readonly sufficient: bool;
  readonly extra: Null;
}

/** @name Lookup469 */
export interface Lookup469 extends ITuple<[u32, AccountId32, AccountId32]> {}

/** @name PalletAssetsTypesApproval */
export interface PalletAssetsTypesApproval extends Struct {
  readonly amount: u64;
  readonly deposit: u128;
}

/** @name PalletAssetsTypesAssetMetadata */
export interface PalletAssetsTypesAssetMetadata extends Struct {
  readonly deposit: u128;
  readonly name: Vec<u8>;
  readonly symbol: Vec<u8>;
  readonly decimals: u8;
  readonly isFrozen: bool;
}

/** @name PalletLotteryLotteryConfig */
export interface PalletLotteryLotteryConfig extends Struct {
  readonly price: u128;
  readonly start: u32;
  readonly length: u32;
  readonly delay: u32;
  readonly repeat: bool;
}

/** @name Lookup474 */
export interface Lookup474 extends ITuple<[u32, Vec<ITuple<[u8, u8]>>]> {}

/** @name Lookup475 */
export interface Lookup475 extends Vec<ITuple<[u8, u8]>> {}

/** @name Lookup477 */
export interface Lookup477 extends Vec<PalletGiltPalletGiltBid> {}

/** @name PalletGiltPalletGiltBid */
export interface PalletGiltPalletGiltBid extends Struct {
  readonly amount: u128;
  readonly who: AccountId32;
}

/** @name PalletGiltPalletActiveGiltsTotalU128 */
export interface PalletGiltPalletActiveGiltsTotalU128 extends Struct {
  readonly frozen: u128;
  readonly proportion: Perquintill;
  readonly index: u32;
  readonly target: Perquintill;
}

/** @name PalletGiltPalletActiveGilt */
export interface PalletGiltPalletActiveGilt extends Struct {
  readonly proportion: Perquintill;
  readonly amount: u128;
  readonly who: AccountId32;
  readonly expiry: u32;
}

/** @name PalletUniquesTypesClassDetails */
export interface PalletUniquesTypesClassDetails extends Struct {
  readonly owner: AccountId32;
  readonly issuer: AccountId32;
  readonly admin: AccountId32;
  readonly freezer: AccountId32;
  readonly totalDeposit: u128;
  readonly freeHolding: bool;
  readonly instances: u32;
  readonly instanceMetadatas: u32;
  readonly attributes: u32;
  readonly isFrozen: bool;
}

/** @name Lookup483 */
export interface Lookup483 extends ITuple<[AccountId32, u32, u32]> {}

/** @name PalletUniquesTypesInstanceDetails */
export interface PalletUniquesTypesInstanceDetails extends Struct {
  readonly owner: AccountId32;
  readonly approved: Option<AccountId32>;
  readonly isFrozen: bool;
  readonly deposit: u128;
}

/** @name PalletUniquesTypesClassMetadata */
export interface PalletUniquesTypesClassMetadata extends Struct {
  readonly deposit: u128;
  readonly data: Vec<u8>;
  readonly isFrozen: bool;
}

/** @name PalletUniquesTypesInstanceMetadata */
export interface PalletUniquesTypesInstanceMetadata extends Struct {
  readonly deposit: u128;
  readonly data: Vec<u8>;
  readonly isFrozen: bool;
}

/** @name Lookup487 */
export interface Lookup487 extends ITuple<[u32, OptionU32, Bytes]> {}

/** @name Lookup488 */
export interface Lookup488 extends ITuple<[Bytes, u128]> {}

/** @name Lookup490 */
export interface Lookup490 extends Vec<PalletTransactionStorageTransactionInfo> {}

/** @name PalletTransactionStorageTransactionInfo */
export interface PalletTransactionStorageTransactionInfo extends Struct {
  readonly chunkRoot: H256;
  readonly contentHash: H256;
  readonly size_: u32;
  readonly blockChunks: u32;
}

/** @name Lookup493 */
export interface Lookup493 extends Vec<u8> {}

/** @name FrameSystemExtensionsCheckSpecVersion */
export type FrameSystemExtensionsCheckSpecVersion = Null;

/** @name FrameSystemExtensionsCheckTxVersion */
export type FrameSystemExtensionsCheckTxVersion = Null;

/** @name FrameSystemExtensionsCheckGenesis */
export type FrameSystemExtensionsCheckGenesis = Null;

/** @name FrameSystemExtensionsCheckMortality */
export interface FrameSystemExtensionsCheckMortality extends Era {}

/** @name SpRuntimeGenericEra */
export interface SpRuntimeGenericEra extends Era {}

/** @name CompactU32 */
export interface CompactU32 extends Compact<u32> {}

/** @name FrameSystemExtensionsCheckWeight */
export type FrameSystemExtensionsCheckWeight = Null;

/** @name CompactU128 */
export interface CompactU128 extends Compact<u128> {}

export type PHANTOM_PORTABLE_LOOKUP = 'PortableRegistryLookup';
