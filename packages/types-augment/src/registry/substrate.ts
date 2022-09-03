// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { FinalityGrandpaEquivocationPrecommit, FinalityGrandpaEquivocationPrevote, FinalityGrandpaPrecommit, FinalityGrandpaPrevote, FrameSupportDispatchRawOrigin, FrameSupportPalletId, FrameSupportScheduleDispatchTime, FrameSupportScheduleLookupError, FrameSupportScheduleMaybeHashed, FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchClass, FrameSupportWeightsDispatchInfo, FrameSupportWeightsPays, FrameSupportWeightsPerDispatchClassU32, FrameSupportWeightsPerDispatchClassWeight, FrameSupportWeightsPerDispatchClassWeightsPerClass, FrameSupportWeightsPostDispatchInfo, FrameSupportWeightsRuntimeDbWeight, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, KitchensinkRuntimeNposSolution16, KitchensinkRuntimeOriginCaller, KitchensinkRuntimeProxyType, KitchensinkRuntimeRuntime, KitchensinkRuntimeSessionKeys, PalletAllianceCall, PalletAllianceCid, PalletAllianceError, PalletAllianceEvent, PalletAllianceForceSetWitness, PalletAllianceMemberRole, PalletAllianceMultihash, PalletAllianceUnscrupulousItem, PalletAllianceVersion, PalletAssetTxPaymentChargeAssetTxPayment, PalletAssetTxPaymentEvent, PalletAssetsApproval, PalletAssetsAssetAccount, PalletAssetsAssetDetails, PalletAssetsAssetMetadata, PalletAssetsCall, PalletAssetsDestroyWitness, PalletAssetsError, PalletAssetsEvent, PalletAssetsExistenceReason, PalletAuthorshipCall, PalletAuthorshipError, PalletAuthorshipUncleEntryItem, PalletBabeCall, PalletBabeError, PalletBagsListCall, PalletBagsListError, PalletBagsListEvent, PalletBagsListListBag, PalletBagsListListListError, PalletBagsListListNode, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesReasons, PalletBalancesReleases, PalletBalancesReserveData, PalletBountiesBounty, PalletBountiesBountyStatus, PalletBountiesCall, PalletBountiesError, PalletBountiesEvent, PalletChildBountiesCall, PalletChildBountiesChildBounty, PalletChildBountiesChildBountyStatus, PalletChildBountiesError, PalletChildBountiesEvent, PalletCollectiveCall, PalletCollectiveError, PalletCollectiveEvent, PalletCollectiveRawOrigin, PalletCollectiveVotes, PalletContractsCall, PalletContractsError, PalletContractsEvent, PalletContractsSchedule, PalletContractsScheduleHostFnWeights, PalletContractsScheduleInstructionWeights, PalletContractsScheduleLimits, PalletContractsStorageDeletedContract, PalletContractsStorageRawContractInfo, PalletContractsWasmOwnerInfo, PalletContractsWasmPrefabWasmModule, PalletConvictionVotingCall, PalletConvictionVotingConviction, PalletConvictionVotingDelegations, PalletConvictionVotingError, PalletConvictionVotingEvent, PalletConvictionVotingTally, PalletConvictionVotingVoteAccountVote, PalletConvictionVotingVoteCasting, PalletConvictionVotingVoteDelegating, PalletConvictionVotingVotePriorLock, PalletConvictionVotingVoteVoting, PalletDemocracyCall, PalletDemocracyConviction, PalletDemocracyDelegations, PalletDemocracyError, PalletDemocracyEvent, PalletDemocracyPreimageStatus, PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyReleases, PalletDemocracyTally, PalletDemocracyVoteAccountVote, PalletDemocracyVotePriorLock, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletElectionProviderMultiPhaseCall, PalletElectionProviderMultiPhaseElectionCompute, PalletElectionProviderMultiPhaseError, PalletElectionProviderMultiPhaseEvent, PalletElectionProviderMultiPhasePhase, PalletElectionProviderMultiPhaseRawSolution, PalletElectionProviderMultiPhaseReadySolution, PalletElectionProviderMultiPhaseRoundSnapshot, PalletElectionProviderMultiPhaseSignedSignedSubmission, PalletElectionProviderMultiPhaseSolutionOrSnapshotSize, PalletElectionsPhragmenCall, PalletElectionsPhragmenError, PalletElectionsPhragmenEvent, PalletElectionsPhragmenRenouncing, PalletElectionsPhragmenSeatHolder, PalletElectionsPhragmenVoter, PalletGiltActiveGilt, PalletGiltActiveGiltsTotal, PalletGiltCall, PalletGiltError, PalletGiltEvent, PalletGiltGiltBid, PalletGrandpaCall, PalletGrandpaError, PalletGrandpaEvent, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletImOnlineBoundedOpaqueNetworkState, PalletImOnlineCall, PalletImOnlineError, PalletImOnlineEvent, PalletImOnlineHeartbeat, PalletImOnlineSr25519AppSr25519Public, PalletImOnlineSr25519AppSr25519Signature, PalletIndicesCall, PalletIndicesError, PalletIndicesEvent, PalletLotteryCall, PalletLotteryError, PalletLotteryEvent, PalletLotteryLotteryConfig, PalletMembershipCall, PalletMembershipError, PalletMembershipEvent, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletNominationPoolsBondExtra, PalletNominationPoolsBondedPoolInner, PalletNominationPoolsCall, PalletNominationPoolsConfigOpAccountId32, PalletNominationPoolsConfigOpU128, PalletNominationPoolsConfigOpU32, PalletNominationPoolsDefensiveError, PalletNominationPoolsError, PalletNominationPoolsEvent, PalletNominationPoolsPoolMember, PalletNominationPoolsPoolRoles, PalletNominationPoolsPoolState, PalletNominationPoolsRewardPool, PalletNominationPoolsSubPools, PalletNominationPoolsUnbondPool, PalletOffencesEvent, PalletPreimageCall, PalletPreimageError, PalletPreimageEvent, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletRankedCollectiveCall, PalletRankedCollectiveError, PalletRankedCollectiveEvent, PalletRankedCollectiveMemberRecord, PalletRankedCollectiveTally, PalletRankedCollectiveVoteRecord, PalletRecoveryActiveRecovery, PalletRecoveryCall, PalletRecoveryError, PalletRecoveryEvent, PalletRecoveryRecoveryConfig, PalletReferendaCall, PalletReferendaDecidingStatus, PalletReferendaDeposit, PalletReferendaError, PalletReferendaEvent, PalletReferendaReferendumInfoConvictionVotingTally, PalletReferendaReferendumInfoRankedCollectiveTally, PalletReferendaReferendumStatusConvictionVotingTally, PalletReferendaReferendumStatusRankedCollectiveTally, PalletRemarkCall, PalletRemarkError, PalletRemarkEvent, PalletSchedulerCall, PalletSchedulerError, PalletSchedulerEvent, PalletSchedulerScheduledV3, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletSocietyBid, PalletSocietyBidKind, PalletSocietyCall, PalletSocietyError, PalletSocietyEvent, PalletSocietyJudgement, PalletSocietyVote, PalletSocietyVouchingStatus, PalletStakingActiveEraInfo, PalletStakingEraRewardPoints, PalletStakingExposure, PalletStakingForcing, PalletStakingIndividualExposure, PalletStakingNominations, PalletStakingPalletCall, PalletStakingPalletConfigOpPerbill, PalletStakingPalletConfigOpPercent, PalletStakingPalletConfigOpU128, PalletStakingPalletConfigOpU32, PalletStakingPalletError, PalletStakingPalletEvent, PalletStakingReleases, PalletStakingRewardDestination, PalletStakingSlashingSlashingSpans, PalletStakingSlashingSpanRecord, PalletStakingStakingLedger, PalletStakingUnappliedSlash, PalletStakingUnlockChunk, PalletStakingValidatorPrefs, PalletStateTrieMigrationCall, PalletStateTrieMigrationError, PalletStateTrieMigrationEvent, PalletStateTrieMigrationMigrationCompute, PalletStateTrieMigrationMigrationLimits, PalletStateTrieMigrationMigrationTask, PalletStateTrieMigrationProgress, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletTimestampCall, PalletTipsCall, PalletTipsError, PalletTipsEvent, PalletTipsOpenTip, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTransactionStorageCall, PalletTransactionStorageError, PalletTransactionStorageEvent, PalletTransactionStorageTransactionInfo, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUniquesCall, PalletUniquesCollectionDetails, PalletUniquesCollectionMetadata, PalletUniquesDestroyWitness, PalletUniquesError, PalletUniquesEvent, PalletUniquesItemDetails, PalletUniquesItemMetadata, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletVestingCall, PalletVestingError, PalletVestingEvent, PalletVestingReleases, PalletVestingVestingInfo, PalletWhitelistCall, PalletWhitelistError, PalletWhitelistEvent, SpAuthorityDiscoveryAppPublic, SpConsensusBabeAllowedSlots, SpConsensusBabeAppPublic, SpConsensusBabeBabeEpochConfiguration, SpConsensusBabeDigestsNextConfigDescriptor, SpConsensusBabeDigestsPreDigest, SpConsensusBabeDigestsPrimaryPreDigest, SpConsensusBabeDigestsSecondaryPlainPreDigest, SpConsensusBabeDigestsSecondaryVRFPreDigest, SpConsensusSlotsEquivocationProof, SpCoreCryptoKeyTypeId, SpCoreEcdsaSignature, SpCoreEd25519Public, SpCoreEd25519Signature, SpCoreOffchainOpaqueNetworkState, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpFinalityGrandpaAppPublic, SpFinalityGrandpaAppSignature, SpFinalityGrandpaEquivocation, SpFinalityGrandpaEquivocationProof, SpNposElectionsElectionScore, SpNposElectionsSupport, SpRuntimeArithmeticError, SpRuntimeBlakeTwo256, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeDispatchErrorWithPostInfo, SpRuntimeHeader, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpSessionMembershipProof, SpStakingOffenceOffenceDetails, SpTransactionStorageProofTransactionStorageProof, SpVersionRuntimeVersion } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    FinalityGrandpaEquivocationPrecommit: FinalityGrandpaEquivocationPrecommit;
    FinalityGrandpaEquivocationPrevote: FinalityGrandpaEquivocationPrevote;
    FinalityGrandpaPrecommit: FinalityGrandpaPrecommit;
    FinalityGrandpaPrevote: FinalityGrandpaPrevote;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportScheduleDispatchTime: FrameSupportScheduleDispatchTime;
    FrameSupportScheduleLookupError: FrameSupportScheduleLookupError;
    FrameSupportScheduleMaybeHashed: FrameSupportScheduleMaybeHashed;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSupportWeightsDispatchClass: FrameSupportWeightsDispatchClass;
    FrameSupportWeightsDispatchInfo: FrameSupportWeightsDispatchInfo;
    FrameSupportWeightsPays: FrameSupportWeightsPays;
    FrameSupportWeightsPerDispatchClassU32: FrameSupportWeightsPerDispatchClassU32;
    FrameSupportWeightsPerDispatchClassWeight: FrameSupportWeightsPerDispatchClassWeight;
    FrameSupportWeightsPerDispatchClassWeightsPerClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
    FrameSupportWeightsPostDispatchInfo: FrameSupportWeightsPostDispatchInfo;
    FrameSupportWeightsRuntimeDbWeight: FrameSupportWeightsRuntimeDbWeight;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    KitchensinkRuntimeNposSolution16: KitchensinkRuntimeNposSolution16;
    KitchensinkRuntimeOriginCaller: KitchensinkRuntimeOriginCaller;
    KitchensinkRuntimeProxyType: KitchensinkRuntimeProxyType;
    KitchensinkRuntimeRuntime: KitchensinkRuntimeRuntime;
    KitchensinkRuntimeSessionKeys: KitchensinkRuntimeSessionKeys;
    PalletAllianceCall: PalletAllianceCall;
    PalletAllianceCid: PalletAllianceCid;
    PalletAllianceError: PalletAllianceError;
    PalletAllianceEvent: PalletAllianceEvent;
    PalletAllianceForceSetWitness: PalletAllianceForceSetWitness;
    PalletAllianceMemberRole: PalletAllianceMemberRole;
    PalletAllianceMultihash: PalletAllianceMultihash;
    PalletAllianceUnscrupulousItem: PalletAllianceUnscrupulousItem;
    PalletAllianceVersion: PalletAllianceVersion;
    PalletAssetTxPaymentChargeAssetTxPayment: PalletAssetTxPaymentChargeAssetTxPayment;
    PalletAssetTxPaymentEvent: PalletAssetTxPaymentEvent;
    PalletAssetsApproval: PalletAssetsApproval;
    PalletAssetsAssetAccount: PalletAssetsAssetAccount;
    PalletAssetsAssetDetails: PalletAssetsAssetDetails;
    PalletAssetsAssetMetadata: PalletAssetsAssetMetadata;
    PalletAssetsCall: PalletAssetsCall;
    PalletAssetsDestroyWitness: PalletAssetsDestroyWitness;
    PalletAssetsError: PalletAssetsError;
    PalletAssetsEvent: PalletAssetsEvent;
    PalletAssetsExistenceReason: PalletAssetsExistenceReason;
    PalletAuthorshipCall: PalletAuthorshipCall;
    PalletAuthorshipError: PalletAuthorshipError;
    PalletAuthorshipUncleEntryItem: PalletAuthorshipUncleEntryItem;
    PalletBabeCall: PalletBabeCall;
    PalletBabeError: PalletBabeError;
    PalletBagsListCall: PalletBagsListCall;
    PalletBagsListError: PalletBagsListError;
    PalletBagsListEvent: PalletBagsListEvent;
    PalletBagsListListBag: PalletBagsListListBag;
    PalletBagsListListListError: PalletBagsListListListError;
    PalletBagsListListNode: PalletBagsListListNode;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReleases: PalletBalancesReleases;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletBountiesBounty: PalletBountiesBounty;
    PalletBountiesBountyStatus: PalletBountiesBountyStatus;
    PalletBountiesCall: PalletBountiesCall;
    PalletBountiesError: PalletBountiesError;
    PalletBountiesEvent: PalletBountiesEvent;
    PalletChildBountiesCall: PalletChildBountiesCall;
    PalletChildBountiesChildBounty: PalletChildBountiesChildBounty;
    PalletChildBountiesChildBountyStatus: PalletChildBountiesChildBountyStatus;
    PalletChildBountiesError: PalletChildBountiesError;
    PalletChildBountiesEvent: PalletChildBountiesEvent;
    PalletCollectiveCall: PalletCollectiveCall;
    PalletCollectiveError: PalletCollectiveError;
    PalletCollectiveEvent: PalletCollectiveEvent;
    PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
    PalletCollectiveVotes: PalletCollectiveVotes;
    PalletContractsCall: PalletContractsCall;
    PalletContractsError: PalletContractsError;
    PalletContractsEvent: PalletContractsEvent;
    PalletContractsSchedule: PalletContractsSchedule;
    PalletContractsScheduleHostFnWeights: PalletContractsScheduleHostFnWeights;
    PalletContractsScheduleInstructionWeights: PalletContractsScheduleInstructionWeights;
    PalletContractsScheduleLimits: PalletContractsScheduleLimits;
    PalletContractsStorageDeletedContract: PalletContractsStorageDeletedContract;
    PalletContractsStorageRawContractInfo: PalletContractsStorageRawContractInfo;
    PalletContractsWasmOwnerInfo: PalletContractsWasmOwnerInfo;
    PalletContractsWasmPrefabWasmModule: PalletContractsWasmPrefabWasmModule;
    PalletConvictionVotingCall: PalletConvictionVotingCall;
    PalletConvictionVotingConviction: PalletConvictionVotingConviction;
    PalletConvictionVotingDelegations: PalletConvictionVotingDelegations;
    PalletConvictionVotingError: PalletConvictionVotingError;
    PalletConvictionVotingEvent: PalletConvictionVotingEvent;
    PalletConvictionVotingTally: PalletConvictionVotingTally;
    PalletConvictionVotingVoteAccountVote: PalletConvictionVotingVoteAccountVote;
    PalletConvictionVotingVoteCasting: PalletConvictionVotingVoteCasting;
    PalletConvictionVotingVoteDelegating: PalletConvictionVotingVoteDelegating;
    PalletConvictionVotingVotePriorLock: PalletConvictionVotingVotePriorLock;
    PalletConvictionVotingVoteVoting: PalletConvictionVotingVoteVoting;
    PalletDemocracyCall: PalletDemocracyCall;
    PalletDemocracyConviction: PalletDemocracyConviction;
    PalletDemocracyDelegations: PalletDemocracyDelegations;
    PalletDemocracyError: PalletDemocracyError;
    PalletDemocracyEvent: PalletDemocracyEvent;
    PalletDemocracyPreimageStatus: PalletDemocracyPreimageStatus;
    PalletDemocracyReferendumInfo: PalletDemocracyReferendumInfo;
    PalletDemocracyReferendumStatus: PalletDemocracyReferendumStatus;
    PalletDemocracyReleases: PalletDemocracyReleases;
    PalletDemocracyTally: PalletDemocracyTally;
    PalletDemocracyVoteAccountVote: PalletDemocracyVoteAccountVote;
    PalletDemocracyVotePriorLock: PalletDemocracyVotePriorLock;
    PalletDemocracyVoteThreshold: PalletDemocracyVoteThreshold;
    PalletDemocracyVoteVoting: PalletDemocracyVoteVoting;
    PalletElectionProviderMultiPhaseCall: PalletElectionProviderMultiPhaseCall;
    PalletElectionProviderMultiPhaseElectionCompute: PalletElectionProviderMultiPhaseElectionCompute;
    PalletElectionProviderMultiPhaseError: PalletElectionProviderMultiPhaseError;
    PalletElectionProviderMultiPhaseEvent: PalletElectionProviderMultiPhaseEvent;
    PalletElectionProviderMultiPhasePhase: PalletElectionProviderMultiPhasePhase;
    PalletElectionProviderMultiPhaseRawSolution: PalletElectionProviderMultiPhaseRawSolution;
    PalletElectionProviderMultiPhaseReadySolution: PalletElectionProviderMultiPhaseReadySolution;
    PalletElectionProviderMultiPhaseRoundSnapshot: PalletElectionProviderMultiPhaseRoundSnapshot;
    PalletElectionProviderMultiPhaseSignedSignedSubmission: PalletElectionProviderMultiPhaseSignedSignedSubmission;
    PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
    PalletElectionsPhragmenCall: PalletElectionsPhragmenCall;
    PalletElectionsPhragmenError: PalletElectionsPhragmenError;
    PalletElectionsPhragmenEvent: PalletElectionsPhragmenEvent;
    PalletElectionsPhragmenRenouncing: PalletElectionsPhragmenRenouncing;
    PalletElectionsPhragmenSeatHolder: PalletElectionsPhragmenSeatHolder;
    PalletElectionsPhragmenVoter: PalletElectionsPhragmenVoter;
    PalletGiltActiveGilt: PalletGiltActiveGilt;
    PalletGiltActiveGiltsTotal: PalletGiltActiveGiltsTotal;
    PalletGiltCall: PalletGiltCall;
    PalletGiltError: PalletGiltError;
    PalletGiltEvent: PalletGiltEvent;
    PalletGiltGiltBid: PalletGiltGiltBid;
    PalletGrandpaCall: PalletGrandpaCall;
    PalletGrandpaError: PalletGrandpaError;
    PalletGrandpaEvent: PalletGrandpaEvent;
    PalletGrandpaStoredPendingChange: PalletGrandpaStoredPendingChange;
    PalletGrandpaStoredState: PalletGrandpaStoredState;
    PalletIdentityBitFlags: PalletIdentityBitFlags;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityIdentityField: PalletIdentityIdentityField;
    PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletImOnlineBoundedOpaqueNetworkState: PalletImOnlineBoundedOpaqueNetworkState;
    PalletImOnlineCall: PalletImOnlineCall;
    PalletImOnlineError: PalletImOnlineError;
    PalletImOnlineEvent: PalletImOnlineEvent;
    PalletImOnlineHeartbeat: PalletImOnlineHeartbeat;
    PalletImOnlineSr25519AppSr25519Public: PalletImOnlineSr25519AppSr25519Public;
    PalletImOnlineSr25519AppSr25519Signature: PalletImOnlineSr25519AppSr25519Signature;
    PalletIndicesCall: PalletIndicesCall;
    PalletIndicesError: PalletIndicesError;
    PalletIndicesEvent: PalletIndicesEvent;
    PalletLotteryCall: PalletLotteryCall;
    PalletLotteryError: PalletLotteryError;
    PalletLotteryEvent: PalletLotteryEvent;
    PalletLotteryLotteryConfig: PalletLotteryLotteryConfig;
    PalletMembershipCall: PalletMembershipCall;
    PalletMembershipError: PalletMembershipError;
    PalletMembershipEvent: PalletMembershipEvent;
    PalletMultisigCall: PalletMultisigCall;
    PalletMultisigError: PalletMultisigError;
    PalletMultisigEvent: PalletMultisigEvent;
    PalletMultisigMultisig: PalletMultisigMultisig;
    PalletMultisigTimepoint: PalletMultisigTimepoint;
    PalletNominationPoolsBondExtra: PalletNominationPoolsBondExtra;
    PalletNominationPoolsBondedPoolInner: PalletNominationPoolsBondedPoolInner;
    PalletNominationPoolsCall: PalletNominationPoolsCall;
    PalletNominationPoolsConfigOpAccountId32: PalletNominationPoolsConfigOpAccountId32;
    PalletNominationPoolsConfigOpU128: PalletNominationPoolsConfigOpU128;
    PalletNominationPoolsConfigOpU32: PalletNominationPoolsConfigOpU32;
    PalletNominationPoolsDefensiveError: PalletNominationPoolsDefensiveError;
    PalletNominationPoolsError: PalletNominationPoolsError;
    PalletNominationPoolsEvent: PalletNominationPoolsEvent;
    PalletNominationPoolsPoolMember: PalletNominationPoolsPoolMember;
    PalletNominationPoolsPoolRoles: PalletNominationPoolsPoolRoles;
    PalletNominationPoolsPoolState: PalletNominationPoolsPoolState;
    PalletNominationPoolsRewardPool: PalletNominationPoolsRewardPool;
    PalletNominationPoolsSubPools: PalletNominationPoolsSubPools;
    PalletNominationPoolsUnbondPool: PalletNominationPoolsUnbondPool;
    PalletOffencesEvent: PalletOffencesEvent;
    PalletPreimageCall: PalletPreimageCall;
    PalletPreimageError: PalletPreimageError;
    PalletPreimageEvent: PalletPreimageEvent;
    PalletPreimageRequestStatus: PalletPreimageRequestStatus;
    PalletProxyAnnouncement: PalletProxyAnnouncement;
    PalletProxyCall: PalletProxyCall;
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
    PalletRankedCollectiveCall: PalletRankedCollectiveCall;
    PalletRankedCollectiveError: PalletRankedCollectiveError;
    PalletRankedCollectiveEvent: PalletRankedCollectiveEvent;
    PalletRankedCollectiveMemberRecord: PalletRankedCollectiveMemberRecord;
    PalletRankedCollectiveTally: PalletRankedCollectiveTally;
    PalletRankedCollectiveVoteRecord: PalletRankedCollectiveVoteRecord;
    PalletRecoveryActiveRecovery: PalletRecoveryActiveRecovery;
    PalletRecoveryCall: PalletRecoveryCall;
    PalletRecoveryError: PalletRecoveryError;
    PalletRecoveryEvent: PalletRecoveryEvent;
    PalletRecoveryRecoveryConfig: PalletRecoveryRecoveryConfig;
    PalletReferendaCall: PalletReferendaCall;
    PalletReferendaDecidingStatus: PalletReferendaDecidingStatus;
    PalletReferendaDeposit: PalletReferendaDeposit;
    PalletReferendaError: PalletReferendaError;
    PalletReferendaEvent: PalletReferendaEvent;
    PalletReferendaReferendumInfoConvictionVotingTally: PalletReferendaReferendumInfoConvictionVotingTally;
    PalletReferendaReferendumInfoRankedCollectiveTally: PalletReferendaReferendumInfoRankedCollectiveTally;
    PalletReferendaReferendumStatusConvictionVotingTally: PalletReferendaReferendumStatusConvictionVotingTally;
    PalletReferendaReferendumStatusRankedCollectiveTally: PalletReferendaReferendumStatusRankedCollectiveTally;
    PalletRemarkCall: PalletRemarkCall;
    PalletRemarkError: PalletRemarkError;
    PalletRemarkEvent: PalletRemarkEvent;
    PalletSchedulerCall: PalletSchedulerCall;
    PalletSchedulerError: PalletSchedulerError;
    PalletSchedulerEvent: PalletSchedulerEvent;
    PalletSchedulerScheduledV3: PalletSchedulerScheduledV3;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletSocietyBid: PalletSocietyBid;
    PalletSocietyBidKind: PalletSocietyBidKind;
    PalletSocietyCall: PalletSocietyCall;
    PalletSocietyError: PalletSocietyError;
    PalletSocietyEvent: PalletSocietyEvent;
    PalletSocietyJudgement: PalletSocietyJudgement;
    PalletSocietyVote: PalletSocietyVote;
    PalletSocietyVouchingStatus: PalletSocietyVouchingStatus;
    PalletStakingActiveEraInfo: PalletStakingActiveEraInfo;
    PalletStakingEraRewardPoints: PalletStakingEraRewardPoints;
    PalletStakingExposure: PalletStakingExposure;
    PalletStakingForcing: PalletStakingForcing;
    PalletStakingIndividualExposure: PalletStakingIndividualExposure;
    PalletStakingNominations: PalletStakingNominations;
    PalletStakingPalletCall: PalletStakingPalletCall;
    PalletStakingPalletConfigOpPerbill: PalletStakingPalletConfigOpPerbill;
    PalletStakingPalletConfigOpPercent: PalletStakingPalletConfigOpPercent;
    PalletStakingPalletConfigOpU128: PalletStakingPalletConfigOpU128;
    PalletStakingPalletConfigOpU32: PalletStakingPalletConfigOpU32;
    PalletStakingPalletError: PalletStakingPalletError;
    PalletStakingPalletEvent: PalletStakingPalletEvent;
    PalletStakingReleases: PalletStakingReleases;
    PalletStakingRewardDestination: PalletStakingRewardDestination;
    PalletStakingSlashingSlashingSpans: PalletStakingSlashingSlashingSpans;
    PalletStakingSlashingSpanRecord: PalletStakingSlashingSpanRecord;
    PalletStakingStakingLedger: PalletStakingStakingLedger;
    PalletStakingUnappliedSlash: PalletStakingUnappliedSlash;
    PalletStakingUnlockChunk: PalletStakingUnlockChunk;
    PalletStakingValidatorPrefs: PalletStakingValidatorPrefs;
    PalletStateTrieMigrationCall: PalletStateTrieMigrationCall;
    PalletStateTrieMigrationError: PalletStateTrieMigrationError;
    PalletStateTrieMigrationEvent: PalletStateTrieMigrationEvent;
    PalletStateTrieMigrationMigrationCompute: PalletStateTrieMigrationMigrationCompute;
    PalletStateTrieMigrationMigrationLimits: PalletStateTrieMigrationMigrationLimits;
    PalletStateTrieMigrationMigrationTask: PalletStateTrieMigrationMigrationTask;
    PalletStateTrieMigrationProgress: PalletStateTrieMigrationProgress;
    PalletSudoCall: PalletSudoCall;
    PalletSudoError: PalletSudoError;
    PalletSudoEvent: PalletSudoEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTipsCall: PalletTipsCall;
    PalletTipsError: PalletTipsError;
    PalletTipsEvent: PalletTipsEvent;
    PalletTipsOpenTip: PalletTipsOpenTip;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTransactionStorageCall: PalletTransactionStorageCall;
    PalletTransactionStorageError: PalletTransactionStorageError;
    PalletTransactionStorageEvent: PalletTransactionStorageEvent;
    PalletTransactionStorageTransactionInfo: PalletTransactionStorageTransactionInfo;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUniquesCall: PalletUniquesCall;
    PalletUniquesCollectionDetails: PalletUniquesCollectionDetails;
    PalletUniquesCollectionMetadata: PalletUniquesCollectionMetadata;
    PalletUniquesDestroyWitness: PalletUniquesDestroyWitness;
    PalletUniquesError: PalletUniquesError;
    PalletUniquesEvent: PalletUniquesEvent;
    PalletUniquesItemDetails: PalletUniquesItemDetails;
    PalletUniquesItemMetadata: PalletUniquesItemMetadata;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletVestingCall: PalletVestingCall;
    PalletVestingError: PalletVestingError;
    PalletVestingEvent: PalletVestingEvent;
    PalletVestingReleases: PalletVestingReleases;
    PalletVestingVestingInfo: PalletVestingVestingInfo;
    PalletWhitelistCall: PalletWhitelistCall;
    PalletWhitelistError: PalletWhitelistError;
    PalletWhitelistEvent: PalletWhitelistEvent;
    SpAuthorityDiscoveryAppPublic: SpAuthorityDiscoveryAppPublic;
    SpConsensusBabeAllowedSlots: SpConsensusBabeAllowedSlots;
    SpConsensusBabeAppPublic: SpConsensusBabeAppPublic;
    SpConsensusBabeBabeEpochConfiguration: SpConsensusBabeBabeEpochConfiguration;
    SpConsensusBabeDigestsNextConfigDescriptor: SpConsensusBabeDigestsNextConfigDescriptor;
    SpConsensusBabeDigestsPreDigest: SpConsensusBabeDigestsPreDigest;
    SpConsensusBabeDigestsPrimaryPreDigest: SpConsensusBabeDigestsPrimaryPreDigest;
    SpConsensusBabeDigestsSecondaryPlainPreDigest: SpConsensusBabeDigestsSecondaryPlainPreDigest;
    SpConsensusBabeDigestsSecondaryVRFPreDigest: SpConsensusBabeDigestsSecondaryVRFPreDigest;
    SpConsensusSlotsEquivocationProof: SpConsensusSlotsEquivocationProof;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Public: SpCoreEd25519Public;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreOffchainOpaqueNetworkState: SpCoreOffchainOpaqueNetworkState;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpFinalityGrandpaAppPublic: SpFinalityGrandpaAppPublic;
    SpFinalityGrandpaAppSignature: SpFinalityGrandpaAppSignature;
    SpFinalityGrandpaEquivocation: SpFinalityGrandpaEquivocation;
    SpFinalityGrandpaEquivocationProof: SpFinalityGrandpaEquivocationProof;
    SpNposElectionsElectionScore: SpNposElectionsElectionScore;
    SpNposElectionsSupport: SpNposElectionsSupport;
    SpRuntimeArithmeticError: SpRuntimeArithmeticError;
    SpRuntimeBlakeTwo256: SpRuntimeBlakeTwo256;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeDispatchErrorWithPostInfo: SpRuntimeDispatchErrorWithPostInfo;
    SpRuntimeHeader: SpRuntimeHeader;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpSessionMembershipProof: SpSessionMembershipProof;
    SpStakingOffenceOffenceDetails: SpStakingOffenceOffenceDetails;
    SpTransactionStorageProofTransactionStorageProof: SpTransactionStorageProofTransactionStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
  } // InterfaceTypes
} // declare module
