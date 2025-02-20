// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { BTreeMap, BitVec, Bytes, Compact, Enum, Null, Option, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256, PerU16, Perbill, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name StagingKusamaRuntimeSessionKeys (127) */
  interface StagingKusamaRuntimeSessionKeys extends Struct {
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly paraValidator: PolkadotPrimitivesV8ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV8AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
    readonly beefy: SpConsensusBeefyEcdsaCryptoPublic;
  }

  /** @name PolkadotPrimitivesV8ValidatorAppPublic (128) */
  interface PolkadotPrimitivesV8ValidatorAppPublic extends U8aFixed {}

  /** @name PolkadotPrimitivesV8AssignmentAppPublic (129) */
  interface PolkadotPrimitivesV8AssignmentAppPublic extends U8aFixed {}

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
    readonly isTreasury: boolean;
    readonly asTreasury: StagingKusamaRuntimeDynamicParamsTreasuryParameters;
    readonly type: 'Inflation' | 'Treasury';
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

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryParameters (173) */
  interface StagingKusamaRuntimeDynamicParamsTreasuryParameters extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: ITuple<[StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion, Option<Permill>]>;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: ITuple<[StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination, Option<StagingKusamaRuntimeBurnDestinationAccount>]>;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion (174) */
  type StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion = Null;

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination (177) */
  type StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination = Null;

  /** @name StagingKusamaRuntimeBurnDestinationAccount (179) */
  interface StagingKusamaRuntimeBurnDestinationAccount extends Option<AccountId32> {}

  /** @name StagingKusamaRuntimeProxyType (199) */
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
    readonly isParaRegistration: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | 'Spokesperson' | 'ParaRegistration';
  }

  /** @name StagingKusamaRuntimeNposCompactSolution24 (209) */
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

  /** @name PolkadotPrimitivesV8AsyncBackingAsyncBackingParams (310) */
  interface PolkadotPrimitivesV8AsyncBackingAsyncBackingParams extends Struct {
    readonly maxCandidateDepth: u32;
    readonly allowedAncestryLen: u32;
  }

  /** @name PolkadotPrimitivesV8ExecutorParams (311) */
  interface PolkadotPrimitivesV8ExecutorParams extends Vec<PolkadotPrimitivesV8ExecutorParamsExecutorParam> {}

  /** @name PolkadotPrimitivesV8ExecutorParamsExecutorParam (313) */
  interface PolkadotPrimitivesV8ExecutorParamsExecutorParam extends Enum {
    readonly isMaxMemoryPages: boolean;
    readonly asMaxMemoryPages: u32;
    readonly isStackLogicalMax: boolean;
    readonly asStackLogicalMax: u32;
    readonly isStackNativeMax: boolean;
    readonly asStackNativeMax: u32;
    readonly isPrecheckingMaxMemory: boolean;
    readonly asPrecheckingMaxMemory: u64;
    readonly isPvfPrepTimeout: boolean;
    readonly asPvfPrepTimeout: ITuple<[PolkadotPrimitivesV8PvfPrepKind, u64]>;
    readonly isPvfExecTimeout: boolean;
    readonly asPvfExecTimeout: ITuple<[PolkadotPrimitivesV8PvfExecKind, u64]>;
    readonly isWasmExtBulkMemory: boolean;
    readonly type: 'MaxMemoryPages' | 'StackLogicalMax' | 'StackNativeMax' | 'PrecheckingMaxMemory' | 'PvfPrepTimeout' | 'PvfExecTimeout' | 'WasmExtBulkMemory';
  }

  /** @name PolkadotPrimitivesV8PvfPrepKind (314) */
  interface PolkadotPrimitivesV8PvfPrepKind extends Enum {
    readonly isPrecheck: boolean;
    readonly isPrepare: boolean;
    readonly type: 'Precheck' | 'Prepare';
  }

  /** @name PolkadotPrimitivesV8PvfExecKind (315) */
  interface PolkadotPrimitivesV8PvfExecKind extends Enum {
    readonly isBacking: boolean;
    readonly isApproval: boolean;
    readonly type: 'Backing' | 'Approval';
  }

  /** @name PolkadotPrimitivesV8ApprovalVotingParams (316) */
  interface PolkadotPrimitivesV8ApprovalVotingParams extends Struct {
    readonly maxApprovalCoalesceCount: u32;
  }

  /** @name PolkadotPrimitivesV8SchedulerParams (317) */
  interface PolkadotPrimitivesV8SchedulerParams extends Struct {
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

  /** @name PolkadotPrimitivesV8InherentData (321) */
  interface PolkadotPrimitivesV8InherentData extends Struct {
    readonly bitfields: Vec<PolkadotPrimitivesV8SignedUncheckedSigned>;
    readonly backedCandidates: Vec<PolkadotPrimitivesV8BackedCandidate>;
    readonly disputes: Vec<PolkadotPrimitivesV8DisputeStatementSet>;
    readonly parentHeader: SpRuntimeHeader;
  }

  /** @name PolkadotPrimitivesV8SignedUncheckedSigned (323) */
  interface PolkadotPrimitivesV8SignedUncheckedSigned extends Struct {
    readonly payload: BitVec;
    readonly validatorIndex: u32;
    readonly signature: PolkadotPrimitivesV8ValidatorAppSignature;
  }

  /** @name PolkadotPrimitivesV8ValidatorAppSignature (328) */
  interface PolkadotPrimitivesV8ValidatorAppSignature extends U8aFixed {}

  /** @name PolkadotPrimitivesV8BackedCandidate (330) */
  interface PolkadotPrimitivesV8BackedCandidate extends Struct {
    readonly candidate: PolkadotPrimitivesV8CommittedCandidateReceipt;
    readonly validityVotes: Vec<PolkadotPrimitivesV8ValidityAttestation>;
    readonly validatorIndices: BitVec;
  }

  /** @name PolkadotPrimitivesV8CommittedCandidateReceipt (331) */
  interface PolkadotPrimitivesV8CommittedCandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV8CandidateDescriptor;
    readonly commitments: PolkadotPrimitivesV8CandidateCommitments;
  }

  /** @name PolkadotPrimitivesV8CandidateDescriptor (332) */
  interface PolkadotPrimitivesV8CandidateDescriptor extends Struct {
    readonly paraId: u32;
    readonly relayParent: H256;
    readonly collator: PolkadotPrimitivesV8CollatorAppPublic;
    readonly persistedValidationDataHash: H256;
    readonly povHash: H256;
    readonly erasureRoot: H256;
    readonly signature: PolkadotPrimitivesV8CollatorAppSignature;
    readonly paraHead: H256;
    readonly validationCodeHash: H256;
  }

  /** @name PolkadotPrimitivesV8CollatorAppPublic (333) */
  interface PolkadotPrimitivesV8CollatorAppPublic extends U8aFixed {}

  /** @name PolkadotPrimitivesV8CollatorAppSignature (334) */
  interface PolkadotPrimitivesV8CollatorAppSignature extends U8aFixed {}

  /** @name PolkadotPrimitivesV8CandidateCommitments (336) */
  interface PolkadotPrimitivesV8CandidateCommitments extends Struct {
    readonly upwardMessages: Vec<Bytes>;
    readonly horizontalMessages: Vec<PolkadotCorePrimitivesOutboundHrmpMessage>;
    readonly newValidationCode: Option<Bytes>;
    readonly headData: Bytes;
    readonly processedDownwardMessages: u32;
    readonly hrmpWatermark: u32;
  }

  /** @name PolkadotPrimitivesV8ValidityAttestation (345) */
  interface PolkadotPrimitivesV8ValidityAttestation extends Enum {
    readonly isImplicit: boolean;
    readonly asImplicit: PolkadotPrimitivesV8ValidatorAppSignature;
    readonly isExplicit: boolean;
    readonly asExplicit: PolkadotPrimitivesV8ValidatorAppSignature;
    readonly type: 'Implicit' | 'Explicit';
  }

  /** @name PolkadotPrimitivesV8DisputeStatementSet (347) */
  interface PolkadotPrimitivesV8DisputeStatementSet extends Struct {
    readonly candidateHash: H256;
    readonly session: u32;
    readonly statements: Vec<ITuple<[PolkadotPrimitivesV8DisputeStatement, u32, PolkadotPrimitivesV8ValidatorAppSignature]>>;
  }

  /** @name PolkadotPrimitivesV8DisputeStatement (351) */
  interface PolkadotPrimitivesV8DisputeStatement extends Enum {
    readonly isValid: boolean;
    readonly asValid: PolkadotPrimitivesV8ValidDisputeStatementKind;
    readonly isInvalid: boolean;
    readonly asInvalid: PolkadotPrimitivesV8InvalidDisputeStatementKind;
    readonly type: 'Valid' | 'Invalid';
  }

  /** @name PolkadotPrimitivesV8ValidDisputeStatementKind (352) */
  interface PolkadotPrimitivesV8ValidDisputeStatementKind extends Enum {
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

  /** @name PolkadotPrimitivesV8InvalidDisputeStatementKind (354) */
  interface PolkadotPrimitivesV8InvalidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
    readonly type: 'Explicit';
  }

  /** @name PolkadotPrimitivesV8PvfCheckStatement (356) */
  interface PolkadotPrimitivesV8PvfCheckStatement extends Struct {
    readonly accept: bool;
    readonly subject: H256;
    readonly sessionIndex: u32;
    readonly validatorIndex: u32;
  }

  /** @name PolkadotPrimitivesV8SlashingDisputeProof (362) */
  interface PolkadotPrimitivesV8SlashingDisputeProof extends Struct {
    readonly timeSlot: PolkadotPrimitivesV8SlashingDisputesTimeSlot;
    readonly kind: PolkadotPrimitivesV8SlashingSlashingOffenceKind;
    readonly validatorIndex: u32;
    readonly validatorId: PolkadotPrimitivesV8ValidatorAppPublic;
  }

  /** @name PolkadotPrimitivesV8SlashingDisputesTimeSlot (363) */
  interface PolkadotPrimitivesV8SlashingDisputesTimeSlot extends Struct {
    readonly sessionIndex: u32;
    readonly candidateHash: H256;
  }

  /** @name PolkadotPrimitivesV8SlashingSlashingOffenceKind (364) */
  interface PolkadotPrimitivesV8SlashingSlashingOffenceKind extends Enum {
    readonly isForInvalid: boolean;
    readonly isAgainstValid: boolean;
    readonly type: 'ForInvalid' | 'AgainstValid';
  }

  /** @name PolkadotRuntimeParachainsOnDemandPalletCall (365) */
  interface PolkadotRuntimeParachainsOnDemandPalletCall extends Enum {
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

  /** @name StagingKusamaRuntimeRuntimeParametersKey (491) */
  interface StagingKusamaRuntimeRuntimeParametersKey extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingKusamaRuntimeDynamicParamsInflationParametersKey;
    readonly isTreasury: boolean;
    readonly asTreasury: StagingKusamaRuntimeDynamicParamsTreasuryParametersKey;
    readonly type: 'Inflation' | 'Treasury';
  }

  /** @name StagingKusamaRuntimeDynamicParamsInflationParametersKey (492) */
  interface StagingKusamaRuntimeDynamicParamsInflationParametersKey extends Enum {
    readonly isMinInflation: boolean;
    readonly isMaxInflation: boolean;
    readonly isIdealStake: boolean;
    readonly isFalloff: boolean;
    readonly isUseAuctionSlots: boolean;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff' | 'UseAuctionSlots';
  }

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryParametersKey (493) */
  interface StagingKusamaRuntimeDynamicParamsTreasuryParametersKey extends Enum {
    readonly isBurnPortion: boolean;
    readonly isBurnDestination: boolean;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name StagingKusamaRuntimeRuntimeParametersValue (495) */
  interface StagingKusamaRuntimeRuntimeParametersValue extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingKusamaRuntimeDynamicParamsInflationParametersValue;
    readonly isTreasury: boolean;
    readonly asTreasury: StagingKusamaRuntimeDynamicParamsTreasuryParametersValue;
    readonly type: 'Inflation' | 'Treasury';
  }

  /** @name StagingKusamaRuntimeDynamicParamsInflationParametersValue (496) */
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

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryParametersValue (497) */
  interface StagingKusamaRuntimeDynamicParamsTreasuryParametersValue extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: Permill;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: StagingKusamaRuntimeBurnDestinationAccount;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name PalletDelegatedStakingEvent (521) */
  interface PalletDelegatedStakingEvent extends Enum {
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly agent: AccountId32;
      readonly delegator: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReleased: boolean;
    readonly asReleased: {
      readonly agent: AccountId32;
      readonly delegator: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly agent: AccountId32;
      readonly delegator: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMigratedDelegation: boolean;
    readonly asMigratedDelegation: {
      readonly agent: AccountId32;
      readonly delegator: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Delegated' | 'Released' | 'Slashed' | 'MigratedDelegation';
  }

  /** @name PolkadotPrimitivesV8CandidateReceipt (523) */
  interface PolkadotPrimitivesV8CandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV8CandidateDescriptor;
    readonly commitmentsHash: H256;
  }

  /** @name PolkadotRuntimeParachainsOnDemandPalletEvent (531) */
  interface PolkadotRuntimeParachainsOnDemandPalletEvent extends Enum {
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

  /** @name StagingKusamaRuntimeRuntimeHoldReason (585) */
  interface StagingKusamaRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isNis: boolean;
    readonly asNis: PalletNisHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingHoldReason;
    readonly type: 'Preimage' | 'Nis' | 'DelegatedStaking';
  }

  /** @name PalletDelegatedStakingHoldReason (588) */
  interface PalletDelegatedStakingHoldReason extends Enum {
    readonly isStakingDelegation: boolean;
    readonly type: 'StakingDelegation';
  }

  /** @name StagingKusamaRuntimeRuntimeFreezeReason (592) */
  interface StagingKusamaRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name FrameSupportTokensMiscIdAmount (764) */
  interface FrameSupportTokensMiscIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletDelegatedStakingDelegation (794) */
  interface PalletDelegatedStakingDelegation extends Struct {
    readonly agent: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletDelegatedStakingAgentLedger (795) */
  interface PalletDelegatedStakingAgentLedger extends Struct {
    readonly payee: AccountId32;
    readonly totalDelegated: Compact<u128>;
    readonly unclaimedWithdrawals: Compact<u128>;
    readonly pendingSlash: Compact<u128>;
  }

  /** @name PalletDelegatedStakingError (796) */
  interface PalletDelegatedStakingError extends Enum {
    readonly isNotAllowed: boolean;
    readonly isAlreadyStaking: boolean;
    readonly isInvalidRewardDestination: boolean;
    readonly isInvalidDelegation: boolean;
    readonly isNotEnoughFunds: boolean;
    readonly isNotAgent: boolean;
    readonly isNotDelegator: boolean;
    readonly isBadState: boolean;
    readonly isUnappliedSlash: boolean;
    readonly isNothingToSlash: boolean;
    readonly isWithdrawFailed: boolean;
    readonly isNotSupported: boolean;
    readonly type: 'NotAllowed' | 'AlreadyStaking' | 'InvalidRewardDestination' | 'InvalidDelegation' | 'NotEnoughFunds' | 'NotAgent' | 'NotDelegator' | 'BadState' | 'UnappliedSlash' | 'NothingToSlash' | 'WithdrawFailed' | 'NotSupported';
  }

  /** @name PolkadotPrimitivesV8ScrapedOnChainVotes (809) */
  interface PolkadotPrimitivesV8ScrapedOnChainVotes extends Struct {
    readonly session: u32;
    readonly backingValidatorsPerCandidate: Vec<ITuple<[PolkadotPrimitivesV8CandidateReceipt, Vec<ITuple<[u32, PolkadotPrimitivesV8ValidityAttestation]>>]>>;
    readonly disputes: Vec<PolkadotPrimitivesV8DisputeStatementSet>;
  }

  /** @name PolkadotPrimitivesV8UpgradeGoAhead (836) */
  interface PolkadotPrimitivesV8UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
    readonly type: 'Abort' | 'GoAhead';
  }

  /** @name PolkadotPrimitivesV8UpgradeRestriction (837) */
  interface PolkadotPrimitivesV8UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name PolkadotPrimitivesV8SessionInfo (853) */
  interface PolkadotPrimitivesV8SessionInfo extends Struct {
    readonly activeValidatorIndices: Vec<u32>;
    readonly randomSeed: U8aFixed;
    readonly disputePeriod: u32;
    readonly validators: PolkadotPrimitivesV8IndexedVecValidatorIndex;
    readonly discoveryKeys: Vec<SpAuthorityDiscoveryAppPublic>;
    readonly assignmentKeys: Vec<PolkadotPrimitivesV8AssignmentAppPublic>;
    readonly validatorGroups: PolkadotPrimitivesV8IndexedVecGroupIndex;
    readonly nCores: u32;
    readonly zerothDelayTrancheWidth: u32;
    readonly relayVrfModuloSamples: u32;
    readonly nDelayTranches: u32;
    readonly noShowSlots: u32;
    readonly neededApprovals: u32;
  }

  /** @name PolkadotPrimitivesV8IndexedVecValidatorIndex (854) */
  interface PolkadotPrimitivesV8IndexedVecValidatorIndex extends Vec<PolkadotPrimitivesV8ValidatorAppPublic> {}

  /** @name PolkadotPrimitivesV8IndexedVecGroupIndex (855) */
  interface PolkadotPrimitivesV8IndexedVecGroupIndex extends Vec<Vec<u32>> {}

  /** @name PolkadotPrimitivesV8DisputeState (857) */
  interface PolkadotPrimitivesV8DisputeState extends Struct {
    readonly validatorsFor: BitVec;
    readonly validatorsAgainst: BitVec;
    readonly start: u32;
    readonly concludedAt: Option<u32>;
  }

  /** @name PolkadotPrimitivesV8SlashingPendingSlashes (860) */
  interface PolkadotPrimitivesV8SlashingPendingSlashes extends Struct {
    readonly keys_: BTreeMap<u32, PolkadotPrimitivesV8ValidatorAppPublic>;
    readonly kind: PolkadotPrimitivesV8SlashingSlashingOffenceKind;
  }

  /** @name PolkadotRuntimeParachainsOnDemandTypesCoreAffinityCount (865) */
  interface PolkadotRuntimeParachainsOnDemandTypesCoreAffinityCount extends Struct {
    readonly coreIndex: u32;
    readonly count: u32;
  }

  /** @name PolkadotRuntimeParachainsOnDemandTypesQueueStatusType (866) */
  interface PolkadotRuntimeParachainsOnDemandTypesQueueStatusType extends Struct {
    readonly traffic: u128;
    readonly nextIndex: u32;
    readonly smallestIndex: u32;
    readonly freedIndices: BinaryHeapReverseQueueIndex;
  }

  /** @name PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder (872) */
  interface PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder extends Struct {
    readonly paraId: u32;
    readonly idx: u32;
  }

  /** @name PolkadotRuntimeParachainsOnDemandPalletError (876) */
  interface PolkadotRuntimeParachainsOnDemandPalletError extends Enum {
    readonly isQueueFull: boolean;
    readonly isSpotPriceHigherThanMaxAmount: boolean;
    readonly type: 'QueueFull' | 'SpotPriceHigherThanMaxAmount';
  }

  /** @name StagingKusamaRuntimeRuntime (946) */
  type StagingKusamaRuntimeRuntime = Null;

  /** @name PolkadotPrimitivesV8GroupRotationInfo (968) */
  interface PolkadotPrimitivesV8GroupRotationInfo extends Struct {
    readonly sessionStartBlock: u32;
    readonly groupRotationFrequency: u32;
    readonly now: u32;
  }

  /** @name PolkadotPrimitivesV8CoreState (970) */
  interface PolkadotPrimitivesV8CoreState extends Enum {
    readonly isOccupied: boolean;
    readonly asOccupied: PolkadotPrimitivesV8OccupiedCore;
    readonly isScheduled: boolean;
    readonly asScheduled: PolkadotPrimitivesV8ScheduledCore;
    readonly isFree: boolean;
    readonly type: 'Occupied' | 'Scheduled' | 'Free';
  }

  /** @name PolkadotPrimitivesV8OccupiedCore (971) */
  interface PolkadotPrimitivesV8OccupiedCore extends Struct {
    readonly nextUpOnAvailable: Option<PolkadotPrimitivesV8ScheduledCore>;
    readonly occupiedSince: u32;
    readonly timeOutAt: u32;
    readonly nextUpOnTimeOut: Option<PolkadotPrimitivesV8ScheduledCore>;
    readonly availability: BitVec;
    readonly groupResponsible: u32;
    readonly candidateHash: H256;
    readonly candidateDescriptor: PolkadotPrimitivesV8CandidateDescriptor;
  }

  /** @name PolkadotPrimitivesV8ScheduledCore (973) */
  interface PolkadotPrimitivesV8ScheduledCore extends Struct {
    readonly paraId: u32;
    readonly collator: Option<PolkadotPrimitivesV8CollatorAppPublic>;
  }

  /** @name PolkadotPrimitivesV8OccupiedCoreAssumption (975) */
  interface PolkadotPrimitivesV8OccupiedCoreAssumption extends Enum {
    readonly isIncluded: boolean;
    readonly isTimedOut: boolean;
    readonly isFree: boolean;
    readonly type: 'Included' | 'TimedOut' | 'Free';
  }

  /** @name PolkadotPrimitivesV8PersistedValidationData (977) */
  interface PolkadotPrimitivesV8PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name PolkadotPrimitivesV8CandidateEvent (982) */
  interface PolkadotPrimitivesV8CandidateEvent extends Enum {
    readonly isCandidateBacked: boolean;
    readonly asCandidateBacked: ITuple<[PolkadotPrimitivesV8CandidateReceipt, Bytes, u32, u32]>;
    readonly isCandidateIncluded: boolean;
    readonly asCandidateIncluded: ITuple<[PolkadotPrimitivesV8CandidateReceipt, Bytes, u32, u32]>;
    readonly isCandidateTimedOut: boolean;
    readonly asCandidateTimedOut: ITuple<[PolkadotPrimitivesV8CandidateReceipt, Bytes, u32]>;
    readonly type: 'CandidateBacked' | 'CandidateIncluded' | 'CandidateTimedOut';
  }

  /** @name PolkadotPrimitivesV8AsyncBackingBackingState (998) */
  interface PolkadotPrimitivesV8AsyncBackingBackingState extends Struct {
    readonly constraints: PolkadotPrimitivesV8AsyncBackingConstraints;
    readonly pendingAvailability: Vec<PolkadotPrimitivesV8AsyncBackingCandidatePendingAvailability>;
  }

  /** @name PolkadotPrimitivesV8AsyncBackingConstraints (999) */
  interface PolkadotPrimitivesV8AsyncBackingConstraints extends Struct {
    readonly minRelayParentNumber: u32;
    readonly maxPovSize: u32;
    readonly maxCodeSize: u32;
    readonly umpRemaining: u32;
    readonly umpRemainingBytes: u32;
    readonly maxUmpNumPerCandidate: u32;
    readonly dmpRemainingMessages: Vec<u32>;
    readonly hrmpInbound: PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations;
    readonly hrmpChannelsOut: Vec<ITuple<[u32, PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations]>>;
    readonly maxHrmpNumPerCandidate: u32;
    readonly requiredParent: Bytes;
    readonly validationCodeHash: H256;
    readonly upgradeRestriction: Option<PolkadotPrimitivesV8UpgradeRestriction>;
    readonly futureValidationCode: Option<ITuple<[u32, H256]>>;
  }

  /** @name PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations (1000) */
  interface PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations extends Struct {
    readonly validWatermarks: Vec<u32>;
  }

  /** @name PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations (1003) */
  interface PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations extends Struct {
    readonly bytesRemaining: u32;
    readonly messagesRemaining: u32;
  }

  /** @name PolkadotPrimitivesV8AsyncBackingCandidatePendingAvailability (1008) */
  interface PolkadotPrimitivesV8AsyncBackingCandidatePendingAvailability extends Struct {
    readonly candidateHash: H256;
    readonly descriptor: PolkadotPrimitivesV8CandidateDescriptor;
    readonly commitments: PolkadotPrimitivesV8CandidateCommitments;
    readonly relayParentNumber: u32;
    readonly maxPovSize: u32;
  }

  /** @name StagingKusamaRuntimeRuntimeError (1059) */
  interface StagingKusamaRuntimeRuntimeError extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSystemError;
    readonly isBabe: boolean;
    readonly asBabe: PalletBabeError;
    readonly isIndices: boolean;
    readonly asIndices: PalletIndicesError;
    readonly isBalances: boolean;
    readonly asBalances: PalletBalancesError;
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingPalletError;
    readonly isSession: boolean;
    readonly asSession: PalletSessionError;
    readonly isGrandpa: boolean;
    readonly asGrandpa: PalletGrandpaError;
    readonly isTreasury: boolean;
    readonly asTreasury: PalletTreasuryError;
    readonly isClaims: boolean;
    readonly asClaims: PolkadotRuntimeCommonClaimsPalletError;
    readonly isConvictionVoting: boolean;
    readonly asConvictionVoting: PalletConvictionVotingError;
    readonly isReferenda: boolean;
    readonly asReferenda: PalletReferendaError;
    readonly isFellowshipCollective: boolean;
    readonly asFellowshipCollective: PalletRankedCollectiveError;
    readonly isFellowshipReferenda: boolean;
    readonly asFellowshipReferenda: PalletReferendaError;
    readonly isUtility: boolean;
    readonly asUtility: PalletUtilityError;
    readonly isSociety: boolean;
    readonly asSociety: PalletSocietyError;
    readonly isRecovery: boolean;
    readonly asRecovery: PalletRecoveryError;
    readonly isVesting: boolean;
    readonly asVesting: PalletVestingError;
    readonly isScheduler: boolean;
    readonly asScheduler: PalletSchedulerError;
    readonly isProxy: boolean;
    readonly asProxy: PalletProxyError;
    readonly isMultisig: boolean;
    readonly asMultisig: PalletMultisigError;
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageError;
    readonly isBounties: boolean;
    readonly asBounties: PalletBountiesError;
    readonly isElectionProviderMultiPhase: boolean;
    readonly asElectionProviderMultiPhase: PalletElectionProviderMultiPhaseError;
    readonly isNis: boolean;
    readonly asNis: PalletNisError;
    readonly isVoterList: boolean;
    readonly asVoterList: PalletBagsListError;
    readonly isChildBounties: boolean;
    readonly asChildBounties: PalletChildBountiesError;
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsError;
    readonly isFastUnstake: boolean;
    readonly asFastUnstake: PalletFastUnstakeError;
    readonly isWhitelist: boolean;
    readonly asWhitelist: PalletWhitelistError;
    readonly isNisCounterpartBalances: boolean;
    readonly asNisCounterpartBalances: PalletBalancesError;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingError;
    readonly isConfiguration: boolean;
    readonly asConfiguration: PolkadotRuntimeParachainsConfigurationPalletError;
    readonly isParaInclusion: boolean;
    readonly asParaInclusion: PolkadotRuntimeParachainsInclusionPalletError;
    readonly isParaInherent: boolean;
    readonly asParaInherent: PolkadotRuntimeParachainsParasInherentPalletError;
    readonly isParas: boolean;
    readonly asParas: PolkadotRuntimeParachainsParasPalletError;
    readonly isHrmp: boolean;
    readonly asHrmp: PolkadotRuntimeParachainsHrmpPalletError;
    readonly isParasDisputes: boolean;
    readonly asParasDisputes: PolkadotRuntimeParachainsDisputesPalletError;
    readonly isParasSlashing: boolean;
    readonly asParasSlashing: PolkadotRuntimeParachainsDisputesSlashingPalletError;
    readonly isOnDemandAssignmentProvider: boolean;
    readonly asOnDemandAssignmentProvider: PolkadotRuntimeParachainsOnDemandPalletError;
    readonly isCoretimeAssignmentProvider: boolean;
    readonly asCoretimeAssignmentProvider: PolkadotRuntimeParachainsAssignerCoretimePalletError;
    readonly isRegistrar: boolean;
    readonly asRegistrar: PolkadotRuntimeCommonParasRegistrarPalletError;
    readonly isSlots: boolean;
    readonly asSlots: PolkadotRuntimeCommonSlotsPalletError;
    readonly isAuctions: boolean;
    readonly asAuctions: PolkadotRuntimeCommonAuctionsPalletError;
    readonly isCrowdloan: boolean;
    readonly asCrowdloan: PolkadotRuntimeCommonCrowdloanPalletError;
    readonly isCoretime: boolean;
    readonly asCoretime: PolkadotRuntimeParachainsCoretimePalletError;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmError;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: PalletMessageQueueError;
    readonly isAssetRate: boolean;
    readonly asAssetRate: PalletAssetRateError;
    readonly isBeefy: boolean;
    readonly asBeefy: PalletBeefyError;
    readonly type: 'System' | 'Babe' | 'Indices' | 'Balances' | 'Staking' | 'Session' | 'Grandpa' | 'Treasury' | 'Claims' | 'ConvictionVoting' | 'Referenda' | 'FellowshipCollective' | 'FellowshipReferenda' | 'Utility' | 'Society' | 'Recovery' | 'Vesting' | 'Scheduler' | 'Proxy' | 'Multisig' | 'Preimage' | 'Bounties' | 'ElectionProviderMultiPhase' | 'Nis' | 'VoterList' | 'ChildBounties' | 'NominationPools' | 'FastUnstake' | 'Whitelist' | 'NisCounterpartBalances' | 'DelegatedStaking' | 'Configuration' | 'ParaInclusion' | 'ParaInherent' | 'Paras' | 'Hrmp' | 'ParasDisputes' | 'ParasSlashing' | 'OnDemandAssignmentProvider' | 'CoretimeAssignmentProvider' | 'Registrar' | 'Slots' | 'Auctions' | 'Crowdloan' | 'Coretime' | 'XcmPallet' | 'MessageQueue' | 'AssetRate' | 'Beefy';
  }

} // declare module
