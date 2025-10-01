// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Result, Struct, U256, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AccountId32, Call, H160, H256, MultiAddress, PerU16, Perbill, Percent, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name AssetHubKusamaRuntimeRuntimeTask (32) */
  type AssetHubKusamaRuntimeRuntimeTask = Null;

  /** @name AssetHubKusamaRuntimeRuntimeParametersKey (43) */
  interface AssetHubKusamaRuntimeRuntimeParametersKey extends Enum {
    readonly isIssuance: boolean;
    readonly asIssuance: AssetHubKusamaRuntimeDynamicParamsIssuanceParametersKey;
    readonly isTreasury: boolean;
    readonly asTreasury: AssetHubKusamaRuntimeDynamicParamsTreasuryParametersKey;
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersKey;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubKusamaRuntimeDynamicParamsSchedulerParametersKey;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersKey;
    readonly type: 'Issuance' | 'Treasury' | 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceParametersKey (44) */
  interface AssetHubKusamaRuntimeDynamicParamsIssuanceParametersKey extends Enum {
    readonly isMinInflation: boolean;
    readonly isMaxInflation: boolean;
    readonly isIdealStake: boolean;
    readonly isFalloff: boolean;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceMinInflation (45) */
  type AssetHubKusamaRuntimeDynamicParamsIssuanceMinInflation = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceMaxInflation (46) */
  type AssetHubKusamaRuntimeDynamicParamsIssuanceMaxInflation = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceIdealStake (47) */
  type AssetHubKusamaRuntimeDynamicParamsIssuanceIdealStake = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceFalloff (48) */
  type AssetHubKusamaRuntimeDynamicParamsIssuanceFalloff = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryParametersKey (49) */
  interface AssetHubKusamaRuntimeDynamicParamsTreasuryParametersKey extends Enum {
    readonly isBurnPortion: boolean;
    readonly isBurnDestination: boolean;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryBurnPortion (50) */
  type AssetHubKusamaRuntimeDynamicParamsTreasuryBurnPortion = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryBurnDestination (51) */
  type AssetHubKusamaRuntimeDynamicParamsTreasuryBurnDestination = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersKey (52) */
  interface AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersKey extends Enum {
    readonly isSignedPhase: boolean;
    readonly isMaxSignedSubmissions: boolean;
    readonly isUnsignedPhase: boolean;
    readonly isMinerPages: boolean;
    readonly isMaxElectingVoters: boolean;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly isMaxEraDuration: boolean;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionSignedPhase (53) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionSignedPhase = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxSignedSubmissions (54) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxSignedSubmissions = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionUnsignedPhase (55) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionUnsignedPhase = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionMinerPages (56) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionMinerPages = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxElectingVoters (57) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxElectingVoters = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock (58) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxEraDuration (59) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxEraDuration = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerParametersKey (60) */
  interface AssetHubKusamaRuntimeDynamicParamsSchedulerParametersKey extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly isMaximumWeight: boolean;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerMaxScheduledPerBlock (61) */
  type AssetHubKusamaRuntimeDynamicParamsSchedulerMaxScheduledPerBlock = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerMaximumWeight (62) */
  type AssetHubKusamaRuntimeDynamicParamsSchedulerMaximumWeight = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersKey (63) */
  interface AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersKey extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly isMaxOnIdleWeight: boolean;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnInitWeight (64) */
  type AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnInitWeight = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnIdleWeight (65) */
  type AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnIdleWeight = Null;

  /** @name AssetHubKusamaRuntimeRuntimeParametersValue (67) */
  interface AssetHubKusamaRuntimeRuntimeParametersValue extends Enum {
    readonly isIssuance: boolean;
    readonly asIssuance: AssetHubKusamaRuntimeDynamicParamsIssuanceParametersValue;
    readonly isTreasury: boolean;
    readonly asTreasury: AssetHubKusamaRuntimeDynamicParamsTreasuryParametersValue;
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersValue;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubKusamaRuntimeDynamicParamsSchedulerParametersValue;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersValue;
    readonly type: 'Issuance' | 'Treasury' | 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceParametersValue (68) */
  interface AssetHubKusamaRuntimeDynamicParamsIssuanceParametersValue extends Enum {
    readonly isMinInflation: boolean;
    readonly asMinInflation: Perquintill;
    readonly isMaxInflation: boolean;
    readonly asMaxInflation: Perquintill;
    readonly isIdealStake: boolean;
    readonly asIdealStake: Perquintill;
    readonly isFalloff: boolean;
    readonly asFalloff: Perquintill;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryParametersValue (70) */
  interface AssetHubKusamaRuntimeDynamicParamsTreasuryParametersValue extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: Permill;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: AssetHubKusamaRuntimeTreasuryBurnDestinationAccount;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name AssetHubKusamaRuntimeTreasuryBurnDestinationAccount (72) */
  interface AssetHubKusamaRuntimeTreasuryBurnDestinationAccount extends Option<AccountId32> {}

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersValue (74) */
  interface AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersValue extends Enum {
    readonly isSignedPhase: boolean;
    readonly asSignedPhase: u32;
    readonly isMaxSignedSubmissions: boolean;
    readonly asMaxSignedSubmissions: u32;
    readonly isUnsignedPhase: boolean;
    readonly asUnsignedPhase: u32;
    readonly isMinerPages: boolean;
    readonly asMinerPages: u32;
    readonly isMaxElectingVoters: boolean;
    readonly asMaxElectingVoters: u32;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly asTargetSnapshotPerBlock: u32;
    readonly isMaxEraDuration: boolean;
    readonly asMaxEraDuration: u64;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerParametersValue (75) */
  interface AssetHubKusamaRuntimeDynamicParamsSchedulerParametersValue extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: u32;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: SpWeightsWeightV2Weight;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersValue (76) */
  interface AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersValue extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: Option<SpWeightsWeightV2Weight>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: Option<SpWeightsWeightV2Weight>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubKusamaRuntimeProxyType (193) */
  interface AssetHubKusamaRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isCancelProxy: boolean;
    readonly isAssets: boolean;
    readonly isAssetOwner: boolean;
    readonly isAssetManager: boolean;
    readonly isCollator: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isNominationPools: boolean;
    readonly isAuction: boolean;
    readonly isParaRegistration: boolean;
    readonly isSociety: boolean;
    readonly isSpokesperson: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'Society' | 'Spokesperson';
  }

  /** @name AssetHubKusamaRuntimeRuntime (220) */
  type AssetHubKusamaRuntimeRuntime = Null;

  /** @name PalletStakingAsyncRcClientEvent (241) */
  interface PalletStakingAsyncRcClientEvent extends Enum {
    readonly isSessionReportReceived: boolean;
    readonly asSessionReportReceived: {
      readonly endIndex: u32;
      readonly activationTimestamp: Option<ITuple<[u64, u32]>>;
      readonly validatorPointsCounts: u32;
      readonly leftover: bool;
    } & Struct;
    readonly isOffenceReceived: boolean;
    readonly asOffenceReceived: {
      readonly slashSession: u32;
      readonly offencesCount: u32;
    } & Struct;
    readonly isUnexpected: boolean;
    readonly asUnexpected: PalletStakingAsyncRcClientUnexpectedKind;
    readonly type: 'SessionReportReceived' | 'OffenceReceived' | 'Unexpected';
  }

  /** @name PalletStakingAsyncRcClientUnexpectedKind (244) */
  interface PalletStakingAsyncRcClientUnexpectedKind extends Enum {
    readonly isSessionReportIntegrityFailed: boolean;
    readonly isValidatorSetIntegrityFailed: boolean;
    readonly isSessionSkipped: boolean;
    readonly isSessionAlreadyProcessed: boolean;
    readonly type: 'SessionReportIntegrityFailed' | 'ValidatorSetIntegrityFailed' | 'SessionSkipped' | 'SessionAlreadyProcessed';
  }

  /** @name PalletElectionProviderMultiBlockEvent (245) */
  interface PalletElectionProviderMultiBlockEvent extends Enum {
    readonly isPhaseTransitioned: boolean;
    readonly asPhaseTransitioned: {
      readonly from: PalletElectionProviderMultiBlockPhase;
      readonly to: PalletElectionProviderMultiBlockPhase;
    } & Struct;
    readonly isUnexpectedTargetSnapshotFailed: boolean;
    readonly isUnexpectedVoterSnapshotFailed: boolean;
    readonly type: 'PhaseTransitioned' | 'UnexpectedTargetSnapshotFailed' | 'UnexpectedVoterSnapshotFailed';
  }

  /** @name PalletElectionProviderMultiBlockPhase (246) */
  interface PalletElectionProviderMultiBlockPhase extends Enum {
    readonly isOff: boolean;
    readonly isSigned: boolean;
    readonly asSigned: u32;
    readonly isSignedValidation: boolean;
    readonly asSignedValidation: u32;
    readonly isUnsigned: boolean;
    readonly asUnsigned: u32;
    readonly isSnapshot: boolean;
    readonly asSnapshot: u32;
    readonly isDone: boolean;
    readonly isExport: boolean;
    readonly asExport: u32;
    readonly isEmergency: boolean;
    readonly type: 'Off' | 'Signed' | 'SignedValidation' | 'Unsigned' | 'Snapshot' | 'Done' | 'Export' | 'Emergency';
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsPalletEvent (247) */
  interface PalletElectionProviderMultiBlockVerifierImplsPalletEvent extends Enum {
    readonly isVerificationFailed: boolean;
    readonly asVerificationFailed: ITuple<[u32, PalletElectionProviderMultiBlockVerifierFeasibilityError]>;
    readonly isVerified: boolean;
    readonly asVerified: ITuple<[u32, u32]>;
    readonly isQueued: boolean;
    readonly asQueued: ITuple<[SpNposElectionsElectionScore, Option<SpNposElectionsElectionScore>]>;
    readonly type: 'VerificationFailed' | 'Verified' | 'Queued';
  }

  /** @name PalletElectionProviderMultiBlockVerifierFeasibilityError (248) */
  interface PalletElectionProviderMultiBlockVerifierFeasibilityError extends Enum {
    readonly isWrongWinnerCount: boolean;
    readonly isSnapshotUnavailable: boolean;
    readonly isInvalidVote: boolean;
    readonly isInvalidVoter: boolean;
    readonly isInvalidWinner: boolean;
    readonly isInvalidScore: boolean;
    readonly isInvalidRound: boolean;
    readonly isScoreTooLow: boolean;
    readonly isFailedToBoundSupport: boolean;
    readonly isNposElection: boolean;
    readonly asNposElection: SpNposElectionsError;
    readonly isIncomplete: boolean;
    readonly type: 'WrongWinnerCount' | 'SnapshotUnavailable' | 'InvalidVote' | 'InvalidVoter' | 'InvalidWinner' | 'InvalidScore' | 'InvalidRound' | 'ScoreTooLow' | 'FailedToBoundSupport' | 'NposElection' | 'Incomplete';
  }

  /** @name SpNposElectionsError (249) */
  interface SpNposElectionsError extends Enum {
    readonly isSolutionWeightOverflow: boolean;
    readonly isSolutionTargetOverflow: boolean;
    readonly isSolutionInvalidIndex: boolean;
    readonly isSolutionInvalidPageIndex: boolean;
    readonly isArithmeticError: boolean;
    readonly isInvalidSupportEdge: boolean;
    readonly isTooManyVoters: boolean;
    readonly isBoundsExceeded: boolean;
    readonly isDuplicateVoter: boolean;
    readonly isDuplicateTarget: boolean;
    readonly type: 'SolutionWeightOverflow' | 'SolutionTargetOverflow' | 'SolutionInvalidIndex' | 'SolutionInvalidPageIndex' | 'ArithmeticError' | 'InvalidSupportEdge' | 'TooManyVoters' | 'BoundsExceeded' | 'DuplicateVoter' | 'DuplicateTarget';
  }

  /** @name PalletElectionProviderMultiBlockSignedPalletEvent (252) */
  interface PalletElectionProviderMultiBlockSignedPalletEvent extends Enum {
    readonly isRegistered: boolean;
    readonly asRegistered: ITuple<[u32, AccountId32, SpNposElectionsElectionScore]>;
    readonly isStored: boolean;
    readonly asStored: ITuple<[u32, AccountId32, u32]>;
    readonly isRewarded: boolean;
    readonly asRewarded: ITuple<[u32, AccountId32, u128]>;
    readonly isSlashed: boolean;
    readonly asSlashed: ITuple<[u32, AccountId32, u128]>;
    readonly isEjected: boolean;
    readonly asEjected: ITuple<[u32, AccountId32]>;
    readonly isDiscarded: boolean;
    readonly asDiscarded: ITuple<[u32, AccountId32]>;
    readonly isBailed: boolean;
    readonly asBailed: ITuple<[u32, AccountId32]>;
    readonly type: 'Registered' | 'Stored' | 'Rewarded' | 'Slashed' | 'Ejected' | 'Discarded' | 'Bailed';
  }

  /** @name PalletStakingAsyncPalletEvent (253) */
  interface PalletStakingAsyncPalletEvent extends Enum {
    readonly isEraPaid: boolean;
    readonly asEraPaid: {
      readonly eraIndex: u32;
      readonly validatorPayout: u128;
      readonly remainder: u128;
    } & Struct;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly stash: AccountId32;
      readonly dest: PalletStakingAsyncRewardDestination;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly staker: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isOldSlashingReportDiscarded: boolean;
    readonly asOldSlashingReportDiscarded: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isStakerRemoved: boolean;
    readonly asStakerRemoved: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isKicked: boolean;
    readonly asKicked: {
      readonly nominator: AccountId32;
      readonly stash: AccountId32;
    } & Struct;
    readonly isChilled: boolean;
    readonly asChilled: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isPayoutStarted: boolean;
    readonly asPayoutStarted: {
      readonly eraIndex: u32;
      readonly validatorStash: AccountId32;
      readonly page: u32;
      readonly next: Option<u32>;
    } & Struct;
    readonly isValidatorPrefsSet: boolean;
    readonly asValidatorPrefsSet: {
      readonly stash: AccountId32;
      readonly prefs: PalletStakingAsyncValidatorPrefs;
    } & Struct;
    readonly isSnapshotVotersSizeExceeded: boolean;
    readonly asSnapshotVotersSizeExceeded: {
      readonly size_: u32;
    } & Struct;
    readonly isSnapshotTargetsSizeExceeded: boolean;
    readonly asSnapshotTargetsSizeExceeded: {
      readonly size_: u32;
    } & Struct;
    readonly isForceEra: boolean;
    readonly asForceEra: {
      readonly mode: PalletStakingAsyncForcing;
    } & Struct;
    readonly isControllerBatchDeprecated: boolean;
    readonly asControllerBatchDeprecated: {
      readonly failures: u32;
    } & Struct;
    readonly isCurrencyMigrated: boolean;
    readonly asCurrencyMigrated: {
      readonly stash: AccountId32;
      readonly forceWithdraw: u128;
    } & Struct;
    readonly isPagedElectionProceeded: boolean;
    readonly asPagedElectionProceeded: {
      readonly page: u32;
      readonly result: Result<u32, u32>;
    } & Struct;
    readonly isOffenceReported: boolean;
    readonly asOffenceReported: {
      readonly offenceEra: u32;
      readonly validator: AccountId32;
      readonly fraction: Perbill;
    } & Struct;
    readonly isSlashComputed: boolean;
    readonly asSlashComputed: {
      readonly offenceEra: u32;
      readonly slashEra: u32;
      readonly offender: AccountId32;
      readonly page: u32;
    } & Struct;
    readonly isSlashCancelled: boolean;
    readonly asSlashCancelled: {
      readonly slashEra: u32;
      readonly validator: AccountId32;
    } & Struct;
    readonly isSessionRotated: boolean;
    readonly asSessionRotated: {
      readonly startingSession: u32;
      readonly activeEra: u32;
      readonly plannedEra: u32;
    } & Struct;
    readonly isUnexpected: boolean;
    readonly asUnexpected: PalletStakingAsyncPalletUnexpectedKind;
    readonly isOffenceTooOld: boolean;
    readonly asOffenceTooOld: {
      readonly offenceEra: u32;
      readonly validator: AccountId32;
      readonly fraction: Perbill;
    } & Struct;
    readonly isEraPruned: boolean;
    readonly asEraPruned: {
      readonly index: u32;
    } & Struct;
    readonly type: 'EraPaid' | 'Rewarded' | 'Slashed' | 'OldSlashingReportDiscarded' | 'Bonded' | 'Unbonded' | 'Withdrawn' | 'StakerRemoved' | 'Kicked' | 'Chilled' | 'PayoutStarted' | 'ValidatorPrefsSet' | 'SnapshotVotersSizeExceeded' | 'SnapshotTargetsSizeExceeded' | 'ForceEra' | 'ControllerBatchDeprecated' | 'CurrencyMigrated' | 'PagedElectionProceeded' | 'OffenceReported' | 'SlashComputed' | 'SlashCancelled' | 'SessionRotated' | 'Unexpected' | 'OffenceTooOld' | 'EraPruned';
  }

  /** @name PalletStakingAsyncRewardDestination (254) */
  interface PalletStakingAsyncRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PalletStakingAsyncValidatorPrefs (255) */
  interface PalletStakingAsyncValidatorPrefs extends Struct {
    readonly commission: Compact<Perbill>;
    readonly blocked: bool;
  }

  /** @name PalletStakingAsyncForcing (257) */
  interface PalletStakingAsyncForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PalletStakingAsyncPalletUnexpectedKind (259) */
  interface PalletStakingAsyncPalletUnexpectedKind extends Enum {
    readonly isEraDurationBoundExceeded: boolean;
    readonly isUnknownValidatorActivation: boolean;
    readonly type: 'EraDurationBoundExceeded' | 'UnknownValidatorActivation';
  }

  /** @name ParachainsCommonPayVersionedLocatableAccount (262) */
  interface ParachainsCommonPayVersionedLocatableAccount extends Enum {
    readonly isV4: boolean;
    readonly asV4: {
      readonly location: StagingXcmV4Location;
      readonly accountId: StagingXcmV4Location;
    } & Struct;
    readonly isV5: boolean;
    readonly asV5: {
      readonly location: StagingXcmV5Location;
      readonly accountId: StagingXcmV5Location;
    } & Struct;
    readonly type: 'V4' | 'V5';
  }

  /** @name CumulusPalletParachainSystemParachainInherentBasicParachainInherentData (274) */
  interface CumulusPalletParachainSystemParachainInherentBasicParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV8PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly relayParentDescendants: Vec<SpRuntimeHeader>;
    readonly collatorPeerId: Option<Bytes>;
  }

  /** @name CumulusPalletParachainSystemParachainInherentInboundMessagesData (282) */
  interface CumulusPalletParachainSystemParachainInherentInboundMessagesData extends Struct {
    readonly downwardMessages: {
      readonly fullMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
      readonly hashedMessages: Vec<CumulusPrimitivesParachainInherentHashedMessage>;
    } & Struct;
    readonly horizontalMessages: CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection;
  }

  /** @name CumulusPrimitivesParachainInherentHashedMessage (287) */
  interface CumulusPrimitivesParachainInherentHashedMessage extends Struct {
    readonly sentAt: u32;
    readonly msgHash: H256;
  }

  /** @name CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection (288) */
  interface CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection extends Struct {
    readonly fullMessages: Vec<ITuple<[u32, PolkadotCorePrimitivesInboundHrmpMessage]>>;
    readonly hashedMessages: Vec<ITuple<[u32, CumulusPrimitivesParachainInherentHashedMessage]>>;
  }

  /** @name AssetHubKusamaRuntimeRuntimeParameters (308) */
  interface AssetHubKusamaRuntimeRuntimeParameters extends Enum {
    readonly isIssuance: boolean;
    readonly asIssuance: AssetHubKusamaRuntimeDynamicParamsIssuanceParameters;
    readonly isTreasury: boolean;
    readonly asTreasury: AssetHubKusamaRuntimeDynamicParamsTreasuryParameters;
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubKusamaRuntimeDynamicParamsStakingElectionParameters;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubKusamaRuntimeDynamicParamsSchedulerParameters;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubKusamaRuntimeDynamicParamsMessageQueueParameters;
    readonly type: 'Issuance' | 'Treasury' | 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceParameters (309) */
  interface AssetHubKusamaRuntimeDynamicParamsIssuanceParameters extends Enum {
    readonly isMinInflation: boolean;
    readonly asMinInflation: ITuple<[AssetHubKusamaRuntimeDynamicParamsIssuanceMinInflation, Option<Perquintill>]>;
    readonly isMaxInflation: boolean;
    readonly asMaxInflation: ITuple<[AssetHubKusamaRuntimeDynamicParamsIssuanceMaxInflation, Option<Perquintill>]>;
    readonly isIdealStake: boolean;
    readonly asIdealStake: ITuple<[AssetHubKusamaRuntimeDynamicParamsIssuanceIdealStake, Option<Perquintill>]>;
    readonly isFalloff: boolean;
    readonly asFalloff: ITuple<[AssetHubKusamaRuntimeDynamicParamsIssuanceFalloff, Option<Perquintill>]>;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryParameters (311) */
  interface AssetHubKusamaRuntimeDynamicParamsTreasuryParameters extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: ITuple<[AssetHubKusamaRuntimeDynamicParamsTreasuryBurnPortion, Option<Permill>]>;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: ITuple<[AssetHubKusamaRuntimeDynamicParamsTreasuryBurnDestination, Option<AssetHubKusamaRuntimeTreasuryBurnDestinationAccount>]>;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionParameters (314) */
  interface AssetHubKusamaRuntimeDynamicParamsStakingElectionParameters extends Enum {
    readonly isSignedPhase: boolean;
    readonly asSignedPhase: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionSignedPhase, Option<u32>]>;
    readonly isMaxSignedSubmissions: boolean;
    readonly asMaxSignedSubmissions: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxSignedSubmissions, Option<u32>]>;
    readonly isUnsignedPhase: boolean;
    readonly asUnsignedPhase: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionUnsignedPhase, Option<u32>]>;
    readonly isMinerPages: boolean;
    readonly asMinerPages: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionMinerPages, Option<u32>]>;
    readonly isMaxElectingVoters: boolean;
    readonly asMaxElectingVoters: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxElectingVoters, Option<u32>]>;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly asTargetSnapshotPerBlock: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock, Option<u32>]>;
    readonly isMaxEraDuration: boolean;
    readonly asMaxEraDuration: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxEraDuration, Option<u64>]>;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerParameters (315) */
  interface AssetHubKusamaRuntimeDynamicParamsSchedulerParameters extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: ITuple<[AssetHubKusamaRuntimeDynamicParamsSchedulerMaxScheduledPerBlock, Option<u32>]>;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: ITuple<[AssetHubKusamaRuntimeDynamicParamsSchedulerMaximumWeight, Option<SpWeightsWeightV2Weight>]>;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueParameters (316) */
  interface AssetHubKusamaRuntimeDynamicParamsMessageQueueParameters extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: ITuple<[AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnInitWeight, Option<Option<SpWeightsWeightV2Weight>>]>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: ITuple<[AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnIdleWeight, Option<Option<SpWeightsWeightV2Weight>>]>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubKusamaRuntimeSessionKeys (333) */
  interface AssetHubKusamaRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (334) */
  interface SpConsensusAuraSr25519AppSr25519Public extends U8aFixed {}

  /** @name AssetHubKusamaRuntimeOriginCaller (385) */
  interface AssetHubKusamaRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly type: 'System' | 'PolkadotXcm' | 'CumulusXcm' | 'Origins';
  }

  /** @name AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin (389) */
  interface AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin extends Enum {
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

  /** @name PalletRemoteProxyCall (394) */
  interface PalletRemoteProxyCall extends Enum {
    readonly isRemoteProxy: boolean;
    readonly asRemoteProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<AssetHubKusamaRuntimeProxyType>;
      readonly call: Call;
      readonly proof: PalletRemoteProxyRemoteProxyProof;
    } & Struct;
    readonly isRegisterRemoteProxyProof: boolean;
    readonly asRegisterRemoteProxyProof: {
      readonly proof: PalletRemoteProxyRemoteProxyProof;
    } & Struct;
    readonly isRemoteProxyWithRegisteredProof: boolean;
    readonly asRemoteProxyWithRegisteredProof: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<AssetHubKusamaRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'RemoteProxy' | 'RegisterRemoteProxyProof' | 'RemoteProxyWithRegisteredProof';
  }

  /** @name PalletRemoteProxyRemoteProxyProof (395) */
  interface PalletRemoteProxyRemoteProxyProof extends Enum {
    readonly isRelayChain: boolean;
    readonly asRelayChain: {
      readonly proof: Vec<Bytes>;
      readonly block: u32;
    } & Struct;
    readonly type: 'RelayChain';
  }

  /** @name PalletStakingAsyncRcClientCall (445) */
  interface PalletStakingAsyncRcClientCall extends Enum {
    readonly isRelaySessionReport: boolean;
    readonly asRelaySessionReport: {
      readonly report: PalletStakingAsyncRcClientSessionReport;
    } & Struct;
    readonly isRelayNewOffence: boolean;
    readonly asRelayNewOffence: {
      readonly slashSession: u32;
      readonly offences: Vec<PalletStakingAsyncRcClientOffence>;
    } & Struct;
    readonly type: 'RelaySessionReport' | 'RelayNewOffence';
  }

  /** @name PalletStakingAsyncRcClientSessionReport (446) */
  interface PalletStakingAsyncRcClientSessionReport extends Struct {
    readonly endIndex: u32;
    readonly validatorPoints: Vec<ITuple<[AccountId32, u32]>>;
    readonly activationTimestamp: Option<ITuple<[u64, u32]>>;
    readonly leftover: bool;
  }

  /** @name PalletStakingAsyncRcClientOffence (450) */
  interface PalletStakingAsyncRcClientOffence extends Struct {
    readonly offender: AccountId32;
    readonly reporters: Vec<AccountId32>;
    readonly slashFraction: Perbill;
  }

  /** @name PalletElectionProviderMultiBlockCall (451) */
  interface PalletElectionProviderMultiBlockCall extends Enum {
    readonly isManage: boolean;
    readonly asManage: {
      readonly op: PalletElectionProviderMultiBlockAdminOperation;
    } & Struct;
    readonly type: 'Manage';
  }

  /** @name PalletElectionProviderMultiBlockAdminOperation (452) */
  interface PalletElectionProviderMultiBlockAdminOperation extends Enum {
    readonly isForceRotateRound: boolean;
    readonly isForceSetPhase: boolean;
    readonly asForceSetPhase: PalletElectionProviderMultiBlockPhase;
    readonly isEmergencySetSolution: boolean;
    readonly asEmergencySetSolution: ITuple<[FrameElectionProviderSupportBoundedSupports, SpNposElectionsElectionScore]>;
    readonly isEmergencyFallback: boolean;
    readonly isSetMinUntrustedScore: boolean;
    readonly asSetMinUntrustedScore: SpNposElectionsElectionScore;
    readonly type: 'ForceRotateRound' | 'ForceSetPhase' | 'EmergencySetSolution' | 'EmergencyFallback' | 'SetMinUntrustedScore';
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsPalletCall (461) */
  type PalletElectionProviderMultiBlockVerifierImplsPalletCall = Null;

  /** @name PalletElectionProviderMultiBlockUnsignedPalletCall (462) */
  interface PalletElectionProviderMultiBlockUnsignedPalletCall extends Enum {
    readonly isSubmitUnsigned: boolean;
    readonly asSubmitUnsigned: {
      readonly pagedSolution: PalletElectionProviderMultiBlockPagedRawSolution;
    } & Struct;
    readonly type: 'SubmitUnsigned';
  }

  /** @name PalletElectionProviderMultiBlockPagedRawSolution (463) */
  interface PalletElectionProviderMultiBlockPagedRawSolution extends Struct {
    readonly solutionPages: Vec<AssetHubKusamaRuntimeStakingNposCompactSolution24>;
    readonly score: SpNposElectionsElectionScore;
    readonly round: u32;
  }

  /** @name AssetHubKusamaRuntimeStakingNposCompactSolution24 (465) */
  interface AssetHubKusamaRuntimeStakingNposCompactSolution24 extends Struct {
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

  /** @name PalletElectionProviderMultiBlockSignedPalletCall (540) */
  interface PalletElectionProviderMultiBlockSignedPalletCall extends Enum {
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly claimedScore: SpNposElectionsElectionScore;
    } & Struct;
    readonly isSubmitPage: boolean;
    readonly asSubmitPage: {
      readonly page: u32;
      readonly maybeSolution: Option<AssetHubKusamaRuntimeStakingNposCompactSolution24>;
    } & Struct;
    readonly isBail: boolean;
    readonly isClearOldRoundData: boolean;
    readonly asClearOldRoundData: {
      readonly round: u32;
      readonly witnessPages: u32;
    } & Struct;
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly inv: Vec<AccountId32>;
    } & Struct;
    readonly type: 'Register' | 'SubmitPage' | 'Bail' | 'ClearOldRoundData' | 'SetInvulnerables';
  }

  /** @name PalletStakingAsyncPalletCall (542) */
  interface PalletStakingAsyncPalletCall extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly value: Compact<u128>;
      readonly payee: PalletStakingAsyncRewardDestination;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly maxAdditional: Compact<u128>;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isValidate: boolean;
    readonly asValidate: {
      readonly prefs: PalletStakingAsyncValidatorPrefs;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly targets: Vec<MultiAddress>;
    } & Struct;
    readonly isChill: boolean;
    readonly isSetPayee: boolean;
    readonly asSetPayee: {
      readonly payee: PalletStakingAsyncRewardDestination;
    } & Struct;
    readonly isSetController: boolean;
    readonly isSetValidatorCount: boolean;
    readonly asSetValidatorCount: {
      readonly new_: Compact<u32>;
    } & Struct;
    readonly isIncreaseValidatorCount: boolean;
    readonly asIncreaseValidatorCount: {
      readonly additional: Compact<u32>;
    } & Struct;
    readonly isScaleValidatorCount: boolean;
    readonly asScaleValidatorCount: {
      readonly factor: Percent;
    } & Struct;
    readonly isForceNoEras: boolean;
    readonly isForceNewEra: boolean;
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isForceUnstake: boolean;
    readonly asForceUnstake: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isForceNewEraAlways: boolean;
    readonly isCancelDeferredSlash: boolean;
    readonly asCancelDeferredSlash: {
      readonly era: u32;
      readonly validatorSlashes: Vec<ITuple<[AccountId32, Perbill]>>;
    } & Struct;
    readonly isPayoutStakers: boolean;
    readonly asPayoutStakers: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isReapStash: boolean;
    readonly asReapStash: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isKick: boolean;
    readonly asKick: {
      readonly who: Vec<MultiAddress>;
    } & Struct;
    readonly isSetStakingConfigs: boolean;
    readonly asSetStakingConfigs: {
      readonly minNominatorBond: PalletStakingAsyncPalletConfigOpU128;
      readonly minValidatorBond: PalletStakingAsyncPalletConfigOpU128;
      readonly maxNominatorCount: PalletStakingAsyncPalletConfigOpU32;
      readonly maxValidatorCount: PalletStakingAsyncPalletConfigOpU32;
      readonly chillThreshold: PalletStakingAsyncPalletConfigOpPercent;
      readonly minCommission: PalletStakingAsyncPalletConfigOpPerbill;
      readonly maxStakedRewards: PalletStakingAsyncPalletConfigOpPercent;
    } & Struct;
    readonly isChillOther: boolean;
    readonly asChillOther: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isForceApplyMinCommission: boolean;
    readonly asForceApplyMinCommission: {
      readonly validatorStash: AccountId32;
    } & Struct;
    readonly isSetMinCommission: boolean;
    readonly asSetMinCommission: {
      readonly new_: Perbill;
    } & Struct;
    readonly isPayoutStakersByPage: boolean;
    readonly asPayoutStakersByPage: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
      readonly page: u32;
    } & Struct;
    readonly isUpdatePayee: boolean;
    readonly asUpdatePayee: {
      readonly controller: AccountId32;
    } & Struct;
    readonly isDeprecateControllerBatch: boolean;
    readonly asDeprecateControllerBatch: {
      readonly controllers: Vec<AccountId32>;
    } & Struct;
    readonly isRestoreLedger: boolean;
    readonly asRestoreLedger: {
      readonly stash: AccountId32;
      readonly maybeController: Option<AccountId32>;
      readonly maybeTotal: Option<u128>;
      readonly maybeUnlocking: Option<Vec<PalletStakingAsyncLedgerUnlockChunk>>;
    } & Struct;
    readonly isMigrateCurrency: boolean;
    readonly asMigrateCurrency: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isApplySlash: boolean;
    readonly asApplySlash: {
      readonly slashEra: u32;
      readonly slashKey: ITuple<[AccountId32, Perbill, u32]>;
    } & Struct;
    readonly isPruneEraStep: boolean;
    readonly asPruneEraStep: {
      readonly era: u32;
    } & Struct;
    readonly type: 'Bond' | 'BondExtra' | 'Unbond' | 'WithdrawUnbonded' | 'Validate' | 'Nominate' | 'Chill' | 'SetPayee' | 'SetController' | 'SetValidatorCount' | 'IncreaseValidatorCount' | 'ScaleValidatorCount' | 'ForceNoEras' | 'ForceNewEra' | 'SetInvulnerables' | 'ForceUnstake' | 'ForceNewEraAlways' | 'CancelDeferredSlash' | 'PayoutStakers' | 'Rebond' | 'ReapStash' | 'Kick' | 'SetStakingConfigs' | 'ChillOther' | 'ForceApplyMinCommission' | 'SetMinCommission' | 'PayoutStakersByPage' | 'UpdatePayee' | 'DeprecateControllerBatch' | 'RestoreLedger' | 'MigrateCurrency' | 'ApplySlash' | 'PruneEraStep';
  }

  /** @name PalletStakingAsyncPalletConfigOpU128 (547) */
  interface PalletStakingAsyncPalletConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncPalletConfigOpU32 (548) */
  interface PalletStakingAsyncPalletConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncPalletConfigOpPercent (549) */
  interface PalletStakingAsyncPalletConfigOpPercent extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Percent;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncPalletConfigOpPerbill (550) */
  interface PalletStakingAsyncPalletConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Perbill;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncLedgerUnlockChunk (554) */
  interface PalletStakingAsyncLedgerUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PalletAhOpsCall (568) */
  interface PalletAhOpsCall extends Enum {
    readonly isUnreserveLeaseDeposit: boolean;
    readonly asUnreserveLeaseDeposit: {
      readonly block: u32;
      readonly depositor: Option<AccountId32>;
      readonly paraId: u32;
    } & Struct;
    readonly isWithdrawCrowdloanContribution: boolean;
    readonly asWithdrawCrowdloanContribution: {
      readonly block: u32;
      readonly depositor: Option<AccountId32>;
      readonly paraId: u32;
    } & Struct;
    readonly isUnreserveCrowdloanReserve: boolean;
    readonly asUnreserveCrowdloanReserve: {
      readonly block: u32;
      readonly depositor: Option<AccountId32>;
      readonly paraId: u32;
    } & Struct;
    readonly isTransferToPostMigrationTreasury: boolean;
    readonly asTransferToPostMigrationTreasury: {
      readonly assetId: StagingXcmV5Location;
    } & Struct;
    readonly type: 'UnreserveLeaseDeposit' | 'WithdrawCrowdloanContribution' | 'UnreserveCrowdloanReserve' | 'TransferToPostMigrationTreasury';
  }

  /** @name PalletAhMigratorCall (569) */
  interface PalletAhMigratorCall extends Enum {
    readonly isReceiveAccounts: boolean;
    readonly asReceiveAccounts: {
      readonly accounts: Vec<PalletRcMigratorAccountsAccount>;
    } & Struct;
    readonly isReceiveMultisigs: boolean;
    readonly asReceiveMultisigs: {
      readonly accounts: Vec<PalletRcMigratorMultisigRcMultisig>;
    } & Struct;
    readonly isReceiveProxyProxies: boolean;
    readonly asReceiveProxyProxies: {
      readonly proxies: Vec<PalletRcMigratorProxyRcProxy>;
    } & Struct;
    readonly isReceiveProxyAnnouncements: boolean;
    readonly asReceiveProxyAnnouncements: {
      readonly announcements: Vec<PalletRcMigratorProxyRcProxyAnnouncement>;
    } & Struct;
    readonly isReceivePreimageChunks: boolean;
    readonly asReceivePreimageChunks: {
      readonly chunks: Vec<PalletRcMigratorPreimageChunksRcPreimageChunk>;
    } & Struct;
    readonly isReceivePreimageRequestStatus: boolean;
    readonly asReceivePreimageRequestStatus: {
      readonly requestStatus: Vec<PalletRcMigratorPreimageRequestStatusPortableRequestStatus>;
    } & Struct;
    readonly isReceivePreimageLegacyStatus: boolean;
    readonly asReceivePreimageLegacyStatus: {
      readonly legacyStatus: Vec<PalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus>;
    } & Struct;
    readonly isReceiveNomPoolsMessages: boolean;
    readonly asReceiveNomPoolsMessages: {
      readonly messages: Vec<PalletRcMigratorStakingNomPoolsRcNomPoolsMessage>;
    } & Struct;
    readonly isReceiveVestingSchedules: boolean;
    readonly asReceiveVestingSchedules: {
      readonly schedules: Vec<PalletRcMigratorVestingRcVestingSchedule>;
    } & Struct;
    readonly isReceiveReferendaValues: boolean;
    readonly asReceiveReferendaValues: {
      readonly values: Vec<ITuple<[Option<u32>, Vec<ITuple<[u16, u32]>>, Vec<ITuple<[u16, Vec<ITuple<[u32, u128]>>]>>]>>;
    } & Struct;
    readonly isReceiveReferendums: boolean;
    readonly asReceiveReferendums: {
      readonly referendums: Vec<ITuple<[u32, PalletReferendaReferendumInfoRcPalletsOrigin]>>;
    } & Struct;
    readonly isReceiveClaims: boolean;
    readonly asReceiveClaims: {
      readonly messages: Vec<PalletRcMigratorClaimsRcClaimsMessage>;
    } & Struct;
    readonly isReceiveBagsListMessages: boolean;
    readonly asReceiveBagsListMessages: {
      readonly messages: Vec<PalletRcMigratorStakingBagsListPortableBagsListMessage>;
    } & Struct;
    readonly isReceiveSchedulerMessages: boolean;
    readonly asReceiveSchedulerMessages: {
      readonly messages: Vec<PalletRcMigratorSchedulerRcSchedulerMessage>;
    } & Struct;
    readonly isReceiveIndices: boolean;
    readonly asReceiveIndices: {
      readonly indices: Vec<PalletRcMigratorIndicesRcIndicesIndex>;
    } & Struct;
    readonly isReceiveConvictionVotingMessages: boolean;
    readonly asReceiveConvictionVotingMessages: {
      readonly messages: Vec<PalletRcMigratorConvictionVotingRcConvictionVotingMessage>;
    } & Struct;
    readonly isReceiveBountiesMessages: boolean;
    readonly asReceiveBountiesMessages: {
      readonly messages: Vec<PalletRcMigratorBountiesRcBountiesMessage>;
    } & Struct;
    readonly isReceiveAssetRates: boolean;
    readonly asReceiveAssetRates: {
      readonly rates: Vec<ITuple<[PolkadotRuntimeCommonImplsVersionedLocatableAsset, u128]>>;
    } & Struct;
    readonly isReceiveCrowdloanMessages: boolean;
    readonly asReceiveCrowdloanMessages: {
      readonly messages: Vec<PalletRcMigratorCrowdloanRcCrowdloanMessage>;
    } & Struct;
    readonly isReceiveReferendaMetadata: boolean;
    readonly asReceiveReferendaMetadata: {
      readonly metadata: Vec<ITuple<[u32, H256]>>;
    } & Struct;
    readonly isReceiveTreasuryMessages: boolean;
    readonly asReceiveTreasuryMessages: {
      readonly messages: Vec<PalletRcMigratorTreasuryPortableTreasuryMessage>;
    } & Struct;
    readonly isReceiveSchedulerAgendaMessages: boolean;
    readonly asReceiveSchedulerAgendaMessages: {
      readonly messages: Vec<ITuple<[u32, Vec<Option<PalletRcMigratorSchedulerAliasScheduled>>]>>;
    } & Struct;
    readonly isReceiveDelegatedStakingMessages: boolean;
    readonly asReceiveDelegatedStakingMessages: {
      readonly messages: Vec<PalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage>;
    } & Struct;
    readonly isReceiveChildBountiesMessages: boolean;
    readonly asReceiveChildBountiesMessages: {
      readonly messages: Vec<PalletRcMigratorChildBountiesPortableChildBountiesMessage>;
    } & Struct;
    readonly isReceiveStakingMessages: boolean;
    readonly asReceiveStakingMessages: {
      readonly messages: Vec<PalletRcMigratorStakingMessagePortableStakingMessage>;
    } & Struct;
    readonly isReceiveRecoveryMessages: boolean;
    readonly asReceiveRecoveryMessages: {
      readonly messages: Vec<PalletRcMigratorRecoveryPortableRecoveryMessage>;
    } & Struct;
    readonly isReceiveSocietyMessages: boolean;
    readonly asReceiveSocietyMessages: {
      readonly messages: Vec<PalletRcMigratorSocietyPortableSocietyMessage>;
    } & Struct;
    readonly isForceSetStage: boolean;
    readonly asForceSetStage: {
      readonly stage: PalletAhMigratorMigrationStage;
    } & Struct;
    readonly isStartMigration: boolean;
    readonly isSetDmpQueuePriority: boolean;
    readonly asSetDmpQueuePriority: {
      readonly new_: PalletRcMigratorQueuePriority;
    } & Struct;
    readonly isSetManager: boolean;
    readonly asSetManager: {
      readonly new_: Option<AccountId32>;
    } & Struct;
    readonly isFinishMigration: boolean;
    readonly asFinishMigration: {
      readonly data: Option<PalletRcMigratorMigrationFinishedData>;
    } & Struct;
    readonly isSendXcmMessage: boolean;
    readonly asSendXcmMessage: {
      readonly dest: XcmVersionedLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly type: 'ReceiveAccounts' | 'ReceiveMultisigs' | 'ReceiveProxyProxies' | 'ReceiveProxyAnnouncements' | 'ReceivePreimageChunks' | 'ReceivePreimageRequestStatus' | 'ReceivePreimageLegacyStatus' | 'ReceiveNomPoolsMessages' | 'ReceiveVestingSchedules' | 'ReceiveReferendaValues' | 'ReceiveReferendums' | 'ReceiveClaims' | 'ReceiveBagsListMessages' | 'ReceiveSchedulerMessages' | 'ReceiveIndices' | 'ReceiveConvictionVotingMessages' | 'ReceiveBountiesMessages' | 'ReceiveAssetRates' | 'ReceiveCrowdloanMessages' | 'ReceiveReferendaMetadata' | 'ReceiveTreasuryMessages' | 'ReceiveSchedulerAgendaMessages' | 'ReceiveDelegatedStakingMessages' | 'ReceiveChildBountiesMessages' | 'ReceiveStakingMessages' | 'ReceiveRecoveryMessages' | 'ReceiveSocietyMessages' | 'ForceSetStage' | 'StartMigration' | 'SetDmpQueuePriority' | 'SetManager' | 'FinishMigration' | 'SendXcmMessage';
  }

  /** @name PalletRcMigratorAccountsAccount (571) */
  interface PalletRcMigratorAccountsAccount extends Struct {
    readonly who: AccountId32;
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly holds: Vec<FrameSupportTokensMiscIdAmountPortableHoldReason>;
    readonly freezes: Vec<FrameSupportTokensMiscIdAmountPortableFreezeReason>;
    readonly locks: Vec<PalletBalancesBalanceLock>;
    readonly unnamedReserve: u128;
    readonly consumers: u8;
    readonly providers: u8;
  }

  /** @name PalletRcMigratorPortableHoldReason (572) */
  interface PalletRcMigratorPortableHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingPalletHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingHoldReason;
    readonly isSession: boolean;
    readonly asSession: PalletSessionHoldReason;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmHoldReason;
    readonly type: 'Preimage' | 'Staking' | 'StateTrieMigration' | 'DelegatedStaking' | 'Session' | 'XcmPallet';
  }

  /** @name PalletRcMigratorPortableFreezeReason (579) */
  interface PalletRcMigratorPortableFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name FrameSupportTokensMiscIdAmountPortableHoldReason (582) */
  interface FrameSupportTokensMiscIdAmountPortableHoldReason extends Struct {
    readonly id: PalletRcMigratorPortableHoldReason;
    readonly amount: u128;
  }

  /** @name FrameSupportTokensMiscIdAmountPortableFreezeReason (585) */
  interface FrameSupportTokensMiscIdAmountPortableFreezeReason extends Struct {
    readonly id: PalletRcMigratorPortableFreezeReason;
    readonly amount: u128;
  }

  /** @name PalletRcMigratorMultisigRcMultisig (592) */
  interface PalletRcMigratorMultisigRcMultisig extends Struct {
    readonly creator: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletRcMigratorProxyRcProxy (594) */
  interface PalletRcMigratorProxyRcProxy extends Struct {
    readonly delegator: AccountId32;
    readonly deposit: u128;
    readonly proxies: Vec<PalletProxyProxyDefinitionKusamaRuntimeConstantsProxyProxyType>;
  }

  /** @name PalletProxyProxyDefinitionKusamaRuntimeConstantsProxyProxyType (597) */
  interface PalletProxyProxyDefinitionKusamaRuntimeConstantsProxyProxyType extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: KusamaRuntimeConstantsProxyProxyType;
    readonly delay: u32;
  }

  /** @name PalletRcMigratorProxyRcProxyAnnouncement (599) */
  interface PalletRcMigratorProxyRcProxyAnnouncement extends Struct {
    readonly depositor: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletRcMigratorPreimageChunksRcPreimageChunk (601) */
  interface PalletRcMigratorPreimageChunksRcPreimageChunk extends Struct {
    readonly preimageHash: H256;
    readonly preimageLen: u32;
    readonly chunkByteOffset: u32;
    readonly chunkBytes: Bytes;
  }

  /** @name PalletRcMigratorPreimageRequestStatusPortableRequestStatus (604) */
  interface PalletRcMigratorPreimageRequestStatusPortableRequestStatus extends Struct {
    readonly hash_: H256;
    readonly requestStatus: PalletRcMigratorPreimageRequestStatusPortableRequestStatusInner;
  }

  /** @name PalletRcMigratorPreimageRequestStatusPortableRequestStatusInner (605) */
  interface PalletRcMigratorPreimageRequestStatusPortableRequestStatusInner extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly ticket: ITuple<[AccountId32, Bytes]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly maybeTicket: Option<ITuple<[AccountId32, Bytes]>>;
      readonly count: u32;
      readonly maybeLen: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus (610) */
  interface PalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus extends Struct {
    readonly hash_: H256;
    readonly depositor: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletRcMigratorStakingNomPoolsRcNomPoolsMessage (612) */
  interface PalletRcMigratorStakingNomPoolsRcNomPoolsMessage extends Enum {
    readonly isStorageValues: boolean;
    readonly asStorageValues: {
      readonly values: PalletRcMigratorStakingNomPoolsNomPoolsStorageValues;
    } & Struct;
    readonly isPoolMembers: boolean;
    readonly asPoolMembers: {
      readonly member: ITuple<[AccountId32, PalletNominationPoolsPoolMember]>;
    } & Struct;
    readonly isBondedPools: boolean;
    readonly asBondedPools: {
      readonly pool: ITuple<[u32, PalletNominationPoolsBondedPoolInner]>;
    } & Struct;
    readonly isRewardPools: boolean;
    readonly asRewardPools: {
      readonly rewards: ITuple<[u32, PalletRcMigratorStakingNomPoolsAliasRewardPool]>;
    } & Struct;
    readonly isSubPoolsStorage: boolean;
    readonly asSubPoolsStorage: {
      readonly subPools: ITuple<[u32, PalletRcMigratorStakingNomPoolsAliasSubPools]>;
    } & Struct;
    readonly isMetadata: boolean;
    readonly asMetadata: {
      readonly meta: ITuple<[u32, Bytes]>;
    } & Struct;
    readonly isReversePoolIdLookup: boolean;
    readonly asReversePoolIdLookup: {
      readonly lookups: ITuple<[AccountId32, u32]>;
    } & Struct;
    readonly isClaimPermissions: boolean;
    readonly asClaimPermissions: {
      readonly perms: ITuple<[AccountId32, PalletNominationPoolsClaimPermission]>;
    } & Struct;
    readonly type: 'StorageValues' | 'PoolMembers' | 'BondedPools' | 'RewardPools' | 'SubPoolsStorage' | 'Metadata' | 'ReversePoolIdLookup' | 'ClaimPermissions';
  }

  /** @name PalletRcMigratorStakingNomPoolsNomPoolsStorageValues (613) */
  interface PalletRcMigratorStakingNomPoolsNomPoolsStorageValues extends Struct {
    readonly totalValueLocked: Option<u128>;
    readonly minJoinBond: Option<u128>;
    readonly minCreateBond: Option<u128>;
    readonly maxPools: Option<u32>;
    readonly maxPoolMembers: Option<u32>;
    readonly maxPoolMembersPerPool: Option<u32>;
    readonly globalMaxCommission: Option<Perbill>;
    readonly lastPoolId: Option<u32>;
  }

  /** @name PalletRcMigratorStakingNomPoolsAliasRewardPool (626) */
  interface PalletRcMigratorStakingNomPoolsAliasRewardPool extends Struct {
    readonly lastRecordedRewardCounter: u128;
    readonly lastRecordedTotalPayouts: u128;
    readonly totalRewardsClaimed: u128;
    readonly totalCommissionPending: u128;
    readonly totalCommissionClaimed: u128;
  }

  /** @name PalletRcMigratorStakingNomPoolsAliasSubPools (628) */
  interface PalletRcMigratorStakingNomPoolsAliasSubPools extends Struct {
    readonly noEra: PalletRcMigratorStakingNomPoolsAliasUnbondPool;
    readonly withEra: BTreeMap<u32, PalletRcMigratorStakingNomPoolsAliasUnbondPool>;
  }

  /** @name PalletRcMigratorStakingNomPoolsAliasUnbondPool (629) */
  interface PalletRcMigratorStakingNomPoolsAliasUnbondPool extends Struct {
    readonly points: u128;
    readonly balance: u128;
  }

  /** @name PalletRcMigratorVestingRcVestingSchedule (637) */
  interface PalletRcMigratorVestingRcVestingSchedule extends Struct {
    readonly who: AccountId32;
    readonly schedules: Vec<PalletVestingVestingInfo>;
  }

  /** @name PalletReferendaReferendumInfoRcPalletsOrigin (648) */
  interface PalletReferendaReferendumInfoRcPalletsOrigin extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletReferendaReferendumStatusRcPalletsOrigin;
    readonly isApproved: boolean;
    readonly asApproved: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isRejected: boolean;
    readonly asRejected: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isCancelled: boolean;
    readonly asCancelled: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isTimedOut: boolean;
    readonly asTimedOut: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isKilled: boolean;
    readonly asKilled: u32;
    readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
  }

  /** @name AssetHubKusamaRuntimeAhMigrationRcPalletsOrigin (649) */
  interface AssetHubKusamaRuntimeAhMigrationRcPalletsOrigin extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly type: 'System' | 'Origins';
  }

  /** @name PalletReferendaReferendumStatusRcPalletsOrigin (651) */
  interface PalletReferendaReferendumStatusRcPalletsOrigin extends Struct {
    readonly track: u16;
    readonly origin: AssetHubKusamaRuntimeAhMigrationRcPalletsOrigin;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly enactment: FrameSupportScheduleDispatchTime;
    readonly submitted: u32;
    readonly submissionDeposit: PalletReferendaDeposit;
    readonly decisionDeposit: Option<PalletReferendaDeposit>;
    readonly deciding: Option<PalletReferendaDecidingStatus>;
    readonly tally: PalletConvictionVotingTally;
    readonly inQueue: bool;
    readonly alarm: Option<ITuple<[u32, ITuple<[u32, u32]>]>>;
  }

  /** @name PalletRcMigratorClaimsRcClaimsMessage (659) */
  interface PalletRcMigratorClaimsRcClaimsMessage extends Enum {
    readonly isStorageValues: boolean;
    readonly asStorageValues: {
      readonly total: u128;
    } & Struct;
    readonly isClaims: boolean;
    readonly asClaims: ITuple<[EthereumAddress, u128]>;
    readonly isVesting: boolean;
    readonly asVesting: {
      readonly who: EthereumAddress;
      readonly schedule: ITuple<[u128, u128, u32]>;
    } & Struct;
    readonly isSigning: boolean;
    readonly asSigning: ITuple<[EthereumAddress, PolkadotRuntimeCommonClaimsStatementKind]>;
    readonly isPreclaims: boolean;
    readonly asPreclaims: ITuple<[AccountId32, EthereumAddress]>;
    readonly type: 'StorageValues' | 'Claims' | 'Vesting' | 'Signing' | 'Preclaims';
  }

  /** @name PalletRcMigratorStakingBagsListPortableBagsListMessage (664) */
  interface PalletRcMigratorStakingBagsListPortableBagsListMessage extends Enum {
    readonly isNode: boolean;
    readonly asNode: {
      readonly id: AccountId32;
      readonly node: PalletRcMigratorStakingBagsListPortableNode;
    } & Struct;
    readonly isBag: boolean;
    readonly asBag: {
      readonly score: u64;
      readonly bag: PalletRcMigratorStakingBagsListPortableBag;
    } & Struct;
    readonly type: 'Node' | 'Bag';
  }

  /** @name PalletRcMigratorStakingBagsListPortableNode (665) */
  interface PalletRcMigratorStakingBagsListPortableNode extends Struct {
    readonly id: AccountId32;
    readonly prev: Option<AccountId32>;
    readonly next: Option<AccountId32>;
    readonly bagUpper: u64;
    readonly score: u64;
  }

  /** @name PalletRcMigratorStakingBagsListPortableBag (666) */
  interface PalletRcMigratorStakingBagsListPortableBag extends Struct {
    readonly head: Option<AccountId32>;
    readonly tail: Option<AccountId32>;
    readonly bagUpper: u64;
  }

  /** @name PalletRcMigratorSchedulerRcSchedulerMessage (668) */
  interface PalletRcMigratorSchedulerRcSchedulerMessage extends Enum {
    readonly isIncompleteSince: boolean;
    readonly asIncompleteSince: u32;
    readonly isRetries: boolean;
    readonly asRetries: ITuple<[ITuple<[u32, u32]>, PalletSchedulerRetryConfig]>;
    readonly isLookup: boolean;
    readonly asLookup: ITuple<[U8aFixed, ITuple<[u32, u32]>]>;
    readonly type: 'IncompleteSince' | 'Retries' | 'Lookup';
  }

  /** @name PalletRcMigratorIndicesRcIndicesIndex (673) */
  interface PalletRcMigratorIndicesRcIndicesIndex extends Struct {
    readonly index: u32;
    readonly who: AccountId32;
    readonly deposit: u128;
    readonly frozen: bool;
  }

  /** @name PalletRcMigratorConvictionVotingRcConvictionVotingMessage (675) */
  interface PalletRcMigratorConvictionVotingRcConvictionVotingMessage extends Enum {
    readonly isVotingFor: boolean;
    readonly asVotingFor: ITuple<[AccountId32, u16, PalletConvictionVotingVoteVoting]>;
    readonly isClassLocksFor: boolean;
    readonly asClassLocksFor: ITuple<[AccountId32, Vec<ITuple<[u16, u128]>>]>;
    readonly type: 'VotingFor' | 'ClassLocksFor';
  }

  /** @name PalletRcMigratorBountiesRcBountiesMessage (687) */
  interface PalletRcMigratorBountiesRcBountiesMessage extends Enum {
    readonly isBountyCount: boolean;
    readonly asBountyCount: u32;
    readonly isBountyApprovals: boolean;
    readonly asBountyApprovals: Vec<u32>;
    readonly isBountyDescriptions: boolean;
    readonly asBountyDescriptions: ITuple<[u32, Bytes]>;
    readonly isBounties: boolean;
    readonly asBounties: ITuple<[u32, PalletRcMigratorBountiesAliasBounty]>;
    readonly type: 'BountyCount' | 'BountyApprovals' | 'BountyDescriptions' | 'Bounties';
  }

  /** @name PalletRcMigratorBountiesAliasBounty (690) */
  interface PalletRcMigratorBountiesAliasBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletRcMigratorCrowdloanRcCrowdloanMessage (695) */
  interface PalletRcMigratorCrowdloanRcCrowdloanMessage extends Enum {
    readonly isLeaseReserve: boolean;
    readonly asLeaseReserve: {
      readonly unreserveBlock: u32;
      readonly account: AccountId32;
      readonly paraId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isCrowdloanContribution: boolean;
    readonly asCrowdloanContribution: {
      readonly withdrawBlock: u32;
      readonly contributor: AccountId32;
      readonly paraId: u32;
      readonly amount: u128;
      readonly crowdloanAccount: AccountId32;
    } & Struct;
    readonly isCrowdloanReserve: boolean;
    readonly asCrowdloanReserve: {
      readonly unreserveBlock: u32;
      readonly depositor: AccountId32;
      readonly paraId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'LeaseReserve' | 'CrowdloanContribution' | 'CrowdloanReserve';
  }

  /** @name PalletRcMigratorTreasuryPortableTreasuryMessage (699) */
  interface PalletRcMigratorTreasuryPortableTreasuryMessage extends Enum {
    readonly isProposalCount: boolean;
    readonly asProposalCount: u32;
    readonly isProposals: boolean;
    readonly asProposals: ITuple<[u32, PalletTreasuryProposal]>;
    readonly isApprovals: boolean;
    readonly asApprovals: Vec<u32>;
    readonly isSpendCount: boolean;
    readonly asSpendCount: u32;
    readonly isSpends: boolean;
    readonly asSpends: {
      readonly id: u32;
      readonly status: PalletRcMigratorTreasuryPortableSpendStatus;
    } & Struct;
    readonly isLastSpendPeriod: boolean;
    readonly asLastSpendPeriod: Option<u32>;
    readonly isFunds: boolean;
    readonly type: 'ProposalCount' | 'Proposals' | 'Approvals' | 'SpendCount' | 'Spends' | 'LastSpendPeriod' | 'Funds';
  }

  /** @name PalletRcMigratorTreasuryPortableSpendStatus (702) */
  interface PalletRcMigratorTreasuryPortableSpendStatus extends Struct {
    readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
    readonly amount: u128;
    readonly beneficiary: XcmVersionedLocation;
    readonly validFrom: u32;
    readonly expireAt: u32;
    readonly status: PalletRcMigratorTreasuryPortablePaymentState;
  }

  /** @name PalletRcMigratorTreasuryPortablePaymentState (703) */
  interface PalletRcMigratorTreasuryPortablePaymentState extends Enum {
    readonly isPending: boolean;
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly id: u64;
    } & Struct;
    readonly isFailed: boolean;
    readonly type: 'Pending' | 'Attempted' | 'Failed';
  }

  /** @name PalletRcMigratorSchedulerAliasScheduled (708) */
  interface PalletRcMigratorSchedulerAliasScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: AssetHubKusamaRuntimeAhMigrationRcPalletsOrigin;
  }

  /** @name PalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage (710) */
  interface PalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage extends Enum {
    readonly isDelegators: boolean;
    readonly asDelegators: {
      readonly delegator: AccountId32;
      readonly agent: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAgents: boolean;
    readonly asAgents: {
      readonly agent: AccountId32;
      readonly payee: AccountId32;
      readonly totalDelegated: u128;
      readonly unclaimedWithdrawals: u128;
      readonly pendingSlash: u128;
    } & Struct;
    readonly type: 'Delegators' | 'Agents';
  }

  /** @name PalletRcMigratorChildBountiesPortableChildBountiesMessage (712) */
  interface PalletRcMigratorChildBountiesPortableChildBountiesMessage extends Enum {
    readonly isChildBountyCount: boolean;
    readonly asChildBountyCount: u32;
    readonly isParentChildBounties: boolean;
    readonly asParentChildBounties: ITuple<[u32, u32]>;
    readonly isParentTotalChildBounties: boolean;
    readonly asParentTotalChildBounties: ITuple<[u32, u32]>;
    readonly isChildBounty: boolean;
    readonly asChildBounty: {
      readonly parentId: u32;
      readonly childId: u32;
      readonly childBounty: PalletRcMigratorChildBountiesPortableChildBounty;
    } & Struct;
    readonly isChildBountyDescriptionsV1: boolean;
    readonly asChildBountyDescriptionsV1: {
      readonly parentId: u32;
      readonly childId: u32;
      readonly description: Bytes;
    } & Struct;
    readonly isV0ToV1ChildBountyIds: boolean;
    readonly asV0ToV1ChildBountyIds: {
      readonly v0ChildId: u32;
      readonly parentId: u32;
      readonly v1ChildId: u32;
    } & Struct;
    readonly isChildrenCuratorFees: boolean;
    readonly asChildrenCuratorFees: {
      readonly childId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'ChildBountyCount' | 'ParentChildBounties' | 'ParentTotalChildBounties' | 'ChildBounty' | 'ChildBountyDescriptionsV1' | 'V0ToV1ChildBountyIds' | 'ChildrenCuratorFees';
  }

  /** @name PalletRcMigratorChildBountiesPortableChildBounty (713) */
  interface PalletRcMigratorChildBountiesPortableChildBounty extends Struct {
    readonly parentBounty: u32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly status: PalletRcMigratorChildBountiesPortableChildBountyStatus;
  }

  /** @name PalletRcMigratorChildBountiesPortableChildBountyStatus (714) */
  interface PalletRcMigratorChildBountiesPortableChildBountyStatus extends Enum {
    readonly isAdded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Added' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletRcMigratorStakingMessagePortableStakingMessage (717) */
  interface PalletRcMigratorStakingMessagePortableStakingMessage extends Enum {
    readonly isValues: boolean;
    readonly asValues: PalletRcMigratorStakingMessageStakingValues;
    readonly isInvulnerables: boolean;
    readonly asInvulnerables: Vec<AccountId32>;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly stash: AccountId32;
      readonly controller: AccountId32;
    } & Struct;
    readonly isLedger: boolean;
    readonly asLedger: {
      readonly controller: AccountId32;
      readonly ledger: PalletRcMigratorStakingMessagePortableStakingLedger;
    } & Struct;
    readonly isPayee: boolean;
    readonly asPayee: {
      readonly stash: AccountId32;
      readonly payment: PalletRcMigratorStakingMessagePortableRewardDestination;
    } & Struct;
    readonly isValidators: boolean;
    readonly asValidators: {
      readonly stash: AccountId32;
      readonly validators: PalletRcMigratorStakingMessagePortableValidatorPrefs;
    } & Struct;
    readonly isNominators: boolean;
    readonly asNominators: {
      readonly stash: AccountId32;
      readonly nominations: PalletRcMigratorStakingMessagePortableNominations;
    } & Struct;
    readonly isVirtualStakers: boolean;
    readonly asVirtualStakers: AccountId32;
    readonly isErasStakersOverview: boolean;
    readonly asErasStakersOverview: {
      readonly era: u32;
      readonly validator: AccountId32;
      readonly exposure: PalletRcMigratorStakingMessagePortablePagedExposureMetadata;
    } & Struct;
    readonly isErasStakersPaged: boolean;
    readonly asErasStakersPaged: {
      readonly era: u32;
      readonly validator: AccountId32;
      readonly page: u32;
      readonly exposure: PalletRcMigratorStakingMessagePortableExposurePage;
    } & Struct;
    readonly isClaimedRewards: boolean;
    readonly asClaimedRewards: {
      readonly era: u32;
      readonly validator: AccountId32;
      readonly rewards: Vec<u32>;
    } & Struct;
    readonly isErasValidatorPrefs: boolean;
    readonly asErasValidatorPrefs: {
      readonly era: u32;
      readonly validator: AccountId32;
      readonly prefs: PalletRcMigratorStakingMessagePortableValidatorPrefs;
    } & Struct;
    readonly isErasValidatorReward: boolean;
    readonly asErasValidatorReward: {
      readonly era: u32;
      readonly reward: u128;
    } & Struct;
    readonly isErasRewardPoints: boolean;
    readonly asErasRewardPoints: {
      readonly era: u32;
      readonly points: PalletRcMigratorStakingMessagePortableEraRewardPoints;
    } & Struct;
    readonly isErasTotalStake: boolean;
    readonly asErasTotalStake: {
      readonly era: u32;
      readonly totalStake: u128;
    } & Struct;
    readonly isUnappliedSlashes: boolean;
    readonly asUnappliedSlashes: {
      readonly era: u32;
      readonly slash: PalletRcMigratorStakingMessagePortableUnappliedSlash;
    } & Struct;
    readonly isBondedEras: boolean;
    readonly asBondedEras: Vec<ITuple<[u32, u32]>>;
    readonly isValidatorSlashInEra: boolean;
    readonly asValidatorSlashInEra: {
      readonly era: u32;
      readonly validator: AccountId32;
      readonly slash: ITuple<[Perbill, u128]>;
    } & Struct;
    readonly type: 'Values' | 'Invulnerables' | 'Bonded' | 'Ledger' | 'Payee' | 'Validators' | 'Nominators' | 'VirtualStakers' | 'ErasStakersOverview' | 'ErasStakersPaged' | 'ClaimedRewards' | 'ErasValidatorPrefs' | 'ErasValidatorReward' | 'ErasRewardPoints' | 'ErasTotalStake' | 'UnappliedSlashes' | 'BondedEras' | 'ValidatorSlashInEra';
  }

  /** @name PalletRcMigratorStakingMessageStakingValues (718) */
  interface PalletRcMigratorStakingMessageStakingValues extends Struct {
    readonly validatorCount: Option<u32>;
    readonly minValidatorCount: Option<u32>;
    readonly minNominatorBond: Option<u128>;
    readonly minValidatorBond: Option<u128>;
    readonly minActiveStake: Option<u128>;
    readonly minCommission: Option<Perbill>;
    readonly maxValidatorsCount: Option<u32>;
    readonly maxNominatorsCount: Option<u32>;
    readonly currentEra: Option<u32>;
    readonly activeEra: Option<PalletRcMigratorStakingMessagePortableActiveEraInfo>;
    readonly forceEra: Option<PalletRcMigratorStakingMessagePortableForcing>;
    readonly maxStakedRewards: Option<Percent>;
    readonly slashRewardFraction: Option<Perbill>;
    readonly canceledSlashPayout: Option<u128>;
    readonly currentPlannedSession: Option<u32>;
    readonly chillThreshold: Option<Percent>;
  }

  /** @name PalletRcMigratorStakingMessagePortableActiveEraInfo (720) */
  interface PalletRcMigratorStakingMessagePortableActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name PalletRcMigratorStakingMessagePortableForcing (722) */
  interface PalletRcMigratorStakingMessagePortableForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PalletRcMigratorStakingMessagePortableStakingLedger (724) */
  interface PalletRcMigratorStakingMessagePortableStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: u128;
    readonly active: u128;
    readonly unlocking: Vec<PalletRcMigratorStakingMessagePortableUnlockChunk>;
  }

  /** @name PalletRcMigratorStakingMessagePortableUnlockChunk (726) */
  interface PalletRcMigratorStakingMessagePortableUnlockChunk extends Struct {
    readonly value: u128;
    readonly era: u32;
  }

  /** @name PalletRcMigratorStakingMessagePortableRewardDestination (728) */
  interface PalletRcMigratorStakingMessagePortableRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PalletRcMigratorStakingMessagePortableValidatorPrefs (729) */
  interface PalletRcMigratorStakingMessagePortableValidatorPrefs extends Struct {
    readonly commission: Perbill;
    readonly blocked: bool;
  }

  /** @name PalletRcMigratorStakingMessagePortableNominations (730) */
  interface PalletRcMigratorStakingMessagePortableNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PalletRcMigratorStakingMessagePortablePagedExposureMetadata (732) */
  interface PalletRcMigratorStakingMessagePortablePagedExposureMetadata extends Struct {
    readonly total: u128;
    readonly own: u128;
    readonly nominatorCount: u32;
    readonly pageCount: u32;
  }

  /** @name PalletRcMigratorStakingMessagePortableExposurePage (733) */
  interface PalletRcMigratorStakingMessagePortableExposurePage extends Struct {
    readonly pageTotal: u128;
    readonly others: Vec<PalletRcMigratorStakingMessagePortableIndividualExposure>;
  }

  /** @name PalletRcMigratorStakingMessagePortableIndividualExposure (735) */
  interface PalletRcMigratorStakingMessagePortableIndividualExposure extends Struct {
    readonly who: AccountId32;
    readonly value: u128;
  }

  /** @name PalletRcMigratorStakingMessagePortableEraRewardPoints (737) */
  interface PalletRcMigratorStakingMessagePortableEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: Vec<ITuple<[AccountId32, u32]>>;
  }

  /** @name PalletRcMigratorStakingMessagePortableUnappliedSlash (739) */
  interface PalletRcMigratorStakingMessagePortableUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[AccountId32, u128]>>;
    readonly reporters: Vec<AccountId32>;
    readonly payout: u128;
  }

  /** @name PalletRcMigratorRecoveryPortableRecoveryMessage (745) */
  interface PalletRcMigratorRecoveryPortableRecoveryMessage extends Enum {
    readonly isRecoverable: boolean;
    readonly asRecoverable: ITuple<[AccountId32, PalletRcMigratorRecoveryPortableRecoveryConfig]>;
    readonly isActiveRecoveries: boolean;
    readonly asActiveRecoveries: ITuple<[AccountId32, AccountId32, PalletRcMigratorRecoveryPortableActiveRecovery]>;
    readonly isProxy: boolean;
    readonly asProxy: ITuple<[AccountId32, AccountId32]>;
    readonly type: 'Recoverable' | 'ActiveRecoveries' | 'Proxy';
  }

  /** @name PalletRcMigratorRecoveryPortableRecoveryConfig (747) */
  interface PalletRcMigratorRecoveryPortableRecoveryConfig extends Struct {
    readonly delayPeriod: u32;
    readonly deposit: u128;
    readonly friends: PalletRcMigratorRecoveryPortableRecoveryFriends;
    readonly threshold: u16;
  }

  /** @name PalletRcMigratorRecoveryPortableRecoveryFriends (748) */
  interface PalletRcMigratorRecoveryPortableRecoveryFriends extends Struct {
    readonly friends: Vec<AccountId32>;
  }

  /** @name PalletRcMigratorRecoveryPortableActiveRecovery (751) */
  interface PalletRcMigratorRecoveryPortableActiveRecovery extends Struct {
    readonly created: u32;
    readonly deposit: u128;
    readonly friends: PalletRcMigratorRecoveryPortableRecoveryFriends;
  }

  /** @name PalletRcMigratorSocietyPortableSocietyMessage (754) */
  interface PalletRcMigratorSocietyPortableSocietyMessage extends Enum {
    readonly isValues: boolean;
    readonly asValues: PalletRcMigratorSocietySocietyValues;
    readonly isMember: boolean;
    readonly asMember: ITuple<[AccountId32, PalletRcMigratorSocietyPortableMemberRecord]>;
    readonly isPayout: boolean;
    readonly asPayout: ITuple<[AccountId32, PalletRcMigratorSocietyPortablePayoutRecord]>;
    readonly isMemberByIndex: boolean;
    readonly asMemberByIndex: ITuple<[u32, AccountId32]>;
    readonly isSuspendedMembers: boolean;
    readonly asSuspendedMembers: ITuple<[AccountId32, PalletRcMigratorSocietyPortableMemberRecord]>;
    readonly isCandidates: boolean;
    readonly asCandidates: ITuple<[AccountId32, PalletRcMigratorSocietyPortableCandidacy]>;
    readonly isVotes: boolean;
    readonly asVotes: ITuple<[AccountId32, AccountId32, PalletRcMigratorSocietyPortableVote]>;
    readonly isVoteClearCursor: boolean;
    readonly asVoteClearCursor: ITuple<[AccountId32, Bytes]>;
    readonly isDefenderVotes: boolean;
    readonly asDefenderVotes: ITuple<[u32, AccountId32, PalletRcMigratorSocietyPortableVote]>;
    readonly type: 'Values' | 'Member' | 'Payout' | 'MemberByIndex' | 'SuspendedMembers' | 'Candidates' | 'Votes' | 'VoteClearCursor' | 'DefenderVotes';
  }

  /** @name PalletRcMigratorSocietySocietyValues (755) */
  interface PalletRcMigratorSocietySocietyValues extends Struct {
    readonly parameters: Option<PalletRcMigratorSocietyPortableGroupParams>;
    readonly pot: Option<u128>;
    readonly founder: Option<AccountId32>;
    readonly head: Option<AccountId32>;
    readonly rules: Option<H256>;
    readonly memberCount: Option<u32>;
    readonly roundCount: Option<u32>;
    readonly bids: Option<Vec<PalletRcMigratorSocietyPortableBid>>;
    readonly sceptic: Option<AccountId32>;
    readonly nextHead: Option<PalletRcMigratorSocietyPortableIntakeRecord>;
    readonly challengeRoundCount: Option<u32>;
    readonly defending: Option<ITuple<[AccountId32, AccountId32, PalletRcMigratorSocietyPortableTally]>>;
    readonly nextIntakeAt: Option<u32>;
    readonly nextChallengeAt: Option<u32>;
  }

  /** @name PalletRcMigratorSocietyPortableGroupParams (757) */
  interface PalletRcMigratorSocietyPortableGroupParams extends Struct {
    readonly maxMembers: u32;
    readonly maxIntake: u32;
    readonly maxStrikes: u32;
    readonly candidateDeposit: u128;
  }

  /** @name PalletRcMigratorSocietyPortableBid (760) */
  interface PalletRcMigratorSocietyPortableBid extends Struct {
    readonly who: AccountId32;
    readonly kind: PalletRcMigratorSocietyPortableBidKind;
    readonly value: u128;
  }

  /** @name PalletRcMigratorSocietyPortableBidKind (761) */
  interface PalletRcMigratorSocietyPortableBidKind extends Enum {
    readonly isDeposit: boolean;
    readonly asDeposit: u128;
    readonly isVouch: boolean;
    readonly asVouch: ITuple<[AccountId32, u128]>;
    readonly type: 'Deposit' | 'Vouch';
  }

  /** @name PalletRcMigratorSocietyPortableIntakeRecord (763) */
  interface PalletRcMigratorSocietyPortableIntakeRecord extends Struct {
    readonly who: AccountId32;
    readonly bid: u128;
    readonly round: u32;
  }

  /** @name PalletRcMigratorSocietyPortableTally (766) */
  interface PalletRcMigratorSocietyPortableTally extends Struct {
    readonly approvals: u32;
    readonly rejections: u32;
  }

  /** @name PalletRcMigratorSocietyPortableMemberRecord (767) */
  interface PalletRcMigratorSocietyPortableMemberRecord extends Struct {
    readonly rank: u32;
    readonly strikes: u32;
    readonly vouching: Option<PalletRcMigratorSocietyPortableVouchingStatus>;
    readonly index: u32;
  }

  /** @name PalletRcMigratorSocietyPortableVouchingStatus (769) */
  interface PalletRcMigratorSocietyPortableVouchingStatus extends Enum {
    readonly isVouching: boolean;
    readonly isBanned: boolean;
    readonly type: 'Vouching' | 'Banned';
  }

  /** @name PalletRcMigratorSocietyPortablePayoutRecord (770) */
  interface PalletRcMigratorSocietyPortablePayoutRecord extends Struct {
    readonly paid: u128;
    readonly payouts: Vec<ITuple<[u32, u128]>>;
  }

  /** @name PalletRcMigratorSocietyPortableCandidacy (771) */
  interface PalletRcMigratorSocietyPortableCandidacy extends Struct {
    readonly round: u32;
    readonly kind: PalletRcMigratorSocietyPortableBidKind;
    readonly bid: u128;
    readonly tally: PalletRcMigratorSocietyPortableTally;
    readonly skepticStruck: bool;
  }

  /** @name PalletRcMigratorSocietyPortableVote (772) */
  interface PalletRcMigratorSocietyPortableVote extends Struct {
    readonly approve: bool;
    readonly weight: u32;
  }

  /** @name PalletAhMigratorMigrationStage (773) */
  interface PalletAhMigratorMigrationStage extends Enum {
    readonly isPending: boolean;
    readonly isDataMigrationOngoing: boolean;
    readonly isMigrationDone: boolean;
    readonly type: 'Pending' | 'DataMigrationOngoing' | 'MigrationDone';
  }

  /** @name PalletRcMigratorMigrationFinishedData (776) */
  interface PalletRcMigratorMigrationFinishedData extends Struct {
    readonly rcBalanceKept: u128;
  }

  /** @name PalletAhOpsEvent (785) */
  interface PalletAhOpsEvent extends Enum {
    readonly isLeaseUnreserveRemaining: boolean;
    readonly asLeaseUnreserveRemaining: {
      readonly depositor: AccountId32;
      readonly paraId: u32;
      readonly remaining: u128;
    } & Struct;
    readonly isCrowdloanUnreserveRemaining: boolean;
    readonly asCrowdloanUnreserveRemaining: {
      readonly depositor: AccountId32;
      readonly paraId: u32;
      readonly remaining: u128;
    } & Struct;
    readonly isSovereignMigrated: boolean;
    readonly asSovereignMigrated: {
      readonly paraId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly derivationIndex: Option<u16>;
    } & Struct;
    readonly type: 'LeaseUnreserveRemaining' | 'CrowdloanUnreserveRemaining' | 'SovereignMigrated';
  }

  /** @name PalletAhMigratorEvent (786) */
  interface PalletAhMigratorEvent extends Enum {
    readonly isStageTransition: boolean;
    readonly asStageTransition: {
      readonly old: PalletAhMigratorMigrationStage;
      readonly new_: PalletAhMigratorMigrationStage;
    } & Struct;
    readonly isBatchReceived: boolean;
    readonly asBatchReceived: {
      readonly pallet: PalletAhMigratorPalletEventName;
      readonly count: u32;
    } & Struct;
    readonly isBatchProcessed: boolean;
    readonly asBatchProcessed: {
      readonly pallet: PalletAhMigratorPalletEventName;
      readonly countGood: u32;
      readonly countBad: u32;
    } & Struct;
    readonly isAssetHubMigrationStarted: boolean;
    readonly isAssetHubMigrationFinished: boolean;
    readonly isDmpQueuePrioritySet: boolean;
    readonly asDmpQueuePrioritySet: {
      readonly prioritized: bool;
      readonly cycleBlock: u32;
      readonly cyclePeriod: u32;
    } & Struct;
    readonly isDmpQueuePriorityConfigSet: boolean;
    readonly asDmpQueuePriorityConfigSet: {
      readonly old: PalletRcMigratorQueuePriority;
      readonly new_: PalletRcMigratorQueuePriority;
    } & Struct;
    readonly isBalancesBeforeRecordSet: boolean;
    readonly asBalancesBeforeRecordSet: {
      readonly checkingAccount: u128;
      readonly totalIssuance: u128;
    } & Struct;
    readonly isBalancesBeforeRecordConsumed: boolean;
    readonly asBalancesBeforeRecordConsumed: {
      readonly checkingAccount: u128;
      readonly totalIssuance: u128;
    } & Struct;
    readonly isReferendumCanceled: boolean;
    readonly asReferendumCanceled: {
      readonly id: u32;
    } & Struct;
    readonly isManagerSet: boolean;
    readonly asManagerSet: {
      readonly old: Option<AccountId32>;
      readonly new_: Option<AccountId32>;
    } & Struct;
    readonly isAccountTranslatedParachainSovereign: boolean;
    readonly asAccountTranslatedParachainSovereign: {
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly isAccountTranslatedParachainSovereignDerived: boolean;
    readonly asAccountTranslatedParachainSovereignDerived: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly derivationIndex: u16;
    } & Struct;
    readonly isXcmSent: boolean;
    readonly asXcmSent: {
      readonly origin: StagingXcmV5Location;
      readonly destination: StagingXcmV5Location;
      readonly message: StagingXcmV5Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly type: 'StageTransition' | 'BatchReceived' | 'BatchProcessed' | 'AssetHubMigrationStarted' | 'AssetHubMigrationFinished' | 'DmpQueuePrioritySet' | 'DmpQueuePriorityConfigSet' | 'BalancesBeforeRecordSet' | 'BalancesBeforeRecordConsumed' | 'ReferendumCanceled' | 'ManagerSet' | 'AccountTranslatedParachainSovereign' | 'AccountTranslatedParachainSovereignDerived' | 'XcmSent';
  }

  /** @name PalletAhMigratorPalletEventName (787) */
  interface PalletAhMigratorPalletEventName extends Enum {
    readonly isAssetRates: boolean;
    readonly isBagsList: boolean;
    readonly isBalances: boolean;
    readonly isBounties: boolean;
    readonly isChildBounties: boolean;
    readonly isClaims: boolean;
    readonly isConvictionVoting: boolean;
    readonly isCrowdloan: boolean;
    readonly isDelegatedStaking: boolean;
    readonly isIndices: boolean;
    readonly isMultisig: boolean;
    readonly isNomPools: boolean;
    readonly isPreimageChunk: boolean;
    readonly isPreimageLegacyStatus: boolean;
    readonly isPreimageRequestStatus: boolean;
    readonly isProxyAnnouncements: boolean;
    readonly isProxyProxies: boolean;
    readonly isRecovery: boolean;
    readonly isReferendaMetadata: boolean;
    readonly isReferendaReferendums: boolean;
    readonly isReferendaValues: boolean;
    readonly isScheduler: boolean;
    readonly isSchedulerAgenda: boolean;
    readonly isStaking: boolean;
    readonly isTreasury: boolean;
    readonly isVesting: boolean;
    readonly isSociety: boolean;
    readonly type: 'AssetRates' | 'BagsList' | 'Balances' | 'Bounties' | 'ChildBounties' | 'Claims' | 'ConvictionVoting' | 'Crowdloan' | 'DelegatedStaking' | 'Indices' | 'Multisig' | 'NomPools' | 'PreimageChunk' | 'PreimageLegacyStatus' | 'PreimageRequestStatus' | 'ProxyAnnouncements' | 'ProxyProxies' | 'Recovery' | 'ReferendaMetadata' | 'ReferendaReferendums' | 'ReferendaValues' | 'Scheduler' | 'SchedulerAgenda' | 'Staking' | 'Treasury' | 'Vesting' | 'Society';
  }

  /** @name CumulusPalletParachainSystemParachainInherentInboundMessageId (827) */
  interface CumulusPalletParachainSystemParachainInherentInboundMessageId extends Struct {
    readonly sentAt: u32;
    readonly reverseIdx: u32;
  }

  /** @name AssetHubKusamaRuntimeRuntimeHoldReason (852) */
  interface AssetHubKusamaRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isSession: boolean;
    readonly asSession: PalletSessionHoldReason;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmHoldReason;
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PalletNftFractionalizationHoldReason;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingHoldReason;
    readonly isMultiBlockElectionSigned: boolean;
    readonly asMultiBlockElectionSigned: PalletElectionProviderMultiBlockSignedPalletHoldReason;
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingAsyncPalletHoldReason;
    readonly type: 'Preimage' | 'Session' | 'PolkadotXcm' | 'NftFractionalization' | 'Revive' | 'StateTrieMigration' | 'DelegatedStaking' | 'MultiBlockElectionSigned' | 'Staking';
  }

  /** @name PalletElectionProviderMultiBlockSignedPalletHoldReason (855) */
  interface PalletElectionProviderMultiBlockSignedPalletHoldReason extends Enum {
    readonly isSignedSubmission: boolean;
    readonly type: 'SignedSubmission';
  }

  /** @name PalletStakingAsyncPalletHoldReason (856) */
  interface PalletStakingAsyncPalletHoldReason extends Enum {
    readonly isStaking: boolean;
    readonly type: 'Staking';
  }

  /** @name AssetHubKusamaRuntimeRuntimeFreezeReason (860) */
  interface AssetHubKusamaRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name PalletProxyProxyDefinitionAssetHubKusamaRuntimeProxyType (938) */
  interface PalletProxyProxyDefinitionAssetHubKusamaRuntimeProxyType extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: AssetHubKusamaRuntimeProxyType;
    readonly delay: u32;
  }

  /** @name PalletRemoteProxyError (946) */
  interface PalletRemoteProxyError extends Enum {
    readonly isCouldNotConvertLocalToRemoteAccountId: boolean;
    readonly isUnknownProofAnchorBlock: boolean;
    readonly isInvalidProof: boolean;
    readonly isProxyDefinitionDecodingFailed: boolean;
    readonly isUnannounced: boolean;
    readonly isDidNotFindMatchingProxyDefinition: boolean;
    readonly isProxyProofNotRegistered: boolean;
    readonly type: 'CouldNotConvertLocalToRemoteAccountId' | 'UnknownProofAnchorBlock' | 'InvalidProof' | 'ProxyDefinitionDecodingFailed' | 'Unannounced' | 'DidNotFindMatchingProxyDefinition' | 'ProxyProofNotRegistered';
  }

  /** @name PalletReviveVmCodeInfo (1022) */
  interface PalletReviveVmCodeInfo extends Struct {
    readonly owner: AccountId32;
    readonly deposit: Compact<u128>;
    readonly refcount: Compact<u64>;
    readonly codeLen: u32;
    readonly behaviourVersion: u32;
  }

  /** @name PalletReviveStorageAccountInfo (1023) */
  interface PalletReviveStorageAccountInfo extends Struct {
    readonly accountType: PalletReviveStorageAccountType;
    readonly dust: u32;
  }

  /** @name PalletReviveStorageAccountType (1024) */
  interface PalletReviveStorageAccountType extends Enum {
    readonly isContract: boolean;
    readonly asContract: PalletReviveStorageContractInfo;
    readonly isEoa: boolean;
    readonly type: 'Contract' | 'Eoa';
  }

  /** @name PalletElectionProviderMultiBlockError (1051) */
  interface PalletElectionProviderMultiBlockError extends Enum {
    readonly isFallback: boolean;
    readonly isUnexpectedPhase: boolean;
    readonly isSnapshot: boolean;
    readonly type: 'Fallback' | 'UnexpectedPhase' | 'Snapshot';
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsValidSolution (1052) */
  interface PalletElectionProviderMultiBlockVerifierImplsValidSolution extends Enum {
    readonly isX: boolean;
    readonly isY: boolean;
    readonly type: 'X' | 'Y';
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsPartialBackings (1055) */
  interface PalletElectionProviderMultiBlockVerifierImplsPartialBackings extends Struct {
    readonly total: u128;
    readonly backers: u32;
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsStatus (1057) */
  interface PalletElectionProviderMultiBlockVerifierImplsStatus extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: u32;
    readonly isNothing: boolean;
    readonly type: 'Ongoing' | 'Nothing';
  }

  /** @name PalletElectionProviderMultiBlockSignedSubmissionMetadata (1063) */
  interface PalletElectionProviderMultiBlockSignedSubmissionMetadata extends Struct {
    readonly deposit: u128;
    readonly fee: u128;
    readonly reward: u128;
    readonly claimedScore: SpNposElectionsElectionScore;
    readonly pages: Vec<bool>;
  }

  /** @name PalletElectionProviderMultiBlockSignedPalletError (1066) */
  interface PalletElectionProviderMultiBlockSignedPalletError extends Enum {
    readonly isPhaseNotSigned: boolean;
    readonly isDuplicate: boolean;
    readonly isQueueFull: boolean;
    readonly isBadPageIndex: boolean;
    readonly isNotRegistered: boolean;
    readonly isNoSubmission: boolean;
    readonly isRoundNotOver: boolean;
    readonly isBadWitnessData: boolean;
    readonly isTooManyInvulnerables: boolean;
    readonly type: 'PhaseNotSigned' | 'Duplicate' | 'QueueFull' | 'BadPageIndex' | 'NotRegistered' | 'NoSubmission' | 'RoundNotOver' | 'BadWitnessData' | 'TooManyInvulnerables';
  }

  /** @name PalletStakingAsyncLedgerStakingLedger (1067) */
  interface PalletStakingAsyncLedgerStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: Compact<u128>;
    readonly active: Compact<u128>;
    readonly unlocking: Vec<PalletStakingAsyncLedgerUnlockChunk>;
  }

  /** @name PalletStakingAsyncNominations (1068) */
  interface PalletStakingAsyncNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PalletStakingAsyncActiveEraInfo (1069) */
  interface PalletStakingAsyncActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name PalletStakingAsyncPalletBoundedExposurePage (1072) */
  interface PalletStakingAsyncPalletBoundedExposurePage extends SpStakingExposurePage {}

  /** @name PalletStakingAsyncEraRewardPoints (1077) */
  interface PalletStakingAsyncEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: BTreeMap<AccountId32, u32>;
  }

  /** @name PalletStakingAsyncSlashingOffenceRecord (1080) */
  interface PalletStakingAsyncSlashingOffenceRecord extends Struct {
    readonly reporter: Option<AccountId32>;
    readonly reportedEra: u32;
    readonly exposurePage: u32;
    readonly slashFraction: Perbill;
    readonly priorSlashFraction: Perbill;
  }

  /** @name PalletStakingAsyncUnappliedSlash (1084) */
  interface PalletStakingAsyncUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[AccountId32, u128]>>;
    readonly reporter: Option<AccountId32>;
    readonly payout: u128;
  }

  /** @name PalletStakingAsyncSnapshotStatus (1087) */
  interface PalletStakingAsyncSnapshotStatus extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: AccountId32;
    readonly isConsumed: boolean;
    readonly isWaiting: boolean;
    readonly type: 'Ongoing' | 'Consumed' | 'Waiting';
  }

  /** @name PalletStakingAsyncPalletPruningStep (1089) */
  interface PalletStakingAsyncPalletPruningStep extends Enum {
    readonly isErasStakersPaged: boolean;
    readonly isErasStakersOverview: boolean;
    readonly isErasValidatorPrefs: boolean;
    readonly isClaimedRewards: boolean;
    readonly isErasValidatorReward: boolean;
    readonly isErasRewardPoints: boolean;
    readonly isErasTotalStake: boolean;
    readonly type: 'ErasStakersPaged' | 'ErasStakersOverview' | 'ErasValidatorPrefs' | 'ClaimedRewards' | 'ErasValidatorReward' | 'ErasRewardPoints' | 'ErasTotalStake';
  }

  /** @name PalletStakingAsyncPalletError (1090) */
  interface PalletStakingAsyncPalletError extends Enum {
    readonly isNotController: boolean;
    readonly isNotStash: boolean;
    readonly isAlreadyBonded: boolean;
    readonly isAlreadyPaired: boolean;
    readonly isEmptyTargets: boolean;
    readonly isDuplicateIndex: boolean;
    readonly isInvalidSlashRecord: boolean;
    readonly isInsufficientBond: boolean;
    readonly isNoMoreChunks: boolean;
    readonly isNoUnlockChunk: boolean;
    readonly isFundedTarget: boolean;
    readonly isInvalidEraToReward: boolean;
    readonly isInvalidNumberOfNominations: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isInvalidPage: boolean;
    readonly isIncorrectHistoryDepth: boolean;
    readonly isBadState: boolean;
    readonly isTooManyTargets: boolean;
    readonly isBadTarget: boolean;
    readonly isCannotChillOther: boolean;
    readonly isTooManyNominators: boolean;
    readonly isTooManyValidators: boolean;
    readonly isCommissionTooLow: boolean;
    readonly isBoundNotMet: boolean;
    readonly isControllerDeprecated: boolean;
    readonly isCannotRestoreLedger: boolean;
    readonly isRewardDestinationRestricted: boolean;
    readonly isNotEnoughFunds: boolean;
    readonly isVirtualStakerNotAllowed: boolean;
    readonly isCannotReapStash: boolean;
    readonly isAlreadyMigrated: boolean;
    readonly isEraNotStarted: boolean;
    readonly isRestricted: boolean;
    readonly isUnappliedSlashesInPreviousEra: boolean;
    readonly isEraNotPrunable: boolean;
    readonly isCancelledSlash: boolean;
    readonly type: 'NotController' | 'NotStash' | 'AlreadyBonded' | 'AlreadyPaired' | 'EmptyTargets' | 'DuplicateIndex' | 'InvalidSlashRecord' | 'InsufficientBond' | 'NoMoreChunks' | 'NoUnlockChunk' | 'FundedTarget' | 'InvalidEraToReward' | 'InvalidNumberOfNominations' | 'AlreadyClaimed' | 'InvalidPage' | 'IncorrectHistoryDepth' | 'BadState' | 'TooManyTargets' | 'BadTarget' | 'CannotChillOther' | 'TooManyNominators' | 'TooManyValidators' | 'CommissionTooLow' | 'BoundNotMet' | 'ControllerDeprecated' | 'CannotRestoreLedger' | 'RewardDestinationRestricted' | 'NotEnoughFunds' | 'VirtualStakerNotAllowed' | 'CannotReapStash' | 'AlreadyMigrated' | 'EraNotStarted' | 'Restricted' | 'UnappliedSlashesInPreviousEra' | 'EraNotPrunable' | 'CancelledSlash';
  }

  /** @name PalletReferendaReferendumInfoOriginCaller (1101) */
  interface PalletReferendaReferendumInfoOriginCaller extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletReferendaReferendumStatusOriginCaller;
    readonly isApproved: boolean;
    readonly asApproved: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isRejected: boolean;
    readonly asRejected: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isCancelled: boolean;
    readonly asCancelled: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isTimedOut: boolean;
    readonly asTimedOut: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isKilled: boolean;
    readonly asKilled: u32;
    readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
  }

  /** @name PalletReferendaReferendumStatusOriginCaller (1102) */
  interface PalletReferendaReferendumStatusOriginCaller extends Struct {
    readonly track: u16;
    readonly origin: AssetHubKusamaRuntimeOriginCaller;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly enactment: FrameSupportScheduleDispatchTime;
    readonly submitted: u32;
    readonly submissionDeposit: PalletReferendaDeposit;
    readonly decisionDeposit: Option<PalletReferendaDeposit>;
    readonly deciding: Option<PalletReferendaDecidingStatus>;
    readonly tally: PalletConvictionVotingTally;
    readonly inQueue: bool;
    readonly alarm: Option<ITuple<[u32, ITuple<[u32, u32]>]>>;
  }

  /** @name PalletAhOpsError (1120) */
  interface PalletAhOpsError extends Enum {
    readonly isNoLeaseReserve: boolean;
    readonly isNoCrowdloanContribution: boolean;
    readonly isNoCrowdloanReserve: boolean;
    readonly isFailedToWithdrawCrowdloanContribution: boolean;
    readonly isNotYet: boolean;
    readonly isContributionsRemaining: boolean;
    readonly isWrongDerivedTranslation: boolean;
    readonly isNotSovereign: boolean;
    readonly isInternalError: boolean;
    readonly isMigrationNotCompleted: boolean;
    readonly isZeroBalance: boolean;
    readonly type: 'NoLeaseReserve' | 'NoCrowdloanContribution' | 'NoCrowdloanReserve' | 'FailedToWithdrawCrowdloanContribution' | 'NotYet' | 'ContributionsRemaining' | 'WrongDerivedTranslation' | 'NotSovereign' | 'InternalError' | 'MigrationNotCompleted' | 'ZeroBalance';
  }

  /** @name PalletAhMigratorBalancesBefore (1121) */
  interface PalletAhMigratorBalancesBefore extends Struct {
    readonly checkingAccount: u128;
    readonly totalIssuance: u128;
  }

  /** @name PalletAhMigratorError (1122) */
  interface PalletAhMigratorError extends Enum {
    readonly isFailedToUnreserveDeposit: boolean;
    readonly isFailedToProcessAccount: boolean;
    readonly isInsertConflict: boolean;
    readonly isFailedToConvertType: boolean;
    readonly isPreimageNotFound: boolean;
    readonly isFailedToConvertCall: boolean;
    readonly isFailedToBoundCall: boolean;
    readonly isXcmError: boolean;
    readonly isFailedToIntegrateVestingSchedule: boolean;
    readonly isFailedToCalculateCheckingAccount: boolean;
    readonly isFailedToBoundVector: boolean;
    readonly isDmpQueuePriorityAlreadySet: boolean;
    readonly isInvalidParameter: boolean;
    readonly isPreimageMissing: boolean;
    readonly isPreimageTooBig: boolean;
    readonly isPreimageChunkMissing: boolean;
    readonly isPreimageStatusInvalid: boolean;
    readonly isBadXcmVersion: boolean;
    readonly isInvalidOrigin: boolean;
    readonly type: 'FailedToUnreserveDeposit' | 'FailedToProcessAccount' | 'InsertConflict' | 'FailedToConvertType' | 'PreimageNotFound' | 'FailedToConvertCall' | 'FailedToBoundCall' | 'XcmError' | 'FailedToIntegrateVestingSchedule' | 'FailedToCalculateCheckingAccount' | 'FailedToBoundVector' | 'DmpQueuePriorityAlreadySet' | 'InvalidParameter' | 'PreimageMissing' | 'PreimageTooBig' | 'PreimageChunkMissing' | 'PreimageStatusInvalid' | 'BadXcmVersion' | 'InvalidOrigin';
  }

  /** @name XcmVersionedAsset (1181) */
  interface XcmVersionedAsset extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiAsset;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Asset;
    readonly isV5: boolean;
    readonly asV5: StagingXcmV5Asset;
    readonly type: 'V3' | 'V4' | 'V5';
  }

  /** @name XcmRuntimeApisTrustedQueryError (1183) */
  interface XcmRuntimeApisTrustedQueryError extends Enum {
    readonly isVersionedAssetConversionFailed: boolean;
    readonly isVersionedLocationConversionFailed: boolean;
    readonly type: 'VersionedAssetConversionFailed' | 'VersionedLocationConversionFailed';
  }

  /** @name XcmRuntimeApisAuthorizedAliasesError (1185) */
  interface XcmRuntimeApisAuthorizedAliasesError extends Enum {
    readonly isLocationVersionConversionFailed: boolean;
    readonly type: 'LocationVersionConversionFailed';
  }

  /** @name PalletReviveEvmApiDebugRpcTypesPrestateTracerConfig (1227) */
  interface PalletReviveEvmApiDebugRpcTypesPrestateTracerConfig extends Struct {
    readonly diffMode: bool;
    readonly disableStorage: bool;
    readonly disableCode: bool;
  }

  /** @name PalletReviveEvmApiDebugRpcTypesPrestateTrace (1236) */
  interface PalletReviveEvmApiDebugRpcTypesPrestateTrace extends Enum {
    readonly isPrestate: boolean;
    readonly asPrestate: BTreeMap<H160, PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>;
    readonly isDiffMode: boolean;
    readonly asDiffMode: {
      readonly pre: BTreeMap<H160, PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>;
      readonly post: BTreeMap<H160, PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>;
    } & Struct;
    readonly type: 'Prestate' | 'DiffMode';
  }

  /** @name PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo (1238) */
  interface PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo extends Struct {
    readonly balance: Option<U256>;
    readonly nonce: Option<u32>;
    readonly code: Option<Bytes>;
    readonly storage: BTreeMap<Bytes, Option<Bytes>>;
  }

  /** @name AssetHubKusamaRuntimeRuntimeError (1246) */
  interface AssetHubKusamaRuntimeRuntimeError extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSystemError;
    readonly isParachainSystem: boolean;
    readonly asParachainSystem: CumulusPalletParachainSystemError;
    readonly isMultiBlockMigrations: boolean;
    readonly asMultiBlockMigrations: PalletMigrationsError;
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageError;
    readonly isScheduler: boolean;
    readonly asScheduler: PalletSchedulerError;
    readonly isBalances: boolean;
    readonly asBalances: PalletBalancesError;
    readonly isVesting: boolean;
    readonly asVesting: PalletVestingError;
    readonly isClaims: boolean;
    readonly asClaims: PolkadotRuntimeCommonClaimsPalletError;
    readonly isCollatorSelection: boolean;
    readonly asCollatorSelection: PalletCollatorSelectionError;
    readonly isSession: boolean;
    readonly asSession: PalletSessionError;
    readonly isXcmpQueue: boolean;
    readonly asXcmpQueue: CumulusPalletXcmpQueueError;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmError;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: PalletMessageQueueError;
    readonly isUtility: boolean;
    readonly asUtility: PalletUtilityError;
    readonly isMultisig: boolean;
    readonly asMultisig: PalletMultisigError;
    readonly isProxy: boolean;
    readonly asProxy: PalletProxyError;
    readonly isRemoteProxyRelayChain: boolean;
    readonly asRemoteProxyRelayChain: PalletRemoteProxyError;
    readonly isIndices: boolean;
    readonly asIndices: PalletIndicesError;
    readonly isAssets: boolean;
    readonly asAssets: PalletAssetsError;
    readonly isUniques: boolean;
    readonly asUniques: PalletUniquesError;
    readonly isNfts: boolean;
    readonly asNfts: PalletNftsError;
    readonly isForeignAssets: boolean;
    readonly asForeignAssets: PalletAssetsError;
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PalletNftFractionalizationError;
    readonly isPoolAssets: boolean;
    readonly asPoolAssets: PalletAssetsError;
    readonly isAssetConversion: boolean;
    readonly asAssetConversion: PalletAssetConversionError;
    readonly isRecovery: boolean;
    readonly asRecovery: PalletRecoveryError;
    readonly isSociety: boolean;
    readonly asSociety: PalletSocietyError;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveError;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationError;
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsError;
    readonly isVoterList: boolean;
    readonly asVoterList: PalletBagsListError;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingError;
    readonly isMultiBlockElection: boolean;
    readonly asMultiBlockElection: PalletElectionProviderMultiBlockError;
    readonly isMultiBlockElectionSigned: boolean;
    readonly asMultiBlockElectionSigned: PalletElectionProviderMultiBlockSignedPalletError;
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingAsyncPalletError;
    readonly isTreasury: boolean;
    readonly asTreasury: PalletTreasuryError;
    readonly isConvictionVoting: boolean;
    readonly asConvictionVoting: PalletConvictionVotingError;
    readonly isReferenda: boolean;
    readonly asReferenda: PalletReferendaError;
    readonly isWhitelist: boolean;
    readonly asWhitelist: PalletWhitelistError;
    readonly isBounties: boolean;
    readonly asBounties: PalletBountiesError;
    readonly isChildBounties: boolean;
    readonly asChildBounties: PalletChildBountiesError;
    readonly isAssetRate: boolean;
    readonly asAssetRate: PalletAssetRateError;
    readonly isAhOps: boolean;
    readonly asAhOps: PalletAhOpsError;
    readonly isAhMigrator: boolean;
    readonly asAhMigrator: PalletAhMigratorError;
    readonly type: 'System' | 'ParachainSystem' | 'MultiBlockMigrations' | 'Preimage' | 'Scheduler' | 'Balances' | 'Vesting' | 'Claims' | 'CollatorSelection' | 'Session' | 'XcmpQueue' | 'PolkadotXcm' | 'MessageQueue' | 'Utility' | 'Multisig' | 'Proxy' | 'RemoteProxyRelayChain' | 'Indices' | 'Assets' | 'Uniques' | 'Nfts' | 'ForeignAssets' | 'NftFractionalization' | 'PoolAssets' | 'AssetConversion' | 'Recovery' | 'Society' | 'Revive' | 'StateTrieMigration' | 'NominationPools' | 'VoterList' | 'DelegatedStaking' | 'MultiBlockElection' | 'MultiBlockElectionSigned' | 'Staking' | 'Treasury' | 'ConvictionVoting' | 'Referenda' | 'Whitelist' | 'Bounties' | 'ChildBounties' | 'AssetRate' | 'AhOps' | 'AhMigrator';
  }

} // declare module
