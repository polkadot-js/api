// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AccountId32, H256, MultiAddress, PerU16, Perbill, Percent } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name AssetHubPolkadotRuntimeRuntimeTask (32) */
  type AssetHubPolkadotRuntimeRuntimeTask = Null;

  /** @name CumulusPalletParachainSystemEvent (33) */
  interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: {
      readonly relayChainBlockNum: u32;
    } & Struct;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: {
      readonly count: u32;
    } & Struct;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: {
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly dmqHead: H256;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
  }

  /** @name AssetHubPolkadotRuntimeRuntimeParametersKey (41) */
  interface AssetHubPolkadotRuntimeRuntimeParametersKey extends Enum {
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersKey;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersKey;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersKey;
    readonly type: 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersKey (42) */
  interface AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersKey extends Enum {
    readonly isSignedPhase: boolean;
    readonly isMaxSignedSubmissions: boolean;
    readonly isUnsignedPhase: boolean;
    readonly isMinerPages: boolean;
    readonly isMaxElectingVoters: boolean;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly isMaxEraDuration: boolean;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionSignedPhase (43) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionSignedPhase = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxSignedSubmissions (44) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxSignedSubmissions = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionUnsignedPhase (45) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionUnsignedPhase = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionMinerPages (46) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionMinerPages = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxElectingVoters (47) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxElectingVoters = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock (48) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxEraDuration (49) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxEraDuration = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersKey (50) */
  interface AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersKey extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly isMaximumWeight: boolean;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsSchedulerMaxScheduledPerBlock (51) */
  type AssetHubPolkadotRuntimeDynamicParamsSchedulerMaxScheduledPerBlock = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsSchedulerMaximumWeight (52) */
  type AssetHubPolkadotRuntimeDynamicParamsSchedulerMaximumWeight = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersKey (53) */
  interface AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersKey extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly isMaxOnIdleWeight: boolean;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnInitWeight (54) */
  type AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnInitWeight = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnIdleWeight (55) */
  type AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnIdleWeight = Null;

  /** @name AssetHubPolkadotRuntimeRuntimeParametersValue (57) */
  interface AssetHubPolkadotRuntimeRuntimeParametersValue extends Enum {
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersValue;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersValue;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersValue;
    readonly type: 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersValue (58) */
  interface AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersValue extends Enum {
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

  /** @name AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersValue (59) */
  interface AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersValue extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: u32;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: SpWeightsWeightV2Weight;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersValue (60) */
  interface AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersValue extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: Option<SpWeightsWeightV2Weight>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: Option<SpWeightsWeightV2Weight>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name PalletCollatorSelectionEvent (88) */
  interface PalletCollatorSelectionEvent extends Enum {
    readonly isNewInvulnerables: boolean;
    readonly asNewInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isInvulnerableAdded: boolean;
    readonly asInvulnerableAdded: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isInvulnerableRemoved: boolean;
    readonly asInvulnerableRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isNewDesiredCandidates: boolean;
    readonly asNewDesiredCandidates: {
      readonly desiredCandidates: u32;
    } & Struct;
    readonly isNewCandidacyBond: boolean;
    readonly asNewCandidacyBond: {
      readonly bondAmount: u128;
    } & Struct;
    readonly isCandidateAdded: boolean;
    readonly asCandidateAdded: {
      readonly accountId: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isCandidateBondUpdated: boolean;
    readonly asCandidateBondUpdated: {
      readonly accountId: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isCandidateRemoved: boolean;
    readonly asCandidateRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isCandidateReplaced: boolean;
    readonly asCandidateReplaced: {
      readonly old: AccountId32;
      readonly new_: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isInvalidInvulnerableSkipped: boolean;
    readonly asInvalidInvulnerableSkipped: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'NewInvulnerables' | 'InvulnerableAdded' | 'InvulnerableRemoved' | 'NewDesiredCandidates' | 'NewCandidacyBond' | 'CandidateAdded' | 'CandidateBondUpdated' | 'CandidateRemoved' | 'CandidateReplaced' | 'InvalidInvulnerableSkipped';
  }

  /** @name CumulusPalletXcmpQueueEvent (91) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly type: 'XcmpMessageSent';
  }

  /** @name CumulusPalletXcmEvent (166) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, StagingXcmV5TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name PalletXcmBridgeHubRouterEvent (167) */
  interface PalletXcmBridgeHubRouterEvent extends Enum {
    readonly isDeliveryFeeFactorDecreased: boolean;
    readonly asDeliveryFeeFactorDecreased: {
      readonly newValue: u128;
    } & Struct;
    readonly isDeliveryFeeFactorIncreased: boolean;
    readonly asDeliveryFeeFactorIncreased: {
      readonly newValue: u128;
    } & Struct;
    readonly type: 'DeliveryFeeFactorDecreased' | 'DeliveryFeeFactorIncreased';
  }

  /** @name CumulusPrimitivesCoreAggregateMessageOrigin (170) */
  interface CumulusPrimitivesCoreAggregateMessageOrigin extends Enum {
    readonly isHere: boolean;
    readonly isParent: boolean;
    readonly isSibling: boolean;
    readonly asSibling: u32;
    readonly type: 'Here' | 'Parent' | 'Sibling';
  }

  /** @name SnowbridgePalletSystemFrontendEvent (173) */
  interface SnowbridgePalletSystemFrontendEvent extends Enum {
    readonly isMessageSent: boolean;
    readonly asMessageSent: {
      readonly origin: StagingXcmV5Location;
      readonly destination: StagingXcmV5Location;
      readonly message: StagingXcmV5Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isExportOperatingModeChanged: boolean;
    readonly asExportOperatingModeChanged: {
      readonly mode: SnowbridgeCoreOperatingModeBasicOperatingMode;
    } & Struct;
    readonly type: 'MessageSent' | 'ExportOperatingModeChanged';
  }

  /** @name SnowbridgeCoreOperatingModeBasicOperatingMode (174) */
  interface SnowbridgeCoreOperatingModeBasicOperatingMode extends Enum {
    readonly isNormal: boolean;
    readonly isHalted: boolean;
    readonly type: 'Normal' | 'Halted';
  }

  /** @name AssetHubPolkadotRuntimeProxyType (179) */
  interface AssetHubPolkadotRuntimeProxyType extends Enum {
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
    readonly type: 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration';
  }

  /** @name ParachainsCommonPayVersionedLocatableAccount (207) */
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

  /** @name CumulusPalletParachainSystemCall (218) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: CumulusPalletParachainSystemParachainInherentBasicParachainInherentData;
      readonly inboundMessagesData: CumulusPalletParachainSystemParachainInherentInboundMessagesData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage';
  }

  /** @name CumulusPalletParachainSystemParachainInherentBasicParachainInherentData (219) */
  interface CumulusPalletParachainSystemParachainInherentBasicParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV8PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly relayParentDescendants: Vec<SpRuntimeHeader>;
    readonly collatorPeerId: Option<Bytes>;
  }

  /** @name SpTrieStorageProof (222) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name CumulusPalletParachainSystemParachainInherentInboundMessagesData (227) */
  interface CumulusPalletParachainSystemParachainInherentInboundMessagesData extends Struct {
    readonly downwardMessages: {
      readonly fullMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
      readonly hashedMessages: Vec<CumulusPrimitivesParachainInherentHashedMessage>;
    } & Struct;
    readonly horizontalMessages: CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection;
  }

  /** @name CumulusPrimitivesParachainInherentHashedMessage (232) */
  interface CumulusPrimitivesParachainInherentHashedMessage extends Struct {
    readonly sentAt: u32;
    readonly msgHash: H256;
  }

  /** @name CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection (233) */
  interface CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection extends Struct {
    readonly fullMessages: Vec<ITuple<[u32, PolkadotCorePrimitivesInboundHrmpMessage]>>;
    readonly hashedMessages: Vec<ITuple<[u32, CumulusPrimitivesParachainInherentHashedMessage]>>;
  }

  /** @name StagingParachainInfoCall (240) */
  type StagingParachainInfoCall = Null;

  /** @name AssetHubPolkadotRuntimeRuntimeParameters (246) */
  interface AssetHubPolkadotRuntimeRuntimeParameters extends Enum {
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubPolkadotRuntimeDynamicParamsStakingElectionParameters;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubPolkadotRuntimeDynamicParamsSchedulerParameters;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubPolkadotRuntimeDynamicParamsMessageQueueParameters;
    readonly type: 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionParameters (247) */
  interface AssetHubPolkadotRuntimeDynamicParamsStakingElectionParameters extends Enum {
    readonly isSignedPhase: boolean;
    readonly asSignedPhase: ITuple<[AssetHubPolkadotRuntimeDynamicParamsStakingElectionSignedPhase, Option<u32>]>;
    readonly isMaxSignedSubmissions: boolean;
    readonly asMaxSignedSubmissions: ITuple<[AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxSignedSubmissions, Option<u32>]>;
    readonly isUnsignedPhase: boolean;
    readonly asUnsignedPhase: ITuple<[AssetHubPolkadotRuntimeDynamicParamsStakingElectionUnsignedPhase, Option<u32>]>;
    readonly isMinerPages: boolean;
    readonly asMinerPages: ITuple<[AssetHubPolkadotRuntimeDynamicParamsStakingElectionMinerPages, Option<u32>]>;
    readonly isMaxElectingVoters: boolean;
    readonly asMaxElectingVoters: ITuple<[AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxElectingVoters, Option<u32>]>;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly asTargetSnapshotPerBlock: ITuple<[AssetHubPolkadotRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock, Option<u32>]>;
    readonly isMaxEraDuration: boolean;
    readonly asMaxEraDuration: ITuple<[AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxEraDuration, Option<u64>]>;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsSchedulerParameters (248) */
  interface AssetHubPolkadotRuntimeDynamicParamsSchedulerParameters extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: ITuple<[AssetHubPolkadotRuntimeDynamicParamsSchedulerMaxScheduledPerBlock, Option<u32>]>;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: ITuple<[AssetHubPolkadotRuntimeDynamicParamsSchedulerMaximumWeight, Option<SpWeightsWeightV2Weight>]>;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsMessageQueueParameters (249) */
  interface AssetHubPolkadotRuntimeDynamicParamsMessageQueueParameters extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: ITuple<[AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnInitWeight, Option<Option<SpWeightsWeightV2Weight>>]>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: ITuple<[AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnIdleWeight, Option<Option<SpWeightsWeightV2Weight>>]>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name PalletCollatorSelectionCall (264) */
  interface PalletCollatorSelectionCall extends Enum {
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly new_: Vec<AccountId32>;
    } & Struct;
    readonly isSetDesiredCandidates: boolean;
    readonly asSetDesiredCandidates: {
      readonly max: u32;
    } & Struct;
    readonly isSetCandidacyBond: boolean;
    readonly asSetCandidacyBond: {
      readonly bond: u128;
    } & Struct;
    readonly isRegisterAsCandidate: boolean;
    readonly isLeaveIntent: boolean;
    readonly isAddInvulnerable: boolean;
    readonly asAddInvulnerable: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRemoveInvulnerable: boolean;
    readonly asRemoveInvulnerable: {
      readonly who: AccountId32;
    } & Struct;
    readonly isUpdateBond: boolean;
    readonly asUpdateBond: {
      readonly newDeposit: u128;
    } & Struct;
    readonly isTakeCandidateSlot: boolean;
    readonly asTakeCandidateSlot: {
      readonly deposit: u128;
      readonly target: AccountId32;
    } & Struct;
    readonly type: 'SetInvulnerables' | 'SetDesiredCandidates' | 'SetCandidacyBond' | 'RegisterAsCandidate' | 'LeaveIntent' | 'AddInvulnerable' | 'RemoveInvulnerable' | 'UpdateBond' | 'TakeCandidateSlot';
  }

  /** @name AssetHubPolkadotRuntimeSessionKeys (266) */
  interface AssetHubPolkadotRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraEd25519AppEd25519Public;
  }

  /** @name SpConsensusAuraEd25519AppEd25519Public (267) */
  interface SpConsensusAuraEd25519AppEd25519Public extends U8aFixed {}

  /** @name CumulusPalletXcmpQueueCall (268) */
  interface CumulusPalletXcmpQueueCall extends Enum {
    readonly isSuspendXcmExecution: boolean;
    readonly isResumeXcmExecution: boolean;
    readonly isUpdateSuspendThreshold: boolean;
    readonly asUpdateSuspendThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateDropThreshold: boolean;
    readonly asUpdateDropThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateResumeThreshold: boolean;
    readonly asUpdateResumeThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly type: 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold';
  }

  /** @name CumulusPalletXcmCall (313) */
  type CumulusPalletXcmCall = Null;

  /** @name PalletXcmBridgeHubRouterCall (314) */
  interface PalletXcmBridgeHubRouterCall extends Enum {
    readonly isReportBridgeStatus: boolean;
    readonly asReportBridgeStatus: {
      readonly bridgeId: H256;
      readonly isCongested: bool;
    } & Struct;
    readonly type: 'ReportBridgeStatus';
  }

  /** @name SnowbridgePalletSystemFrontendCall (316) */
  interface SnowbridgePalletSystemFrontendCall extends Enum {
    readonly isSetOperatingMode: boolean;
    readonly asSetOperatingMode: {
      readonly mode: SnowbridgeCoreOperatingModeBasicOperatingMode;
    } & Struct;
    readonly isRegisterToken: boolean;
    readonly asRegisterToken: {
      readonly assetId: XcmVersionedLocation;
      readonly metadata: SnowbridgeCoreAssetMetadata;
      readonly feeAsset: StagingXcmV5Asset;
    } & Struct;
    readonly isAddTip: boolean;
    readonly asAddTip: {
      readonly messageId: SnowbridgeCoreRewardMessageId;
      readonly asset: StagingXcmV5Asset;
    } & Struct;
    readonly type: 'SetOperatingMode' | 'RegisterToken' | 'AddTip';
  }

  /** @name SnowbridgeCoreAssetMetadata (317) */
  interface SnowbridgeCoreAssetMetadata extends Struct {
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
  }

  /** @name SnowbridgeCoreRewardMessageId (318) */
  interface SnowbridgeCoreRewardMessageId extends Enum {
    readonly isInbound: boolean;
    readonly asInbound: u64;
    readonly isOutbound: boolean;
    readonly asOutbound: u64;
    readonly type: 'Inbound' | 'Outbound';
  }

  /** @name AssetHubPolkadotRuntimeOriginCaller (321) */
  interface AssetHubPolkadotRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: AssetHubPolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly type: 'System' | 'PolkadotXcm' | 'CumulusXcm' | 'Origins';
  }

  /** @name CumulusPalletXcmOrigin (324) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name AssetHubPolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin (325) */
  interface AssetHubPolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin extends Enum {
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
    readonly isWishForChange: boolean;
    readonly type: 'StakingAdmin' | 'Treasurer' | 'FellowshipAdmin' | 'GeneralAdmin' | 'AuctionAdmin' | 'LeaseAdmin' | 'ReferendumCanceller' | 'ReferendumKiller' | 'SmallTipper' | 'BigTipper' | 'SmallSpender' | 'MediumSpender' | 'BigSpender' | 'WhitelistedCaller' | 'WishForChange';
  }

  /** @name PalletStakingAsyncRcClientCall (392) */
  interface PalletStakingAsyncRcClientCall extends Enum {
    readonly isRelaySessionReport: boolean;
    readonly asRelaySessionReport: {
      readonly report: PalletStakingAsyncRcClientSessionReport;
    } & Struct;
    readonly isRelayNewOffencePaged: boolean;
    readonly asRelayNewOffencePaged: {
      readonly offences: Vec<ITuple<[u32, PalletStakingAsyncRcClientOffence]>>;
    } & Struct;
    readonly type: 'RelaySessionReport' | 'RelayNewOffencePaged';
  }

  /** @name PalletElectionProviderMultiBlockCall (401) */
  interface PalletElectionProviderMultiBlockCall extends Enum {
    readonly isManage: boolean;
    readonly asManage: {
      readonly op: PalletElectionProviderMultiBlockAdminOperation;
    } & Struct;
    readonly type: 'Manage';
  }

  /** @name PalletElectionProviderMultiBlockAdminOperation (402) */
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

  /** @name PalletElectionProviderMultiBlockPhase (403) */
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

  /** @name PalletElectionProviderMultiBlockVerifierImplsPalletCall (413) */
  type PalletElectionProviderMultiBlockVerifierImplsPalletCall = Null;

  /** @name PalletElectionProviderMultiBlockUnsignedPalletCall (414) */
  interface PalletElectionProviderMultiBlockUnsignedPalletCall extends Enum {
    readonly isSubmitUnsigned: boolean;
    readonly asSubmitUnsigned: {
      readonly pagedSolution: PalletElectionProviderMultiBlockPagedRawSolution;
    } & Struct;
    readonly type: 'SubmitUnsigned';
  }

  /** @name PalletElectionProviderMultiBlockPagedRawSolution (415) */
  interface PalletElectionProviderMultiBlockPagedRawSolution extends Struct {
    readonly solutionPages: Vec<AssetHubPolkadotRuntimeStakingNposCompactSolution16>;
    readonly score: SpNposElectionsElectionScore;
    readonly round: u32;
  }

  /** @name AssetHubPolkadotRuntimeStakingNposCompactSolution16 (417) */
  interface AssetHubPolkadotRuntimeStakingNposCompactSolution16 extends Struct {
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

  /** @name PalletElectionProviderMultiBlockSignedPalletCall (468) */
  interface PalletElectionProviderMultiBlockSignedPalletCall extends Enum {
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly claimedScore: SpNposElectionsElectionScore;
    } & Struct;
    readonly isSubmitPage: boolean;
    readonly asSubmitPage: {
      readonly page: u32;
      readonly maybeSolution: Option<AssetHubPolkadotRuntimeStakingNposCompactSolution16>;
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

  /** @name PalletStakingAsyncPalletCall (470) */
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

  /** @name PalletStakingAsyncRewardDestination (471) */
  interface PalletStakingAsyncRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PalletStakingAsyncValidatorPrefs (472) */
  interface PalletStakingAsyncValidatorPrefs extends Struct {
    readonly commission: Compact<Perbill>;
    readonly blocked: bool;
  }

  /** @name PalletStakingAsyncPalletConfigOpU128 (478) */
  interface PalletStakingAsyncPalletConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncPalletConfigOpU32 (479) */
  interface PalletStakingAsyncPalletConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncPalletConfigOpPercent (480) */
  interface PalletStakingAsyncPalletConfigOpPercent extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Percent;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncPalletConfigOpPerbill (481) */
  interface PalletStakingAsyncPalletConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Perbill;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncLedgerUnlockChunk (485) */
  interface PalletStakingAsyncLedgerUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PalletAhOpsCall (488) */
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

  /** @name PalletAhMigratorCall (489) */
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
      readonly values: Vec<PalletRcMigratorReferendaReferendaMessage>;
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
      readonly messages: Vec<PalletRcMigratorSchedulerSchedulerAgendaMessage>;
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
      readonly coolOffEndAt: u32;
    } & Struct;
    readonly isSendXcmMessage: boolean;
    readonly asSendXcmMessage: {
      readonly dest: XcmVersionedLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly type: 'ReceiveAccounts' | 'ReceiveMultisigs' | 'ReceiveProxyProxies' | 'ReceiveProxyAnnouncements' | 'ReceivePreimageChunks' | 'ReceivePreimageRequestStatus' | 'ReceivePreimageLegacyStatus' | 'ReceiveNomPoolsMessages' | 'ReceiveVestingSchedules' | 'ReceiveReferendaValues' | 'ReceiveReferendums' | 'ReceiveClaims' | 'ReceiveBagsListMessages' | 'ReceiveSchedulerMessages' | 'ReceiveIndices' | 'ReceiveConvictionVotingMessages' | 'ReceiveBountiesMessages' | 'ReceiveAssetRates' | 'ReceiveCrowdloanMessages' | 'ReceiveReferendaMetadata' | 'ReceiveTreasuryMessages' | 'ReceiveSchedulerAgendaMessages' | 'ReceiveDelegatedStakingMessages' | 'ReceiveChildBountiesMessages' | 'ReceiveStakingMessages' | 'ForceSetStage' | 'StartMigration' | 'SetDmpQueuePriority' | 'SetManager' | 'FinishMigration' | 'SendXcmMessage';
  }

  /** @name PalletRcMigratorAccountsAccount (491) */
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

  /** @name PalletRcMigratorPortableHoldReason (492) */
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

  /** @name PalletRcMigratorPortableFreezeReason (499) */
  interface PalletRcMigratorPortableFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name FrameSupportTokensMiscIdAmountPortableHoldReason (502) */
  interface FrameSupportTokensMiscIdAmountPortableHoldReason extends Struct {
    readonly id: PalletRcMigratorPortableHoldReason;
    readonly amount: u128;
  }

  /** @name FrameSupportTokensMiscIdAmountPortableFreezeReason (505) */
  interface FrameSupportTokensMiscIdAmountPortableFreezeReason extends Struct {
    readonly id: PalletRcMigratorPortableFreezeReason;
    readonly amount: u128;
  }

  /** @name PalletRcMigratorMultisigRcMultisig (512) */
  interface PalletRcMigratorMultisigRcMultisig extends Struct {
    readonly creator: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletRcMigratorProxyRcProxy (514) */
  interface PalletRcMigratorProxyRcProxy extends Struct {
    readonly delegator: AccountId32;
    readonly deposit: u128;
    readonly proxies: Vec<PalletProxyProxyDefinitionPolkadotRuntimeConstantsProxyProxyType>;
  }

  /** @name PalletProxyProxyDefinitionPolkadotRuntimeConstantsProxyProxyType (517) */
  interface PalletProxyProxyDefinitionPolkadotRuntimeConstantsProxyProxyType extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: PolkadotRuntimeConstantsProxyProxyType;
    readonly delay: u32;
  }

  /** @name PalletRcMigratorProxyRcProxyAnnouncement (519) */
  interface PalletRcMigratorProxyRcProxyAnnouncement extends Struct {
    readonly depositor: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletRcMigratorPreimageChunksRcPreimageChunk (521) */
  interface PalletRcMigratorPreimageChunksRcPreimageChunk extends Struct {
    readonly preimageHash: H256;
    readonly preimageLen: u32;
    readonly chunkByteOffset: u32;
    readonly chunkBytes: Bytes;
  }

  /** @name PalletRcMigratorPreimageRequestStatusPortableRequestStatus (524) */
  interface PalletRcMigratorPreimageRequestStatusPortableRequestStatus extends Struct {
    readonly hash_: H256;
    readonly requestStatus: PalletRcMigratorPreimageRequestStatusPortableRequestStatusInner;
  }

  /** @name PalletRcMigratorPreimageRequestStatusPortableRequestStatusInner (525) */
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

  /** @name PalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus (530) */
  interface PalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus extends Struct {
    readonly hash_: H256;
    readonly depositor: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletRcMigratorStakingNomPoolsRcNomPoolsMessage (532) */
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

  /** @name PalletRcMigratorStakingNomPoolsNomPoolsStorageValues (533) */
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

  /** @name PalletRcMigratorStakingNomPoolsAliasRewardPool (547) */
  interface PalletRcMigratorStakingNomPoolsAliasRewardPool extends Struct {
    readonly lastRecordedRewardCounter: u128;
    readonly lastRecordedTotalPayouts: u128;
    readonly totalRewardsClaimed: u128;
    readonly totalCommissionPending: u128;
    readonly totalCommissionClaimed: u128;
  }

  /** @name PalletRcMigratorStakingNomPoolsAliasSubPools (549) */
  interface PalletRcMigratorStakingNomPoolsAliasSubPools extends Struct {
    readonly noEra: PalletRcMigratorStakingNomPoolsAliasUnbondPool;
    readonly withEra: BTreeMap<u32, PalletRcMigratorStakingNomPoolsAliasUnbondPool>;
  }

  /** @name PalletRcMigratorStakingNomPoolsAliasUnbondPool (550) */
  interface PalletRcMigratorStakingNomPoolsAliasUnbondPool extends Struct {
    readonly points: u128;
    readonly balance: u128;
  }

  /** @name PalletRcMigratorVestingRcVestingSchedule (558) */
  interface PalletRcMigratorVestingRcVestingSchedule extends Struct {
    readonly who: AccountId32;
    readonly schedules: Vec<PalletVestingVestingInfo>;
  }

  /** @name PalletRcMigratorReferendaReferendaMessage (562) */
  interface PalletRcMigratorReferendaReferendaMessage extends Struct {
    readonly referendumCount: Option<u32>;
    readonly decidingCount: Vec<ITuple<[u16, u32]>>;
    readonly trackQueue: Vec<ITuple<[u16, Vec<ITuple<[u32, u128]>>]>>;
  }

  /** @name PalletReferendaReferendumInfoRcPalletsOrigin (569) */
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

  /** @name AssetHubPolkadotRuntimeAhMigrationRcPalletsOrigin (570) */
  interface AssetHubPolkadotRuntimeAhMigrationRcPalletsOrigin extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: AssetHubPolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly type: 'System' | 'Origins';
  }

  /** @name PalletReferendaReferendumStatusRcPalletsOrigin (572) */
  interface PalletReferendaReferendumStatusRcPalletsOrigin extends Struct {
    readonly track: u16;
    readonly origin: AssetHubPolkadotRuntimeAhMigrationRcPalletsOrigin;
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

  /** @name PalletRcMigratorClaimsRcClaimsMessage (580) */
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

  /** @name PalletRcMigratorStakingBagsListPortableBagsListMessage (585) */
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

  /** @name PalletRcMigratorStakingBagsListPortableNode (586) */
  interface PalletRcMigratorStakingBagsListPortableNode extends Struct {
    readonly id: AccountId32;
    readonly prev: Option<AccountId32>;
    readonly next: Option<AccountId32>;
    readonly bagUpper: u64;
    readonly score: u64;
  }

  /** @name PalletRcMigratorStakingBagsListPortableBag (587) */
  interface PalletRcMigratorStakingBagsListPortableBag extends Struct {
    readonly head: Option<AccountId32>;
    readonly tail: Option<AccountId32>;
    readonly bagUpper: u64;
  }

  /** @name PalletRcMigratorSchedulerRcSchedulerMessage (589) */
  interface PalletRcMigratorSchedulerRcSchedulerMessage extends Enum {
    readonly isIncompleteSince: boolean;
    readonly asIncompleteSince: u32;
    readonly isRetries: boolean;
    readonly asRetries: ITuple<[ITuple<[u32, u32]>, PalletSchedulerRetryConfig]>;
    readonly isLookup: boolean;
    readonly asLookup: ITuple<[U8aFixed, ITuple<[u32, u32]>]>;
    readonly type: 'IncompleteSince' | 'Retries' | 'Lookup';
  }

  /** @name PalletRcMigratorIndicesRcIndicesIndex (594) */
  interface PalletRcMigratorIndicesRcIndicesIndex extends Struct {
    readonly index: u32;
    readonly who: AccountId32;
    readonly deposit: u128;
    readonly frozen: bool;
  }

  /** @name PalletRcMigratorConvictionVotingRcConvictionVotingMessage (596) */
  interface PalletRcMigratorConvictionVotingRcConvictionVotingMessage extends Enum {
    readonly isVotingFor: boolean;
    readonly asVotingFor: ITuple<[AccountId32, u16, PalletConvictionVotingVoteVoting]>;
    readonly isClassLocksFor: boolean;
    readonly asClassLocksFor: ITuple<[AccountId32, Vec<ITuple<[u16, u128]>>]>;
    readonly type: 'VotingFor' | 'ClassLocksFor';
  }

  /** @name PalletRcMigratorBountiesRcBountiesMessage (608) */
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

  /** @name PalletRcMigratorBountiesAliasBounty (611) */
  interface PalletRcMigratorBountiesAliasBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletRcMigratorCrowdloanRcCrowdloanMessage (616) */
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

  /** @name PalletRcMigratorTreasuryPortableTreasuryMessage (620) */
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

  /** @name PalletRcMigratorTreasuryPortableSpendStatus (623) */
  interface PalletRcMigratorTreasuryPortableSpendStatus extends Struct {
    readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
    readonly amount: u128;
    readonly beneficiary: XcmVersionedLocation;
    readonly validFrom: u32;
    readonly expireAt: u32;
    readonly status: PalletRcMigratorTreasuryPortablePaymentState;
  }

  /** @name PalletRcMigratorTreasuryPortablePaymentState (624) */
  interface PalletRcMigratorTreasuryPortablePaymentState extends Enum {
    readonly isPending: boolean;
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly id: u64;
    } & Struct;
    readonly isFailed: boolean;
    readonly type: 'Pending' | 'Attempted' | 'Failed';
  }

  /** @name PalletRcMigratorSchedulerSchedulerAgendaMessage (626) */
  interface PalletRcMigratorSchedulerSchedulerAgendaMessage extends Struct {
    readonly block: u32;
    readonly agenda: Vec<Option<PalletRcMigratorSchedulerAliasScheduled>>;
  }

  /** @name PalletRcMigratorSchedulerAliasScheduled (627) */
  interface PalletRcMigratorSchedulerAliasScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: AssetHubPolkadotRuntimeAhMigrationRcPalletsOrigin;
  }

  /** @name PalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage (631) */
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

  /** @name PalletRcMigratorChildBountiesPortableChildBountiesMessage (633) */
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

  /** @name PalletRcMigratorChildBountiesPortableChildBounty (634) */
  interface PalletRcMigratorChildBountiesPortableChildBounty extends Struct {
    readonly parentBounty: u32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly status: PalletRcMigratorChildBountiesPortableChildBountyStatus;
  }

  /** @name PalletRcMigratorChildBountiesPortableChildBountyStatus (635) */
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

  /** @name PalletRcMigratorStakingMessagePortableStakingMessage (638) */
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

  /** @name PalletRcMigratorStakingMessageStakingValues (639) */
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

  /** @name PalletRcMigratorStakingMessagePortableActiveEraInfo (641) */
  interface PalletRcMigratorStakingMessagePortableActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name PalletRcMigratorStakingMessagePortableForcing (643) */
  interface PalletRcMigratorStakingMessagePortableForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PalletRcMigratorStakingMessagePortableStakingLedger (645) */
  interface PalletRcMigratorStakingMessagePortableStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: u128;
    readonly active: u128;
    readonly unlocking: Vec<PalletRcMigratorStakingMessagePortableUnlockChunk>;
  }

  /** @name PalletRcMigratorStakingMessagePortableUnlockChunk (647) */
  interface PalletRcMigratorStakingMessagePortableUnlockChunk extends Struct {
    readonly value: u128;
    readonly era: u32;
  }

  /** @name PalletRcMigratorStakingMessagePortableRewardDestination (649) */
  interface PalletRcMigratorStakingMessagePortableRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PalletRcMigratorStakingMessagePortableValidatorPrefs (650) */
  interface PalletRcMigratorStakingMessagePortableValidatorPrefs extends Struct {
    readonly commission: Perbill;
    readonly blocked: bool;
  }

  /** @name PalletRcMigratorStakingMessagePortableNominations (651) */
  interface PalletRcMigratorStakingMessagePortableNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PalletRcMigratorStakingMessagePortablePagedExposureMetadata (653) */
  interface PalletRcMigratorStakingMessagePortablePagedExposureMetadata extends Struct {
    readonly total: u128;
    readonly own: u128;
    readonly nominatorCount: u32;
    readonly pageCount: u32;
  }

  /** @name PalletRcMigratorStakingMessagePortableExposurePage (654) */
  interface PalletRcMigratorStakingMessagePortableExposurePage extends Struct {
    readonly pageTotal: u128;
    readonly others: Vec<PalletRcMigratorStakingMessagePortableIndividualExposure>;
  }

  /** @name PalletRcMigratorStakingMessagePortableIndividualExposure (656) */
  interface PalletRcMigratorStakingMessagePortableIndividualExposure extends Struct {
    readonly who: AccountId32;
    readonly value: u128;
  }

  /** @name PalletRcMigratorStakingMessagePortableEraRewardPoints (658) */
  interface PalletRcMigratorStakingMessagePortableEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: Vec<ITuple<[AccountId32, u32]>>;
  }

  /** @name PalletRcMigratorStakingMessagePortableUnappliedSlash (660) */
  interface PalletRcMigratorStakingMessagePortableUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[AccountId32, u128]>>;
    readonly reporters: Vec<AccountId32>;
    readonly payout: u128;
  }

  /** @name PalletAhMigratorMigrationStage (665) */
  interface PalletAhMigratorMigrationStage extends Enum {
    readonly isPending: boolean;
    readonly isDataMigrationOngoing: boolean;
    readonly isMigrationDone: boolean;
    readonly isCoolOff: boolean;
    readonly asCoolOff: {
      readonly endAt: u32;
    } & Struct;
    readonly type: 'Pending' | 'DataMigrationOngoing' | 'MigrationDone' | 'CoolOff';
  }

  /** @name PalletRcMigratorMigrationFinishedData (668) */
  interface PalletRcMigratorMigrationFinishedData extends Struct {
    readonly rcBalanceKept: u128;
  }

  /** @name PalletStakingAsyncRcClientEvent (683) */
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

  /** @name PalletStakingAsyncRcClientUnexpectedKind (684) */
  interface PalletStakingAsyncRcClientUnexpectedKind extends Enum {
    readonly isSessionReportIntegrityFailed: boolean;
    readonly isValidatorSetIntegrityFailed: boolean;
    readonly isSessionSkipped: boolean;
    readonly isSessionAlreadyProcessed: boolean;
    readonly isValidatorSetSendFailed: boolean;
    readonly isValidatorSetDropped: boolean;
    readonly type: 'SessionReportIntegrityFailed' | 'ValidatorSetIntegrityFailed' | 'SessionSkipped' | 'SessionAlreadyProcessed' | 'ValidatorSetSendFailed' | 'ValidatorSetDropped';
  }

  /** @name PalletElectionProviderMultiBlockEvent (685) */
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

  /** @name PalletElectionProviderMultiBlockVerifierImplsPalletEvent (686) */
  interface PalletElectionProviderMultiBlockVerifierImplsPalletEvent extends Enum {
    readonly isVerificationFailed: boolean;
    readonly asVerificationFailed: ITuple<[u32, PalletElectionProviderMultiBlockVerifierFeasibilityError]>;
    readonly isVerified: boolean;
    readonly asVerified: ITuple<[u32, u32]>;
    readonly isQueued: boolean;
    readonly asQueued: ITuple<[SpNposElectionsElectionScore, Option<SpNposElectionsElectionScore>]>;
    readonly type: 'VerificationFailed' | 'Verified' | 'Queued';
  }

  /** @name PalletElectionProviderMultiBlockVerifierFeasibilityError (687) */
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

  /** @name SpNposElectionsError (688) */
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

  /** @name PalletElectionProviderMultiBlockSignedPalletEvent (690) */
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

  /** @name PalletStakingAsyncPalletEvent (691) */
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

  /** @name PalletStakingAsyncForcing (692) */
  interface PalletStakingAsyncForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PalletStakingAsyncPalletUnexpectedKind (694) */
  interface PalletStakingAsyncPalletUnexpectedKind extends Enum {
    readonly isEraDurationBoundExceeded: boolean;
    readonly isUnknownValidatorActivation: boolean;
    readonly type: 'EraDurationBoundExceeded' | 'UnknownValidatorActivation';
  }

  /** @name PalletAhOpsEvent (695) */
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

  /** @name PalletAhMigratorEvent (696) */
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
    readonly isFailedToUnreserveMultisigDeposit: boolean;
    readonly asFailedToUnreserveMultisigDeposit: {
      readonly expectedAmount: u128;
      readonly missingAmount: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isFailedToUnreservePreimageDeposit: boolean;
    readonly asFailedToUnreservePreimageDeposit: {
      readonly expectedAmount: u128;
      readonly missingAmount: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'StageTransition' | 'BatchReceived' | 'BatchProcessed' | 'AssetHubMigrationStarted' | 'AssetHubMigrationFinished' | 'DmpQueuePrioritySet' | 'DmpQueuePriorityConfigSet' | 'BalancesBeforeRecordSet' | 'BalancesBeforeRecordConsumed' | 'ReferendumCanceled' | 'ManagerSet' | 'AccountTranslatedParachainSovereign' | 'AccountTranslatedParachainSovereignDerived' | 'XcmSent' | 'FailedToUnreserveMultisigDeposit' | 'FailedToUnreservePreimageDeposit';
  }

  /** @name PalletAhMigratorPalletEventName (697) */
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

  /** @name CumulusPalletParachainSystemUnincludedSegmentAncestor (715) */
  interface CumulusPalletParachainSystemUnincludedSegmentAncestor extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly paraHeadHash: Option<H256>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV8UpgradeGoAhead>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth (716) */
  interface CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth extends Struct {
    readonly umpMsgCount: u32;
    readonly umpTotalBytes: u32;
    readonly hrmpOutgoing: BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate (718) */
  interface CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
    readonly msgCount: u32;
    readonly totalBytes: u32;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentSegmentTracker (723) */
  interface CumulusPalletParachainSystemUnincludedSegmentSegmentTracker extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly hrmpWatermark: Option<u32>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV8UpgradeGoAhead>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (726) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV8AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV8AbridgedHrmpChannel]>>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity (727) */
  interface CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity extends Struct {
    readonly remainingCount: u32;
    readonly remainingSize: u32;
  }

  /** @name PolkadotPrimitivesV8AbridgedHrmpChannel (730) */
  interface PolkadotPrimitivesV8AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV8AbridgedHostConfiguration (731) */
  interface PolkadotPrimitivesV8AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
    readonly asyncBackingParams: PolkadotPrimitivesV8AsyncBackingAsyncBackingParams;
  }

  /** @name CumulusPalletParachainSystemParachainInherentInboundMessageId (737) */
  interface CumulusPalletParachainSystemParachainInherentInboundMessageId extends Struct {
    readonly sentAt: u32;
    readonly reverseIdx: u32;
  }

  /** @name CumulusPalletParachainSystemError (740) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled';
  }

  /** @name AssetHubPolkadotRuntimeRuntimeHoldReason (761) */
  interface AssetHubPolkadotRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isSession: boolean;
    readonly asSession: PalletSessionHoldReason;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingHoldReason;
    readonly isMultiBlockElectionSigned: boolean;
    readonly asMultiBlockElectionSigned: PalletElectionProviderMultiBlockSignedPalletHoldReason;
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingAsyncPalletHoldReason;
    readonly type: 'Preimage' | 'Session' | 'PolkadotXcm' | 'StateTrieMigration' | 'DelegatedStaking' | 'MultiBlockElectionSigned' | 'Staking';
  }

  /** @name PalletElectionProviderMultiBlockSignedPalletHoldReason (762) */
  interface PalletElectionProviderMultiBlockSignedPalletHoldReason extends Enum {
    readonly isSignedSubmission: boolean;
    readonly type: 'SignedSubmission';
  }

  /** @name PalletStakingAsyncPalletHoldReason (763) */
  interface PalletStakingAsyncPalletHoldReason extends Enum {
    readonly isStaking: boolean;
    readonly type: 'Staking';
  }

  /** @name AssetHubPolkadotRuntimeRuntimeFreezeReason (767) */
  interface AssetHubPolkadotRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name PalletCollatorSelectionCandidateInfo (776) */
  interface PalletCollatorSelectionCandidateInfo extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletCollatorSelectionError (779) */
  interface PalletCollatorSelectionError extends Enum {
    readonly isTooManyCandidates: boolean;
    readonly isTooFewEligibleCollators: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isTooManyInvulnerables: boolean;
    readonly isAlreadyInvulnerable: boolean;
    readonly isNotInvulnerable: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isValidatorNotRegistered: boolean;
    readonly isInsertToCandidateListFailed: boolean;
    readonly isRemoveFromCandidateListFailed: boolean;
    readonly isDepositTooLow: boolean;
    readonly isUpdateCandidateListFailed: boolean;
    readonly isInsufficientBond: boolean;
    readonly isTargetIsNotCandidate: boolean;
    readonly isIdenticalDeposit: boolean;
    readonly isInvalidUnreserve: boolean;
    readonly type: 'TooManyCandidates' | 'TooFewEligibleCollators' | 'AlreadyCandidate' | 'NotCandidate' | 'TooManyInvulnerables' | 'AlreadyInvulnerable' | 'NotInvulnerable' | 'NoAssociatedValidatorId' | 'ValidatorNotRegistered' | 'InsertToCandidateListFailed' | 'RemoveFromCandidateListFailed' | 'DepositTooLow' | 'UpdateCandidateListFailed' | 'InsufficientBond' | 'TargetIsNotCandidate' | 'IdenticalDeposit' | 'InvalidUnreserve';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (796) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (797) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (801) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
  }

  /** @name CumulusPalletXcmpQueueError (802) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isBadQueueConfig: boolean;
    readonly isAlreadySuspended: boolean;
    readonly isAlreadyResumed: boolean;
    readonly isTooManyActiveOutboundChannels: boolean;
    readonly isTooBig: boolean;
    readonly type: 'BadQueueConfig' | 'AlreadySuspended' | 'AlreadyResumed' | 'TooManyActiveOutboundChannels' | 'TooBig';
  }

  /** @name BpXcmBridgeHubRouterBridgeState (831) */
  interface BpXcmBridgeHubRouterBridgeState extends Struct {
    readonly deliveryFeeFactor: u128;
    readonly isCongested: bool;
  }

  /** @name SnowbridgePalletSystemFrontendError (839) */
  interface SnowbridgePalletSystemFrontendError extends Enum {
    readonly isUnsupportedLocationVersion: boolean;
    readonly isInvalidAssetOwner: boolean;
    readonly isSendFailure: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLocationConversionFailed: boolean;
    readonly isHalted: boolean;
    readonly isUnreachable: boolean;
    readonly isUnsupportedAsset: boolean;
    readonly isWithdrawError: boolean;
    readonly isInvalidAccount: boolean;
    readonly isSwapError: boolean;
    readonly isBurnError: boolean;
    readonly isTipAmountZero: boolean;
    readonly type: 'UnsupportedLocationVersion' | 'InvalidAssetOwner' | 'SendFailure' | 'FeesNotMet' | 'LocationConversionFailed' | 'Halted' | 'Unreachable' | 'UnsupportedAsset' | 'WithdrawError' | 'InvalidAccount' | 'SwapError' | 'BurnError' | 'TipAmountZero';
  }

  /** @name PalletProxyProxyDefinitionAssetHubPolkadotRuntimeProxyType (847) */
  interface PalletProxyProxyDefinitionAssetHubPolkadotRuntimeProxyType extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: AssetHubPolkadotRuntimeProxyType;
    readonly delay: u32;
  }

  /** @name PalletReferendaReferendumInfoOriginCaller (917) */
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

  /** @name PalletReferendaReferendumStatusOriginCaller (918) */
  interface PalletReferendaReferendumStatusOriginCaller extends Struct {
    readonly track: u16;
    readonly origin: AssetHubPolkadotRuntimeOriginCaller;
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

  /** @name PalletElectionProviderMultiBlockError (959) */
  interface PalletElectionProviderMultiBlockError extends Enum {
    readonly isFallback: boolean;
    readonly isUnexpectedPhase: boolean;
    readonly isSnapshot: boolean;
    readonly type: 'Fallback' | 'UnexpectedPhase' | 'Snapshot';
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsValidSolution (960) */
  interface PalletElectionProviderMultiBlockVerifierImplsValidSolution extends Enum {
    readonly isX: boolean;
    readonly isY: boolean;
    readonly type: 'X' | 'Y';
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsPartialBackings (963) */
  interface PalletElectionProviderMultiBlockVerifierImplsPartialBackings extends Struct {
    readonly total: u128;
    readonly backers: u32;
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsStatus (965) */
  interface PalletElectionProviderMultiBlockVerifierImplsStatus extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: u32;
    readonly isNothing: boolean;
    readonly type: 'Ongoing' | 'Nothing';
  }

  /** @name PalletElectionProviderMultiBlockSignedSubmissionMetadata (970) */
  interface PalletElectionProviderMultiBlockSignedSubmissionMetadata extends Struct {
    readonly deposit: u128;
    readonly fee: u128;
    readonly reward: u128;
    readonly claimedScore: SpNposElectionsElectionScore;
    readonly pages: Vec<bool>;
  }

  /** @name PalletElectionProviderMultiBlockSignedPalletError (973) */
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

  /** @name PalletStakingAsyncLedgerStakingLedger (974) */
  interface PalletStakingAsyncLedgerStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: Compact<u128>;
    readonly active: Compact<u128>;
    readonly unlocking: Vec<PalletStakingAsyncLedgerUnlockChunk>;
  }

  /** @name PalletStakingAsyncNominations (975) */
  interface PalletStakingAsyncNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PalletStakingAsyncActiveEraInfo (976) */
  interface PalletStakingAsyncActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name PalletStakingAsyncPalletBoundedExposurePage (979) */
  interface PalletStakingAsyncPalletBoundedExposurePage extends SpStakingExposurePage {}

  /** @name PalletStakingAsyncEraRewardPoints (984) */
  interface PalletStakingAsyncEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: BTreeMap<AccountId32, u32>;
  }

  /** @name PalletStakingAsyncSlashingOffenceRecord (987) */
  interface PalletStakingAsyncSlashingOffenceRecord extends Struct {
    readonly reporter: Option<AccountId32>;
    readonly reportedEra: u32;
    readonly exposurePage: u32;
    readonly slashFraction: Perbill;
    readonly priorSlashFraction: Perbill;
  }

  /** @name PalletStakingAsyncUnappliedSlash (991) */
  interface PalletStakingAsyncUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[AccountId32, u128]>>;
    readonly reporter: Option<AccountId32>;
    readonly payout: u128;
  }

  /** @name PalletStakingAsyncSnapshotStatus (994) */
  interface PalletStakingAsyncSnapshotStatus extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: AccountId32;
    readonly isConsumed: boolean;
    readonly isWaiting: boolean;
    readonly type: 'Ongoing' | 'Consumed' | 'Waiting';
  }

  /** @name PalletStakingAsyncPalletPruningStep (996) */
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

  /** @name PalletStakingAsyncPalletError (997) */
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

  /** @name PalletAhOpsError (999) */
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

  /** @name PalletAhMigratorBalancesBefore (1000) */
  interface PalletAhMigratorBalancesBefore extends Struct {
    readonly checkingAccount: u128;
    readonly totalIssuance: u128;
  }

  /** @name PalletAhMigratorError (1001) */
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

  /** @name AssetHubPolkadotRuntimeRuntime (1014) */
  type AssetHubPolkadotRuntimeRuntime = Null;

  /** @name XcmVersionedAsset (1062) */
  interface XcmVersionedAsset extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiAsset;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Asset;
    readonly isV5: boolean;
    readonly asV5: StagingXcmV5Asset;
    readonly type: 'V3' | 'V4' | 'V5';
  }

  /** @name XcmRuntimeApisTrustedQueryError (1064) */
  interface XcmRuntimeApisTrustedQueryError extends Enum {
    readonly isVersionedAssetConversionFailed: boolean;
    readonly isVersionedLocationConversionFailed: boolean;
    readonly type: 'VersionedAssetConversionFailed' | 'VersionedLocationConversionFailed';
  }

  /** @name XcmRuntimeApisAuthorizedAliasesError (1066) */
  interface XcmRuntimeApisAuthorizedAliasesError extends Enum {
    readonly isLocationVersionConversionFailed: boolean;
    readonly type: 'LocationVersionConversionFailed';
  }

  /** @name AssetsCommonRuntimeApiFungiblesAccessError (1069) */
  interface AssetsCommonRuntimeApiFungiblesAccessError extends Enum {
    readonly isAssetIdConversionFailed: boolean;
    readonly isAmountToBalanceConversionFailed: boolean;
    readonly type: 'AssetIdConversionFailed' | 'AmountToBalanceConversionFailed';
  }

  /** @name CumulusPrimitivesCoreCollationInfo (1070) */
  interface CumulusPrimitivesCoreCollationInfo extends Struct {
    readonly upwardMessages: Vec<Bytes>;
    readonly horizontalMessages: Vec<PolkadotCorePrimitivesOutboundHrmpMessage>;
    readonly newValidationCode: Option<Bytes>;
    readonly processedDownwardMessages: u32;
    readonly hrmpWatermark: u32;
    readonly headData: Bytes;
  }

  /** @name AssetHubPolkadotRuntimeRuntimeError (1079) */
  interface AssetHubPolkadotRuntimeRuntimeError extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSystemError;
    readonly isParachainSystem: boolean;
    readonly asParachainSystem: CumulusPalletParachainSystemError;
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
    readonly isSnowbridgeSystemFrontend: boolean;
    readonly asSnowbridgeSystemFrontend: SnowbridgePalletSystemFrontendError;
    readonly isUtility: boolean;
    readonly asUtility: PalletUtilityError;
    readonly isMultisig: boolean;
    readonly asMultisig: PalletMultisigError;
    readonly isProxy: boolean;
    readonly asProxy: PalletProxyError;
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
    readonly isPoolAssets: boolean;
    readonly asPoolAssets: PalletAssetsError;
    readonly isAssetConversion: boolean;
    readonly asAssetConversion: PalletAssetConversionError;
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
    readonly isAhOps: boolean;
    readonly asAhOps: PalletAhOpsError;
    readonly isAhMigrator: boolean;
    readonly asAhMigrator: PalletAhMigratorError;
    readonly type: 'System' | 'ParachainSystem' | 'Preimage' | 'Scheduler' | 'Balances' | 'Vesting' | 'Claims' | 'CollatorSelection' | 'Session' | 'XcmpQueue' | 'PolkadotXcm' | 'MessageQueue' | 'SnowbridgeSystemFrontend' | 'Utility' | 'Multisig' | 'Proxy' | 'Indices' | 'Assets' | 'Uniques' | 'Nfts' | 'ForeignAssets' | 'PoolAssets' | 'AssetConversion' | 'Treasury' | 'ConvictionVoting' | 'Referenda' | 'Whitelist' | 'Bounties' | 'ChildBounties' | 'AssetRate' | 'StateTrieMigration' | 'NominationPools' | 'VoterList' | 'DelegatedStaking' | 'MultiBlockElection' | 'MultiBlockElectionSigned' | 'Staking' | 'AhOps' | 'AhMigrator';
  }

} // declare module
