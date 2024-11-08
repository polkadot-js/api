// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup128: asset_hub_polkadot_runtime::ProxyType
   **/
  AssetHubPolkadotRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'CancelProxy', 'Assets', 'AssetOwner', 'AssetManager', 'Collator']
  },
  /**
   * Lookup227: asset_hub_polkadot_runtime::RuntimeHoldReason
   **/
  AssetHubPolkadotRuntimeRuntimeHoldReason: 'Null',
  /**
   * Lookup252: asset_hub_polkadot_runtime::SessionKeys
   **/
  AssetHubPolkadotRuntimeSessionKeys: {
    aura: 'SpConsensusAuraEd25519AppEd25519Public'
  },
  /**
   * Lookup253: sp_consensus_aura::ed25519::app_ed25519::Public
   **/
  SpConsensusAuraEd25519AppEd25519Public: '[u8;32]',
  /**
   * Lookup383: asset_hub_polkadot_runtime::OriginCaller
   **/
  AssetHubPolkadotRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      Void: 'SpCoreVoid',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      PolkadotXcm: 'PalletXcmOrigin',
      CumulusXcm: 'CumulusPalletXcmOrigin'
    }
  },
  /**
   * Lookup467: asset_hub_polkadot_runtime::Runtime
   **/
  AssetHubPolkadotRuntimeRuntime: 'Null',
  /**
   * Lookup526: asset_hub_polkadot_runtime::RuntimeError
   **/
  AssetHubPolkadotRuntimeRuntimeError: {
    _enum: {
      System: 'FrameSystemError',
      ParachainSystem: 'CumulusPalletParachainSystemError',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      Balances: 'PalletBalancesError',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      Vesting: 'PalletVestingError',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      CollatorSelection: 'PalletCollatorSelectionError',
      Session: 'PalletSessionError',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      XcmpQueue: 'CumulusPalletXcmpQueueError',
      PolkadotXcm: 'PalletXcmError',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      MessageQueue: 'PalletMessageQueueError',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      Utility: 'PalletUtilityError',
      Multisig: 'PalletMultisigError',
      Proxy: 'PalletProxyError',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      Assets: 'PalletAssetsError',
      Uniques: 'PalletUniquesError',
      Nfts: 'PalletNftsError',
      ForeignAssets: 'PalletAssetsError',
      PoolAssets: 'PalletAssetsError',
      AssetConversion: 'PalletAssetConversionError'
    }
  }
};
