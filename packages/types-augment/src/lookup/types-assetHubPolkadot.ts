// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U256, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Era } from '@polkadot/types/interfaces/extrinsics';
import type { AccountId32, H160, H256, MultiAddress, PerU16, Perbill, Percent, Perquintill } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name AssetHubPolkadotRuntimeRuntimeTask (15) */
  type AssetHubPolkadotRuntimeRuntimeTask = Null;

  /** @name CumulusPalletParachainSystemCall (17) */
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

  /** @name CumulusPalletParachainSystemParachainInherentBasicParachainInherentData (18) */
  interface CumulusPalletParachainSystemParachainInherentBasicParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV9PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly relayParentDescendants: Vec<SpRuntimeHeader>;
    readonly collatorPeerId: Option<Bytes>;
  }

  /** @name SpTrieStorageProof (21) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name CumulusPalletParachainSystemParachainInherentInboundMessagesData (32) */
  interface CumulusPalletParachainSystemParachainInherentInboundMessagesData extends Struct {
    readonly downwardMessages: {
      readonly fullMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
      readonly hashedMessages: Vec<CumulusPrimitivesParachainInherentHashedMessage>;
    } & Struct;
    readonly horizontalMessages: CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection;
  }

  /** @name CumulusPrimitivesParachainInherentHashedMessage (37) */
  interface CumulusPrimitivesParachainInherentHashedMessage extends Struct {
    readonly sentAt: u32;
    readonly msgHash: H256;
  }

  /** @name CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection (38) */
  interface CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection extends Struct {
    readonly fullMessages: Vec<ITuple<[u32, PolkadotCorePrimitivesInboundHrmpMessage]>>;
    readonly hashedMessages: Vec<ITuple<[u32, CumulusPrimitivesParachainInherentHashedMessage]>>;
  }

  /** @name StagingParachainInfoCall (47) */
  type StagingParachainInfoCall = Null;

  /** @name AssetHubPolkadotRuntimeRuntimeParameters (54) */
  interface AssetHubPolkadotRuntimeRuntimeParameters extends Enum {
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubPolkadotRuntimeDynamicParamsStakingElectionParameters;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubPolkadotRuntimeDynamicParamsSchedulerParameters;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubPolkadotRuntimeDynamicParamsMessageQueueParameters;
    readonly type: 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionParameters (55) */
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

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionSignedPhase (56) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionSignedPhase = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxSignedSubmissions (58) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxSignedSubmissions = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionUnsignedPhase (59) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionUnsignedPhase = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionMinerPages (60) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionMinerPages = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxElectingVoters (61) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxElectingVoters = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock (62) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxEraDuration (63) */
  type AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxEraDuration = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsSchedulerParameters (65) */
  interface AssetHubPolkadotRuntimeDynamicParamsSchedulerParameters extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: ITuple<[AssetHubPolkadotRuntimeDynamicParamsSchedulerMaxScheduledPerBlock, Option<u32>]>;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: ITuple<[AssetHubPolkadotRuntimeDynamicParamsSchedulerMaximumWeight, Option<SpWeightsWeightV2Weight>]>;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsSchedulerMaxScheduledPerBlock (66) */
  type AssetHubPolkadotRuntimeDynamicParamsSchedulerMaxScheduledPerBlock = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsSchedulerMaximumWeight (67) */
  type AssetHubPolkadotRuntimeDynamicParamsSchedulerMaximumWeight = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsMessageQueueParameters (70) */
  interface AssetHubPolkadotRuntimeDynamicParamsMessageQueueParameters extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: ITuple<[AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnInitWeight, Option<Option<SpWeightsWeightV2Weight>>]>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: ITuple<[AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnIdleWeight, Option<Option<SpWeightsWeightV2Weight>>]>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnInitWeight (71) */
  type AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnInitWeight = Null;

  /** @name AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnIdleWeight (73) */
  type AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnIdleWeight = Null;

  /** @name PalletDapCall (101) */
  interface PalletDapCall extends Enum {
    readonly isSetBudgetAllocation: boolean;
    readonly asSetBudgetAllocation: {
      readonly newAllocations: BTreeMap<Bytes, Perbill>;
    } & Struct;
    readonly type: 'SetBudgetAllocation';
  }

  /** @name PalletCollatorSelectionCall (108) */
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

  /** @name AssetHubPolkadotRuntimeSessionKeys (110) */
  interface AssetHubPolkadotRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraEd25519AppEd25519Public;
  }

  /** @name SpConsensusAuraEd25519AppEd25519Public (111) */
  interface SpConsensusAuraEd25519AppEd25519Public extends U8aFixed {}

  /** @name CumulusPalletXcmpQueueCall (112) */
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

  /** @name CumulusPalletXcmCall (241) */
  type CumulusPalletXcmCall = Null;

  /** @name PalletXcmBridgeHubRouterCall (242) */
  interface PalletXcmBridgeHubRouterCall extends Enum {
    readonly isReportBridgeStatus: boolean;
    readonly asReportBridgeStatus: {
      readonly bridgeId: H256;
      readonly isCongested: bool;
    } & Struct;
    readonly type: 'ReportBridgeStatus';
  }

  /** @name CumulusPrimitivesCoreAggregateMessageOrigin (244) */
  interface CumulusPrimitivesCoreAggregateMessageOrigin extends Enum {
    readonly isHere: boolean;
    readonly isParent: boolean;
    readonly isSibling: boolean;
    readonly asSibling: u32;
    readonly type: 'Here' | 'Parent' | 'Sibling';
  }

  /** @name SnowbridgePalletSystemFrontendCall (245) */
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

  /** @name SnowbridgeCoreOperatingModeBasicOperatingMode (246) */
  interface SnowbridgeCoreOperatingModeBasicOperatingMode extends Enum {
    readonly isNormal: boolean;
    readonly isHalted: boolean;
    readonly type: 'Normal' | 'Halted';
  }

  /** @name SnowbridgeCoreAssetMetadata (247) */
  interface SnowbridgeCoreAssetMetadata extends Struct {
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
  }

  /** @name SnowbridgeCoreRewardMessageId (248) */
  interface SnowbridgeCoreRewardMessageId extends Enum {
    readonly isInbound: boolean;
    readonly asInbound: u64;
    readonly isOutbound: boolean;
    readonly asOutbound: u64;
    readonly type: 'Inbound' | 'Outbound';
  }

  /** @name AssetHubPolkadotRuntimeOriginCaller (252) */
  interface AssetHubPolkadotRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: AssetHubPolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveOrigin;
    readonly type: 'System' | 'PolkadotXcm' | 'CumulusXcm' | 'Origins' | 'Revive';
  }

  /** @name CumulusPalletXcmOrigin (255) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name AssetHubPolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin (256) */
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

  /** @name PalletReviveOrigin (257) */
  interface PalletReviveOrigin extends Enum {
    readonly isEthTransaction: boolean;
    readonly asEthTransaction: AccountId32;
    readonly type: 'EthTransaction';
  }

  /** @name AssetHubPolkadotRuntimeRuntime (258) */
  type AssetHubPolkadotRuntimeRuntime = Null;

  /** @name AssetHubPolkadotRuntimeProxyType (264) */
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
    readonly isStakingOperator: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'StakingOperator';
  }

  /** @name AssetsCommonLocalAndForeignAssetsForeignAssetReserveData (301) */
  interface AssetsCommonLocalAndForeignAssetsForeignAssetReserveData extends Struct {
    readonly reserve: StagingXcmV5Location;
    readonly teleportable: bool;
  }

  /** @name ParachainsCommonPayVersionedLocatableAccount (308) */
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

  /** @name PalletMultiAssetBountiesCall (324) */
  interface PalletMultiAssetBountiesCall extends Enum {
    readonly isFundBounty: boolean;
    readonly asFundBounty: {
      readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
      readonly value: Compact<u128>;
      readonly curator: MultiAddress;
      readonly metadata: H256;
    } & Struct;
    readonly isFundChildBounty: boolean;
    readonly asFundChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly value: Compact<u128>;
      readonly metadata: H256;
      readonly curator: Option<MultiAddress>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Option<u32>;
      readonly curator: MultiAddress;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Option<u32>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Option<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Option<u32>;
      readonly beneficiary: ParachainsCommonPayVersionedLocatableAccount;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Option<u32>;
    } & Struct;
    readonly isCheckStatus: boolean;
    readonly asCheckStatus: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Option<u32>;
    } & Struct;
    readonly isRetryPayment: boolean;
    readonly asRetryPayment: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Option<u32>;
    } & Struct;
    readonly type: 'FundBounty' | 'FundChildBounty' | 'ProposeCurator' | 'AcceptCurator' | 'UnassignCurator' | 'AwardBounty' | 'CloseBounty' | 'CheckStatus' | 'RetryPayment';
  }

  /** @name PalletStakingAsyncRcClientCall (345) */
  interface PalletStakingAsyncRcClientCall extends Enum {
    readonly isRelaySessionReport: boolean;
    readonly asRelaySessionReport: {
      readonly report: PalletStakingAsyncRcClientSessionReport;
    } & Struct;
    readonly isRelayNewOffencePaged: boolean;
    readonly asRelayNewOffencePaged: {
      readonly offences: Vec<ITuple<[u32, PalletStakingAsyncRcClientOffence]>>;
    } & Struct;
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: Bytes;
      readonly proof: Bytes;
      readonly maxDeliveryAndRemoteExecutionFee: Option<u128>;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly asPurgeKeys: {
      readonly maxDeliveryAndRemoteExecutionFee: Option<u128>;
    } & Struct;
    readonly type: 'RelaySessionReport' | 'RelayNewOffencePaged' | 'SetKeys' | 'PurgeKeys';
  }

  /** @name PalletElectionProviderMultiBlockCall (354) */
  interface PalletElectionProviderMultiBlockCall extends Enum {
    readonly isManage: boolean;
    readonly asManage: {
      readonly op: PalletElectionProviderMultiBlockManagerOperation;
    } & Struct;
    readonly isAdmin: boolean;
    readonly asAdmin: {
      readonly op: PalletElectionProviderMultiBlockAdminOperation;
    } & Struct;
    readonly type: 'Manage' | 'Admin';
  }

  /** @name PalletElectionProviderMultiBlockManagerOperation (355) */
  interface PalletElectionProviderMultiBlockManagerOperation extends Enum {
    readonly isForceRotateRound: boolean;
    readonly isForceSetPhase: boolean;
    readonly asForceSetPhase: PalletElectionProviderMultiBlockPhase;
    readonly isEmergencyFallback: boolean;
    readonly type: 'ForceRotateRound' | 'ForceSetPhase' | 'EmergencyFallback';
  }

  /** @name PalletElectionProviderMultiBlockPhase (356) */
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

  /** @name PalletElectionProviderMultiBlockAdminOperation (357) */
  interface PalletElectionProviderMultiBlockAdminOperation extends Enum {
    readonly isEmergencySetSolution: boolean;
    readonly asEmergencySetSolution: ITuple<[FrameElectionProviderSupportBoundedSupports, SpNposElectionsElectionScore]>;
    readonly isSetMinUntrustedScore: boolean;
    readonly asSetMinUntrustedScore: SpNposElectionsElectionScore;
    readonly type: 'EmergencySetSolution' | 'SetMinUntrustedScore';
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsPalletCall (367) */
  type PalletElectionProviderMultiBlockVerifierImplsPalletCall = Null;

  /** @name PalletElectionProviderMultiBlockUnsignedPalletCall (368) */
  interface PalletElectionProviderMultiBlockUnsignedPalletCall extends Enum {
    readonly isSubmitUnsigned: boolean;
    readonly asSubmitUnsigned: {
      readonly pagedSolution: PalletElectionProviderMultiBlockPagedRawSolution;
    } & Struct;
    readonly type: 'SubmitUnsigned';
  }

  /** @name PalletElectionProviderMultiBlockPagedRawSolution (369) */
  interface PalletElectionProviderMultiBlockPagedRawSolution extends Struct {
    readonly solutionPages: Vec<AssetHubPolkadotRuntimeStakingNposCompactSolution16>;
    readonly score: SpNposElectionsElectionScore;
    readonly round: u32;
  }

  /** @name AssetHubPolkadotRuntimeStakingNposCompactSolution16 (371) */
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

  /** @name PalletElectionProviderMultiBlockSignedPalletCall (422) */
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

  /** @name PalletStakingAsyncPalletCall (424) */
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
      readonly areNominatorsSlashable: PalletStakingAsyncPalletConfigOpBool;
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
    readonly isSetMaxCommission: boolean;
    readonly asSetMaxCommission: {
      readonly new_: Perbill;
    } & Struct;
    readonly isSetValidatorSelfStakeIncentiveConfig: boolean;
    readonly asSetValidatorSelfStakeIncentiveConfig: {
      readonly optimumSelfStake: PalletStakingAsyncPalletConfigOpU128;
      readonly hardCapSelfStake: PalletStakingAsyncPalletConfigOpU128;
      readonly selfStakeSlopeFactor: PalletStakingAsyncPalletConfigOpPerbill;
    } & Struct;
    readonly type: 'Bond' | 'BondExtra' | 'Unbond' | 'WithdrawUnbonded' | 'Validate' | 'Nominate' | 'Chill' | 'SetPayee' | 'SetController' | 'SetValidatorCount' | 'IncreaseValidatorCount' | 'ScaleValidatorCount' | 'ForceNoEras' | 'ForceNewEra' | 'ForceUnstake' | 'ForceNewEraAlways' | 'CancelDeferredSlash' | 'PayoutStakers' | 'Rebond' | 'ReapStash' | 'Kick' | 'SetStakingConfigs' | 'ChillOther' | 'ForceApplyMinCommission' | 'SetMinCommission' | 'PayoutStakersByPage' | 'UpdatePayee' | 'DeprecateControllerBatch' | 'RestoreLedger' | 'MigrateCurrency' | 'ApplySlash' | 'PruneEraStep' | 'SetMaxCommission' | 'SetValidatorSelfStakeIncentiveConfig';
  }

  /** @name PalletStakingAsyncRewardDestination (425) */
  interface PalletStakingAsyncRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PalletStakingAsyncValidatorPrefs (426) */
  interface PalletStakingAsyncValidatorPrefs extends Struct {
    readonly commission: Compact<Perbill>;
    readonly blocked: bool;
  }

  /** @name PalletStakingAsyncPalletConfigOpU128 (432) */
  interface PalletStakingAsyncPalletConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncPalletConfigOpU32 (433) */
  interface PalletStakingAsyncPalletConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncPalletConfigOpPercent (434) */
  interface PalletStakingAsyncPalletConfigOpPercent extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Percent;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncPalletConfigOpPerbill (435) */
  interface PalletStakingAsyncPalletConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Perbill;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncPalletConfigOpBool (436) */
  interface PalletStakingAsyncPalletConfigOpBool extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: bool;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingAsyncLedgerUnlockChunk (440) */
  interface PalletStakingAsyncLedgerUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PalletAhOpsCall (448) */
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
    readonly isTranslateParaSovereignChildToSiblingDerived: boolean;
    readonly asTranslateParaSovereignChildToSiblingDerived: {
      readonly paraId: u16;
      readonly derivationPath: Vec<u16>;
      readonly oldAccount: AccountId32;
      readonly newAccount: AccountId32;
    } & Struct;
    readonly type: 'UnreserveLeaseDeposit' | 'WithdrawCrowdloanContribution' | 'UnreserveCrowdloanReserve' | 'TransferToPostMigrationTreasury' | 'TranslateParaSovereignChildToSiblingDerived';
  }

  /** @name PalletReviveEvmTxExtensionSetOrigin (463) */
  type PalletReviveEvmTxExtensionSetOrigin = Null;

  /** @name CumulusPalletParachainSystemEvent (481) */
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

  /** @name AssetHubPolkadotRuntimeRuntimeParametersKey (486) */
  interface AssetHubPolkadotRuntimeRuntimeParametersKey extends Enum {
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersKey;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersKey;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersKey;
    readonly type: 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersKey (487) */
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

  /** @name AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersKey (488) */
  interface AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersKey extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly isMaximumWeight: boolean;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersKey (489) */
  interface AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersKey extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly isMaxOnIdleWeight: boolean;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubPolkadotRuntimeRuntimeParametersValue (491) */
  interface AssetHubPolkadotRuntimeRuntimeParametersValue extends Enum {
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersValue;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersValue;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersValue;
    readonly type: 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersValue (492) */
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

  /** @name AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersValue (493) */
  interface AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersValue extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: u32;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: SpWeightsWeightV2Weight;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersValue (494) */
  interface AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersValue extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: Option<SpWeightsWeightV2Weight>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: Option<SpWeightsWeightV2Weight>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubPolkadotRuntimeRuntimeHoldReason (498) */
  interface AssetHubPolkadotRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isSession: boolean;
    readonly asSession: PalletSessionHoldReason;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmHoldReason;
    readonly isMultiAssetBounties: boolean;
    readonly asMultiAssetBounties: PalletMultiAssetBountiesHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingHoldReason;
    readonly isStakingRcClient: boolean;
    readonly asStakingRcClient: PalletStakingAsyncRcClientHoldReason;
    readonly isMultiBlockElectionSigned: boolean;
    readonly asMultiBlockElectionSigned: PalletElectionProviderMultiBlockSignedPalletHoldReason;
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingAsyncPalletHoldReason;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveHoldReason;
    readonly type: 'Preimage' | 'Session' | 'PolkadotXcm' | 'MultiAssetBounties' | 'StateTrieMigration' | 'DelegatedStaking' | 'StakingRcClient' | 'MultiBlockElectionSigned' | 'Staking' | 'Revive';
  }

  /** @name PalletMultiAssetBountiesHoldReason (502) */
  interface PalletMultiAssetBountiesHoldReason extends Enum {
    readonly isCuratorDeposit: boolean;
    readonly type: 'CuratorDeposit';
  }

  /** @name PalletStakingAsyncRcClientHoldReason (505) */
  interface PalletStakingAsyncRcClientHoldReason extends Enum {
    readonly isKeys: boolean;
    readonly type: 'Keys';
  }

  /** @name PalletElectionProviderMultiBlockSignedPalletHoldReason (506) */
  interface PalletElectionProviderMultiBlockSignedPalletHoldReason extends Enum {
    readonly isSignedSubmission: boolean;
    readonly type: 'SignedSubmission';
  }

  /** @name PalletStakingAsyncPalletHoldReason (507) */
  interface PalletStakingAsyncPalletHoldReason extends Enum {
    readonly isStaking: boolean;
    readonly type: 'Staking';
  }

  /** @name PalletDapEvent (514) */
  interface PalletDapEvent extends Enum {
    readonly isIssuanceMinted: boolean;
    readonly asIssuanceMinted: {
      readonly totalMinted: u128;
      readonly elapsedMillis: u64;
    } & Struct;
    readonly isBudgetAllocationUpdated: boolean;
    readonly asBudgetAllocationUpdated: {
      readonly allocations: BTreeMap<Bytes, Perbill>;
    } & Struct;
    readonly isStagingDrained: boolean;
    readonly asStagingDrained: {
      readonly amount: u128;
    } & Struct;
    readonly isUnexpected: boolean;
    readonly asUnexpected: PalletDapUnexpectedKind;
    readonly type: 'IssuanceMinted' | 'BudgetAllocationUpdated' | 'StagingDrained' | 'Unexpected';
  }

  /** @name PalletDapUnexpectedKind (515) */
  interface PalletDapUnexpectedKind extends Enum {
    readonly isMintFailed: boolean;
    readonly isElapsedClamped: boolean;
    readonly asElapsedClamped: {
      readonly actualElapsed: u64;
      readonly ceiling: u64;
    } & Struct;
    readonly type: 'MintFailed' | 'ElapsedClamped';
  }

  /** @name PalletCollatorSelectionEvent (516) */
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

  /** @name CumulusPalletXcmpQueueEvent (518) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly type: 'XcmpMessageSent';
  }

  /** @name CumulusPalletXcmEvent (523) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, StagingXcmV5TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name PalletXcmBridgeHubRouterEvent (524) */
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

  /** @name SnowbridgePalletSystemFrontendEvent (527) */
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

  /** @name PalletMultiAssetBountiesEvent (555) */
  interface PalletMultiAssetBountiesEvent extends Enum {
    readonly isBountyCreated: boolean;
    readonly asBountyCreated: {
      readonly index: u32;
    } & Struct;
    readonly isChildBountyCreated: boolean;
    readonly asChildBountyCreated: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: {
      readonly index: u32;
      readonly childIndex: Option<u32>;
      readonly curator: AccountId32;
    } & Struct;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: {
      readonly index: u32;
      readonly childIndex: Option<u32>;
      readonly beneficiary: ParachainsCommonPayVersionedLocatableAccount;
    } & Struct;
    readonly isBountyPayoutProcessed: boolean;
    readonly asBountyPayoutProcessed: {
      readonly index: u32;
      readonly childIndex: Option<u32>;
      readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
      readonly value: u128;
      readonly beneficiary: ParachainsCommonPayVersionedLocatableAccount;
    } & Struct;
    readonly isBountyFundingProcessed: boolean;
    readonly asBountyFundingProcessed: {
      readonly index: u32;
      readonly childIndex: Option<u32>;
    } & Struct;
    readonly isBountyRefundProcessed: boolean;
    readonly asBountyRefundProcessed: {
      readonly index: u32;
      readonly childIndex: Option<u32>;
    } & Struct;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: {
      readonly index: u32;
      readonly childIndex: Option<u32>;
    } & Struct;
    readonly isCuratorUnassigned: boolean;
    readonly asCuratorUnassigned: {
      readonly index: u32;
      readonly childIndex: Option<u32>;
    } & Struct;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly index: u32;
      readonly childIndex: Option<u32>;
      readonly curator: AccountId32;
    } & Struct;
    readonly isPaymentFailed: boolean;
    readonly asPaymentFailed: {
      readonly index: u32;
      readonly childIndex: Option<u32>;
      readonly paymentId: u64;
    } & Struct;
    readonly isPaid: boolean;
    readonly asPaid: {
      readonly index: u32;
      readonly childIndex: Option<u32>;
      readonly paymentId: u64;
    } & Struct;
    readonly type: 'BountyCreated' | 'ChildBountyCreated' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyPayoutProcessed' | 'BountyFundingProcessed' | 'BountyRefundProcessed' | 'BountyCanceled' | 'CuratorUnassigned' | 'CuratorProposed' | 'PaymentFailed' | 'Paid';
  }

  /** @name PalletStakingAsyncRcClientEvent (563) */
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
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: {
      readonly who: AccountId32;
      readonly fees: u128;
    } & Struct;
    readonly isUnexpected: boolean;
    readonly asUnexpected: PalletStakingAsyncRcClientUnexpectedKind;
    readonly type: 'SessionReportReceived' | 'OffenceReceived' | 'FeesPaid' | 'Unexpected';
  }

  /** @name PalletStakingAsyncRcClientUnexpectedKind (564) */
  interface PalletStakingAsyncRcClientUnexpectedKind extends Enum {
    readonly isSessionReportIntegrityFailed: boolean;
    readonly isValidatorSetIntegrityFailed: boolean;
    readonly isSessionSkipped: boolean;
    readonly isSessionAlreadyProcessed: boolean;
    readonly isValidatorSetSendFailed: boolean;
    readonly isValidatorSetDropped: boolean;
    readonly type: 'SessionReportIntegrityFailed' | 'ValidatorSetIntegrityFailed' | 'SessionSkipped' | 'SessionAlreadyProcessed' | 'ValidatorSetSendFailed' | 'ValidatorSetDropped';
  }

  /** @name PalletElectionProviderMultiBlockEvent (565) */
  interface PalletElectionProviderMultiBlockEvent extends Enum {
    readonly isPhaseTransitioned: boolean;
    readonly asPhaseTransitioned: {
      readonly from: PalletElectionProviderMultiBlockPhase;
      readonly to: PalletElectionProviderMultiBlockPhase;
    } & Struct;
    readonly isUnexpectedTargetSnapshotFailed: boolean;
    readonly isUnexpectedVoterSnapshotFailed: boolean;
    readonly isUnexpectedPhaseTransitionOutOfWeight: boolean;
    readonly asUnexpectedPhaseTransitionOutOfWeight: {
      readonly from: PalletElectionProviderMultiBlockPhase;
      readonly to: PalletElectionProviderMultiBlockPhase;
      readonly required: SpWeightsWeightV2Weight;
      readonly had: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnexpectedPhaseTransitionHalt: boolean;
    readonly asUnexpectedPhaseTransitionHalt: {
      readonly required: SpWeightsWeightV2Weight;
      readonly had: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'PhaseTransitioned' | 'UnexpectedTargetSnapshotFailed' | 'UnexpectedVoterSnapshotFailed' | 'UnexpectedPhaseTransitionOutOfWeight' | 'UnexpectedPhaseTransitionHalt';
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsPalletEvent (566) */
  interface PalletElectionProviderMultiBlockVerifierImplsPalletEvent extends Enum {
    readonly isVerificationFailed: boolean;
    readonly asVerificationFailed: ITuple<[u32, PalletElectionProviderMultiBlockVerifierFeasibilityError]>;
    readonly isVerified: boolean;
    readonly asVerified: ITuple<[u32, u32]>;
    readonly isQueued: boolean;
    readonly asQueued: ITuple<[SpNposElectionsElectionScore, Option<SpNposElectionsElectionScore>]>;
    readonly type: 'VerificationFailed' | 'Verified' | 'Queued';
  }

  /** @name PalletElectionProviderMultiBlockVerifierFeasibilityError (567) */
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

  /** @name SpNposElectionsError (568) */
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

  /** @name PalletElectionProviderMultiBlockSignedPalletEvent (570) */
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

  /** @name PalletStakingAsyncPalletEvent (571) */
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
    readonly isValidatorIncentivePaid: boolean;
    readonly asValidatorIncentivePaid: {
      readonly era: u32;
      readonly validatorStash: AccountId32;
      readonly dest: PalletStakingAsyncRewardDestination;
      readonly amount: u128;
    } & Struct;
    readonly isValidatorIncentiveConfigSet: boolean;
    readonly asValidatorIncentiveConfigSet: {
      readonly optimumSelfStake: u128;
      readonly hardCapSelfStake: u128;
      readonly slopeFactor: Perbill;
    } & Struct;
    readonly type: 'EraPaid' | 'Rewarded' | 'Slashed' | 'OldSlashingReportDiscarded' | 'Bonded' | 'Unbonded' | 'Withdrawn' | 'StakerRemoved' | 'Kicked' | 'Chilled' | 'PayoutStarted' | 'ValidatorPrefsSet' | 'SnapshotVotersSizeExceeded' | 'SnapshotTargetsSizeExceeded' | 'ForceEra' | 'ControllerBatchDeprecated' | 'CurrencyMigrated' | 'PagedElectionProceeded' | 'OffenceReported' | 'SlashComputed' | 'SlashCancelled' | 'SessionRotated' | 'Unexpected' | 'OffenceTooOld' | 'EraPruned' | 'ValidatorIncentivePaid' | 'ValidatorIncentiveConfigSet';
  }

  /** @name PalletStakingAsyncForcing (572) */
  interface PalletStakingAsyncForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PalletStakingAsyncPalletUnexpectedKind (574) */
  interface PalletStakingAsyncPalletUnexpectedKind extends Enum {
    readonly isEraDurationBoundExceeded: boolean;
    readonly isUnknownValidatorActivation: boolean;
    readonly isPagedElectionOutOfWeight: boolean;
    readonly asPagedElectionOutOfWeight: {
      readonly page: u32;
      readonly required: SpWeightsWeightV2Weight;
      readonly had: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isMissingPayee: boolean;
    readonly asMissingPayee: {
      readonly era: u32;
      readonly stash: AccountId32;
    } & Struct;
    readonly isValidatorIncentiveWeightMismatch: boolean;
    readonly asValidatorIncentiveWeightMismatch: {
      readonly era: u32;
    } & Struct;
    readonly isValidatorIncentiveTransferFailed: boolean;
    readonly asValidatorIncentiveTransferFailed: {
      readonly era: u32;
    } & Struct;
    readonly type: 'EraDurationBoundExceeded' | 'UnknownValidatorActivation' | 'PagedElectionOutOfWeight' | 'MissingPayee' | 'ValidatorIncentiveWeightMismatch' | 'ValidatorIncentiveTransferFailed';
  }

  /** @name PalletAhOpsEvent (576) */
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
      readonly paraId: u16;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly derivationPath: Vec<u16>;
    } & Struct;
    readonly isFailedToBond: boolean;
    readonly asFailedToBond: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'LeaseUnreserveRemaining' | 'CrowdloanUnreserveRemaining' | 'SovereignMigrated' | 'FailedToBond';
  }

  /** @name CumulusPalletWeightReclaimStorageWeightReclaim (596) */
  interface CumulusPalletWeightReclaimStorageWeightReclaim extends ITuple<[FrameSystemExtensionsAuthorizeCall, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckGenesis, Era, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckWeight, PalletAssetConversionTxPaymentChargeAssetTxPayment, PolkadotRuntimeCommonClaimsPrevalidateAttests, FrameMetadataHashExtensionCheckMetadataHash, PalletReviveEvmTxExtensionSetOrigin]> {}

  /** @name CumulusPalletParachainSystemBlockWeightBlockWeightMode (599) */
  interface CumulusPalletParachainSystemBlockWeightBlockWeightMode extends Enum {
    readonly isFullCore: boolean;
    readonly asFullCore: {
      readonly context: u32;
    } & Struct;
    readonly isPotentialFullCore: boolean;
    readonly asPotentialFullCore: {
      readonly context: u32;
      readonly firstTransactionIndex: Option<u32>;
      readonly targetWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isFractionOfCore: boolean;
    readonly asFractionOfCore: {
      readonly context: u32;
      readonly firstTransactionIndex: Option<u32>;
    } & Struct;
    readonly type: 'FullCore' | 'PotentialFullCore' | 'FractionOfCore';
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentAncestor (601) */
  interface CumulusPalletParachainSystemUnincludedSegmentAncestor extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly paraHeadHash: Option<H256>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV9UpgradeGoAhead>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth (602) */
  interface CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth extends Struct {
    readonly umpMsgCount: u32;
    readonly umpTotalBytes: u32;
    readonly hrmpOutgoing: BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate (604) */
  interface CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
    readonly msgCount: u32;
    readonly totalBytes: u32;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentSegmentTracker (609) */
  interface CumulusPalletParachainSystemUnincludedSegmentSegmentTracker extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly hrmpWatermark: Option<u32>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV9UpgradeGoAhead>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (612) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV9AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV9AbridgedHrmpChannel]>>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity (613) */
  interface CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity extends Struct {
    readonly remainingCount: u32;
    readonly remainingSize: u32;
  }

  /** @name PolkadotPrimitivesV9AbridgedHrmpChannel (616) */
  interface PolkadotPrimitivesV9AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV9AbridgedHostConfiguration (617) */
  interface PolkadotPrimitivesV9AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
    readonly asyncBackingParams: PolkadotPrimitivesV9AsyncBackingAsyncBackingParams;
  }

  /** @name CumulusPalletParachainSystemParachainInherentInboundMessageId (623) */
  interface CumulusPalletParachainSystemParachainInherentInboundMessageId extends Struct {
    readonly sentAt: u32;
    readonly reverseIdx: u32;
  }

  /** @name CumulusPalletParachainSystemPoVMessages (626) */
  interface CumulusPalletParachainSystemPoVMessages extends Struct {
    readonly relayStorageRootOrHash: H256;
    readonly coreSelector: u8;
    readonly bundleIndex: u8;
    readonly umpMsgCount: u32;
    readonly hrmpOutboundCount: u32;
    readonly hrmpOutboundRecipients: Vec<u32>;
  }

  /** @name CumulusPalletParachainSystemError (628) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled';
  }

  /** @name PalletMigrationsMbmIsOngoing (645) */
  interface PalletMigrationsMbmIsOngoing extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly isStuck: boolean;
    readonly type: 'Yes' | 'No' | 'Stuck';
  }

  /** @name PalletMigrationsMbmProgress (647) */
  interface PalletMigrationsMbmProgress extends Struct {
    readonly currentMigration: u32;
    readonly totalMigrations: u32;
    readonly currentMigrationSteps: u32;
    readonly currentMigrationMaxSteps: Option<u32>;
  }

  /** @name PalletMigrationsMbmStatus (648) */
  interface PalletMigrationsMbmStatus extends Struct {
    readonly ongoing: PalletMigrationsMbmIsOngoing;
    readonly progress: Option<PalletMigrationsMbmProgress>;
    readonly prefixes: Vec<Bytes>;
  }

  /** @name AssetHubPolkadotRuntimeRuntimeFreezeReason (661) */
  interface AssetHubPolkadotRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveFreezeReason;
    readonly type: 'NominationPools' | 'Revive';
  }

  /** @name PalletReviveFreezeReason (663) */
  interface PalletReviveFreezeReason extends Enum {
    readonly isPGasMinBalance: boolean;
    readonly type: 'PGasMinBalance';
  }

  /** @name PalletDapError (675) */
  interface PalletDapError extends Enum {
    readonly isUnknownBudgetKey: boolean;
    readonly isBudgetNotExact: boolean;
    readonly type: 'UnknownBudgetKey' | 'BudgetNotExact';
  }

  /** @name PalletCollatorSelectionCandidateInfo (680) */
  interface PalletCollatorSelectionCandidateInfo extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletCollatorSelectionError (682) */
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

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (698) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
    readonly flags: CumulusPalletXcmpQueueOutboundChannelFlags;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (699) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelFlags (700) */
  interface CumulusPalletXcmpQueueOutboundChannelFlags extends Struct {
    readonly bits: u32;
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (704) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
  }

  /** @name CumulusPalletXcmpQueueError (705) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isBadQueueConfig: boolean;
    readonly isAlreadySuspended: boolean;
    readonly isAlreadyResumed: boolean;
    readonly isTooManyActiveOutboundChannels: boolean;
    readonly isTooBig: boolean;
    readonly type: 'BadQueueConfig' | 'AlreadySuspended' | 'AlreadyResumed' | 'TooManyActiveOutboundChannels' | 'TooBig';
  }

  /** @name BpXcmBridgeHubRouterBridgeState (733) */
  interface BpXcmBridgeHubRouterBridgeState extends Struct {
    readonly deliveryFeeFactor: u128;
    readonly isCongested: bool;
  }

  /** @name SnowbridgePalletSystemFrontendError (741) */
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

  /** @name PalletMultiAssetBountiesBounty (860) */
  interface PalletMultiAssetBountiesBounty extends Struct {
    readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
    readonly value: u128;
    readonly metadata: H256;
    readonly status: PalletMultiAssetBountiesBountyStatus;
  }

  /** @name PalletMultiAssetBountiesBountyStatus (861) */
  interface PalletMultiAssetBountiesBountyStatus extends Enum {
    readonly isFundingAttempted: boolean;
    readonly asFundingAttempted: {
      readonly curator: AccountId32;
      readonly paymentStatus: PalletMultiAssetBountiesPaymentState;
    } & Struct;
    readonly isFunded: boolean;
    readonly asFunded: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isCuratorUnassigned: boolean;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isRefundAttempted: boolean;
    readonly asRefundAttempted: {
      readonly curator: Option<AccountId32>;
      readonly paymentStatus: PalletMultiAssetBountiesPaymentState;
    } & Struct;
    readonly isPayoutAttempted: boolean;
    readonly asPayoutAttempted: {
      readonly curator: AccountId32;
      readonly beneficiary: ParachainsCommonPayVersionedLocatableAccount;
      readonly paymentStatus: PalletMultiAssetBountiesPaymentState;
    } & Struct;
    readonly type: 'FundingAttempted' | 'Funded' | 'CuratorUnassigned' | 'Active' | 'RefundAttempted' | 'PayoutAttempted';
  }

  /** @name PalletMultiAssetBountiesPaymentState (862) */
  interface PalletMultiAssetBountiesPaymentState extends Enum {
    readonly isPending: boolean;
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly id: u64;
    } & Struct;
    readonly isFailed: boolean;
    readonly isSucceeded: boolean;
    readonly type: 'Pending' | 'Attempted' | 'Failed' | 'Succeeded';
  }

  /** @name PalletMultiAssetBountiesChildBounty (863) */
  interface PalletMultiAssetBountiesChildBounty extends Struct {
    readonly parentBounty: u32;
    readonly value: u128;
    readonly metadata: H256;
    readonly status: PalletMultiAssetBountiesBountyStatus;
  }

  /** @name PalletMultiAssetBountiesError (866) */
  interface PalletMultiAssetBountiesError extends Enum {
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isInvalidValue: boolean;
    readonly isFailedToConvertBalance: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isFundingError: boolean;
    readonly isRefundError: boolean;
    readonly isPayoutError: boolean;
    readonly isFundingInconclusive: boolean;
    readonly isRefundInconclusive: boolean;
    readonly isPayoutInconclusive: boolean;
    readonly isFailedToConvertSource: boolean;
    readonly isHasActiveChildBounty: boolean;
    readonly isTooManyChildBounties: boolean;
    readonly isInsufficientBountyValue: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'InvalidIndex' | 'ReasonTooBig' | 'InvalidValue' | 'FailedToConvertBalance' | 'UnexpectedStatus' | 'RequireCurator' | 'InsufficientPermission' | 'FundingError' | 'RefundError' | 'PayoutError' | 'FundingInconclusive' | 'RefundInconclusive' | 'PayoutInconclusive' | 'FailedToConvertSource' | 'HasActiveChildBounty' | 'TooManyChildBounties' | 'InsufficientBountyValue' | 'PreimageNotExist';
  }

  /** @name PalletStakingAsyncRcClientError (894) */
  interface PalletStakingAsyncRcClientError extends Enum {
    readonly isXcmSendFailed: boolean;
    readonly isNotValidator: boolean;
    readonly isInvalidKeys: boolean;
    readonly isInvalidProof: boolean;
    readonly isFeesExceededMax: boolean;
    readonly type: 'XcmSendFailed' | 'NotValidator' | 'InvalidKeys' | 'InvalidProof' | 'FeesExceededMax';
  }

  /** @name PalletElectionProviderMultiBlockError (900) */
  interface PalletElectionProviderMultiBlockError extends Enum {
    readonly isFallback: boolean;
    readonly isUnexpectedPhase: boolean;
    readonly isSnapshot: boolean;
    readonly type: 'Fallback' | 'UnexpectedPhase' | 'Snapshot';
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsValidSolution (901) */
  interface PalletElectionProviderMultiBlockVerifierImplsValidSolution extends Enum {
    readonly isX: boolean;
    readonly isY: boolean;
    readonly type: 'X' | 'Y';
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsPartialBackings (904) */
  interface PalletElectionProviderMultiBlockVerifierImplsPartialBackings extends Struct {
    readonly total: u128;
    readonly backers: u32;
  }

  /** @name PalletElectionProviderMultiBlockVerifierImplsStatus (906) */
  interface PalletElectionProviderMultiBlockVerifierImplsStatus extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: u32;
    readonly isNothing: boolean;
    readonly type: 'Ongoing' | 'Nothing';
  }

  /** @name PalletElectionProviderMultiBlockSignedSubmissionMetadata (911) */
  interface PalletElectionProviderMultiBlockSignedSubmissionMetadata extends Struct {
    readonly deposit: u128;
    readonly fee: u128;
    readonly reward: u128;
    readonly claimedScore: SpNposElectionsElectionScore;
    readonly pages: Vec<bool>;
  }

  /** @name PalletElectionProviderMultiBlockSignedPalletError (914) */
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

  /** @name PalletStakingAsyncLedgerStakingLedger (915) */
  interface PalletStakingAsyncLedgerStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: Compact<u128>;
    readonly active: Compact<u128>;
    readonly unlocking: Vec<PalletStakingAsyncLedgerUnlockChunk>;
  }

  /** @name PalletStakingAsyncNominations (916) */
  interface PalletStakingAsyncNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PalletStakingAsyncActiveEraInfo (917) */
  interface PalletStakingAsyncActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name PalletStakingAsyncPalletBoundedExposurePage (920) */
  interface PalletStakingAsyncPalletBoundedExposurePage extends SpStakingExposurePage {}

  /** @name PalletStakingAsyncEraRewardPoints (925) */
  interface PalletStakingAsyncEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: BTreeMap<AccountId32, u32>;
  }

  /** @name PalletStakingAsyncSlashingOffenceRecord (928) */
  interface PalletStakingAsyncSlashingOffenceRecord extends Struct {
    readonly reporter: Option<AccountId32>;
    readonly reportedEra: u32;
    readonly exposurePage: u32;
    readonly slashFraction: Perbill;
    readonly priorSlashFraction: Perbill;
  }

  /** @name PalletStakingAsyncUnappliedSlash (932) */
  interface PalletStakingAsyncUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[AccountId32, u128]>>;
    readonly reporter: Option<AccountId32>;
    readonly payout: u128;
  }

  /** @name PalletStakingAsyncSnapshotStatus (936) */
  interface PalletStakingAsyncSnapshotStatus extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: AccountId32;
    readonly isConsumed: boolean;
    readonly isWaiting: boolean;
    readonly type: 'Ongoing' | 'Consumed' | 'Waiting';
  }

  /** @name PalletStakingAsyncPalletPruningStep (938) */
  interface PalletStakingAsyncPalletPruningStep extends Enum {
    readonly isErasStakersPaged: boolean;
    readonly isErasStakersOverview: boolean;
    readonly isErasValidatorPrefs: boolean;
    readonly isClaimedRewards: boolean;
    readonly isErasValidatorReward: boolean;
    readonly isErasRewardPoints: boolean;
    readonly isSingleEntryCleanups: boolean;
    readonly isValidatorSlashInEra: boolean;
    readonly isErasValidatorIncentiveWeight: boolean;
    readonly type: 'ErasStakersPaged' | 'ErasStakersOverview' | 'ErasValidatorPrefs' | 'ClaimedRewards' | 'ErasValidatorReward' | 'ErasRewardPoints' | 'SingleEntryCleanups' | 'ValidatorSlashInEra' | 'ErasValidatorIncentiveWeight';
  }

  /** @name PalletStakingAsyncPalletError (939) */
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
    readonly isCommissionTooHigh: boolean;
    readonly isOptimumGreaterThanCap: boolean;
    readonly type: 'NotController' | 'NotStash' | 'AlreadyBonded' | 'AlreadyPaired' | 'EmptyTargets' | 'DuplicateIndex' | 'InvalidSlashRecord' | 'InsufficientBond' | 'NoMoreChunks' | 'NoUnlockChunk' | 'FundedTarget' | 'InvalidEraToReward' | 'InvalidNumberOfNominations' | 'AlreadyClaimed' | 'InvalidPage' | 'IncorrectHistoryDepth' | 'BadState' | 'TooManyTargets' | 'BadTarget' | 'CannotChillOther' | 'TooManyNominators' | 'TooManyValidators' | 'CommissionTooLow' | 'BoundNotMet' | 'ControllerDeprecated' | 'CannotRestoreLedger' | 'RewardDestinationRestricted' | 'NotEnoughFunds' | 'VirtualStakerNotAllowed' | 'CannotReapStash' | 'AlreadyMigrated' | 'EraNotStarted' | 'Restricted' | 'UnappliedSlashesInPreviousEra' | 'EraNotPrunable' | 'CancelledSlash' | 'CommissionTooHigh' | 'OptimumGreaterThanCap';
  }

  /** @name PalletStakingAsyncRewardPot (940) */
  interface PalletStakingAsyncRewardPot extends Enum {
    readonly isGeneral: boolean;
    readonly asGeneral: PalletStakingAsyncRewardKind;
    readonly isEra: boolean;
    readonly asEra: ITuple<[u32, PalletStakingAsyncRewardKind]>;
    readonly type: 'General' | 'Era';
  }

  /** @name PalletStakingAsyncRewardKind (941) */
  interface PalletStakingAsyncRewardKind extends Enum {
    readonly isStakerRewards: boolean;
    readonly isValidatorSelfStake: boolean;
    readonly type: 'StakerRewards' | 'ValidatorSelfStake';
  }

  /** @name PalletStakingAsyncRewardEraRewardAllocation (942) */
  interface PalletStakingAsyncRewardEraRewardAllocation extends Struct {
    readonly stakerRewards: u128;
    readonly validatorIncentive: u128;
  }

  /** @name PalletReviveVmCodeInfo (943) */
  interface PalletReviveVmCodeInfo extends Struct {
    readonly owner: AccountId32;
    readonly deposit: Compact<u128>;
    readonly refcount: Compact<u64>;
    readonly codeLen: u32;
    readonly codeType: PalletReviveVmBytecodeType;
    readonly behaviourVersion: u32;
  }

  /** @name PalletReviveVmBytecodeType (944) */
  interface PalletReviveVmBytecodeType extends Enum {
    readonly isPvm: boolean;
    readonly isEvm: boolean;
    readonly type: 'Pvm' | 'Evm';
  }

  /** @name PalletReviveStorageAccountInfo (945) */
  interface PalletReviveStorageAccountInfo extends Struct {
    readonly accountType: PalletReviveStorageAccountType;
    readonly dust: u32;
  }

  /** @name PalletReviveStorageAccountType (946) */
  interface PalletReviveStorageAccountType extends Enum {
    readonly isContract: boolean;
    readonly asContract: PalletReviveStorageContractInfo;
    readonly isEoa: boolean;
    readonly type: 'Contract' | 'Eoa';
  }

  /** @name PalletReviveStorageDeletionQueueItem (950) */
  interface PalletReviveStorageDeletionQueueItem extends Struct {
    readonly trieId: Bytes;
    readonly accountId: AccountId32;
  }

  /** @name PalletReviveEvmApiRpcTypesGenBlock (952) */
  interface PalletReviveEvmApiRpcTypesGenBlock extends Struct {
    readonly baseFeePerGas: U256;
    readonly blobGasUsed: U256;
    readonly difficulty: U256;
    readonly excessBlobGas: U256;
    readonly extraData: Bytes;
    readonly gasLimit: U256;
    readonly gasUsed: U256;
    readonly hash_: H256;
    readonly logsBloom: PalletReviveEvmApiByteBytes256;
    readonly miner: H160;
    readonly mixHash: H256;
    readonly nonce: PalletReviveEvmApiByteBytes8;
    readonly number: U256;
    readonly parentBeaconBlockRoot: Option<H256>;
    readonly parentHash: H256;
    readonly receiptsRoot: H256;
    readonly requestsHash: Option<H256>;
    readonly sha3Uncles: H256;
    readonly size_: U256;
    readonly stateRoot: H256;
    readonly timestamp: U256;
    readonly totalDifficulty: Option<U256>;
    readonly transactions: PalletReviveEvmApiRpcTypesGenHashesOrTransactionInfos;
    readonly transactionsRoot: H256;
    readonly uncles: Vec<H256>;
    readonly withdrawals: Vec<PalletReviveEvmApiRpcTypesGenWithdrawal>;
    readonly withdrawalsRoot: H256;
  }

  /** @name PalletReviveEvmApiByteBytes256 (954) */
  interface PalletReviveEvmApiByteBytes256 extends U8aFixed {}

  /** @name PalletReviveEvmApiByteBytes8 (956) */
  interface PalletReviveEvmApiByteBytes8 extends U8aFixed {}

  /** @name PalletReviveEvmApiRpcTypesGenHashesOrTransactionInfos (958) */
  interface PalletReviveEvmApiRpcTypesGenHashesOrTransactionInfos extends Enum {
    readonly isHashes: boolean;
    readonly asHashes: Vec<H256>;
    readonly isTransactionInfos: boolean;
    readonly asTransactionInfos: Vec<PalletReviveEvmApiRpcTypesGenTransactionInfo>;
    readonly type: 'Hashes' | 'TransactionInfos';
  }

  /** @name PalletReviveEvmApiRpcTypesGenTransactionInfo (960) */
  interface PalletReviveEvmApiRpcTypesGenTransactionInfo extends Struct {
    readonly blockHash: H256;
    readonly blockNumber: U256;
    readonly from: H160;
    readonly hash_: H256;
    readonly transactionIndex: U256;
    readonly transactionSigned: PalletReviveEvmApiRpcTypesGenTransactionSigned;
  }

  /** @name PalletReviveEvmApiRpcTypesGenTransactionSigned (961) */
  interface PalletReviveEvmApiRpcTypesGenTransactionSigned extends Enum {
    readonly isTransaction7702Signed: boolean;
    readonly asTransaction7702Signed: PalletReviveEvmApiRpcTypesGenTransaction7702Signed;
    readonly isTransaction4844Signed: boolean;
    readonly asTransaction4844Signed: PalletReviveEvmApiRpcTypesGenTransaction4844Signed;
    readonly isTransaction1559Signed: boolean;
    readonly asTransaction1559Signed: PalletReviveEvmApiRpcTypesGenTransaction1559Signed;
    readonly isTransaction2930Signed: boolean;
    readonly asTransaction2930Signed: PalletReviveEvmApiRpcTypesGenTransaction2930Signed;
    readonly isTransactionLegacySigned: boolean;
    readonly asTransactionLegacySigned: PalletReviveEvmApiRpcTypesGenTransactionLegacySigned;
    readonly type: 'Transaction7702Signed' | 'Transaction4844Signed' | 'Transaction1559Signed' | 'Transaction2930Signed' | 'TransactionLegacySigned';
  }

  /** @name PalletReviveEvmApiRpcTypesGenTransaction7702Signed (962) */
  interface PalletReviveEvmApiRpcTypesGenTransaction7702Signed extends Struct {
    readonly transaction7702Unsigned: PalletReviveEvmApiRpcTypesGenTransaction7702Unsigned;
    readonly r: U256;
    readonly s: U256;
    readonly v: Option<U256>;
    readonly yParity: U256;
  }

  /** @name PalletReviveEvmApiRpcTypesGenTransaction7702Unsigned (963) */
  interface PalletReviveEvmApiRpcTypesGenTransaction7702Unsigned extends Struct {
    readonly accessList: Vec<PalletReviveEvmApiRpcTypesGenAccessListEntry>;
    readonly authorizationList: Vec<PalletReviveEvmApiRpcTypesGenAuthorizationListEntry>;
    readonly chainId: U256;
    readonly gas: U256;
    readonly input: Bytes;
    readonly maxFeePerGas: U256;
    readonly maxPriorityFeePerGas: U256;
    readonly nonce: U256;
    readonly to: H160;
    readonly r_type: u8;
    readonly value: U256;
  }

  /** @name PalletReviveEvmApiRpcTypesGenAuthorizationListEntry (967) */
  interface PalletReviveEvmApiRpcTypesGenAuthorizationListEntry extends Struct {
    readonly chainId: U256;
    readonly address: H160;
    readonly nonce: U256;
    readonly yParity: U256;
    readonly r: U256;
    readonly s: U256;
  }

  /** @name PalletReviveEvmApiRpcTypesGenTransaction4844Signed (968) */
  interface PalletReviveEvmApiRpcTypesGenTransaction4844Signed extends Struct {
    readonly transaction4844Unsigned: PalletReviveEvmApiRpcTypesGenTransaction4844Unsigned;
    readonly r: U256;
    readonly s: U256;
    readonly yParity: U256;
  }

  /** @name PalletReviveEvmApiRpcTypesGenTransaction4844Unsigned (969) */
  interface PalletReviveEvmApiRpcTypesGenTransaction4844Unsigned extends Struct {
    readonly accessList: Vec<PalletReviveEvmApiRpcTypesGenAccessListEntry>;
    readonly blobVersionedHashes: Vec<H256>;
    readonly chainId: U256;
    readonly gas: U256;
    readonly input: Bytes;
    readonly maxFeePerBlobGas: U256;
    readonly maxFeePerGas: U256;
    readonly maxPriorityFeePerGas: U256;
    readonly nonce: U256;
    readonly to: H160;
    readonly r_type: u8;
    readonly value: U256;
  }

  /** @name PalletReviveEvmApiRpcTypesGenTransaction1559Signed (970) */
  interface PalletReviveEvmApiRpcTypesGenTransaction1559Signed extends Struct {
    readonly transaction1559Unsigned: PalletReviveEvmApiRpcTypesGenTransaction1559Unsigned;
    readonly r: U256;
    readonly s: U256;
    readonly v: Option<U256>;
    readonly yParity: U256;
  }

  /** @name PalletReviveEvmApiRpcTypesGenTransaction1559Unsigned (971) */
  interface PalletReviveEvmApiRpcTypesGenTransaction1559Unsigned extends Struct {
    readonly accessList: Vec<PalletReviveEvmApiRpcTypesGenAccessListEntry>;
    readonly chainId: U256;
    readonly gas: U256;
    readonly gasPrice: U256;
    readonly input: Bytes;
    readonly maxFeePerGas: U256;
    readonly maxPriorityFeePerGas: U256;
    readonly nonce: U256;
    readonly to: Option<H160>;
    readonly r_type: u8;
    readonly value: U256;
  }

  /** @name PalletReviveEvmApiRpcTypesGenTransaction2930Signed (973) */
  interface PalletReviveEvmApiRpcTypesGenTransaction2930Signed extends Struct {
    readonly transaction2930Unsigned: PalletReviveEvmApiRpcTypesGenTransaction2930Unsigned;
    readonly r: U256;
    readonly s: U256;
    readonly v: Option<U256>;
    readonly yParity: U256;
  }

  /** @name PalletReviveEvmApiRpcTypesGenTransaction2930Unsigned (974) */
  interface PalletReviveEvmApiRpcTypesGenTransaction2930Unsigned extends Struct {
    readonly accessList: Vec<PalletReviveEvmApiRpcTypesGenAccessListEntry>;
    readonly chainId: U256;
    readonly gas: U256;
    readonly gasPrice: U256;
    readonly input: Bytes;
    readonly nonce: U256;
    readonly to: Option<H160>;
    readonly r_type: u8;
    readonly value: U256;
  }

  /** @name PalletReviveEvmApiRpcTypesGenTransactionLegacySigned (975) */
  interface PalletReviveEvmApiRpcTypesGenTransactionLegacySigned extends Struct {
    readonly transactionLegacyUnsigned: PalletReviveEvmApiRpcTypesGenTransactionLegacyUnsigned;
    readonly r: U256;
    readonly s: U256;
    readonly v: U256;
  }

  /** @name PalletReviveEvmApiRpcTypesGenTransactionLegacyUnsigned (976) */
  interface PalletReviveEvmApiRpcTypesGenTransactionLegacyUnsigned extends Struct {
    readonly chainId: Option<U256>;
    readonly gas: U256;
    readonly gasPrice: U256;
    readonly input: Bytes;
    readonly nonce: U256;
    readonly to: Option<H160>;
    readonly r_type: u8;
    readonly value: U256;
  }

  /** @name PalletReviveEvmApiRpcTypesGenWithdrawal (978) */
  interface PalletReviveEvmApiRpcTypesGenWithdrawal extends Struct {
    readonly address: H160;
    readonly amount: U256;
    readonly index: U256;
    readonly validatorIndex: U256;
  }

  /** @name PalletReviveEvmBlockHashReceiptGasInfo (980) */
  interface PalletReviveEvmBlockHashReceiptGasInfo extends Struct {
    readonly gasUsed: U256;
    readonly effectiveGasPrice: U256;
  }

  /** @name PalletReviveEvmBlockHashBlockBuilderEthereumBlockBuilderIR (981) */
  interface PalletReviveEvmBlockHashBlockBuilderEthereumBlockBuilderIR extends Struct {
    readonly transactionRootBuilder: PalletReviveEvmBlockHashHashBuilderIncrementalHashBuilderIR;
    readonly receiptsRootBuilder: PalletReviveEvmBlockHashHashBuilderIncrementalHashBuilderIR;
    readonly baseFeePerGas: U256;
    readonly blockGasLimit: U256;
    readonly gasUsed: U256;
    readonly logsBloom: U8aFixed;
    readonly txHashes: Vec<H256>;
    readonly gasInfo: Vec<PalletReviveEvmBlockHashReceiptGasInfo>;
  }

  /** @name PalletReviveEvmBlockHashHashBuilderIncrementalHashBuilderIR (982) */
  interface PalletReviveEvmBlockHashHashBuilderIncrementalHashBuilderIR extends Struct {
    readonly key: Bytes;
    readonly valueType: u8;
    readonly builderValue: Bytes;
    readonly stack: Vec<Bytes>;
    readonly stateMasks: Vec<u16>;
    readonly treeMasks: Vec<u16>;
    readonly hashMasks: Vec<u16>;
    readonly storedInDatabase: bool;
    readonly rlpBuf: Bytes;
    readonly index: u64;
  }

  /** @name PalletReviveDebugDebugSettings (984) */
  interface PalletReviveDebugDebugSettings extends Struct {
    readonly allowUnlimitedContractSize: bool;
    readonly bypassEip3607: bool;
    readonly pvmLogs: bool;
    readonly disableExecutionTracing: bool;
  }

  /** @name PalletAssetsPrecompilesPermitPalletError (987) */
  interface PalletAssetsPrecompilesPermitPalletError extends Enum {
    readonly isInvalidSignature: boolean;
    readonly isSignerMismatch: boolean;
    readonly isPermitExpired: boolean;
    readonly isSignatureSValueTooHigh: boolean;
    readonly isInvalidVValue: boolean;
    readonly isNonceOverflow: boolean;
    readonly isInvalidOwner: boolean;
    readonly isInvalidSpender: boolean;
    readonly type: 'InvalidSignature' | 'SignerMismatch' | 'PermitExpired' | 'SignatureSValueTooHigh' | 'InvalidVValue' | 'NonceOverflow' | 'InvalidOwner' | 'InvalidSpender';
  }

  /** @name PalletAhOpsError (989) */
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
    readonly isFailedToTransfer: boolean;
    readonly isAlreadyTranslated: boolean;
    readonly isTooLongDerivationPath: boolean;
    readonly isFailedToForceUnstake: boolean;
    readonly type: 'NoLeaseReserve' | 'NoCrowdloanContribution' | 'NoCrowdloanReserve' | 'FailedToWithdrawCrowdloanContribution' | 'NotYet' | 'ContributionsRemaining' | 'WrongDerivedTranslation' | 'NotSovereign' | 'InternalError' | 'MigrationNotCompleted' | 'ZeroBalance' | 'FailedToTransfer' | 'AlreadyTranslated' | 'TooLongDerivationPath' | 'FailedToForceUnstake';
  }

  /** @name XcmVersionedAsset (1038) */
  interface XcmVersionedAsset extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiAsset;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Asset;
    readonly isV5: boolean;
    readonly asV5: StagingXcmV5Asset;
    readonly type: 'V3' | 'V4' | 'V5';
  }

  /** @name XcmRuntimeApisTrustedQueryError (1040) */
  interface XcmRuntimeApisTrustedQueryError extends Enum {
    readonly isVersionedAssetConversionFailed: boolean;
    readonly isVersionedLocationConversionFailed: boolean;
    readonly type: 'VersionedAssetConversionFailed' | 'VersionedLocationConversionFailed';
  }

  /** @name XcmRuntimeApisAuthorizedAliasesError (1042) */
  interface XcmRuntimeApisAuthorizedAliasesError extends Enum {
    readonly isLocationVersionConversionFailed: boolean;
    readonly type: 'LocationVersionConversionFailed';
  }

  /** @name AssetsCommonRuntimeApiFungiblesAccessError (1045) */
  interface AssetsCommonRuntimeApiFungiblesAccessError extends Enum {
    readonly isAssetIdConversionFailed: boolean;
    readonly isAmountToBalanceConversionFailed: boolean;
    readonly type: 'AssetIdConversionFailed' | 'AmountToBalanceConversionFailed';
  }

  /** @name CumulusPrimitivesCoreCollationInfo (1046) */
  interface CumulusPrimitivesCoreCollationInfo extends Struct {
    readonly upwardMessages: Vec<Bytes>;
    readonly horizontalMessages: Vec<PolkadotCorePrimitivesOutboundHrmpMessage>;
    readonly newValidationCode: Option<Bytes>;
    readonly processedDownwardMessages: u32;
    readonly hrmpWatermark: u32;
    readonly headData: Bytes;
  }

  /** @name SystemParachainsCommonApisInflationInfo (1053) */
  interface SystemParachainsCommonApisInflationInfo extends Struct {
    readonly issuance: Perquintill;
    readonly nextMint: ITuple<[u128, u128]>;
  }

  /** @name PalletReviveEvmApiRpcTypesDryRunConfig (1074) */
  interface PalletReviveEvmApiRpcTypesDryRunConfig extends Struct {
    readonly timestampOverride: Option<u64>;
    readonly performBalanceChecks: Option<bool>;
    readonly stateOverrides: Option<PalletReviveEvmApiRpcTypesGenStateOverrideSet>;
  }

  /** @name PalletReviveEvmApiRpcTypesGenStateOverrideSet (1077) */
  interface PalletReviveEvmApiRpcTypesGenStateOverrideSet extends BTreeMap<H160, PalletReviveEvmApiRpcTypesGenStateOverride> {}

  /** @name PalletReviveEvmApiRpcTypesGenStateOverride (1079) */
  interface PalletReviveEvmApiRpcTypesGenStateOverride extends Struct {
    readonly balance: Option<U256>;
    readonly nonce: Option<U256>;
    readonly code: Option<Bytes>;
    readonly storage: Option<PalletReviveEvmApiRpcTypesGenStorageOverride>;
    readonly movePrecompileToAddress: Option<H160>;
  }

  /** @name PalletReviveEvmApiRpcTypesGenStorageOverride (1081) */
  interface PalletReviveEvmApiRpcTypesGenStorageOverride extends Enum {
    readonly isState: boolean;
    readonly asState: BTreeMap<H256, H256>;
    readonly isStateDiff: boolean;
    readonly asStateDiff: BTreeMap<H256, H256>;
    readonly type: 'State' | 'StateDiff';
  }

  /** @name PalletReviveEvmApiDebugRpcTypesPrestateTracerConfig (1097) */
  interface PalletReviveEvmApiDebugRpcTypesPrestateTracerConfig extends Struct {
    readonly diffMode: bool;
    readonly disableStorage: bool;
    readonly disableCode: bool;
  }

  /** @name PalletReviveEvmApiDebugRpcTypesExecutionTracerConfig (1099) */
  interface PalletReviveEvmApiDebugRpcTypesExecutionTracerConfig extends Struct {
    readonly enableMemory: bool;
    readonly disableStack: bool;
    readonly disableStorage: bool;
    readonly enableReturnData: bool;
    readonly disableSyscallDetails: bool;
    readonly limit: Option<u64>;
    readonly memoryWordLimit: u32;
  }

  /** @name PalletReviveEvmApiDebugRpcTypesPrestateTrace (1108) */
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

  /** @name PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo (1110) */
  interface PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo extends Struct {
    readonly balance: Option<U256>;
    readonly nonce: Option<u32>;
    readonly code: Option<Bytes>;
    readonly storage: BTreeMap<Bytes, Option<Bytes>>;
  }

  /** @name PalletReviveEvmApiDebugRpcTypesExecutionTrace (1116) */
  interface PalletReviveEvmApiDebugRpcTypesExecutionTrace extends Struct {
    readonly gas: u64;
    readonly weightConsumed: SpWeightsWeightV2Weight;
    readonly baseCallWeight: SpWeightsWeightV2Weight;
    readonly failed: bool;
    readonly returnValue: Bytes;
    readonly structLogs: Vec<PalletReviveEvmApiDebugRpcTypesExecutionStep>;
  }

  /** @name PalletReviveEvmApiDebugRpcTypesExecutionStep (1118) */
  interface PalletReviveEvmApiDebugRpcTypesExecutionStep extends Struct {
    readonly gas: Compact<u64>;
    readonly gasCost: Compact<u64>;
    readonly weightCost: SpWeightsWeightV2Weight;
    readonly depth: u16;
    readonly returnData: Bytes;
    readonly error: Option<Text>;
    readonly kind: PalletReviveEvmApiDebugRpcTypesExecutionStepKind;
  }

  /** @name PalletReviveEvmApiDebugRpcTypesExecutionStepKind (1119) */
  interface PalletReviveEvmApiDebugRpcTypesExecutionStepKind extends Enum {
    readonly isEvmOpcode: boolean;
    readonly asEvmOpcode: {
      readonly pc: Compact<u32>;
      readonly op: u8;
      readonly stack: Vec<Bytes>;
      readonly memory: Vec<Bytes>;
      readonly storage: Option<BTreeMap<Bytes, Bytes>>;
    } & Struct;
    readonly isPvmSyscall: boolean;
    readonly asPvmSyscall: {
      readonly op: u8;
      readonly args: Vec<u64>;
      readonly returned: Option<u64>;
    } & Struct;
    readonly type: 'EvmOpcode' | 'PvmSyscall';
  }

  /** @name PalletReviveEvmApiRpcTypesTracingConfig (1126) */
  interface PalletReviveEvmApiRpcTypesTracingConfig extends Struct {
    readonly stateOverrides: Option<PalletReviveEvmApiRpcTypesGenStateOverrideSet>;
  }

  /** @name PalletRevivePrimitivesBalanceConversionError (1129) */
  interface PalletRevivePrimitivesBalanceConversionError extends Enum {
    readonly isValue: boolean;
    readonly isDust: boolean;
    readonly type: 'Value' | 'Dust';
  }

  /** @name AssetHubPolkadotRuntimeRuntimeError (1130) */
  interface AssetHubPolkadotRuntimeRuntimeError extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSystemError;
    readonly isParachainSystem: boolean;
    readonly asParachainSystem: CumulusPalletParachainSystemError;
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageError;
    readonly isScheduler: boolean;
    readonly asScheduler: PalletSchedulerError;
    readonly isMultiBlockMigrations: boolean;
    readonly asMultiBlockMigrations: PalletMigrationsError;
    readonly isBalances: boolean;
    readonly asBalances: PalletBalancesError;
    readonly isVesting: boolean;
    readonly asVesting: PalletVestingError;
    readonly isClaims: boolean;
    readonly asClaims: PolkadotRuntimeCommonClaimsPalletError;
    readonly isDap: boolean;
    readonly asDap: PalletDapError;
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
    readonly isMultiAssetBounties: boolean;
    readonly asMultiAssetBounties: PalletMultiAssetBountiesError;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationError;
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsError;
    readonly isVoterList: boolean;
    readonly asVoterList: PalletBagsListError;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingError;
    readonly isStakingRcClient: boolean;
    readonly asStakingRcClient: PalletStakingAsyncRcClientError;
    readonly isMultiBlockElection: boolean;
    readonly asMultiBlockElection: PalletElectionProviderMultiBlockError;
    readonly isMultiBlockElectionSigned: boolean;
    readonly asMultiBlockElectionSigned: PalletElectionProviderMultiBlockSignedPalletError;
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingAsyncPalletError;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveError;
    readonly isAssetsPrecompilesPermit: boolean;
    readonly asAssetsPrecompilesPermit: PalletAssetsPrecompilesPermitPalletError;
    readonly isAhOps: boolean;
    readonly asAhOps: PalletAhOpsError;
    readonly type: 'System' | 'ParachainSystem' | 'Preimage' | 'Scheduler' | 'MultiBlockMigrations' | 'Balances' | 'Vesting' | 'Claims' | 'Dap' | 'CollatorSelection' | 'Session' | 'XcmpQueue' | 'PolkadotXcm' | 'MessageQueue' | 'SnowbridgeSystemFrontend' | 'Utility' | 'Multisig' | 'Proxy' | 'Indices' | 'Assets' | 'Uniques' | 'Nfts' | 'ForeignAssets' | 'PoolAssets' | 'AssetConversion' | 'Treasury' | 'ConvictionVoting' | 'Referenda' | 'Whitelist' | 'Bounties' | 'ChildBounties' | 'AssetRate' | 'MultiAssetBounties' | 'StateTrieMigration' | 'NominationPools' | 'VoterList' | 'DelegatedStaking' | 'StakingRcClient' | 'MultiBlockElection' | 'MultiBlockElectionSigned' | 'Staking' | 'Revive' | 'AssetsPrecompilesPermit' | 'AhOps';
  }

} // declare module
