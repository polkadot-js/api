// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { BTreeMap, BitVec, Bytes, Compact, Enum, Null, Option, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256, PerU16, Perbill, Perquintill } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name StagingKusamaRuntimeSessionKeys (125) */
  interface StagingKusamaRuntimeSessionKeys extends Struct {
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly paraValidator: PolkadotPrimitivesV7ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV7AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
    readonly beefy: SpConsensusBeefyEcdsaCryptoPublic;
  }

  /** @name PolkadotPrimitivesV7ValidatorAppPublic (126) */
  interface PolkadotPrimitivesV7ValidatorAppPublic extends U8aFixed {}

  /** @name PolkadotPrimitivesV7AssignmentAppPublic (127) */
  interface PolkadotPrimitivesV7AssignmentAppPublic extends U8aFixed {}

  /** @name StagingKusamaRuntimeOriginCaller (150) */
  interface StagingKusamaRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isOrigins: boolean;
    readonly asOrigins: StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly isParachainsOrigin: boolean;
    readonly asParachainsOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmOrigin;
    readonly type: 'System' | 'Void' | 'Origins' | 'ParachainsOrigin' | 'XcmPallet';
  }

  /** @name StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin (152) */
  interface StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin extends Enum {
    readonly isStakingAdmin: boolean;
    readonly isTreasurer: boolean;
    readonly isFellowshipAdmin: boolean;
    readonly isGeneralAdmin: boolean;
    readonly isAuctionAdmin: boolean;
    readonly isLeaseAdmin: boolean;
    readonly isReferendumCanceller: boolean;
    readonly isReferendumKiller: boolean;
    readonly isSmallTipper: boolean;
    readonly isBigTipper: boolean;
    readonly isSmallSpender: boolean;
    readonly isMediumSpender: boolean;
    readonly isBigSpender: boolean;
    readonly isWhitelistedCaller: boolean;
    readonly isFellowshipInitiates: boolean;
    readonly isFellows: boolean;
    readonly isFellowshipExperts: boolean;
    readonly isFellowshipMasters: boolean;
    readonly isFellowship1Dan: boolean;
    readonly isFellowship2Dan: boolean;
    readonly isFellowship3Dan: boolean;
    readonly isFellowship4Dan: boolean;
    readonly isFellowship5Dan: boolean;
    readonly isFellowship6Dan: boolean;
    readonly isFellowship7Dan: boolean;
    readonly isFellowship8Dan: boolean;
    readonly isFellowship9Dan: boolean;
    readonly isWishForChange: boolean;
    readonly type: 'StakingAdmin' | 'Treasurer' | 'FellowshipAdmin' | 'GeneralAdmin' | 'AuctionAdmin' | 'LeaseAdmin' | 'ReferendumCanceller' | 'ReferendumKiller' | 'SmallTipper' | 'BigTipper' | 'SmallSpender' | 'MediumSpender' | 'BigSpender' | 'WhitelistedCaller' | 'FellowshipInitiates' | 'Fellows' | 'FellowshipExperts' | 'FellowshipMasters' | 'Fellowship1Dan' | 'Fellowship2Dan' | 'Fellowship3Dan' | 'Fellowship4Dan' | 'Fellowship5Dan' | 'Fellowship6Dan' | 'Fellowship7Dan' | 'Fellowship8Dan' | 'Fellowship9Dan' | 'WishForChange';
  }

  /** @name StagingKusamaRuntimeRuntimeParameters (163) */
  interface StagingKusamaRuntimeRuntimeParameters extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingKusamaRuntimeDynamicParamsInflationParameters;
    readonly type: 'Inflation';
  }

  /** @name StagingKusamaRuntimeDynamicParamsInflationParameters (164) */
  interface StagingKusamaRuntimeDynamicParamsInflationParameters extends Enum {
    readonly isMinInflation: boolean;
    readonly asMinInflation: ITuple<[StagingKusamaRuntimeDynamicParamsInflationMinInflation, Option<Perquintill>]>;
    readonly isMaxInflation: boolean;
    readonly asMaxInflation: ITuple<[StagingKusamaRuntimeDynamicParamsInflationMaxInflation, Option<Perquintill>]>;
    readonly isIdealStake: boolean;
    readonly asIdealStake: ITuple<[StagingKusamaRuntimeDynamicParamsInflationIdealStake, Option<Perquintill>]>;
    readonly isFalloff: boolean;
    readonly asFalloff: ITuple<[StagingKusamaRuntimeDynamicParamsInflationFalloff, Option<Perquintill>]>;
    readonly isUseAuctionSlots: boolean;
    readonly asUseAuctionSlots: ITuple<[StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots, Option<bool>]>;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff' | 'UseAuctionSlots';
  }

  /** @name StagingKusamaRuntimeDynamicParamsInflationMinInflation (165) */
  type StagingKusamaRuntimeDynamicParamsInflationMinInflation = Null;

  /** @name StagingKusamaRuntimeDynamicParamsInflationMaxInflation (168) */
  type StagingKusamaRuntimeDynamicParamsInflationMaxInflation = Null;

  /** @name StagingKusamaRuntimeDynamicParamsInflationIdealStake (169) */
  type StagingKusamaRuntimeDynamicParamsInflationIdealStake = Null;

  /** @name StagingKusamaRuntimeDynamicParamsInflationFalloff (170) */
  type StagingKusamaRuntimeDynamicParamsInflationFalloff = Null;

  /** @name StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots (171) */
  type StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots = Null;

  /** @name StagingKusamaRuntimeProxyType (192) */
  interface StagingKusamaRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isCancelProxy: boolean;
    readonly isAuction: boolean;
    readonly isSociety: boolean;
    readonly isNominationPools: boolean;
    readonly isSpokesperson: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | 'Spokesperson';
  }

  /** @name StagingKusamaRuntimeNposCompactSolution24 (202) */
  interface StagingKusamaRuntimeNposCompactSolution24 extends Struct {
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
    readonly votes17: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes18: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes19: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes20: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes21: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes22: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes23: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes24: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  }

  /** @name PolkadotPrimitivesV7AsyncBackingAsyncBackingParams (303) */
  interface PolkadotPrimitivesV7AsyncBackingAsyncBackingParams extends Struct {
    readonly maxCandidateDepth: u32;
    readonly allowedAncestryLen: u32;
  }

  /** @name PolkadotPrimitivesV7ExecutorParams (304) */
  interface PolkadotPrimitivesV7ExecutorParams extends Vec<PolkadotPrimitivesV7ExecutorParamsExecutorParam> {}

  /** @name PolkadotPrimitivesV7ExecutorParamsExecutorParam (306) */
  interface PolkadotPrimitivesV7ExecutorParamsExecutorParam extends Enum {
    readonly isMaxMemoryPages: boolean;
    readonly asMaxMemoryPages: u32;
    readonly isStackLogicalMax: boolean;
    readonly asStackLogicalMax: u32;
    readonly isStackNativeMax: boolean;
    readonly asStackNativeMax: u32;
    readonly isPrecheckingMaxMemory: boolean;
    readonly asPrecheckingMaxMemory: u64;
    readonly isPvfPrepTimeout: boolean;
    readonly asPvfPrepTimeout: ITuple<[PolkadotPrimitivesV7PvfPrepKind, u64]>;
    readonly isPvfExecTimeout: boolean;
    readonly asPvfExecTimeout: ITuple<[PolkadotPrimitivesV7PvfExecKind, u64]>;
    readonly isWasmExtBulkMemory: boolean;
    readonly type: 'MaxMemoryPages' | 'StackLogicalMax' | 'StackNativeMax' | 'PrecheckingMaxMemory' | 'PvfPrepTimeout' | 'PvfExecTimeout' | 'WasmExtBulkMemory';
  }

  /** @name PolkadotPrimitivesV7PvfPrepKind (307) */
  interface PolkadotPrimitivesV7PvfPrepKind extends Enum {
    readonly isPrecheck: boolean;
    readonly isPrepare: boolean;
    readonly type: 'Precheck' | 'Prepare';
  }

  /** @name PolkadotPrimitivesV7PvfExecKind (308) */
  interface PolkadotPrimitivesV7PvfExecKind extends Enum {
    readonly isBacking: boolean;
    readonly isApproval: boolean;
    readonly type: 'Backing' | 'Approval';
  }

  /** @name PolkadotPrimitivesV7ApprovalVotingParams (309) */
  interface PolkadotPrimitivesV7ApprovalVotingParams extends Struct {
    readonly maxApprovalCoalesceCount: u32;
  }

  /** @name PolkadotPrimitivesVstagingSchedulerParams (310) */
  interface PolkadotPrimitivesVstagingSchedulerParams extends Struct {
    readonly groupRotationFrequency: u32;
    readonly parasAvailabilityPeriod: u32;
    readonly maxValidatorsPerCore: Option<u32>;
    readonly lookahead: u32;
    readonly numCores: u32;
    readonly maxAvailabilityTimeouts: u32;
    readonly onDemandQueueMaxSize: u32;
    readonly onDemandTargetQueueUtilization: Perbill;
    readonly onDemandFeeVariability: Perbill;
    readonly onDemandBaseFee: u128;
    readonly ttl: u32;
  }

  /** @name PolkadotPrimitivesV7InherentData (314) */
  interface PolkadotPrimitivesV7InherentData extends Struct {
    readonly bitfields: Vec<PolkadotPrimitivesV7SignedUncheckedSigned>;
    readonly backedCandidates: Vec<PolkadotPrimitivesV7BackedCandidate>;
    readonly disputes: Vec<PolkadotPrimitivesV7DisputeStatementSet>;
    readonly parentHeader: SpRuntimeHeader;
  }

  /** @name PolkadotPrimitivesV7SignedUncheckedSigned (316) */
  interface PolkadotPrimitivesV7SignedUncheckedSigned extends Struct {
    readonly payload: BitVec;
    readonly validatorIndex: u32;
    readonly signature: PolkadotPrimitivesV7ValidatorAppSignature;
  }

  /** @name PolkadotPrimitivesV7ValidatorAppSignature (321) */
  interface PolkadotPrimitivesV7ValidatorAppSignature extends U8aFixed {}

  /** @name PolkadotPrimitivesV7BackedCandidate (323) */
  interface PolkadotPrimitivesV7BackedCandidate extends Struct {
    readonly candidate: PolkadotPrimitivesV7CommittedCandidateReceipt;
    readonly validityVotes: Vec<PolkadotPrimitivesV7ValidityAttestation>;
    readonly validatorIndices: BitVec;
  }

  /** @name PolkadotPrimitivesV7CommittedCandidateReceipt (324) */
  interface PolkadotPrimitivesV7CommittedCandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV7CandidateDescriptor;
    readonly commitments: PolkadotPrimitivesV7CandidateCommitments;
  }

  /** @name PolkadotPrimitivesV7CandidateDescriptor (325) */
  interface PolkadotPrimitivesV7CandidateDescriptor extends Struct {
    readonly paraId: u32;
    readonly relayParent: H256;
    readonly collator: PolkadotPrimitivesV7CollatorAppPublic;
    readonly persistedValidationDataHash: H256;
    readonly povHash: H256;
    readonly erasureRoot: H256;
    readonly signature: PolkadotPrimitivesV7CollatorAppSignature;
    readonly paraHead: H256;
    readonly validationCodeHash: H256;
  }

  /** @name PolkadotPrimitivesV7CollatorAppPublic (326) */
  interface PolkadotPrimitivesV7CollatorAppPublic extends U8aFixed {}

  /** @name PolkadotPrimitivesV7CollatorAppSignature (327) */
  interface PolkadotPrimitivesV7CollatorAppSignature extends U8aFixed {}

  /** @name PolkadotPrimitivesV7CandidateCommitments (329) */
  interface PolkadotPrimitivesV7CandidateCommitments extends Struct {
    readonly upwardMessages: Vec<Bytes>;
    readonly horizontalMessages: Vec<PolkadotCorePrimitivesOutboundHrmpMessage>;
    readonly newValidationCode: Option<Bytes>;
    readonly headData: Bytes;
    readonly processedDownwardMessages: u32;
    readonly hrmpWatermark: u32;
  }

  /** @name PolkadotPrimitivesV7ValidityAttestation (338) */
  interface PolkadotPrimitivesV7ValidityAttestation extends Enum {
    readonly isImplicit: boolean;
    readonly asImplicit: PolkadotPrimitivesV7ValidatorAppSignature;
    readonly isExplicit: boolean;
    readonly asExplicit: PolkadotPrimitivesV7ValidatorAppSignature;
    readonly type: 'Implicit' | 'Explicit';
  }

  /** @name PolkadotPrimitivesV7DisputeStatementSet (340) */
  interface PolkadotPrimitivesV7DisputeStatementSet extends Struct {
    readonly candidateHash: H256;
    readonly session: u32;
    readonly statements: Vec<ITuple<[PolkadotPrimitivesV7DisputeStatement, u32, PolkadotPrimitivesV7ValidatorAppSignature]>>;
  }

  /** @name PolkadotPrimitivesV7DisputeStatement (344) */
  interface PolkadotPrimitivesV7DisputeStatement extends Enum {
    readonly isValid: boolean;
    readonly asValid: PolkadotPrimitivesV7ValidDisputeStatementKind;
    readonly isInvalid: boolean;
    readonly asInvalid: PolkadotPrimitivesV7InvalidDisputeStatementKind;
    readonly type: 'Valid' | 'Invalid';
  }

  /** @name PolkadotPrimitivesV7ValidDisputeStatementKind (345) */
  interface PolkadotPrimitivesV7ValidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
    readonly isBackingSeconded: boolean;
    readonly asBackingSeconded: H256;
    readonly isBackingValid: boolean;
    readonly asBackingValid: H256;
    readonly isApprovalChecking: boolean;
    readonly isApprovalCheckingMultipleCandidates: boolean;
    readonly asApprovalCheckingMultipleCandidates: Vec<H256>;
    readonly type: 'Explicit' | 'BackingSeconded' | 'BackingValid' | 'ApprovalChecking' | 'ApprovalCheckingMultipleCandidates';
  }

  /** @name PolkadotPrimitivesV7InvalidDisputeStatementKind (347) */
  interface PolkadotPrimitivesV7InvalidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
    readonly type: 'Explicit';
  }

  /** @name PolkadotPrimitivesV7PvfCheckStatement (349) */
  interface PolkadotPrimitivesV7PvfCheckStatement extends Struct {
    readonly accept: bool;
    readonly subject: H256;
    readonly sessionIndex: u32;
    readonly validatorIndex: u32;
  }

  /** @name PolkadotPrimitivesV7SlashingDisputeProof (355) */
  interface PolkadotPrimitivesV7SlashingDisputeProof extends Struct {
    readonly timeSlot: PolkadotPrimitivesV7SlashingDisputesTimeSlot;
    readonly kind: PolkadotPrimitivesV7SlashingSlashingOffenceKind;
    readonly validatorIndex: u32;
    readonly validatorId: PolkadotPrimitivesV7ValidatorAppPublic;
  }

  /** @name PolkadotPrimitivesV7SlashingDisputesTimeSlot (356) */
  interface PolkadotPrimitivesV7SlashingDisputesTimeSlot extends Struct {
    readonly sessionIndex: u32;
    readonly candidateHash: H256;
  }

  /** @name PolkadotPrimitivesV7SlashingSlashingOffenceKind (357) */
  interface PolkadotPrimitivesV7SlashingSlashingOffenceKind extends Enum {
    readonly isForInvalid: boolean;
    readonly isAgainstValid: boolean;
    readonly type: 'ForInvalid' | 'AgainstValid';
  }

  /** @name PolkadotRuntimeParachainsAssignerOnDemandPalletCall (358) */
  interface PolkadotRuntimeParachainsAssignerOnDemandPalletCall extends Enum {
    readonly isPlaceOrderAllowDeath: boolean;
    readonly asPlaceOrderAllowDeath: {
      readonly maxAmount: u128;
      readonly paraId: u32;
    } & Struct;
    readonly isPlaceOrderKeepAlive: boolean;
    readonly asPlaceOrderKeepAlive: {
      readonly maxAmount: u128;
      readonly paraId: u32;
    } & Struct;
    readonly type: 'PlaceOrderAllowDeath' | 'PlaceOrderKeepAlive';
  }

  /** @name PolkadotRuntimeParachainsCoretimePalletCall (368) */
  interface PolkadotRuntimeParachainsCoretimePalletCall extends Enum {
    readonly isRequestCoreCount: boolean;
    readonly asRequestCoreCount: {
      readonly count: u16;
    } & Struct;
    readonly isRequestRevenueAt: boolean;
    readonly asRequestRevenueAt: {
      readonly when: u32;
    } & Struct;
    readonly isAssignCore: boolean;
    readonly asAssignCore: {
      readonly core: u16;
      readonly begin: u32;
      readonly assignment: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, u16]>>;
      readonly endHint: Option<u32>;
    } & Struct;
    readonly type: 'RequestCoreCount' | 'RequestRevenueAt' | 'AssignCore';
  }

  /** @name XcmV3OriginKind (414) */
  interface XcmV3OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name StagingKusamaRuntimeRuntimeParametersKey (479) */
  interface StagingKusamaRuntimeRuntimeParametersKey extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingKusamaRuntimeDynamicParamsInflationParametersKey;
    readonly type: 'Inflation';
  }

  /** @name StagingKusamaRuntimeDynamicParamsInflationParametersKey (480) */
  interface StagingKusamaRuntimeDynamicParamsInflationParametersKey extends Enum {
    readonly isMinInflation: boolean;
    readonly isMaxInflation: boolean;
    readonly isIdealStake: boolean;
    readonly isFalloff: boolean;
    readonly isUseAuctionSlots: boolean;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff' | 'UseAuctionSlots';
  }

  /** @name StagingKusamaRuntimeRuntimeParametersValue (482) */
  interface StagingKusamaRuntimeRuntimeParametersValue extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingKusamaRuntimeDynamicParamsInflationParametersValue;
    readonly type: 'Inflation';
  }

  /** @name StagingKusamaRuntimeDynamicParamsInflationParametersValue (483) */
  interface StagingKusamaRuntimeDynamicParamsInflationParametersValue extends Enum {
    readonly isMinInflation: boolean;
    readonly asMinInflation: Perquintill;
    readonly isMaxInflation: boolean;
    readonly asMaxInflation: Perquintill;
    readonly isIdealStake: boolean;
    readonly asIdealStake: Perquintill;
    readonly isFalloff: boolean;
    readonly asFalloff: Perquintill;
    readonly isUseAuctionSlots: boolean;
    readonly asUseAuctionSlots: bool;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff' | 'UseAuctionSlots';
  }

  /** @name PolkadotPrimitivesV7CandidateReceipt (508) */
  interface PolkadotPrimitivesV7CandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV7CandidateDescriptor;
    readonly commitmentsHash: H256;
  }

  /** @name PolkadotRuntimeParachainsAssignerOnDemandPalletEvent (516) */
  interface PolkadotRuntimeParachainsAssignerOnDemandPalletEvent extends Enum {
    readonly isOnDemandOrderPlaced: boolean;
    readonly asOnDemandOrderPlaced: {
      readonly paraId: u32;
      readonly spotPrice: u128;
      readonly orderedBy: AccountId32;
    } & Struct;
    readonly isSpotPriceSet: boolean;
    readonly asSpotPriceSet: {
      readonly spotPrice: u128;
    } & Struct;
    readonly type: 'OnDemandOrderPlaced' | 'SpotPriceSet';
  }

  /** @name PolkadotRuntimeParachainsCoretimePalletEvent (521) */
  interface PolkadotRuntimeParachainsCoretimePalletEvent extends Enum {
    readonly isRevenueInfoRequested: boolean;
    readonly asRevenueInfoRequested: {
      readonly when: u32;
    } & Struct;
    readonly isCoreAssigned: boolean;
    readonly asCoreAssigned: {
      readonly core: u32;
    } & Struct;
    readonly type: 'RevenueInfoRequested' | 'CoreAssigned';
  }

  /** @name StagingKusamaRuntimeRuntimeHoldReason (570) */
  interface StagingKusamaRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isNis: boolean;
    readonly asNis: PalletNisHoldReason;
    readonly type: 'Preimage' | 'Nis';
  }

  /** @name StagingKusamaRuntimeRuntimeFreezeReason (576) */
  interface StagingKusamaRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name FrameSupportTokensMiscIdAmount (749) */
  interface FrameSupportTokensMiscIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PolkadotPrimitivesV7ScrapedOnChainVotes (791) */
  interface PolkadotPrimitivesV7ScrapedOnChainVotes extends Struct {
    readonly session: u32;
    readonly backingValidatorsPerCandidate: Vec<ITuple<[PolkadotPrimitivesV7CandidateReceipt, Vec<ITuple<[u32, PolkadotPrimitivesV7ValidityAttestation]>>]>>;
    readonly disputes: Vec<PolkadotPrimitivesV7DisputeStatementSet>;
  }

  /** @name PolkadotRuntimeParachainsParasUpgradeStrategy (809) */
  interface PolkadotRuntimeParachainsParasUpgradeStrategy extends Enum {
    readonly isSetGoAheadSignal: boolean;
    readonly isApplyAtExpectedBlock: boolean;
    readonly type: 'SetGoAheadSignal' | 'ApplyAtExpectedBlock';
  }

  /** @name PolkadotPrimitivesV7UpgradeGoAhead (818) */
  interface PolkadotPrimitivesV7UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
    readonly type: 'Abort' | 'GoAhead';
  }

  /** @name PolkadotPrimitivesV7UpgradeRestriction (819) */
  interface PolkadotPrimitivesV7UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name PolkadotPrimitivesV7SessionInfo (835) */
  interface PolkadotPrimitivesV7SessionInfo extends Struct {
    readonly activeValidatorIndices: Vec<u32>;
    readonly randomSeed: U8aFixed;
    readonly disputePeriod: u32;
    readonly validators: PolkadotPrimitivesV7IndexedVecValidatorIndex;
    readonly discoveryKeys: Vec<SpAuthorityDiscoveryAppPublic>;
    readonly assignmentKeys: Vec<PolkadotPrimitivesV7AssignmentAppPublic>;
    readonly validatorGroups: PolkadotPrimitivesV7IndexedVecGroupIndex;
    readonly nCores: u32;
    readonly zerothDelayTrancheWidth: u32;
    readonly relayVrfModuloSamples: u32;
    readonly nDelayTranches: u32;
    readonly noShowSlots: u32;
    readonly neededApprovals: u32;
  }

  /** @name PolkadotPrimitivesV7IndexedVecValidatorIndex (836) */
  interface PolkadotPrimitivesV7IndexedVecValidatorIndex extends Vec<PolkadotPrimitivesV7ValidatorAppPublic> {}

  /** @name PolkadotPrimitivesV7IndexedVecGroupIndex (837) */
  interface PolkadotPrimitivesV7IndexedVecGroupIndex extends Vec<Vec<u32>> {}

  /** @name PolkadotPrimitivesV7DisputeState (839) */
  interface PolkadotPrimitivesV7DisputeState extends Struct {
    readonly validatorsFor: BitVec;
    readonly validatorsAgainst: BitVec;
    readonly start: u32;
    readonly concludedAt: Option<u32>;
  }

  /** @name PolkadotPrimitivesV7SlashingPendingSlashes (842) */
  interface PolkadotPrimitivesV7SlashingPendingSlashes extends Struct {
    readonly keys_: BTreeMap<u32, PolkadotPrimitivesV7ValidatorAppPublic>;
    readonly kind: PolkadotPrimitivesV7SlashingSlashingOffenceKind;
  }

  /** @name PolkadotRuntimeParachainsAssignerOnDemandTypesCoreAffinityCount (847) */
  interface PolkadotRuntimeParachainsAssignerOnDemandTypesCoreAffinityCount extends Struct {
    readonly coreIndex: u32;
    readonly count: u32;
  }

  /** @name PolkadotRuntimeParachainsAssignerOnDemandTypesQueueStatusType (848) */
  interface PolkadotRuntimeParachainsAssignerOnDemandTypesQueueStatusType extends Struct {
    readonly traffic: u128;
    readonly nextIndex: u32;
    readonly smallestIndex: u32;
    readonly freedIndices: BinaryHeapReverseQueueIndex;
  }

  /** @name BinaryHeapReverseQueueIndex (850) */
  interface BinaryHeapReverseQueueIndex extends Vec<u32> {}

  /** @name BinaryHeapEnqueuedOrder (853) */
  interface BinaryHeapEnqueuedOrder extends Vec<PolkadotRuntimeParachainsAssignerOnDemandTypesEnqueuedOrder> {}

  /** @name PolkadotRuntimeParachainsAssignerOnDemandTypesEnqueuedOrder (854) */
  interface PolkadotRuntimeParachainsAssignerOnDemandTypesEnqueuedOrder extends Struct {
    readonly paraId: u32;
    readonly idx: u32;
  }

  /** @name PolkadotRuntimeParachainsAssignerOnDemandPalletError (858) */
  interface PolkadotRuntimeParachainsAssignerOnDemandPalletError extends Enum {
    readonly isQueueFull: boolean;
    readonly isSpotPriceHigherThanMaxAmount: boolean;
    readonly type: 'QueueFull' | 'SpotPriceHigherThanMaxAmount';
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeSchedule (860) */
  interface PolkadotRuntimeParachainsAssignerCoretimeSchedule extends Struct {
    readonly assignments: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, u16]>>;
    readonly endHint: Option<u32>;
    readonly nextSchedule: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor (861) */
  interface PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor extends Struct {
    readonly queue: Option<PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor>;
    readonly currentWork: Option<PolkadotRuntimeParachainsAssignerCoretimeWorkState>;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor (863) */
  interface PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor extends Struct {
    readonly first: u32;
    readonly last: u32;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeWorkState (865) */
  interface PolkadotRuntimeParachainsAssignerCoretimeWorkState extends Struct {
    readonly assignments: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, PolkadotRuntimeParachainsAssignerCoretimeAssignmentState]>>;
    readonly endHint: Option<u32>;
    readonly pos: u16;
    readonly step: u16;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeAssignmentState (868) */
  interface PolkadotRuntimeParachainsAssignerCoretimeAssignmentState extends Struct {
    readonly ratio: u16;
    readonly remaining: u16;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimePalletError (869) */
  interface PolkadotRuntimeParachainsAssignerCoretimePalletError extends Enum {
    readonly isAssignmentsEmpty: boolean;
    readonly isOverScheduled: boolean;
    readonly isUnderScheduled: boolean;
    readonly isDisallowedInsert: boolean;
    readonly isDuplicateInsert: boolean;
    readonly isAssignmentsNotSorted: boolean;
    readonly type: 'AssignmentsEmpty' | 'OverScheduled' | 'UnderScheduled' | 'DisallowedInsert' | 'DuplicateInsert' | 'AssignmentsNotSorted';
  }

  /** @name PolkadotRuntimeParachainsCoretimePalletError (882) */
  interface PolkadotRuntimeParachainsCoretimePalletError extends Enum {
    readonly isNotBroker: boolean;
    readonly isRequestedFutureRevenue: boolean;
    readonly isAssetTransferFailed: boolean;
    readonly type: 'NotBroker' | 'RequestedFutureRevenue' | 'AssetTransferFailed';
  }

  /** @name StagingKusamaRuntimeRuntime (929) */
  type StagingKusamaRuntimeRuntime = Null;

} // declare module
