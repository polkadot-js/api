// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Enum, Null, Struct, U8aFixed } from '@polkadot/types-codec';

declare module '@polkadot/types/lookup' {
  /** @name AssetHubKusamaRuntimeProxyType (130) */
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

  /** @name AssetHubKusamaRuntimeRuntimeHoldReason (229) */
  interface AssetHubKusamaRuntimeRuntimeHoldReason extends Enum {
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PalletNftFractionalizationHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly type: 'NftFractionalization' | 'StateTrieMigration';
  }

  /** @name AssetHubKusamaRuntimeSessionKeys (256) */
  interface AssetHubKusamaRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (257) */
  interface SpConsensusAuraSr25519AppSr25519Public extends U8aFixed {}

  /** @name AssetHubKusamaRuntimeOriginCaller (388) */
  interface AssetHubKusamaRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly type: 'System' | 'Void' | 'PolkadotXcm' | 'CumulusXcm';
  }

  /** @name AssetHubKusamaRuntimeRuntime (474) */
  type AssetHubKusamaRuntimeRuntime = Null;

  /** @name AssetHubKusamaRuntimeRuntimeError (533) */
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
    readonly type: 'System' | 'ParachainSystem' | 'Balances' | 'Vesting' | 'CollatorSelection' | 'Session' | 'XcmpQueue' | 'PolkadotXcm' | 'MessageQueue' | 'Utility' | 'Multisig' | 'Proxy' | 'Assets' | 'Uniques' | 'Nfts' | 'ForeignAssets' | 'NftFractionalization' | 'PoolAssets' | 'AssetConversion';
  }

} // declare module
