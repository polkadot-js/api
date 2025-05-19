// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { AssetHubPolkadotRuntimeOriginCaller, AssetHubPolkadotRuntimeProxyType, AssetHubPolkadotRuntimeRuntime, AssetHubPolkadotRuntimeRuntimeError, AssetHubPolkadotRuntimeRuntimeHoldReason, AssetHubPolkadotRuntimeSessionKeys, AssetsCommonRuntimeApiFungiblesAccessError, BpXcmBridgeHubRouterBridgeState, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity, CumulusPalletParachainSystemUnincludedSegmentAncestor, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate, CumulusPalletParachainSystemUnincludedSegmentSegmentTracker, CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth, CumulusPalletXcmCall, CumulusPalletXcmEvent, CumulusPalletXcmOrigin, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesCoreAggregateMessageOrigin, CumulusPrimitivesCoreCollationInfo, CumulusPrimitivesParachainInherentParachainInherentData, FrameSupportDispatchDispatchInfo, PalletCollatorSelectionCall, PalletCollatorSelectionCandidateInfo, PalletCollatorSelectionError, PalletCollatorSelectionEvent, PalletXcmBridgeHubRouterCall, PalletXcmBridgeHubRouterEvent, PolkadotPrimitivesV8AbridgedHostConfiguration, PolkadotPrimitivesV8AbridgedHrmpChannel, SpConsensusAuraEd25519AppEd25519Public, SpCoreVoid, SpTrieStorageProof, StagingParachainInfoCall, StagingXcmV4TraitsOutcome, XcmV2BodyId, XcmV2BodyPart, XcmV2Instruction, XcmV2Junction, XcmV2MultiAsset, XcmV2MultiLocation, XcmV2MultiassetAssetId, XcmV2MultiassetAssetInstance, XcmV2MultiassetFungibility, XcmV2MultiassetMultiAssetFilter, XcmV2MultiassetMultiAssets, XcmV2MultiassetWildFungibility, XcmV2MultiassetWildMultiAsset, XcmV2MultilocationJunctions, XcmV2NetworkId, XcmV2OriginKind, XcmV2Response, XcmV2TraitsError, XcmV2WeightLimit, XcmV2Xcm } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    AssetHubPolkadotRuntimeOriginCaller: AssetHubPolkadotRuntimeOriginCaller;
    AssetHubPolkadotRuntimeProxyType: AssetHubPolkadotRuntimeProxyType;
    AssetHubPolkadotRuntimeRuntime: AssetHubPolkadotRuntimeRuntime;
    AssetHubPolkadotRuntimeRuntimeError: AssetHubPolkadotRuntimeRuntimeError;
    AssetHubPolkadotRuntimeRuntimeHoldReason: AssetHubPolkadotRuntimeRuntimeHoldReason;
    AssetHubPolkadotRuntimeSessionKeys: AssetHubPolkadotRuntimeSessionKeys;
    AssetsCommonRuntimeApiFungiblesAccessError: AssetsCommonRuntimeApiFungiblesAccessError;
    BpXcmBridgeHubRouterBridgeState: BpXcmBridgeHubRouterBridgeState;
    CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
    CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
    CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
    CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    CumulusPalletParachainSystemUnincludedSegmentAncestor: CumulusPalletParachainSystemUnincludedSegmentAncestor;
    CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate;
    CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: CumulusPalletParachainSystemUnincludedSegmentSegmentTracker;
    CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    CumulusPalletXcmCall: CumulusPalletXcmCall;
    CumulusPalletXcmEvent: CumulusPalletXcmEvent;
    CumulusPalletXcmOrigin: CumulusPalletXcmOrigin;
    CumulusPalletXcmpQueueCall: CumulusPalletXcmpQueueCall;
    CumulusPalletXcmpQueueError: CumulusPalletXcmpQueueError;
    CumulusPalletXcmpQueueEvent: CumulusPalletXcmpQueueEvent;
    CumulusPalletXcmpQueueOutboundChannelDetails: CumulusPalletXcmpQueueOutboundChannelDetails;
    CumulusPalletXcmpQueueOutboundState: CumulusPalletXcmpQueueOutboundState;
    CumulusPalletXcmpQueueQueueConfigData: CumulusPalletXcmpQueueQueueConfigData;
    CumulusPrimitivesCoreAggregateMessageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin;
    CumulusPrimitivesCoreCollationInfo: CumulusPrimitivesCoreCollationInfo;
    CumulusPrimitivesParachainInherentParachainInherentData: CumulusPrimitivesParachainInherentParachainInherentData;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    PalletCollatorSelectionCall: PalletCollatorSelectionCall;
    PalletCollatorSelectionCandidateInfo: PalletCollatorSelectionCandidateInfo;
    PalletCollatorSelectionError: PalletCollatorSelectionError;
    PalletCollatorSelectionEvent: PalletCollatorSelectionEvent;
    PalletXcmBridgeHubRouterCall: PalletXcmBridgeHubRouterCall;
    PalletXcmBridgeHubRouterEvent: PalletXcmBridgeHubRouterEvent;
    PolkadotPrimitivesV8AbridgedHostConfiguration: PolkadotPrimitivesV8AbridgedHostConfiguration;
    PolkadotPrimitivesV8AbridgedHrmpChannel: PolkadotPrimitivesV8AbridgedHrmpChannel;
    SpConsensusAuraEd25519AppEd25519Public: SpConsensusAuraEd25519AppEd25519Public;
    SpCoreVoid: SpCoreVoid;
    SpTrieStorageProof: SpTrieStorageProof;
    StagingParachainInfoCall: StagingParachainInfoCall;
    StagingXcmV4TraitsOutcome: StagingXcmV4TraitsOutcome;
    XcmV2BodyId: XcmV2BodyId;
    XcmV2BodyPart: XcmV2BodyPart;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Junction: XcmV2Junction;
    XcmV2MultiAsset: XcmV2MultiAsset;
    XcmV2MultiLocation: XcmV2MultiLocation;
    XcmV2MultiassetAssetId: XcmV2MultiassetAssetId;
    XcmV2MultiassetAssetInstance: XcmV2MultiassetAssetInstance;
    XcmV2MultiassetFungibility: XcmV2MultiassetFungibility;
    XcmV2MultiassetMultiAssetFilter: XcmV2MultiassetMultiAssetFilter;
    XcmV2MultiassetMultiAssets: XcmV2MultiassetMultiAssets;
    XcmV2MultiassetWildFungibility: XcmV2MultiassetWildFungibility;
    XcmV2MultiassetWildMultiAsset: XcmV2MultiassetWildMultiAsset;
    XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
    XcmV2NetworkId: XcmV2NetworkId;
    XcmV2OriginKind: XcmV2OriginKind;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
  } // InterfaceTypes
} // declare module
