// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { FrameSupportTokensMiscIdAmount, PalletDelegatedStakingAgentLedger, PalletDelegatedStakingDelegation, PalletDelegatedStakingError, PalletDelegatedStakingEvent, PalletDelegatedStakingHoldReason, PolkadotPrimitivesV8ApprovalVotingParams, PolkadotPrimitivesV8AssignmentAppPublic, PolkadotPrimitivesV8AsyncBackingAsyncBackingParams, PolkadotPrimitivesV8AsyncBackingBackingState, PolkadotPrimitivesV8AsyncBackingCandidatePendingAvailability, PolkadotPrimitivesV8AsyncBackingConstraints, PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations, PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations, PolkadotPrimitivesV8BackedCandidate, PolkadotPrimitivesV8CandidateCommitments, PolkadotPrimitivesV8CandidateDescriptor, PolkadotPrimitivesV8CandidateEvent, PolkadotPrimitivesV8CandidateReceipt, PolkadotPrimitivesV8CollatorAppPublic, PolkadotPrimitivesV8CollatorAppSignature, PolkadotPrimitivesV8CommittedCandidateReceipt, PolkadotPrimitivesV8CoreState, PolkadotPrimitivesV8DisputeState, PolkadotPrimitivesV8DisputeStatement, PolkadotPrimitivesV8DisputeStatementSet, PolkadotPrimitivesV8ExecutorParams, PolkadotPrimitivesV8ExecutorParamsExecutorParam, PolkadotPrimitivesV8GroupRotationInfo, PolkadotPrimitivesV8IndexedVecGroupIndex, PolkadotPrimitivesV8IndexedVecValidatorIndex, PolkadotPrimitivesV8InherentData, PolkadotPrimitivesV8InvalidDisputeStatementKind, PolkadotPrimitivesV8OccupiedCore, PolkadotPrimitivesV8OccupiedCoreAssumption, PolkadotPrimitivesV8PersistedValidationData, PolkadotPrimitivesV8PvfCheckStatement, PolkadotPrimitivesV8PvfExecKind, PolkadotPrimitivesV8PvfPrepKind, PolkadotPrimitivesV8ScheduledCore, PolkadotPrimitivesV8SchedulerParams, PolkadotPrimitivesV8ScrapedOnChainVotes, PolkadotPrimitivesV8SessionInfo, PolkadotPrimitivesV8SignedUncheckedSigned, PolkadotPrimitivesV8SlashingDisputeProof, PolkadotPrimitivesV8SlashingDisputesTimeSlot, PolkadotPrimitivesV8SlashingPendingSlashes, PolkadotPrimitivesV8SlashingSlashingOffenceKind, PolkadotPrimitivesV8UpgradeGoAhead, PolkadotPrimitivesV8UpgradeRestriction, PolkadotPrimitivesV8ValidDisputeStatementKind, PolkadotPrimitivesV8ValidatorAppPublic, PolkadotPrimitivesV8ValidatorAppSignature, PolkadotPrimitivesV8ValidityAttestation, PolkadotRuntimeParachainsOnDemandPalletCall, PolkadotRuntimeParachainsOnDemandPalletError, PolkadotRuntimeParachainsOnDemandPalletEvent, PolkadotRuntimeParachainsOnDemandTypesCoreAffinityCount, PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder, PolkadotRuntimeParachainsOnDemandTypesQueueStatusType, StagingKusamaRuntimeBurnDestinationAccount, StagingKusamaRuntimeDynamicParamsInflationFalloff, StagingKusamaRuntimeDynamicParamsInflationIdealStake, StagingKusamaRuntimeDynamicParamsInflationMaxInflation, StagingKusamaRuntimeDynamicParamsInflationMinInflation, StagingKusamaRuntimeDynamicParamsInflationParameters, StagingKusamaRuntimeDynamicParamsInflationParametersKey, StagingKusamaRuntimeDynamicParamsInflationParametersValue, StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots, StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination, StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion, StagingKusamaRuntimeDynamicParamsTreasuryParameters, StagingKusamaRuntimeDynamicParamsTreasuryParametersKey, StagingKusamaRuntimeDynamicParamsTreasuryParametersValue, StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin, StagingKusamaRuntimeNposCompactSolution24, StagingKusamaRuntimeOriginCaller, StagingKusamaRuntimeProxyType, StagingKusamaRuntimeRuntime, StagingKusamaRuntimeRuntimeError, StagingKusamaRuntimeRuntimeFreezeReason, StagingKusamaRuntimeRuntimeHoldReason, StagingKusamaRuntimeRuntimeParameters, StagingKusamaRuntimeRuntimeParametersKey, StagingKusamaRuntimeRuntimeParametersValue, StagingKusamaRuntimeSessionKeys } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    FrameSupportTokensMiscIdAmount: FrameSupportTokensMiscIdAmount;
    PalletDelegatedStakingAgentLedger: PalletDelegatedStakingAgentLedger;
    PalletDelegatedStakingDelegation: PalletDelegatedStakingDelegation;
    PalletDelegatedStakingError: PalletDelegatedStakingError;
    PalletDelegatedStakingEvent: PalletDelegatedStakingEvent;
    PalletDelegatedStakingHoldReason: PalletDelegatedStakingHoldReason;
    PolkadotPrimitivesV8ApprovalVotingParams: PolkadotPrimitivesV8ApprovalVotingParams;
    PolkadotPrimitivesV8AssignmentAppPublic: PolkadotPrimitivesV8AssignmentAppPublic;
    PolkadotPrimitivesV8AsyncBackingAsyncBackingParams: PolkadotPrimitivesV8AsyncBackingAsyncBackingParams;
    PolkadotPrimitivesV8AsyncBackingBackingState: PolkadotPrimitivesV8AsyncBackingBackingState;
    PolkadotPrimitivesV8AsyncBackingCandidatePendingAvailability: PolkadotPrimitivesV8AsyncBackingCandidatePendingAvailability;
    PolkadotPrimitivesV8AsyncBackingConstraints: PolkadotPrimitivesV8AsyncBackingConstraints;
    PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations: PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations;
    PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations: PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations;
    PolkadotPrimitivesV8BackedCandidate: PolkadotPrimitivesV8BackedCandidate;
    PolkadotPrimitivesV8CandidateCommitments: PolkadotPrimitivesV8CandidateCommitments;
    PolkadotPrimitivesV8CandidateDescriptor: PolkadotPrimitivesV8CandidateDescriptor;
    PolkadotPrimitivesV8CandidateEvent: PolkadotPrimitivesV8CandidateEvent;
    PolkadotPrimitivesV8CandidateReceipt: PolkadotPrimitivesV8CandidateReceipt;
    PolkadotPrimitivesV8CollatorAppPublic: PolkadotPrimitivesV8CollatorAppPublic;
    PolkadotPrimitivesV8CollatorAppSignature: PolkadotPrimitivesV8CollatorAppSignature;
    PolkadotPrimitivesV8CommittedCandidateReceipt: PolkadotPrimitivesV8CommittedCandidateReceipt;
    PolkadotPrimitivesV8CoreState: PolkadotPrimitivesV8CoreState;
    PolkadotPrimitivesV8DisputeState: PolkadotPrimitivesV8DisputeState;
    PolkadotPrimitivesV8DisputeStatement: PolkadotPrimitivesV8DisputeStatement;
    PolkadotPrimitivesV8DisputeStatementSet: PolkadotPrimitivesV8DisputeStatementSet;
    PolkadotPrimitivesV8ExecutorParams: PolkadotPrimitivesV8ExecutorParams;
    PolkadotPrimitivesV8ExecutorParamsExecutorParam: PolkadotPrimitivesV8ExecutorParamsExecutorParam;
    PolkadotPrimitivesV8GroupRotationInfo: PolkadotPrimitivesV8GroupRotationInfo;
    PolkadotPrimitivesV8IndexedVecGroupIndex: PolkadotPrimitivesV8IndexedVecGroupIndex;
    PolkadotPrimitivesV8IndexedVecValidatorIndex: PolkadotPrimitivesV8IndexedVecValidatorIndex;
    PolkadotPrimitivesV8InherentData: PolkadotPrimitivesV8InherentData;
    PolkadotPrimitivesV8InvalidDisputeStatementKind: PolkadotPrimitivesV8InvalidDisputeStatementKind;
    PolkadotPrimitivesV8OccupiedCore: PolkadotPrimitivesV8OccupiedCore;
    PolkadotPrimitivesV8OccupiedCoreAssumption: PolkadotPrimitivesV8OccupiedCoreAssumption;
    PolkadotPrimitivesV8PersistedValidationData: PolkadotPrimitivesV8PersistedValidationData;
    PolkadotPrimitivesV8PvfCheckStatement: PolkadotPrimitivesV8PvfCheckStatement;
    PolkadotPrimitivesV8PvfExecKind: PolkadotPrimitivesV8PvfExecKind;
    PolkadotPrimitivesV8PvfPrepKind: PolkadotPrimitivesV8PvfPrepKind;
    PolkadotPrimitivesV8ScheduledCore: PolkadotPrimitivesV8ScheduledCore;
    PolkadotPrimitivesV8SchedulerParams: PolkadotPrimitivesV8SchedulerParams;
    PolkadotPrimitivesV8ScrapedOnChainVotes: PolkadotPrimitivesV8ScrapedOnChainVotes;
    PolkadotPrimitivesV8SessionInfo: PolkadotPrimitivesV8SessionInfo;
    PolkadotPrimitivesV8SignedUncheckedSigned: PolkadotPrimitivesV8SignedUncheckedSigned;
    PolkadotPrimitivesV8SlashingDisputeProof: PolkadotPrimitivesV8SlashingDisputeProof;
    PolkadotPrimitivesV8SlashingDisputesTimeSlot: PolkadotPrimitivesV8SlashingDisputesTimeSlot;
    PolkadotPrimitivesV8SlashingPendingSlashes: PolkadotPrimitivesV8SlashingPendingSlashes;
    PolkadotPrimitivesV8SlashingSlashingOffenceKind: PolkadotPrimitivesV8SlashingSlashingOffenceKind;
    PolkadotPrimitivesV8UpgradeGoAhead: PolkadotPrimitivesV8UpgradeGoAhead;
    PolkadotPrimitivesV8UpgradeRestriction: PolkadotPrimitivesV8UpgradeRestriction;
    PolkadotPrimitivesV8ValidDisputeStatementKind: PolkadotPrimitivesV8ValidDisputeStatementKind;
    PolkadotPrimitivesV8ValidatorAppPublic: PolkadotPrimitivesV8ValidatorAppPublic;
    PolkadotPrimitivesV8ValidatorAppSignature: PolkadotPrimitivesV8ValidatorAppSignature;
    PolkadotPrimitivesV8ValidityAttestation: PolkadotPrimitivesV8ValidityAttestation;
    PolkadotRuntimeParachainsOnDemandPalletCall: PolkadotRuntimeParachainsOnDemandPalletCall;
    PolkadotRuntimeParachainsOnDemandPalletError: PolkadotRuntimeParachainsOnDemandPalletError;
    PolkadotRuntimeParachainsOnDemandPalletEvent: PolkadotRuntimeParachainsOnDemandPalletEvent;
    PolkadotRuntimeParachainsOnDemandTypesCoreAffinityCount: PolkadotRuntimeParachainsOnDemandTypesCoreAffinityCount;
    PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder: PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder;
    PolkadotRuntimeParachainsOnDemandTypesQueueStatusType: PolkadotRuntimeParachainsOnDemandTypesQueueStatusType;
    StagingKusamaRuntimeBurnDestinationAccount: StagingKusamaRuntimeBurnDestinationAccount;
    StagingKusamaRuntimeDynamicParamsInflationFalloff: StagingKusamaRuntimeDynamicParamsInflationFalloff;
    StagingKusamaRuntimeDynamicParamsInflationIdealStake: StagingKusamaRuntimeDynamicParamsInflationIdealStake;
    StagingKusamaRuntimeDynamicParamsInflationMaxInflation: StagingKusamaRuntimeDynamicParamsInflationMaxInflation;
    StagingKusamaRuntimeDynamicParamsInflationMinInflation: StagingKusamaRuntimeDynamicParamsInflationMinInflation;
    StagingKusamaRuntimeDynamicParamsInflationParameters: StagingKusamaRuntimeDynamicParamsInflationParameters;
    StagingKusamaRuntimeDynamicParamsInflationParametersKey: StagingKusamaRuntimeDynamicParamsInflationParametersKey;
    StagingKusamaRuntimeDynamicParamsInflationParametersValue: StagingKusamaRuntimeDynamicParamsInflationParametersValue;
    StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots: StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots;
    StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination: StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination;
    StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion: StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion;
    StagingKusamaRuntimeDynamicParamsTreasuryParameters: StagingKusamaRuntimeDynamicParamsTreasuryParameters;
    StagingKusamaRuntimeDynamicParamsTreasuryParametersKey: StagingKusamaRuntimeDynamicParamsTreasuryParametersKey;
    StagingKusamaRuntimeDynamicParamsTreasuryParametersValue: StagingKusamaRuntimeDynamicParamsTreasuryParametersValue;
    StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin: StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    StagingKusamaRuntimeNposCompactSolution24: StagingKusamaRuntimeNposCompactSolution24;
    StagingKusamaRuntimeOriginCaller: StagingKusamaRuntimeOriginCaller;
    StagingKusamaRuntimeProxyType: StagingKusamaRuntimeProxyType;
    StagingKusamaRuntimeRuntime: StagingKusamaRuntimeRuntime;
    StagingKusamaRuntimeRuntimeError: StagingKusamaRuntimeRuntimeError;
    StagingKusamaRuntimeRuntimeFreezeReason: StagingKusamaRuntimeRuntimeFreezeReason;
    StagingKusamaRuntimeRuntimeHoldReason: StagingKusamaRuntimeRuntimeHoldReason;
    StagingKusamaRuntimeRuntimeParameters: StagingKusamaRuntimeRuntimeParameters;
    StagingKusamaRuntimeRuntimeParametersKey: StagingKusamaRuntimeRuntimeParametersKey;
    StagingKusamaRuntimeRuntimeParametersValue: StagingKusamaRuntimeRuntimeParametersValue;
    StagingKusamaRuntimeSessionKeys: StagingKusamaRuntimeSessionKeys;
  } // InterfaceTypes
} // declare module
