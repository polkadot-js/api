// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Bytes, Enum, Null, Option, Struct, U8aFixed, Vec, u32 } from '@polkadot/types-codec';
import type { Call, MultiAddress } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name AssetHubKusamaRuntimeProxyType (148) */
  interface AssetHubKusamaRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isCancelProxy: boolean;
    readonly isAssets: boolean;
    readonly isAssetOwner: boolean;
    readonly isAssetManager: boolean;
    readonly isCollator: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator';
  }

  /** @name AssetHubKusamaRuntimeRuntimeHoldReason (253) */
  interface AssetHubKusamaRuntimeRuntimeHoldReason extends Enum {
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmHoldReason;
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PalletNftFractionalizationHoldReason;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly type: 'PolkadotXcm' | 'NftFractionalization' | 'Revive' | 'StateTrieMigration';
  }

  /** @name AssetHubKusamaRuntimeSessionKeys (283) */
  interface AssetHubKusamaRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (284) */
  interface SpConsensusAuraSr25519AppSr25519Public extends U8aFixed {}

  /** @name PalletRemoteProxyCall (398) */
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

  /** @name PalletRemoteProxyRemoteProxyProof (399) */
  interface PalletRemoteProxyRemoteProxyProof extends Enum {
    readonly isRelayChain: boolean;
    readonly asRelayChain: {
      readonly proof: Vec<Bytes>;
      readonly block: u32;
    } & Struct;
    readonly type: 'RelayChain';
  }

  /** @name AssetHubKusamaRuntimeOriginCaller (438) */
  interface AssetHubKusamaRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly type: 'System' | 'PolkadotXcm' | 'CumulusXcm';
  }

  /** @name PalletRemoteProxyError (459) */
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

  /** @name AssetHubKusamaRuntimeRuntime (532) */
  type AssetHubKusamaRuntimeRuntime = Null;

  /** @name AssetHubKusamaRuntimeRuntimeError (634) */
  interface AssetHubKusamaRuntimeRuntimeError extends Enum {
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
    readonly isRemoteProxyRelayChain: boolean;
    readonly asRemoteProxyRelayChain: PalletRemoteProxyError;
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
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveError;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationError;
    readonly type: 'System' | 'ParachainSystem' | 'Balances' | 'Vesting' | 'CollatorSelection' | 'Session' | 'XcmpQueue' | 'PolkadotXcm' | 'MessageQueue' | 'Utility' | 'Multisig' | 'Proxy' | 'RemoteProxyRelayChain' | 'Assets' | 'Uniques' | 'Nfts' | 'ForeignAssets' | 'NftFractionalization' | 'PoolAssets' | 'AssetConversion' | 'Revive' | 'StateTrieMigration';
  }

} // declare module
