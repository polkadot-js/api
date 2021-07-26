// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Compact, Data, Enum, Null, Option, Struct, Text, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { IdentityFields } from '@polkadot/types/interfaces/identity';
import type { AccountId32, Call, H256, PerU16, Perbill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

/** @name FrameSystemAccountInfo (3) */
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

/** @name PalletBalancesAccountData (5) */
export interface PalletBalancesAccountData extends Struct {
  readonly free: u128;
  readonly reserved: u128;
  readonly miscFrozen: u128;
  readonly feeFrozen: u128;
}

/** @name SpRuntimeGenericDigest (11) */
export interface SpRuntimeGenericDigest extends Struct {
  readonly logs: Vec<SpRuntimeGenericDigestDigestItem>;
}

/** @name SpRuntimeGenericDigestDigestItem (13) */
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

/** @name SpRuntimeGenericDigestChangesTrieSignal (15) */
export interface SpRuntimeGenericDigestChangesTrieSignal extends Enum {
  readonly isNewConfiguration: boolean;
  readonly asNewConfiguration: Option<SpCoreChangesTrieChangesTrieConfiguration>;
}

/** @name SpCoreChangesTrieChangesTrieConfiguration (17) */
export interface SpCoreChangesTrieChangesTrieConfiguration extends Struct {
  readonly digestInterval: u32;
  readonly digestLevels: u32;
}

/** @name FrameSystemEventRecord (19) */
export interface FrameSystemEventRecord extends Struct {
  readonly phase: FrameSystemPhase;
  readonly event: Event;
  readonly topics: Vec<H256>;
}

/** @name FrameSupportWeightsDispatchInfo (22) */
export interface FrameSupportWeightsDispatchInfo extends Struct {
  readonly weight: u64;
  readonly class: FrameSupportWeightsDispatchClass;
  readonly paysFee: FrameSupportWeightsPays;
}

/** @name FrameSupportWeightsDispatchClass (23) */
export interface FrameSupportWeightsDispatchClass extends Enum {
  readonly isNormal: boolean;
  readonly isOperational: boolean;
  readonly isMandatory: boolean;
}

/** @name FrameSupportWeightsPays (24) */
export interface FrameSupportWeightsPays extends Enum {
  readonly isYes: boolean;
  readonly isNo: boolean;
}

/** @name SpRuntimeDispatchError (25) */
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

/** @name SpRuntimeTokenError (26) */
export interface SpRuntimeTokenError extends Enum {
  readonly isNoFunds: boolean;
  readonly isWouldDie: boolean;
  readonly isBelowMinimum: boolean;
  readonly isCannotCreate: boolean;
  readonly isUnknownAsset: boolean;
  readonly isFrozen: boolean;
  readonly isUnsupported: boolean;
}

/** @name SpRuntimeArithmeticError (27) */
export interface SpRuntimeArithmeticError extends Enum {
  readonly isUnderflow: boolean;
  readonly isOverflow: boolean;
  readonly isDivisionByZero: boolean;
}

/** @name FrameSupportTraitsTokensMiscBalanceStatus (31) */
export interface FrameSupportTraitsTokensMiscBalanceStatus extends Enum {
  readonly isFree: boolean;
  readonly isReserved: boolean;
}

/** @name PalletElectionProviderMultiPhaseElectionCompute (33) */
export interface PalletElectionProviderMultiPhaseElectionCompute extends Enum {
  readonly isOnChain: boolean;
  readonly isSigned: boolean;
  readonly isUnsigned: boolean;
  readonly isEmergency: boolean;
}

/** @name PalletDemocracyVoteThreshold (40) */
export interface PalletDemocracyVoteThreshold extends Enum {
  readonly isSuperMajorityApprove: boolean;
  readonly isSuperMajorityAgainst: boolean;
  readonly isSimpleMajority: boolean;
}

/** @name PalletCollectiveInstance1 (44) */
export type PalletCollectiveInstance1 = Null;

/** @name PalletCollectiveInstance2 (46) */
export type PalletCollectiveInstance2 = Null;

/** @name PalletMembershipInstance1 (51) */
export type PalletMembershipInstance1 = Null;

/** @name SpFinalityGrandpaAppPublic (55) */
export interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {}

/** @name SpCoreEd25519Public (56) */
export interface SpCoreEd25519Public extends U8aFixed {}

/** @name PalletImOnlineSr25519AppSr25519Public (61) */
export interface PalletImOnlineSr25519AppSr25519Public extends SpCoreSr25519Public {}

/** @name SpCoreSr25519Public (62) */
export interface SpCoreSr25519Public extends U8aFixed {}

/** @name PalletStakingExposure (65) */
export interface PalletStakingExposure extends Struct {
  readonly total: Compact<u128>;
  readonly own: Compact<u128>;
  readonly others: Vec<PalletStakingIndividualExposure>;
}

/** @name PalletStakingIndividualExposure (68) */
export interface PalletStakingIndividualExposure extends Struct {
  readonly who: AccountId32;
  readonly value: Compact<u128>;
}

/** @name PalletSocietyDefaultInstance (73) */
export type PalletSocietyDefaultInstance = Null;

/** @name NodeRuntimeProxyType (80) */
export interface NodeRuntimeProxyType extends Enum {
  readonly isAny: boolean;
  readonly isNonTransfer: boolean;
  readonly isGovernance: boolean;
  readonly isStaking: boolean;
}

/** @name PalletMultisigTimepoint (83) */
export interface PalletMultisigTimepoint extends Struct {
  readonly height: u32;
  readonly index: u32;
}

/** @name FrameSystemPhase (97) */
export interface FrameSystemPhase extends Enum {
  readonly isApplyExtrinsic: boolean;
  readonly asApplyExtrinsic: u32;
  readonly isFinalization: boolean;
  readonly isInitialization: boolean;
}

/** @name FrameSystemLastRuntimeUpgradeInfo (100) */
export interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
  readonly specVersion: Compact<u32>;
  readonly specName: Text;
}

