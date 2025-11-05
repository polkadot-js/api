// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup32: asset_hub_kusama_runtime::RuntimeTask
   **/
  AssetHubKusamaRuntimeRuntimeTask: 'Null',
  /**
   * Lookup43: asset_hub_kusama_runtime::RuntimeParametersKey
   **/
  AssetHubKusamaRuntimeRuntimeParametersKey: {
    _enum: {
      Issuance: 'AssetHubKusamaRuntimeDynamicParamsIssuanceParametersKey',
      Treasury: 'AssetHubKusamaRuntimeDynamicParamsTreasuryParametersKey',
      StakingElection: 'AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersKey',
      Scheduler: 'AssetHubKusamaRuntimeDynamicParamsSchedulerParametersKey',
      MessageQueue: 'AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersKey'
    }
  },
  /**
   * Lookup44: asset_hub_kusama_runtime::dynamic_params::issuance::ParametersKey
   **/
  AssetHubKusamaRuntimeDynamicParamsIssuanceParametersKey: {
    _enum: ['MinInflation', 'MaxInflation', 'IdealStake', 'Falloff']
  },
  /**
   * Lookup45: asset_hub_kusama_runtime::dynamic_params::issuance::MinInflation
   **/
  AssetHubKusamaRuntimeDynamicParamsIssuanceMinInflation: 'Null',
  /**
   * Lookup46: asset_hub_kusama_runtime::dynamic_params::issuance::MaxInflation
   **/
  AssetHubKusamaRuntimeDynamicParamsIssuanceMaxInflation: 'Null',
  /**
   * Lookup47: asset_hub_kusama_runtime::dynamic_params::issuance::IdealStake
   **/
  AssetHubKusamaRuntimeDynamicParamsIssuanceIdealStake: 'Null',
  /**
   * Lookup48: asset_hub_kusama_runtime::dynamic_params::issuance::Falloff
   **/
  AssetHubKusamaRuntimeDynamicParamsIssuanceFalloff: 'Null',
  /**
   * Lookup49: asset_hub_kusama_runtime::dynamic_params::treasury::ParametersKey
   **/
  AssetHubKusamaRuntimeDynamicParamsTreasuryParametersKey: {
    _enum: ['BurnPortion', 'BurnDestination']
  },
  /**
   * Lookup50: asset_hub_kusama_runtime::dynamic_params::treasury::BurnPortion
   **/
  AssetHubKusamaRuntimeDynamicParamsTreasuryBurnPortion: 'Null',
  /**
   * Lookup51: asset_hub_kusama_runtime::dynamic_params::treasury::BurnDestination
   **/
  AssetHubKusamaRuntimeDynamicParamsTreasuryBurnDestination: 'Null',
  /**
   * Lookup52: asset_hub_kusama_runtime::dynamic_params::staking_election::ParametersKey
   **/
  AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersKey: {
    _enum: ['SignedPhase', 'MaxSignedSubmissions', 'UnsignedPhase', 'MinerPages', 'MaxElectingVoters', 'TargetSnapshotPerBlock', 'MaxEraDuration']
  },
  /**
   * Lookup53: asset_hub_kusama_runtime::dynamic_params::staking_election::SignedPhase
   **/
  AssetHubKusamaRuntimeDynamicParamsStakingElectionSignedPhase: 'Null',
  /**
   * Lookup54: asset_hub_kusama_runtime::dynamic_params::staking_election::MaxSignedSubmissions
   **/
  AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxSignedSubmissions: 'Null',
  /**
   * Lookup55: asset_hub_kusama_runtime::dynamic_params::staking_election::UnsignedPhase
   **/
  AssetHubKusamaRuntimeDynamicParamsStakingElectionUnsignedPhase: 'Null',
  /**
   * Lookup56: asset_hub_kusama_runtime::dynamic_params::staking_election::MinerPages
   **/
  AssetHubKusamaRuntimeDynamicParamsStakingElectionMinerPages: 'Null',
  /**
   * Lookup57: asset_hub_kusama_runtime::dynamic_params::staking_election::MaxElectingVoters
   **/
  AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxElectingVoters: 'Null',
  /**
   * Lookup58: asset_hub_kusama_runtime::dynamic_params::staking_election::TargetSnapshotPerBlock
   **/
  AssetHubKusamaRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock: 'Null',
  /**
   * Lookup59: asset_hub_kusama_runtime::dynamic_params::staking_election::MaxEraDuration
   **/
  AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxEraDuration: 'Null',
  /**
   * Lookup60: asset_hub_kusama_runtime::dynamic_params::scheduler::ParametersKey
   **/
  AssetHubKusamaRuntimeDynamicParamsSchedulerParametersKey: {
    _enum: ['MaxScheduledPerBlock', 'MaximumWeight']
  },
  /**
   * Lookup61: asset_hub_kusama_runtime::dynamic_params::scheduler::MaxScheduledPerBlock
   **/
  AssetHubKusamaRuntimeDynamicParamsSchedulerMaxScheduledPerBlock: 'Null',
  /**
   * Lookup62: asset_hub_kusama_runtime::dynamic_params::scheduler::MaximumWeight
   **/
  AssetHubKusamaRuntimeDynamicParamsSchedulerMaximumWeight: 'Null',
  /**
   * Lookup63: asset_hub_kusama_runtime::dynamic_params::message_queue::ParametersKey
   **/
  AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersKey: {
    _enum: ['MaxOnInitWeight', 'MaxOnIdleWeight']
  },
  /**
   * Lookup64: asset_hub_kusama_runtime::dynamic_params::message_queue::MaxOnInitWeight
   **/
  AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnInitWeight: 'Null',
  /**
   * Lookup65: asset_hub_kusama_runtime::dynamic_params::message_queue::MaxOnIdleWeight
   **/
  AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnIdleWeight: 'Null',
  /**
   * Lookup67: asset_hub_kusama_runtime::RuntimeParametersValue
   **/
  AssetHubKusamaRuntimeRuntimeParametersValue: {
    _enum: {
      Issuance: 'AssetHubKusamaRuntimeDynamicParamsIssuanceParametersValue',
      Treasury: 'AssetHubKusamaRuntimeDynamicParamsTreasuryParametersValue',
      StakingElection: 'AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersValue',
      Scheduler: 'AssetHubKusamaRuntimeDynamicParamsSchedulerParametersValue',
      MessageQueue: 'AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersValue'
    }
  },
  /**
   * Lookup68: asset_hub_kusama_runtime::dynamic_params::issuance::ParametersValue
   **/
  AssetHubKusamaRuntimeDynamicParamsIssuanceParametersValue: {
    _enum: {
      MinInflation: 'Perquintill',
      MaxInflation: 'Perquintill',
      IdealStake: 'Perquintill',
      Falloff: 'Perquintill'
    }
  },
  /**
   * Lookup70: asset_hub_kusama_runtime::dynamic_params::treasury::ParametersValue
   **/
  AssetHubKusamaRuntimeDynamicParamsTreasuryParametersValue: {
    _enum: {
      BurnPortion: 'Permill',
      BurnDestination: 'AssetHubKusamaRuntimeTreasuryBurnDestinationAccount'
    }
  },
  /**
   * Lookup72: asset_hub_kusama_runtime::treasury::BurnDestinationAccount
   **/
  AssetHubKusamaRuntimeTreasuryBurnDestinationAccount: 'Option<AccountId32>',
  /**
   * Lookup74: asset_hub_kusama_runtime::dynamic_params::staking_election::ParametersValue
   **/
  AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersValue: {
    _enum: {
      SignedPhase: 'u32',
      MaxSignedSubmissions: 'u32',
      UnsignedPhase: 'u32',
      MinerPages: 'u32',
      MaxElectingVoters: 'u32',
      TargetSnapshotPerBlock: 'u32',
      MaxEraDuration: 'u64'
    }
  },
  /**
   * Lookup75: asset_hub_kusama_runtime::dynamic_params::scheduler::ParametersValue
   **/
  AssetHubKusamaRuntimeDynamicParamsSchedulerParametersValue: {
    _enum: {
      MaxScheduledPerBlock: 'u32',
      MaximumWeight: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup76: asset_hub_kusama_runtime::dynamic_params::message_queue::ParametersValue
   **/
  AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersValue: {
    _enum: {
      MaxOnInitWeight: 'Option<SpWeightsWeightV2Weight>',
      MaxOnIdleWeight: 'Option<SpWeightsWeightV2Weight>'
    }
  },
  /**
   * Lookup193: asset_hub_kusama_runtime::ProxyType
   **/
  AssetHubKusamaRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'CancelProxy', 'Assets', 'AssetOwner', 'AssetManager', 'Collator', 'Governance', 'Staking', 'NominationPools', 'Auction', 'ParaRegistration', 'Society', 'Spokesperson']
  },
  /**
   * Lookup220: asset_hub_kusama_runtime::Runtime
   **/
  AssetHubKusamaRuntimeRuntime: 'Null',
  /**
   * Lookup308: asset_hub_kusama_runtime::RuntimeParameters
   **/
  AssetHubKusamaRuntimeRuntimeParameters: {
    _enum: {
      Issuance: 'AssetHubKusamaRuntimeDynamicParamsIssuanceParameters',
      Treasury: 'AssetHubKusamaRuntimeDynamicParamsTreasuryParameters',
      StakingElection: 'AssetHubKusamaRuntimeDynamicParamsStakingElectionParameters',
      Scheduler: 'AssetHubKusamaRuntimeDynamicParamsSchedulerParameters',
      MessageQueue: 'AssetHubKusamaRuntimeDynamicParamsMessageQueueParameters'
    }
  },
  /**
   * Lookup309: asset_hub_kusama_runtime::dynamic_params::issuance::Parameters
   **/
  AssetHubKusamaRuntimeDynamicParamsIssuanceParameters: {
    _enum: {
      MinInflation: '(AssetHubKusamaRuntimeDynamicParamsIssuanceMinInflation,Option<Perquintill>)',
      MaxInflation: '(AssetHubKusamaRuntimeDynamicParamsIssuanceMaxInflation,Option<Perquintill>)',
      IdealStake: '(AssetHubKusamaRuntimeDynamicParamsIssuanceIdealStake,Option<Perquintill>)',
      Falloff: '(AssetHubKusamaRuntimeDynamicParamsIssuanceFalloff,Option<Perquintill>)'
    }
  },
  /**
   * Lookup311: asset_hub_kusama_runtime::dynamic_params::treasury::Parameters
   **/
  AssetHubKusamaRuntimeDynamicParamsTreasuryParameters: {
    _enum: {
      BurnPortion: '(AssetHubKusamaRuntimeDynamicParamsTreasuryBurnPortion,Option<Permill>)',
      BurnDestination: '(AssetHubKusamaRuntimeDynamicParamsTreasuryBurnDestination,Option<AssetHubKusamaRuntimeTreasuryBurnDestinationAccount>)'
    }
  },
  /**
   * Lookup314: asset_hub_kusama_runtime::dynamic_params::staking_election::Parameters
   **/
  AssetHubKusamaRuntimeDynamicParamsStakingElectionParameters: {
    _enum: {
      SignedPhase: '(AssetHubKusamaRuntimeDynamicParamsStakingElectionSignedPhase,Option<u32>)',
      MaxSignedSubmissions: '(AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxSignedSubmissions,Option<u32>)',
      UnsignedPhase: '(AssetHubKusamaRuntimeDynamicParamsStakingElectionUnsignedPhase,Option<u32>)',
      MinerPages: '(AssetHubKusamaRuntimeDynamicParamsStakingElectionMinerPages,Option<u32>)',
      MaxElectingVoters: '(AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxElectingVoters,Option<u32>)',
      TargetSnapshotPerBlock: '(AssetHubKusamaRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock,Option<u32>)',
      MaxEraDuration: '(AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxEraDuration,Option<u64>)'
    }
  },
  /**
   * Lookup315: asset_hub_kusama_runtime::dynamic_params::scheduler::Parameters
   **/
  AssetHubKusamaRuntimeDynamicParamsSchedulerParameters: {
    _enum: {
      MaxScheduledPerBlock: '(AssetHubKusamaRuntimeDynamicParamsSchedulerMaxScheduledPerBlock,Option<u32>)',
      MaximumWeight: '(AssetHubKusamaRuntimeDynamicParamsSchedulerMaximumWeight,Option<SpWeightsWeightV2Weight>)'
    }
  },
  /**
   * Lookup316: asset_hub_kusama_runtime::dynamic_params::message_queue::Parameters
   **/
  AssetHubKusamaRuntimeDynamicParamsMessageQueueParameters: {
    _enum: {
      MaxOnInitWeight: '(AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnInitWeight,Option<Option<SpWeightsWeightV2Weight>>)',
      MaxOnIdleWeight: '(AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnIdleWeight,Option<Option<SpWeightsWeightV2Weight>>)'
    }
  },
  /**
   * Lookup333: asset_hub_kusama_runtime::SessionKeys
   **/
  AssetHubKusamaRuntimeSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public'
  },
  /**
   * Lookup334: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: '[u8;32]',
  /**
   * Lookup385: asset_hub_kusama_runtime::OriginCaller
   **/
  AssetHubKusamaRuntimeOriginCaller: {
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
      CumulusXcm: 'CumulusPalletXcmOrigin',
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
      Origins: 'AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin'
    }
  },
  /**
   * Lookup389: asset_hub_kusama_runtime::governance::origins::pallet_custom_origins::Origin
   **/
  AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
    _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'AuctionAdmin', 'LeaseAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'SmallTipper', 'BigTipper', 'SmallSpender', 'MediumSpender', 'BigSpender', 'WhitelistedCaller', 'FellowshipInitiates', 'Fellows', 'FellowshipExperts', 'FellowshipMasters', 'Fellowship1Dan', 'Fellowship2Dan', 'Fellowship3Dan', 'Fellowship4Dan', 'Fellowship5Dan', 'Fellowship6Dan', 'Fellowship7Dan', 'Fellowship8Dan', 'Fellowship9Dan', 'WishForChange']
  },
  /**
   * Lookup394: pallet_remote_proxy::pallet::Call<T, I>
   **/
  PalletRemoteProxyCall: {
    _enum: {
      remote_proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<AssetHubKusamaRuntimeProxyType>',
        call: 'Call',
        proof: 'PalletRemoteProxyRemoteProxyProof',
      },
      register_remote_proxy_proof: {
        proof: 'PalletRemoteProxyRemoteProxyProof',
      },
      remote_proxy_with_registered_proof: {
        real: 'MultiAddress',
        forceProxyType: 'Option<AssetHubKusamaRuntimeProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup395: pallet_remote_proxy::pallet::RemoteProxyProof<RemoteBlockNumber>
   **/
  PalletRemoteProxyRemoteProxyProof: {
    _enum: {
      RelayChain: {
        proof: 'Vec<Bytes>',
        block: 'u32'
      }
    }
  },
  /**
   * Lookup466: asset_hub_kusama_runtime::staking::NposCompactSolution24
   **/
  AssetHubKusamaRuntimeStakingNposCompactSolution24: {
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
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>',
    votes17: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);16],Compact<u16>)>',
    votes18: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);17],Compact<u16>)>',
    votes19: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);18],Compact<u16>)>',
    votes20: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);19],Compact<u16>)>',
    votes21: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);20],Compact<u16>)>',
    votes22: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);21],Compact<u16>)>',
    votes23: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);22],Compact<u16>)>',
    votes24: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);23],Compact<u16>)>'
  },
  /**
   * Lookup598: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, kusama_runtime_constants::proxy::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinitionKusamaRuntimeConstantsProxyProxyType: {
    delegate: 'AccountId32',
    proxyType: 'KusamaRuntimeConstantsProxyProxyType',
    delay: 'u32'
  },
  /**
   * Lookup650: asset_hub_kusama_runtime::ah_migration::RcPalletsOrigin
   **/
  AssetHubKusamaRuntimeAhMigrationRcPalletsOrigin: {
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
      __Unused41: 'Null',
      __Unused42: 'Null',
      Origins: 'AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin'
    }
  },
  /**
   * Lookup746: pallet_rc_migrator::recovery::PortableRecoveryMessage
   **/
  PalletRcMigratorRecoveryPortableRecoveryMessage: {
    _enum: {
      Recoverable: '(AccountId32,PalletRcMigratorRecoveryPortableRecoveryConfig)',
      ActiveRecoveries: '(AccountId32,AccountId32,PalletRcMigratorRecoveryPortableActiveRecovery)',
      Proxy: '(AccountId32,AccountId32)'
    }
  },
  /**
   * Lookup748: pallet_rc_migrator::recovery::PortableRecoveryConfig
   **/
  PalletRcMigratorRecoveryPortableRecoveryConfig: {
    delayPeriod: 'u32',
    deposit: 'u128',
    friends: 'PalletRcMigratorRecoveryPortableRecoveryFriends',
    threshold: 'u16'
  },
  /**
   * Lookup749: pallet_rc_migrator::recovery::PortableRecoveryFriends
   **/
  PalletRcMigratorRecoveryPortableRecoveryFriends: {
    friends: 'Vec<AccountId32>'
  },
  /**
   * Lookup752: pallet_rc_migrator::recovery::PortableActiveRecovery
   **/
  PalletRcMigratorRecoveryPortableActiveRecovery: {
    created: 'u32',
    deposit: 'u128',
    friends: 'PalletRcMigratorRecoveryPortableRecoveryFriends'
  },
  /**
   * Lookup755: pallet_rc_migrator::society::PortableSocietyMessage
   **/
  PalletRcMigratorSocietyPortableSocietyMessage: {
    _enum: {
      Values: 'PalletRcMigratorSocietySocietyValues',
      Member: '(AccountId32,PalletRcMigratorSocietyPortableMemberRecord)',
      Payout: '(AccountId32,PalletRcMigratorSocietyPortablePayoutRecord)',
      MemberByIndex: '(u32,AccountId32)',
      SuspendedMembers: '(AccountId32,PalletRcMigratorSocietyPortableMemberRecord)',
      Candidates: '(AccountId32,PalletRcMigratorSocietyPortableCandidacy)',
      Votes: '(AccountId32,AccountId32,PalletRcMigratorSocietyPortableVote)',
      VoteClearCursor: '(AccountId32,Bytes)',
      DefenderVotes: '(u32,AccountId32,PalletRcMigratorSocietyPortableVote)'
    }
  },
  /**
   * Lookup756: pallet_rc_migrator::society::SocietyValues
   **/
  PalletRcMigratorSocietySocietyValues: {
    parameters: 'Option<PalletRcMigratorSocietyPortableGroupParams>',
    pot: 'Option<u128>',
    founder: 'Option<AccountId32>',
    head: 'Option<AccountId32>',
    rules: 'Option<H256>',
    memberCount: 'Option<u32>',
    roundCount: 'Option<u32>',
    bids: 'Option<Vec<PalletRcMigratorSocietyPortableBid>>',
    sceptic: 'Option<AccountId32>',
    nextHead: 'Option<PalletRcMigratorSocietyPortableIntakeRecord>',
    challengeRoundCount: 'Option<u32>',
    defending: 'Option<(AccountId32,AccountId32,PalletRcMigratorSocietyPortableTally)>',
    nextIntakeAt: 'Option<u32>',
    nextChallengeAt: 'Option<u32>'
  },
  /**
   * Lookup758: pallet_rc_migrator::society::PortableGroupParams
   **/
  PalletRcMigratorSocietyPortableGroupParams: {
    maxMembers: 'u32',
    maxIntake: 'u32',
    maxStrikes: 'u32',
    candidateDeposit: 'u128'
  },
  /**
   * Lookup761: pallet_rc_migrator::society::PortableBid
   **/
  PalletRcMigratorSocietyPortableBid: {
    who: 'AccountId32',
    kind: 'PalletRcMigratorSocietyPortableBidKind',
    value: 'u128'
  },
  /**
   * Lookup762: pallet_rc_migrator::society::PortableBidKind
   **/
  PalletRcMigratorSocietyPortableBidKind: {
    _enum: {
      Deposit: 'u128',
      Vouch: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup764: pallet_rc_migrator::society::PortableIntakeRecord
   **/
  PalletRcMigratorSocietyPortableIntakeRecord: {
    who: 'AccountId32',
    bid: 'u128',
    round: 'u32'
  },
  /**
   * Lookup767: pallet_rc_migrator::society::PortableTally
   **/
  PalletRcMigratorSocietyPortableTally: {
    approvals: 'u32',
    rejections: 'u32'
  },
  /**
   * Lookup768: pallet_rc_migrator::society::PortableMemberRecord
   **/
  PalletRcMigratorSocietyPortableMemberRecord: {
    rank: 'u32',
    strikes: 'u32',
    vouching: 'Option<PalletRcMigratorSocietyPortableVouchingStatus>',
    index: 'u32'
  },
  /**
   * Lookup770: pallet_rc_migrator::society::PortableVouchingStatus
   **/
  PalletRcMigratorSocietyPortableVouchingStatus: {
    _enum: ['Vouching', 'Banned']
  },
  /**
   * Lookup771: pallet_rc_migrator::society::PortablePayoutRecord
   **/
  PalletRcMigratorSocietyPortablePayoutRecord: {
    paid: 'u128',
    payouts: 'Vec<(u32,u128)>'
  },
  /**
   * Lookup772: pallet_rc_migrator::society::PortableCandidacy
   **/
  PalletRcMigratorSocietyPortableCandidacy: {
    round: 'u32',
    kind: 'PalletRcMigratorSocietyPortableBidKind',
    bid: 'u128',
    tally: 'PalletRcMigratorSocietyPortableTally',
    skepticStruck: 'bool'
  },
  /**
   * Lookup773: pallet_rc_migrator::society::PortableVote
   **/
  PalletRcMigratorSocietyPortableVote: {
    approve: 'bool',
    weight: 'u32'
  },
  /**
   * Lookup853: asset_hub_kusama_runtime::RuntimeHoldReason
   **/
  AssetHubKusamaRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      Preimage: 'PalletPreimageHoldReason',
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
      Session: 'PalletSessionHoldReason',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      PolkadotXcm: 'PalletXcmHoldReason',
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
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      NftFractionalization: 'PalletNftFractionalizationHoldReason',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      Revive: 'PalletReviveHoldReason',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      StateTrieMigration: 'PalletStateTrieMigrationHoldReason',
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
      DelegatedStaking: 'PalletDelegatedStakingHoldReason',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      MultiBlockElectionSigned: 'PalletElectionProviderMultiBlockSignedPalletHoldReason',
      Staking: 'PalletStakingAsyncPalletHoldReason'
    }
  },
  /**
   * Lookup861: asset_hub_kusama_runtime::RuntimeFreezeReason
   **/
  AssetHubKusamaRuntimeRuntimeFreezeReason: {
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
      NominationPools: 'PalletNominationPoolsFreezeReason'
    }
  },
  /**
   * Lookup939: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, asset_hub_kusama_runtime::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinitionAssetHubKusamaRuntimeProxyType: {
    delegate: 'AccountId32',
    proxyType: 'AssetHubKusamaRuntimeProxyType',
    delay: 'u32'
  },
  /**
   * Lookup947: pallet_remote_proxy::pallet::Error<T, I>
   **/
  PalletRemoteProxyError: {
    _enum: ['CouldNotConvertLocalToRemoteAccountId', 'UnknownProofAnchorBlock', 'InvalidProof', 'ProxyDefinitionDecodingFailed', 'Unannounced', 'DidNotFindMatchingProxyDefinition', 'ProxyProofNotRegistered']
  },
  /**
   * Lookup1023: pallet_revive::vm::CodeInfo<T>
   **/
  PalletReviveVmCodeInfo: {
    owner: 'AccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>',
    codeLen: 'u32',
    behaviourVersion: 'u32'
  },
  /**
   * Lookup1024: pallet_revive::storage::AccountInfo<T>
   **/
  PalletReviveStorageAccountInfo: {
    accountType: 'PalletReviveStorageAccountType',
    dust: 'u32'
  },
  /**
   * Lookup1025: pallet_revive::storage::AccountType<T>
   **/
  PalletReviveStorageAccountType: {
    _enum: {
      Contract: 'PalletReviveStorageContractInfo',
      EOA: 'Null'
    }
  },
  /**
   * Lookup1233: pallet_revive::evm::api::debug_rpc_types::PrestateTracerConfig
   **/
  PalletReviveEvmApiDebugRpcTypesPrestateTracerConfig: {
    diffMode: 'bool',
    disableStorage: 'bool',
    disableCode: 'bool'
  },
  /**
   * Lookup1242: pallet_revive::evm::api::debug_rpc_types::PrestateTrace
   **/
  PalletReviveEvmApiDebugRpcTypesPrestateTrace: {
    _enum: {
      Prestate: 'BTreeMap<H160, PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>',
      DiffMode: {
        pre: 'BTreeMap<H160, PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>',
        post: 'BTreeMap<H160, PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>'
      }
    }
  },
  /**
   * Lookup1244: pallet_revive::evm::api::debug_rpc_types::PrestateTraceInfo
   **/
  PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo: {
    balance: 'Option<U256>',
    nonce: 'Option<u32>',
    code: 'Option<Bytes>',
    storage: 'BTreeMap<Bytes, Option<Bytes>>'
  },
  /**
   * Lookup1252: asset_hub_kusama_runtime::RuntimeError
   **/
  AssetHubKusamaRuntimeRuntimeError: {
    _enum: {
      System: 'FrameSystemError',
      ParachainSystem: 'CumulusPalletParachainSystemError',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      MultiBlockMigrations: 'PalletMigrationsError',
      Preimage: 'PalletPreimageError',
      Scheduler: 'PalletSchedulerError',
      __Unused8: 'Null',
      __Unused9: 'Null',
      Balances: 'PalletBalancesError',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      Vesting: 'PalletVestingError',
      Claims: 'PolkadotRuntimeCommonClaimsPalletError',
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
      RemoteProxyRelayChain: 'PalletRemoteProxyError',
      Indices: 'PalletIndicesError',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      Assets: 'PalletAssetsError',
      Uniques: 'PalletUniquesError',
      Nfts: 'PalletNftsError',
      ForeignAssets: 'PalletAssetsError',
      NftFractionalization: 'PalletNftFractionalizationError',
      PoolAssets: 'PalletAssetsError',
      AssetConversion: 'PalletAssetConversionError',
      Recovery: 'PalletRecoveryError',
      Society: 'PalletSocietyError',
      __Unused59: 'Null',
      Revive: 'PalletReviveError',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      StateTrieMigration: 'PalletStateTrieMigrationError',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      NominationPools: 'PalletNominationPoolsError',
      __Unused81: 'Null',
      VoterList: 'PalletBagsListError',
      DelegatedStaking: 'PalletDelegatedStakingError',
      __Unused84: 'Null',
      MultiBlockElection: 'PalletElectionProviderMultiBlockError',
      __Unused86: 'Null',
      __Unused87: 'Null',
      MultiBlockElectionSigned: 'PalletElectionProviderMultiBlockSignedPalletError',
      Staking: 'PalletStakingAsyncPalletError',
      Treasury: 'PalletTreasuryError',
      ConvictionVoting: 'PalletConvictionVotingError',
      Referenda: 'PalletReferendaError',
      __Unused93: 'Null',
      Whitelist: 'PalletWhitelistError',
      Bounties: 'PalletBountiesError',
      ChildBounties: 'PalletChildBountiesError',
      AssetRate: 'PalletAssetRateError',
      __Unused98: 'Null',
      __Unused99: 'Null',
      __Unused100: 'Null',
      __Unused101: 'Null',
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
      __Unused200: 'Null',
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
      AhOps: 'PalletAhOpsError',
      AhMigrator: 'PalletAhMigratorError'
    }
  }
};
