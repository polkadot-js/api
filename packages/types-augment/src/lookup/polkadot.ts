// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup64: polkadot_runtime::SessionKeys
   **/
  PolkadotRuntimeSessionKeys: {
    grandpa: 'SpConsensusGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    paraValidator: 'PolkadotPrimitivesV9ValidatorAppPublic',
    paraAssignment: 'PolkadotPrimitivesV9AssignmentAppPublic',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic',
    beefy: 'SpConsensusBeefyEcdsaCryptoPublic'
  },
  /**
   * Lookup66: polkadot_primitives::v9::validator_app::Public
   **/
  PolkadotPrimitivesV9ValidatorAppPublic: '[u8;32]',
  /**
   * Lookup67: polkadot_primitives::v9::assignment_app::Public
   **/
  PolkadotPrimitivesV9AssignmentAppPublic: '[u8;32]',
  /**
   * Lookup83: polkadot_runtime_common::impls::VersionedLocatableAsset
   **/
  PolkadotRuntimeCommonImplsVersionedLocatableAsset: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: {
        location: 'StagingXcmV3MultiLocation',
        assetId: 'XcmV3MultiassetAssetId',
      },
      V4: {
        location: 'StagingXcmV4Location',
        assetId: 'StagingXcmV4AssetAssetId',
      },
      V5: {
        location: 'StagingXcmV5Location',
        assetId: 'StagingXcmV5AssetAssetId'
      }
    }
  },
  /**
   * Lookup84: staging_xcm::v3::multilocation::MultiLocation
   **/
  StagingXcmV3MultiLocation: {
    parents: 'u8',
    interior: 'XcmV3Junctions'
  },
  /**
   * Lookup85: xcm::v3::junctions::Junctions
   **/
  XcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV3Junction',
      X2: '(XcmV3Junction,XcmV3Junction)',
      X3: '(XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X4: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X5: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X6: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X7: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X8: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)'
    }
  },
  /**
   * Lookup86: xcm::v3::junction::Junction
   **/
  XcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<XcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<XcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<XcmV3JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'XcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup88: xcm::v3::junction::NetworkId
   **/
  XcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null',
      PolkadotBulletin: 'Null'
    }
  },
  /**
   * Lookup89: xcm::v3::junction::BodyId
   **/
  XcmV3JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup90: xcm::v3::junction::BodyPart
   **/
  XcmV3JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup91: xcm::v3::multiasset::AssetId
   **/
  XcmV3MultiassetAssetId: {
    _enum: {
      Concrete: 'StagingXcmV3MultiLocation',
      Abstract: '[u8;32]'
    }
  },
  /**
   * Lookup92: staging_xcm::v4::location::Location
   **/
  StagingXcmV4Location: {
    parents: 'u8',
    interior: 'StagingXcmV4Junctions'
  },
  /**
   * Lookup93: staging_xcm::v4::junctions::Junctions
   **/
  StagingXcmV4Junctions: {
    _enum: {
      Here: 'Null',
      X1: '[Lookup95;1]',
      X2: '[Lookup95;2]',
      X3: '[Lookup95;3]',
      X4: '[Lookup95;4]',
      X5: '[Lookup95;5]',
      X6: '[Lookup95;6]',
      X7: '[Lookup95;7]',
      X8: '[Lookup95;8]'
    }
  },
  /**
   * Lookup95: staging_xcm::v4::junction::Junction
   **/
  StagingXcmV4Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<StagingXcmV4JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<StagingXcmV4JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<StagingXcmV4JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'StagingXcmV4JunctionNetworkId'
    }
  },
  /**
   * Lookup97: staging_xcm::v4::junction::NetworkId
   **/
  StagingXcmV4JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null',
      PolkadotBulletin: 'Null'
    }
  },
  /**
   * Lookup105: staging_xcm::v4::asset::AssetId
   **/
  StagingXcmV4AssetAssetId: 'StagingXcmV4Location',
  /**
   * Lookup106: staging_xcm::v5::location::Location
   **/
  StagingXcmV5Location: {
    parents: 'u8',
    interior: 'StagingXcmV5Junctions'
  },
  /**
   * Lookup107: staging_xcm::v5::junctions::Junctions
   **/
  StagingXcmV5Junctions: {
    _enum: {
      Here: 'Null',
      X1: '[Lookup109;1]',
      X2: '[Lookup109;2]',
      X3: '[Lookup109;3]',
      X4: '[Lookup109;4]',
      X5: '[Lookup109;5]',
      X6: '[Lookup109;6]',
      X7: '[Lookup109;7]',
      X8: '[Lookup109;8]'
    }
  },
  /**
   * Lookup109: staging_xcm::v5::junction::Junction
   **/
  StagingXcmV5Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<StagingXcmV5JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<StagingXcmV5JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<StagingXcmV5JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'StagingXcmV5JunctionNetworkId'
    }
  },
  /**
   * Lookup111: staging_xcm::v5::junction::NetworkId
   **/
  StagingXcmV5JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null',
      PolkadotBulletin: 'Null'
    }
  },
  /**
   * Lookup119: staging_xcm::v5::asset::AssetId
   **/
  StagingXcmV5AssetAssetId: 'StagingXcmV5Location',
  /**
   * Lookup120: xcm::VersionedLocation
   **/
  XcmVersionedLocation: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiLocation',
      V4: 'StagingXcmV4Location',
      V5: 'StagingXcmV5Location'
    }
  },
  /**
   * Lookup129: polkadot_runtime::OriginCaller
   **/
  PolkadotRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
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
      Origins: 'PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      ParachainsOrigin: 'PolkadotRuntimeParachainsOriginPalletOrigin',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      __Unused98: 'Null',
      XcmPallet: 'PalletXcmOrigin'
    }
  },
  /**
   * Lookup131: polkadot_runtime::governance::origins::pallet_custom_origins::Origin
   **/
  PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
    _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'AuctionAdmin', 'LeaseAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'SmallTipper', 'BigTipper', 'SmallSpender', 'MediumSpender', 'BigSpender', 'WhitelistedCaller', 'WishForChange']
  },
  /**
   * Lookup132: polkadot_runtime_parachains::origin::pallet::Origin
   **/
  PolkadotRuntimeParachainsOriginPalletOrigin: {
    _enum: {
      Parachain: 'u32'
    }
  },
  /**
   * Lookup134: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'StagingXcmV5Location',
      Response: 'StagingXcmV5Location'
    }
  },
  /**
   * Lookup142: polkadot_runtime_common::claims::pallet::Call<T>
   **/
  PolkadotRuntimeCommonClaimsPalletCall: {
    _enum: {
      claim: {
        dest: 'AccountId32',
        ethereumSignature: 'PolkadotRuntimeCommonClaimsEcdsaSignature',
      },
      mint_claim: {
        who: 'EthereumAddress',
        value: 'u128',
        vestingSchedule: 'Option<(u128,u128,u32)>',
        statement: 'Option<PolkadotRuntimeCommonClaimsStatementKind>',
      },
      claim_attest: {
        dest: 'AccountId32',
        ethereumSignature: 'PolkadotRuntimeCommonClaimsEcdsaSignature',
        statement: 'Bytes',
      },
      attest: {
        statement: 'Bytes',
      },
      move_claim: {
        _alias: {
          new_: 'new',
        },
        old: 'EthereumAddress',
        new_: 'EthereumAddress',
        maybePreclaim: 'Option<AccountId32>'
      }
    }
  },
  /**
   * Lookup143: polkadot_runtime_common::claims::EcdsaSignature
   **/
  PolkadotRuntimeCommonClaimsEcdsaSignature: '[u8;65]',
  /**
   * Lookup149: polkadot_runtime_common::claims::StatementKind
   **/
  PolkadotRuntimeCommonClaimsStatementKind: {
    _enum: ['Regular', 'Saft']
  },
  /**
   * Lookup156: polkadot_runtime_constants::proxy::ProxyType
   **/
  PolkadotRuntimeConstantsProxyProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', '__Unused4', '__Unused5', 'CancelProxy', 'Auction', 'NominationPools', 'ParaRegistration']
  },
  /**
   * Lookup164: polkadot_runtime::NposCompactSolution16
   **/
  PolkadotRuntimeNposCompactSolution16: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>'
  },
  /**
   * Lookup238: pallet_staking_async_ah_client::pallet::Call<T>
   **/
  PalletStakingAsyncAhClientCall: {
    _enum: {
      validator_set: {
        report: 'PalletStakingAsyncRcClientValidatorSetReport',
      },
      set_mode: {
        mode: 'PalletStakingAsyncAhClientOperatingMode',
      },
      force_on_migration_end: 'Null',
      set_keys_from_ah: {
        _alias: {
          keys_: 'keys',
        },
        stash: 'AccountId32',
        keys_: 'Bytes',
      },
      purge_keys_from_ah: {
        stash: 'AccountId32'
      }
    }
  },
  /**
   * Lookup239: pallet_staking_async_rc_client::ValidatorSetReport<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncRcClientValidatorSetReport: {
    newValidatorSet: 'Vec<AccountId32>',
    id: 'u32',
    pruneUpTo: 'Option<u32>',
    leftover: 'bool'
  },
  /**
   * Lookup240: pallet_staking_async_ah_client::OperatingMode
   **/
  PalletStakingAsyncAhClientOperatingMode: {
    _enum: ['Passive', 'Buffered', 'Active']
  },
  /**
   * Lookup242: polkadot_runtime::RuntimeParameters
   **/
  PolkadotRuntimeRuntimeParameters: {
    _enum: {
      AhClient: 'PolkadotRuntimeDynamicParamsAhClientParameters'
    }
  },
  /**
   * Lookup243: polkadot_runtime::dynamic_params::ah_client::Parameters
   **/
  PolkadotRuntimeDynamicParamsAhClientParameters: {
    _enum: {
      MinimumValidatorSetSize: '(PolkadotRuntimeDynamicParamsAhClientMinimumValidatorSetSize,Option<u32>)'
    }
  },
  /**
   * Lookup244: polkadot_runtime::dynamic_params::ah_client::MinimumValidatorSetSize
   **/
  PolkadotRuntimeDynamicParamsAhClientMinimumValidatorSetSize: 'Null',
  /**
   * Lookup245: polkadot_runtime_parachains::configuration::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsConfigurationPalletCall: {
    _enum: {
      set_validation_upgrade_cooldown: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_validation_upgrade_delay: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_code_retention_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_code_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_pov_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_head_data_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_coretime_cores: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused7: 'Null',
      set_group_rotation_frequency: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_paras_availability_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused10: 'Null',
      set_scheduling_lookahead: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_validators_per_core: {
        _alias: {
          new_: 'new',
        },
        new_: 'Option<u32>',
      },
      set_max_validators: {
        _alias: {
          new_: 'new',
        },
        new_: 'Option<u32>',
      },
      set_dispute_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_dispute_post_conclusion_acceptance_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused16: 'Null',
      __Unused17: 'Null',
      set_no_show_slots: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_n_delay_tranches: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_zeroth_delay_tranche_width: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_needed_approvals: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_relay_vrf_modulo_samples: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_upward_queue_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_upward_queue_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_downward_message_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused26: 'Null',
      set_max_upward_message_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_upward_message_num_per_candidate: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_open_request_ttl: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_sender_deposit: {
        _alias: {
          new_: 'new',
        },
        new_: 'u128',
      },
      set_hrmp_recipient_deposit: {
        _alias: {
          new_: 'new',
        },
        new_: 'u128',
      },
      set_hrmp_channel_max_capacity: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_channel_max_total_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_max_parachain_inbound_channels: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused35: 'Null',
      set_hrmp_channel_max_message_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_max_parachain_outbound_channels: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused38: 'Null',
      set_hrmp_max_message_num_per_candidate: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused40: 'Null',
      __Unused41: 'Null',
      set_pvf_voting_ttl: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_minimum_validation_upgrade_delay: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_bypass_consistency_check: {
        _alias: {
          new_: 'new',
        },
        new_: 'bool',
      },
      set_async_backing_params: {
        _alias: {
          new_: 'new',
        },
        new_: 'PolkadotPrimitivesV9AsyncBackingAsyncBackingParams',
      },
      set_executor_params: {
        _alias: {
          new_: 'new',
        },
        new_: 'PolkadotPrimitivesV9ExecutorParams',
      },
      set_on_demand_base_fee: {
        _alias: {
          new_: 'new',
        },
        new_: 'u128',
      },
      set_on_demand_fee_variability: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      set_on_demand_queue_max_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_on_demand_target_queue_utilization: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      __Unused51: 'Null',
      set_minimum_backing_votes: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_node_feature: {
        index: 'u8',
        value: 'bool',
      },
      set_approval_voting_params: {
        _alias: {
          new_: 'new',
        },
        new_: 'PolkadotPrimitivesV9ApprovalVotingParams',
      },
      set_scheduler_params: {
        _alias: {
          new_: 'new',
        },
        new_: 'PolkadotPrimitivesVstagingSchedulerParams',
      },
      set_max_relay_parent_session_age: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32'
      }
    }
  },
  /**
   * Lookup246: polkadot_primitives::v9::async_backing::AsyncBackingParams
   **/
  PolkadotPrimitivesV9AsyncBackingAsyncBackingParams: {
    maxCandidateDepth: 'u32',
    allowedAncestryLen: 'u32'
  },
  /**
   * Lookup247: polkadot_primitives::v9::executor_params::ExecutorParams
   **/
  PolkadotPrimitivesV9ExecutorParams: 'Vec<PolkadotPrimitivesV9ExecutorParamsExecutorParam>',
  /**
   * Lookup249: polkadot_primitives::v9::executor_params::ExecutorParam
   **/
  PolkadotPrimitivesV9ExecutorParamsExecutorParam: {
    _enum: {
      __Unused0: 'Null',
      MaxMemoryPages: 'u32',
      StackLogicalMax: 'u32',
      StackNativeMax: 'u32',
      PrecheckingMaxMemory: 'u64',
      PvfPrepTimeout: '(PolkadotPrimitivesV9PvfPrepKind,u64)',
      PvfExecTimeout: '(PolkadotPrimitivesV9PvfExecKind,u64)',
      WasmExtBulkMemory: 'Null',
      EnabledHostFunction: 'PolkadotPrimitivesV9ExecutorParamsExecutorHostFunction'
    }
  },
  /**
   * Lookup250: polkadot_primitives::v9::PvfPrepKind
   **/
  PolkadotPrimitivesV9PvfPrepKind: {
    _enum: ['Precheck', 'Prepare']
  },
  /**
   * Lookup251: polkadot_primitives::v9::PvfExecKind
   **/
  PolkadotPrimitivesV9PvfExecKind: {
    _enum: ['Backing', 'Approval']
  },
  /**
   * Lookup252: polkadot_primitives::v9::executor_params::ExecutorHostFunction
   **/
  PolkadotPrimitivesV9ExecutorParamsExecutorHostFunction: {
    _enum: ['__Unused0', 'EccRfc163']
  },
  /**
   * Lookup253: polkadot_primitives::v9::ApprovalVotingParams
   **/
  PolkadotPrimitivesV9ApprovalVotingParams: {
    maxApprovalCoalesceCount: 'u32'
  },
  /**
   * Lookup254: polkadot_primitives::vstaging::SchedulerParams<BlockNumber>
   **/
  PolkadotPrimitivesVstagingSchedulerParams: {
    groupRotationFrequency: 'u32',
    parasAvailabilityPeriod: 'u32',
    maxValidatorsPerCore: 'Option<u32>',
    lookahead: 'u32',
    numCores: 'u32',
    onDemandQueueMaxSize: 'u32',
    onDemandTargetQueueUtilization: 'Perbill',
    onDemandFeeVariability: 'Perbill',
    onDemandBaseFee: 'u128'
  },
  /**
   * Lookup255: polkadot_runtime_parachains::shared::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsSharedPalletCall: 'Null',
  /**
   * Lookup256: polkadot_runtime_parachains::inclusion::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsInclusionPalletCall: 'Null',
  /**
   * Lookup257: polkadot_runtime_parachains::paras_inherent::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsParasInherentPalletCall: {
    _enum: {
      enter: {
        data: 'PolkadotPrimitivesV9InherentData'
      }
    }
  },
  /**
   * Lookup258: polkadot_primitives::v9::InherentData<sp_runtime::generic::header::Header<Number, Hash>>
   **/
  PolkadotPrimitivesV9InherentData: {
    bitfields: 'Vec<PolkadotPrimitivesV9SignedUncheckedSigned>',
    backedCandidates: 'Vec<PolkadotPrimitivesV9BackedCandidate>',
    disputes: 'Vec<PolkadotPrimitivesV9DisputeStatementSet>',
    parentHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup260: polkadot_primitives::v9::signed::UncheckedSigned<polkadot_primitives::v9::AvailabilityBitfield, polkadot_primitives::v9::AvailabilityBitfield>
   **/
  PolkadotPrimitivesV9SignedUncheckedSigned: {
    payload: 'BitVec',
    validatorIndex: 'u32',
    signature: 'PolkadotPrimitivesV9ValidatorAppSignature'
  },
  /**
   * Lookup263: bitvec::order::Lsb0
   **/
  BitvecOrderLsb0: 'Null',
  /**
   * Lookup265: polkadot_primitives::v9::validator_app::Signature
   **/
  PolkadotPrimitivesV9ValidatorAppSignature: '[u8;64]',
  /**
   * Lookup267: polkadot_primitives::v9::BackedCandidate<primitive_types::H256>
   **/
  PolkadotPrimitivesV9BackedCandidate: {
    candidate: 'PolkadotPrimitivesV9CommittedCandidateReceiptV2',
    validityVotes: 'Vec<PolkadotPrimitivesV9ValidityAttestation>',
    validatorIndices: 'BitVec'
  },
  /**
   * Lookup268: polkadot_primitives::v9::CommittedCandidateReceiptV2<primitive_types::H256>
   **/
  PolkadotPrimitivesV9CommittedCandidateReceiptV2: {
    descriptor: 'PolkadotPrimitivesV9CandidateDescriptorV2',
    commitments: 'PolkadotPrimitivesV9CandidateCommitments'
  },
  /**
   * Lookup269: polkadot_primitives::v9::CandidateDescriptorV2<primitive_types::H256>
   **/
  PolkadotPrimitivesV9CandidateDescriptorV2: {
    paraId: 'u32',
    relayParent: 'H256',
    version: 'u8',
    coreIndex: 'u16',
    sessionIndex: 'u32',
    schedulingSessionOffset: 'u8',
    reserved1: '[u8;24]',
    persistedValidationDataHash: 'H256',
    povHash: 'H256',
    erasureRoot: 'H256',
    schedulingParent: 'H256',
    reserved2: '[u8;32]',
    paraHead: 'H256',
    validationCodeHash: 'H256'
  },
  /**
   * Lookup272: polkadot_primitives::v9::CandidateCommitments<N>
   **/
  PolkadotPrimitivesV9CandidateCommitments: {
    upwardMessages: 'Vec<Bytes>',
    horizontalMessages: 'Vec<PolkadotCorePrimitivesOutboundHrmpMessage>',
    newValidationCode: 'Option<Bytes>',
    headData: 'Bytes',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'u32'
  },
  /**
   * Lookup275: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup281: polkadot_primitives::v9::ValidityAttestation
   **/
  PolkadotPrimitivesV9ValidityAttestation: {
    _enum: {
      __Unused0: 'Null',
      Implicit: 'PolkadotPrimitivesV9ValidatorAppSignature',
      Explicit: 'PolkadotPrimitivesV9ValidatorAppSignature'
    }
  },
  /**
   * Lookup283: polkadot_primitives::v9::DisputeStatementSet
   **/
  PolkadotPrimitivesV9DisputeStatementSet: {
    candidateHash: 'H256',
    session: 'u32',
    statements: 'Vec<(PolkadotPrimitivesV9DisputeStatement,u32,PolkadotPrimitivesV9ValidatorAppSignature)>'
  },
  /**
   * Lookup287: polkadot_primitives::v9::DisputeStatement
   **/
  PolkadotPrimitivesV9DisputeStatement: {
    _enum: {
      Valid: 'PolkadotPrimitivesV9ValidDisputeStatementKind',
      Invalid: 'PolkadotPrimitivesV9InvalidDisputeStatementKind'
    }
  },
  /**
   * Lookup288: polkadot_primitives::v9::ValidDisputeStatementKind
   **/
  PolkadotPrimitivesV9ValidDisputeStatementKind: {
    _enum: {
      Explicit: 'Null',
      BackingSeconded: 'H256',
      BackingValid: 'H256',
      ApprovalChecking: 'Null',
      ApprovalCheckingMultipleCandidates: 'Vec<H256>'
    }
  },
  /**
   * Lookup290: polkadot_primitives::v9::InvalidDisputeStatementKind
   **/
  PolkadotPrimitivesV9InvalidDisputeStatementKind: {
    _enum: ['Explicit']
  },
  /**
   * Lookup291: polkadot_runtime_parachains::paras::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsParasPalletCall: {
    _enum: {
      force_set_current_code: {
        para: 'u32',
        newCode: 'Bytes',
      },
      force_set_current_head: {
        para: 'u32',
        newHead: 'Bytes',
      },
      force_schedule_code_upgrade: {
        para: 'u32',
        newCode: 'Bytes',
        relayParentNumber: 'u32',
      },
      force_note_new_head: {
        para: 'u32',
        newHead: 'Bytes',
      },
      force_queue_action: {
        para: 'u32',
      },
      add_trusted_validation_code: {
        validationCode: 'Bytes',
      },
      poke_unused_validation_code: {
        validationCodeHash: 'H256',
      },
      include_pvf_check_statement: {
        stmt: 'PolkadotPrimitivesV9PvfCheckStatement',
        signature: 'PolkadotPrimitivesV9ValidatorAppSignature',
      },
      force_set_most_recent_context: {
        para: 'u32',
        context: 'u32',
      },
      remove_upgrade_cooldown: {
        para: 'u32',
      },
      authorize_force_set_current_code_hash: {
        para: 'u32',
        newCodeHash: 'H256',
        validPeriod: 'u32',
      },
      apply_authorized_force_set_current_code: {
        para: 'u32',
        newCode: 'Bytes'
      }
    }
  },
  /**
   * Lookup292: polkadot_primitives::v9::PvfCheckStatement
   **/
  PolkadotPrimitivesV9PvfCheckStatement: {
    accept: 'bool',
    subject: 'H256',
    sessionIndex: 'u32',
    validatorIndex: 'u32'
  },
  /**
   * Lookup293: polkadot_runtime_parachains::initializer::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsInitializerPalletCall: {
    _enum: {
      force_approve: {
        upTo: 'u32'
      }
    }
  },
  /**
   * Lookup294: polkadot_runtime_parachains::hrmp::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsHrmpPalletCall: {
    _enum: {
      hrmp_init_open_channel: {
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      hrmp_accept_open_channel: {
        sender: 'u32',
      },
      hrmp_close_channel: {
        channelId: 'PolkadotParachainPrimitivesPrimitivesHrmpChannelId',
      },
      force_clean_hrmp: {
        para: 'u32',
        numInbound: 'u32',
        numOutbound: 'u32',
      },
      force_process_hrmp_open: {
        channels: 'u32',
      },
      force_process_hrmp_close: {
        channels: 'u32',
      },
      hrmp_cancel_open_request: {
        channelId: 'PolkadotParachainPrimitivesPrimitivesHrmpChannelId',
        openRequests: 'u32',
      },
      force_open_hrmp_channel: {
        sender: 'u32',
        recipient: 'u32',
        maxCapacity: 'u32',
        maxMessageSize: 'u32',
      },
      establish_system_channel: {
        sender: 'u32',
        recipient: 'u32',
      },
      poke_channel_deposits: {
        sender: 'u32',
        recipient: 'u32',
      },
      establish_channel_with_system: {
        targetSystemChain: 'u32'
      }
    }
  },
  /**
   * Lookup295: polkadot_parachain_primitives::primitives::HrmpChannelId
   **/
  PolkadotParachainPrimitivesPrimitivesHrmpChannelId: {
    sender: 'u32',
    recipient: 'u32'
  },
  /**
   * Lookup296: polkadot_runtime_parachains::disputes::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsDisputesPalletCall: {
    _enum: ['force_unfreeze']
  },
  /**
   * Lookup297: polkadot_runtime_parachains::disputes::slashing::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsDisputesSlashingPalletCall: {
    _enum: {
      report_dispute_lost_unsigned: {
        disputeProof: 'PolkadotPrimitivesV9SlashingDisputeProof',
        keyOwnerProof: 'SpSessionMembershipProof'
      }
    }
  },
  /**
   * Lookup298: polkadot_primitives::v9::slashing::DisputeProof
   **/
  PolkadotPrimitivesV9SlashingDisputeProof: {
    timeSlot: 'PolkadotPrimitivesV9SlashingDisputesTimeSlot',
    kind: 'PolkadotPrimitivesV9DisputeOffenceKind',
    validatorIndex: 'u32',
    validatorId: 'PolkadotPrimitivesV9ValidatorAppPublic'
  },
  /**
   * Lookup299: polkadot_primitives::v9::slashing::DisputesTimeSlot
   **/
  PolkadotPrimitivesV9SlashingDisputesTimeSlot: {
    sessionIndex: 'u32',
    candidateHash: 'H256'
  },
  /**
   * Lookup300: polkadot_primitives::v9::DisputeOffenceKind
   **/
  PolkadotPrimitivesV9DisputeOffenceKind: {
    _enum: ['ForInvalidBacked', 'AgainstValid', 'ForInvalidApproved']
  },
  /**
   * Lookup301: polkadot_runtime_parachains::on_demand::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsOnDemandPalletCall: {
    _enum: {
      place_order_allow_death: {
        maxAmount: 'u128',
        paraId: 'u32',
      },
      place_order_keep_alive: {
        maxAmount: 'u128',
        paraId: 'u32',
      },
      place_order_with_credits: {
        maxAmount: 'u128',
        paraId: 'u32'
      }
    }
  },
  /**
   * Lookup302: polkadot_runtime_common::paras_registrar::pallet::Call<T>
   **/
  PolkadotRuntimeCommonParasRegistrarPalletCall: {
    _enum: {
      register: {
        id: 'u32',
        genesisHead: 'Bytes',
        validationCode: 'Bytes',
      },
      force_register: {
        who: 'AccountId32',
        deposit: 'u128',
        id: 'u32',
        genesisHead: 'Bytes',
        validationCode: 'Bytes',
      },
      deregister: {
        id: 'u32',
      },
      swap: {
        id: 'u32',
        other: 'u32',
      },
      remove_lock: {
        para: 'u32',
      },
      reserve: 'Null',
      add_lock: {
        para: 'u32',
      },
      schedule_code_upgrade: {
        para: 'u32',
        newCode: 'Bytes',
      },
      set_current_head: {
        para: 'u32',
        newHead: 'Bytes'
      }
    }
  },
  /**
   * Lookup303: polkadot_runtime_common::slots::pallet::Call<T>
   **/
  PolkadotRuntimeCommonSlotsPalletCall: {
    _enum: {
      force_lease: {
        para: 'u32',
        leaser: 'AccountId32',
        amount: 'u128',
        periodBegin: 'u32',
        periodCount: 'u32',
      },
      clear_all_leases: {
        para: 'u32',
      },
      trigger_onboard: {
        para: 'u32'
      }
    }
  },
  /**
   * Lookup304: polkadot_runtime_common::auctions::pallet::Call<T>
   **/
  PolkadotRuntimeCommonAuctionsPalletCall: {
    _enum: {
      new_auction: {
        duration: 'Compact<u32>',
        leasePeriodIndex: 'Compact<u32>',
      },
      bid: {
        para: 'Compact<u32>',
        auctionIndex: 'Compact<u32>',
        firstSlot: 'Compact<u32>',
        lastSlot: 'Compact<u32>',
        amount: 'Compact<u128>',
      },
      cancel_auction: 'Null'
    }
  },
  /**
   * Lookup306: polkadot_runtime_common::crowdloan::pallet::Call<T>
   **/
  PolkadotRuntimeCommonCrowdloanPalletCall: {
    _enum: {
      create: {
        index: 'Compact<u32>',
        cap: 'Compact<u128>',
        firstPeriod: 'Compact<u32>',
        lastPeriod: 'Compact<u32>',
        end: 'Compact<u32>',
        verifier: 'Option<SpRuntimeMultiSigner>',
      },
      contribute: {
        index: 'Compact<u32>',
        value: 'Compact<u128>',
        signature: 'Option<SpRuntimeMultiSignature>',
      },
      withdraw: {
        who: 'AccountId32',
        index: 'Compact<u32>',
      },
      refund: {
        index: 'Compact<u32>',
      },
      dissolve: {
        index: 'Compact<u32>',
      },
      edit: {
        index: 'Compact<u32>',
        cap: 'Compact<u128>',
        firstPeriod: 'Compact<u32>',
        lastPeriod: 'Compact<u32>',
        end: 'Compact<u32>',
        verifier: 'Option<SpRuntimeMultiSigner>',
      },
      add_memo: {
        index: 'u32',
        memo: 'Bytes',
      },
      poke: {
        index: 'u32',
      },
      contribute_all: {
        index: 'Compact<u32>',
        signature: 'Option<SpRuntimeMultiSignature>'
      }
    }
  },
  /**
   * Lookup308: sp_runtime::MultiSigner
   **/
  SpRuntimeMultiSigner: {
    _enum: {
      Ed25519: '[u8;32]',
      Sr25519: '[u8;32]',
      Ecdsa: '[u8;33]',
      Eth: '[u8;33]'
    }
  },
  /**
   * Lookup311: polkadot_runtime_parachains::coretime::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsCoretimePalletCall: {
    _enum: {
      __Unused0: 'Null',
      request_core_count: {
        count: 'u16',
      },
      request_revenue_at: {
        when: 'u32',
      },
      credit_account: {
        who: 'AccountId32',
        amount: 'u128',
      },
      assign_core: {
        core: 'u16',
        begin: 'u32',
        assignment: 'Vec<(PalletBrokerCoretimeInterfaceCoreAssignment,u16)>',
        endHint: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup322: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'XcmVersionedLocation',
        message: 'XcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'XcmVersionedXcm',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      force_xcm_version: {
        location: 'StagingXcmV5Location',
        version: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'XcmVersionedLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'XcmVersionedLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      force_suspension: {
        suspended: 'bool',
      },
      transfer_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      claim_assets: {
        assets: 'XcmVersionedAssets',
        beneficiary: 'XcmVersionedLocation',
      },
      transfer_assets_using_type_and_then: {
        dest: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        assetsTransferType: 'StagingXcmExecutorAssetTransferTransferType',
        remoteFeesId: 'XcmVersionedAssetId',
        feesTransferType: 'StagingXcmExecutorAssetTransferTransferType',
        customXcmOnDest: 'XcmVersionedXcm',
        weightLimit: 'XcmV3WeightLimit',
      },
      add_authorized_alias: {
        aliaser: 'XcmVersionedLocation',
        expires: 'Option<u64>',
      },
      remove_authorized_alias: {
        aliaser: 'XcmVersionedLocation',
      },
      remove_all_authorized_aliases: 'Null'
    }
  },
  /**
   * Lookup323: xcm::VersionedXcm<RuntimeCall>
   **/
  XcmVersionedXcm: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3Xcm',
      V4: 'StagingXcmV4Xcm',
      V5: 'StagingXcmV5Xcm'
    }
  },
  /**
   * Lookup324: xcm::v3::Xcm<Call>
   **/
  XcmV3Xcm: 'Vec<XcmV3Instruction>',
  /**
   * Lookup326: xcm::v3::Instruction<Call>
   **/
  XcmV3Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV3MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV3MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV3MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV3Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV3MultiLocation>',
      },
      TransferAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      Transact: {
        originKind: 'XcmV3OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV3Junctions',
      ReportError: 'XcmV3QueryResponseInfo',
      DepositAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV3MultiassetMultiAssetFilter',
        want: 'XcmV3MultiassetMultiAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        reserve: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ReportHolding: {
        responseInfo: 'XcmV3QueryResponseInfo',
        assets: 'XcmV3MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'XcmV3MultiAsset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV3Xcm',
      SetAppendix: 'XcmV3Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        ticket: 'StagingXcmV3MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'XcmV3MultiassetMultiAssets',
      ExpectAsset: 'XcmV3MultiassetMultiAssets',
      ExpectOrigin: 'Option<StagingXcmV3MultiLocation>',
      ExpectError: 'Option<(u32,XcmV3TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'XcmV3QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'XcmV3QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'XcmV3Junction',
      ExportMessage: {
        network: 'XcmV3JunctionNetworkId',
        destination: 'XcmV3Junctions',
        xcm: 'XcmV3Xcm',
      },
      LockAsset: {
        asset: 'XcmV3MultiAsset',
        unlocker: 'StagingXcmV3MultiLocation',
      },
      UnlockAsset: {
        asset: 'XcmV3MultiAsset',
        target: 'StagingXcmV3MultiLocation',
      },
      NoteUnlockable: {
        asset: 'XcmV3MultiAsset',
        owner: 'StagingXcmV3MultiLocation',
      },
      RequestUnlock: {
        asset: 'XcmV3MultiAsset',
        locker: 'StagingXcmV3MultiLocation',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV3MultiLocation',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup327: xcm::v3::multiasset::MultiAssets
   **/
  XcmV3MultiassetMultiAssets: 'Vec<XcmV3MultiAsset>',
  /**
   * Lookup329: xcm::v3::multiasset::MultiAsset
   **/
  XcmV3MultiAsset: {
    id: 'XcmV3MultiassetAssetId',
    fun: 'XcmV3MultiassetFungibility'
  },
  /**
   * Lookup330: xcm::v3::multiasset::Fungibility
   **/
  XcmV3MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV3MultiassetAssetInstance'
    }
  },
  /**
   * Lookup331: xcm::v3::multiasset::AssetInstance
   **/
  XcmV3MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup334: xcm::v3::Response
   **/
  XcmV3Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV3MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<XcmV3PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup337: xcm::v3::traits::Error
   **/
  XcmV3TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup339: xcm::v3::PalletInfo
   **/
  XcmV3PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup342: xcm::v3::MaybeErrorCode
   **/
  XcmV3MaybeErrorCode: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  /**
   * Lookup345: xcm::v3::OriginKind
   **/
  XcmV3OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup346: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup347: xcm::v3::QueryResponseInfo
   **/
  XcmV3QueryResponseInfo: {
    destination: 'StagingXcmV3MultiLocation',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup348: xcm::v3::multiasset::MultiAssetFilter
   **/
  XcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV3MultiassetMultiAssets',
      Wild: 'XcmV3MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup349: xcm::v3::multiasset::WildMultiAsset
   **/
  XcmV3MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup350: xcm::v3::multiasset::WildFungibility
   **/
  XcmV3MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup351: xcm::v3::WeightLimit
   **/
  XcmV3WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup352: staging_xcm::v4::Xcm<Call>
   **/
  StagingXcmV4Xcm: 'Vec<StagingXcmV4Instruction>',
  /**
   * Lookup354: staging_xcm::v4::Instruction<Call>
   **/
  StagingXcmV4Instruction: {
    _enum: {
      WithdrawAsset: 'StagingXcmV4AssetAssets',
      ReserveAssetDeposited: 'StagingXcmV4AssetAssets',
      ReceiveTeleportedAsset: 'StagingXcmV4AssetAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'StagingXcmV4Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV4Location>',
      },
      TransferAsset: {
        assets: 'StagingXcmV4AssetAssets',
        beneficiary: 'StagingXcmV4Location',
      },
      TransferReserveAsset: {
        assets: 'StagingXcmV4AssetAssets',
        dest: 'StagingXcmV4Location',
        xcm: 'StagingXcmV4Xcm',
      },
      Transact: {
        originKind: 'XcmV3OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'StagingXcmV4Junctions',
      ReportError: 'StagingXcmV4QueryResponseInfo',
      DepositAsset: {
        assets: 'StagingXcmV4AssetAssetFilter',
        beneficiary: 'StagingXcmV4Location',
      },
      DepositReserveAsset: {
        assets: 'StagingXcmV4AssetAssetFilter',
        dest: 'StagingXcmV4Location',
        xcm: 'StagingXcmV4Xcm',
      },
      ExchangeAsset: {
        give: 'StagingXcmV4AssetAssetFilter',
        want: 'StagingXcmV4AssetAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'StagingXcmV4AssetAssetFilter',
        reserve: 'StagingXcmV4Location',
        xcm: 'StagingXcmV4Xcm',
      },
      InitiateTeleport: {
        assets: 'StagingXcmV4AssetAssetFilter',
        dest: 'StagingXcmV4Location',
        xcm: 'StagingXcmV4Xcm',
      },
      ReportHolding: {
        responseInfo: 'StagingXcmV4QueryResponseInfo',
        assets: 'StagingXcmV4AssetAssetFilter',
      },
      BuyExecution: {
        fees: 'StagingXcmV4Asset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'StagingXcmV4Xcm',
      SetAppendix: 'StagingXcmV4Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'StagingXcmV4AssetAssets',
        ticket: 'StagingXcmV4Location',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'StagingXcmV4AssetAssets',
      ExpectAsset: 'StagingXcmV4AssetAssets',
      ExpectOrigin: 'Option<StagingXcmV4Location>',
      ExpectError: 'Option<(u32,XcmV3TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'StagingXcmV4QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'StagingXcmV4QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'StagingXcmV4Junction',
      ExportMessage: {
        network: 'StagingXcmV4JunctionNetworkId',
        destination: 'StagingXcmV4Junctions',
        xcm: 'StagingXcmV4Xcm',
      },
      LockAsset: {
        asset: 'StagingXcmV4Asset',
        unlocker: 'StagingXcmV4Location',
      },
      UnlockAsset: {
        asset: 'StagingXcmV4Asset',
        target: 'StagingXcmV4Location',
      },
      NoteUnlockable: {
        asset: 'StagingXcmV4Asset',
        owner: 'StagingXcmV4Location',
      },
      RequestUnlock: {
        asset: 'StagingXcmV4Asset',
        locker: 'StagingXcmV4Location',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV4Location',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV4Location>'
      }
    }
  },
  /**
   * Lookup355: staging_xcm::v4::asset::Assets
   **/
  StagingXcmV4AssetAssets: 'Vec<StagingXcmV4Asset>',
  /**
   * Lookup357: staging_xcm::v4::asset::Asset
   **/
  StagingXcmV4Asset: {
    id: 'StagingXcmV4AssetAssetId',
    fun: 'StagingXcmV4AssetFungibility'
  },
  /**
   * Lookup358: staging_xcm::v4::asset::Fungibility
   **/
  StagingXcmV4AssetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'StagingXcmV4AssetAssetInstance'
    }
  },
  /**
   * Lookup359: staging_xcm::v4::asset::AssetInstance
   **/
  StagingXcmV4AssetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup360: staging_xcm::v4::Response
   **/
  StagingXcmV4Response: {
    _enum: {
      Null: 'Null',
      Assets: 'StagingXcmV4AssetAssets',
      ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<StagingXcmV4PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup362: staging_xcm::v4::PalletInfo
   **/
  StagingXcmV4PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup366: staging_xcm::v4::QueryResponseInfo
   **/
  StagingXcmV4QueryResponseInfo: {
    destination: 'StagingXcmV4Location',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup367: staging_xcm::v4::asset::AssetFilter
   **/
  StagingXcmV4AssetAssetFilter: {
    _enum: {
      Definite: 'StagingXcmV4AssetAssets',
      Wild: 'StagingXcmV4AssetWildAsset'
    }
  },
  /**
   * Lookup368: staging_xcm::v4::asset::WildAsset
   **/
  StagingXcmV4AssetWildAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'StagingXcmV4AssetAssetId',
        fun: 'StagingXcmV4AssetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'StagingXcmV4AssetAssetId',
        fun: 'StagingXcmV4AssetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup369: staging_xcm::v4::asset::WildFungibility
   **/
  StagingXcmV4AssetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup370: staging_xcm::v5::Xcm<Call>
   **/
  StagingXcmV5Xcm: 'Vec<StagingXcmV5Instruction>',
  /**
   * Lookup372: staging_xcm::v5::Instruction<Call>
   **/
  StagingXcmV5Instruction: {
    _enum: {
      WithdrawAsset: 'StagingXcmV5AssetAssets',
      ReserveAssetDeposited: 'StagingXcmV5AssetAssets',
      ReceiveTeleportedAsset: 'StagingXcmV5AssetAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'StagingXcmV5Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV5Location>',
      },
      TransferAsset: {
        assets: 'StagingXcmV5AssetAssets',
        beneficiary: 'StagingXcmV5Location',
      },
      TransferReserveAsset: {
        assets: 'StagingXcmV5AssetAssets',
        dest: 'StagingXcmV5Location',
        xcm: 'StagingXcmV5Xcm',
      },
      Transact: {
        originKind: 'XcmV3OriginKind',
        fallbackMaxWeight: 'Option<SpWeightsWeightV2Weight>',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'StagingXcmV5Junctions',
      ReportError: 'StagingXcmV5QueryResponseInfo',
      DepositAsset: {
        assets: 'StagingXcmV5AssetAssetFilter',
        beneficiary: 'StagingXcmV5Location',
      },
      DepositReserveAsset: {
        assets: 'StagingXcmV5AssetAssetFilter',
        dest: 'StagingXcmV5Location',
        xcm: 'StagingXcmV5Xcm',
      },
      ExchangeAsset: {
        give: 'StagingXcmV5AssetAssetFilter',
        want: 'StagingXcmV5AssetAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'StagingXcmV5AssetAssetFilter',
        reserve: 'StagingXcmV5Location',
        xcm: 'StagingXcmV5Xcm',
      },
      InitiateTeleport: {
        assets: 'StagingXcmV5AssetAssetFilter',
        dest: 'StagingXcmV5Location',
        xcm: 'StagingXcmV5Xcm',
      },
      ReportHolding: {
        responseInfo: 'StagingXcmV5QueryResponseInfo',
        assets: 'StagingXcmV5AssetAssetFilter',
      },
      BuyExecution: {
        fees: 'StagingXcmV5Asset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'StagingXcmV5Xcm',
      SetAppendix: 'StagingXcmV5Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'StagingXcmV5AssetAssets',
        ticket: 'StagingXcmV5Location',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'StagingXcmV5AssetAssets',
      ExpectAsset: 'StagingXcmV5AssetAssets',
      ExpectOrigin: 'Option<StagingXcmV5Location>',
      ExpectError: 'Option<(u32,XcmV5TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'StagingXcmV5QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'StagingXcmV5QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'StagingXcmV5Junction',
      ExportMessage: {
        network: 'StagingXcmV5JunctionNetworkId',
        destination: 'StagingXcmV5Junctions',
        xcm: 'StagingXcmV5Xcm',
      },
      LockAsset: {
        asset: 'StagingXcmV5Asset',
        unlocker: 'StagingXcmV5Location',
      },
      UnlockAsset: {
        asset: 'StagingXcmV5Asset',
        target: 'StagingXcmV5Location',
      },
      NoteUnlockable: {
        asset: 'StagingXcmV5Asset',
        owner: 'StagingXcmV5Location',
      },
      RequestUnlock: {
        asset: 'StagingXcmV5Asset',
        locker: 'StagingXcmV5Location',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV5Location',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV5Location>',
      },
      PayFees: {
        asset: 'StagingXcmV5Asset',
      },
      InitiateTransfer: {
        destination: 'StagingXcmV5Location',
        remoteFees: 'Option<StagingXcmV5AssetAssetTransferFilter>',
        preserveOrigin: 'bool',
        assets: 'Vec<StagingXcmV5AssetAssetTransferFilter>',
        remoteXcm: 'StagingXcmV5Xcm',
      },
      ExecuteWithOrigin: {
        descendantOrigin: 'Option<StagingXcmV5Junctions>',
        xcm: 'StagingXcmV5Xcm',
      },
      SetHints: {
        hints: 'Vec<StagingXcmV5Hint>'
      }
    }
  },
  /**
   * Lookup373: staging_xcm::v5::asset::Assets
   **/
  StagingXcmV5AssetAssets: 'Vec<StagingXcmV5Asset>',
  /**
   * Lookup375: staging_xcm::v5::asset::Asset
   **/
  StagingXcmV5Asset: {
    id: 'StagingXcmV5AssetAssetId',
    fun: 'StagingXcmV5AssetFungibility'
  },
  /**
   * Lookup376: staging_xcm::v5::asset::Fungibility
   **/
  StagingXcmV5AssetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'StagingXcmV5AssetAssetInstance'
    }
  },
  /**
   * Lookup377: staging_xcm::v5::asset::AssetInstance
   **/
  StagingXcmV5AssetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup378: staging_xcm::v5::Response
   **/
  StagingXcmV5Response: {
    _enum: {
      Null: 'Null',
      Assets: 'StagingXcmV5AssetAssets',
      ExecutionResult: 'Option<(u32,XcmV5TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<StagingXcmV5PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup381: xcm::v5::traits::Error
   **/
  XcmV5TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      TooManyAssets: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup383: staging_xcm::v5::PalletInfo
   **/
  StagingXcmV5PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup388: staging_xcm::v5::QueryResponseInfo
   **/
  StagingXcmV5QueryResponseInfo: {
    destination: 'StagingXcmV5Location',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup389: staging_xcm::v5::asset::AssetFilter
   **/
  StagingXcmV5AssetAssetFilter: {
    _enum: {
      Definite: 'StagingXcmV5AssetAssets',
      Wild: 'StagingXcmV5AssetWildAsset'
    }
  },
  /**
   * Lookup390: staging_xcm::v5::asset::WildAsset
   **/
  StagingXcmV5AssetWildAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'StagingXcmV5AssetAssetId',
        fun: 'StagingXcmV5AssetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'StagingXcmV5AssetAssetId',
        fun: 'StagingXcmV5AssetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup391: staging_xcm::v5::asset::WildFungibility
   **/
  StagingXcmV5AssetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup393: staging_xcm::v5::asset::AssetTransferFilter
   **/
  StagingXcmV5AssetAssetTransferFilter: {
    _enum: {
      Teleport: 'StagingXcmV5AssetAssetFilter',
      ReserveDeposit: 'StagingXcmV5AssetAssetFilter',
      ReserveWithdraw: 'StagingXcmV5AssetAssetFilter'
    }
  },
  /**
   * Lookup398: staging_xcm::v5::Hint
   **/
  StagingXcmV5Hint: {
    _enum: {
      AssetClaimer: {
        location: 'StagingXcmV5Location'
      }
    }
  },
  /**
   * Lookup400: xcm::VersionedAssets
   **/
  XcmVersionedAssets: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetMultiAssets',
      V4: 'StagingXcmV4AssetAssets',
      V5: 'StagingXcmV5AssetAssets'
    }
  },
  /**
   * Lookup412: staging_xcm_executor::traits::asset_transfer::TransferType
   **/
  StagingXcmExecutorAssetTransferTransferType: {
    _enum: {
      Teleport: 'Null',
      LocalReserve: 'Null',
      DestinationReserve: 'Null',
      RemoteReserve: 'XcmVersionedLocation'
    }
  },
  /**
   * Lookup413: xcm::VersionedAssetId
   **/
  XcmVersionedAssetId: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetAssetId',
      V4: 'StagingXcmV4AssetAssetId',
      V5: 'StagingXcmV5AssetAssetId'
    }
  },
  /**
   * Lookup416: polkadot_runtime_parachains::inclusion::AggregateMessageOrigin
   **/
  PolkadotRuntimeParachainsInclusionAggregateMessageOrigin: {
    _enum: {
      Ump: 'PolkadotRuntimeParachainsInclusionUmpQueueId'
    }
  },
  /**
   * Lookup417: polkadot_runtime_parachains::inclusion::UmpQueueId
   **/
  PolkadotRuntimeParachainsInclusionUmpQueueId: {
    _enum: {
      Para: 'u32'
    }
  },
  /**
   * Lookup443: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup444: polkadot_runtime_common::claims::PrevalidateAttests<T>
   **/
  PolkadotRuntimeCommonClaimsPrevalidateAttests: 'Null',
  /**
   * Lookup471: polkadot_runtime::RuntimeHoldReason
   **/
  PolkadotRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      Staking: 'PalletStakingPalletHoldReason',
      __Unused8: 'Null',
      Session: 'PalletSessionHoldReason',
      Preimage: 'PalletPreimageHoldReason',
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
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      DelegatedStaking: 'PalletDelegatedStakingHoldReason',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      StateTrieMigration: 'PalletStateTrieMigrationHoldReason',
      XcmPallet: 'PalletXcmHoldReason'
    }
  },
  /**
   * Lookup474: pallet_session::pallet::HoldReason
   **/
  PalletSessionHoldReason: {
    _enum: ['Keys']
  },
  /**
   * Lookup477: pallet_xcm::pallet::HoldReason
   **/
  PalletXcmHoldReason: {
    _enum: ['AuthorizeAlias']
  },
  /**
   * Lookup478: pallet_balances::pallet::UnexpectedKind
   **/
  PalletBalancesUnexpectedKind: {
    _enum: ['BalanceUpdated', 'FailedToMutateAccount']
  },
  /**
   * Lookup496: polkadot_runtime_common::claims::pallet::Event<T>
   **/
  PolkadotRuntimeCommonClaimsPalletEvent: {
    _enum: {
      Claimed: {
        who: 'AccountId32',
        ethereumAddress: 'EthereumAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup513: pallet_staking_async_ah_client::pallet::Event<T>
   **/
  PalletStakingAsyncAhClientEvent: {
    _enum: {
      ValidatorSetReceived: {
        id: 'u32',
        newValidatorSetCount: 'u32',
        pruneUpTo: 'Option<u32>',
        leftover: 'bool',
      },
      CouldNotMergeAndDropped: 'Null',
      SetTooSmallAndDropped: 'Null',
      Unexpected: 'PalletStakingAsyncAhClientUnexpectedKind',
      SessionKeysUpdated: {
        stash: 'AccountId32',
        update: 'PalletStakingAsyncAhClientSessionKeysUpdate',
      },
      SessionKeysUpdateFailed: {
        stash: 'AccountId32',
        update: 'PalletStakingAsyncAhClientSessionKeysUpdate',
        error: 'SpRuntimeDispatchError'
      }
    }
  },
  /**
   * Lookup514: pallet_staking_async_ah_client::pallet::UnexpectedKind
   **/
  PalletStakingAsyncAhClientUnexpectedKind: {
    _enum: ['ReceivedValidatorSetWhilePassive', 'UnexpectedModeTransition', 'SessionReportSendFailed', 'SessionReportDropped', 'OffenceSendFailed', 'ValidatorPointDropped', 'InvalidKeysFromAssetHub']
  },
  /**
   * Lookup515: pallet_staking_async_ah_client::pallet::SessionKeysUpdate
   **/
  PalletStakingAsyncAhClientSessionKeysUpdate: {
    _enum: ['Set', 'Purged']
  },
  /**
   * Lookup517: polkadot_runtime::RuntimeParametersKey
   **/
  PolkadotRuntimeRuntimeParametersKey: {
    _enum: {
      AhClient: 'PolkadotRuntimeDynamicParamsAhClientParametersKey'
    }
  },
  /**
   * Lookup518: polkadot_runtime::dynamic_params::ah_client::ParametersKey
   **/
  PolkadotRuntimeDynamicParamsAhClientParametersKey: {
    _enum: ['MinimumValidatorSetSize']
  },
  /**
   * Lookup520: polkadot_runtime::RuntimeParametersValue
   **/
  PolkadotRuntimeRuntimeParametersValue: {
    _enum: {
      AhClient: 'PolkadotRuntimeDynamicParamsAhClientParametersValue'
    }
  },
  /**
   * Lookup521: polkadot_runtime::dynamic_params::ah_client::ParametersValue
   **/
  PolkadotRuntimeDynamicParamsAhClientParametersValue: {
    _enum: {
      MinimumValidatorSetSize: 'u32'
    }
  },
  /**
   * Lookup522: polkadot_runtime_parachains::inclusion::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsInclusionPalletEvent: {
    _enum: {
      CandidateBacked: '(PolkadotPrimitivesV9CandidateReceiptV2,Bytes,u32,u32)',
      CandidateIncluded: '(PolkadotPrimitivesV9CandidateReceiptV2,Bytes,u32,u32)',
      CandidateTimedOut: '(PolkadotPrimitivesV9CandidateReceiptV2,Bytes,u32)',
      UpwardMessagesReceived: {
        from: 'u32',
        count: 'u32'
      }
    }
  },
  /**
   * Lookup523: polkadot_primitives::v9::CandidateReceiptV2<primitive_types::H256>
   **/
  PolkadotPrimitivesV9CandidateReceiptV2: {
    descriptor: 'PolkadotPrimitivesV9CandidateDescriptorV2',
    commitmentsHash: 'H256'
  },
  /**
   * Lookup526: polkadot_runtime_parachains::paras::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsParasPalletEvent: {
    _enum: {
      CurrentCodeUpdated: 'u32',
      CurrentHeadUpdated: 'u32',
      CodeUpgradeScheduled: 'u32',
      NewHeadNoted: 'u32',
      ActionQueued: '(u32,u32)',
      PvfCheckStarted: '(H256,u32)',
      PvfCheckAccepted: '(H256,u32)',
      PvfCheckRejected: '(H256,u32)',
      UpgradeCooldownRemoved: {
        paraId: 'u32',
      },
      CodeAuthorized: {
        paraId: 'u32',
        codeHash: 'H256',
        expireAt: 'u32'
      }
    }
  },
  /**
   * Lookup527: polkadot_runtime_parachains::hrmp::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsHrmpPalletEvent: {
    _enum: {
      OpenChannelRequested: {
        sender: 'u32',
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      OpenChannelCanceled: {
        byParachain: 'u32',
        channelId: 'PolkadotParachainPrimitivesPrimitivesHrmpChannelId',
      },
      OpenChannelAccepted: {
        sender: 'u32',
        recipient: 'u32',
      },
      ChannelClosed: {
        byParachain: 'u32',
        channelId: 'PolkadotParachainPrimitivesPrimitivesHrmpChannelId',
      },
      HrmpChannelForceOpened: {
        sender: 'u32',
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      HrmpSystemChannelOpened: {
        sender: 'u32',
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      OpenChannelDepositsUpdated: {
        sender: 'u32',
        recipient: 'u32'
      }
    }
  },
  /**
   * Lookup528: polkadot_runtime_parachains::disputes::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsDisputesPalletEvent: {
    _enum: {
      DisputeInitiated: '(H256,PolkadotRuntimeParachainsDisputesDisputeLocation)',
      DisputeConcluded: '(H256,PolkadotRuntimeParachainsDisputesDisputeResult)',
      Revert: 'u32'
    }
  },
  /**
   * Lookup529: polkadot_runtime_parachains::disputes::DisputeLocation
   **/
  PolkadotRuntimeParachainsDisputesDisputeLocation: {
    _enum: ['Local', 'Remote']
  },
  /**
   * Lookup530: polkadot_runtime_parachains::disputes::DisputeResult
   **/
  PolkadotRuntimeParachainsDisputesDisputeResult: {
    _enum: ['Valid', 'Invalid']
  },
  /**
   * Lookup531: polkadot_runtime_parachains::on_demand::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsOnDemandPalletEvent: {
    _enum: {
      OnDemandOrderPlaced: {
        paraId: 'u32',
        spotPrice: 'u128',
        orderedBy: 'AccountId32',
      },
      SpotPriceSet: {
        spotPrice: 'u128',
      },
      AccountCredited: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup532: polkadot_runtime_common::paras_registrar::pallet::Event<T>
   **/
  PolkadotRuntimeCommonParasRegistrarPalletEvent: {
    _enum: {
      Registered: {
        paraId: 'u32',
        manager: 'AccountId32',
      },
      Deregistered: {
        paraId: 'u32',
      },
      Reserved: {
        paraId: 'u32',
        who: 'AccountId32',
      },
      Swapped: {
        paraId: 'u32',
        otherId: 'u32'
      }
    }
  },
  /**
   * Lookup533: polkadot_runtime_common::slots::pallet::Event<T>
   **/
  PolkadotRuntimeCommonSlotsPalletEvent: {
    _enum: {
      NewLeasePeriod: {
        leasePeriod: 'u32',
      },
      Leased: {
        paraId: 'u32',
        leaser: 'AccountId32',
        periodBegin: 'u32',
        periodCount: 'u32',
        extraReserved: 'u128',
        totalAmount: 'u128'
      }
    }
  },
  /**
   * Lookup534: polkadot_runtime_common::auctions::pallet::Event<T>
   **/
  PolkadotRuntimeCommonAuctionsPalletEvent: {
    _enum: {
      AuctionStarted: {
        auctionIndex: 'u32',
        leasePeriod: 'u32',
        ending: 'u32',
      },
      AuctionClosed: {
        auctionIndex: 'u32',
      },
      Reserved: {
        bidder: 'AccountId32',
        extraReserved: 'u128',
        totalAmount: 'u128',
      },
      Unreserved: {
        bidder: 'AccountId32',
        amount: 'u128',
      },
      ReserveConfiscated: {
        paraId: 'u32',
        leaser: 'AccountId32',
        amount: 'u128',
      },
      BidAccepted: {
        bidder: 'AccountId32',
        paraId: 'u32',
        amount: 'u128',
        firstSlot: 'u32',
        lastSlot: 'u32',
      },
      WinningOffset: {
        auctionIndex: 'u32',
        blockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup535: polkadot_runtime_common::crowdloan::pallet::Event<T>
   **/
  PolkadotRuntimeCommonCrowdloanPalletEvent: {
    _enum: {
      Created: {
        paraId: 'u32',
      },
      Contributed: {
        who: 'AccountId32',
        fundIndex: 'u32',
        amount: 'u128',
      },
      Withdrew: {
        who: 'AccountId32',
        fundIndex: 'u32',
        amount: 'u128',
      },
      PartiallyRefunded: {
        paraId: 'u32',
      },
      AllRefunded: {
        paraId: 'u32',
      },
      Dissolved: {
        paraId: 'u32',
      },
      HandleBidResult: {
        paraId: 'u32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Edited: {
        paraId: 'u32',
      },
      MemoUpdated: {
        who: 'AccountId32',
        paraId: 'u32',
        memo: 'Bytes',
      },
      AddedToNewRaise: {
        paraId: 'u32'
      }
    }
  },
  /**
   * Lookup536: polkadot_runtime_parachains::coretime::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsCoretimePalletEvent: {
    _enum: {
      RevenueInfoRequested: {
        when: 'u32',
      },
      CoreAssigned: {
        core: 'u32'
      }
    }
  },
  /**
   * Lookup540: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: {
        outcome: 'StagingXcmV5TraitsOutcome',
      },
      Sent: {
        origin: 'StagingXcmV5Location',
        destination: 'StagingXcmV5Location',
        message: 'StagingXcmV5Xcm',
        messageId: '[u8;32]',
      },
      SendFailed: {
        origin: 'StagingXcmV5Location',
        destination: 'StagingXcmV5Location',
        error: 'XcmV3TraitsSendError',
        messageId: '[u8;32]',
      },
      ProcessXcmError: {
        origin: 'StagingXcmV5Location',
        error: 'XcmV5TraitsError',
        messageId: '[u8;32]',
      },
      UnexpectedResponse: {
        origin: 'StagingXcmV5Location',
        queryId: 'u64',
      },
      ResponseReady: {
        queryId: 'u64',
        response: 'StagingXcmV5Response',
      },
      Notified: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyOverweight: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
        actualWeight: 'SpWeightsWeightV2Weight',
        maxBudgetedWeight: 'SpWeightsWeightV2Weight',
      },
      NotifyDispatchError: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyDecodeFailed: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      InvalidResponder: {
        origin: 'StagingXcmV5Location',
        queryId: 'u64',
        expectedLocation: 'Option<StagingXcmV5Location>',
      },
      InvalidResponderVersion: {
        origin: 'StagingXcmV5Location',
        queryId: 'u64',
      },
      ResponseTaken: {
        queryId: 'u64',
      },
      AssetsTrapped: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV5Location',
        assets: 'XcmVersionedAssets',
      },
      VersionChangeNotified: {
        destination: 'StagingXcmV5Location',
        result: 'u32',
        cost: 'StagingXcmV5AssetAssets',
        messageId: '[u8;32]',
      },
      SupportedVersionChanged: {
        location: 'StagingXcmV5Location',
        version: 'u32',
      },
      NotifyTargetSendFail: {
        location: 'StagingXcmV5Location',
        queryId: 'u64',
        error: 'XcmV5TraitsError',
      },
      NotifyTargetMigrationFail: {
        location: 'XcmVersionedLocation',
        queryId: 'u64',
      },
      InvalidQuerierVersion: {
        origin: 'StagingXcmV5Location',
        queryId: 'u64',
      },
      InvalidQuerier: {
        origin: 'StagingXcmV5Location',
        queryId: 'u64',
        expectedQuerier: 'StagingXcmV5Location',
        maybeActualQuerier: 'Option<StagingXcmV5Location>',
      },
      VersionNotifyStarted: {
        destination: 'StagingXcmV5Location',
        cost: 'StagingXcmV5AssetAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyRequested: {
        destination: 'StagingXcmV5Location',
        cost: 'StagingXcmV5AssetAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyUnrequested: {
        destination: 'StagingXcmV5Location',
        cost: 'StagingXcmV5AssetAssets',
        messageId: '[u8;32]',
      },
      FeesPaid: {
        paying: 'StagingXcmV5Location',
        fees: 'StagingXcmV5AssetAssets',
      },
      AssetsClaimed: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV5Location',
        assets: 'XcmVersionedAssets',
      },
      VersionMigrationFinished: {
        version: 'u32',
      },
      AliasAuthorized: {
        aliaser: 'StagingXcmV5Location',
        target: 'StagingXcmV5Location',
        expiry: 'Option<u64>',
      },
      AliasAuthorizationRemoved: {
        aliaser: 'StagingXcmV5Location',
        target: 'StagingXcmV5Location',
      },
      AliasesAuthorizationsRemoved: {
        target: 'StagingXcmV5Location'
      }
    }
  },
  /**
   * Lookup541: staging_xcm::v5::traits::Outcome
   **/
  StagingXcmV5TraitsOutcome: {
    _enum: {
      Complete: {
        used: 'SpWeightsWeightV2Weight',
      },
      Incomplete: {
        used: 'SpWeightsWeightV2Weight',
        error: 'StagingXcmV5TraitsInstructionError',
      },
      Error: 'StagingXcmV5TraitsInstructionError'
    }
  },
  /**
   * Lookup542: staging_xcm::v5::traits::InstructionError
   **/
  StagingXcmV5TraitsInstructionError: {
    index: 'u8',
    error: 'XcmV5TraitsError'
  },
  /**
   * Lookup543: xcm::v3::traits::SendError
   **/
  XcmV3TraitsSendError: {
    _enum: ['NotApplicable', 'Transport', 'Unroutable', 'DestinationUnsupported', 'ExceedsMaxMessageSize', 'MissingArgument', 'Fees']
  },
  /**
   * Lookup613: polkadot_runtime::RuntimeFreezeReason
   **/
  PolkadotRuntimeRuntimeFreezeReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
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
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      NominationPools: 'PalletNominationPoolsFreezeReason'
    }
  },
  /**
   * Lookup618: frame_support::traits::storage::NoDrop<frame_support::traits::tokens::fungible::imbalance::Imbalance<B, OnDrop, OppositeOnDrop>>
   **/
  FrameSupportStorageNoDrop: 'FrameSupportTokensFungibleImbalance',
  /**
   * Lookup619: frame_support::traits::tokens::fungible::imbalance::Imbalance<B, OnDrop, OppositeOnDrop>
   **/
  FrameSupportTokensFungibleImbalance: {
    amount: 'u128'
  },
  /**
   * Lookup679: pallet_referenda::types::ReferendumInfo<TrackId, polkadot_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<polkadot_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumInfo: {
    _enum: {
      Ongoing: 'PalletReferendaReferendumStatus',
      Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup680: pallet_referenda::types::ReferendumStatus<TrackId, polkadot_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<polkadot_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatus: {
    track: 'u16',
    origin: 'PolkadotRuntimeOriginCaller',
    proposal: 'FrameSupportPreimagesBounded',
    enactment: 'FrameSupportScheduleDispatchTime',
    submitted: 'u32',
    submissionDeposit: 'PalletReferendaDeposit',
    decisionDeposit: 'Option<PalletReferendaDeposit>',
    deciding: 'Option<PalletReferendaDecidingStatus>',
    tally: 'PalletConvictionVotingTally',
    inQueue: 'bool',
    alarm: 'Option<(u32,(u32,u32))>'
  },
  /**
   * Lookup698: polkadot_runtime_common::claims::pallet::Error<T>
   **/
  PolkadotRuntimeCommonClaimsPalletError: {
    _enum: ['InvalidEthereumSignature', 'SignerHasNoClaim', 'SenderHasNoClaim', 'PotUnderflow', 'InvalidStatement', 'VestedBalanceExists']
  },
  /**
   * Lookup771: pallet_staking_async_rc_client::SessionReport<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncRcClientSessionReport: {
    endIndex: 'u32',
    validatorPoints: 'Vec<(AccountId32,u32)>',
    activationTimestamp: 'Option<(u64,u32)>',
    leftover: 'bool'
  },
  /**
   * Lookup775: pallet_staking_async_rc_client::Offence<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncRcClientOffence: {
    offender: 'AccountId32',
    reporters: 'Vec<AccountId32>',
    slashFraction: 'Perbill'
  },
  /**
   * Lookup777: pallet_staking_async_ah_client::pallet::Error<T>
   **/
  PalletStakingAsyncAhClientError: {
    _enum: ['Blocked']
  },
  /**
   * Lookup778: polkadot_runtime_parachains::configuration::HostConfiguration<BlockNumber>
   **/
  PolkadotRuntimeParachainsConfigurationHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32',
    asyncBackingParams: 'PolkadotPrimitivesV9AsyncBackingAsyncBackingParams',
    maxPovSize: 'u32',
    maxDownwardMessageSize: 'u32',
    hrmpMaxParachainOutboundChannels: 'u32',
    hrmpSenderDeposit: 'u128',
    hrmpRecipientDeposit: 'u128',
    hrmpChannelMaxCapacity: 'u32',
    hrmpChannelMaxTotalSize: 'u32',
    hrmpMaxParachainInboundChannels: 'u32',
    hrmpChannelMaxMessageSize: 'u32',
    executorParams: 'PolkadotPrimitivesV9ExecutorParams',
    codeRetentionPeriod: 'u32',
    maxValidators: 'Option<u32>',
    disputePeriod: 'u32',
    disputePostConclusionAcceptancePeriod: 'u32',
    noShowSlots: 'u32',
    nDelayTranches: 'u32',
    zerothDelayTrancheWidth: 'u32',
    neededApprovals: 'u32',
    relayVrfModuloSamples: 'u32',
    pvfVotingTtl: 'u32',
    minimumValidationUpgradeDelay: 'u32',
    minimumBackingVotes: 'u32',
    nodeFeatures: 'BitVec',
    approvalVotingParams: 'PolkadotPrimitivesV9ApprovalVotingParams',
    schedulerParams: 'PolkadotPrimitivesVstagingSchedulerParams',
    maxRelayParentSessionAge: 'u32'
  },
  /**
   * Lookup781: polkadot_runtime_parachains::configuration::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsConfigurationPalletError: {
    _enum: ['InvalidNewValue']
  },
  /**
   * Lookup784: polkadot_runtime_parachains::shared::AllowedSchedulingParentsTracker<primitive_types::H256, BlockNumber>
   **/
  PolkadotRuntimeParachainsSharedAllowedSchedulingParentsTracker: {
    buffer: 'Vec<PolkadotRuntimeParachainsSharedSchedulingParentInfo>',
    latestNumber: 'u32'
  },
  /**
   * Lookup786: polkadot_runtime_parachains::shared::SchedulingParentInfo<primitive_types::H256>
   **/
  PolkadotRuntimeParachainsSharedSchedulingParentInfo: {
    schedulingParent: 'H256',
    claimQueue: 'BTreeMap<u32, BTreeMap<u8, BTreeSet<u32>>>'
  },
  /**
   * Lookup796: polkadot_primitives::vstaging::RelayParentInfo<primitive_types::H256, BlockNumber>
   **/
  PolkadotPrimitivesVstagingRelayParentInfo: {
    number: 'u32',
    stateRoot: 'H256'
  },
  /**
   * Lookup798: polkadot_runtime_parachains::inclusion::CandidatePendingAvailability<primitive_types::H256, N>
   **/
  PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: {
    _alias: {
      hash_: 'hash'
    },
    core: 'u32',
    hash_: 'H256',
    descriptor: 'PolkadotPrimitivesV9CandidateDescriptorV2',
    commitments: 'PolkadotPrimitivesV9CandidateCommitments',
    availabilityVotes: 'BitVec',
    backers: 'BitVec',
    relayParentNumber: 'u32',
    backedInNumber: 'u32',
    backingGroup: 'u32'
  },
  /**
   * Lookup799: polkadot_runtime_parachains::inclusion::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsInclusionPalletError: {
    _enum: ['ValidatorIndexOutOfBounds', 'UnscheduledCandidate', 'HeadDataTooLarge', 'PrematureCodeUpgrade', 'NewCodeTooLarge', 'DisallowedRelayParent', 'DisallowedSchedulingParent', 'InvalidAssignment', 'InvalidGroupIndex', 'InsufficientBacking', 'InvalidBacking', 'ValidationDataHashMismatch', 'IncorrectDownwardMessageHandling', 'InvalidUpwardMessages', 'HrmpWatermarkMishandling', 'InvalidOutboundHrmp', 'InvalidValidationCodeHash', 'ParaHeadMismatch']
  },
  /**
   * Lookup800: polkadot_primitives::v9::ScrapedOnChainVotes<primitive_types::H256>
   **/
  PolkadotPrimitivesV9ScrapedOnChainVotes: {
    session: 'u32',
    backingValidatorsPerCandidate: 'Vec<(PolkadotPrimitivesV9CandidateReceiptV2,Vec<(u32,PolkadotPrimitivesV9ValidityAttestation)>)>',
    disputes: 'Vec<PolkadotPrimitivesV9DisputeStatementSet>'
  },
  /**
   * Lookup805: polkadot_runtime_parachains::paras_inherent::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsParasInherentPalletError: {
    _enum: ['TooManyInclusionInherents', 'InvalidParentHeader', 'InherentDataFilteredDuringExecution', 'UnscheduledCandidate']
  },
  /**
   * Lookup808: polkadot_runtime_parachains::scheduler::assigner_coretime::Schedule<N>
   **/
  PolkadotRuntimeParachainsSchedulerAssignerCoretimeSchedule: {
    assignments: 'Vec<(PalletBrokerCoretimeInterfaceCoreAssignment,u16)>',
    endHint: 'Option<u32>',
    nextSchedule: 'Option<u32>'
  },
  /**
   * Lookup810: polkadot_runtime_parachains::scheduler::assigner_coretime::CoreDescriptor<N>
   **/
  PolkadotRuntimeParachainsSchedulerAssignerCoretimeCoreDescriptor: {
    queue: 'Option<PolkadotRuntimeParachainsSchedulerAssignerCoretimeQueueDescriptor>',
    currentWork: 'Option<PolkadotRuntimeParachainsSchedulerAssignerCoretimeWorkState>'
  },
  /**
   * Lookup812: polkadot_runtime_parachains::scheduler::assigner_coretime::QueueDescriptor<N>
   **/
  PolkadotRuntimeParachainsSchedulerAssignerCoretimeQueueDescriptor: {
    first: 'u32',
    last: 'u32'
  },
  /**
   * Lookup814: polkadot_runtime_parachains::scheduler::assigner_coretime::WorkState<N>
   **/
  PolkadotRuntimeParachainsSchedulerAssignerCoretimeWorkState: {
    assignments: 'Vec<(PalletBrokerCoretimeInterfaceCoreAssignment,PolkadotRuntimeParachainsSchedulerAssignerCoretimeAssignmentState)>',
    endHint: 'Option<u32>',
    pos: 'u16',
    step: 'u16'
  },
  /**
   * Lookup817: polkadot_runtime_parachains::scheduler::assigner_coretime::AssignmentState
   **/
  PolkadotRuntimeParachainsSchedulerAssignerCoretimeAssignmentState: {
    ratio: 'u16',
    remaining: 'u16'
  },
  /**
   * Lookup820: polkadot_runtime_parachains::scheduler::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsSchedulerPalletError: {
    _enum: ['AssignmentsEmpty', 'DisallowedInsert']
  },
  /**
   * Lookup821: polkadot_runtime_parachains::paras::PvfCheckActiveVoteState<BlockNumber>
   **/
  PolkadotRuntimeParachainsParasPvfCheckActiveVoteState: {
    votesAccept: 'BitVec',
    votesReject: 'BitVec',
    age: 'u32',
    createdAt: 'u32',
    causes: 'Vec<PolkadotRuntimeParachainsParasPvfCheckCause>'
  },
  /**
   * Lookup823: polkadot_runtime_parachains::paras::PvfCheckCause<BlockNumber>
   **/
  PolkadotRuntimeParachainsParasPvfCheckCause: {
    _enum: {
      Onboarding: 'u32',
      Upgrade: {
        id: 'u32',
        includedAt: 'u32',
        upgradeStrategy: 'PolkadotRuntimeParachainsParasUpgradeStrategy'
      }
    }
  },
  /**
   * Lookup824: polkadot_runtime_parachains::paras::UpgradeStrategy
   **/
  PolkadotRuntimeParachainsParasUpgradeStrategy: {
    _enum: ['SetGoAheadSignal', 'ApplyAtExpectedBlock']
  },
  /**
   * Lookup827: polkadot_runtime_parachains::paras::ParaLifecycle
   **/
  PolkadotRuntimeParachainsParasParaLifecycle: {
    _enum: ['Onboarding', 'Parathread', 'Parachain', 'UpgradingParathread', 'DowngradingParachain', 'OffboardingParathread', 'OffboardingParachain']
  },
  /**
   * Lookup829: polkadot_runtime_parachains::paras::ParaPastCodeMeta<N>
   **/
  PolkadotRuntimeParachainsParasParaPastCodeMeta: {
    upgradeTimes: 'Vec<PolkadotRuntimeParachainsParasReplacementTimes>',
    lastPruned: 'Option<u32>'
  },
  /**
   * Lookup831: polkadot_runtime_parachains::paras::ReplacementTimes<N>
   **/
  PolkadotRuntimeParachainsParasReplacementTimes: {
    expectedAt: 'u32',
    activatedAt: 'u32'
  },
  /**
   * Lookup833: polkadot_runtime_parachains::paras::AuthorizedCodeHashAndExpiry<T>
   **/
  PolkadotRuntimeParachainsParasAuthorizedCodeHashAndExpiry: {
    codeHash: 'H256',
    expireAt: 'u32'
  },
  /**
   * Lookup834: polkadot_primitives::v9::UpgradeGoAhead
   **/
  PolkadotPrimitivesV9UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup835: polkadot_primitives::v9::UpgradeRestriction
   **/
  PolkadotPrimitivesV9UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup836: polkadot_runtime_parachains::paras::ParaGenesisArgs
   **/
  PolkadotRuntimeParachainsParasParaGenesisArgs: {
    genesisHead: 'Bytes',
    validationCode: 'Bytes',
    paraKind: 'bool'
  },
  /**
   * Lookup837: polkadot_runtime_parachains::paras::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsParasPalletError: {
    _enum: ['NotRegistered', 'CannotOnboard', 'CannotOffboard', 'CannotUpgrade', 'CannotDowngrade', 'PvfCheckStatementStale', 'PvfCheckStatementFuture', 'PvfCheckValidatorIndexOutOfBounds', 'PvfCheckInvalidSignature', 'PvfCheckDoubleVote', 'PvfCheckSubjectInvalid', 'CannotUpgradeCode', 'InvalidCode', 'NothingAuthorized', 'Unauthorized', 'InvalidBlockNumber']
  },
  /**
   * Lookup839: polkadot_runtime_parachains::initializer::BufferedSessionChange
   **/
  PolkadotRuntimeParachainsInitializerBufferedSessionChange: {
    validators: 'Vec<PolkadotPrimitivesV9ValidatorAppPublic>',
    queued: 'Vec<PolkadotPrimitivesV9ValidatorAppPublic>',
    sessionIndex: 'u32'
  },
  /**
   * Lookup841: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup842: polkadot_runtime_parachains::hrmp::HrmpOpenChannelRequest
   **/
  PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest: {
    confirmed: 'bool',
    age: 'u32',
    senderDeposit: 'u128',
    maxMessageSize: 'u32',
    maxCapacity: 'u32',
    maxTotalSize: 'u32'
  },
  /**
   * Lookup844: polkadot_runtime_parachains::hrmp::HrmpChannel
   **/
  PolkadotRuntimeParachainsHrmpHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>',
    senderDeposit: 'u128',
    recipientDeposit: 'u128'
  },
  /**
   * Lookup846: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup849: polkadot_runtime_parachains::hrmp::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsHrmpPalletError: {
    _enum: ['OpenHrmpChannelToSelf', 'OpenHrmpChannelInvalidRecipient', 'OpenHrmpChannelZeroCapacity', 'OpenHrmpChannelCapacityExceedsLimit', 'OpenHrmpChannelZeroMessageSize', 'OpenHrmpChannelMessageSizeExceedsLimit', 'OpenHrmpChannelAlreadyExists', 'OpenHrmpChannelAlreadyRequested', 'OpenHrmpChannelLimitExceeded', 'AcceptHrmpChannelDoesntExist', 'AcceptHrmpChannelAlreadyConfirmed', 'AcceptHrmpChannelLimitExceeded', 'CloseHrmpChannelUnauthorized', 'CloseHrmpChannelDoesntExist', 'CloseHrmpChannelAlreadyUnderway', 'CancelHrmpOpenChannelUnauthorized', 'OpenHrmpChannelDoesntExist', 'OpenHrmpChannelAlreadyConfirmed', 'WrongWitness', 'ChannelCreationNotAuthorized']
  },
  /**
   * Lookup851: polkadot_primitives::v9::SessionInfo
   **/
  PolkadotPrimitivesV9SessionInfo: {
    activeValidatorIndices: 'Vec<u32>',
    randomSeed: '[u8;32]',
    disputePeriod: 'u32',
    validators: 'PolkadotPrimitivesV9IndexedVecValidatorIndex',
    discoveryKeys: 'Vec<SpAuthorityDiscoveryAppPublic>',
    assignmentKeys: 'Vec<PolkadotPrimitivesV9AssignmentAppPublic>',
    validatorGroups: 'PolkadotPrimitivesV9IndexedVecGroupIndex',
    nCores: 'u32',
    zerothDelayTrancheWidth: 'u32',
    relayVrfModuloSamples: 'u32',
    nDelayTranches: 'u32',
    noShowSlots: 'u32',
    neededApprovals: 'u32'
  },
  /**
   * Lookup852: polkadot_primitives::v9::IndexedVec<polkadot_primitives::v9::ValidatorIndex, polkadot_primitives::v9::validator_app::Public>
   **/
  PolkadotPrimitivesV9IndexedVecValidatorIndex: 'Vec<PolkadotPrimitivesV9ValidatorAppPublic>',
  /**
   * Lookup853: polkadot_primitives::v9::IndexedVec<polkadot_primitives::v9::GroupIndex, V>
   **/
  PolkadotPrimitivesV9IndexedVecGroupIndex: 'Vec<Vec<u32>>',
  /**
   * Lookup855: polkadot_primitives::v9::DisputeState<N>
   **/
  PolkadotPrimitivesV9DisputeState: {
    validatorsFor: 'BitVec',
    validatorsAgainst: 'BitVec',
    start: 'u32',
    concludedAt: 'Option<u32>'
  },
  /**
   * Lookup857: polkadot_runtime_parachains::disputes::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsDisputesPalletError: {
    _enum: ['DuplicateDisputeStatementSets', 'AncientDisputeStatement', 'ValidatorIndexOutOfBounds', 'InvalidSignature', 'DuplicateStatement', 'SingleSidedDispute', 'MaliciousBacker', 'MissingBackingVotes', 'UnconfirmedDispute']
  },
  /**
   * Lookup858: polkadot_primitives::v9::slashing::PendingSlashes
   **/
  PolkadotPrimitivesV9SlashingPendingSlashes: {
    _alias: {
      keys_: 'keys'
    },
    keys_: 'BTreeMap<u32, PolkadotPrimitivesV9ValidatorAppPublic>',
    kind: 'PolkadotPrimitivesV9DisputeOffenceKind'
  },
  /**
   * Lookup862: polkadot_runtime_parachains::disputes::slashing::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsDisputesSlashingPalletError: {
    _enum: ['InvalidKeyOwnershipProof', 'InvalidSessionIndex', 'InvalidCandidateHash', 'InvalidValidatorIndex', 'ValidatorIndexIdMismatch', 'DuplicateSlashingReport']
  },
  /**
   * Lookup863: polkadot_runtime_parachains::on_demand::OrderStatus<N>
   **/
  PolkadotRuntimeParachainsOnDemandOrderStatus: {
    traffic: 'u128',
    queue: 'PolkadotRuntimeParachainsOnDemandOrderQueue'
  },
  /**
   * Lookup864: polkadot_runtime_parachains::on_demand::OrderQueue<N>
   **/
  PolkadotRuntimeParachainsOnDemandOrderQueue: {
    queue: 'Vec<PolkadotRuntimeParachainsOnDemandEnqueuedOrder>'
  },
  /**
   * Lookup866: polkadot_runtime_parachains::on_demand::EnqueuedOrder<N>
   **/
  PolkadotRuntimeParachainsOnDemandEnqueuedOrder: {
    paraId: 'u32',
    orderedAt: 'u32'
  },
  /**
   * Lookup870: polkadot_runtime_parachains::on_demand::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsOnDemandPalletError: {
    _enum: ['QueueFull', 'SpotPriceHigherThanMaxAmount', 'InsufficientCredits']
  },
  /**
   * Lookup871: polkadot_runtime_common::paras_registrar::ParaInfo<sp_core::crypto::AccountId32, Balance>
   **/
  PolkadotRuntimeCommonParasRegistrarParaInfo: {
    manager: 'AccountId32',
    deposit: 'u128',
    locked: 'Option<bool>'
  },
  /**
   * Lookup873: polkadot_runtime_common::paras_registrar::pallet::Error<T>
   **/
  PolkadotRuntimeCommonParasRegistrarPalletError: {
    _enum: ['NotRegistered', 'AlreadyRegistered', 'NotOwner', 'CodeTooLarge', 'HeadDataTooLarge', 'NotParachain', 'NotParathread', 'CannotDeregister', 'CannotDowngrade', 'CannotUpgrade', 'ParaLocked', 'NotReserved', 'InvalidCode', 'CannotSwap']
  },
  /**
   * Lookup875: polkadot_runtime_common::slots::pallet::Error<T>
   **/
  PolkadotRuntimeCommonSlotsPalletError: {
    _enum: ['ParaNotOnboarding', 'LeaseError']
  },
  /**
   * Lookup880: polkadot_runtime_common::auctions::pallet::Error<T>
   **/
  PolkadotRuntimeCommonAuctionsPalletError: {
    _enum: ['AuctionInProgress', 'LeasePeriodInPast', 'ParaNotRegistered', 'NotCurrentAuction', 'NotAuction', 'AuctionEnded', 'AlreadyLeasedOut']
  },
  /**
   * Lookup881: polkadot_runtime_common::crowdloan::FundInfo<sp_core::crypto::AccountId32, Balance, BlockNumber, LeasePeriod>
   **/
  PolkadotRuntimeCommonCrowdloanFundInfo: {
    depositor: 'AccountId32',
    verifier: 'Option<SpRuntimeMultiSigner>',
    deposit: 'u128',
    raised: 'u128',
    end: 'u32',
    cap: 'u128',
    lastContribution: 'PolkadotRuntimeCommonCrowdloanLastContribution',
    firstPeriod: 'u32',
    lastPeriod: 'u32',
    fundIndex: 'u32'
  },
  /**
   * Lookup882: polkadot_runtime_common::crowdloan::LastContribution<BlockNumber>
   **/
  PolkadotRuntimeCommonCrowdloanLastContribution: {
    _enum: {
      Never: 'Null',
      PreEnding: 'u32',
      Ending: 'u32'
    }
  },
  /**
   * Lookup883: polkadot_runtime_common::crowdloan::pallet::Error<T>
   **/
  PolkadotRuntimeCommonCrowdloanPalletError: {
    _enum: ['FirstPeriodInPast', 'FirstPeriodTooFarInFuture', 'LastPeriodBeforeFirstPeriod', 'LastPeriodTooFarInFuture', 'CannotEndInPast', 'EndTooFarInFuture', 'Overflow', 'ContributionTooSmall', 'InvalidParaId', 'CapExceeded', 'ContributionPeriodOver', 'InvalidOrigin', 'NotParachain', 'LeaseActive', 'BidOrLeaseActive', 'FundNotEnded', 'NoContributions', 'NotReadyToDissolve', 'InvalidSignature', 'MemoTooLarge', 'AlreadyInNewRaise', 'VrfDelayInProgress', 'NoLeasePeriod']
  },
  /**
   * Lookup884: polkadot_runtime_parachains::coretime::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsCoretimePalletError: {
    _enum: ['NotBroker', 'RequestedFutureRevenue', 'AssetTransferFailed']
  },
  /**
   * Lookup885: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'XcmVersionedLocation',
        maybeMatchQuerier: 'Option<XcmVersionedLocation>',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u32',
      },
      VersionNotifier: {
        origin: 'XcmVersionedLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'XcmVersionedResponse',
        at: 'u32'
      }
    }
  },
  /**
   * Lookup889: xcm::VersionedResponse
   **/
  XcmVersionedResponse: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3Response',
      V4: 'StagingXcmV4Response',
      V5: 'StagingXcmV5Response'
    }
  },
  /**
   * Lookup895: pallet_xcm::pallet::VersionMigrationStage
   **/
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: 'Null',
      MigrateVersionNotifiers: 'Null',
      NotifyCurrentTargets: 'Option<Bytes>',
      MigrateAndNotifyOldTargets: 'Null'
    }
  },
  /**
   * Lookup898: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
   **/
  PalletXcmRemoteLockedFungibleRecord: {
    amount: 'u128',
    owner: 'XcmVersionedLocation',
    locker: 'XcmVersionedLocation',
    consumers: 'Vec<(Null,u128)>'
  },
  /**
   * Lookup905: pallet_xcm::AuthorizedAliasesEntry<frame_support::traits::storage::Disabled, pallet_xcm::pallet::MaxAuthorizedAliases>
   **/
  PalletXcmAuthorizedAliasesEntry: {
    aliasers: 'Vec<XcmRuntimeApisAuthorizedAliasesOriginAliaser>',
    ticket: 'FrameSupportStorageDisabled'
  },
  /**
   * Lookup906: frame_support::traits::storage::Disabled
   **/
  FrameSupportStorageDisabled: 'Null',
  /**
   * Lookup907: pallet_xcm::pallet::MaxAuthorizedAliases
   **/
  PalletXcmMaxAuthorizedAliases: 'Null',
  /**
   * Lookup909: xcm_runtime_apis::authorized_aliases::OriginAliaser
   **/
  XcmRuntimeApisAuthorizedAliasesOriginAliaser: {
    location: 'XcmVersionedLocation',
    expiry: 'Option<u64>'
  },
  /**
   * Lookup911: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: {
      Unreachable: 'Null',
      SendFailure: 'Null',
      Filtered: 'Null',
      UnweighableMessage: 'Null',
      DestinationNotInvertible: 'Null',
      Empty: 'Null',
      CannotReanchor: 'Null',
      TooManyAssets: 'Null',
      InvalidOrigin: 'Null',
      BadVersion: 'Null',
      BadLocation: 'Null',
      NoSubscription: 'Null',
      AlreadySubscribed: 'Null',
      CannotCheckOutTeleport: 'Null',
      LowBalance: 'Null',
      TooManyLocks: 'Null',
      AccountNotSovereign: 'Null',
      FeesNotMet: 'Null',
      LockNotFound: 'Null',
      InUse: 'Null',
      __Unused20: 'Null',
      InvalidAssetUnknownReserve: 'Null',
      InvalidAssetUnsupportedReserve: 'Null',
      TooManyReserves: 'Null',
      LocalExecutionIncomplete: 'Null',
      TooManyAuthorizedAliases: 'Null',
      ExpiresInPast: 'Null',
      AliasNotFound: 'Null',
      LocalExecutionIncompleteWithError: {
        index: 'u8',
        error: 'PalletXcmErrorsExecutionError'
      }
    }
  },
  /**
   * Lookup912: pallet_xcm::errors::ExecutionError
   **/
  PalletXcmErrorsExecutionError: {
    _enum: ['Overflow', 'Unimplemented', 'UntrustedReserveLocation', 'UntrustedTeleportLocation', 'LocationFull', 'LocationNotInvertible', 'BadOrigin', 'InvalidLocation', 'AssetNotFound', 'FailedToTransactAsset', 'NotWithdrawable', 'LocationCannotHold', 'ExceedsMaxMessageSize', 'DestinationUnsupported', 'Transport', 'Unroutable', 'UnknownClaim', 'FailedToDecode', 'MaxWeightInvalid', 'NotHoldingFees', 'TooExpensive', 'Trap', 'ExpectationFalse', 'PalletNotFound', 'NameMismatch', 'VersionIncompatible', 'HoldingWouldOverflow', 'ExportError', 'ReanchorFailed', 'NoDeal', 'FeesNotMet', 'LockError', 'NoPermission', 'Unanchored', 'NotDepositable', 'TooManyAssets', 'UnhandledXcmVersion', 'WeightLimitReached', 'Barrier', 'WeightNotComputable', 'ExceedsStackLimit']
  },
  /**
   * Lookup925: pallet_rc_migrator::AccountState<Balance>
   **/
  PalletRcMigratorAccountState: {
    _enum: {
      Migrate: 'Null',
      Preserve: 'Null',
      Part: {
        free: 'u128',
        reserved: 'u128',
        consumers: 'u32'
      }
    }
  },
  /**
   * Lookup926: pallet_rc_migrator::pallet::Error<T>
   **/
  PalletRcMigratorError: 'Null',
  /**
   * Lookup927: sp_runtime::generic::block::LazyBlock<sp_runtime::generic::header::Header<Number, Hash>, sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic<sp_runtime::multiaddress::MultiAddress<sp_core::crypto::AccountId32, AccountIndex>, polkadot_runtime::RuntimeCall, sp_runtime::MultiSignature, Extra>>
   **/
  SpRuntimeBlockLazyBlock: {
    header: 'SpRuntimeHeader',
    extrinsics: 'Vec<Bytes>'
  },
  /**
   * Lookup947: polkadot_primitives::v9::GroupRotationInfo<N>
   **/
  PolkadotPrimitivesV9GroupRotationInfo: {
    sessionStartBlock: 'u32',
    groupRotationFrequency: 'u32',
    now: 'u32'
  },
  /**
   * Lookup949: polkadot_primitives::v9::CoreState<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV9CoreState: {
    _enum: {
      Occupied: 'PolkadotPrimitivesV9OccupiedCore',
      Scheduled: 'PolkadotPrimitivesV9ScheduledCore',
      Free: 'Null'
    }
  },
  /**
   * Lookup950: polkadot_primitives::v9::OccupiedCore<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV9OccupiedCore: {
    nextUpOnAvailable: 'Option<PolkadotPrimitivesV9ScheduledCore>',
    occupiedSince: 'u32',
    timeOutAt: 'u32',
    nextUpOnTimeOut: 'Option<PolkadotPrimitivesV9ScheduledCore>',
    availability: 'BitVec',
    groupResponsible: 'u32',
    candidateHash: 'H256',
    candidateDescriptor: 'PolkadotPrimitivesV9CandidateDescriptorV2'
  },
  /**
   * Lookup952: polkadot_primitives::v9::ScheduledCore
   **/
  PolkadotPrimitivesV9ScheduledCore: {
    paraId: 'u32',
    collator: 'Option<PolkadotPrimitivesV9CollatorAppPublic>'
  },
  /**
   * Lookup954: polkadot_primitives::v9::collator_app::Public
   **/
  PolkadotPrimitivesV9CollatorAppPublic: '[u8;32]',
  /**
   * Lookup955: polkadot_primitives::v9::OccupiedCoreAssumption
   **/
  PolkadotPrimitivesV9OccupiedCoreAssumption: {
    _enum: ['Included', 'TimedOut', 'Free']
  },
  /**
   * Lookup957: polkadot_primitives::v9::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV9PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup962: polkadot_primitives::v9::CandidateEvent<primitive_types::H256>
   **/
  PolkadotPrimitivesV9CandidateEvent: {
    _enum: {
      CandidateBacked: '(PolkadotPrimitivesV9CandidateReceiptV2,Bytes,u32,u32)',
      CandidateIncluded: '(PolkadotPrimitivesV9CandidateReceiptV2,Bytes,u32,u32)',
      CandidateTimedOut: '(PolkadotPrimitivesV9CandidateReceiptV2,Bytes,u32)'
    }
  },
  /**
   * Lookup974: polkadot_primitives::v9::slashing::LegacyPendingSlashes
   **/
  PolkadotPrimitivesV9SlashingLegacyPendingSlashes: {
    _alias: {
      keys_: 'keys'
    },
    keys_: 'BTreeMap<u32, PolkadotPrimitivesV9ValidatorAppPublic>',
    kind: 'PolkadotPrimitivesV9SlashingSlashingOffenceKind'
  },
  /**
   * Lookup975: polkadot_primitives::v9::slashing::SlashingOffenceKind
   **/
  PolkadotPrimitivesV9SlashingSlashingOffenceKind: {
    _enum: ['ForInvalid', 'AgainstValid']
  },
  /**
   * Lookup980: polkadot_primitives::v9::async_backing::BackingState<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV9AsyncBackingBackingState: {
    constraints: 'PolkadotPrimitivesV9AsyncBackingConstraints',
    pendingAvailability: 'Vec<PolkadotPrimitivesV9AsyncBackingCandidatePendingAvailability>'
  },
  /**
   * Lookup981: polkadot_primitives::v9::async_backing::Constraints<N>
   **/
  PolkadotPrimitivesV9AsyncBackingConstraints: {
    minRelayParentNumber: 'u32',
    maxPovSize: 'u32',
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    umpRemaining: 'u32',
    umpRemainingBytes: 'u32',
    maxUmpNumPerCandidate: 'u32',
    dmpRemainingMessages: 'Vec<u32>',
    hrmpInbound: 'PolkadotPrimitivesV9AsyncBackingInboundHrmpLimitations',
    hrmpChannelsOut: 'Vec<(u32,PolkadotPrimitivesV9AsyncBackingOutboundHrmpChannelLimitations)>',
    maxHrmpNumPerCandidate: 'u32',
    requiredParent: 'Bytes',
    validationCodeHash: 'H256',
    upgradeRestriction: 'Option<PolkadotPrimitivesV9UpgradeRestriction>',
    futureValidationCode: 'Option<(u32,H256)>'
  },
  /**
   * Lookup982: polkadot_primitives::v9::async_backing::InboundHrmpLimitations<N>
   **/
  PolkadotPrimitivesV9AsyncBackingInboundHrmpLimitations: {
    validWatermarks: 'Vec<u32>'
  },
  /**
   * Lookup985: polkadot_primitives::v9::async_backing::OutboundHrmpChannelLimitations
   **/
  PolkadotPrimitivesV9AsyncBackingOutboundHrmpChannelLimitations: {
    bytesRemaining: 'u32',
    messagesRemaining: 'u32'
  },
  /**
   * Lookup990: polkadot_primitives::v9::async_backing::CandidatePendingAvailability<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV9AsyncBackingCandidatePendingAvailability: {
    candidateHash: 'H256',
    descriptor: 'PolkadotPrimitivesV9CandidateDescriptorV2',
    commitments: 'PolkadotPrimitivesV9CandidateCommitments',
    relayParentNumber: 'u32',
    maxPovSize: 'u32'
  },
  /**
   * Lookup1018: sp_session::runtime_api::OpaqueGeneratedSessionKeys
   **/
  SpSessionRuntimeApiOpaqueGeneratedSessionKeys: {
    _alias: {
      keys_: 'keys'
    },
    keys_: 'Bytes',
    proof: 'Bytes'
  },
  /**
   * Lookup1031: xcm_runtime_apis::fees::Error
   **/
  XcmRuntimeApisFeesError: {
    _enum: ['Unimplemented', 'VersionedConversionFailed', 'WeightNotComputable', 'UnhandledXcmVersion', 'AssetNotFound', 'Unroutable']
  },
  /**
   * Lookup1036: xcm_runtime_apis::dry_run::CallDryRunEffects<polkadot_runtime::RuntimeEvent>
   **/
  XcmRuntimeApisDryRunCallDryRunEffects: {
    executionResult: 'Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>',
    emittedEvents: 'Vec<Event>',
    localXcm: 'Option<XcmVersionedXcm>',
    forwardedXcms: 'Vec<(XcmVersionedLocation,Vec<XcmVersionedXcm>)>'
  },
  /**
   * Lookup1042: xcm_runtime_apis::dry_run::Error
   **/
  XcmRuntimeApisDryRunError: {
    _enum: ['Unimplemented', 'VersionedConversionFailed']
  },
  /**
   * Lookup1044: xcm_runtime_apis::dry_run::XcmDryRunEffects<polkadot_runtime::RuntimeEvent>
   **/
  XcmRuntimeApisDryRunXcmDryRunEffects: {
    executionResult: 'StagingXcmV5TraitsOutcome',
    emittedEvents: 'Vec<Event>',
    forwardedXcms: 'Vec<(XcmVersionedLocation,Vec<XcmVersionedXcm>)>'
  },
  /**
   * Lookup1046: xcm_runtime_apis::conversions::Error
   **/
  XcmRuntimeApisConversionsError: {
    _enum: ['Unsupported', 'VersionedConversionFailed']
  },
  /**
   * Lookup1050: polkadot_runtime::RuntimeError
   **/
  PolkadotRuntimeRuntimeError: {
    _enum: {
      System: 'FrameSystemError',
      Scheduler: 'PalletSchedulerError',
      Babe: 'PalletBabeError',
      __Unused3: 'Null',
      Indices: 'PalletIndicesError',
      Balances: 'PalletBalancesError',
      __Unused6: 'Null',
      Staking: 'PalletStakingPalletError',
      __Unused8: 'Null',
      Session: 'PalletSessionError',
      Preimage: 'PalletPreimageError',
      Grandpa: 'PalletGrandpaError',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      Treasury: 'PalletTreasuryError',
      ConvictionVoting: 'PalletConvictionVotingError',
      Referenda: 'PalletReferendaError',
      __Unused22: 'Null',
      Whitelist: 'PalletWhitelistError',
      Claims: 'PolkadotRuntimeCommonClaimsPalletError',
      Vesting: 'PalletVestingError',
      Utility: 'PalletUtilityError',
      __Unused27: 'Null',
      __Unused28: 'Null',
      Proxy: 'PalletProxyError',
      Multisig: 'PalletMultisigError',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      Bounties: 'PalletBountiesError',
      __Unused35: 'Null',
      ElectionProviderMultiPhase: 'PalletElectionProviderMultiPhaseError',
      VoterList: 'PalletBagsListError',
      ChildBounties: 'PalletChildBountiesError',
      NominationPools: 'PalletNominationPoolsError',
      FastUnstake: 'PalletFastUnstakeError',
      DelegatedStaking: 'PalletDelegatedStakingError',
      StakingAhClient: 'PalletStakingAsyncAhClientError',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      Configuration: 'PolkadotRuntimeParachainsConfigurationPalletError',
      __Unused52: 'Null',
      ParaInclusion: 'PolkadotRuntimeParachainsInclusionPalletError',
      ParaInherent: 'PolkadotRuntimeParachainsParasInherentPalletError',
      ParaScheduler: 'PolkadotRuntimeParachainsSchedulerPalletError',
      Paras: 'PolkadotRuntimeParachainsParasPalletError',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      Hrmp: 'PolkadotRuntimeParachainsHrmpPalletError',
      __Unused61: 'Null',
      ParasDisputes: 'PolkadotRuntimeParachainsDisputesPalletError',
      ParasSlashing: 'PolkadotRuntimeParachainsDisputesSlashingPalletError',
      OnDemand: 'PolkadotRuntimeParachainsOnDemandPalletError',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      Registrar: 'PolkadotRuntimeCommonParasRegistrarPalletError',
      Slots: 'PolkadotRuntimeCommonSlotsPalletError',
      Auctions: 'PolkadotRuntimeCommonAuctionsPalletError',
      Crowdloan: 'PolkadotRuntimeCommonCrowdloanPalletError',
      Coretime: 'PolkadotRuntimeParachainsCoretimePalletError',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      StateTrieMigration: 'PalletStateTrieMigrationError',
      XcmPallet: 'PalletXcmError',
      MessageQueue: 'PalletMessageQueueError',
      AssetRate: 'PalletAssetRateError',
      __Unused102: 'Null',
      __Unused103: 'Null',
      __Unused104: 'Null',
      __Unused105: 'Null',
      __Unused106: 'Null',
      __Unused107: 'Null',
      __Unused108: 'Null',
      __Unused109: 'Null',
      __Unused110: 'Null',
      __Unused111: 'Null',
      __Unused112: 'Null',
      __Unused113: 'Null',
      __Unused114: 'Null',
      __Unused115: 'Null',
      __Unused116: 'Null',
      __Unused117: 'Null',
      __Unused118: 'Null',
      __Unused119: 'Null',
      __Unused120: 'Null',
      __Unused121: 'Null',
      __Unused122: 'Null',
      __Unused123: 'Null',
      __Unused124: 'Null',
      __Unused125: 'Null',
      __Unused126: 'Null',
      __Unused127: 'Null',
      __Unused128: 'Null',
      __Unused129: 'Null',
      __Unused130: 'Null',
      __Unused131: 'Null',
      __Unused132: 'Null',
      __Unused133: 'Null',
      __Unused134: 'Null',
      __Unused135: 'Null',
      __Unused136: 'Null',
      __Unused137: 'Null',
      __Unused138: 'Null',
      __Unused139: 'Null',
      __Unused140: 'Null',
      __Unused141: 'Null',
      __Unused142: 'Null',
      __Unused143: 'Null',
      __Unused144: 'Null',
      __Unused145: 'Null',
      __Unused146: 'Null',
      __Unused147: 'Null',
      __Unused148: 'Null',
      __Unused149: 'Null',
      __Unused150: 'Null',
      __Unused151: 'Null',
      __Unused152: 'Null',
      __Unused153: 'Null',
      __Unused154: 'Null',
      __Unused155: 'Null',
      __Unused156: 'Null',
      __Unused157: 'Null',
      __Unused158: 'Null',
      __Unused159: 'Null',
      __Unused160: 'Null',
      __Unused161: 'Null',
      __Unused162: 'Null',
      __Unused163: 'Null',
      __Unused164: 'Null',
      __Unused165: 'Null',
      __Unused166: 'Null',
      __Unused167: 'Null',
      __Unused168: 'Null',
      __Unused169: 'Null',
      __Unused170: 'Null',
      __Unused171: 'Null',
      __Unused172: 'Null',
      __Unused173: 'Null',
      __Unused174: 'Null',
      __Unused175: 'Null',
      __Unused176: 'Null',
      __Unused177: 'Null',
      __Unused178: 'Null',
      __Unused179: 'Null',
      __Unused180: 'Null',
      __Unused181: 'Null',
      __Unused182: 'Null',
      __Unused183: 'Null',
      __Unused184: 'Null',
      __Unused185: 'Null',
      __Unused186: 'Null',
      __Unused187: 'Null',
      __Unused188: 'Null',
      __Unused189: 'Null',
      __Unused190: 'Null',
      __Unused191: 'Null',
      __Unused192: 'Null',
      __Unused193: 'Null',
      __Unused194: 'Null',
      __Unused195: 'Null',
      __Unused196: 'Null',
      __Unused197: 'Null',
      __Unused198: 'Null',
      __Unused199: 'Null',
      Beefy: 'PalletBeefyError',
      __Unused201: 'Null',
      __Unused202: 'Null',
      __Unused203: 'Null',
      __Unused204: 'Null',
      __Unused205: 'Null',
      __Unused206: 'Null',
      __Unused207: 'Null',
      __Unused208: 'Null',
      __Unused209: 'Null',
      __Unused210: 'Null',
      __Unused211: 'Null',
      __Unused212: 'Null',
      __Unused213: 'Null',
      __Unused214: 'Null',
      __Unused215: 'Null',
      __Unused216: 'Null',
      __Unused217: 'Null',
      __Unused218: 'Null',
      __Unused219: 'Null',
      __Unused220: 'Null',
      __Unused221: 'Null',
      __Unused222: 'Null',
      __Unused223: 'Null',
      __Unused224: 'Null',
      __Unused225: 'Null',
      __Unused226: 'Null',
      __Unused227: 'Null',
      __Unused228: 'Null',
      __Unused229: 'Null',
      __Unused230: 'Null',
      __Unused231: 'Null',
      __Unused232: 'Null',
      __Unused233: 'Null',
      __Unused234: 'Null',
      __Unused235: 'Null',
      __Unused236: 'Null',
      __Unused237: 'Null',
      __Unused238: 'Null',
      __Unused239: 'Null',
      __Unused240: 'Null',
      __Unused241: 'Null',
      __Unused242: 'Null',
      __Unused243: 'Null',
      __Unused244: 'Null',
      __Unused245: 'Null',
      __Unused246: 'Null',
      __Unused247: 'Null',
      __Unused248: 'Null',
      __Unused249: 'Null',
      __Unused250: 'Null',
      __Unused251: 'Null',
      __Unused252: 'Null',
      __Unused253: 'Null',
      __Unused254: 'Null',
      RcMigrator: 'PalletRcMigratorError'
    }
  }
};