/** @name FrameSystemLimitsBlockWeights (108) */
export interface FrameSystemLimitsBlockWeights extends Struct {
  readonly baseBlock: u64;
  readonly maxBlock: u64;
  readonly perClass: {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  } & Struct;
}

/** @name FrameSystemLimitsWeightsPerClass (110) */
export interface FrameSystemLimitsWeightsPerClass extends Struct {
  readonly baseExtrinsic: u64;
  readonly maxExtrinsic: Option<u64>;
  readonly maxTotal: Option<u64>;
  readonly reserved: Option<u64>;
}

/** @name FrameSystemLimitsBlockLength (112) */
export interface FrameSystemLimitsBlockLength extends Struct {
  readonly max: {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  } & Struct;
}

/** @name FrameSupportWeightsRuntimeDbWeight (114) */
export interface FrameSupportWeightsRuntimeDbWeight extends Struct {
  readonly read: u64;
  readonly write: u64;
}

/** @name SpVersionRuntimeVersion (115) */
export interface SpVersionRuntimeVersion extends Struct {
  readonly specName: Text;
  readonly implName: Text;
  readonly authoringVersion: u32;
  readonly specVersion: u32;
  readonly implVersion: u32;
  readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
  readonly transactionVersion: u32;
}

/** @name SpConsensusSlotsEquivocationProof (125) */
export interface SpConsensusSlotsEquivocationProof extends Struct {
  readonly offender: U8aFixed;
  readonly slot: u64;
  readonly firstHeader: {
    readonly parentHash: H256;
    readonly number: Compact<u32>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeGenericDigest;
  } & Struct;
  readonly secondHeader: {
    readonly parentHash: H256;
    readonly number: Compact<u32>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeGenericDigest;
  } & Struct;
}

/** @name SpRuntimeGenericHeader (126) */
export interface SpRuntimeGenericHeader extends Struct {
  readonly parentHash: H256;
  readonly number: Compact<u32>;
  readonly stateRoot: H256;
  readonly extrinsicsRoot: H256;
  readonly digest: {
    readonly logs: Vec<SpRuntimeGenericDigestDigestItem>;
  } & Struct;
}

/** @name SpConsensusBabeAppPublic (127) */
export interface SpConsensusBabeAppPublic extends SpCoreSr25519Public {}

/** @name SpSessionMembershipProof (129) */
export interface SpSessionMembershipProof extends Struct {
  readonly session: u32;
  readonly trieNodes: Vec<Bytes>;
  readonly validatorCount: u32;
}

/** @name SpConsensusBabeDigestsNextConfigDescriptor (130) */
export interface SpConsensusBabeDigestsNextConfigDescriptor extends Enum {
  readonly isUnused0: boolean;
  readonly isV1: boolean;
  readonly asV1: {
    readonly c: ITuple<[u64, u64]>;
    readonly allowedSlots: SpConsensusBabeAllowedSlots;
  } & Struct;
}

/** @name SpConsensusBabeAllowedSlots (132) */
export interface SpConsensusBabeAllowedSlots extends Enum {
  readonly isPrimarySlots: boolean;
  readonly isPrimaryAndSecondaryPlainSlots: boolean;
  readonly isPrimaryAndSecondaryVrfSlots: boolean;
}

