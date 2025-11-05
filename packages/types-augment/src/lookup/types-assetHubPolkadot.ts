// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { BTreeMap, BTreeSet, Bytes, Enum, Null, Option, Struct, U8aFixed, Vec, bool, u128, u16, u32 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name CumulusPalletParachainSystemEvent (32) */
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

  /** @name PalletCollatorSelectionEvent (57) */
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

  /** @name CumulusPalletXcmpQueueEvent (60) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly type: 'XcmpMessageSent';
  }

  /** @name CumulusPalletXcmEvent (135) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, StagingXcmV5TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name PalletXcmBridgeHubRouterEvent (136) */
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

  /** @name CumulusPrimitivesCoreAggregateMessageOrigin (139) */
  interface CumulusPrimitivesCoreAggregateMessageOrigin extends Enum {
    readonly isHere: boolean;
    readonly isParent: boolean;
    readonly isSibling: boolean;
    readonly asSibling: u32;
    readonly type: 'Here' | 'Parent' | 'Sibling';
  }

  /** @name AssetHubPolkadotRuntimeProxyType (148) */
  interface AssetHubPolkadotRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isCancelProxy: boolean;
    readonly isAssets: boolean;
    readonly isAssetOwner: boolean;
    readonly isAssetManager: boolean;
    readonly isCollator: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator';
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentAncestor (200) */
  interface CumulusPalletParachainSystemUnincludedSegmentAncestor extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly paraHeadHash: Option<H256>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV8UpgradeGoAhead>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth (201) */
  interface CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth extends Struct {
    readonly umpMsgCount: u32;
    readonly umpTotalBytes: u32;
    readonly hrmpOutgoing: BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate (203) */
  interface CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
    readonly msgCount: u32;
    readonly totalBytes: u32;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentSegmentTracker (209) */
  interface CumulusPalletParachainSystemUnincludedSegmentSegmentTracker extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly hrmpWatermark: Option<u32>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV8UpgradeGoAhead>;
  }

  /** @name SpTrieStorageProof (214) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (216) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV8AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV8AbridgedHrmpChannel]>>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity (217) */
  interface CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity extends Struct {
    readonly remainingCount: u32;
    readonly remainingSize: u32;
  }

  /** @name PolkadotPrimitivesV8AbridgedHrmpChannel (220) */
  interface PolkadotPrimitivesV8AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV8AbridgedHostConfiguration (221) */
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

  /** @name CumulusPalletParachainSystemCall (229) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage';
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (230) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV8PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name CumulusPalletParachainSystemError (238) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled';
  }

  /** @name StagingParachainInfoCall (240) */
  type StagingParachainInfoCall = Null;

  /** @name AssetHubPolkadotRuntimeRuntimeHoldReason (250) */
  interface AssetHubPolkadotRuntimeRuntimeHoldReason extends Enum {
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly type: 'PolkadotXcm' | 'StateTrieMigration';
  }

  /** @name FrameSupportTokensMiscIdAmount (255) */
  interface FrameSupportTokensMiscIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletCollatorSelectionCandidateInfo (271) */
  interface PalletCollatorSelectionCandidateInfo extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletCollatorSelectionCall (273) */
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

  /** @name PalletCollatorSelectionError (275) */
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

  /** @name AssetHubPolkadotRuntimeSessionKeys (278) */
  interface AssetHubPolkadotRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraEd25519AppEd25519Public;
  }

  /** @name SpConsensusAuraEd25519AppEd25519Public (279) */
  interface SpConsensusAuraEd25519AppEd25519Public extends U8aFixed {}

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (296) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (297) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (301) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
  }

  /** @name CumulusPalletXcmpQueueCall (302) */
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

  /** @name CumulusPalletXcmpQueueError (303) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isBadQueueConfig: boolean;
    readonly isAlreadySuspended: boolean;
    readonly isAlreadyResumed: boolean;
    readonly isTooManyActiveOutboundChannels: boolean;
    readonly isTooBig: boolean;
    readonly type: 'BadQueueConfig' | 'AlreadySuspended' | 'AlreadyResumed' | 'TooManyActiveOutboundChannels' | 'TooBig';
  }

  /** @name CumulusPalletXcmCall (375) */
  type CumulusPalletXcmCall = Null;

  /** @name BpXcmBridgeHubRouterBridgeState (376) */
  interface BpXcmBridgeHubRouterBridgeState extends Struct {
    readonly deliveryFeeFactor: u128;
    readonly isCongested: bool;
  }

  /** @name PalletXcmBridgeHubRouterCall (377) */
  interface PalletXcmBridgeHubRouterCall extends Enum {
    readonly isReportBridgeStatus: boolean;
    readonly asReportBridgeStatus: {
      readonly bridgeId: H256;
      readonly isCongested: bool;
    } & Struct;
    readonly type: 'ReportBridgeStatus';
  }

  /** @name AssetHubPolkadotRuntimeOriginCaller (429) */
  interface AssetHubPolkadotRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly type: 'System' | 'PolkadotXcm' | 'CumulusXcm';
  }

  /** @name CumulusPalletXcmOrigin (432) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name AssetHubPolkadotRuntimeRuntime (511) */
  type AssetHubPolkadotRuntimeRuntime = Null;

  /** @name AssetsCommonRuntimeApiFungiblesAccessError (561) */
  interface AssetsCommonRuntimeApiFungiblesAccessError extends Enum {
    readonly isAssetIdConversionFailed: boolean;
    readonly isAmountToBalanceConversionFailed: boolean;
    readonly type: 'AssetIdConversionFailed' | 'AmountToBalanceConversionFailed';
  }

  /** @name CumulusPrimitivesCoreCollationInfo (562) */
  interface CumulusPrimitivesCoreCollationInfo extends Struct {
    readonly upwardMessages: Vec<Bytes>;
    readonly horizontalMessages: Vec<PolkadotCorePrimitivesOutboundHrmpMessage>;
    readonly newValidationCode: Option<Bytes>;
    readonly processedDownwardMessages: u32;
    readonly hrmpWatermark: u32;
    readonly headData: Bytes;
  }

  /** @name AssetHubPolkadotRuntimeRuntimeError (570) */
  interface AssetHubPolkadotRuntimeRuntimeError extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSystemError;
    readonly isParachainSystem: boolean;
    readonly asParachainSystem: CumulusPalletParachainSystemError;
    readonly isBalances: boolean;
    readonly asBalances: PalletBalancesError;
    readonly isVesting: boolean;
    readonly asVesting: PalletVestingError;
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
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationError;
    readonly type: 'System' | 'ParachainSystem' | 'Balances' | 'Vesting' | 'CollatorSelection' | 'Session' | 'XcmpQueue' | 'PolkadotXcm' | 'MessageQueue' | 'Utility' | 'Multisig' | 'Proxy' | 'Assets' | 'Uniques' | 'Nfts' | 'ForeignAssets' | 'PoolAssets' | 'AssetConversion' | 'StateTrieMigration';
  }

} // declare module
