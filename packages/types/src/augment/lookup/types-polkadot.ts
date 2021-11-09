// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BitVec, Bytes, Compact, Enum, Null, Option, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types';
import type { AccountId32, H256, PerU16 } from '@polkadot/types/interfaces/runtime';
import type { ITuple } from '@polkadot/types/types';

declare module '@polkadot/types/lookup' {

  /** @name PolkadotRuntimeProxyType (72) */
  export interface PolkadotRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isIdentityJudgement: boolean;
    readonly isCancelProxy: boolean;
    readonly isAuction: boolean;
  }

  /** @name PolkadotPrimitivesV1CandidateReceipt (83) */
  export interface PolkadotPrimitivesV1CandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV1CandidateDescriptor;
    readonly commitmentsHash: H256;
  }

  /** @name PolkadotPrimitivesV1CandidateDescriptor (84) */
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

  /** @name PolkadotPrimitivesV0CollatorAppPublic (86) */
  export interface PolkadotPrimitivesV0CollatorAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotPrimitivesV0CollatorAppSignature (87) */
  export interface PolkadotPrimitivesV0CollatorAppSignature extends SpCoreSr25519Signature {}

  /** @name XcmV2TraitsOutcome (96) */
  export interface XcmV2TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: u64;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[u64, XcmV2TraitsError]>;
    readonly isError: boolean;
    readonly asError: XcmV2TraitsError;
  }

  /** @name XcmV2TraitsError (97) */
  export interface XcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isTooMuchWeightRequired: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
  }

  /** @name PolkadotParachainPrimitivesHrmpChannelId (99) */
  export interface PolkadotParachainPrimitivesHrmpChannelId extends Struct {
    readonly sender: u32;
    readonly recipient: u32;
  }

  /** @name PolkadotRuntimeSessionKeys (162) */
  export interface PolkadotRuntimeSessionKeys extends Struct {
    readonly grandpa: SpFinalityGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
    readonly paraValidator: PolkadotPrimitivesV0ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV1AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
  }

  /** @name PolkadotPrimitivesV0ValidatorAppPublic (163) */
  export interface PolkadotPrimitivesV0ValidatorAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotPrimitivesV1AssignmentAppPublic (164) */
  export interface PolkadotPrimitivesV1AssignmentAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotRuntimeCommonClaimsEcdsaSignature (196) */
  export interface PolkadotRuntimeCommonClaimsEcdsaSignature extends U8aFixed {}

  /** @name PolkadotRuntimeCommonClaimsStatementKind (201) */
  export interface PolkadotRuntimeCommonClaimsStatementKind extends Enum {
    readonly isRegular: boolean;
    readonly isSaft: boolean;
  }

  /** @name PolkadotRuntimeOriginCaller (206) */
  export interface PolkadotRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSystemRawOrigin;
    readonly isVoid: boolean;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly isParachainsOrigin: boolean;
    readonly asParachainsOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
  }

  /** @name PolkadotRuntimeParachainsOriginPalletOrigin (210) */
  export interface PolkadotRuntimeParachainsOriginPalletOrigin extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: u32;
  }

  /** @name PolkadotRuntimeNposCompactSolution16 (261) */
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

  /** @name PolkadotPrimitivesV1InherentData (323) */
  export interface PolkadotPrimitivesV1InherentData extends Struct {
    readonly bitfields: Vec<PolkadotPrimitivesV1SignedUncheckedSigned>;
    readonly backedCandidates: Vec<PolkadotPrimitivesV1BackedCandidate>;
    readonly disputes: Vec<PolkadotPrimitivesV1DisputeStatementSet>;
    readonly parentHeader: SpRuntimeHeader;
  }

  /** @name PolkadotPrimitivesV1SignedUncheckedSigned (325) */
  export interface PolkadotPrimitivesV1SignedUncheckedSigned extends Struct {
    readonly payload: BitVec;
    readonly validatorIndex: u32;
    readonly signature: PolkadotPrimitivesV0ValidatorAppSignature;
  }

  /** @name BitvecOrderLsb0 (328) */
  export type BitvecOrderLsb0 = Null;

  /** @name PolkadotPrimitivesV0ValidatorAppSignature (330) */
  export interface PolkadotPrimitivesV0ValidatorAppSignature extends SpCoreSr25519Signature {}

  /** @name PolkadotPrimitivesV1BackedCandidate (332) */
  export interface PolkadotPrimitivesV1BackedCandidate extends Struct {
    readonly candidate: PolkadotPrimitivesV1CommittedCandidateReceipt;
    readonly validityVotes: Vec<PolkadotPrimitivesV0ValidityAttestation>;
    readonly validatorIndices: BitVec;
  }

  /** @name PolkadotPrimitivesV1CommittedCandidateReceipt (333) */
  export interface PolkadotPrimitivesV1CommittedCandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV1CandidateDescriptor;
    readonly commitments: PolkadotPrimitivesV1CandidateCommitments;
  }

  /** @name PolkadotPrimitivesV1CandidateCommitments (334) */
  export interface PolkadotPrimitivesV1CandidateCommitments extends Struct {
    readonly upwardMessages: Vec<Bytes>;
    readonly horizontalMessages: Vec<PolkadotCorePrimitivesOutboundHrmpMessage>;
    readonly newValidationCode: Option<Bytes>;
    readonly headData: Bytes;
    readonly processedDownwardMessages: u32;
    readonly hrmpWatermark: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (336) */
  export interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name PolkadotPrimitivesV0ValidityAttestation (340) */
  export interface PolkadotPrimitivesV0ValidityAttestation extends Enum {
    readonly isImplicit: boolean;
    readonly asImplicit: PolkadotPrimitivesV0ValidatorAppSignature;
    readonly isExplicit: boolean;
    readonly asExplicit: PolkadotPrimitivesV0ValidatorAppSignature;
  }

  /** @name PolkadotPrimitivesV1DisputeStatementSet (342) */
  export interface PolkadotPrimitivesV1DisputeStatementSet extends Struct {
    readonly candidateHash: H256;
    readonly session: u32;
    readonly statements: Vec<ITuple<[PolkadotPrimitivesV1DisputeStatement, u32, PolkadotPrimitivesV0ValidatorAppSignature]>>;
  }

  /** @name PolkadotPrimitivesV1DisputeStatement (346) */
  export interface PolkadotPrimitivesV1DisputeStatement extends Enum {
    readonly isValid: boolean;
    readonly asValid: PolkadotPrimitivesV1ValidDisputeStatementKind;
    readonly isInvalid: boolean;
    readonly asInvalid: PolkadotPrimitivesV1InvalidDisputeStatementKind;
  }

  /** @name PolkadotPrimitivesV1ValidDisputeStatementKind (347) */
  export interface PolkadotPrimitivesV1ValidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
    readonly isBackingSeconded: boolean;
    readonly asBackingSeconded: H256;
    readonly isBackingValid: boolean;
    readonly asBackingValid: H256;
    readonly isApprovalChecking: boolean;
  }

  /** @name PolkadotPrimitivesV1InvalidDisputeStatementKind (348) */
  export interface PolkadotPrimitivesV1InvalidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
  }

  /** @name SpRuntimeMultiSigner (360) */
  export interface SpRuntimeMultiSigner extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Public;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Public;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaPublic;
  }

  /** @name SpCoreEcdsaPublic (361) */
  export interface SpCoreEcdsaPublic extends U8aFixed {}

  /** @name PolkadotRuntimeParachainsConfigurationHostConfiguration (514) */
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

  /** @name PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord (518) */
  export interface PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord extends Struct {
    readonly bitfield: BitVec;
    readonly submittedAt: u32;
  }

  /** @name PolkadotRuntimeParachainsInclusionCandidatePendingAvailability (519) */
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

  /** @name PolkadotPrimitivesV1ScrapedOnChainVotes (521) */
  export interface PolkadotPrimitivesV1ScrapedOnChainVotes extends Struct {
    readonly session: u32;
    readonly backingValidatorsPerCandidate: Vec<ITuple<[PolkadotPrimitivesV1CandidateReceipt, Vec<ITuple<[u32, PolkadotPrimitivesV0ValidityAttestation]>>]>>;
    readonly disputes: Vec<PolkadotPrimitivesV1DisputeStatementSet>;
  }

  /** @name PolkadotRuntimeParachainsSchedulerParathreadClaimQueue (528) */
  export interface PolkadotRuntimeParachainsSchedulerParathreadClaimQueue extends Struct {
    readonly queue: Vec<PolkadotRuntimeParachainsSchedulerQueuedParathread>;
    readonly nextCoreOffset: u32;
  }

  /** @name PolkadotRuntimeParachainsSchedulerQueuedParathread (530) */
  export interface PolkadotRuntimeParachainsSchedulerQueuedParathread extends Struct {
    readonly claim: PolkadotPrimitivesV1ParathreadEntry;
    readonly coreOffset: u32;
  }

  /** @name PolkadotPrimitivesV1ParathreadEntry (531) */
  export interface PolkadotPrimitivesV1ParathreadEntry extends Struct {
    readonly claim: PolkadotPrimitivesV1ParathreadClaim;
    readonly retries: u32;
  }

  /** @name PolkadotPrimitivesV1ParathreadClaim (532) */
  export interface PolkadotPrimitivesV1ParathreadClaim extends ITuple<[u32, PolkadotPrimitivesV0CollatorAppPublic]> {}

  /** @name PolkadotPrimitivesV1CoreOccupied (535) */
  export interface PolkadotPrimitivesV1CoreOccupied extends Enum {
    readonly isParathread: boolean;
    readonly asParathread: PolkadotPrimitivesV1ParathreadEntry;
    readonly isParachain: boolean;
  }

  /** @name PolkadotRuntimeParachainsSchedulerCoreAssignment (538) */
  export interface PolkadotRuntimeParachainsSchedulerCoreAssignment extends Struct {
    readonly core: u32;
    readonly paraId: u32;
    readonly kind: PolkadotRuntimeParachainsSchedulerAssignmentKind;
    readonly groupIdx: u32;
  }

  /** @name PolkadotRuntimeParachainsSchedulerAssignmentKind (539) */
  export interface PolkadotRuntimeParachainsSchedulerAssignmentKind extends Enum {
    readonly isParachain: boolean;
    readonly isParathread: boolean;
    readonly asParathread: ITuple<[PolkadotPrimitivesV0CollatorAppPublic, u32]>;
  }

  /** @name PolkadotRuntimeParachainsParasParaLifecycle (540) */
  export interface PolkadotRuntimeParachainsParasParaLifecycle extends Enum {
    readonly isOnboarding: boolean;
    readonly isParathread: boolean;
    readonly isParachain: boolean;
    readonly isUpgradingParathread: boolean;
    readonly isDowngradingParachain: boolean;
    readonly isOffboardingParathread: boolean;
    readonly isOffboardingParachain: boolean;
  }

  /** @name PolkadotRuntimeParachainsParasParaPastCodeMeta (542) */
  export interface PolkadotRuntimeParachainsParasParaPastCodeMeta extends Struct {
    readonly upgradeTimes: Vec<PolkadotRuntimeParachainsParasReplacementTimes>;
    readonly lastPruned: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsParasReplacementTimes (544) */
  export interface PolkadotRuntimeParachainsParasReplacementTimes extends Struct {
    readonly expectedAt: u32;
    readonly activatedAt: u32;
  }

  /** @name PolkadotPrimitivesV1UpgradeGoAhead (546) */
  export interface PolkadotPrimitivesV1UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
  }

  /** @name PolkadotPrimitivesV1UpgradeRestriction (547) */
  export interface PolkadotPrimitivesV1UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
  }

  /** @name PolkadotRuntimeParachainsParasParaGenesisArgs (548) */
  export interface PolkadotRuntimeParachainsParasParaGenesisArgs extends Struct {
    readonly genesisHead: Bytes;
    readonly validationCode: Bytes;
    readonly parachain: bool;
  }

  /** @name PolkadotRuntimeParachainsInitializerBufferedSessionChange (551) */
  export interface PolkadotRuntimeParachainsInitializerBufferedSessionChange extends Struct {
    readonly validators: Vec<PolkadotPrimitivesV0ValidatorAppPublic>;
    readonly queued: Vec<PolkadotPrimitivesV0ValidatorAppPublic>;
    readonly sessionIndex: u32;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (553) */
  export interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest (556) */
  export interface PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest extends Struct {
    readonly confirmed: bool;
    readonly age: u32;
    readonly senderDeposit: u128;
    readonly maxMessageSize: u32;
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
  }

  /** @name PolkadotRuntimeParachainsHrmpHrmpChannel (558) */
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

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (561) */
  export interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name PolkadotPrimitivesV1SessionInfo (566) */
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

  /** @name PolkadotRuntimeCommonParasRegistrarParaInfo (568) */
  export interface PolkadotRuntimeCommonParasRegistrarParaInfo extends Struct {
    readonly manager: AccountId32;
    readonly deposit: u128;
    readonly locked: bool;
  }

  /** @name PolkadotRuntimeCommonCrowdloanFundInfo (578) */
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

  /** @name PolkadotRuntimeCommonCrowdloanLastContribution (579) */
  export interface PolkadotRuntimeCommonCrowdloanLastContribution extends Enum {
    readonly isNever: boolean;
    readonly isPreEnding: boolean;
    readonly asPreEnding: u32;
    readonly isEnding: boolean;
    readonly asEnding: u32;
  }

  /** @name PolkadotRuntimeCommonClaimsPrevalidateAttests (591) */
  export type PolkadotRuntimeCommonClaimsPrevalidateAttests = Null;

  /** @name PolkadotRuntimeRuntime (592) */
  export type PolkadotRuntimeRuntime = Null;

}