/** @name PalletElectionProviderMultiPhaseRawSolution (142) */
export interface PalletElectionProviderMultiPhaseRawSolution extends Struct {
  readonly compact: {
    readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
    readonly votes2: Vec<ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<PerU16>]>, Compact<u16>]>>;
    readonly votes3: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes4: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes5: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes6: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes7: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes8: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes9: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes10: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes11: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes12: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes13: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes14: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes15: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes16: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  } & Struct;
  readonly score: Vec<u128>;
  readonly round: u32;
}

/** @name NodeRuntimeNposCompactSolution16 (143) */
export interface NodeRuntimeNposCompactSolution16 extends Struct {
  readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
  readonly votes2: Vec<ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<PerU16>]>, Compact<u16>]>>;
  readonly votes3: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes4: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes5: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes6: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes7: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes8: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes9: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes10: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes11: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes12: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes13: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes14: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes15: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  readonly votes16: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
}

/** @name PalletElectionProviderMultiPhaseSolutionOrSnapshotSize (195) */
export interface PalletElectionProviderMultiPhaseSolutionOrSnapshotSize extends Struct {
  readonly voters: Compact<u32>;
  readonly targets: Compact<u32>;
}

/** @name SpNposElectionsSupport (199) */
export interface SpNposElectionsSupport extends Struct {
  readonly total: u128;
  readonly voters: Vec<ITuple<[AccountId32, u128]>>;
}

/** @name PalletStakingRewardDestination (201) */
export interface PalletStakingRewardDestination extends Enum {
  readonly isStaked: boolean;
  readonly isStash: boolean;
  readonly isController: boolean;
  readonly isAccount: boolean;
  readonly asAccount: AccountId32;
  readonly isNone: boolean;
}

/** @name PalletStakingValidatorPrefs (202) */
export interface PalletStakingValidatorPrefs extends Struct {
  readonly commission: Compact<Perbill>;
  readonly blocked: bool;
}

/** @name NodeRuntimeSessionKeys (208) */
export interface NodeRuntimeSessionKeys extends Struct {
  readonly grandpa: U8aFixed;
  readonly babe: U8aFixed;
  readonly imOnline: U8aFixed;
  readonly authorityDiscovery: U8aFixed;
}

/** @name SpAuthorityDiscoveryAppPublic (209) */
export interface SpAuthorityDiscoveryAppPublic extends SpCoreSr25519Public {}

