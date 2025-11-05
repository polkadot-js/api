// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Compact, Enum, Null, Option, Struct, Vec, bool, u16, u32 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, PerU16, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name StagingKusamaRuntimeSessionKeys (138) */
  interface StagingKusamaRuntimeSessionKeys extends Struct {
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly paraValidator: PolkadotPrimitivesV8ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV8AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
    readonly beefy: SpConsensusBeefyEcdsaCryptoPublic;
  }

  /** @name StagingKusamaRuntimeOriginCaller (160) */
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

  /** @name StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin (162) */
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

  /** @name StagingKusamaRuntimeRuntimeParameters (172) */
  interface StagingKusamaRuntimeRuntimeParameters extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingKusamaRuntimeDynamicParamsInflationParameters;
    readonly isTreasury: boolean;
    readonly asTreasury: StagingKusamaRuntimeDynamicParamsTreasuryParameters;
    readonly type: 'Inflation' | 'Treasury';
  }

  /** @name StagingKusamaRuntimeDynamicParamsInflationParameters (173) */
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

  /** @name StagingKusamaRuntimeDynamicParamsInflationMinInflation (174) */
  type StagingKusamaRuntimeDynamicParamsInflationMinInflation = Null;

  /** @name StagingKusamaRuntimeDynamicParamsInflationMaxInflation (177) */
  type StagingKusamaRuntimeDynamicParamsInflationMaxInflation = Null;

  /** @name StagingKusamaRuntimeDynamicParamsInflationIdealStake (178) */
  type StagingKusamaRuntimeDynamicParamsInflationIdealStake = Null;

  /** @name StagingKusamaRuntimeDynamicParamsInflationFalloff (179) */
  type StagingKusamaRuntimeDynamicParamsInflationFalloff = Null;

  /** @name StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots (180) */
  type StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots = Null;

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryParameters (182) */
  interface StagingKusamaRuntimeDynamicParamsTreasuryParameters extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: ITuple<[StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion, Option<Permill>]>;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: ITuple<[StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination, Option<StagingKusamaRuntimeBurnDestinationAccount>]>;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion (183) */
  type StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion = Null;

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination (186) */
  type StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination = Null;

  /** @name StagingKusamaRuntimeBurnDestinationAccount (188) */
  interface StagingKusamaRuntimeBurnDestinationAccount extends Option<AccountId32> {}

  /** @name KusamaRuntimeConstantsProxyProxyType (209) */
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

  /** @name StagingKusamaRuntimeNposCompactSolution24 (219) */
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

  /** @name PalletRcMigratorRecoveryRecoveryStage (539) */
  interface PalletRcMigratorRecoveryRecoveryStage extends Enum {
    readonly isRecoverable: boolean;
    readonly asRecoverable: Option<AccountId32>;
    readonly isActiveRecoveries: boolean;
    readonly asActiveRecoveries: Option<ITuple<[AccountId32, AccountId32]>>;
    readonly isProxy: boolean;
    readonly asProxy: Option<AccountId32>;
    readonly isFinished: boolean;
    readonly type: 'Recoverable' | 'ActiveRecoveries' | 'Proxy' | 'Finished';
  }

  /** @name PalletRcMigratorSocietySocietyStage (543) */
  interface PalletRcMigratorSocietySocietyStage extends Enum {
    readonly isValues: boolean;
    readonly isMembers: boolean;
    readonly asMembers: Option<AccountId32>;
    readonly isPayouts: boolean;
    readonly asPayouts: Option<AccountId32>;
    readonly isMemberByIndex: boolean;
    readonly asMemberByIndex: Option<u32>;
    readonly isSuspendedMembers: boolean;
    readonly asSuspendedMembers: Option<AccountId32>;
    readonly isCandidates: boolean;
    readonly asCandidates: Option<AccountId32>;
    readonly isVotes: boolean;
    readonly asVotes: Option<ITuple<[AccountId32, AccountId32]>>;
    readonly isVoteClearCursor: boolean;
    readonly asVoteClearCursor: Option<AccountId32>;
    readonly isDefenderVotes: boolean;
    readonly asDefenderVotes: Option<ITuple<[u32, AccountId32]>>;
    readonly isFinished: boolean;
    readonly type: 'Values' | 'Members' | 'Payouts' | 'MemberByIndex' | 'SuspendedMembers' | 'Candidates' | 'Votes' | 'VoteClearCursor' | 'DefenderVotes' | 'Finished';
  }

  /** @name StagingKusamaRuntimeRuntimeParametersKey (566) */
  interface StagingKusamaRuntimeRuntimeParametersKey extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingKusamaRuntimeDynamicParamsInflationParametersKey;
    readonly isTreasury: boolean;
    readonly asTreasury: StagingKusamaRuntimeDynamicParamsTreasuryParametersKey;
    readonly type: 'Inflation' | 'Treasury';
  }

  /** @name StagingKusamaRuntimeDynamicParamsInflationParametersKey (567) */
  interface StagingKusamaRuntimeDynamicParamsInflationParametersKey extends Enum {
    readonly isMinInflation: boolean;
    readonly isMaxInflation: boolean;
    readonly isIdealStake: boolean;
    readonly isFalloff: boolean;
    readonly isUseAuctionSlots: boolean;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff' | 'UseAuctionSlots';
  }

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryParametersKey (568) */
  interface StagingKusamaRuntimeDynamicParamsTreasuryParametersKey extends Enum {
    readonly isBurnPortion: boolean;
    readonly isBurnDestination: boolean;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name StagingKusamaRuntimeRuntimeParametersValue (570) */
  interface StagingKusamaRuntimeRuntimeParametersValue extends Enum {
    readonly isInflation: boolean;
    readonly asInflation: StagingKusamaRuntimeDynamicParamsInflationParametersValue;
    readonly isTreasury: boolean;
    readonly asTreasury: StagingKusamaRuntimeDynamicParamsTreasuryParametersValue;
    readonly type: 'Inflation' | 'Treasury';
  }

  /** @name StagingKusamaRuntimeDynamicParamsInflationParametersValue (571) */
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

  /** @name StagingKusamaRuntimeDynamicParamsTreasuryParametersValue (572) */
  interface StagingKusamaRuntimeDynamicParamsTreasuryParametersValue extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: Permill;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: StagingKusamaRuntimeBurnDestinationAccount;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name PalletRecoveryDepositKind (579) */
  interface PalletRecoveryDepositKind extends Enum {
    readonly isRecoveryConfig: boolean;
    readonly isActiveRecoveryFor: boolean;
    readonly asActiveRecoveryFor: AccountId32;
    readonly type: 'RecoveryConfig' | 'ActiveRecoveryFor';
  }

  /** @name StagingKusamaRuntimeRuntime (580) */
  type StagingKusamaRuntimeRuntime = Null;

  /** @name StagingKusamaRuntimeRuntimeHoldReason (668) */
  interface StagingKusamaRuntimeRuntimeHoldReason extends Enum {
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingPalletHoldReason;
    readonly isSession: boolean;
    readonly asSession: PalletSessionHoldReason;
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingHoldReason;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmHoldReason;
    readonly type: 'Staking' | 'Session' | 'Preimage' | 'DelegatedStaking' | 'XcmPallet';
  }

  /** @name StagingKusamaRuntimeRuntimeFreezeReason (677) */
  interface StagingKusamaRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name StagingKusamaRuntimeRuntimeError (1159) */
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
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingError;
    readonly isStakingAhClient: boolean;
    readonly asStakingAhClient: PalletStakingAsyncAhClientError;
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
    readonly isRcMigrator: boolean;
    readonly asRcMigrator: PalletRcMigratorError;
    readonly type: 'System' | 'Babe' | 'Indices' | 'Balances' | 'Staking' | 'Session' | 'Grandpa' | 'Treasury' | 'Claims' | 'ConvictionVoting' | 'Referenda' | 'FellowshipCollective' | 'FellowshipReferenda' | 'Utility' | 'Society' | 'Recovery' | 'Vesting' | 'Scheduler' | 'Proxy' | 'Multisig' | 'Preimage' | 'Bounties' | 'ElectionProviderMultiPhase' | 'VoterList' | 'ChildBounties' | 'NominationPools' | 'FastUnstake' | 'Whitelist' | 'DelegatedStaking' | 'StakingAhClient' | 'Configuration' | 'ParaInclusion' | 'ParaInherent' | 'Paras' | 'Hrmp' | 'ParasDisputes' | 'ParasSlashing' | 'OnDemandAssignmentProvider' | 'CoretimeAssignmentProvider' | 'Registrar' | 'Slots' | 'Auctions' | 'Crowdloan' | 'Coretime' | 'XcmPallet' | 'MessageQueue' | 'AssetRate' | 'Beefy' | 'RcMigrator';
  }

} // declare module
