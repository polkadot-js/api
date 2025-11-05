// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup32: asset_hub_polkadot_runtime::RuntimeTask
   **/
  AssetHubPolkadotRuntimeRuntimeTask: 'Null',
  /**
   * Lookup33: cumulus_pallet_parachain_system::pallet::Event<T>
   **/
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: 'Null',
      ValidationFunctionApplied: {
        relayChainBlockNum: 'u32',
      },
      ValidationFunctionDiscarded: 'Null',
      DownwardMessagesReceived: {
        count: 'u32',
      },
      DownwardMessagesProcessed: {
        weightUsed: 'SpWeightsWeightV2Weight',
        dmqHead: 'H256',
      },
      UpwardMessageSent: {
        messageHash: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup41: asset_hub_polkadot_runtime::RuntimeParametersKey
   **/
  AssetHubPolkadotRuntimeRuntimeParametersKey: {
    _enum: {
      StakingElection: 'AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersKey',
      Scheduler: 'AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersKey',
      MessageQueue: 'AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersKey'
    }
  },
  /**
   * Lookup42: asset_hub_polkadot_runtime::dynamic_params::staking_election::ParametersKey
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersKey: {
    _enum: ['SignedPhase', 'MaxSignedSubmissions', 'UnsignedPhase', 'MinerPages', 'MaxElectingVoters', 'TargetSnapshotPerBlock', 'MaxEraDuration']
  },
  /**
   * Lookup43: asset_hub_polkadot_runtime::dynamic_params::staking_election::SignedPhase
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionSignedPhase: 'Null',
  /**
   * Lookup44: asset_hub_polkadot_runtime::dynamic_params::staking_election::MaxSignedSubmissions
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxSignedSubmissions: 'Null',
  /**
   * Lookup45: asset_hub_polkadot_runtime::dynamic_params::staking_election::UnsignedPhase
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionUnsignedPhase: 'Null',
  /**
   * Lookup46: asset_hub_polkadot_runtime::dynamic_params::staking_election::MinerPages
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionMinerPages: 'Null',
  /**
   * Lookup47: asset_hub_polkadot_runtime::dynamic_params::staking_election::MaxElectingVoters
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxElectingVoters: 'Null',
  /**
   * Lookup48: asset_hub_polkadot_runtime::dynamic_params::staking_election::TargetSnapshotPerBlock
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock: 'Null',
  /**
   * Lookup49: asset_hub_polkadot_runtime::dynamic_params::staking_election::MaxEraDuration
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxEraDuration: 'Null',
  /**
   * Lookup50: asset_hub_polkadot_runtime::dynamic_params::scheduler::ParametersKey
   **/
  AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersKey: {
    _enum: ['MaxScheduledPerBlock', 'MaximumWeight']
  },
  /**
   * Lookup51: asset_hub_polkadot_runtime::dynamic_params::scheduler::MaxScheduledPerBlock
   **/
  AssetHubPolkadotRuntimeDynamicParamsSchedulerMaxScheduledPerBlock: 'Null',
  /**
   * Lookup52: asset_hub_polkadot_runtime::dynamic_params::scheduler::MaximumWeight
   **/
  AssetHubPolkadotRuntimeDynamicParamsSchedulerMaximumWeight: 'Null',
  /**
   * Lookup53: asset_hub_polkadot_runtime::dynamic_params::message_queue::ParametersKey
   **/
  AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersKey: {
    _enum: ['MaxOnInitWeight', 'MaxOnIdleWeight']
  },
  /**
   * Lookup54: asset_hub_polkadot_runtime::dynamic_params::message_queue::MaxOnInitWeight
   **/
  AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnInitWeight: 'Null',
  /**
   * Lookup55: asset_hub_polkadot_runtime::dynamic_params::message_queue::MaxOnIdleWeight
   **/
  AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnIdleWeight: 'Null',
  /**
   * Lookup57: asset_hub_polkadot_runtime::RuntimeParametersValue
   **/
  AssetHubPolkadotRuntimeRuntimeParametersValue: {
    _enum: {
      StakingElection: 'AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersValue',
      Scheduler: 'AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersValue',
      MessageQueue: 'AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersValue'
    }
  },
  /**
   * Lookup58: asset_hub_polkadot_runtime::dynamic_params::staking_election::ParametersValue
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersValue: {
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
   * Lookup59: asset_hub_polkadot_runtime::dynamic_params::scheduler::ParametersValue
   **/
  AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersValue: {
    _enum: {
      MaxScheduledPerBlock: 'u32',
      MaximumWeight: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup60: asset_hub_polkadot_runtime::dynamic_params::message_queue::ParametersValue
   **/
  AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersValue: {
    _enum: {
      MaxOnInitWeight: 'Option<SpWeightsWeightV2Weight>',
      MaxOnIdleWeight: 'Option<SpWeightsWeightV2Weight>'
    }
  },
  /**
   * Lookup88: pallet_collator_selection::pallet::Event<T>
   **/
  PalletCollatorSelectionEvent: {
    _enum: {
      NewInvulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      InvulnerableAdded: {
        accountId: 'AccountId32',
      },
      InvulnerableRemoved: {
        accountId: 'AccountId32',
      },
      NewDesiredCandidates: {
        desiredCandidates: 'u32',
      },
      NewCandidacyBond: {
        bondAmount: 'u128',
      },
      CandidateAdded: {
        accountId: 'AccountId32',
        deposit: 'u128',
      },
      CandidateBondUpdated: {
        accountId: 'AccountId32',
        deposit: 'u128',
      },
      CandidateRemoved: {
        accountId: 'AccountId32',
      },
      CandidateReplaced: {
        _alias: {
          new_: 'new',
        },
        old: 'AccountId32',
        new_: 'AccountId32',
        deposit: 'u128',
      },
      InvalidInvulnerableSkipped: {
        accountId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup91: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      XcmpMessageSent: {
        messageHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup166: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;32]',
      UnsupportedVersion: '[u8;32]',
      ExecutedDownward: '([u8;32],StagingXcmV5TraitsOutcome)'
    }
  },
  /**
   * Lookup167: pallet_xcm_bridge_hub_router::pallet::Event<T, I>
   **/
  PalletXcmBridgeHubRouterEvent: {
    _enum: {
      DeliveryFeeFactorDecreased: {
        newValue: 'u128',
      },
      DeliveryFeeFactorIncreased: {
        newValue: 'u128'
      }
    }
  },
  /**
   * Lookup170: cumulus_primitives_core::AggregateMessageOrigin
   **/
  CumulusPrimitivesCoreAggregateMessageOrigin: {
    _enum: {
      Here: 'Null',
      Parent: 'Null',
      Sibling: 'u32'
    }
  },
  /**
   * Lookup173: snowbridge_pallet_system_frontend::pallet::Event<T>
   **/
  SnowbridgePalletSystemFrontendEvent: {
    _enum: {
      MessageSent: {
        origin: 'StagingXcmV5Location',
        destination: 'StagingXcmV5Location',
        message: 'StagingXcmV5Xcm',
        messageId: '[u8;32]',
      },
      ExportOperatingModeChanged: {
        mode: 'SnowbridgeCoreOperatingModeBasicOperatingMode'
      }
    }
  },
  /**
   * Lookup174: snowbridge_core::operating_mode::BasicOperatingMode
   **/
  SnowbridgeCoreOperatingModeBasicOperatingMode: {
    _enum: ['Normal', 'Halted']
  },
  /**
   * Lookup179: asset_hub_polkadot_runtime::ProxyType
   **/
  AssetHubPolkadotRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'CancelProxy', 'Assets', 'AssetOwner', 'AssetManager', 'Collator', 'Governance', 'Staking', 'NominationPools', 'Auction', 'ParaRegistration']
  },
  /**
   * Lookup207: parachains_common::pay::VersionedLocatableAccount
   **/
  ParachainsCommonPayVersionedLocatableAccount: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      V4: {
        location: 'StagingXcmV4Location',
        accountId: 'StagingXcmV4Location',
      },
      V5: {
        location: 'StagingXcmV5Location',
        accountId: 'StagingXcmV5Location'
      }
    }
  },
  /**
   * Lookup218: cumulus_pallet_parachain_system::pallet::Call<T>
   **/
  CumulusPalletParachainSystemCall: {
    _enum: {
      set_validation_data: {
        data: 'CumulusPalletParachainSystemParachainInherentBasicParachainInherentData',
        inboundMessagesData: 'CumulusPalletParachainSystemParachainInherentInboundMessagesData',
      },
      sudo_send_upward_message: {
        message: 'Bytes'
      }
    }
  },
  /**
   * Lookup219: cumulus_pallet_parachain_system::parachain_inherent::BasicParachainInherentData
   **/
  CumulusPalletParachainSystemParachainInherentBasicParachainInherentData: {
    validationData: 'PolkadotPrimitivesV8PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    relayParentDescendants: 'Vec<SpRuntimeHeader>',
    collatorPeerId: 'Option<Bytes>'
  },
  /**
   * Lookup222: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup227: cumulus_pallet_parachain_system::parachain_inherent::InboundMessagesData
   **/
  CumulusPalletParachainSystemParachainInherentInboundMessagesData: {
    downwardMessages: {
      fullMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
      hashedMessages: 'Vec<CumulusPrimitivesParachainInherentHashedMessage>'
    },
    horizontalMessages: 'CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection'
  },
  /**
   * Lookup232: cumulus_primitives_parachain_inherent::HashedMessage
   **/
  CumulusPrimitivesParachainInherentHashedMessage: {
    sentAt: 'u32',
    msgHash: 'H256'
  },
  /**
   * Lookup233: cumulus_pallet_parachain_system::parachain_inherent::AbridgedInboundMessagesCollection<Message>
   **/
  CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection: {
    fullMessages: 'Vec<(u32,PolkadotCorePrimitivesInboundHrmpMessage)>',
    hashedMessages: 'Vec<(u32,CumulusPrimitivesParachainInherentHashedMessage)>'
  },
  /**
   * Lookup240: staging_parachain_info::pallet::Call<T>
   **/
  StagingParachainInfoCall: 'Null',
  /**
   * Lookup246: asset_hub_polkadot_runtime::RuntimeParameters
   **/
  AssetHubPolkadotRuntimeRuntimeParameters: {
    _enum: {
      StakingElection: 'AssetHubPolkadotRuntimeDynamicParamsStakingElectionParameters',
      Scheduler: 'AssetHubPolkadotRuntimeDynamicParamsSchedulerParameters',
      MessageQueue: 'AssetHubPolkadotRuntimeDynamicParamsMessageQueueParameters'
    }
  },
  /**
   * Lookup247: asset_hub_polkadot_runtime::dynamic_params::staking_election::Parameters
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionParameters: {
    _enum: {
      SignedPhase: '(AssetHubPolkadotRuntimeDynamicParamsStakingElectionSignedPhase,Option<u32>)',
      MaxSignedSubmissions: '(AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxSignedSubmissions,Option<u32>)',
      UnsignedPhase: '(AssetHubPolkadotRuntimeDynamicParamsStakingElectionUnsignedPhase,Option<u32>)',
      MinerPages: '(AssetHubPolkadotRuntimeDynamicParamsStakingElectionMinerPages,Option<u32>)',
      MaxElectingVoters: '(AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxElectingVoters,Option<u32>)',
      TargetSnapshotPerBlock: '(AssetHubPolkadotRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock,Option<u32>)',
      MaxEraDuration: '(AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxEraDuration,Option<u64>)'
    }
  },
  /**
   * Lookup248: asset_hub_polkadot_runtime::dynamic_params::scheduler::Parameters
   **/
  AssetHubPolkadotRuntimeDynamicParamsSchedulerParameters: {
    _enum: {
      MaxScheduledPerBlock: '(AssetHubPolkadotRuntimeDynamicParamsSchedulerMaxScheduledPerBlock,Option<u32>)',
      MaximumWeight: '(AssetHubPolkadotRuntimeDynamicParamsSchedulerMaximumWeight,Option<SpWeightsWeightV2Weight>)'
    }
  },
  /**
   * Lookup249: asset_hub_polkadot_runtime::dynamic_params::message_queue::Parameters
   **/
  AssetHubPolkadotRuntimeDynamicParamsMessageQueueParameters: {
    _enum: {
      MaxOnInitWeight: '(AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnInitWeight,Option<Option<SpWeightsWeightV2Weight>>)',
      MaxOnIdleWeight: '(AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnIdleWeight,Option<Option<SpWeightsWeightV2Weight>>)'
    }
  },
  /**
   * Lookup264: pallet_collator_selection::pallet::Call<T>
   **/
  PalletCollatorSelectionCall: {
    _enum: {
      set_invulnerables: {
        _alias: {
          new_: 'new',
        },
        new_: 'Vec<AccountId32>',
      },
      set_desired_candidates: {
        max: 'u32',
      },
      set_candidacy_bond: {
        bond: 'u128',
      },
      register_as_candidate: 'Null',
      leave_intent: 'Null',
      add_invulnerable: {
        who: 'AccountId32',
      },
      remove_invulnerable: {
        who: 'AccountId32',
      },
      update_bond: {
        newDeposit: 'u128',
      },
      take_candidate_slot: {
        deposit: 'u128',
        target: 'AccountId32'
      }
    }
  },
  /**
   * Lookup266: asset_hub_polkadot_runtime::SessionKeys
   **/
  AssetHubPolkadotRuntimeSessionKeys: {
    aura: 'SpConsensusAuraEd25519AppEd25519Public'
  },
  /**
   * Lookup267: sp_consensus_aura::ed25519::app_ed25519::Public
   **/
  SpConsensusAuraEd25519AppEd25519Public: '[u8;32]',
  /**
   * Lookup268: cumulus_pallet_xcmp_queue::pallet::Call<T>
   **/
  CumulusPalletXcmpQueueCall: {
    _enum: {
      __Unused0: 'Null',
      suspend_xcm_execution: 'Null',
      resume_xcm_execution: 'Null',
      update_suspend_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_drop_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_resume_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32'
      }
    }
  },
  /**
   * Lookup313: cumulus_pallet_xcm::pallet::Call<T>
   **/
  CumulusPalletXcmCall: 'Null',
  /**
   * Lookup314: pallet_xcm_bridge_hub_router::pallet::Call<T, I>
   **/
  PalletXcmBridgeHubRouterCall: {
    _enum: {
      report_bridge_status: {
        bridgeId: 'H256',
        isCongested: 'bool'
      }
    }
  },
  /**
   * Lookup316: snowbridge_pallet_system_frontend::pallet::Call<T>
   **/
  SnowbridgePalletSystemFrontendCall: {
    _enum: {
      set_operating_mode: {
        mode: 'SnowbridgeCoreOperatingModeBasicOperatingMode',
      },
      register_token: {
        assetId: 'XcmVersionedLocation',
        metadata: 'SnowbridgeCoreAssetMetadata',
        feeAsset: 'StagingXcmV5Asset',
      },
      add_tip: {
        messageId: 'SnowbridgeCoreRewardMessageId',
        asset: 'StagingXcmV5Asset'
      }
    }
  },
  /**
   * Lookup317: snowbridge_core::AssetMetadata
   **/
  SnowbridgeCoreAssetMetadata: {
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8'
  },
  /**
   * Lookup318: snowbridge_core::reward::MessageId
   **/
  SnowbridgeCoreRewardMessageId: {
    _enum: {
      Inbound: 'u64',
      Outbound: 'u64'
    }
  },
  /**
   * Lookup321: asset_hub_polkadot_runtime::OriginCaller
   **/
  AssetHubPolkadotRuntimeOriginCaller: {
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
      Origins: 'AssetHubPolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin'
    }
  },
  /**
   * Lookup324: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup325: asset_hub_polkadot_runtime::governance::origins::pallet_custom_origins::Origin
   **/
  AssetHubPolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
    _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'AuctionAdmin', 'LeaseAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'SmallTipper', 'BigTipper', 'SmallSpender', 'MediumSpender', 'BigSpender', 'WhitelistedCaller', 'WishForChange']
  },
  /**
   * Lookup392: pallet_staking_async_rc_client::pallet::Call<T>
   **/
  PalletStakingAsyncRcClientCall: {
    _enum: {
      relay_session_report: {
        report: 'PalletStakingAsyncRcClientSessionReport',
      },
      relay_new_offence_paged: {
        offences: 'Vec<(u32,PalletStakingAsyncRcClientOffence)>'
      }
    }
  },
  /**
   * Lookup401: pallet_election_provider_multi_block::pallet::Call<T>
   **/
  PalletElectionProviderMultiBlockCall: {
    _enum: {
      manage: {
        op: 'PalletElectionProviderMultiBlockAdminOperation'
      }
    }
  },
  /**
   * Lookup402: pallet_election_provider_multi_block::AdminOperation<T>
   **/
  PalletElectionProviderMultiBlockAdminOperation: {
    _enum: {
      ForceRotateRound: 'Null',
      ForceSetPhase: 'PalletElectionProviderMultiBlockPhase',
      EmergencySetSolution: '(FrameElectionProviderSupportBoundedSupports,SpNposElectionsElectionScore)',
      EmergencyFallback: 'Null',
      SetMinUntrustedScore: 'SpNposElectionsElectionScore'
    }
  },
  /**
   * Lookup403: pallet_election_provider_multi_block::types::Phase<T>
   **/
  PalletElectionProviderMultiBlockPhase: {
    _enum: {
      Off: 'Null',
      Signed: 'u32',
      SignedValidation: 'u32',
      Unsigned: 'u32',
      Snapshot: 'u32',
      Done: 'Null',
      Export: 'u32',
      Emergency: 'Null'
    }
  },
  /**
   * Lookup413: pallet_election_provider_multi_block::verifier::impls::pallet::Call<T>
   **/
  PalletElectionProviderMultiBlockVerifierImplsPalletCall: 'Null',
  /**
   * Lookup414: pallet_election_provider_multi_block::unsigned::pallet::Call<T>
   **/
  PalletElectionProviderMultiBlockUnsignedPalletCall: {
    _enum: {
      submit_unsigned: {
        pagedSolution: 'PalletElectionProviderMultiBlockPagedRawSolution'
      }
    }
  },
  /**
   * Lookup415: pallet_election_provider_multi_block::types::PagedRawSolution<T>
   **/
  PalletElectionProviderMultiBlockPagedRawSolution: {
    solutionPages: 'Vec<AssetHubPolkadotRuntimeStakingNposCompactSolution16>',
    score: 'SpNposElectionsElectionScore',
    round: 'u32'
  },
  /**
   * Lookup417: asset_hub_polkadot_runtime::staking::NposCompactSolution16
   **/
  AssetHubPolkadotRuntimeStakingNposCompactSolution16: {
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
   * Lookup468: pallet_election_provider_multi_block::signed::pallet::Call<T>
   **/
  PalletElectionProviderMultiBlockSignedPalletCall: {
    _enum: {
      register: {
        claimedScore: 'SpNposElectionsElectionScore',
      },
      submit_page: {
        page: 'u32',
        maybeSolution: 'Option<AssetHubPolkadotRuntimeStakingNposCompactSolution16>',
      },
      bail: 'Null',
      clear_old_round_data: {
        round: 'u32',
        witnessPages: 'u32',
      },
      set_invulnerables: {
        inv: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup470: pallet_staking_async::pallet::pallet::Call<T>
   **/
  PalletStakingAsyncPalletCall: {
    _enum: {
      bond: {
        value: 'Compact<u128>',
        payee: 'PalletStakingAsyncRewardDestination',
      },
      bond_extra: {
        maxAdditional: 'Compact<u128>',
      },
      unbond: {
        value: 'Compact<u128>',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      validate: {
        prefs: 'PalletStakingAsyncValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<MultiAddress>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'PalletStakingAsyncRewardDestination',
      },
      set_controller: 'Null',
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'Percent',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      force_unstake: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'u32',
        validatorSlashes: 'Vec<(AccountId32,Perbill)>',
      },
      payout_stakers: {
        validatorStash: 'AccountId32',
        era: 'u32',
      },
      rebond: {
        value: 'Compact<u128>',
      },
      reap_stash: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<MultiAddress>',
      },
      set_staking_configs: {
        minNominatorBond: 'PalletStakingAsyncPalletConfigOpU128',
        minValidatorBond: 'PalletStakingAsyncPalletConfigOpU128',
        maxNominatorCount: 'PalletStakingAsyncPalletConfigOpU32',
        maxValidatorCount: 'PalletStakingAsyncPalletConfigOpU32',
        chillThreshold: 'PalletStakingAsyncPalletConfigOpPercent',
        minCommission: 'PalletStakingAsyncPalletConfigOpPerbill',
        maxStakedRewards: 'PalletStakingAsyncPalletConfigOpPercent',
      },
      chill_other: {
        stash: 'AccountId32',
      },
      force_apply_min_commission: {
        validatorStash: 'AccountId32',
      },
      set_min_commission: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      payout_stakers_by_page: {
        validatorStash: 'AccountId32',
        era: 'u32',
        page: 'u32',
      },
      update_payee: {
        controller: 'AccountId32',
      },
      deprecate_controller_batch: {
        controllers: 'Vec<AccountId32>',
      },
      restore_ledger: {
        stash: 'AccountId32',
        maybeController: 'Option<AccountId32>',
        maybeTotal: 'Option<u128>',
        maybeUnlocking: 'Option<Vec<PalletStakingAsyncLedgerUnlockChunk>>',
      },
      migrate_currency: {
        stash: 'AccountId32',
      },
      apply_slash: {
        slashEra: 'u32',
        slashKey: '(AccountId32,Perbill,u32)',
      },
      prune_era_step: {
        era: 'u32'
      }
    }
  },
  /**
   * Lookup471: pallet_staking_async::RewardDestination<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup472: pallet_staking_async::ValidatorPrefs
   **/
  PalletStakingAsyncValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup478: pallet_staking_async::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingAsyncPalletConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup479: pallet_staking_async::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingAsyncPalletConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup480: pallet_staking_async::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
   **/
  PalletStakingAsyncPalletConfigOpPercent: {
    _enum: {
      Noop: 'Null',
      Set: 'Percent',
      Remove: 'Null'
    }
  },
  /**
   * Lookup481: pallet_staking_async::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletStakingAsyncPalletConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup485: pallet_staking_async::ledger::UnlockChunk<Balance>
   **/
  PalletStakingAsyncLedgerUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup488: pallet_ah_ops::pallet::Call<T>
   **/
  PalletAhOpsCall: {
    _enum: {
      unreserve_lease_deposit: {
        block: 'u32',
        depositor: 'Option<AccountId32>',
        paraId: 'u32',
      },
      withdraw_crowdloan_contribution: {
        block: 'u32',
        depositor: 'Option<AccountId32>',
        paraId: 'u32',
      },
      unreserve_crowdloan_reserve: {
        block: 'u32',
        depositor: 'Option<AccountId32>',
        paraId: 'u32',
      },
      transfer_to_post_migration_treasury: {
        assetId: 'StagingXcmV5Location'
      }
    }
  },
  /**
   * Lookup489: pallet_ah_migrator::pallet::Call<T>
   **/
  PalletAhMigratorCall: {
    _enum: {
      receive_accounts: {
        accounts: 'Vec<PalletRcMigratorAccountsAccount>',
      },
      receive_multisigs: {
        accounts: 'Vec<PalletRcMigratorMultisigRcMultisig>',
      },
      receive_proxy_proxies: {
        proxies: 'Vec<PalletRcMigratorProxyRcProxy>',
      },
      receive_proxy_announcements: {
        announcements: 'Vec<PalletRcMigratorProxyRcProxyAnnouncement>',
      },
      receive_preimage_chunks: {
        chunks: 'Vec<PalletRcMigratorPreimageChunksRcPreimageChunk>',
      },
      receive_preimage_request_status: {
        requestStatus: 'Vec<PalletRcMigratorPreimageRequestStatusPortableRequestStatus>',
      },
      receive_preimage_legacy_status: {
        legacyStatus: 'Vec<PalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus>',
      },
      receive_nom_pools_messages: {
        messages: 'Vec<PalletRcMigratorStakingNomPoolsRcNomPoolsMessage>',
      },
      receive_vesting_schedules: {
        schedules: 'Vec<PalletRcMigratorVestingRcVestingSchedule>',
      },
      __Unused9: 'Null',
      receive_referenda_values: {
        values: 'Vec<PalletRcMigratorReferendaReferendaMessage>',
      },
      receive_referendums: {
        referendums: 'Vec<(u32,PalletReferendaReferendumInfoRcPalletsOrigin)>',
      },
      receive_claims: {
        messages: 'Vec<PalletRcMigratorClaimsRcClaimsMessage>',
      },
      receive_bags_list_messages: {
        messages: 'Vec<PalletRcMigratorStakingBagsListPortableBagsListMessage>',
      },
      receive_scheduler_messages: {
        messages: 'Vec<PalletRcMigratorSchedulerRcSchedulerMessage>',
      },
      receive_indices: {
        indices: 'Vec<PalletRcMigratorIndicesRcIndicesIndex>',
      },
      receive_conviction_voting_messages: {
        messages: 'Vec<PalletRcMigratorConvictionVotingRcConvictionVotingMessage>',
      },
      receive_bounties_messages: {
        messages: 'Vec<PalletRcMigratorBountiesRcBountiesMessage>',
      },
      receive_asset_rates: {
        rates: 'Vec<(PolkadotRuntimeCommonImplsVersionedLocatableAsset,u128)>',
      },
      receive_crowdloan_messages: {
        messages: 'Vec<PalletRcMigratorCrowdloanRcCrowdloanMessage>',
      },
      receive_referenda_metadata: {
        metadata: 'Vec<(u32,H256)>',
      },
      receive_treasury_messages: {
        messages: 'Vec<PalletRcMigratorTreasuryPortableTreasuryMessage>',
      },
      receive_scheduler_agenda_messages: {
        messages: 'Vec<PalletRcMigratorSchedulerSchedulerAgendaMessage>',
      },
      receive_delegated_staking_messages: {
        messages: 'Vec<PalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage>',
      },
      receive_child_bounties_messages: {
        messages: 'Vec<PalletRcMigratorChildBountiesPortableChildBountiesMessage>',
      },
      receive_staking_messages: {
        messages: 'Vec<PalletRcMigratorStakingMessagePortableStakingMessage>',
      },
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
      __Unused99: 'Null',
      force_set_stage: {
        stage: 'PalletAhMigratorMigrationStage',
      },
      start_migration: 'Null',
      set_dmp_queue_priority: {
        _alias: {
          new_: 'new',
        },
        new_: 'PalletRcMigratorQueuePriority',
      },
      set_manager: {
        _alias: {
          new_: 'new',
        },
        new_: 'Option<AccountId32>',
      },
      __Unused104: 'Null',
      __Unused105: 'Null',
      __Unused106: 'Null',
      __Unused107: 'Null',
      __Unused108: 'Null',
      __Unused109: 'Null',
      finish_migration: {
        data: 'Option<PalletRcMigratorMigrationFinishedData>',
        coolOffEndAt: 'u32',
      },
      send_xcm_message: {
        dest: 'XcmVersionedLocation',
        message: 'XcmVersionedXcm'
      }
    }
  },
  /**
   * Lookup491: pallet_rc_migrator::accounts::Account<sp_core::crypto::AccountId32, Balance, pallet_rc_migrator::types::PortableHoldReason, pallet_rc_migrator::types::PortableFreezeReason>
   **/
  PalletRcMigratorAccountsAccount: {
    who: 'AccountId32',
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    holds: 'Vec<FrameSupportTokensMiscIdAmountPortableHoldReason>',
    freezes: 'Vec<FrameSupportTokensMiscIdAmountPortableFreezeReason>',
    locks: 'Vec<PalletBalancesBalanceLock>',
    unnamedReserve: 'u128',
    consumers: 'u8',
    providers: 'u8'
  },
  /**
   * Lookup492: pallet_rc_migrator::types::PortableHoldReason
   **/
  PalletRcMigratorPortableHoldReason: {
    _enum: {
      Preimage: 'PalletPreimageHoldReason',
      Staking: 'PalletStakingPalletHoldReason',
      StateTrieMigration: 'PalletStateTrieMigrationHoldReason',
      DelegatedStaking: 'PalletDelegatedStakingHoldReason',
      Session: 'PalletSessionHoldReason',
      XcmPallet: 'PalletXcmHoldReason'
    }
  },
  /**
   * Lookup499: pallet_rc_migrator::types::PortableFreezeReason
   **/
  PalletRcMigratorPortableFreezeReason: {
    _enum: {
      NominationPools: 'PalletNominationPoolsFreezeReason'
    }
  },
  /**
   * Lookup502: frame_support::traits::tokens::misc::IdAmount<pallet_rc_migrator::types::PortableHoldReason, Balance>
   **/
  FrameSupportTokensMiscIdAmountPortableHoldReason: {
    id: 'PalletRcMigratorPortableHoldReason',
    amount: 'u128'
  },
  /**
   * Lookup505: frame_support::traits::tokens::misc::IdAmount<pallet_rc_migrator::types::PortableFreezeReason, Balance>
   **/
  FrameSupportTokensMiscIdAmountPortableFreezeReason: {
    id: 'PalletRcMigratorPortableFreezeReason',
    amount: 'u128'
  },
  /**
   * Lookup512: pallet_rc_migrator::multisig::RcMultisig<sp_core::crypto::AccountId32, Balance>
   **/
  PalletRcMigratorMultisigRcMultisig: {
    creator: 'AccountId32',
    deposit: 'u128'
  },
  /**
   * Lookup514: pallet_rc_migrator::proxy::RcProxy<sp_core::crypto::AccountId32, Balance, polkadot_runtime_constants::proxy::ProxyType, BlockNumber>
   **/
  PalletRcMigratorProxyRcProxy: {
    delegator: 'AccountId32',
    deposit: 'u128',
    proxies: 'Vec<PalletProxyProxyDefinitionPolkadotRuntimeConstantsProxyProxyType>'
  },
  /**
   * Lookup517: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, polkadot_runtime_constants::proxy::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinitionPolkadotRuntimeConstantsProxyProxyType: {
    delegate: 'AccountId32',
    proxyType: 'PolkadotRuntimeConstantsProxyProxyType',
    delay: 'u32'
  },
  /**
   * Lookup519: pallet_rc_migrator::proxy::RcProxyAnnouncement<sp_core::crypto::AccountId32, Balance>
   **/
  PalletRcMigratorProxyRcProxyAnnouncement: {
    depositor: 'AccountId32',
    deposit: 'u128'
  },
  /**
   * Lookup521: pallet_rc_migrator::preimage::chunks::RcPreimageChunk
   **/
  PalletRcMigratorPreimageChunksRcPreimageChunk: {
    preimageHash: 'H256',
    preimageLen: 'u32',
    chunkByteOffset: 'u32',
    chunkBytes: 'Bytes'
  },
  /**
   * Lookup524: pallet_rc_migrator::preimage::request_status::PortableRequestStatus
   **/
  PalletRcMigratorPreimageRequestStatusPortableRequestStatus: {
    _alias: {
      hash_: 'hash'
    },
    hash_: 'H256',
    requestStatus: 'PalletRcMigratorPreimageRequestStatusPortableRequestStatusInner'
  },
  /**
   * Lookup525: pallet_rc_migrator::preimage::request_status::PortableRequestStatusInner
   **/
  PalletRcMigratorPreimageRequestStatusPortableRequestStatusInner: {
    _enum: {
      Unrequested: {
        ticket: '(AccountId32,Bytes)',
        len: 'u32',
      },
      Requested: {
        maybeTicket: 'Option<(AccountId32,Bytes)>',
        count: 'u32',
        maybeLen: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup530: pallet_rc_migrator::preimage::legacy_request_status::RcPreimageLegacyStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus: {
    _alias: {
      hash_: 'hash'
    },
    hash_: 'H256',
    depositor: 'AccountId32',
    deposit: 'u128'
  },
  /**
   * Lookup532: pallet_rc_migrator::staking::nom_pools::RcNomPoolsMessage<T>
   **/
  PalletRcMigratorStakingNomPoolsRcNomPoolsMessage: {
    _enum: {
      StorageValues: {
        values: 'PalletRcMigratorStakingNomPoolsNomPoolsStorageValues',
      },
      PoolMembers: {
        member: '(AccountId32,PalletNominationPoolsPoolMember)',
      },
      BondedPools: {
        pool: '(u32,PalletNominationPoolsBondedPoolInner)',
      },
      RewardPools: {
        rewards: '(u32,PalletRcMigratorStakingNomPoolsAliasRewardPool)',
      },
      SubPoolsStorage: {
        subPools: '(u32,PalletRcMigratorStakingNomPoolsAliasSubPools)',
      },
      Metadata: {
        meta: '(u32,Bytes)',
      },
      ReversePoolIdLookup: {
        lookups: '(AccountId32,u32)',
      },
      ClaimPermissions: {
        perms: '(AccountId32,PalletNominationPoolsClaimPermission)'
      }
    }
  },
  /**
   * Lookup533: pallet_rc_migrator::staking::nom_pools::NomPoolsStorageValues<Balance>
   **/
  PalletRcMigratorStakingNomPoolsNomPoolsStorageValues: {
    totalValueLocked: 'Option<u128>',
    minJoinBond: 'Option<u128>',
    minCreateBond: 'Option<u128>',
    maxPools: 'Option<u32>',
    maxPoolMembers: 'Option<u32>',
    maxPoolMembersPerPool: 'Option<u32>',
    globalMaxCommission: 'Option<Perbill>',
    lastPoolId: 'Option<u32>'
  },
  /**
   * Lookup547: pallet_rc_migrator::staking::nom_pools_alias::RewardPool<T>
   **/
  PalletRcMigratorStakingNomPoolsAliasRewardPool: {
    lastRecordedRewardCounter: 'u128',
    lastRecordedTotalPayouts: 'u128',
    totalRewardsClaimed: 'u128',
    totalCommissionPending: 'u128',
    totalCommissionClaimed: 'u128'
  },
  /**
   * Lookup549: pallet_rc_migrator::staking::nom_pools_alias::SubPools<T>
   **/
  PalletRcMigratorStakingNomPoolsAliasSubPools: {
    noEra: 'PalletRcMigratorStakingNomPoolsAliasUnbondPool',
    withEra: 'BTreeMap<u32, PalletRcMigratorStakingNomPoolsAliasUnbondPool>'
  },
  /**
   * Lookup550: pallet_rc_migrator::staking::nom_pools_alias::UnbondPool<T>
   **/
  PalletRcMigratorStakingNomPoolsAliasUnbondPool: {
    points: 'u128',
    balance: 'u128'
  },
  /**
   * Lookup558: pallet_rc_migrator::vesting::RcVestingSchedule<T>
   **/
  PalletRcMigratorVestingRcVestingSchedule: {
    who: 'AccountId32',
    schedules: 'Vec<PalletVestingVestingInfo>'
  },
  /**
   * Lookup562: pallet_rc_migrator::referenda::ReferendaMessage<Track>
   **/
  PalletRcMigratorReferendaReferendaMessage: {
    referendumCount: 'Option<u32>',
    decidingCount: 'Vec<(u16,u32)>',
    trackQueue: 'Vec<(u16,Vec<(u32,u128)>)>'
  },
  /**
   * Lookup569: pallet_referenda::types::ReferendumInfo<TrackId, asset_hub_polkadot_runtime::ah_migration::RcPalletsOrigin, Moment, frame_support::traits::preimages::Bounded<asset_hub_polkadot_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumInfoRcPalletsOrigin: {
    _enum: {
      Ongoing: 'PalletReferendaReferendumStatusRcPalletsOrigin',
      Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup570: asset_hub_polkadot_runtime::ah_migration::RcPalletsOrigin
   **/
  AssetHubPolkadotRuntimeAhMigrationRcPalletsOrigin: {
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
      Origins: 'AssetHubPolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin'
    }
  },
  /**
   * Lookup572: pallet_referenda::types::ReferendumStatus<TrackId, asset_hub_polkadot_runtime::ah_migration::RcPalletsOrigin, Moment, frame_support::traits::preimages::Bounded<asset_hub_polkadot_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatusRcPalletsOrigin: {
    track: 'u16',
    origin: 'AssetHubPolkadotRuntimeAhMigrationRcPalletsOrigin',
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
   * Lookup580: pallet_rc_migrator::claims::RcClaimsMessage<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletRcMigratorClaimsRcClaimsMessage: {
    _enum: {
      StorageValues: {
        total: 'u128',
      },
      Claims: '(EthereumAddress,u128)',
      Vesting: {
        who: 'EthereumAddress',
        schedule: '(u128,u128,u32)',
      },
      Signing: '(EthereumAddress,PolkadotRuntimeCommonClaimsStatementKind)',
      Preclaims: '(AccountId32,EthereumAddress)'
    }
  },
  /**
   * Lookup585: pallet_rc_migrator::staking::bags_list::PortableBagsListMessage
   **/
  PalletRcMigratorStakingBagsListPortableBagsListMessage: {
    _enum: {
      Node: {
        id: 'AccountId32',
        node: 'PalletRcMigratorStakingBagsListPortableNode',
      },
      Bag: {
        score: 'u64',
        bag: 'PalletRcMigratorStakingBagsListPortableBag'
      }
    }
  },
  /**
   * Lookup586: pallet_rc_migrator::staking::bags_list::PortableNode
   **/
  PalletRcMigratorStakingBagsListPortableNode: {
    id: 'AccountId32',
    prev: 'Option<AccountId32>',
    next: 'Option<AccountId32>',
    bagUpper: 'u64',
    score: 'u64'
  },
  /**
   * Lookup587: pallet_rc_migrator::staking::bags_list::PortableBag
   **/
  PalletRcMigratorStakingBagsListPortableBag: {
    head: 'Option<AccountId32>',
    tail: 'Option<AccountId32>',
    bagUpper: 'u64'
  },
  /**
   * Lookup589: pallet_rc_migrator::scheduler::RcSchedulerMessage<BlockNumber>
   **/
  PalletRcMigratorSchedulerRcSchedulerMessage: {
    _enum: {
      IncompleteSince: 'u32',
      Retries: '((u32,u32),PalletSchedulerRetryConfig)',
      Lookup: '([u8;32],(u32,u32))'
    }
  },
  /**
   * Lookup594: pallet_rc_migrator::indices::RcIndicesIndex<AccountIndex, sp_core::crypto::AccountId32, Balance>
   **/
  PalletRcMigratorIndicesRcIndicesIndex: {
    index: 'u32',
    who: 'AccountId32',
    deposit: 'u128',
    frozen: 'bool'
  },
  /**
   * Lookup596: pallet_rc_migrator::conviction_voting::RcConvictionVotingMessage<sp_core::crypto::AccountId32, Class, pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>, Balance>
   **/
  PalletRcMigratorConvictionVotingRcConvictionVotingMessage: {
    _enum: {
      VotingFor: '(AccountId32,u16,PalletConvictionVotingVoteVoting)',
      ClassLocksFor: '(AccountId32,Vec<(u16,u128)>)'
    }
  },
  /**
   * Lookup608: pallet_rc_migrator::bounties::RcBountiesMessage<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletRcMigratorBountiesRcBountiesMessage: {
    _enum: {
      BountyCount: 'u32',
      BountyApprovals: 'Vec<u32>',
      BountyDescriptions: '(u32,Bytes)',
      Bounties: '(u32,PalletRcMigratorBountiesAliasBounty)'
    }
  },
  /**
   * Lookup611: pallet_rc_migrator::bounties::alias::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletRcMigratorBountiesAliasBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup616: pallet_rc_migrator::crowdloan::RcCrowdloanMessage<BlockNumber, sp_core::crypto::AccountId32, Balance>
   **/
  PalletRcMigratorCrowdloanRcCrowdloanMessage: {
    _enum: {
      LeaseReserve: {
        unreserveBlock: 'u32',
        account: 'AccountId32',
        paraId: 'u32',
        amount: 'u128',
      },
      CrowdloanContribution: {
        withdrawBlock: 'u32',
        contributor: 'AccountId32',
        paraId: 'u32',
        amount: 'u128',
        crowdloanAccount: 'AccountId32',
      },
      CrowdloanReserve: {
        unreserveBlock: 'u32',
        depositor: 'AccountId32',
        paraId: 'u32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup620: pallet_rc_migrator::treasury::PortableTreasuryMessage
   **/
  PalletRcMigratorTreasuryPortableTreasuryMessage: {
    _enum: {
      ProposalCount: 'u32',
      Proposals: '(u32,PalletTreasuryProposal)',
      Approvals: 'Vec<u32>',
      SpendCount: 'u32',
      Spends: {
        id: 'u32',
        status: 'PalletRcMigratorTreasuryPortableSpendStatus',
      },
      LastSpendPeriod: 'Option<u32>',
      Funds: 'Null'
    }
  },
  /**
   * Lookup623: pallet_rc_migrator::treasury::PortableSpendStatus
   **/
  PalletRcMigratorTreasuryPortableSpendStatus: {
    assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
    amount: 'u128',
    beneficiary: 'XcmVersionedLocation',
    validFrom: 'u32',
    expireAt: 'u32',
    status: 'PalletRcMigratorTreasuryPortablePaymentState'
  },
  /**
   * Lookup624: pallet_rc_migrator::treasury::PortablePaymentState
   **/
  PalletRcMigratorTreasuryPortablePaymentState: {
    _enum: {
      Pending: 'Null',
      Attempted: {
        id: 'u64',
      },
      Failed: 'Null'
    }
  },
  /**
   * Lookup626: pallet_rc_migrator::scheduler::SchedulerAgendaMessage<B, pallet_rc_migrator::scheduler::alias::Scheduled<frame_support::traits::preimages::Bounded<asset_hub_polkadot_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, BlockNumber, asset_hub_polkadot_runtime::ah_migration::RcPalletsOrigin>>
   **/
  PalletRcMigratorSchedulerSchedulerAgendaMessage: {
    block: 'u32',
    agenda: 'Vec<Option<PalletRcMigratorSchedulerAliasScheduled>>'
  },
  /**
   * Lookup627: pallet_rc_migrator::scheduler::alias::Scheduled<frame_support::traits::preimages::Bounded<asset_hub_polkadot_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, BlockNumber, asset_hub_polkadot_runtime::ah_migration::RcPalletsOrigin>
   **/
  PalletRcMigratorSchedulerAliasScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'AssetHubPolkadotRuntimeAhMigrationRcPalletsOrigin'
  },
  /**
   * Lookup631: pallet_rc_migrator::staking::delegated_staking::PortableDelegatedStakingMessage
   **/
  PalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage: {
    _enum: {
      Delegators: {
        delegator: 'AccountId32',
        agent: 'AccountId32',
        amount: 'u128',
      },
      Agents: {
        agent: 'AccountId32',
        payee: 'AccountId32',
        totalDelegated: 'u128',
        unclaimedWithdrawals: 'u128',
        pendingSlash: 'u128'
      }
    }
  },
  /**
   * Lookup633: pallet_rc_migrator::child_bounties::PortableChildBountiesMessage
   **/
  PalletRcMigratorChildBountiesPortableChildBountiesMessage: {
    _enum: {
      ChildBountyCount: 'u32',
      ParentChildBounties: '(u32,u32)',
      ParentTotalChildBounties: '(u32,u32)',
      ChildBounty: {
        parentId: 'u32',
        childId: 'u32',
        childBounty: 'PalletRcMigratorChildBountiesPortableChildBounty',
      },
      ChildBountyDescriptionsV1: {
        parentId: 'u32',
        childId: 'u32',
        description: 'Bytes',
      },
      V0ToV1ChildBountyIds: {
        v0ChildId: 'u32',
        parentId: 'u32',
        v1ChildId: 'u32',
      },
      ChildrenCuratorFees: {
        childId: 'u32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup634: pallet_rc_migrator::child_bounties::PortableChildBounty
   **/
  PalletRcMigratorChildBountiesPortableChildBounty: {
    parentBounty: 'u32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    status: 'PalletRcMigratorChildBountiesPortableChildBountyStatus'
  },
  /**
   * Lookup635: pallet_rc_migrator::child_bounties::PortableChildBountyStatus
   **/
  PalletRcMigratorChildBountiesPortableChildBountyStatus: {
    _enum: {
      Added: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup638: pallet_rc_migrator::staking::message::PortableStakingMessage
   **/
  PalletRcMigratorStakingMessagePortableStakingMessage: {
    _enum: {
      Values: 'PalletRcMigratorStakingMessageStakingValues',
      Invulnerables: 'Vec<AccountId32>',
      Bonded: {
        stash: 'AccountId32',
        controller: 'AccountId32',
      },
      Ledger: {
        controller: 'AccountId32',
        ledger: 'PalletRcMigratorStakingMessagePortableStakingLedger',
      },
      Payee: {
        stash: 'AccountId32',
        payment: 'PalletRcMigratorStakingMessagePortableRewardDestination',
      },
      Validators: {
        stash: 'AccountId32',
        validators: 'PalletRcMigratorStakingMessagePortableValidatorPrefs',
      },
      Nominators: {
        stash: 'AccountId32',
        nominations: 'PalletRcMigratorStakingMessagePortableNominations',
      },
      VirtualStakers: 'AccountId32',
      ErasStakersOverview: {
        era: 'u32',
        validator: 'AccountId32',
        exposure: 'PalletRcMigratorStakingMessagePortablePagedExposureMetadata',
      },
      ErasStakersPaged: {
        era: 'u32',
        validator: 'AccountId32',
        page: 'u32',
        exposure: 'PalletRcMigratorStakingMessagePortableExposurePage',
      },
      ClaimedRewards: {
        era: 'u32',
        validator: 'AccountId32',
        rewards: 'Vec<u32>',
      },
      ErasValidatorPrefs: {
        era: 'u32',
        validator: 'AccountId32',
        prefs: 'PalletRcMigratorStakingMessagePortableValidatorPrefs',
      },
      ErasValidatorReward: {
        era: 'u32',
        reward: 'u128',
      },
      ErasRewardPoints: {
        era: 'u32',
        points: 'PalletRcMigratorStakingMessagePortableEraRewardPoints',
      },
      ErasTotalStake: {
        era: 'u32',
        totalStake: 'u128',
      },
      UnappliedSlashes: {
        era: 'u32',
        slash: 'PalletRcMigratorStakingMessagePortableUnappliedSlash',
      },
      BondedEras: 'Vec<(u32,u32)>',
      ValidatorSlashInEra: {
        era: 'u32',
        validator: 'AccountId32',
        slash: '(Perbill,u128)'
      }
    }
  },
  /**
   * Lookup639: pallet_rc_migrator::staking::message::StakingValues<Balance>
   **/
  PalletRcMigratorStakingMessageStakingValues: {
    validatorCount: 'Option<u32>',
    minValidatorCount: 'Option<u32>',
    minNominatorBond: 'Option<u128>',
    minValidatorBond: 'Option<u128>',
    minActiveStake: 'Option<u128>',
    minCommission: 'Option<Perbill>',
    maxValidatorsCount: 'Option<u32>',
    maxNominatorsCount: 'Option<u32>',
    currentEra: 'Option<u32>',
    activeEra: 'Option<PalletRcMigratorStakingMessagePortableActiveEraInfo>',
    forceEra: 'Option<PalletRcMigratorStakingMessagePortableForcing>',
    maxStakedRewards: 'Option<Percent>',
    slashRewardFraction: 'Option<Perbill>',
    canceledSlashPayout: 'Option<u128>',
    currentPlannedSession: 'Option<u32>',
    chillThreshold: 'Option<Percent>'
  },
  /**
   * Lookup641: pallet_rc_migrator::staking::message::PortableActiveEraInfo
   **/
  PalletRcMigratorStakingMessagePortableActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup643: pallet_rc_migrator::staking::message::PortableForcing
   **/
  PalletRcMigratorStakingMessagePortableForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup645: pallet_rc_migrator::staking::message::PortableStakingLedger
   **/
  PalletRcMigratorStakingMessagePortableStakingLedger: {
    stash: 'AccountId32',
    total: 'u128',
    active: 'u128',
    unlocking: 'Vec<PalletRcMigratorStakingMessagePortableUnlockChunk>'
  },
  /**
   * Lookup647: pallet_rc_migrator::staking::message::PortableUnlockChunk
   **/
  PalletRcMigratorStakingMessagePortableUnlockChunk: {
    value: 'u128',
    era: 'u32'
  },
  /**
   * Lookup649: pallet_rc_migrator::staking::message::PortableRewardDestination
   **/
  PalletRcMigratorStakingMessagePortableRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup650: pallet_rc_migrator::staking::message::PortableValidatorPrefs
   **/
  PalletRcMigratorStakingMessagePortableValidatorPrefs: {
    commission: 'Perbill',
    blocked: 'bool'
  },
  /**
   * Lookup651: pallet_rc_migrator::staking::message::PortableNominations
   **/
  PalletRcMigratorStakingMessagePortableNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup653: pallet_rc_migrator::staking::message::PortablePagedExposureMetadata
   **/
  PalletRcMigratorStakingMessagePortablePagedExposureMetadata: {
    total: 'u128',
    own: 'u128',
    nominatorCount: 'u32',
    pageCount: 'u32'
  },
  /**
   * Lookup654: pallet_rc_migrator::staking::message::PortableExposurePage
   **/
  PalletRcMigratorStakingMessagePortableExposurePage: {
    pageTotal: 'u128',
    others: 'Vec<PalletRcMigratorStakingMessagePortableIndividualExposure>'
  },
  /**
   * Lookup656: pallet_rc_migrator::staking::message::PortableIndividualExposure
   **/
  PalletRcMigratorStakingMessagePortableIndividualExposure: {
    who: 'AccountId32',
    value: 'u128'
  },
  /**
   * Lookup658: pallet_rc_migrator::staking::message::PortableEraRewardPoints
   **/
  PalletRcMigratorStakingMessagePortableEraRewardPoints: {
    total: 'u32',
    individual: 'Vec<(AccountId32,u32)>'
  },
  /**
   * Lookup660: pallet_rc_migrator::staking::message::PortableUnappliedSlash
   **/
  PalletRcMigratorStakingMessagePortableUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporters: 'Vec<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup665: pallet_ah_migrator::MigrationStage
   **/
  PalletAhMigratorMigrationStage: {
    _enum: {
      Pending: 'Null',
      DataMigrationOngoing: 'Null',
      MigrationDone: 'Null',
      CoolOff: {
        endAt: 'u32'
      }
    }
  },
  /**
   * Lookup668: pallet_rc_migrator::types::MigrationFinishedData<Balance>
   **/
  PalletRcMigratorMigrationFinishedData: {
    rcBalanceKept: 'u128'
  },
  /**
   * Lookup683: pallet_staking_async_rc_client::pallet::Event<T>
   **/
  PalletStakingAsyncRcClientEvent: {
    _enum: {
      SessionReportReceived: {
        endIndex: 'u32',
        activationTimestamp: 'Option<(u64,u32)>',
        validatorPointsCounts: 'u32',
        leftover: 'bool',
      },
      OffenceReceived: {
        slashSession: 'u32',
        offencesCount: 'u32',
      },
      Unexpected: 'PalletStakingAsyncRcClientUnexpectedKind'
    }
  },
  /**
   * Lookup684: pallet_staking_async_rc_client::pallet::UnexpectedKind
   **/
  PalletStakingAsyncRcClientUnexpectedKind: {
    _enum: ['SessionReportIntegrityFailed', 'ValidatorSetIntegrityFailed', 'SessionSkipped', 'SessionAlreadyProcessed', 'ValidatorSetSendFailed', 'ValidatorSetDropped']
  },
  /**
   * Lookup685: pallet_election_provider_multi_block::pallet::Event<T>
   **/
  PalletElectionProviderMultiBlockEvent: {
    _enum: {
      PhaseTransitioned: {
        from: 'PalletElectionProviderMultiBlockPhase',
        to: 'PalletElectionProviderMultiBlockPhase',
      },
      UnexpectedTargetSnapshotFailed: 'Null',
      UnexpectedVoterSnapshotFailed: 'Null'
    }
  },
  /**
   * Lookup686: pallet_election_provider_multi_block::verifier::impls::pallet::Event<T>
   **/
  PalletElectionProviderMultiBlockVerifierImplsPalletEvent: {
    _enum: {
      VerificationFailed: '(u32,PalletElectionProviderMultiBlockVerifierFeasibilityError)',
      Verified: '(u32,u32)',
      Queued: '(SpNposElectionsElectionScore,Option<SpNposElectionsElectionScore>)'
    }
  },
  /**
   * Lookup687: pallet_election_provider_multi_block::verifier::FeasibilityError
   **/
  PalletElectionProviderMultiBlockVerifierFeasibilityError: {
    _enum: {
      WrongWinnerCount: 'Null',
      SnapshotUnavailable: 'Null',
      InvalidVote: 'Null',
      InvalidVoter: 'Null',
      InvalidWinner: 'Null',
      InvalidScore: 'Null',
      InvalidRound: 'Null',
      ScoreTooLow: 'Null',
      FailedToBoundSupport: 'Null',
      NposElection: 'SpNposElectionsError',
      Incomplete: 'Null'
    }
  },
  /**
   * Lookup688: sp_npos_elections::Error
   **/
  SpNposElectionsError: {
    _enum: ['SolutionWeightOverflow', 'SolutionTargetOverflow', 'SolutionInvalidIndex', 'SolutionInvalidPageIndex', 'ArithmeticError', 'InvalidSupportEdge', 'TooManyVoters', 'BoundsExceeded', 'DuplicateVoter', 'DuplicateTarget']
  },
  /**
   * Lookup690: pallet_election_provider_multi_block::signed::pallet::Event<T>
   **/
  PalletElectionProviderMultiBlockSignedPalletEvent: {
    _enum: {
      Registered: '(u32,AccountId32,SpNposElectionsElectionScore)',
      Stored: '(u32,AccountId32,u32)',
      Rewarded: '(u32,AccountId32,u128)',
      Slashed: '(u32,AccountId32,u128)',
      Ejected: '(u32,AccountId32)',
      Discarded: '(u32,AccountId32)',
      Bailed: '(u32,AccountId32)'
    }
  },
  /**
   * Lookup691: pallet_staking_async::pallet::pallet::Event<T>
   **/
  PalletStakingAsyncPalletEvent: {
    _enum: {
      EraPaid: {
        eraIndex: 'u32',
        validatorPayout: 'u128',
        remainder: 'u128',
      },
      Rewarded: {
        stash: 'AccountId32',
        dest: 'PalletStakingAsyncRewardDestination',
        amount: 'u128',
      },
      Slashed: {
        staker: 'AccountId32',
        amount: 'u128',
      },
      OldSlashingReportDiscarded: {
        sessionIndex: 'u32',
      },
      Bonded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Unbonded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      StakerRemoved: {
        stash: 'AccountId32',
      },
      Kicked: {
        nominator: 'AccountId32',
        stash: 'AccountId32',
      },
      Chilled: {
        stash: 'AccountId32',
      },
      PayoutStarted: {
        eraIndex: 'u32',
        validatorStash: 'AccountId32',
        page: 'u32',
        next: 'Option<u32>',
      },
      ValidatorPrefsSet: {
        stash: 'AccountId32',
        prefs: 'PalletStakingAsyncValidatorPrefs',
      },
      SnapshotVotersSizeExceeded: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      SnapshotTargetsSizeExceeded: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      ForceEra: {
        mode: 'PalletStakingAsyncForcing',
      },
      ControllerBatchDeprecated: {
        failures: 'u32',
      },
      CurrencyMigrated: {
        stash: 'AccountId32',
        forceWithdraw: 'u128',
      },
      PagedElectionProceeded: {
        page: 'u32',
        result: 'Result<u32, u32>',
      },
      OffenceReported: {
        offenceEra: 'u32',
        validator: 'AccountId32',
        fraction: 'Perbill',
      },
      SlashComputed: {
        offenceEra: 'u32',
        slashEra: 'u32',
        offender: 'AccountId32',
        page: 'u32',
      },
      SlashCancelled: {
        slashEra: 'u32',
        validator: 'AccountId32',
      },
      SessionRotated: {
        startingSession: 'u32',
        activeEra: 'u32',
        plannedEra: 'u32',
      },
      Unexpected: 'PalletStakingAsyncPalletUnexpectedKind',
      OffenceTooOld: {
        offenceEra: 'u32',
        validator: 'AccountId32',
        fraction: 'Perbill',
      },
      EraPruned: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup692: pallet_staking_async::Forcing
   **/
  PalletStakingAsyncForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup694: pallet_staking_async::pallet::pallet::UnexpectedKind
   **/
  PalletStakingAsyncPalletUnexpectedKind: {
    _enum: ['EraDurationBoundExceeded', 'UnknownValidatorActivation']
  },
  /**
   * Lookup695: pallet_ah_ops::pallet::Event<T>
   **/
  PalletAhOpsEvent: {
    _enum: {
      LeaseUnreserveRemaining: {
        depositor: 'AccountId32',
        paraId: 'u32',
        remaining: 'u128',
      },
      CrowdloanUnreserveRemaining: {
        depositor: 'AccountId32',
        paraId: 'u32',
        remaining: 'u128',
      },
      SovereignMigrated: {
        paraId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        derivationIndex: 'Option<u16>'
      }
    }
  },
  /**
   * Lookup696: pallet_ah_migrator::pallet::Event<T>
   **/
  PalletAhMigratorEvent: {
    _enum: {
      StageTransition: {
        _alias: {
          new_: 'new',
        },
        old: 'PalletAhMigratorMigrationStage',
        new_: 'PalletAhMigratorMigrationStage',
      },
      BatchReceived: {
        pallet: 'PalletAhMigratorPalletEventName',
        count: 'u32',
      },
      BatchProcessed: {
        pallet: 'PalletAhMigratorPalletEventName',
        countGood: 'u32',
        countBad: 'u32',
      },
      AssetHubMigrationStarted: 'Null',
      AssetHubMigrationFinished: 'Null',
      DmpQueuePrioritySet: {
        prioritized: 'bool',
        cycleBlock: 'u32',
        cyclePeriod: 'u32',
      },
      DmpQueuePriorityConfigSet: {
        _alias: {
          new_: 'new',
        },
        old: 'PalletRcMigratorQueuePriority',
        new_: 'PalletRcMigratorQueuePriority',
      },
      BalancesBeforeRecordSet: {
        checkingAccount: 'u128',
        totalIssuance: 'u128',
      },
      BalancesBeforeRecordConsumed: {
        checkingAccount: 'u128',
        totalIssuance: 'u128',
      },
      ReferendumCanceled: {
        id: 'u32',
      },
      ManagerSet: {
        _alias: {
          new_: 'new',
        },
        old: 'Option<AccountId32>',
        new_: 'Option<AccountId32>',
      },
      AccountTranslatedParachainSovereign: {
        from: 'AccountId32',
        to: 'AccountId32',
      },
      AccountTranslatedParachainSovereignDerived: {
        from: 'AccountId32',
        to: 'AccountId32',
        derivationIndex: 'u16',
      },
      XcmSent: {
        origin: 'StagingXcmV5Location',
        destination: 'StagingXcmV5Location',
        message: 'StagingXcmV5Xcm',
        messageId: '[u8;32]',
      },
      FailedToUnreserveMultisigDeposit: {
        expectedAmount: 'u128',
        missingAmount: 'u128',
        account: 'AccountId32',
      },
      FailedToUnreservePreimageDeposit: {
        expectedAmount: 'u128',
        missingAmount: 'u128',
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup697: pallet_ah_migrator::PalletEventName
   **/
  PalletAhMigratorPalletEventName: {
    _enum: ['AssetRates', 'BagsList', 'Balances', 'Bounties', 'ChildBounties', 'Claims', 'ConvictionVoting', 'Crowdloan', 'DelegatedStaking', 'Indices', 'Multisig', 'NomPools', 'PreimageChunk', 'PreimageLegacyStatus', 'PreimageRequestStatus', 'ProxyAnnouncements', 'ProxyProxies', 'Recovery', 'ReferendaMetadata', 'ReferendaReferendums', 'ReferendaValues', 'Scheduler', 'SchedulerAgenda', 'Staking', 'Treasury', 'Vesting', 'Society']
  },
  /**
   * Lookup715: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentAncestor: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    paraHeadHash: 'Option<H256>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV8UpgradeGoAhead>'
  },
  /**
   * Lookup716: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth
   **/
  CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
    umpMsgCount: 'u32',
    umpTotalBytes: 'u32',
    hrmpOutgoing: 'BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>'
  },
  /**
   * Lookup718: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate
   **/
  CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
    msgCount: 'u32',
    totalBytes: 'u32'
  },
  /**
   * Lookup723: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    hrmpWatermark: 'Option<u32>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV8UpgradeGoAhead>'
  },
  /**
   * Lookup726: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueRemainingCapacity: 'CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV8AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV8AbridgedHrmpChannel)>'
  },
  /**
   * Lookup727: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
   **/
  CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
    remainingCount: 'u32',
    remainingSize: 'u32'
  },
  /**
   * Lookup730: polkadot_primitives::v8::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV8AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup731: polkadot_primitives::v8::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV8AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32',
    asyncBackingParams: 'PolkadotPrimitivesV8AsyncBackingAsyncBackingParams'
  },
  /**
   * Lookup737: cumulus_pallet_parachain_system::parachain_inherent::InboundMessageId
   **/
  CumulusPalletParachainSystemParachainInherentInboundMessageId: {
    sentAt: 'u32',
    reverseIdx: 'u32'
  },
  /**
   * Lookup740: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled']
  },
  /**
   * Lookup761: asset_hub_polkadot_runtime::RuntimeHoldReason
   **/
  AssetHubPolkadotRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      Preimage: 'PalletPreimageHoldReason',
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
   * Lookup762: pallet_election_provider_multi_block::signed::pallet::HoldReason
   **/
  PalletElectionProviderMultiBlockSignedPalletHoldReason: {
    _enum: ['SignedSubmission']
  },
  /**
   * Lookup763: pallet_staking_async::pallet::pallet::HoldReason
   **/
  PalletStakingAsyncPalletHoldReason: {
    _enum: ['Staking']
  },
  /**
   * Lookup767: asset_hub_polkadot_runtime::RuntimeFreezeReason
   **/
  AssetHubPolkadotRuntimeRuntimeFreezeReason: {
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
   * Lookup776: pallet_collator_selection::pallet::CandidateInfo<sp_core::crypto::AccountId32, Balance>
   **/
  PalletCollatorSelectionCandidateInfo: {
    who: 'AccountId32',
    deposit: 'u128'
  },
  /**
   * Lookup779: pallet_collator_selection::pallet::Error<T>
   **/
  PalletCollatorSelectionError: {
    _enum: ['TooManyCandidates', 'TooFewEligibleCollators', 'AlreadyCandidate', 'NotCandidate', 'TooManyInvulnerables', 'AlreadyInvulnerable', 'NotInvulnerable', 'NoAssociatedValidatorId', 'ValidatorNotRegistered', 'InsertToCandidateListFailed', 'RemoveFromCandidateListFailed', 'DepositTooLow', 'UpdateCandidateListFailed', 'InsufficientBond', 'TargetIsNotCandidate', 'IdenticalDeposit', 'InvalidUnreserve']
  },
  /**
   * Lookup796: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
   * Lookup797: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup801: cumulus_pallet_xcmp_queue::QueueConfigData
   **/
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: 'u32',
    dropThreshold: 'u32',
    resumeThreshold: 'u32'
  },
  /**
   * Lookup802: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['BadQueueConfig', 'AlreadySuspended', 'AlreadyResumed', 'TooManyActiveOutboundChannels', 'TooBig']
  },
  /**
   * Lookup831: bp_xcm_bridge_hub_router::BridgeState
   **/
  BpXcmBridgeHubRouterBridgeState: {
    deliveryFeeFactor: 'u128',
    isCongested: 'bool'
  },
  /**
   * Lookup839: snowbridge_pallet_system_frontend::pallet::Error<T>
   **/
  SnowbridgePalletSystemFrontendError: {
    _enum: ['UnsupportedLocationVersion', 'InvalidAssetOwner', 'SendFailure', 'FeesNotMet', 'LocationConversionFailed', 'Halted', 'Unreachable', 'UnsupportedAsset', 'WithdrawError', 'InvalidAccount', 'SwapError', 'BurnError', 'TipAmountZero']
  },
  /**
   * Lookup847: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, asset_hub_polkadot_runtime::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinitionAssetHubPolkadotRuntimeProxyType: {
    delegate: 'AccountId32',
    proxyType: 'AssetHubPolkadotRuntimeProxyType',
    delay: 'u32'
  },
  /**
   * Lookup917: pallet_referenda::types::ReferendumInfo<TrackId, asset_hub_polkadot_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<asset_hub_polkadot_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumInfoOriginCaller: {
    _enum: {
      Ongoing: 'PalletReferendaReferendumStatusOriginCaller',
      Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup918: pallet_referenda::types::ReferendumStatus<TrackId, asset_hub_polkadot_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<asset_hub_polkadot_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatusOriginCaller: {
    track: 'u16',
    origin: 'AssetHubPolkadotRuntimeOriginCaller',
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
   * Lookup959: pallet_election_provider_multi_block::pallet::Error<T>
   **/
  PalletElectionProviderMultiBlockError: {
    _enum: ['Fallback', 'UnexpectedPhase', 'Snapshot']
  },
  /**
   * Lookup960: pallet_election_provider_multi_block::verifier::impls::ValidSolution
   **/
  PalletElectionProviderMultiBlockVerifierImplsValidSolution: {
    _enum: ['X', 'Y']
  },
  /**
   * Lookup963: pallet_election_provider_multi_block::verifier::impls::PartialBackings
   **/
  PalletElectionProviderMultiBlockVerifierImplsPartialBackings: {
    total: 'u128',
    backers: 'u32'
  },
  /**
   * Lookup965: pallet_election_provider_multi_block::verifier::impls::Status
   **/
  PalletElectionProviderMultiBlockVerifierImplsStatus: {
    _enum: {
      Ongoing: 'u32',
      Nothing: 'Null'
    }
  },
  /**
   * Lookup970: pallet_election_provider_multi_block::signed::SubmissionMetadata<T>
   **/
  PalletElectionProviderMultiBlockSignedSubmissionMetadata: {
    deposit: 'u128',
    fee: 'u128',
    reward: 'u128',
    claimedScore: 'SpNposElectionsElectionScore',
    pages: 'Vec<bool>'
  },
  /**
   * Lookup973: pallet_election_provider_multi_block::signed::pallet::Error<T>
   **/
  PalletElectionProviderMultiBlockSignedPalletError: {
    _enum: ['PhaseNotSigned', 'Duplicate', 'QueueFull', 'BadPageIndex', 'NotRegistered', 'NoSubmission', 'RoundNotOver', 'BadWitnessData', 'TooManyInvulnerables']
  },
  /**
   * Lookup974: pallet_staking_async::ledger::StakingLedger<T>
   **/
  PalletStakingAsyncLedgerStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingAsyncLedgerUnlockChunk>'
  },
  /**
   * Lookup975: pallet_staking_async::Nominations<T>
   **/
  PalletStakingAsyncNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup976: pallet_staking_async::ActiveEraInfo
   **/
  PalletStakingAsyncActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup979: pallet_staking_async::pallet::pallet::BoundedExposurePage<T>
   **/
  PalletStakingAsyncPalletBoundedExposurePage: 'SpStakingExposurePage',
  /**
   * Lookup984: pallet_staking_async::EraRewardPoints<T>
   **/
  PalletStakingAsyncEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup987: pallet_staking_async::slashing::OffenceRecord<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncSlashingOffenceRecord: {
    reporter: 'Option<AccountId32>',
    reportedEra: 'u32',
    exposurePage: 'u32',
    slashFraction: 'Perbill',
    priorSlashFraction: 'Perbill'
  },
  /**
   * Lookup991: pallet_staking_async::UnappliedSlash<T>
   **/
  PalletStakingAsyncUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporter: 'Option<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup994: pallet_staking_async::SnapshotStatus<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncSnapshotStatus: {
    _enum: {
      Ongoing: 'AccountId32',
      Consumed: 'Null',
      Waiting: 'Null'
    }
  },
  /**
   * Lookup996: pallet_staking_async::pallet::pallet::PruningStep
   **/
  PalletStakingAsyncPalletPruningStep: {
    _enum: ['ErasStakersPaged', 'ErasStakersOverview', 'ErasValidatorPrefs', 'ClaimedRewards', 'ErasValidatorReward', 'ErasRewardPoints', 'ErasTotalStake']
  },
  /**
   * Lookup997: pallet_staking_async::pallet::pallet::Error<T>
   **/
  PalletStakingAsyncPalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashRecord', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'AlreadyClaimed', 'InvalidPage', 'IncorrectHistoryDepth', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow', 'BoundNotMet', 'ControllerDeprecated', 'CannotRestoreLedger', 'RewardDestinationRestricted', 'NotEnoughFunds', 'VirtualStakerNotAllowed', 'CannotReapStash', 'AlreadyMigrated', 'EraNotStarted', 'Restricted', 'UnappliedSlashesInPreviousEra', 'EraNotPrunable', 'CancelledSlash']
  },
  /**
   * Lookup999: pallet_ah_ops::pallet::Error<T>
   **/
  PalletAhOpsError: {
    _enum: ['NoLeaseReserve', 'NoCrowdloanContribution', 'NoCrowdloanReserve', 'FailedToWithdrawCrowdloanContribution', 'NotYet', 'ContributionsRemaining', 'WrongDerivedTranslation', 'NotSovereign', 'InternalError', 'MigrationNotCompleted', 'ZeroBalance']
  },
  /**
   * Lookup1000: pallet_ah_migrator::BalancesBefore<Balance>
   **/
  PalletAhMigratorBalancesBefore: {
    checkingAccount: 'u128',
    totalIssuance: 'u128'
  },
  /**
   * Lookup1001: pallet_ah_migrator::pallet::Error<T>
   **/
  PalletAhMigratorError: {
    _enum: ['FailedToUnreserveDeposit', 'FailedToProcessAccount', 'InsertConflict', 'FailedToConvertType', 'PreimageNotFound', 'FailedToConvertCall', 'FailedToBoundCall', 'XcmError', 'FailedToIntegrateVestingSchedule', 'FailedToCalculateCheckingAccount', 'FailedToBoundVector', 'DmpQueuePriorityAlreadySet', 'InvalidParameter', 'PreimageMissing', 'PreimageTooBig', 'PreimageChunkMissing', 'PreimageStatusInvalid', 'BadXcmVersion', 'InvalidOrigin']
  },
  /**
   * Lookup1014: asset_hub_polkadot_runtime::Runtime
   **/
  AssetHubPolkadotRuntimeRuntime: 'Null',
  /**
   * Lookup1062: xcm::VersionedAsset
   **/
  XcmVersionedAsset: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3MultiAsset',
      V4: 'StagingXcmV4Asset',
      V5: 'StagingXcmV5Asset'
    }
  },
  /**
   * Lookup1064: xcm_runtime_apis::trusted_query::Error
   **/
  XcmRuntimeApisTrustedQueryError: {
    _enum: ['VersionedAssetConversionFailed', 'VersionedLocationConversionFailed']
  },
  /**
   * Lookup1066: xcm_runtime_apis::authorized_aliases::Error
   **/
  XcmRuntimeApisAuthorizedAliasesError: {
    _enum: ['LocationVersionConversionFailed']
  },
  /**
   * Lookup1069: assets_common::runtime_api::FungiblesAccessError
   **/
  AssetsCommonRuntimeApiFungiblesAccessError: {
    _enum: ['AssetIdConversionFailed', 'AmountToBalanceConversionFailed']
  },
  /**
   * Lookup1070: cumulus_primitives_core::CollationInfo
   **/
  CumulusPrimitivesCoreCollationInfo: {
    upwardMessages: 'Vec<Bytes>',
    horizontalMessages: 'Vec<PolkadotCorePrimitivesOutboundHrmpMessage>',
    newValidationCode: 'Option<Bytes>',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'u32',
    headData: 'Bytes'
  },
  /**
   * Lookup1079: asset_hub_polkadot_runtime::RuntimeError
   **/
  AssetHubPolkadotRuntimeRuntimeError: {
    _enum: {
      System: 'FrameSystemError',
      ParachainSystem: 'CumulusPalletParachainSystemError',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      Preimage: 'PalletPreimageError',
      Scheduler: 'PalletSchedulerError',
      __Unused7: 'Null',
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
      SnowbridgeSystemFrontend: 'SnowbridgePalletSystemFrontendError',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      Utility: 'PalletUtilityError',
      Multisig: 'PalletMultisigError',
      Proxy: 'PalletProxyError',
      Indices: 'PalletIndicesError',
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
      AssetConversion: 'PalletAssetConversionError',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      Treasury: 'PalletTreasuryError',
      ConvictionVoting: 'PalletConvictionVotingError',
      Referenda: 'PalletReferendaError',
      __Unused63: 'Null',
      Whitelist: 'PalletWhitelistError',
      Bounties: 'PalletBountiesError',
      ChildBounties: 'PalletChildBountiesError',
      AssetRate: 'PalletAssetRateError',
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
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
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
