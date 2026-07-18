// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup15: asset_hub_polkadot_runtime::RuntimeTask
   **/
  AssetHubPolkadotRuntimeRuntimeTask: 'Null',
  /**
   * Lookup17: cumulus_pallet_parachain_system::pallet::Call<T>
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
   * Lookup18: cumulus_pallet_parachain_system::parachain_inherent::BasicParachainInherentData
   **/
  CumulusPalletParachainSystemParachainInherentBasicParachainInherentData: {
    validationData: 'PolkadotPrimitivesV9PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    relayParentDescendants: 'Vec<SpRuntimeHeader>',
    collatorPeerId: 'Option<Bytes>'
  },
  /**
   * Lookup21: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup32: cumulus_pallet_parachain_system::parachain_inherent::InboundMessagesData
   **/
  CumulusPalletParachainSystemParachainInherentInboundMessagesData: {
    downwardMessages: {
      fullMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
      hashedMessages: 'Vec<CumulusPrimitivesParachainInherentHashedMessage>'
    },
    horizontalMessages: 'CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection'
  },
  /**
   * Lookup37: cumulus_primitives_parachain_inherent::HashedMessage
   **/
  CumulusPrimitivesParachainInherentHashedMessage: {
    sentAt: 'u32',
    msgHash: 'H256'
  },
  /**
   * Lookup38: cumulus_pallet_parachain_system::parachain_inherent::AbridgedInboundMessagesCollection<Message>
   **/
  CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection: {
    fullMessages: 'Vec<(u32,PolkadotCorePrimitivesInboundHrmpMessage)>',
    hashedMessages: 'Vec<(u32,CumulusPrimitivesParachainInherentHashedMessage)>'
  },
  /**
   * Lookup47: staging_parachain_info::pallet::Call<T>
   **/
  StagingParachainInfoCall: 'Null',
  /**
   * Lookup54: asset_hub_polkadot_runtime::RuntimeParameters
   **/
  AssetHubPolkadotRuntimeRuntimeParameters: {
    _enum: {
      StakingElection: 'AssetHubPolkadotRuntimeDynamicParamsStakingElectionParameters',
      Scheduler: 'AssetHubPolkadotRuntimeDynamicParamsSchedulerParameters',
      MessageQueue: 'AssetHubPolkadotRuntimeDynamicParamsMessageQueueParameters'
    }
  },
  /**
   * Lookup55: asset_hub_polkadot_runtime::dynamic_params::staking_election::Parameters
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
   * Lookup56: asset_hub_polkadot_runtime::dynamic_params::staking_election::SignedPhase
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionSignedPhase: 'Null',
  /**
   * Lookup58: asset_hub_polkadot_runtime::dynamic_params::staking_election::MaxSignedSubmissions
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxSignedSubmissions: 'Null',
  /**
   * Lookup59: asset_hub_polkadot_runtime::dynamic_params::staking_election::UnsignedPhase
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionUnsignedPhase: 'Null',
  /**
   * Lookup60: asset_hub_polkadot_runtime::dynamic_params::staking_election::MinerPages
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionMinerPages: 'Null',
  /**
   * Lookup61: asset_hub_polkadot_runtime::dynamic_params::staking_election::MaxElectingVoters
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxElectingVoters: 'Null',
  /**
   * Lookup62: asset_hub_polkadot_runtime::dynamic_params::staking_election::TargetSnapshotPerBlock
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock: 'Null',
  /**
   * Lookup63: asset_hub_polkadot_runtime::dynamic_params::staking_election::MaxEraDuration
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionMaxEraDuration: 'Null',
  /**
   * Lookup65: asset_hub_polkadot_runtime::dynamic_params::scheduler::Parameters
   **/
  AssetHubPolkadotRuntimeDynamicParamsSchedulerParameters: {
    _enum: {
      MaxScheduledPerBlock: '(AssetHubPolkadotRuntimeDynamicParamsSchedulerMaxScheduledPerBlock,Option<u32>)',
      MaximumWeight: '(AssetHubPolkadotRuntimeDynamicParamsSchedulerMaximumWeight,Option<SpWeightsWeightV2Weight>)'
    }
  },
  /**
   * Lookup66: asset_hub_polkadot_runtime::dynamic_params::scheduler::MaxScheduledPerBlock
   **/
  AssetHubPolkadotRuntimeDynamicParamsSchedulerMaxScheduledPerBlock: 'Null',
  /**
   * Lookup67: asset_hub_polkadot_runtime::dynamic_params::scheduler::MaximumWeight
   **/
  AssetHubPolkadotRuntimeDynamicParamsSchedulerMaximumWeight: 'Null',
  /**
   * Lookup70: asset_hub_polkadot_runtime::dynamic_params::message_queue::Parameters
   **/
  AssetHubPolkadotRuntimeDynamicParamsMessageQueueParameters: {
    _enum: {
      MaxOnInitWeight: '(AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnInitWeight,Option<Option<SpWeightsWeightV2Weight>>)',
      MaxOnIdleWeight: '(AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnIdleWeight,Option<Option<SpWeightsWeightV2Weight>>)'
    }
  },
  /**
   * Lookup71: asset_hub_polkadot_runtime::dynamic_params::message_queue::MaxOnInitWeight
   **/
  AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnInitWeight: 'Null',
  /**
   * Lookup73: asset_hub_polkadot_runtime::dynamic_params::message_queue::MaxOnIdleWeight
   **/
  AssetHubPolkadotRuntimeDynamicParamsMessageQueueMaxOnIdleWeight: 'Null',
  /**
   * Lookup101: pallet_dap::pallet::Call<T>
   **/
  PalletDapCall: {
    _enum: {
      set_budget_allocation: {
        newAllocations: 'BTreeMap<Bytes, Perbill>'
      }
    }
  },
  /**
   * Lookup108: pallet_collator_selection::pallet::Call<T>
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
   * Lookup110: asset_hub_polkadot_runtime::SessionKeys
   **/
  AssetHubPolkadotRuntimeSessionKeys: {
    aura: 'SpConsensusAuraEd25519AppEd25519Public'
  },
  /**
   * Lookup111: sp_consensus_aura::ed25519::app_ed25519::Public
   **/
  SpConsensusAuraEd25519AppEd25519Public: '[u8;32]',
  /**
   * Lookup112: cumulus_pallet_xcmp_queue::pallet::Call<T>
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
   * Lookup241: cumulus_pallet_xcm::pallet::Call<T>
   **/
  CumulusPalletXcmCall: 'Null',
  /**
   * Lookup242: pallet_xcm_bridge_hub_router::pallet::Call<T, I>
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
   * Lookup244: cumulus_primitives_core::AggregateMessageOrigin
   **/
  CumulusPrimitivesCoreAggregateMessageOrigin: {
    _enum: {
      Here: 'Null',
      Parent: 'Null',
      Sibling: 'u32'
    }
  },
  /**
   * Lookup245: snowbridge_pallet_system_frontend::pallet::Call<T>
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
   * Lookup246: snowbridge_core::operating_mode::BasicOperatingMode
   **/
  SnowbridgeCoreOperatingModeBasicOperatingMode: {
    _enum: ['Normal', 'Halted']
  },
  /**
   * Lookup247: snowbridge_core::AssetMetadata
   **/
  SnowbridgeCoreAssetMetadata: {
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8'
  },
  /**
   * Lookup248: snowbridge_core::reward::MessageId
   **/
  SnowbridgeCoreRewardMessageId: {
    _enum: {
      Inbound: 'u64',
      Outbound: 'u64'
    }
  },
  /**
   * Lookup252: asset_hub_polkadot_runtime::OriginCaller
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
      Origins: 'AssetHubPolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin',
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
      Revive: 'PalletReviveOrigin'
    }
  },
  /**
   * Lookup255: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup256: asset_hub_polkadot_runtime::governance::origins::pallet_custom_origins::Origin
   **/
  AssetHubPolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
    _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'AuctionAdmin', 'LeaseAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'SmallTipper', 'BigTipper', 'SmallSpender', 'MediumSpender', 'BigSpender', 'WhitelistedCaller', 'WishForChange']
  },
  /**
   * Lookup257: pallet_revive::pallet::Origin<asset_hub_polkadot_runtime::Runtime>
   **/
  PalletReviveOrigin: {
    _enum: {
      EthTransaction: 'AccountId32'
    }
  },
  /**
   * Lookup258: asset_hub_polkadot_runtime::Runtime
   **/
  AssetHubPolkadotRuntimeRuntime: 'Null',
  /**
   * Lookup264: asset_hub_polkadot_runtime::ProxyType
   **/
  AssetHubPolkadotRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'CancelProxy', 'Assets', 'AssetOwner', 'AssetManager', 'Collator', 'Governance', 'Staking', 'NominationPools', 'Auction', 'ParaRegistration', 'StakingOperator']
  },
  /**
   * Lookup301: assets_common::local_and_foreign_assets::ForeignAssetReserveData
   **/
  AssetsCommonLocalAndForeignAssetsForeignAssetReserveData: {
    reserve: 'StagingXcmV5Location',
    teleportable: 'bool'
  },
  /**
   * Lookup308: parachains_common::pay::VersionedLocatableAccount
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
   * Lookup324: pallet_multi_asset_bounties::pallet::Call<T, I>
   **/
  PalletMultiAssetBountiesCall: {
    _enum: {
      fund_bounty: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        value: 'Compact<u128>',
        curator: 'MultiAddress',
        metadata: 'H256',
      },
      fund_child_bounty: {
        parentBountyId: 'Compact<u32>',
        value: 'Compact<u128>',
        metadata: 'H256',
        curator: 'Option<MultiAddress>',
      },
      propose_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Option<u32>',
        curator: 'MultiAddress',
      },
      accept_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Option<u32>',
      },
      unassign_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Option<u32>',
      },
      award_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Option<u32>',
        beneficiary: 'ParachainsCommonPayVersionedLocatableAccount',
      },
      close_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Option<u32>',
      },
      check_status: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Option<u32>',
      },
      retry_payment: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup345: pallet_staking_async_rc_client::pallet::Call<T>
   **/
  PalletStakingAsyncRcClientCall: {
    _enum: {
      relay_session_report: {
        report: 'PalletStakingAsyncRcClientSessionReport',
      },
      relay_new_offence_paged: {
        offences: 'Vec<(u32,PalletStakingAsyncRcClientOffence)>',
      },
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Bytes',
        proof: 'Bytes',
        maxDeliveryAndRemoteExecutionFee: 'Option<u128>',
      },
      purge_keys: {
        maxDeliveryAndRemoteExecutionFee: 'Option<u128>'
      }
    }
  },
  /**
   * Lookup354: pallet_election_provider_multi_block::pallet::Call<T>
   **/
  PalletElectionProviderMultiBlockCall: {
    _enum: {
      manage: {
        op: 'PalletElectionProviderMultiBlockManagerOperation',
      },
      admin: {
        op: 'PalletElectionProviderMultiBlockAdminOperation'
      }
    }
  },
  /**
   * Lookup355: pallet_election_provider_multi_block::ManagerOperation<T>
   **/
  PalletElectionProviderMultiBlockManagerOperation: {
    _enum: {
      ForceRotateRound: 'Null',
      ForceSetPhase: 'PalletElectionProviderMultiBlockPhase',
      EmergencyFallback: 'Null'
    }
  },
  /**
   * Lookup356: pallet_election_provider_multi_block::types::Phase<T>
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
   * Lookup357: pallet_election_provider_multi_block::AdminOperation<T>
   **/
  PalletElectionProviderMultiBlockAdminOperation: {
    _enum: {
      EmergencySetSolution: '(FrameElectionProviderSupportBoundedSupports,SpNposElectionsElectionScore)',
      SetMinUntrustedScore: 'SpNposElectionsElectionScore'
    }
  },
  /**
   * Lookup367: pallet_election_provider_multi_block::verifier::impls::pallet::Call<T>
   **/
  PalletElectionProviderMultiBlockVerifierImplsPalletCall: 'Null',
  /**
   * Lookup368: pallet_election_provider_multi_block::unsigned::pallet::Call<T>
   **/
  PalletElectionProviderMultiBlockUnsignedPalletCall: {
    _enum: {
      submit_unsigned: {
        pagedSolution: 'PalletElectionProviderMultiBlockPagedRawSolution'
      }
    }
  },
  /**
   * Lookup369: pallet_election_provider_multi_block::types::PagedRawSolution<T>
   **/
  PalletElectionProviderMultiBlockPagedRawSolution: {
    solutionPages: 'Vec<AssetHubPolkadotRuntimeStakingNposCompactSolution16>',
    score: 'SpNposElectionsElectionScore',
    round: 'u32'
  },
  /**
   * Lookup371: asset_hub_polkadot_runtime::staking::NposCompactSolution16
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
   * Lookup422: pallet_election_provider_multi_block::signed::pallet::Call<T>
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
   * Lookup424: pallet_staking_async::pallet::pallet::Call<T>
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
      __Unused14: 'Null',
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
        areNominatorsSlashable: 'PalletStakingAsyncPalletConfigOpBool',
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
        era: 'u32',
      },
      set_max_commission: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      set_validator_self_stake_incentive_config: {
        optimumSelfStake: 'PalletStakingAsyncPalletConfigOpU128',
        hardCapSelfStake: 'PalletStakingAsyncPalletConfigOpU128',
        selfStakeSlopeFactor: 'PalletStakingAsyncPalletConfigOpPerbill'
      }
    }
  },
  /**
   * Lookup425: pallet_staking_async::RewardDestination<sp_core::crypto::AccountId32>
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
   * Lookup426: pallet_staking_async::ValidatorPrefs
   **/
  PalletStakingAsyncValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup432: pallet_staking_async::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingAsyncPalletConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup433: pallet_staking_async::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingAsyncPalletConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup434: pallet_staking_async::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
   **/
  PalletStakingAsyncPalletConfigOpPercent: {
    _enum: {
      Noop: 'Null',
      Set: 'Percent',
      Remove: 'Null'
    }
  },
  /**
   * Lookup435: pallet_staking_async::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletStakingAsyncPalletConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup436: pallet_staking_async::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingAsyncPalletConfigOpBool: {
    _enum: {
      Noop: 'Null',
      Set: 'bool',
      Remove: 'Null'
    }
  },
  /**
   * Lookup440: pallet_staking_async::ledger::UnlockChunk<Balance>
   **/
  PalletStakingAsyncLedgerUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup448: pallet_ah_ops::pallet::Call<T>
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
        assetId: 'StagingXcmV5Location',
      },
      translate_para_sovereign_child_to_sibling_derived: {
        paraId: 'u16',
        derivationPath: 'Vec<u16>',
        oldAccount: 'AccountId32',
        newAccount: 'AccountId32'
      }
    }
  },
  /**
   * Lookup463: pallet_revive::evm::tx_extension::SetOrigin<T>
   **/
  PalletReviveEvmTxExtensionSetOrigin: 'Null',
  /**
   * Lookup481: cumulus_pallet_parachain_system::pallet::Event<T>
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
   * Lookup486: asset_hub_polkadot_runtime::RuntimeParametersKey
   **/
  AssetHubPolkadotRuntimeRuntimeParametersKey: {
    _enum: {
      StakingElection: 'AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersKey',
      Scheduler: 'AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersKey',
      MessageQueue: 'AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersKey'
    }
  },
  /**
   * Lookup487: asset_hub_polkadot_runtime::dynamic_params::staking_election::ParametersKey
   **/
  AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersKey: {
    _enum: ['SignedPhase', 'MaxSignedSubmissions', 'UnsignedPhase', 'MinerPages', 'MaxElectingVoters', 'TargetSnapshotPerBlock', 'MaxEraDuration']
  },
  /**
   * Lookup488: asset_hub_polkadot_runtime::dynamic_params::scheduler::ParametersKey
   **/
  AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersKey: {
    _enum: ['MaxScheduledPerBlock', 'MaximumWeight']
  },
  /**
   * Lookup489: asset_hub_polkadot_runtime::dynamic_params::message_queue::ParametersKey
   **/
  AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersKey: {
    _enum: ['MaxOnInitWeight', 'MaxOnIdleWeight']
  },
  /**
   * Lookup491: asset_hub_polkadot_runtime::RuntimeParametersValue
   **/
  AssetHubPolkadotRuntimeRuntimeParametersValue: {
    _enum: {
      StakingElection: 'AssetHubPolkadotRuntimeDynamicParamsStakingElectionParametersValue',
      Scheduler: 'AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersValue',
      MessageQueue: 'AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersValue'
    }
  },
  /**
   * Lookup492: asset_hub_polkadot_runtime::dynamic_params::staking_election::ParametersValue
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
   * Lookup493: asset_hub_polkadot_runtime::dynamic_params::scheduler::ParametersValue
   **/
  AssetHubPolkadotRuntimeDynamicParamsSchedulerParametersValue: {
    _enum: {
      MaxScheduledPerBlock: 'u32',
      MaximumWeight: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup494: asset_hub_polkadot_runtime::dynamic_params::message_queue::ParametersValue
   **/
  AssetHubPolkadotRuntimeDynamicParamsMessageQueueParametersValue: {
    _enum: {
      MaxOnInitWeight: 'Option<SpWeightsWeightV2Weight>',
      MaxOnIdleWeight: 'Option<SpWeightsWeightV2Weight>'
    }
  },
  /**
   * Lookup498: asset_hub_polkadot_runtime::RuntimeHoldReason
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
      MultiAssetBounties: 'PalletMultiAssetBountiesHoldReason',
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
      StakingRcClient: 'PalletStakingAsyncRcClientHoldReason',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      MultiBlockElectionSigned: 'PalletElectionProviderMultiBlockSignedPalletHoldReason',
      Staking: 'PalletStakingAsyncPalletHoldReason',
      Revive: 'PalletReviveHoldReason'
    }
  },
  /**
   * Lookup502: pallet_multi_asset_bounties::pallet::HoldReason<I>
   **/
  PalletMultiAssetBountiesHoldReason: {
    _enum: ['CuratorDeposit']
  },
  /**
   * Lookup505: pallet_staking_async_rc_client::pallet::HoldReason
   **/
  PalletStakingAsyncRcClientHoldReason: {
    _enum: ['Keys']
  },
  /**
   * Lookup506: pallet_election_provider_multi_block::signed::pallet::HoldReason
   **/
  PalletElectionProviderMultiBlockSignedPalletHoldReason: {
    _enum: ['SignedSubmission']
  },
  /**
   * Lookup507: pallet_staking_async::pallet::pallet::HoldReason
   **/
  PalletStakingAsyncPalletHoldReason: {
    _enum: ['Staking']
  },
  /**
   * Lookup514: pallet_dap::pallet::Event<T>
   **/
  PalletDapEvent: {
    _enum: {
      IssuanceMinted: {
        totalMinted: 'u128',
        elapsedMillis: 'u64',
      },
      BudgetAllocationUpdated: {
        allocations: 'BTreeMap<Bytes, Perbill>',
      },
      StagingDrained: {
        amount: 'u128',
      },
      Unexpected: 'PalletDapUnexpectedKind'
    }
  },
  /**
   * Lookup515: pallet_dap::pallet::UnexpectedKind
   **/
  PalletDapUnexpectedKind: {
    _enum: {
      MintFailed: 'Null',
      ElapsedClamped: {
        actualElapsed: 'u64',
        ceiling: 'u64'
      }
    }
  },
  /**
   * Lookup516: pallet_collator_selection::pallet::Event<T>
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
   * Lookup518: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      XcmpMessageSent: {
        messageHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup523: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;32]',
      UnsupportedVersion: '[u8;32]',
      ExecutedDownward: '([u8;32],StagingXcmV5TraitsOutcome)'
    }
  },
  /**
   * Lookup524: pallet_xcm_bridge_hub_router::pallet::Event<T, I>
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
   * Lookup527: snowbridge_pallet_system_frontend::pallet::Event<T>
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
   * Lookup555: pallet_multi_asset_bounties::pallet::Event<T, I>
   **/
  PalletMultiAssetBountiesEvent: {
    _enum: {
      BountyCreated: {
        index: 'u32',
      },
      ChildBountyCreated: {
        index: 'u32',
        childIndex: 'u32',
      },
      BountyBecameActive: {
        index: 'u32',
        childIndex: 'Option<u32>',
        curator: 'AccountId32',
      },
      BountyAwarded: {
        index: 'u32',
        childIndex: 'Option<u32>',
        beneficiary: 'ParachainsCommonPayVersionedLocatableAccount',
      },
      BountyPayoutProcessed: {
        index: 'u32',
        childIndex: 'Option<u32>',
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        value: 'u128',
        beneficiary: 'ParachainsCommonPayVersionedLocatableAccount',
      },
      BountyFundingProcessed: {
        index: 'u32',
        childIndex: 'Option<u32>',
      },
      BountyRefundProcessed: {
        index: 'u32',
        childIndex: 'Option<u32>',
      },
      BountyCanceled: {
        index: 'u32',
        childIndex: 'Option<u32>',
      },
      CuratorUnassigned: {
        index: 'u32',
        childIndex: 'Option<u32>',
      },
      CuratorProposed: {
        index: 'u32',
        childIndex: 'Option<u32>',
        curator: 'AccountId32',
      },
      PaymentFailed: {
        index: 'u32',
        childIndex: 'Option<u32>',
        paymentId: 'u64',
      },
      Paid: {
        index: 'u32',
        childIndex: 'Option<u32>',
        paymentId: 'u64'
      }
    }
  },
  /**
   * Lookup563: pallet_staking_async_rc_client::pallet::Event<T>
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
      FeesPaid: {
        who: 'AccountId32',
        fees: 'u128',
      },
      Unexpected: 'PalletStakingAsyncRcClientUnexpectedKind'
    }
  },
  /**
   * Lookup564: pallet_staking_async_rc_client::pallet::UnexpectedKind
   **/
  PalletStakingAsyncRcClientUnexpectedKind: {
    _enum: ['SessionReportIntegrityFailed', 'ValidatorSetIntegrityFailed', 'SessionSkipped', 'SessionAlreadyProcessed', 'ValidatorSetSendFailed', 'ValidatorSetDropped']
  },
  /**
   * Lookup565: pallet_election_provider_multi_block::pallet::Event<T>
   **/
  PalletElectionProviderMultiBlockEvent: {
    _enum: {
      PhaseTransitioned: {
        from: 'PalletElectionProviderMultiBlockPhase',
        to: 'PalletElectionProviderMultiBlockPhase',
      },
      UnexpectedTargetSnapshotFailed: 'Null',
      UnexpectedVoterSnapshotFailed: 'Null',
      UnexpectedPhaseTransitionOutOfWeight: {
        from: 'PalletElectionProviderMultiBlockPhase',
        to: 'PalletElectionProviderMultiBlockPhase',
        required: 'SpWeightsWeightV2Weight',
        had: 'SpWeightsWeightV2Weight',
      },
      UnexpectedPhaseTransitionHalt: {
        required: 'SpWeightsWeightV2Weight',
        had: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup566: pallet_election_provider_multi_block::verifier::impls::pallet::Event<T>
   **/
  PalletElectionProviderMultiBlockVerifierImplsPalletEvent: {
    _enum: {
      VerificationFailed: '(u32,PalletElectionProviderMultiBlockVerifierFeasibilityError)',
      Verified: '(u32,u32)',
      Queued: '(SpNposElectionsElectionScore,Option<SpNposElectionsElectionScore>)'
    }
  },
  /**
   * Lookup567: pallet_election_provider_multi_block::verifier::FeasibilityError
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
   * Lookup568: sp_npos_elections::Error
   **/
  SpNposElectionsError: {
    _enum: ['SolutionWeightOverflow', 'SolutionTargetOverflow', 'SolutionInvalidIndex', 'SolutionInvalidPageIndex', 'ArithmeticError', 'InvalidSupportEdge', 'TooManyVoters', 'BoundsExceeded', 'DuplicateVoter', 'DuplicateTarget']
  },
  /**
   * Lookup570: pallet_election_provider_multi_block::signed::pallet::Event<T>
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
   * Lookup571: pallet_staking_async::pallet::pallet::Event<T>
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
        index: 'u32',
      },
      ValidatorIncentivePaid: {
        era: 'u32',
        validatorStash: 'AccountId32',
        dest: 'PalletStakingAsyncRewardDestination',
        amount: 'u128',
      },
      ValidatorIncentiveConfigSet: {
        optimumSelfStake: 'u128',
        hardCapSelfStake: 'u128',
        slopeFactor: 'Perbill'
      }
    }
  },
  /**
   * Lookup572: pallet_staking_async::Forcing
   **/
  PalletStakingAsyncForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup574: pallet_staking_async::pallet::pallet::UnexpectedKind<T>
   **/
  PalletStakingAsyncPalletUnexpectedKind: {
    _enum: {
      EraDurationBoundExceeded: 'Null',
      UnknownValidatorActivation: 'Null',
      PagedElectionOutOfWeight: {
        page: 'u32',
        required: 'SpWeightsWeightV2Weight',
        had: 'SpWeightsWeightV2Weight',
      },
      MissingPayee: {
        era: 'u32',
        stash: 'AccountId32',
      },
      ValidatorIncentiveWeightMismatch: {
        era: 'u32',
      },
      ValidatorIncentiveTransferFailed: {
        era: 'u32'
      }
    }
  },
  /**
   * Lookup576: pallet_ah_ops::pallet::Event<T>
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
        paraId: 'u16',
        from: 'AccountId32',
        to: 'AccountId32',
        derivationPath: 'Vec<u16>',
      },
      FailedToBond: {
        account: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup596: cumulus_pallet_weight_reclaim::StorageWeightReclaim<T, S>
   **/
  CumulusPalletWeightReclaimStorageWeightReclaim: '(FrameSystemExtensionsAuthorizeCall,FrameSystemExtensionsCheckNonZeroSender,FrameSystemExtensionsCheckSpecVersion,FrameSystemExtensionsCheckTxVersion,FrameSystemExtensionsCheckGenesis,Era,FrameSystemExtensionsCheckNonce,FrameSystemExtensionsCheckWeight,PalletAssetConversionTxPaymentChargeAssetTxPayment,PolkadotRuntimeCommonClaimsPrevalidateAttests,FrameMetadataHashExtensionCheckMetadataHash,PalletReviveEvmTxExtensionSetOrigin)',
  /**
   * Lookup599: cumulus_pallet_parachain_system::block_weight::BlockWeightMode<T>
   **/
  CumulusPalletParachainSystemBlockWeightBlockWeightMode: {
    _enum: {
      FullCore: {
        context: 'u32',
      },
      PotentialFullCore: {
        context: 'u32',
        firstTransactionIndex: 'Option<u32>',
        targetWeight: 'SpWeightsWeightV2Weight',
      },
      FractionOfCore: {
        context: 'u32',
        firstTransactionIndex: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup601: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentAncestor: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    paraHeadHash: 'Option<H256>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV9UpgradeGoAhead>'
  },
  /**
   * Lookup602: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth
   **/
  CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
    umpMsgCount: 'u32',
    umpTotalBytes: 'u32',
    hrmpOutgoing: 'BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>'
  },
  /**
   * Lookup604: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate
   **/
  CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
    msgCount: 'u32',
    totalBytes: 'u32'
  },
  /**
   * Lookup609: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    hrmpWatermark: 'Option<u32>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV9UpgradeGoAhead>'
  },
  /**
   * Lookup612: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueRemainingCapacity: 'CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV9AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV9AbridgedHrmpChannel)>'
  },
  /**
   * Lookup613: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
   **/
  CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
    remainingCount: 'u32',
    remainingSize: 'u32'
  },
  /**
   * Lookup616: polkadot_primitives::v9::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV9AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup617: polkadot_primitives::v9::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV9AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32',
    asyncBackingParams: 'PolkadotPrimitivesV9AsyncBackingAsyncBackingParams'
  },
  /**
   * Lookup623: cumulus_pallet_parachain_system::parachain_inherent::InboundMessageId
   **/
  CumulusPalletParachainSystemParachainInherentInboundMessageId: {
    sentAt: 'u32',
    reverseIdx: 'u32'
  },
  /**
   * Lookup626: cumulus_pallet_parachain_system::PoVMessages
   **/
  CumulusPalletParachainSystemPoVMessages: {
    relayStorageRootOrHash: 'H256',
    coreSelector: 'u8',
    bundleIndex: 'u8',
    umpMsgCount: 'u32',
    hrmpOutboundCount: 'u32',
    hrmpOutboundRecipients: 'Vec<u32>'
  },
  /**
   * Lookup628: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled']
  },
  /**
   * Lookup645: pallet_migrations::MbmIsOngoing
   **/
  PalletMigrationsMbmIsOngoing: {
    _enum: ['Yes', 'No', 'Stuck']
  },
  /**
   * Lookup647: pallet_migrations::MbmProgress
   **/
  PalletMigrationsMbmProgress: {
    currentMigration: 'u32',
    totalMigrations: 'u32',
    currentMigrationSteps: 'u32',
    currentMigrationMaxSteps: 'Option<u32>'
  },
  /**
   * Lookup648: pallet_migrations::MbmStatus
   **/
  PalletMigrationsMbmStatus: {
    ongoing: 'PalletMigrationsMbmIsOngoing',
    progress: 'Option<PalletMigrationsMbmProgress>',
    prefixes: 'Vec<Bytes>'
  },
  /**
   * Lookup661: asset_hub_polkadot_runtime::RuntimeFreezeReason
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
      NominationPools: 'PalletNominationPoolsFreezeReason',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      Revive: 'PalletReviveFreezeReason'
    }
  },
  /**
   * Lookup663: pallet_revive::pallet::FreezeReason
   **/
  PalletReviveFreezeReason: {
    _enum: ['PGasMinBalance']
  },
  /**
   * Lookup675: pallet_dap::pallet::Error<T>
   **/
  PalletDapError: {
    _enum: ['UnknownBudgetKey', 'BudgetNotExact']
  },
  /**
   * Lookup680: pallet_collator_selection::pallet::CandidateInfo<sp_core::crypto::AccountId32, Balance>
   **/
  PalletCollatorSelectionCandidateInfo: {
    who: 'AccountId32',
    deposit: 'u128'
  },
  /**
   * Lookup682: pallet_collator_selection::pallet::Error<T>
   **/
  PalletCollatorSelectionError: {
    _enum: ['TooManyCandidates', 'TooFewEligibleCollators', 'AlreadyCandidate', 'NotCandidate', 'TooManyInvulnerables', 'AlreadyInvulnerable', 'NotInvulnerable', 'NoAssociatedValidatorId', 'ValidatorNotRegistered', 'InsertToCandidateListFailed', 'RemoveFromCandidateListFailed', 'DepositTooLow', 'UpdateCandidateListFailed', 'InsufficientBond', 'TargetIsNotCandidate', 'IdenticalDeposit', 'InvalidUnreserve']
  },
  /**
   * Lookup698: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16',
    flags: 'CumulusPalletXcmpQueueOutboundChannelFlags'
  },
  /**
   * Lookup699: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup700: cumulus_pallet_xcmp_queue::OutboundChannelFlags
   **/
  CumulusPalletXcmpQueueOutboundChannelFlags: {
    bits: 'u32'
  },
  /**
   * Lookup704: cumulus_pallet_xcmp_queue::QueueConfigData
   **/
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: 'u32',
    dropThreshold: 'u32',
    resumeThreshold: 'u32'
  },
  /**
   * Lookup705: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['BadQueueConfig', 'AlreadySuspended', 'AlreadyResumed', 'TooManyActiveOutboundChannels', 'TooBig']
  },
  /**
   * Lookup733: bp_xcm_bridge_hub_router::BridgeState
   **/
  BpXcmBridgeHubRouterBridgeState: {
    deliveryFeeFactor: 'u128',
    isCongested: 'bool'
  },
  /**
   * Lookup741: snowbridge_pallet_system_frontend::pallet::Error<T>
   **/
  SnowbridgePalletSystemFrontendError: {
    _enum: ['UnsupportedLocationVersion', 'InvalidAssetOwner', 'SendFailure', 'FeesNotMet', 'LocationConversionFailed', 'Halted', 'Unreachable', 'UnsupportedAsset', 'WithdrawError', 'InvalidAccount', 'SwapError', 'BurnError', 'TipAmountZero']
  },
  /**
   * Lookup860: pallet_multi_asset_bounties::Bounty<sp_core::crypto::AccountId32, Balance, polkadot_runtime_common::impls::VersionedLocatableAsset, primitive_types::H256, PaymentId, parachains_common::pay::VersionedLocatableAccount>
   **/
  PalletMultiAssetBountiesBounty: {
    assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
    value: 'u128',
    metadata: 'H256',
    status: 'PalletMultiAssetBountiesBountyStatus'
  },
  /**
   * Lookup861: pallet_multi_asset_bounties::BountyStatus<sp_core::crypto::AccountId32, PaymentId, parachains_common::pay::VersionedLocatableAccount>
   **/
  PalletMultiAssetBountiesBountyStatus: {
    _enum: {
      FundingAttempted: {
        curator: 'AccountId32',
        paymentStatus: 'PalletMultiAssetBountiesPaymentState',
      },
      Funded: {
        curator: 'AccountId32',
      },
      CuratorUnassigned: 'Null',
      Active: {
        curator: 'AccountId32',
      },
      RefundAttempted: {
        curator: 'Option<AccountId32>',
        paymentStatus: 'PalletMultiAssetBountiesPaymentState',
      },
      PayoutAttempted: {
        curator: 'AccountId32',
        beneficiary: 'ParachainsCommonPayVersionedLocatableAccount',
        paymentStatus: 'PalletMultiAssetBountiesPaymentState'
      }
    }
  },
  /**
   * Lookup862: pallet_multi_asset_bounties::PaymentState<Id>
   **/
  PalletMultiAssetBountiesPaymentState: {
    _enum: {
      Pending: 'Null',
      Attempted: {
        id: 'u64',
      },
      Failed: 'Null',
      Succeeded: 'Null'
    }
  },
  /**
   * Lookup863: pallet_multi_asset_bounties::ChildBounty<sp_core::crypto::AccountId32, Balance, primitive_types::H256, PaymentId, parachains_common::pay::VersionedLocatableAccount>
   **/
  PalletMultiAssetBountiesChildBounty: {
    parentBounty: 'u32',
    value: 'u128',
    metadata: 'H256',
    status: 'PalletMultiAssetBountiesBountyStatus'
  },
  /**
   * Lookup866: pallet_multi_asset_bounties::pallet::Error<T, I>
   **/
  PalletMultiAssetBountiesError: {
    _enum: ['InvalidIndex', 'ReasonTooBig', 'InvalidValue', 'FailedToConvertBalance', 'UnexpectedStatus', 'RequireCurator', 'InsufficientPermission', 'FundingError', 'RefundError', 'PayoutError', 'FundingInconclusive', 'RefundInconclusive', 'PayoutInconclusive', 'FailedToConvertSource', 'HasActiveChildBounty', 'TooManyChildBounties', 'InsufficientBountyValue', 'PreimageNotExist']
  },
  /**
   * Lookup894: pallet_staking_async_rc_client::pallet::Error<T>
   **/
  PalletStakingAsyncRcClientError: {
    _enum: ['XcmSendFailed', 'NotValidator', 'InvalidKeys', 'InvalidProof', 'FeesExceededMax']
  },
  /**
   * Lookup900: pallet_election_provider_multi_block::pallet::Error<T>
   **/
  PalletElectionProviderMultiBlockError: {
    _enum: ['Fallback', 'UnexpectedPhase', 'Snapshot']
  },
  /**
   * Lookup901: pallet_election_provider_multi_block::verifier::impls::ValidSolution
   **/
  PalletElectionProviderMultiBlockVerifierImplsValidSolution: {
    _enum: ['X', 'Y']
  },
  /**
   * Lookup904: pallet_election_provider_multi_block::verifier::impls::PartialBackings
   **/
  PalletElectionProviderMultiBlockVerifierImplsPartialBackings: {
    total: 'u128',
    backers: 'u32'
  },
  /**
   * Lookup906: pallet_election_provider_multi_block::verifier::impls::Status
   **/
  PalletElectionProviderMultiBlockVerifierImplsStatus: {
    _enum: {
      Ongoing: 'u32',
      Nothing: 'Null'
    }
  },
  /**
   * Lookup911: pallet_election_provider_multi_block::signed::SubmissionMetadata<T>
   **/
  PalletElectionProviderMultiBlockSignedSubmissionMetadata: {
    deposit: 'u128',
    fee: 'u128',
    reward: 'u128',
    claimedScore: 'SpNposElectionsElectionScore',
    pages: 'Vec<bool>'
  },
  /**
   * Lookup914: pallet_election_provider_multi_block::signed::pallet::Error<T>
   **/
  PalletElectionProviderMultiBlockSignedPalletError: {
    _enum: ['PhaseNotSigned', 'Duplicate', 'QueueFull', 'BadPageIndex', 'NotRegistered', 'NoSubmission', 'RoundNotOver', 'BadWitnessData', 'TooManyInvulnerables']
  },
  /**
   * Lookup915: pallet_staking_async::ledger::StakingLedger<T>
   **/
  PalletStakingAsyncLedgerStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingAsyncLedgerUnlockChunk>'
  },
  /**
   * Lookup916: pallet_staking_async::Nominations<T>
   **/
  PalletStakingAsyncNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup917: pallet_staking_async::ActiveEraInfo
   **/
  PalletStakingAsyncActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup920: pallet_staking_async::pallet::pallet::BoundedExposurePage<T>
   **/
  PalletStakingAsyncPalletBoundedExposurePage: 'SpStakingExposurePage',
  /**
   * Lookup925: pallet_staking_async::EraRewardPoints<T>
   **/
  PalletStakingAsyncEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup928: pallet_staking_async::slashing::OffenceRecord<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncSlashingOffenceRecord: {
    reporter: 'Option<AccountId32>',
    reportedEra: 'u32',
    exposurePage: 'u32',
    slashFraction: 'Perbill',
    priorSlashFraction: 'Perbill'
  },
  /**
   * Lookup932: pallet_staking_async::UnappliedSlash<T>
   **/
  PalletStakingAsyncUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporter: 'Option<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup936: pallet_staking_async::SnapshotStatus<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncSnapshotStatus: {
    _enum: {
      Ongoing: 'AccountId32',
      Consumed: 'Null',
      Waiting: 'Null'
    }
  },
  /**
   * Lookup938: pallet_staking_async::pallet::pallet::PruningStep
   **/
  PalletStakingAsyncPalletPruningStep: {
    _enum: ['ErasStakersPaged', 'ErasStakersOverview', 'ErasValidatorPrefs', 'ClaimedRewards', 'ErasValidatorReward', 'ErasRewardPoints', 'SingleEntryCleanups', 'ValidatorSlashInEra', 'ErasValidatorIncentiveWeight']
  },
  /**
   * Lookup939: pallet_staking_async::pallet::pallet::Error<T>
   **/
  PalletStakingAsyncPalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashRecord', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'AlreadyClaimed', 'InvalidPage', 'IncorrectHistoryDepth', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow', 'BoundNotMet', 'ControllerDeprecated', 'CannotRestoreLedger', 'RewardDestinationRestricted', 'NotEnoughFunds', 'VirtualStakerNotAllowed', 'CannotReapStash', 'AlreadyMigrated', 'EraNotStarted', 'Restricted', 'UnappliedSlashesInPreviousEra', 'EraNotPrunable', 'CancelledSlash', 'CommissionTooHigh', 'OptimumGreaterThanCap']
  },
  /**
   * Lookup940: pallet_staking_async::RewardPot
   **/
  PalletStakingAsyncRewardPot: {
    _enum: {
      General: 'PalletStakingAsyncRewardKind',
      Era: '(u32,PalletStakingAsyncRewardKind)'
    }
  },
  /**
   * Lookup941: pallet_staking_async::RewardKind
   **/
  PalletStakingAsyncRewardKind: {
    _enum: ['StakerRewards', 'ValidatorSelfStake']
  },
  /**
   * Lookup942: pallet_staking_async::reward::EraRewardAllocation<Balance>
   **/
  PalletStakingAsyncRewardEraRewardAllocation: {
    stakerRewards: 'u128',
    validatorIncentive: 'u128'
  },
  /**
   * Lookup943: pallet_revive::vm::CodeInfo<T>
   **/
  PalletReviveVmCodeInfo: {
    owner: 'AccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>',
    codeLen: 'u32',
    codeType: 'PalletReviveVmBytecodeType',
    behaviourVersion: 'u32'
  },
  /**
   * Lookup944: pallet_revive::vm::BytecodeType
   **/
  PalletReviveVmBytecodeType: {
    _enum: ['Pvm', 'Evm']
  },
  /**
   * Lookup945: pallet_revive::storage::AccountInfo<T>
   **/
  PalletReviveStorageAccountInfo: {
    accountType: 'PalletReviveStorageAccountType',
    dust: 'u32'
  },
  /**
   * Lookup946: pallet_revive::storage::AccountType<T>
   **/
  PalletReviveStorageAccountType: {
    _enum: {
      Contract: 'PalletReviveStorageContractInfo',
      EOA: 'Null'
    }
  },
  /**
   * Lookup950: pallet_revive::storage::DeletionQueueItem<T>
   **/
  PalletReviveStorageDeletionQueueItem: {
    trieId: 'Bytes',
    accountId: 'AccountId32'
  },
  /**
   * Lookup952: pallet_revive::evm::api::rpc_types_gen::Block
   **/
  PalletReviveEvmApiRpcTypesGenBlock: {
    _alias: {
      hash_: 'hash',
      size_: 'size'
    },
    baseFeePerGas: 'U256',
    blobGasUsed: 'U256',
    difficulty: 'U256',
    excessBlobGas: 'U256',
    extraData: 'Bytes',
    gasLimit: 'U256',
    gasUsed: 'U256',
    hash_: 'H256',
    logsBloom: 'PalletReviveEvmApiByteBytes256',
    miner: 'H160',
    mixHash: 'H256',
    nonce: 'PalletReviveEvmApiByteBytes8',
    number: 'U256',
    parentBeaconBlockRoot: 'Option<H256>',
    parentHash: 'H256',
    receiptsRoot: 'H256',
    requestsHash: 'Option<H256>',
    sha3Uncles: 'H256',
    size_: 'U256',
    stateRoot: 'H256',
    timestamp: 'U256',
    totalDifficulty: 'Option<U256>',
    transactions: 'PalletReviveEvmApiRpcTypesGenHashesOrTransactionInfos',
    transactionsRoot: 'H256',
    uncles: 'Vec<H256>',
    withdrawals: 'Vec<PalletReviveEvmApiRpcTypesGenWithdrawal>',
    withdrawalsRoot: 'H256'
  },
  /**
   * Lookup954: pallet_revive::evm::api::byte::Bytes256
   **/
  PalletReviveEvmApiByteBytes256: '[u8;256]',
  /**
   * Lookup956: pallet_revive::evm::api::byte::Bytes8
   **/
  PalletReviveEvmApiByteBytes8: '[u8;8]',
  /**
   * Lookup958: pallet_revive::evm::api::rpc_types_gen::HashesOrTransactionInfos
   **/
  PalletReviveEvmApiRpcTypesGenHashesOrTransactionInfos: {
    _enum: {
      Hashes: 'Vec<H256>',
      TransactionInfos: 'Vec<PalletReviveEvmApiRpcTypesGenTransactionInfo>'
    }
  },
  /**
   * Lookup960: pallet_revive::evm::api::rpc_types_gen::TransactionInfo
   **/
  PalletReviveEvmApiRpcTypesGenTransactionInfo: {
    _alias: {
      hash_: 'hash'
    },
    blockHash: 'H256',
    blockNumber: 'U256',
    from: 'H160',
    hash_: 'H256',
    transactionIndex: 'U256',
    transactionSigned: 'PalletReviveEvmApiRpcTypesGenTransactionSigned'
  },
  /**
   * Lookup961: pallet_revive::evm::api::rpc_types_gen::TransactionSigned
   **/
  PalletReviveEvmApiRpcTypesGenTransactionSigned: {
    _enum: {
      Transaction7702Signed: 'PalletReviveEvmApiRpcTypesGenTransaction7702Signed',
      Transaction4844Signed: 'PalletReviveEvmApiRpcTypesGenTransaction4844Signed',
      Transaction1559Signed: 'PalletReviveEvmApiRpcTypesGenTransaction1559Signed',
      Transaction2930Signed: 'PalletReviveEvmApiRpcTypesGenTransaction2930Signed',
      TransactionLegacySigned: 'PalletReviveEvmApiRpcTypesGenTransactionLegacySigned'
    }
  },
  /**
   * Lookup962: pallet_revive::evm::api::rpc_types_gen::Transaction7702Signed
   **/
  PalletReviveEvmApiRpcTypesGenTransaction7702Signed: {
    transaction7702Unsigned: 'PalletReviveEvmApiRpcTypesGenTransaction7702Unsigned',
    r: 'U256',
    s: 'U256',
    v: 'Option<U256>',
    yParity: 'U256'
  },
  /**
   * Lookup963: pallet_revive::evm::api::rpc_types_gen::Transaction7702Unsigned
   **/
  PalletReviveEvmApiRpcTypesGenTransaction7702Unsigned: {
    _alias: {
      r_type: 'r#type'
    },
    accessList: 'Vec<PalletReviveEvmApiRpcTypesGenAccessListEntry>',
    authorizationList: 'Vec<PalletReviveEvmApiRpcTypesGenAuthorizationListEntry>',
    chainId: 'U256',
    gas: 'U256',
    input: 'Bytes',
    maxFeePerGas: 'U256',
    maxPriorityFeePerGas: 'U256',
    nonce: 'U256',
    to: 'H160',
    r_type: 'u8',
    value: 'U256'
  },
  /**
   * Lookup967: pallet_revive::evm::api::rpc_types_gen::AuthorizationListEntry
   **/
  PalletReviveEvmApiRpcTypesGenAuthorizationListEntry: {
    chainId: 'U256',
    address: 'H160',
    nonce: 'U256',
    yParity: 'U256',
    r: 'U256',
    s: 'U256'
  },
  /**
   * Lookup968: pallet_revive::evm::api::rpc_types_gen::Transaction4844Signed
   **/
  PalletReviveEvmApiRpcTypesGenTransaction4844Signed: {
    transaction4844Unsigned: 'PalletReviveEvmApiRpcTypesGenTransaction4844Unsigned',
    r: 'U256',
    s: 'U256',
    yParity: 'U256'
  },
  /**
   * Lookup969: pallet_revive::evm::api::rpc_types_gen::Transaction4844Unsigned
   **/
  PalletReviveEvmApiRpcTypesGenTransaction4844Unsigned: {
    _alias: {
      r_type: 'r#type'
    },
    accessList: 'Vec<PalletReviveEvmApiRpcTypesGenAccessListEntry>',
    blobVersionedHashes: 'Vec<H256>',
    chainId: 'U256',
    gas: 'U256',
    input: 'Bytes',
    maxFeePerBlobGas: 'U256',
    maxFeePerGas: 'U256',
    maxPriorityFeePerGas: 'U256',
    nonce: 'U256',
    to: 'H160',
    r_type: 'u8',
    value: 'U256'
  },
  /**
   * Lookup970: pallet_revive::evm::api::rpc_types_gen::Transaction1559Signed
   **/
  PalletReviveEvmApiRpcTypesGenTransaction1559Signed: {
    transaction1559Unsigned: 'PalletReviveEvmApiRpcTypesGenTransaction1559Unsigned',
    r: 'U256',
    s: 'U256',
    v: 'Option<U256>',
    yParity: 'U256'
  },
  /**
   * Lookup971: pallet_revive::evm::api::rpc_types_gen::Transaction1559Unsigned
   **/
  PalletReviveEvmApiRpcTypesGenTransaction1559Unsigned: {
    _alias: {
      r_type: 'r#type'
    },
    accessList: 'Vec<PalletReviveEvmApiRpcTypesGenAccessListEntry>',
    chainId: 'U256',
    gas: 'U256',
    gasPrice: 'U256',
    input: 'Bytes',
    maxFeePerGas: 'U256',
    maxPriorityFeePerGas: 'U256',
    nonce: 'U256',
    to: 'Option<H160>',
    r_type: 'u8',
    value: 'U256'
  },
  /**
   * Lookup973: pallet_revive::evm::api::rpc_types_gen::Transaction2930Signed
   **/
  PalletReviveEvmApiRpcTypesGenTransaction2930Signed: {
    transaction2930Unsigned: 'PalletReviveEvmApiRpcTypesGenTransaction2930Unsigned',
    r: 'U256',
    s: 'U256',
    v: 'Option<U256>',
    yParity: 'U256'
  },
  /**
   * Lookup974: pallet_revive::evm::api::rpc_types_gen::Transaction2930Unsigned
   **/
  PalletReviveEvmApiRpcTypesGenTransaction2930Unsigned: {
    _alias: {
      r_type: 'r#type'
    },
    accessList: 'Vec<PalletReviveEvmApiRpcTypesGenAccessListEntry>',
    chainId: 'U256',
    gas: 'U256',
    gasPrice: 'U256',
    input: 'Bytes',
    nonce: 'U256',
    to: 'Option<H160>',
    r_type: 'u8',
    value: 'U256'
  },
  /**
   * Lookup975: pallet_revive::evm::api::rpc_types_gen::TransactionLegacySigned
   **/
  PalletReviveEvmApiRpcTypesGenTransactionLegacySigned: {
    transactionLegacyUnsigned: 'PalletReviveEvmApiRpcTypesGenTransactionLegacyUnsigned',
    r: 'U256',
    s: 'U256',
    v: 'U256'
  },
  /**
   * Lookup976: pallet_revive::evm::api::rpc_types_gen::TransactionLegacyUnsigned
   **/
  PalletReviveEvmApiRpcTypesGenTransactionLegacyUnsigned: {
    _alias: {
      r_type: 'r#type'
    },
    chainId: 'Option<U256>',
    gas: 'U256',
    gasPrice: 'U256',
    input: 'Bytes',
    nonce: 'U256',
    to: 'Option<H160>',
    r_type: 'u8',
    value: 'U256'
  },
  /**
   * Lookup978: pallet_revive::evm::api::rpc_types_gen::Withdrawal
   **/
  PalletReviveEvmApiRpcTypesGenWithdrawal: {
    address: 'H160',
    amount: 'U256',
    index: 'U256',
    validatorIndex: 'U256'
  },
  /**
   * Lookup980: pallet_revive::evm::block_hash::ReceiptGasInfo
   **/
  PalletReviveEvmBlockHashReceiptGasInfo: {
    gasUsed: 'U256',
    effectiveGasPrice: 'U256'
  },
  /**
   * Lookup981: pallet_revive::evm::block_hash::block_builder::EthereumBlockBuilderIR<T>
   **/
  PalletReviveEvmBlockHashBlockBuilderEthereumBlockBuilderIR: {
    transactionRootBuilder: 'PalletReviveEvmBlockHashHashBuilderIncrementalHashBuilderIR',
    receiptsRootBuilder: 'PalletReviveEvmBlockHashHashBuilderIncrementalHashBuilderIR',
    baseFeePerGas: 'U256',
    blockGasLimit: 'U256',
    gasUsed: 'U256',
    logsBloom: '[u8;256]',
    txHashes: 'Vec<H256>',
    gasInfo: 'Vec<PalletReviveEvmBlockHashReceiptGasInfo>'
  },
  /**
   * Lookup982: pallet_revive::evm::block_hash::hash_builder::IncrementalHashBuilderIR
   **/
  PalletReviveEvmBlockHashHashBuilderIncrementalHashBuilderIR: {
    key: 'Bytes',
    valueType: 'u8',
    builderValue: 'Bytes',
    stack: 'Vec<Bytes>',
    stateMasks: 'Vec<u16>',
    treeMasks: 'Vec<u16>',
    hashMasks: 'Vec<u16>',
    storedInDatabase: 'bool',
    rlpBuf: 'Bytes',
    index: 'u64'
  },
  /**
   * Lookup984: pallet_revive::debug::DebugSettings
   **/
  PalletReviveDebugDebugSettings: {
    allowUnlimitedContractSize: 'bool',
    bypassEip3607: 'bool',
    pvmLogs: 'bool',
    disableExecutionTracing: 'bool'
  },
  /**
   * Lookup987: pallet_assets_precompiles::permit::pallet::Error<T>
   **/
  PalletAssetsPrecompilesPermitPalletError: {
    _enum: ['InvalidSignature', 'SignerMismatch', 'PermitExpired', 'SignatureSValueTooHigh', 'InvalidVValue', 'NonceOverflow', 'InvalidOwner', 'InvalidSpender']
  },
  /**
   * Lookup989: pallet_ah_ops::pallet::Error<T>
   **/
  PalletAhOpsError: {
    _enum: ['NoLeaseReserve', 'NoCrowdloanContribution', 'NoCrowdloanReserve', 'FailedToWithdrawCrowdloanContribution', 'NotYet', 'ContributionsRemaining', 'WrongDerivedTranslation', 'NotSovereign', 'InternalError', 'MigrationNotCompleted', 'ZeroBalance', 'FailedToTransfer', 'AlreadyTranslated', 'TooLongDerivationPath', 'FailedToForceUnstake']
  },
  /**
   * Lookup1038: xcm::VersionedAsset
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
   * Lookup1040: xcm_runtime_apis::trusted_query::Error
   **/
  XcmRuntimeApisTrustedQueryError: {
    _enum: ['VersionedAssetConversionFailed', 'VersionedLocationConversionFailed']
  },
  /**
   * Lookup1042: xcm_runtime_apis::authorized_aliases::Error
   **/
  XcmRuntimeApisAuthorizedAliasesError: {
    _enum: ['LocationVersionConversionFailed']
  },
  /**
   * Lookup1045: assets_common::runtime_api::FungiblesAccessError
   **/
  AssetsCommonRuntimeApiFungiblesAccessError: {
    _enum: ['AssetIdConversionFailed', 'AmountToBalanceConversionFailed']
  },
  /**
   * Lookup1046: cumulus_primitives_core::CollationInfo
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
   * Lookup1053: system_parachains_common::apis::InflationInfo
   **/
  SystemParachainsCommonApisInflationInfo: {
    issuance: 'Perquintill',
    nextMint: '(u128,u128)'
  },
  /**
   * Lookup1074: pallet_revive::evm::api::rpc_types::DryRunConfig<Moment>
   **/
  PalletReviveEvmApiRpcTypesDryRunConfig: {
    timestampOverride: 'Option<u64>',
    performBalanceChecks: 'Option<bool>',
    stateOverrides: 'Option<PalletReviveEvmApiRpcTypesGenStateOverrideSet>'
  },
  /**
   * Lookup1077: pallet_revive::evm::api::rpc_types_gen::StateOverrideSet
   **/
  PalletReviveEvmApiRpcTypesGenStateOverrideSet: 'BTreeMap<H160, PalletReviveEvmApiRpcTypesGenStateOverride>',
  /**
   * Lookup1079: pallet_revive::evm::api::rpc_types_gen::StateOverride
   **/
  PalletReviveEvmApiRpcTypesGenStateOverride: {
    balance: 'Option<U256>',
    nonce: 'Option<U256>',
    code: 'Option<Bytes>',
    storage: 'Option<PalletReviveEvmApiRpcTypesGenStorageOverride>',
    movePrecompileToAddress: 'Option<H160>'
  },
  /**
   * Lookup1081: pallet_revive::evm::api::rpc_types_gen::StorageOverride
   **/
  PalletReviveEvmApiRpcTypesGenStorageOverride: {
    _enum: {
      State: 'BTreeMap<H256, H256>',
      StateDiff: 'BTreeMap<H256, H256>'
    }
  },
  /**
   * Lookup1097: pallet_revive::evm::api::debug_rpc_types::PrestateTracerConfig
   **/
  PalletReviveEvmApiDebugRpcTypesPrestateTracerConfig: {
    diffMode: 'bool',
    disableStorage: 'bool',
    disableCode: 'bool'
  },
  /**
   * Lookup1099: pallet_revive::evm::api::debug_rpc_types::ExecutionTracerConfig
   **/
  PalletReviveEvmApiDebugRpcTypesExecutionTracerConfig: {
    enableMemory: 'bool',
    disableStack: 'bool',
    disableStorage: 'bool',
    enableReturnData: 'bool',
    disableSyscallDetails: 'bool',
    limit: 'Option<u64>',
    memoryWordLimit: 'u32'
  },
  /**
   * Lookup1108: pallet_revive::evm::api::debug_rpc_types::PrestateTrace
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
   * Lookup1110: pallet_revive::evm::api::debug_rpc_types::PrestateTraceInfo
   **/
  PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo: {
    balance: 'Option<U256>',
    nonce: 'Option<u32>',
    code: 'Option<Bytes>',
    storage: 'BTreeMap<Bytes, Option<Bytes>>'
  },
  /**
   * Lookup1116: pallet_revive::evm::api::debug_rpc_types::ExecutionTrace
   **/
  PalletReviveEvmApiDebugRpcTypesExecutionTrace: {
    gas: 'u64',
    weightConsumed: 'SpWeightsWeightV2Weight',
    baseCallWeight: 'SpWeightsWeightV2Weight',
    failed: 'bool',
    returnValue: 'Bytes',
    structLogs: 'Vec<PalletReviveEvmApiDebugRpcTypesExecutionStep>'
  },
  /**
   * Lookup1118: pallet_revive::evm::api::debug_rpc_types::ExecutionStep
   **/
  PalletReviveEvmApiDebugRpcTypesExecutionStep: {
    gas: 'Compact<u64>',
    gasCost: 'Compact<u64>',
    weightCost: 'SpWeightsWeightV2Weight',
    depth: 'u16',
    returnData: 'Bytes',
    error: 'Option<Text>',
    kind: 'PalletReviveEvmApiDebugRpcTypesExecutionStepKind'
  },
  /**
   * Lookup1119: pallet_revive::evm::api::debug_rpc_types::ExecutionStepKind
   **/
  PalletReviveEvmApiDebugRpcTypesExecutionStepKind: {
    _enum: {
      EVMOpcode: {
        pc: 'Compact<u32>',
        op: 'u8',
        stack: 'Vec<Bytes>',
        memory: 'Vec<Bytes>',
        storage: 'Option<BTreeMap<Bytes, Bytes>>',
      },
      PVMSyscall: {
        op: 'u8',
        args: 'Vec<u64>',
        returned: 'Option<u64>'
      }
    }
  },
  /**
   * Lookup1126: pallet_revive::evm::api::rpc_types::TracingConfig
   **/
  PalletReviveEvmApiRpcTypesTracingConfig: {
    stateOverrides: 'Option<PalletReviveEvmApiRpcTypesGenStateOverrideSet>'
  },
  /**
   * Lookup1129: pallet_revive::primitives::BalanceConversionError
   **/
  PalletRevivePrimitivesBalanceConversionError: {
    _enum: ['Value', 'Dust']
  },
  /**
   * Lookup1130: asset_hub_polkadot_runtime::RuntimeError
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
      MultiBlockMigrations: 'PalletMigrationsError',
      Balances: 'PalletBalancesError',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      Vesting: 'PalletVestingError',
      Claims: 'PolkadotRuntimeCommonClaimsPalletError',
      Dap: 'PalletDapError',
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
      MultiAssetBounties: 'PalletMultiAssetBountiesError',
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
      StakingRcClient: 'PalletStakingAsyncRcClientError',
      MultiBlockElection: 'PalletElectionProviderMultiBlockError',
      __Unused86: 'Null',
      __Unused87: 'Null',
      MultiBlockElectionSigned: 'PalletElectionProviderMultiBlockSignedPalletError',
      Staking: 'PalletStakingAsyncPalletError',
      Revive: 'PalletReviveError',
      __Unused91: 'Null',
      AssetsPrecompilesPermit: 'PalletAssetsPrecompilesPermitPalletError',
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
      AhOps: 'PalletAhOpsError'
    }
  }
};