/** @name PalletDemocracyVoteAccountVote (211) */
export interface PalletDemocracyVoteAccountVote extends Enum {
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

/** @name PalletDemocracyConviction (213) */
export interface PalletDemocracyConviction extends Enum {
  readonly isNone: boolean;
  readonly isLocked1X: boolean;
  readonly isLocked2X: boolean;
  readonly isLocked3X: boolean;
  readonly isLocked4X: boolean;
  readonly isLocked5X: boolean;
  readonly isLocked6X: boolean;
}

/** @name PalletElectionsPhragmenRenouncing (218) */
export interface PalletElectionsPhragmenRenouncing extends Enum {
  readonly isMember: boolean;
  readonly isRunnerUp: boolean;
  readonly isCandidate: boolean;
  readonly asCandidate: Compact<u32>;
}

/** @name SpFinalityGrandpaEquivocationProof (221) */
export interface SpFinalityGrandpaEquivocationProof extends Struct {
  readonly setId: u64;
  readonly equivocation: SpFinalityGrandpaEquivocation;
}

/** @name SpFinalityGrandpaEquivocation (222) */
export interface SpFinalityGrandpaEquivocation extends Enum {
  readonly isPrevote: boolean;
  readonly asPrevote: {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
  } & Struct;
  readonly isPrecommit: boolean;
  readonly asPrecommit: {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
  } & Struct;
}

/** @name FinalityGrandpaPrevote (224) */
export interface FinalityGrandpaPrevote extends Struct {
  readonly targetHash: H256;
  readonly targetNumber: u32;
}

/** @name SpFinalityGrandpaAppSignature (225) */
export interface SpFinalityGrandpaAppSignature extends SpCoreEd25519Signature {}

/** @name SpCoreEd25519Signature (226) */
export interface SpCoreEd25519Signature extends U8aFixed {}

/** @name FinalityGrandpaPrecommit (230) */
export interface FinalityGrandpaPrecommit extends Struct {
  readonly targetHash: H256;
  readonly targetNumber: u32;
}

/** @name PalletImOnlineHeartbeat (236) */
export interface PalletImOnlineHeartbeat extends Struct {
  readonly blockNumber: u32;
  readonly networkState: {
    readonly peerId: Bytes;
    readonly externalAddresses: Vec<Bytes>;
  } & Struct;
  readonly sessionIndex: u32;
  readonly authorityIndex: u32;
  readonly validatorsLen: u32;
}

/** @name SpCoreOffchainOpaqueNetworkState (237) */
export interface SpCoreOffchainOpaqueNetworkState extends Struct {
  readonly peerId: Bytes;
  readonly externalAddresses: Vec<Bytes>;
}

/** @name PalletImOnlineSr25519AppSr25519Signature (241) */
export interface PalletImOnlineSr25519AppSr25519Signature extends SpCoreSr25519Signature {}

/** @name SpCoreSr25519Signature (242) */
export interface SpCoreSr25519Signature extends U8aFixed {}

/** @name PalletIdentityTypesIdentityInfo (244) */
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

/** @name PalletIdentityTypesIdentityField (281) */
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

/** @name PalletIdentityTypesJudgement (282) */
export interface PalletIdentityTypesJudgement extends Enum {
  readonly isUnknown: boolean;
  readonly isFeePaid: boolean;
  readonly asFeePaid: u128;
  readonly isReasonable: boolean;
  readonly isKnownGood: boolean;
  readonly isOutOfDate: boolean;
  readonly isLowQuality: boolean;
  readonly isErroneous: boolean;
}

/** @name PalletSocietyJudgement (284) */
export interface PalletSocietyJudgement extends Enum {
  readonly isRebid: boolean;
  readonly isReject: boolean;
  readonly isApprove: boolean;
}

/** @name PalletVestingVestingInfo (287) */
export interface PalletVestingVestingInfo extends Struct {
  readonly locked: u128;
  readonly perBlock: u128;
  readonly startingBlock: u32;
}

/** @name PalletAssetsTypesDestroyWitness (297) */
export interface PalletAssetsTypesDestroyWitness extends Struct {
  readonly accounts: Compact<u32>;
  readonly sufficients: Compact<u32>;
  readonly approvals: Compact<u32>;
}

/** @name PalletUniquesTypesDestroyWitness (303) */
export interface PalletUniquesTypesDestroyWitness extends Struct {
  readonly instances: Compact<u32>;
  readonly instanceMetadatas: Compact<u32>;
  readonly attributes: Compact<u32>;
}

/** @name SpTransactionStorageProofTransactionStorageProof (306) */
export interface SpTransactionStorageProofTransactionStorageProof extends Struct {
  readonly chunk: Bytes;
  readonly proof: Vec<Bytes>;
}

/** @name SpConsensusBabeBabeEpochConfiguration (311) */
export interface SpConsensusBabeBabeEpochConfiguration extends Struct {
  readonly c: ITuple<[u64, u64]>;
  readonly allowedSlots: SpConsensusBabeAllowedSlots;
}

/** @name PalletAuthorshipUncleEntryItem (314) */
export interface PalletAuthorshipUncleEntryItem extends Enum {
  readonly isInclusionHeight: boolean;
  readonly asInclusionHeight: u32;
  readonly isUncle: boolean;
  readonly asUncle: ITuple<[H256, Option<AccountId32>]>;
}

/** @name FrameSupportStorageWeakBoundedVec (318) */
export interface FrameSupportStorageWeakBoundedVec extends Vec<PalletBalancesBalanceLock> {}

/** @name PalletBalancesBalanceLock (319) */
export interface PalletBalancesBalanceLock extends Struct {
  readonly id: U8aFixed;
  readonly amount: u128;
  readonly reasons: PalletBalancesReasons;
}

/** @name PalletBalancesReasons (320) */
export interface PalletBalancesReasons extends Enum {
  readonly isFee: boolean;
  readonly isMisc: boolean;
  readonly isAll: boolean;
}

/** @name PalletBalancesReserveData (323) */
export interface PalletBalancesReserveData extends Struct {
  readonly id: U8aFixed;
  readonly amount: u128;
}

/** @name PalletBalancesReleases (325) */
export interface PalletBalancesReleases extends Enum {
  readonly isV100: boolean;
  readonly isV200: boolean;
}

/** @name PalletTransactionPaymentReleases (328) */
export interface PalletTransactionPaymentReleases extends Enum {
  readonly isV1Ancient: boolean;
  readonly isV2: boolean;
}

/** @name FrameSupportWeightsWeightToFeeCoefficient (330) */
export interface FrameSupportWeightsWeightToFeeCoefficient extends Struct {
  readonly coeffInteger: u128;
  readonly coeffFrac: Perbill;
  readonly negative: bool;
  readonly degree: u8;
}

/** @name PalletElectionProviderMultiPhasePhase (331) */
export interface PalletElectionProviderMultiPhasePhase extends Enum {
  readonly isOff: boolean;
  readonly isSigned: boolean;
  readonly isUnsigned: boolean;
  readonly asUnsigned: ITuple<[bool, u32]>;
  readonly isEmergency: boolean;
}

/** @name PalletElectionProviderMultiPhaseReadySolution (333) */
export interface PalletElectionProviderMultiPhaseReadySolution extends Struct {
  readonly supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>;
  readonly score: Vec<u128>;
  readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
}

/** @name PalletElectionProviderMultiPhaseRoundSnapshot (334) */
export interface PalletElectionProviderMultiPhaseRoundSnapshot extends Struct {
  readonly voters: Vec<ITuple<[AccountId32, u64, Vec<AccountId32>]>>;
  readonly targets: Vec<AccountId32>;
}

/** @name FrameSupportStorageBoundedBTreeMap (337) */
export interface FrameSupportStorageBoundedBTreeMap extends BTreeMap<Vec<u128>, u32> {}

/** @name PalletElectionProviderMultiPhaseSignedSignedSubmission (341) */
export interface PalletElectionProviderMultiPhaseSignedSignedSubmission extends Struct {
  readonly who: AccountId32;
  readonly deposit: u128;
  readonly solution: {
    readonly compact: NodeRuntimeNposCompactSolution16;
    readonly score: Vec<u128>;
    readonly round: u32;
  } & Struct;
}

/** @name PalletStakingStakingLedger (343) */
export interface PalletStakingStakingLedger extends Struct {
  readonly stash: AccountId32;
  readonly total: Compact<u128>;
  readonly active: Compact<u128>;
  readonly unlocking: Vec<PalletStakingUnlockChunk>;
  readonly claimedRewards: Vec<u32>;
}

/** @name PalletStakingUnlockChunk (345) */
export interface PalletStakingUnlockChunk extends Struct {
  readonly value: Compact<u128>;
  readonly era: Compact<u32>;
}

/** @name PalletStakingNominations (346) */
export interface PalletStakingNominations extends Struct {
  readonly targets: Vec<AccountId32>;
  readonly submittedIn: u32;
  readonly suppressed: bool;
}

/** @name PalletStakingActiveEraInfo (347) */
export interface PalletStakingActiveEraInfo extends Struct {
  readonly index: u32;
  readonly start: Option<u64>;
}

/** @name PalletStakingEraRewardPoints (348) */
export interface PalletStakingEraRewardPoints extends Struct {
  readonly total: u32;
  readonly individual: BTreeMap<AccountId32, u32>;
}

/** @name PalletStakingForcing (352) */
export interface PalletStakingForcing extends Enum {
  readonly isNotForcing: boolean;
  readonly isForceNew: boolean;
  readonly isForceNone: boolean;
  readonly isForceAlways: boolean;
}

/** @name PalletStakingUnappliedSlash (354) */
export interface PalletStakingUnappliedSlash extends Struct {
  readonly validator: AccountId32;
  readonly own: u128;
  readonly others: Vec<ITuple<[AccountId32, u128]>>;
  readonly reporters: Vec<AccountId32>;
  readonly payout: u128;
}

/** @name PalletStakingSlashingSlashingSpans (356) */
export interface PalletStakingSlashingSlashingSpans extends Struct {
  readonly spanIndex: u32;
  readonly lastStart: u32;
  readonly lastNonzeroSlash: u32;
  readonly prior: Vec<u32>;
}

/** @name PalletStakingSlashingSpanRecord (357) */
export interface PalletStakingSlashingSpanRecord extends Struct {
  readonly slashed: u128;
  readonly paidOut: u128;
}

/** @name PalletStakingReleases (358) */
export interface PalletStakingReleases extends Enum {
  readonly isV100Ancient: boolean;
  readonly isV200: boolean;
  readonly isV300: boolean;
  readonly isV400: boolean;
  readonly isV500: boolean;
  readonly isV600: boolean;
  readonly isV700: boolean;
}

/** @name SpCoreCryptoKeyTypeId (363) */
export interface SpCoreCryptoKeyTypeId extends U8aFixed {}

/** @name PalletDemocracyPreimageStatus (368) */
export interface PalletDemocracyPreimageStatus extends Enum {
  readonly isMissing: boolean;
  readonly asMissing: u32;
  readonly isAvailable: boolean;
  readonly asAvailable: {
    readonly data: Bytes;
    readonly provider: AccountId32;
    readonly deposit: u128;
    readonly since: u32;
    readonly expiry: Option<u32>;
  } & Struct;
}

/** @name PalletDemocracyTypesReferendumInfo (369) */
export interface PalletDemocracyTypesReferendumInfo extends Enum {
  readonly isOngoing: boolean;
  readonly asOngoing: PalletDemocracyTypesReferendumStatus;
  readonly isFinished: boolean;
  readonly asFinished: {
    readonly approved: bool;
    readonly end: u32;
  } & Struct;
}

/** @name PalletDemocracyTypesReferendumStatus (370) */
export interface PalletDemocracyTypesReferendumStatus extends Struct {
  readonly end: u32;
  readonly proposalHash: H256;
  readonly threshold: PalletDemocracyVoteThreshold;
  readonly delay: u32;
  readonly tally: {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  } & Struct;
}

/** @name PalletDemocracyTypesTally (371) */
export interface PalletDemocracyTypesTally extends Struct {
  readonly ayes: u128;
  readonly nays: u128;
  readonly turnout: u128;
}

/** @name PalletDemocracyVoteVoting (372) */
export interface PalletDemocracyVoteVoting extends Enum {
  readonly isDirect: boolean;
  readonly asDirect: {
    readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
    readonly delegations: PalletDemocracyTypesDelegations;
    readonly prior: PalletDemocracyVotePriorLock;
  } & Struct;
  readonly isDelegating: boolean;
  readonly asDelegating: {
    readonly balance: u128;
    readonly target: AccountId32;
    readonly conviction: PalletDemocracyConviction;
    readonly delegations: PalletDemocracyTypesDelegations;
    readonly prior: PalletDemocracyVotePriorLock;
  } & Struct;
}

/** @name PalletDemocracyTypesDelegations (375) */
export interface PalletDemocracyTypesDelegations extends Struct {
  readonly votes: u128;
  readonly capital: u128;
}

/** @name PalletDemocracyVotePriorLock (376) */
export interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

/** @name PalletDemocracyReleases (379) */
export interface PalletDemocracyReleases extends Enum {
  readonly isV1: boolean;
}

/** @name PalletCollectiveVotes (382) */
export interface PalletCollectiveVotes extends Struct {
  readonly index: u32;
  readonly threshold: u32;
  readonly ayes: Vec<AccountId32>;
  readonly nays: Vec<AccountId32>;
  readonly end: u32;
}

/** @name PalletElectionsPhragmenSeatHolder (387) */
export interface PalletElectionsPhragmenSeatHolder extends Struct {
  readonly who: AccountId32;
  readonly stake: u128;
  readonly deposit: u128;
}

/** @name PalletElectionsPhragmenVoter (388) */
export interface PalletElectionsPhragmenVoter extends Struct {
  readonly votes: Vec<AccountId32>;
  readonly stake: u128;
  readonly deposit: u128;
}

/** @name PalletGrandpaStoredState (391) */
export interface PalletGrandpaStoredState extends Enum {
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

/** @name PalletGrandpaStoredPendingChange (392) */
export interface PalletGrandpaStoredPendingChange extends Struct {
  readonly scheduledAt: u32;
  readonly delay: u32;
  readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
  readonly forced: Option<u32>;
}

/** @name PalletTreasuryProposal (394) */
export interface PalletTreasuryProposal extends Struct {
  readonly proposer: AccountId32;
  readonly value: u128;
  readonly beneficiary: AccountId32;
  readonly bond: u128;
}

/** @name FrameSupportPalletId (397) */
export interface FrameSupportPalletId extends U8aFixed {}

/** @name PalletContractsWasmPrefabWasmModule (399) */
export interface PalletContractsWasmPrefabWasmModule extends Struct {
  readonly instructionWeightsVersion: Compact<u32>;
  readonly initial: Compact<u32>;
  readonly maximum: Compact<u32>;
  readonly refcount: Compact<u64>;
  readonly reserved: Option<Null>;
  readonly code: Bytes;
  readonly originalCodeLen: u32;
}

/** @name PalletContractsStorageContractInfo (401) */
export interface PalletContractsStorageContractInfo extends Enum {
  readonly isAlive: boolean;
  readonly asAlive: PalletContractsStorageRawAliveContractInfo;
  readonly isTombstone: boolean;
  readonly asTombstone: H256;
}

/** @name PalletContractsStorageRawAliveContractInfo (402) */
export interface PalletContractsStorageRawAliveContractInfo extends Struct {
  readonly trieId: Bytes;
  readonly storageSize: u32;
  readonly pairCount: u32;
  readonly codeHash: H256;
  readonly rentAllowance: u128;
  readonly rentPaid: u128;
  readonly deductBlock: u32;
  readonly lastWrite: Option<u32>;
  readonly reserved: Option<Null>;
}

/** @name SpRuntimeTraitsBlakeTwo256 (404) */
export type SpRuntimeTraitsBlakeTwo256 = Null;

/** @name PalletContractsStorageDeletedContract (406) */
export interface PalletContractsStorageDeletedContract extends Struct {
  readonly pairCount: u32;
  readonly trieId: Bytes;
}

/** @name PalletContractsSchedule (407) */
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

/** @name PalletContractsScheduleLimits (408) */
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

/** @name PalletContractsScheduleInstructionWeights (409) */
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

/** @name PalletContractsScheduleHostFnWeights (410) */
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

/** @name SpStakingOffenceOffenceDetails (415) */
export interface SpStakingOffenceOffenceDetails extends Struct {
  readonly offender: ITuple<[AccountId32, PalletStakingExposure]>;
  readonly reporters: Vec<AccountId32>;
}

/** @name PalletIdentityTypesRegistration (416) */
export interface PalletIdentityTypesRegistration extends Struct {
  readonly judgements: Vec<ITuple<[u32, PalletIdentityTypesJudgement]>>;
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

/** @name PalletIdentityTypesRegistrarInfo (424) */
export interface PalletIdentityTypesRegistrarInfo extends Struct {
  readonly account: AccountId32;
  readonly fee: u128;
  readonly fields: IdentityFields;
}

/** @name PalletSocietyBid (428) */
export interface PalletSocietyBid extends Struct {
  readonly who: AccountId32;
  readonly kind: PalletSocietyBidKind;
  readonly value: u128;
}

/** @name PalletSocietyBidKind (429) */
export interface PalletSocietyBidKind extends Enum {
  readonly isDeposit: boolean;
  readonly asDeposit: u128;
  readonly isVouch: boolean;
  readonly asVouch: ITuple<[AccountId32, u128]>;
}

/** @name PalletSocietyVouchingStatus (431) */
export interface PalletSocietyVouchingStatus extends Enum {
  readonly isVouching: boolean;
  readonly isBanned: boolean;
}

/** @name PalletSocietyVote (434) */
export interface PalletSocietyVote extends Enum {
  readonly isSkeptic: boolean;
  readonly isReject: boolean;
  readonly isApprove: boolean;
}

/** @name PalletRecoveryRecoveryConfig (436) */
export interface PalletRecoveryRecoveryConfig extends Struct {
  readonly delayPeriod: u32;
  readonly deposit: u128;
  readonly friends: Vec<AccountId32>;
  readonly threshold: u16;
}

/** @name PalletRecoveryActiveRecovery (437) */
export interface PalletRecoveryActiveRecovery extends Struct {
  readonly created: u32;
  readonly deposit: u128;
  readonly friends: Vec<AccountId32>;
}

/** @name PalletSchedulerScheduledV2 (442) */
export interface PalletSchedulerScheduledV2 extends Struct {
  readonly maybeId: Option<Bytes>;
  readonly priority: u8;
  readonly call: Call;
  readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
  readonly origin: NodeRuntimeOriginCaller;
}

/** @name NodeRuntimeOriginCaller (443) */
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

/** @name FrameSystemRawOrigin (444) */
export interface FrameSystemRawOrigin extends Enum {
  readonly isRoot: boolean;
  readonly isSigned: boolean;
  readonly asSigned: AccountId32;
  readonly isNone: boolean;
}

/** @name PalletCollectiveRawOriginInstance1 (445) */
export interface PalletCollectiveRawOriginInstance1 extends Enum {
  readonly isMembers: boolean;
  readonly asMembers: ITuple<[u32, u32]>;
  readonly isMember: boolean;
  readonly asMember: AccountId32;
  readonly isPhantom: boolean;
}

/** @name PalletCollectiveRawOriginInstance2 (446) */
export interface PalletCollectiveRawOriginInstance2 extends Enum {
  readonly isMembers: boolean;
  readonly asMembers: ITuple<[u32, u32]>;
  readonly isMember: boolean;
  readonly asMember: AccountId32;
  readonly isPhantom: boolean;
}

/** @name SpCoreVoid (447) */
export type SpCoreVoid = Null;

/** @name PalletSchedulerReleases (448) */
export interface PalletSchedulerReleases extends Enum {
  readonly isV1: boolean;
  readonly isV2: boolean;
}

/** @name PalletProxyProxyDefinition (452) */
export interface PalletProxyProxyDefinition extends Struct {
  readonly delegate: AccountId32;
  readonly proxyType: NodeRuntimeProxyType;
  readonly delay: u32;
}

/** @name PalletProxyAnnouncement (456) */
export interface PalletProxyAnnouncement extends Struct {
  readonly real: AccountId32;
  readonly callHash: H256;
  readonly height: u32;
}

/** @name PalletMultisigMultisig (459) */
export interface PalletMultisigMultisig extends Struct {
  readonly when: {
    readonly height: u32;
    readonly index: u32;
  } & Struct;
  readonly deposit: u128;
  readonly depositor: AccountId32;
  readonly approvals: Vec<AccountId32>;
}

/** @name PalletBountiesBounty (462) */
export interface PalletBountiesBounty extends Struct {
  readonly proposer: AccountId32;
  readonly value: u128;
  readonly fee: u128;
  readonly curatorDeposit: u128;
  readonly bond: u128;
  readonly status: PalletBountiesBountyStatus;
}

/** @name PalletBountiesBountyStatus (463) */
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

/** @name PalletTipsOpenTip (465) */
export interface PalletTipsOpenTip extends Struct {
  readonly reason: H256;
  readonly who: AccountId32;
  readonly finder: AccountId32;
  readonly deposit: u128;
  readonly closes: Option<u32>;
  readonly tips: Vec<ITuple<[AccountId32, u128]>>;
  readonly findersFee: bool;
}

/** @name PalletAssetsTypesAssetDetails (467) */
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

/** @name PalletAssetsTypesAssetBalance (468) */
export interface PalletAssetsTypesAssetBalance extends Struct {
  readonly balance: u64;
  readonly isFrozen: bool;
  readonly sufficient: bool;
  readonly extra: Null;
}

/** @name PalletAssetsTypesApproval (470) */
export interface PalletAssetsTypesApproval extends Struct {
  readonly amount: u64;
  readonly deposit: u128;
}

/** @name PalletAssetsTypesAssetMetadata (471) */
export interface PalletAssetsTypesAssetMetadata extends Struct {
  readonly deposit: u128;
  readonly name: Bytes;
  readonly symbol: Bytes;
  readonly decimals: u8;
  readonly isFrozen: bool;
}

/** @name PalletLotteryLotteryConfig (473) */
export interface PalletLotteryLotteryConfig extends Struct {
  readonly price: u128;
  readonly start: u32;
  readonly length: u32;
  readonly delay: u32;
  readonly repeat: bool;
}

/** @name PalletGiltPalletGiltBid (478) */
export interface PalletGiltPalletGiltBid extends Struct {
  readonly amount: u128;
  readonly who: AccountId32;
}

/** @name PalletGiltPalletActiveGiltsTotal (479) */
export interface PalletGiltPalletActiveGiltsTotal extends Struct {
  readonly frozen: u128;
  readonly proportion: Perquintill;
  readonly index: u32;
  readonly target: Perquintill;
}

/** @name PalletGiltPalletActiveGilt (480) */
export interface PalletGiltPalletActiveGilt extends Struct {
  readonly proportion: Perquintill;
  readonly amount: u128;
  readonly who: AccountId32;
  readonly expiry: u32;
}

/** @name PalletUniquesTypesClassDetails (482) */
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

/** @name PalletUniquesTypesInstanceDetails (484) */
export interface PalletUniquesTypesInstanceDetails extends Struct {
  readonly owner: AccountId32;
  readonly approved: Option<AccountId32>;
  readonly isFrozen: bool;
  readonly deposit: u128;
}

/** @name PalletUniquesTypesClassMetadata (485) */
export interface PalletUniquesTypesClassMetadata extends Struct {
  readonly deposit: u128;
  readonly data: Bytes;
  readonly isFrozen: bool;
}

/** @name PalletUniquesTypesInstanceMetadata (486) */
export interface PalletUniquesTypesInstanceMetadata extends Struct {
  readonly deposit: u128;
  readonly data: Bytes;
  readonly isFrozen: bool;
}

/** @name PalletTransactionStorageTransactionInfo (491) */
export interface PalletTransactionStorageTransactionInfo extends Struct {
  readonly chunkRoot: H256;
  readonly contentHash: H256;
  readonly size_: u32;
  readonly blockChunks: u32;
}

/** @name FrameSystemExtensionsCheckSpecVersion (494) */
export type FrameSystemExtensionsCheckSpecVersion = Null;

/** @name FrameSystemExtensionsCheckTxVersion (495) */
export type FrameSystemExtensionsCheckTxVersion = Null;

/** @name FrameSystemExtensionsCheckGenesis (496) */
export type FrameSystemExtensionsCheckGenesis = Null;

/** @name FrameSystemExtensionsCheckNonce (499) */
export interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

/** @name FrameSystemExtensionsCheckWeight (500) */
export type FrameSystemExtensionsCheckWeight = Null;

/** @name PalletTransactionPaymentChargeTransactionPayment (501) */
export interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

export type PHANTOM_PORTABLE_LOOKUP = 'PortableRegistryLookup';
