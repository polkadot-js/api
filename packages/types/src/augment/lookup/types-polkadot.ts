// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BitVec, Bytes, Compact, Enum, Null, Option, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types';
import type { AccountId32, H256, PerU16 } from '@polkadot/types/interfaces/runtime';
import type { ITuple } from '@polkadot/types/types';

declare module '@polkadot/types/lookup' {

  /** @name PolkadotRuntimeCommonClaimsEthereumAddress (66) */
  export interface PolkadotRuntimeCommonClaimsEthereumAddress extends U8aFixed {}

  /** @name PolkadotRuntimeProxyType (72) */
  export interface PolkadotRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isUnused4: boolean;
    readonly isIdentityJudgement: boolean;
    readonly isCancelProxy: boolean;
    readonly isAuction: boolean;
  }

  /** @name PolkadotPrimitivesV1CandidateReceipt (82) */
  export interface PolkadotPrimitivesV1CandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV1CandidateDescriptor;
    readonly commitmentsHash: H256;
  }

  /** @name PolkadotPrimitivesV1CandidateDescriptor (83) */
  export interface PolkadotPrimitivesV1CandidateDescriptor extends Struct {
    readonly paraId: u32;
    readonly relayParent: H256;
    readonly collator: PolkadotPrimitivesV0CollatorAppPublic;
    readonly persistedValidationDataHash: H256;
    readonly povHash: H256;
    readonly erasureRoot: H256;
    readonly signature: PolkadotPrimitivesV0CollatorAppSignature;
    readonly paraHead: H256;
    readonly validationCodeHash: H256;
  }

  /** @name PolkadotPrimitivesV0CollatorAppPublic (85) */
  export interface PolkadotPrimitivesV0CollatorAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotPrimitivesV0CollatorAppSignature (86) */
  export interface PolkadotPrimitivesV0CollatorAppSignature extends SpCoreSr25519Signature {}

  /** @name XcmV2TraitsOutcome (95) */
  export interface XcmV2TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: u64;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[u64, XcmV2TraitsError]>;
    readonly isError: boolean;
    readonly asError: XcmV2TraitsError;
  }

  /** @name XcmV2TraitsError (96) */
  export interface XcmV2TraitsError extends Enum {
    readonly isUndefined: boolean;
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isUnhandledXcmMessage: boolean;
    readonly isUnhandledEffect: boolean;
    readonly isEscalationOfPrivilege: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isDestinationBufferOverflow: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isFailedToDecode: boolean;
    readonly isBadOrigin: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isWildcard: boolean;
    readonly isTooMuchWeightRequired: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isBarrier: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isTooExpensive: boolean;
    readonly isAssetNotFound: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isRecursionLimitReached: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownWeightRequired: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnknownClaim: boolean;
    readonly isInvalidLocation: boolean;
  }

  /** @name PolkadotParachainPrimitivesHrmpChannelId (98) */
  export interface PolkadotParachainPrimitivesHrmpChannelId extends Struct {
    readonly sender: u32;
    readonly recipient: u32;
  }

  /** @name PolkadotRuntimeSessionKeys (161) */
  export interface PolkadotRuntimeSessionKeys extends Struct {
    readonly grandpa: SpFinalityGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
    readonly paraValidator: PolkadotPrimitivesV0ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV1AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
  }

  /** @name PolkadotPrimitivesV0ValidatorAppPublic (162) */
  export interface PolkadotPrimitivesV0ValidatorAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotPrimitivesV1AssignmentAppPublic (163) */
  export interface PolkadotPrimitivesV1AssignmentAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotRuntimeCommonClaimsEcdsaSignature (195) */
  export interface PolkadotRuntimeCommonClaimsEcdsaSignature extends U8aFixed {}

  /** @name PolkadotRuntimeCommonClaimsStatementKind (200) */
  export interface PolkadotRuntimeCommonClaimsStatementKind extends Enum {
    readonly isRegular: boolean;
    readonly isSaft: boolean;
  }

  /** @name PolkadotRuntimeNposCompactSolution16 (253) */
  export interface PolkadotRuntimeNposCompactSolution16 extends Struct {
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

  /** @name PolkadotPrimitivesV1InherentData (314) */
  export interface PolkadotPrimitivesV1InherentData extends Struct {
    readonly bitfields: Vec<PolkadotPrimitivesV1SignedUncheckedSigned>;
    readonly backedCandidates: Vec<PolkadotPrimitivesV1BackedCandidate>;
    readonly disputes: Vec<PolkadotPrimitivesV1DisputeStatementSet>;
    readonly parentHeader: SpRuntimeGenericHeader;
  }

  /** @name PolkadotPrimitivesV1SignedUncheckedSigned (316) */
  export interface PolkadotPrimitivesV1SignedUncheckedSigned extends Struct {
    readonly payload: BitVec;
    readonly validatorIndex: u32;
    readonly signature: PolkadotPrimitivesV0ValidatorAppSignature;
  }

  /** @name BitvecOrderLsb0 (319) */
  export type BitvecOrderLsb0 = Null;

  /** @name PolkadotPrimitivesV0ValidatorAppSignature (321) */
  export interface PolkadotPrimitivesV0ValidatorAppSignature extends SpCoreSr25519Signature {}

  /** @name PolkadotPrimitivesV1BackedCandidate (323) */
  export interface PolkadotPrimitivesV1BackedCandidate extends Struct {
    readonly candidate: PolkadotPrimitivesV1CommittedCandidateReceipt;
    readonly validityVotes: Vec<PolkadotPrimitivesV0ValidityAttestation>;
    readonly validatorIndices: BitVec;
  }

  /** @name PolkadotPrimitivesV1CommittedCandidateReceipt (324) */
  export interface PolkadotPrimitivesV1CommittedCandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV1CandidateDescriptor;
    readonly commitments: PolkadotPrimitivesV1CandidateCommitments;
  }

  /** @name PolkadotPrimitivesV1CandidateCommitments (325) */
  export interface PolkadotPrimitivesV1CandidateCommitments extends Struct {
    readonly upwardMessages: Vec<Bytes>;
    readonly horizontalMessages: Vec<PolkadotCorePrimitivesOutboundHrmpMessage>;
    readonly newValidationCode: Option<Bytes>;
    readonly headData: Bytes;
    readonly processedDownwardMessages: u32;
    readonly hrmpWatermark: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (327) */
  export interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name PolkadotPrimitivesV0ValidityAttestation (331) */
  export interface PolkadotPrimitivesV0ValidityAttestation extends Enum {
    readonly isUnused0: boolean;
    readonly isImplicit: boolean;
    readonly asImplicit: PolkadotPrimitivesV0ValidatorAppSignature;
    readonly isExplicit: boolean;
    readonly asExplicit: PolkadotPrimitivesV0ValidatorAppSignature;
  }

  /** @name PolkadotPrimitivesV1DisputeStatementSet (333) */
  export interface PolkadotPrimitivesV1DisputeStatementSet extends Struct {
    readonly candidateHash: H256;
    readonly session: u32;
    readonly statements: Vec<ITuple<[PolkadotPrimitivesV1DisputeStatement, u32, PolkadotPrimitivesV0ValidatorAppSignature]>>;
  }

  /** @name PolkadotPrimitivesV1DisputeStatement (337) */
  export interface PolkadotPrimitivesV1DisputeStatement extends Enum {
    readonly isValid: boolean;
    readonly asValid: PolkadotPrimitivesV1ValidDisputeStatementKind;
    readonly isInvalid: boolean;
    readonly asInvalid: PolkadotPrimitivesV1InvalidDisputeStatementKind;
  }

  /** @name PolkadotPrimitivesV1ValidDisputeStatementKind (338) */
  export interface PolkadotPrimitivesV1ValidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
    readonly isBackingSeconded: boolean;
    readonly asBackingSeconded: H256;
    readonly isBackingValid: boolean;
    readonly asBackingValid: H256;
    readonly isApprovalChecking: boolean;
  }

  /** @name PolkadotPrimitivesV1InvalidDisputeStatementKind (339) */
  export interface PolkadotPrimitivesV1InvalidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
  }

  /** @name SpRuntimeMultiSigner (351) */
  export interface SpRuntimeMultiSigner extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Public;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Public;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaPublic;
  }

  /** @name SpCoreEcdsaPublic (352) */
  export interface SpCoreEcdsaPublic extends U8aFixed {}

  /** @name PolkadotRuntimeOriginCaller (357) */
  export interface PolkadotRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSystemRawOrigin;
    readonly isUnused1: boolean;
    readonly isUnused2: boolean;
    readonly isUnused3: boolean;
    readonly isVoid: boolean;
    readonly isUnused5: boolean;
    readonly isUnused6: boolean;
    readonly isUnused7: boolean;
    readonly isUnused8: boolean;
    readonly isUnused9: boolean;
    readonly isUnused10: boolean;
    readonly isUnused11: boolean;
    readonly isUnused12: boolean;
    readonly isUnused13: boolean;
    readonly isUnused14: boolean;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
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
    readonly isUnused32: boolean;
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
    readonly isParachainsOrigin: boolean;
    readonly asParachainsOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
  }

  /** @name PolkadotRuntimeParachainsOriginPalletOrigin (361) */
  export interface PolkadotRuntimeParachainsOriginPalletOrigin extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: u32;
  }

  /** @name PolkadotRuntimeParachainsConfigurationHostConfiguration (506) */
  export interface PolkadotRuntimeParachainsConfigurationHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeFrequency: u32;
    readonly validationUpgradeDelay: u32;
    readonly maxPovSize: u32;
    readonly maxDownwardMessageSize: u32;
    readonly umpServiceTotalWeight: u64;
    readonly hrmpMaxParachainOutboundChannels: u32;
    readonly hrmpMaxParathreadOutboundChannels: u32;
    readonly hrmpSenderDeposit: u128;
    readonly hrmpRecipientDeposit: u128;
    readonly hrmpChannelMaxCapacity: u32;
    readonly hrmpChannelMaxTotalSize: u32;
    readonly hrmpMaxParachainInboundChannels: u32;
    readonly hrmpMaxParathreadInboundChannels: u32;
    readonly hrmpChannelMaxMessageSize: u32;
    readonly codeRetentionPeriod: u32;
    readonly parathreadCores: u32;
    readonly parathreadRetries: u32;
    readonly groupRotationFrequency: u32;
    readonly chainAvailabilityPeriod: u32;
    readonly threadAvailabilityPeriod: u32;
    readonly schedulingLookahead: u32;
    readonly maxValidatorsPerCore: Option<u32>;
    readonly maxValidators: Option<u32>;
    readonly disputePeriod: u32;
    readonly disputePostConclusionAcceptancePeriod: u32;
    readonly disputeMaxSpamSlots: u32;
    readonly disputeConclusionByTimeOutPeriod: u32;
    readonly noShowSlots: u32;
    readonly nDelayTranches: u32;
    readonly zerothDelayTrancheWidth: u32;
    readonly neededApprovals: u32;
    readonly relayVrfModuloSamples: u32;
    readonly umpMaxIndividualWeight: u64;
  }

  /** @name PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord (510) */
  export interface PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord extends Struct {
    readonly bitfield: BitVec;
    readonly submittedAt: u32;
  }

  /** @name PolkadotRuntimeParachainsInclusionCandidatePendingAvailability (511) */
  export interface PolkadotRuntimeParachainsInclusionCandidatePendingAvailability extends Struct {
    readonly core: u32;
    readonly hash_: H256;
    readonly descriptor: PolkadotPrimitivesV1CandidateDescriptor;
    readonly availabilityVotes: BitVec;
    readonly backers: BitVec;
    readonly relayParentNumber: u32;
    readonly backedInNumber: u32;
    readonly backingGroup: u32;
  }

  /** @name PolkadotRuntimeParachainsSchedulerParathreadClaimQueue (515) */
  export interface PolkadotRuntimeParachainsSchedulerParathreadClaimQueue extends Struct {
    readonly queue: Vec<PolkadotRuntimeParachainsSchedulerQueuedParathread>;
    readonly nextCoreOffset: u32;
  }

  /** @name PolkadotRuntimeParachainsSchedulerQueuedParathread (517) */
  export interface PolkadotRuntimeParachainsSchedulerQueuedParathread extends Struct {
    readonly claim: PolkadotPrimitivesV1ParathreadEntry;
    readonly coreOffset: u32;
  }

  /** @name PolkadotPrimitivesV1ParathreadEntry (518) */
  export interface PolkadotPrimitivesV1ParathreadEntry extends Struct {
    readonly claim: PolkadotPrimitivesV1ParathreadClaim;
    readonly retries: u32;
  }

  /** @name PolkadotPrimitivesV1ParathreadClaim (519) */
  export interface PolkadotPrimitivesV1ParathreadClaim extends ITuple<[u32, PolkadotPrimitivesV0CollatorAppPublic]> {}

  /** @name PolkadotPrimitivesV1CoreOccupied (522) */
  export interface PolkadotPrimitivesV1CoreOccupied extends Enum {
    readonly isParathread: boolean;
    readonly asParathread: PolkadotPrimitivesV1ParathreadEntry;
    readonly isParachain: boolean;
  }

  /** @name PolkadotRuntimeParachainsSchedulerCoreAssignment (525) */
  export interface PolkadotRuntimeParachainsSchedulerCoreAssignment extends Struct {
    readonly core: u32;
    readonly paraId: u32;
    readonly kind: PolkadotRuntimeParachainsSchedulerAssignmentKind;
    readonly groupIdx: u32;
  }

  /** @name PolkadotRuntimeParachainsSchedulerAssignmentKind (526) */
  export interface PolkadotRuntimeParachainsSchedulerAssignmentKind extends Enum {
    readonly isParachain: boolean;
    readonly isParathread: boolean;
    readonly asParathread: ITuple<[PolkadotPrimitivesV0CollatorAppPublic, u32]>;
  }

  /** @name PolkadotRuntimeParachainsParasParaLifecycle (527) */
  export interface PolkadotRuntimeParachainsParasParaLifecycle extends Enum {
    readonly isOnboarding: boolean;
    readonly isParathread: boolean;
    readonly isParachain: boolean;
    readonly isUpgradingParathread: boolean;
    readonly isDowngradingParachain: boolean;
    readonly isOffboardingParathread: boolean;
    readonly isOffboardingParachain: boolean;
  }

  /** @name PolkadotRuntimeParachainsParasParaPastCodeMeta (529) */
  export interface PolkadotRuntimeParachainsParasParaPastCodeMeta extends Struct {
    readonly upgradeTimes: Vec<PolkadotRuntimeParachainsParasReplacementTimes>;
    readonly lastPruned: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsParasReplacementTimes (531) */
  export interface PolkadotRuntimeParachainsParasReplacementTimes extends Struct {
    readonly expectedAt: u32;
    readonly activatedAt: u32;
  }

  /** @name PolkadotPrimitivesV1UpgradeGoAhead (533) */
  export interface PolkadotPrimitivesV1UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
  }

  /** @name PolkadotPrimitivesV1UpgradeRestriction (534) */
  export interface PolkadotPrimitivesV1UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
  }

  /** @name PolkadotRuntimeParachainsParasParaGenesisArgs (535) */
  export interface PolkadotRuntimeParachainsParasParaGenesisArgs extends Struct {
    readonly genesisHead: Bytes;
    readonly validationCode: Bytes;
    readonly parachain: bool;
  }

  /** @name PolkadotRuntimeParachainsInitializerBufferedSessionChange (538) */
  export interface PolkadotRuntimeParachainsInitializerBufferedSessionChange extends Struct {
    readonly validators: Vec<PolkadotPrimitivesV0ValidatorAppPublic>;
    readonly queued: Vec<PolkadotPrimitivesV0ValidatorAppPublic>;
    readonly sessionIndex: u32;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (540) */
  export interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest (543) */
  export interface PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest extends Struct {
    readonly confirmed: bool;
    readonly age: u32;
    readonly senderDeposit: u128;
    readonly maxMessageSize: u32;
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
  }

  /** @name PolkadotRuntimeParachainsHrmpHrmpChannel (545) */
  export interface PolkadotRuntimeParachainsHrmpHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
    readonly senderDeposit: u128;
    readonly recipientDeposit: u128;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (548) */
  export interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name PolkadotPrimitivesV1SessionInfo (553) */
  export interface PolkadotPrimitivesV1SessionInfo extends Struct {
    readonly validators: Vec<PolkadotPrimitivesV0ValidatorAppPublic>;
    readonly discoveryKeys: Vec<SpAuthorityDiscoveryAppPublic>;
    readonly assignmentKeys: Vec<PolkadotPrimitivesV1AssignmentAppPublic>;
    readonly validatorGroups: Vec<Vec<u32>>;
    readonly nCores: u32;
    readonly zerothDelayTrancheWidth: u32;
    readonly relayVrfModuloSamples: u32;
    readonly nDelayTranches: u32;
    readonly noShowSlots: u32;
    readonly neededApprovals: u32;
  }

  /** @name PolkadotRuntimeCommonParasRegistrarParaInfo (555) */
  export interface PolkadotRuntimeCommonParasRegistrarParaInfo extends Struct {
    readonly manager: AccountId32;
    readonly deposit: u128;
    readonly locked: bool;
  }

  /** @name PolkadotRuntimeCommonCrowdloanFundInfo (565) */
  export interface PolkadotRuntimeCommonCrowdloanFundInfo extends Struct {
    readonly depositor: AccountId32;
    readonly verifier: Option<SpRuntimeMultiSigner>;
    readonly deposit: u128;
    readonly raised: u128;
    readonly end: u32;
    readonly cap: u128;
    readonly lastContribution: PolkadotRuntimeCommonCrowdloanLastContribution;
    readonly firstPeriod: u32;
    readonly lastPeriod: u32;
    readonly trieIndex: u32;
  }

  /** @name PolkadotRuntimeCommonCrowdloanLastContribution (566) */
  export interface PolkadotRuntimeCommonCrowdloanLastContribution extends Enum {
    readonly isNever: boolean;
    readonly isPreEnding: boolean;
    readonly asPreEnding: u32;
    readonly isEnding: boolean;
    readonly asEnding: u32;
  }

  /** @name PolkadotRuntimeCommonClaimsPrevalidateAttests (578) */
  export type PolkadotRuntimeCommonClaimsPrevalidateAttests = Null;

  /** @name PolkadotRuntimeRuntime (579) */
  export type PolkadotRuntimeRuntime = Null;

}
