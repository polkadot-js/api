// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { BTreeMap, Compact, Enum, Null, Option, Result, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AccountId32, Call, H256, PerU16, Perbill, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name PalletBalancesUnexpectedKind (35) */
  interface PalletBalancesUnexpectedKind extends Enum {
    readonly isBalanceUpdated: boolean;
    readonly isFailedToMutateAccount: boolean;
    readonly type: 'BalanceUpdated' | 'FailedToMutateAccount';
  }

  /** @name PalletSessionHistoricalPalletEvent (46) */
  interface PalletSessionHistoricalPalletEvent extends Enum {
    readonly isRootStored: boolean;
    readonly asRootStored: {
      readonly index: u32;
    } & Struct;
    readonly isRootsPruned: boolean;
    readonly asRootsPruned: {
      readonly upTo: u32;
    } & Struct;
    readonly type: 'RootStored' | 'RootsPruned';
  }

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

  /** @name PalletStakingAsyncAhClientCall (317) */
  interface PalletStakingAsyncAhClientCall extends Enum {
    readonly isValidatorSet: boolean;
    readonly asValidatorSet: {
      readonly report: PalletStakingAsyncRcClientValidatorSetReport;
    } & Struct;
    readonly isSetMode: boolean;
    readonly asSetMode: {
      readonly mode: PalletStakingAsyncAhClientOperatingMode;
    } & Struct;
    readonly isForceOnMigrationEnd: boolean;
    readonly type: 'ValidatorSet' | 'SetMode' | 'ForceOnMigrationEnd';
  }

  /** @name PalletStakingAsyncRcClientValidatorSetReport (318) */
  interface PalletStakingAsyncRcClientValidatorSetReport extends Struct {
    readonly newValidatorSet: Vec<AccountId32>;
    readonly id: u32;
    readonly pruneUpTo: Option<u32>;
    readonly leftover: bool;
  }

  /** @name PalletStakingAsyncAhClientOperatingMode (319) */
  interface PalletStakingAsyncAhClientOperatingMode extends Enum {
    readonly isPassive: boolean;
    readonly isBuffered: boolean;
    readonly isActive: boolean;
    readonly type: 'Passive' | 'Buffered' | 'Active';
  }

  /** @name PolkadotPrimitivesVstagingDisputeProof (373) */
  interface PolkadotPrimitivesVstagingDisputeProof extends Struct {
    readonly timeSlot: PolkadotPrimitivesV8SlashingDisputesTimeSlot;
    readonly kind: PolkadotPrimitivesVstagingDisputeOffenceKind;
    readonly validatorIndex: u32;
    readonly validatorId: PolkadotPrimitivesV8ValidatorAppPublic;
  }

  /** @name PolkadotPrimitivesVstagingDisputeOffenceKind (375) */
  interface PolkadotPrimitivesVstagingDisputeOffenceKind extends Enum {
    readonly isForInvalidBacked: boolean;
    readonly isAgainstValid: boolean;
    readonly isForInvalidApproved: boolean;
    readonly type: 'ForInvalidBacked' | 'AgainstValid' | 'ForInvalidApproved';
  }

  /** @name PalletRcMigratorCall (502) */
  interface PalletRcMigratorCall extends Enum {
    readonly isForceSetStage: boolean;
    readonly asForceSetStage: {
      readonly stage: PalletRcMigratorMigrationStage;
    } & Struct;
    readonly isScheduleMigration: boolean;
    readonly asScheduleMigration: {
      readonly start: FrameSupportScheduleDispatchTime;
      readonly warmUp: FrameSupportScheduleDispatchTime;
      readonly coolOff: FrameSupportScheduleDispatchTime;
      readonly unsafeIgnoreStakingLockCheck: bool;
    } & Struct;
    readonly isStartDataMigration: boolean;
    readonly isReceiveQueryResponse: boolean;
    readonly asReceiveQueryResponse: {
      readonly queryId: u64;
      readonly response: StagingXcmV5Response;
    } & Struct;
    readonly isResendXcm: boolean;
    readonly asResendXcm: {
      readonly queryId: u64;
    } & Struct;
    readonly isSetUnprocessedMsgBuffer: boolean;
    readonly asSetUnprocessedMsgBuffer: {
      readonly new_: Option<u32>;
    } & Struct;
    readonly isSetAhUmpQueuePriority: boolean;
    readonly asSetAhUmpQueuePriority: {
      readonly new_: PalletRcMigratorQueuePriority;
    } & Struct;
    readonly isSetManager: boolean;
    readonly asSetManager: {
      readonly new_: Option<AccountId32>;
    } & Struct;
    readonly isSendXcmMessage: boolean;
    readonly asSendXcmMessage: {
      readonly dest: XcmVersionedLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isPreserveAccounts: boolean;
    readonly asPreserveAccounts: {
      readonly accounts: Vec<AccountId32>;
    } & Struct;
    readonly isSetCanceller: boolean;
    readonly asSetCanceller: {
      readonly new_: Option<AccountId32>;
    } & Struct;
    readonly isPauseMigration: boolean;
    readonly isCancelMigration: boolean;
    readonly isVoteManagerMultisig: boolean;
    readonly asVoteManagerMultisig: {
      readonly payload: PalletRcMigratorManagerMultisigVote;
      readonly sig: SpRuntimeMultiSignature;
    } & Struct;
    readonly type: 'ForceSetStage' | 'ScheduleMigration' | 'StartDataMigration' | 'ReceiveQueryResponse' | 'ResendXcm' | 'SetUnprocessedMsgBuffer' | 'SetAhUmpQueuePriority' | 'SetManager' | 'SendXcmMessage' | 'PreserveAccounts' | 'SetCanceller' | 'PauseMigration' | 'CancelMigration' | 'VoteManagerMultisig';
  }

  /** @name PalletRcMigratorMigrationStage (503) */
  interface PalletRcMigratorMigrationStage extends Enum {
    readonly isPending: boolean;
    readonly isMigrationPaused: boolean;
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly start: u32;
    } & Struct;
    readonly isWaitingForAh: boolean;
    readonly isWarmUp: boolean;
    readonly asWarmUp: {
      readonly endAt: u32;
    } & Struct;
    readonly isStarting: boolean;
    readonly isPureProxyCandidatesMigrationInit: boolean;
    readonly isAccountsMigrationInit: boolean;
    readonly isAccountsMigrationOngoing: boolean;
    readonly asAccountsMigrationOngoing: {
      readonly lastKey: Option<AccountId32>;
    } & Struct;
    readonly isAccountsMigrationDone: boolean;
    readonly isMultisigMigrationInit: boolean;
    readonly isMultisigMigrationOngoing: boolean;
    readonly asMultisigMigrationOngoing: {
      readonly lastKey: Option<ITuple<[AccountId32, U8aFixed]>>;
    } & Struct;
    readonly isMultisigMigrationDone: boolean;
    readonly isClaimsMigrationInit: boolean;
    readonly isClaimsMigrationOngoing: boolean;
    readonly asClaimsMigrationOngoing: {
      readonly currentKey: Option<PalletRcMigratorClaimsClaimsStage>;
    } & Struct;
    readonly isClaimsMigrationDone: boolean;
    readonly isProxyMigrationInit: boolean;
    readonly isProxyMigrationProxies: boolean;
    readonly asProxyMigrationProxies: {
      readonly lastKey: Option<AccountId32>;
    } & Struct;
    readonly isProxyMigrationAnnouncements: boolean;
    readonly asProxyMigrationAnnouncements: {
      readonly lastKey: Option<AccountId32>;
    } & Struct;
    readonly isProxyMigrationDone: boolean;
    readonly isPreimageMigrationInit: boolean;
    readonly isPreimageMigrationChunksOngoing: boolean;
    readonly asPreimageMigrationChunksOngoing: {
      readonly lastKey: Option<ITuple<[ITuple<[H256, u32]>, u32]>>;
    } & Struct;
    readonly isPreimageMigrationChunksDone: boolean;
    readonly isPreimageMigrationRequestStatusOngoing: boolean;
    readonly asPreimageMigrationRequestStatusOngoing: {
      readonly nextKey: Option<H256>;
    } & Struct;
    readonly isPreimageMigrationRequestStatusDone: boolean;
    readonly isPreimageMigrationLegacyRequestStatusInit: boolean;
    readonly isPreimageMigrationLegacyRequestStatusOngoing: boolean;
    readonly asPreimageMigrationLegacyRequestStatusOngoing: {
      readonly nextKey: Option<H256>;
    } & Struct;
    readonly isPreimageMigrationLegacyRequestStatusDone: boolean;
    readonly isPreimageMigrationDone: boolean;
    readonly isNomPoolsMigrationInit: boolean;
    readonly isNomPoolsMigrationOngoing: boolean;
    readonly asNomPoolsMigrationOngoing: {
      readonly nextKey: Option<PalletRcMigratorStakingNomPoolsNomPoolsStage>;
    } & Struct;
    readonly isNomPoolsMigrationDone: boolean;
    readonly isVestingMigrationInit: boolean;
    readonly isVestingMigrationOngoing: boolean;
    readonly asVestingMigrationOngoing: {
      readonly nextKey: Option<AccountId32>;
    } & Struct;
    readonly isVestingMigrationDone: boolean;
    readonly isDelegatedStakingMigrationInit: boolean;
    readonly isDelegatedStakingMigrationOngoing: boolean;
    readonly asDelegatedStakingMigrationOngoing: {
      readonly nextKey: Option<PalletRcMigratorStakingDelegatedStakingDelegatedStakingStage>;
    } & Struct;
    readonly isDelegatedStakingMigrationDone: boolean;
    readonly isIndicesMigrationInit: boolean;
    readonly isIndicesMigrationOngoing: boolean;
    readonly asIndicesMigrationOngoing: {
      readonly nextKey: Option<Null>;
    } & Struct;
    readonly isIndicesMigrationDone: boolean;
    readonly isReferendaMigrationInit: boolean;
    readonly isReferendaMigrationOngoing: boolean;
    readonly asReferendaMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorReferendaReferendaStage>;
    } & Struct;
    readonly isReferendaMigrationDone: boolean;
    readonly isBagsListMigrationInit: boolean;
    readonly isBagsListMigrationOngoing: boolean;
    readonly asBagsListMigrationOngoing: {
      readonly nextKey: Option<PalletRcMigratorStakingBagsListBagsListStage>;
    } & Struct;
    readonly isBagsListMigrationDone: boolean;
    readonly isSchedulerMigrationInit: boolean;
    readonly isSchedulerMigrationOngoing: boolean;
    readonly asSchedulerMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorSchedulerSchedulerStage>;
    } & Struct;
    readonly isSchedulerAgendaMigrationOngoing: boolean;
    readonly asSchedulerAgendaMigrationOngoing: {
      readonly lastKey: Option<u32>;
    } & Struct;
    readonly isSchedulerMigrationDone: boolean;
    readonly isConvictionVotingMigrationInit: boolean;
    readonly isConvictionVotingMigrationOngoing: boolean;
    readonly asConvictionVotingMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorConvictionVotingConvictionVotingStage>;
    } & Struct;
    readonly isConvictionVotingMigrationDone: boolean;
    readonly isBountiesMigrationInit: boolean;
    readonly isBountiesMigrationOngoing: boolean;
    readonly asBountiesMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorBountiesBountiesStage>;
    } & Struct;
    readonly isBountiesMigrationDone: boolean;
    readonly isChildBountiesMigrationInit: boolean;
    readonly isChildBountiesMigrationOngoing: boolean;
    readonly asChildBountiesMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorChildBountiesChildBountiesStage>;
    } & Struct;
    readonly isChildBountiesMigrationDone: boolean;
    readonly isAssetRateMigrationInit: boolean;
    readonly isAssetRateMigrationOngoing: boolean;
    readonly asAssetRateMigrationOngoing: {
      readonly lastKey: Option<PolkadotRuntimeCommonImplsVersionedLocatableAsset>;
    } & Struct;
    readonly isAssetRateMigrationDone: boolean;
    readonly isCrowdloanMigrationInit: boolean;
    readonly isCrowdloanMigrationOngoing: boolean;
    readonly asCrowdloanMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorCrowdloanCrowdloanStage>;
    } & Struct;
    readonly isCrowdloanMigrationDone: boolean;
    readonly isTreasuryMigrationInit: boolean;
    readonly isTreasuryMigrationOngoing: boolean;
    readonly asTreasuryMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorTreasuryTreasuryStage>;
    } & Struct;
    readonly isTreasuryMigrationDone: boolean;
    readonly isRecoveryMigrationInit: boolean;
    readonly isRecoveryMigrationOngoing: boolean;
    readonly asRecoveryMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorRecoveryRecoveryStage>;
    } & Struct;
    readonly isRecoveryMigrationDone: boolean;
    readonly isSocietyMigrationInit: boolean;
    readonly isSocietyMigrationOngoing: boolean;
    readonly asSocietyMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorSocietySocietyStage>;
    } & Struct;
    readonly isSocietyMigrationDone: boolean;
    readonly isStakingMigrationInit: boolean;
    readonly isStakingMigrationOngoing: boolean;
    readonly asStakingMigrationOngoing: {
      readonly nextKey: Option<PalletRcMigratorStakingStakingImplStakingStage>;
    } & Struct;
    readonly isStakingMigrationDone: boolean;
    readonly isCoolOff: boolean;
    readonly asCoolOff: {
      readonly endAt: u32;
    } & Struct;
    readonly isSignalMigrationFinish: boolean;
    readonly isMigrationDone: boolean;
    readonly type: 'Pending' | 'MigrationPaused' | 'Scheduled' | 'WaitingForAh' | 'WarmUp' | 'Starting' | 'PureProxyCandidatesMigrationInit' | 'AccountsMigrationInit' | 'AccountsMigrationOngoing' | 'AccountsMigrationDone' | 'MultisigMigrationInit' | 'MultisigMigrationOngoing' | 'MultisigMigrationDone' | 'ClaimsMigrationInit' | 'ClaimsMigrationOngoing' | 'ClaimsMigrationDone' | 'ProxyMigrationInit' | 'ProxyMigrationProxies' | 'ProxyMigrationAnnouncements' | 'ProxyMigrationDone' | 'PreimageMigrationInit' | 'PreimageMigrationChunksOngoing' | 'PreimageMigrationChunksDone' | 'PreimageMigrationRequestStatusOngoing' | 'PreimageMigrationRequestStatusDone' | 'PreimageMigrationLegacyRequestStatusInit' | 'PreimageMigrationLegacyRequestStatusOngoing' | 'PreimageMigrationLegacyRequestStatusDone' | 'PreimageMigrationDone' | 'NomPoolsMigrationInit' | 'NomPoolsMigrationOngoing' | 'NomPoolsMigrationDone' | 'VestingMigrationInit' | 'VestingMigrationOngoing' | 'VestingMigrationDone' | 'DelegatedStakingMigrationInit' | 'DelegatedStakingMigrationOngoing' | 'DelegatedStakingMigrationDone' | 'IndicesMigrationInit' | 'IndicesMigrationOngoing' | 'IndicesMigrationDone' | 'ReferendaMigrationInit' | 'ReferendaMigrationOngoing' | 'ReferendaMigrationDone' | 'BagsListMigrationInit' | 'BagsListMigrationOngoing' | 'BagsListMigrationDone' | 'SchedulerMigrationInit' | 'SchedulerMigrationOngoing' | 'SchedulerAgendaMigrationOngoing' | 'SchedulerMigrationDone' | 'ConvictionVotingMigrationInit' | 'ConvictionVotingMigrationOngoing' | 'ConvictionVotingMigrationDone' | 'BountiesMigrationInit' | 'BountiesMigrationOngoing' | 'BountiesMigrationDone' | 'ChildBountiesMigrationInit' | 'ChildBountiesMigrationOngoing' | 'ChildBountiesMigrationDone' | 'AssetRateMigrationInit' | 'AssetRateMigrationOngoing' | 'AssetRateMigrationDone' | 'CrowdloanMigrationInit' | 'CrowdloanMigrationOngoing' | 'CrowdloanMigrationDone' | 'TreasuryMigrationInit' | 'TreasuryMigrationOngoing' | 'TreasuryMigrationDone' | 'RecoveryMigrationInit' | 'RecoveryMigrationOngoing' | 'RecoveryMigrationDone' | 'SocietyMigrationInit' | 'SocietyMigrationOngoing' | 'SocietyMigrationDone' | 'StakingMigrationInit' | 'StakingMigrationOngoing' | 'StakingMigrationDone' | 'CoolOff' | 'SignalMigrationFinish' | 'MigrationDone';
  }

  /** @name PalletRcMigratorClaimsClaimsStage (507) */
  interface PalletRcMigratorClaimsClaimsStage extends Enum {
    readonly isStorageValues: boolean;
    readonly isClaims: boolean;
    readonly asClaims: Option<EthereumAddress>;
    readonly isVesting: boolean;
    readonly asVesting: Option<EthereumAddress>;
    readonly isSigning: boolean;
    readonly asSigning: Option<EthereumAddress>;
    readonly isPreclaims: boolean;
    readonly asPreclaims: Option<AccountId32>;
    readonly isFinished: boolean;
    readonly type: 'StorageValues' | 'Claims' | 'Vesting' | 'Signing' | 'Preclaims' | 'Finished';
  }

  /** @name PalletRcMigratorStakingNomPoolsNomPoolsStage (513) */
  interface PalletRcMigratorStakingNomPoolsNomPoolsStage extends Enum {
    readonly isStorageValues: boolean;
    readonly isPoolMembers: boolean;
    readonly asPoolMembers: Option<AccountId32>;
    readonly isBondedPools: boolean;
    readonly asBondedPools: Option<u32>;
    readonly isRewardPools: boolean;
    readonly asRewardPools: Option<u32>;
    readonly isSubPoolsStorage: boolean;
    readonly asSubPoolsStorage: Option<u32>;
    readonly isMetadata: boolean;
    readonly asMetadata: Option<u32>;
    readonly isReversePoolIdLookup: boolean;
    readonly asReversePoolIdLookup: Option<AccountId32>;
    readonly isClaimPermissions: boolean;
    readonly asClaimPermissions: Option<AccountId32>;
    readonly isFinished: boolean;
    readonly type: 'StorageValues' | 'PoolMembers' | 'BondedPools' | 'RewardPools' | 'SubPoolsStorage' | 'Metadata' | 'ReversePoolIdLookup' | 'ClaimPermissions' | 'Finished';
  }

  /** @name PalletRcMigratorStakingDelegatedStakingDelegatedStakingStage (515) */
  interface PalletRcMigratorStakingDelegatedStakingDelegatedStakingStage extends Enum {
    readonly isDelegators: boolean;
    readonly asDelegators: Option<AccountId32>;
    readonly isAgents: boolean;
    readonly asAgents: Option<AccountId32>;
    readonly isFinished: boolean;
    readonly type: 'Delegators' | 'Agents' | 'Finished';
  }

  /** @name PalletRcMigratorReferendaReferendaStage (518) */
  interface PalletRcMigratorReferendaReferendaStage extends Enum {
    readonly isStorageValues: boolean;
    readonly isMetadata: boolean;
    readonly asMetadata: Option<u32>;
    readonly isReferendumInfo: boolean;
    readonly asReferendumInfo: Option<u32>;
    readonly type: 'StorageValues' | 'Metadata' | 'ReferendumInfo';
  }

  /** @name PalletRcMigratorStakingBagsListBagsListStage (520) */
  interface PalletRcMigratorStakingBagsListBagsListStage extends Enum {
    readonly isListNodes: boolean;
    readonly asListNodes: Option<AccountId32>;
    readonly isListBags: boolean;
    readonly asListBags: Option<u64>;
    readonly isFinished: boolean;
    readonly type: 'ListNodes' | 'ListBags' | 'Finished';
  }

  /** @name PalletRcMigratorSchedulerSchedulerStage (522) */
  interface PalletRcMigratorSchedulerSchedulerStage extends Enum {
    readonly isIncompleteSince: boolean;
    readonly isRetries: boolean;
    readonly asRetries: Option<ITuple<[u32, u32]>>;
    readonly isLookup: boolean;
    readonly asLookup: Option<U8aFixed>;
    readonly isFinished: boolean;
    readonly type: 'IncompleteSince' | 'Retries' | 'Lookup' | 'Finished';
  }

  /** @name PalletRcMigratorConvictionVotingConvictionVotingStage (525) */
  interface PalletRcMigratorConvictionVotingConvictionVotingStage extends Enum {
    readonly isVotingFor: boolean;
    readonly asVotingFor: Option<ITuple<[AccountId32, u16]>>;
    readonly isClassLocksFor: boolean;
    readonly asClassLocksFor: Option<AccountId32>;
    readonly isFinished: boolean;
    readonly type: 'VotingFor' | 'ClassLocksFor' | 'Finished';
  }

  /** @name PalletRcMigratorBountiesBountiesStage (529) */
  interface PalletRcMigratorBountiesBountiesStage extends Enum {
    readonly isBountyCount: boolean;
    readonly isBountyApprovals: boolean;
    readonly isBountyDescriptions: boolean;
    readonly asBountyDescriptions: {
      readonly lastKey: Option<u32>;
    } & Struct;
    readonly isBounties: boolean;
    readonly asBounties: {
      readonly lastKey: Option<u32>;
    } & Struct;
    readonly isFinished: boolean;
    readonly type: 'BountyCount' | 'BountyApprovals' | 'BountyDescriptions' | 'Bounties' | 'Finished';
  }

  /** @name PalletRcMigratorChildBountiesChildBountiesStage (531) */
  interface PalletRcMigratorChildBountiesChildBountiesStage extends Enum {
    readonly isChildBountyCount: boolean;
    readonly isParentChildBounties: boolean;
    readonly asParentChildBounties: {
      readonly parentId: Option<u32>;
    } & Struct;
    readonly isParentTotalChildBounties: boolean;
    readonly asParentTotalChildBounties: {
      readonly parentId: Option<u32>;
    } & Struct;
    readonly isChildBounties: boolean;
    readonly asChildBounties: {
      readonly ids: Option<ITuple<[u32, u32]>>;
    } & Struct;
    readonly isChildBountyDescriptionsV1: boolean;
    readonly asChildBountyDescriptionsV1: {
      readonly ids: Option<ITuple<[u32, u32]>>;
    } & Struct;
    readonly isV0ToV1ChildBountyIds: boolean;
    readonly asV0ToV1ChildBountyIds: {
      readonly childId: Option<u32>;
    } & Struct;
    readonly isChildrenCuratorFees: boolean;
    readonly asChildrenCuratorFees: {
      readonly childId: Option<u32>;
    } & Struct;
    readonly isFinished: boolean;
    readonly type: 'ChildBountyCount' | 'ParentChildBounties' | 'ParentTotalChildBounties' | 'ChildBounties' | 'ChildBountyDescriptionsV1' | 'V0ToV1ChildBountyIds' | 'ChildrenCuratorFees' | 'Finished';
  }

  /** @name PalletRcMigratorCrowdloanCrowdloanStage (534) */
  interface PalletRcMigratorCrowdloanCrowdloanStage extends Enum {
    readonly isSetup: boolean;
    readonly isLeaseReserve: boolean;
    readonly asLeaseReserve: {
      readonly lastKey: Option<u32>;
    } & Struct;
    readonly isCrowdloanContribution: boolean;
    readonly asCrowdloanContribution: {
      readonly lastKey: Option<u32>;
    } & Struct;
    readonly isCrowdloanReserve: boolean;
    readonly isFinished: boolean;
    readonly type: 'Setup' | 'LeaseReserve' | 'CrowdloanContribution' | 'CrowdloanReserve' | 'Finished';
  }

  /** @name PalletRcMigratorTreasuryTreasuryStage (537) */
  interface PalletRcMigratorTreasuryTreasuryStage extends Enum {
    readonly isProposalCount: boolean;
    readonly isProposals: boolean;
    readonly asProposals: Option<u32>;
    readonly isApprovals: boolean;
    readonly isSpendCount: boolean;
    readonly isSpends: boolean;
    readonly asSpends: Option<u32>;
    readonly isLastSpendPeriod: boolean;
    readonly isFunds: boolean;
    readonly isFinished: boolean;
    readonly type: 'ProposalCount' | 'Proposals' | 'Approvals' | 'SpendCount' | 'Spends' | 'LastSpendPeriod' | 'Funds' | 'Finished';
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

  /** @name PalletRcMigratorStakingStakingImplStakingStage (547) */
  interface PalletRcMigratorStakingStakingImplStakingStage extends Enum {
    readonly isValues: boolean;
    readonly isInvulnerables: boolean;
    readonly isBonded: boolean;
    readonly asBonded: Option<AccountId32>;
    readonly isLedger: boolean;
    readonly asLedger: Option<AccountId32>;
    readonly isPayee: boolean;
    readonly asPayee: Option<AccountId32>;
    readonly isValidators: boolean;
    readonly asValidators: Option<AccountId32>;
    readonly isNominators: boolean;
    readonly asNominators: Option<AccountId32>;
    readonly isVirtualStakers: boolean;
    readonly asVirtualStakers: Option<AccountId32>;
    readonly isErasStakersOverview: boolean;
    readonly asErasStakersOverview: Option<ITuple<[u32, AccountId32]>>;
    readonly isErasStakersPaged: boolean;
    readonly asErasStakersPaged: Option<ITuple<[u32, AccountId32, u32]>>;
    readonly isClaimedRewards: boolean;
    readonly asClaimedRewards: Option<ITuple<[u32, AccountId32]>>;
    readonly isErasValidatorPrefs: boolean;
    readonly asErasValidatorPrefs: Option<ITuple<[u32, AccountId32]>>;
    readonly isErasValidatorReward: boolean;
    readonly asErasValidatorReward: Option<u32>;
    readonly isErasRewardPoints: boolean;
    readonly asErasRewardPoints: Option<u32>;
    readonly isErasTotalStake: boolean;
    readonly asErasTotalStake: Option<u32>;
    readonly isUnappliedSlashes: boolean;
    readonly asUnappliedSlashes: Option<u32>;
    readonly isBondedEras: boolean;
    readonly isValidatorSlashInEra: boolean;
    readonly asValidatorSlashInEra: Option<ITuple<[u32, AccountId32]>>;
    readonly isNominatorSlashInEra: boolean;
    readonly asNominatorSlashInEra: Option<ITuple<[u32, AccountId32]>>;
    readonly isSlashingSpans: boolean;
    readonly asSlashingSpans: Option<AccountId32>;
    readonly isSpanSlash: boolean;
    readonly asSpanSlash: Option<ITuple<[AccountId32, u32]>>;
    readonly isFinished: boolean;
    readonly type: 'Values' | 'Invulnerables' | 'Bonded' | 'Ledger' | 'Payee' | 'Validators' | 'Nominators' | 'VirtualStakers' | 'ErasStakersOverview' | 'ErasStakersPaged' | 'ClaimedRewards' | 'ErasValidatorPrefs' | 'ErasValidatorReward' | 'ErasRewardPoints' | 'ErasTotalStake' | 'UnappliedSlashes' | 'BondedEras' | 'ValidatorSlashInEra' | 'NominatorSlashInEra' | 'SlashingSpans' | 'SpanSlash' | 'Finished';
  }

  /** @name PalletRcMigratorQueuePriority (552) */
  interface PalletRcMigratorQueuePriority extends Enum {
    readonly isConfig: boolean;
    readonly isOverrideConfig: boolean;
    readonly asOverrideConfig: ITuple<[u32, u32]>;
    readonly isDisabled: boolean;
    readonly type: 'Config' | 'OverrideConfig' | 'Disabled';
  }

  /** @name PalletRcMigratorManagerMultisigVote (553) */
  interface PalletRcMigratorManagerMultisigVote extends Struct {
    readonly who: SpRuntimeMultiSigner;
    readonly call: Call;
    readonly round: u32;
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

  /** @name PalletStakingAsyncAhClientEvent (598) */
  interface PalletStakingAsyncAhClientEvent extends Enum {
    readonly isValidatorSetReceived: boolean;
    readonly asValidatorSetReceived: {
      readonly id: u32;
      readonly newValidatorSetCount: u32;
      readonly pruneUpTo: Option<u32>;
      readonly leftover: bool;
    } & Struct;
    readonly isCouldNotMergeAndDropped: boolean;
    readonly isSetTooSmallAndDropped: boolean;
    readonly isUnexpected: boolean;
    readonly asUnexpected: PalletStakingAsyncAhClientUnexpectedKind;
    readonly type: 'ValidatorSetReceived' | 'CouldNotMergeAndDropped' | 'SetTooSmallAndDropped' | 'Unexpected';
  }

  /** @name PalletStakingAsyncAhClientUnexpectedKind (599) */
  interface PalletStakingAsyncAhClientUnexpectedKind extends Enum {
    readonly isReceivedValidatorSetWhilePassive: boolean;
    readonly isUnexpectedModeTransition: boolean;
    readonly isSessionReportSendFailed: boolean;
    readonly isSessionReportDropped: boolean;
    readonly isOffenceSendFailed: boolean;
    readonly isValidatorPointDropped: boolean;
    readonly type: 'ReceivedValidatorSetWhilePassive' | 'UnexpectedModeTransition' | 'SessionReportSendFailed' | 'SessionReportDropped' | 'OffenceSendFailed' | 'ValidatorPointDropped';
  }

  /** @name StagingXcmV5TraitsInstructionError (617) */
  interface StagingXcmV5TraitsInstructionError extends Struct {
    readonly index: u8;
    readonly error: XcmV5TraitsError;
  }

  /** @name PalletRcMigratorEvent (622) */
  interface PalletRcMigratorEvent extends Enum {
    readonly isStageTransition: boolean;
    readonly asStageTransition: {
      readonly old: PalletRcMigratorMigrationStage;
      readonly new_: PalletRcMigratorMigrationStage;
    } & Struct;
    readonly isAssetHubMigrationStarted: boolean;
    readonly isAssetHubMigrationFinished: boolean;
    readonly isQueryResponseReceived: boolean;
    readonly asQueryResponseReceived: {
      readonly queryId: u64;
      readonly response: XcmV3MaybeErrorCode;
    } & Struct;
    readonly isXcmResendAttempt: boolean;
    readonly asXcmResendAttempt: {
      readonly queryId: u64;
      readonly sendError: Option<XcmV3TraitsSendError>;
    } & Struct;
    readonly isUnprocessedMsgBufferSet: boolean;
    readonly asUnprocessedMsgBufferSet: {
      readonly new_: u32;
      readonly old: u32;
    } & Struct;
    readonly isAhUmpQueuePrioritySet: boolean;
    readonly asAhUmpQueuePrioritySet: {
      readonly prioritized: bool;
      readonly cycleBlock: u32;
      readonly cyclePeriod: u32;
    } & Struct;
    readonly isAhUmpQueuePriorityConfigSet: boolean;
    readonly asAhUmpQueuePriorityConfigSet: {
      readonly old: PalletRcMigratorQueuePriority;
      readonly new_: PalletRcMigratorQueuePriority;
    } & Struct;
    readonly isMigratedBalanceRecordSet: boolean;
    readonly asMigratedBalanceRecordSet: {
      readonly kept: u128;
      readonly migrated: u128;
    } & Struct;
    readonly isMigratedBalanceConsumed: boolean;
    readonly asMigratedBalanceConsumed: {
      readonly kept: u128;
      readonly migrated: u128;
    } & Struct;
    readonly isManagerSet: boolean;
    readonly asManagerSet: {
      readonly old: Option<AccountId32>;
      readonly new_: Option<AccountId32>;
    } & Struct;
    readonly isXcmSent: boolean;
    readonly asXcmSent: {
      readonly origin: StagingXcmV5Location;
      readonly destination: StagingXcmV5Location;
      readonly message: StagingXcmV5Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isStakingElectionsPaused: boolean;
    readonly isAccountsPreserved: boolean;
    readonly asAccountsPreserved: {
      readonly accounts: Vec<AccountId32>;
    } & Struct;
    readonly isCancellerSet: boolean;
    readonly asCancellerSet: {
      readonly old: Option<AccountId32>;
      readonly new_: Option<AccountId32>;
    } & Struct;
    readonly isMigrationPaused: boolean;
    readonly asMigrationPaused: {
      readonly pauseStage: PalletRcMigratorMigrationStage;
    } & Struct;
    readonly isMigrationCancelled: boolean;
    readonly isPureAccountsIndexed: boolean;
    readonly asPureAccountsIndexed: {
      readonly numPureAccounts: u32;
    } & Struct;
    readonly isManagerMultisigDispatched: boolean;
    readonly asManagerMultisigDispatched: {
      readonly res: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isManagerMultisigVoted: boolean;
    readonly asManagerMultisigVoted: {
      readonly votes: u32;
    } & Struct;
    readonly type: 'StageTransition' | 'AssetHubMigrationStarted' | 'AssetHubMigrationFinished' | 'QueryResponseReceived' | 'XcmResendAttempt' | 'UnprocessedMsgBufferSet' | 'AhUmpQueuePrioritySet' | 'AhUmpQueuePriorityConfigSet' | 'MigratedBalanceRecordSet' | 'MigratedBalanceConsumed' | 'ManagerSet' | 'XcmSent' | 'StakingElectionsPaused' | 'AccountsPreserved' | 'CancellerSet' | 'MigrationPaused' | 'MigrationCancelled' | 'PureAccountsIndexed' | 'ManagerMultisigDispatched' | 'ManagerMultisigVoted';
  }

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

  /** @name PalletSessionHoldReason (670) */
  interface PalletSessionHoldReason extends Enum {
    readonly isKeys: boolean;
    readonly type: 'Keys';
  }

  /** @name StagingKusamaRuntimeRuntimeFreezeReason (677) */
  interface StagingKusamaRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name FrameElectionProviderSupportBoundedSupports (824) */
  interface FrameElectionProviderSupportBoundedSupports extends Vec<ITuple<[AccountId32, FrameElectionProviderSupportBoundedSupport]>> {}

  /** @name FrameElectionProviderSupportBoundedSupport (827) */
  interface FrameElectionProviderSupportBoundedSupport extends Struct {
    readonly total: u128;
    readonly voters: Vec<ITuple<[AccountId32, u128]>>;
  }

  /** @name PalletStakingAsyncRcClientSessionReport (869) */
  interface PalletStakingAsyncRcClientSessionReport extends Struct {
    readonly endIndex: u32;
    readonly validatorPoints: Vec<ITuple<[AccountId32, u32]>>;
    readonly activationTimestamp: Option<ITuple<[u64, u32]>>;
    readonly leftover: bool;
  }

  /** @name PalletStakingAsyncRcClientOffence (873) */
  interface PalletStakingAsyncRcClientOffence extends Struct {
    readonly offender: AccountId32;
    readonly reporters: Vec<AccountId32>;
    readonly slashFraction: Perbill;
  }

  /** @name PalletStakingAsyncAhClientError (875) */
  interface PalletStakingAsyncAhClientError extends Enum {
    readonly isBlocked: boolean;
    readonly type: 'Blocked';
  }

  /** @name PolkadotRuntimeParachainsParasAuthorizedCodeHashAndExpiry (920) */
  interface PolkadotRuntimeParachainsParasAuthorizedCodeHashAndExpiry extends Struct {
    readonly codeHash: H256;
    readonly expireAt: u32;
  }

  /** @name PolkadotPrimitivesVstagingPendingSlashes (945) */
  interface PolkadotPrimitivesVstagingPendingSlashes extends Struct {
    readonly keys_: BTreeMap<u32, PolkadotPrimitivesV8ValidatorAppPublic>;
    readonly kind: PolkadotPrimitivesVstagingDisputeOffenceKind;
  }

  /** @name PalletXcmErrorsExecutionError (1013) */
  interface PalletXcmErrorsExecutionError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isLocationFull: boolean;
    readonly isLocationNotInvertible: boolean;
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
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly isExpectationFalse: boolean;
    readonly isPalletNotFound: boolean;
    readonly isNameMismatch: boolean;
    readonly isVersionIncompatible: boolean;
    readonly isHoldingWouldOverflow: boolean;
    readonly isExportError: boolean;
    readonly isReanchorFailed: boolean;
    readonly isNoDeal: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockError: boolean;
    readonly isNoPermission: boolean;
    readonly isUnanchored: boolean;
    readonly isNotDepositable: boolean;
    readonly isTooManyAssets: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'TooManyAssets' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name PalletRcMigratorAccountsAccountState (1026) */
  interface PalletRcMigratorAccountsAccountState extends Enum {
    readonly isMigrate: boolean;
    readonly isPreserve: boolean;
    readonly isPart: boolean;
    readonly asPart: {
      readonly free: u128;
      readonly reserved: u128;
      readonly consumers: u32;
    } & Struct;
    readonly type: 'Migrate' | 'Preserve' | 'Part';
  }

  /** @name PalletRcMigratorAccountsMigratedBalances (1027) */
  interface PalletRcMigratorAccountsMigratedBalances extends Struct {
    readonly kept: u128;
    readonly migrated: u128;
  }

  /** @name PalletRcMigratorError (1029) */
  interface PalletRcMigratorError extends Enum {
    readonly isUnreachable: boolean;
    readonly isOutOfWeight: boolean;
    readonly isXcmError: boolean;
    readonly isFailedToWithdrawAccount: boolean;
    readonly isPastBlockNumber: boolean;
    readonly isEraEndsTooSoon: boolean;
    readonly isBalanceOverflow: boolean;
    readonly isBalanceUnderflow: boolean;
    readonly isInvalidQueryResponse: boolean;
    readonly isQueryNotFound: boolean;
    readonly isXcmSendError: boolean;
    readonly isUnreachableStage: boolean;
    readonly isInvalidParameter: boolean;
    readonly isAhUmpQueuePriorityAlreadySet: boolean;
    readonly isAccountReferenced: boolean;
    readonly isBadXcmVersion: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isInvalidStageTransition: boolean;
    readonly type: 'Unreachable' | 'OutOfWeight' | 'XcmError' | 'FailedToWithdrawAccount' | 'PastBlockNumber' | 'EraEndsTooSoon' | 'BalanceOverflow' | 'BalanceUnderflow' | 'InvalidQueryResponse' | 'QueryNotFound' | 'XcmSendError' | 'UnreachableStage' | 'InvalidParameter' | 'AhUmpQueuePriorityAlreadySet' | 'AccountReferenced' | 'BadXcmVersion' | 'InvalidOrigin' | 'InvalidStageTransition';
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
