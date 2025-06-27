// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Bytes, Compact, Enum, Null, Option, Struct, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256, PerU16, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name StagingKusamaRuntimeSessionKeys (136) */
  interface StagingKusamaRuntimeSessionKeys extends Struct {
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly paraValidator: PolkadotPrimitivesV8ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV8AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
    readonly beefy: SpConsensusBeefyEcdsaCryptoPublic;
  }

  /** @name StagingKusamaRuntimeOriginCaller (158) */
  interface StagingKusamaRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly isParachainsOrigin: boolean;
    readonly asParachainsOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmOrigin;
    readonly type: 'System' | 'Origins' | 'ParachainsOrigin' | 'XcmPallet';
  }

  /** @name StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin (160) */
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

  /** @name StagingKusamaRuntimeRuntimeParameters (170) */
  interface StagingKusamaRuntimeRuntimeParameters extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingKusamaRuntimeDynamicParamsInflationParameters;
    readonly isTreasury: boolean;
    readonly asTreasury: StagingKusamaRuntimeDynamicParamsTreasuryParameters;
    readonly type: 'Inflation' | 'Treasury';
  }

  /** @name StagingKusamaRuntimeDynamicParamsInflationParameters (171) */
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

  /** @name StagingKusamaRuntimeDynamicParamsInflationMinInflation (172) */
  type StagingKusamaRuntimeDynamicParamsInflationMinInflation = Null;

  /** @name StagingKusamaRuntimeDynamicParamsInflationMaxInflation (175) */
  type StagingKusamaRuntimeDynamicParamsInflationMaxInflation = Null;

  /** @name StagingKusamaRuntimeDynamicParamsInflationIdealStake (176) */
  type StagingKusamaRuntimeDynamicParamsInflationIdealStake = Null;

  /** @name StagingKusamaRuntimeDynamicParamsInflationFalloff (177) */
  type StagingKusamaRuntimeDynamicParamsInflationFalloff = Null;

  /** @name StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots (178) */
  type StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots = Null;

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryParameters (180) */
  interface StagingKusamaRuntimeDynamicParamsTreasuryParameters extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: ITuple<[StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion, Option<Permill>]>;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: ITuple<[StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination, Option<StagingKusamaRuntimeBurnDestinationAccount>]>;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion (181) */
  type StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion = Null;

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination (184) */
  type StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination = Null;

  /** @name StagingKusamaRuntimeBurnDestinationAccount (186) */
  interface StagingKusamaRuntimeBurnDestinationAccount extends Option<AccountId32> {}

  /** @name KusamaRuntimeConstantsProxyProxyType (206) */
  interface KusamaRuntimeConstantsProxyProxyType extends Enum {
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

  /** @name StagingKusamaRuntimeNposCompactSolution24 (216) */
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

  /** @name StagingKusamaRuntimeRuntimeParametersKey (510) */
  interface StagingKusamaRuntimeRuntimeParametersKey extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingKusamaRuntimeDynamicParamsInflationParametersKey;
    readonly isTreasury: boolean;
    readonly asTreasury: StagingKusamaRuntimeDynamicParamsTreasuryParametersKey;
    readonly type: 'Inflation' | 'Treasury';
  }

  /** @name StagingKusamaRuntimeDynamicParamsInflationParametersKey (511) */
  interface StagingKusamaRuntimeDynamicParamsInflationParametersKey extends Enum {
    readonly isMinInflation: boolean;
    readonly isMaxInflation: boolean;
    readonly isIdealStake: boolean;
    readonly isFalloff: boolean;
    readonly isUseAuctionSlots: boolean;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff' | 'UseAuctionSlots';
  }

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryParametersKey (512) */
  interface StagingKusamaRuntimeDynamicParamsTreasuryParametersKey extends Enum {
    readonly isBurnPortion: boolean;
    readonly isBurnDestination: boolean;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name StagingKusamaRuntimeRuntimeParametersValue (514) */
  interface StagingKusamaRuntimeRuntimeParametersValue extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingKusamaRuntimeDynamicParamsInflationParametersValue;
    readonly isTreasury: boolean;
    readonly asTreasury: StagingKusamaRuntimeDynamicParamsTreasuryParametersValue;
    readonly type: 'Inflation' | 'Treasury';
  }

  /** @name StagingKusamaRuntimeDynamicParamsInflationParametersValue (515) */
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

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryParametersValue (516) */
  interface StagingKusamaRuntimeDynamicParamsTreasuryParametersValue extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: Permill;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: StagingKusamaRuntimeBurnDestinationAccount;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name XcmV3TraitsSendError (560) */
  interface XcmV3TraitsSendError extends Enum {
    readonly isNotApplicable: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isMissingArgument: boolean;
    readonly isFees: boolean;
    readonly type: 'NotApplicable' | 'Transport' | 'Unroutable' | 'DestinationUnsupported' | 'ExceedsMaxMessageSize' | 'MissingArgument' | 'Fees';
  }

  /** @name StagingKusamaRuntimeRuntimeHoldReason (608) */
  interface StagingKusamaRuntimeRuntimeHoldReason extends Enum {
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingPalletHoldReason;
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isNis: boolean;
    readonly asNis: PalletNisHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingHoldReason;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmHoldReason;
    readonly type: 'Staking' | 'Preimage' | 'Nis' | 'DelegatedStaking' | 'XcmPallet';
  }

  /** @name PalletXcmHoldReason (613) */
  interface PalletXcmHoldReason extends Enum {
    readonly isAuthorizeAlias: boolean;
    readonly type: 'AuthorizeAlias';
  }

  /** @name StagingKusamaRuntimeRuntimeFreezeReason (617) */
  interface StagingKusamaRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name FrameSupportTokensMiscIdAmount (791) */
  interface FrameSupportTokensMiscIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletXcmAuthorizedAliasesEntry (952) */
  interface PalletXcmAuthorizedAliasesEntry extends Struct {
    readonly aliasers: Vec<XcmRuntimeApisAuthorizedAliasesOriginAliaser>;
    readonly ticket: FrameSupportStorageDisabled;
  }

  /** @name FrameSupportStorageDisabled (953) */
  type FrameSupportStorageDisabled = Null;

  /** @name PalletXcmMaxAuthorizedAliases (954) */
  type PalletXcmMaxAuthorizedAliases = Null;

  /** @name XcmRuntimeApisAuthorizedAliasesOriginAliaser (956) */
  interface XcmRuntimeApisAuthorizedAliasesOriginAliaser extends Struct {
    readonly location: XcmVersionedLocation;
    readonly expiry: Option<u64>;
  }

  /** @name StagingKusamaRuntimeRuntime (983) */
  type StagingKusamaRuntimeRuntime = Null;

  /** @name PolkadotPrimitivesVstagingAsyncBackingConstraints (1052) */
  interface PolkadotPrimitivesVstagingAsyncBackingConstraints extends Struct {
    readonly minRelayParentNumber: u32;
    readonly maxPovSize: u32;
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
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

  /** @name StagingKusamaRuntimeRuntimeError (1099) */
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
