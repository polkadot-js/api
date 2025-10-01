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
   * Lookup241: pallet_staking_async_rc_client::pallet::Event<T>
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
   * Lookup244: pallet_staking_async_rc_client::pallet::UnexpectedKind
   **/
  PalletStakingAsyncRcClientUnexpectedKind: {
    _enum: ['SessionReportIntegrityFailed', 'ValidatorSetIntegrityFailed', 'SessionSkipped', 'SessionAlreadyProcessed']
  },
  /**
   * Lookup245: pallet_election_provider_multi_block::pallet::Event<T>
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
   * Lookup246: pallet_election_provider_multi_block::types::Phase<T>
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
   * Lookup247: pallet_election_provider_multi_block::verifier::impls::pallet::Event<T>
   **/
  PalletElectionProviderMultiBlockVerifierImplsPalletEvent: {
    _enum: {
      VerificationFailed: '(u32,PalletElectionProviderMultiBlockVerifierFeasibilityError)',
      Verified: '(u32,u32)',
      Queued: '(SpNposElectionsElectionScore,Option<SpNposElectionsElectionScore>)'
    }
  },
  /**
   * Lookup248: pallet_election_provider_multi_block::verifier::FeasibilityError
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
   * Lookup249: sp_npos_elections::Error
   **/
  SpNposElectionsError: {
    _enum: ['SolutionWeightOverflow', 'SolutionTargetOverflow', 'SolutionInvalidIndex', 'SolutionInvalidPageIndex', 'ArithmeticError', 'InvalidSupportEdge', 'TooManyVoters', 'BoundsExceeded', 'DuplicateVoter', 'DuplicateTarget']
  },
  /**
   * Lookup252: pallet_election_provider_multi_block::signed::pallet::Event<T>
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
   * Lookup253: pallet_staking_async::pallet::pallet::Event<T>
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
   * Lookup254: pallet_staking_async::RewardDestination<sp_core::crypto::AccountId32>
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
   * Lookup255: pallet_staking_async::ValidatorPrefs
   **/
  PalletStakingAsyncValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup257: pallet_staking_async::Forcing
   **/
  PalletStakingAsyncForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup259: pallet_staking_async::pallet::pallet::UnexpectedKind
   **/
  PalletStakingAsyncPalletUnexpectedKind: {
    _enum: ['EraDurationBoundExceeded', 'UnknownValidatorActivation']
  },
  /**
   * Lookup262: parachains_common::pay::VersionedLocatableAccount
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
   * Lookup274: cumulus_pallet_parachain_system::parachain_inherent::BasicParachainInherentData
   **/
  CumulusPalletParachainSystemParachainInherentBasicParachainInherentData: {
    validationData: 'PolkadotPrimitivesV8PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    relayParentDescendants: 'Vec<SpRuntimeHeader>',
    collatorPeerId: 'Option<Bytes>'
  },
  /**
   * Lookup282: cumulus_pallet_parachain_system::parachain_inherent::InboundMessagesData
   **/
  CumulusPalletParachainSystemParachainInherentInboundMessagesData: {
    downwardMessages: {
      fullMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
      hashedMessages: 'Vec<CumulusPrimitivesParachainInherentHashedMessage>'
    },
    horizontalMessages: 'CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection'
  },
  /**
   * Lookup287: cumulus_primitives_parachain_inherent::HashedMessage
   **/
  CumulusPrimitivesParachainInherentHashedMessage: {
    sentAt: 'u32',
    msgHash: 'H256'
  },
  /**
   * Lookup288: cumulus_pallet_parachain_system::parachain_inherent::AbridgedInboundMessagesCollection<Message>
   **/
  CumulusPalletParachainSystemParachainInherentAbridgedInboundMessagesCollection: {
    fullMessages: 'Vec<(u32,PolkadotCorePrimitivesInboundHrmpMessage)>',
    hashedMessages: 'Vec<(u32,CumulusPrimitivesParachainInherentHashedMessage)>'
  },
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
   * Lookup445: pallet_staking_async_rc_client::pallet::Call<T>
   **/
  PalletStakingAsyncRcClientCall: {
    _enum: {
      relay_session_report: {
        report: 'PalletStakingAsyncRcClientSessionReport',
      },
      relay_new_offence: {
        slashSession: 'u32',
        offences: 'Vec<PalletStakingAsyncRcClientOffence>'
      }
    }
  },
  /**
   * Lookup446: pallet_staking_async_rc_client::SessionReport<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncRcClientSessionReport: {
    endIndex: 'u32',
    validatorPoints: 'Vec<(AccountId32,u32)>',
    activationTimestamp: 'Option<(u64,u32)>',
    leftover: 'bool'
  },
  /**
   * Lookup450: pallet_staking_async_rc_client::Offence<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncRcClientOffence: {
    offender: 'AccountId32',
    reporters: 'Vec<AccountId32>',
    slashFraction: 'Perbill'
  },
  /**
   * Lookup451: pallet_election_provider_multi_block::pallet::Call<T>
   **/
  PalletElectionProviderMultiBlockCall: {
    _enum: {
      manage: {
        op: 'PalletElectionProviderMultiBlockAdminOperation'
      }
    }
  },
  /**
   * Lookup452: pallet_election_provider_multi_block::AdminOperation<T>
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
   * Lookup461: pallet_election_provider_multi_block::verifier::impls::pallet::Call<T>
   **/
  PalletElectionProviderMultiBlockVerifierImplsPalletCall: 'Null',
  /**
   * Lookup462: pallet_election_provider_multi_block::unsigned::pallet::Call<T>
   **/
  PalletElectionProviderMultiBlockUnsignedPalletCall: {
    _enum: {
      submit_unsigned: {
        pagedSolution: 'PalletElectionProviderMultiBlockPagedRawSolution'
      }
    }
  },
  /**
   * Lookup463: pallet_election_provider_multi_block::types::PagedRawSolution<T>
   **/
  PalletElectionProviderMultiBlockPagedRawSolution: {
    solutionPages: 'Vec<AssetHubKusamaRuntimeStakingNposCompactSolution24>',
    score: 'SpNposElectionsElectionScore',
    round: 'u32'
  },
  /**
   * Lookup465: asset_hub_kusama_runtime::staking::NposCompactSolution24
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
   * Lookup540: pallet_election_provider_multi_block::signed::pallet::Call<T>
   **/
  PalletElectionProviderMultiBlockSignedPalletCall: {
    _enum: {
      register: {
        claimedScore: 'SpNposElectionsElectionScore',
      },
      submit_page: {
        page: 'u32',
        maybeSolution: 'Option<AssetHubKusamaRuntimeStakingNposCompactSolution24>',
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
   * Lookup542: pallet_staking_async::pallet::pallet::Call<T>
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
   * Lookup547: pallet_staking_async::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingAsyncPalletConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup548: pallet_staking_async::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingAsyncPalletConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup549: pallet_staking_async::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
   **/
  PalletStakingAsyncPalletConfigOpPercent: {
    _enum: {
      Noop: 'Null',
      Set: 'Percent',
      Remove: 'Null'
    }
  },
  /**
   * Lookup550: pallet_staking_async::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletStakingAsyncPalletConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup554: pallet_staking_async::ledger::UnlockChunk<Balance>
   **/
  PalletStakingAsyncLedgerUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup568: pallet_ah_ops::pallet::Call<T>
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
   * Lookup569: pallet_ah_migrator::pallet::Call<T>
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
        values: 'Vec<(Option<u32>,Vec<(u16,u32)>,Vec<(u16,Vec<(u32,u128)>)>)>',
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
        messages: 'Vec<(u32,Vec<Option<PalletRcMigratorSchedulerAliasScheduled>>)>',
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
      receive_recovery_messages: {
        messages: 'Vec<PalletRcMigratorRecoveryPortableRecoveryMessage>',
      },
      receive_society_messages: {
        messages: 'Vec<PalletRcMigratorSocietyPortableSocietyMessage>',
      },
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
      },
      send_xcm_message: {
        dest: 'XcmVersionedLocation',
        message: 'XcmVersionedXcm'
      }
    }
  },
  /**
   * Lookup571: pallet_rc_migrator::accounts::Account<sp_core::crypto::AccountId32, Balance, pallet_rc_migrator::types::PortableHoldReason, pallet_rc_migrator::types::PortableFreezeReason>
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
   * Lookup572: pallet_rc_migrator::types::PortableHoldReason
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
   * Lookup579: pallet_rc_migrator::types::PortableFreezeReason
   **/
  PalletRcMigratorPortableFreezeReason: {
    _enum: {
      NominationPools: 'PalletNominationPoolsFreezeReason'
    }
  },
  /**
   * Lookup582: frame_support::traits::tokens::misc::IdAmount<pallet_rc_migrator::types::PortableHoldReason, Balance>
   **/
  FrameSupportTokensMiscIdAmountPortableHoldReason: {
    id: 'PalletRcMigratorPortableHoldReason',
    amount: 'u128'
  },
  /**
   * Lookup585: frame_support::traits::tokens::misc::IdAmount<pallet_rc_migrator::types::PortableFreezeReason, Balance>
   **/
  FrameSupportTokensMiscIdAmountPortableFreezeReason: {
    id: 'PalletRcMigratorPortableFreezeReason',
    amount: 'u128'
  },
  /**
   * Lookup592: pallet_rc_migrator::multisig::RcMultisig<sp_core::crypto::AccountId32, Balance>
   **/
  PalletRcMigratorMultisigRcMultisig: {
    creator: 'AccountId32',
    deposit: 'u128'
  },
  /**
   * Lookup594: pallet_rc_migrator::proxy::RcProxy<sp_core::crypto::AccountId32, Balance, kusama_runtime_constants::proxy::ProxyType, BlockNumber>
   **/
  PalletRcMigratorProxyRcProxy: {
    delegator: 'AccountId32',
    deposit: 'u128',
    proxies: 'Vec<PalletProxyProxyDefinitionKusamaRuntimeConstantsProxyProxyType>'
  },
  /**
   * Lookup597: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, kusama_runtime_constants::proxy::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinitionKusamaRuntimeConstantsProxyProxyType: {
    delegate: 'AccountId32',
    proxyType: 'KusamaRuntimeConstantsProxyProxyType',
    delay: 'u32'
  },
  /**
   * Lookup599: pallet_rc_migrator::proxy::RcProxyAnnouncement<sp_core::crypto::AccountId32, Balance>
   **/
  PalletRcMigratorProxyRcProxyAnnouncement: {
    depositor: 'AccountId32',
    deposit: 'u128'
  },
  /**
   * Lookup601: pallet_rc_migrator::preimage::chunks::RcPreimageChunk
   **/
  PalletRcMigratorPreimageChunksRcPreimageChunk: {
    preimageHash: 'H256',
    preimageLen: 'u32',
    chunkByteOffset: 'u32',
    chunkBytes: 'Bytes'
  },
  /**
   * Lookup604: pallet_rc_migrator::preimage::request_status::PortableRequestStatus
   **/
  PalletRcMigratorPreimageRequestStatusPortableRequestStatus: {
    _alias: {
      hash_: 'hash'
    },
    hash_: 'H256',
    requestStatus: 'PalletRcMigratorPreimageRequestStatusPortableRequestStatusInner'
  },
  /**
   * Lookup605: pallet_rc_migrator::preimage::request_status::PortableRequestStatusInner
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
   * Lookup610: pallet_rc_migrator::preimage::legacy_request_status::RcPreimageLegacyStatus<sp_core::crypto::AccountId32, Balance>
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
   * Lookup612: pallet_rc_migrator::staking::nom_pools::RcNomPoolsMessage<T>
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
   * Lookup613: pallet_rc_migrator::staking::nom_pools::NomPoolsStorageValues<Balance>
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
   * Lookup626: pallet_rc_migrator::staking::nom_pools_alias::RewardPool<T>
   **/
  PalletRcMigratorStakingNomPoolsAliasRewardPool: {
    lastRecordedRewardCounter: 'u128',
    lastRecordedTotalPayouts: 'u128',
    totalRewardsClaimed: 'u128',
    totalCommissionPending: 'u128',
    totalCommissionClaimed: 'u128'
  },
  /**
   * Lookup628: pallet_rc_migrator::staking::nom_pools_alias::SubPools<T>
   **/
  PalletRcMigratorStakingNomPoolsAliasSubPools: {
    noEra: 'PalletRcMigratorStakingNomPoolsAliasUnbondPool',
    withEra: 'BTreeMap<u32, PalletRcMigratorStakingNomPoolsAliasUnbondPool>'
  },
  /**
   * Lookup629: pallet_rc_migrator::staking::nom_pools_alias::UnbondPool<T>
   **/
  PalletRcMigratorStakingNomPoolsAliasUnbondPool: {
    points: 'u128',
    balance: 'u128'
  },
  /**
   * Lookup637: pallet_rc_migrator::vesting::RcVestingSchedule<T>
   **/
  PalletRcMigratorVestingRcVestingSchedule: {
    who: 'AccountId32',
    schedules: 'Vec<PalletVestingVestingInfo>'
  },
  /**
   * Lookup648: pallet_referenda::types::ReferendumInfo<TrackId, asset_hub_kusama_runtime::ah_migration::RcPalletsOrigin, Moment, frame_support::traits::preimages::Bounded<asset_hub_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
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
   * Lookup649: asset_hub_kusama_runtime::ah_migration::RcPalletsOrigin
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
   * Lookup651: pallet_referenda::types::ReferendumStatus<TrackId, asset_hub_kusama_runtime::ah_migration::RcPalletsOrigin, Moment, frame_support::traits::preimages::Bounded<asset_hub_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatusRcPalletsOrigin: {
    track: 'u16',
    origin: 'AssetHubKusamaRuntimeAhMigrationRcPalletsOrigin',
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
   * Lookup659: pallet_rc_migrator::claims::RcClaimsMessage<sp_core::crypto::AccountId32, Balance, BlockNumber>
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
   * Lookup664: pallet_rc_migrator::staking::bags_list::PortableBagsListMessage
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
   * Lookup665: pallet_rc_migrator::staking::bags_list::PortableNode
   **/
  PalletRcMigratorStakingBagsListPortableNode: {
    id: 'AccountId32',
    prev: 'Option<AccountId32>',
    next: 'Option<AccountId32>',
    bagUpper: 'u64',
    score: 'u64'
  },
  /**
   * Lookup666: pallet_rc_migrator::staking::bags_list::PortableBag
   **/
  PalletRcMigratorStakingBagsListPortableBag: {
    head: 'Option<AccountId32>',
    tail: 'Option<AccountId32>',
    bagUpper: 'u64'
  },
  /**
   * Lookup668: pallet_rc_migrator::scheduler::RcSchedulerMessage<BlockNumber>
   **/
  PalletRcMigratorSchedulerRcSchedulerMessage: {
    _enum: {
      IncompleteSince: 'u32',
      Retries: '((u32,u32),PalletSchedulerRetryConfig)',
      Lookup: '([u8;32],(u32,u32))'
    }
  },
  /**
   * Lookup673: pallet_rc_migrator::indices::RcIndicesIndex<AccountIndex, sp_core::crypto::AccountId32, Balance>
   **/
  PalletRcMigratorIndicesRcIndicesIndex: {
    index: 'u32',
    who: 'AccountId32',
    deposit: 'u128',
    frozen: 'bool'
  },
  /**
   * Lookup675: pallet_rc_migrator::conviction_voting::RcConvictionVotingMessage<sp_core::crypto::AccountId32, Class, pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>, Balance>
   **/
  PalletRcMigratorConvictionVotingRcConvictionVotingMessage: {
    _enum: {
      VotingFor: '(AccountId32,u16,PalletConvictionVotingVoteVoting)',
      ClassLocksFor: '(AccountId32,Vec<(u16,u128)>)'
    }
  },
  /**
   * Lookup687: pallet_rc_migrator::bounties::RcBountiesMessage<sp_core::crypto::AccountId32, Balance, BlockNumber>
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
   * Lookup690: pallet_rc_migrator::bounties::alias::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
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
   * Lookup695: pallet_rc_migrator::crowdloan::RcCrowdloanMessage<BlockNumber, sp_core::crypto::AccountId32, Balance>
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
   * Lookup699: pallet_rc_migrator::treasury::PortableTreasuryMessage
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
   * Lookup702: pallet_rc_migrator::treasury::PortableSpendStatus
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
   * Lookup703: pallet_rc_migrator::treasury::PortablePaymentState
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
   * Lookup708: pallet_rc_migrator::scheduler::alias::Scheduled<frame_support::traits::preimages::Bounded<asset_hub_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, BlockNumber, asset_hub_kusama_runtime::ah_migration::RcPalletsOrigin>
   **/
  PalletRcMigratorSchedulerAliasScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'AssetHubKusamaRuntimeAhMigrationRcPalletsOrigin'
  },
  /**
   * Lookup710: pallet_rc_migrator::staking::delegated_staking::PortableDelegatedStakingMessage
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
   * Lookup712: pallet_rc_migrator::child_bounties::PortableChildBountiesMessage
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
   * Lookup713: pallet_rc_migrator::child_bounties::PortableChildBounty
   **/
  PalletRcMigratorChildBountiesPortableChildBounty: {
    parentBounty: 'u32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    status: 'PalletRcMigratorChildBountiesPortableChildBountyStatus'
  },
  /**
   * Lookup714: pallet_rc_migrator::child_bounties::PortableChildBountyStatus
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
   * Lookup717: pallet_rc_migrator::staking::message::PortableStakingMessage
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
   * Lookup718: pallet_rc_migrator::staking::message::StakingValues<Balance>
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
   * Lookup720: pallet_rc_migrator::staking::message::PortableActiveEraInfo
   **/
  PalletRcMigratorStakingMessagePortableActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup722: pallet_rc_migrator::staking::message::PortableForcing
   **/
  PalletRcMigratorStakingMessagePortableForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup724: pallet_rc_migrator::staking::message::PortableStakingLedger
   **/
  PalletRcMigratorStakingMessagePortableStakingLedger: {
    stash: 'AccountId32',
    total: 'u128',
    active: 'u128',
    unlocking: 'Vec<PalletRcMigratorStakingMessagePortableUnlockChunk>'
  },
  /**
   * Lookup726: pallet_rc_migrator::staking::message::PortableUnlockChunk
   **/
  PalletRcMigratorStakingMessagePortableUnlockChunk: {
    value: 'u128',
    era: 'u32'
  },
  /**
   * Lookup728: pallet_rc_migrator::staking::message::PortableRewardDestination
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
   * Lookup729: pallet_rc_migrator::staking::message::PortableValidatorPrefs
   **/
  PalletRcMigratorStakingMessagePortableValidatorPrefs: {
    commission: 'Perbill',
    blocked: 'bool'
  },
  /**
   * Lookup730: pallet_rc_migrator::staking::message::PortableNominations
   **/
  PalletRcMigratorStakingMessagePortableNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup732: pallet_rc_migrator::staking::message::PortablePagedExposureMetadata
   **/
  PalletRcMigratorStakingMessagePortablePagedExposureMetadata: {
    total: 'u128',
    own: 'u128',
    nominatorCount: 'u32',
    pageCount: 'u32'
  },
  /**
   * Lookup733: pallet_rc_migrator::staking::message::PortableExposurePage
   **/
  PalletRcMigratorStakingMessagePortableExposurePage: {
    pageTotal: 'u128',
    others: 'Vec<PalletRcMigratorStakingMessagePortableIndividualExposure>'
  },
  /**
   * Lookup735: pallet_rc_migrator::staking::message::PortableIndividualExposure
   **/
  PalletRcMigratorStakingMessagePortableIndividualExposure: {
    who: 'AccountId32',
    value: 'u128'
  },
  /**
   * Lookup737: pallet_rc_migrator::staking::message::PortableEraRewardPoints
   **/
  PalletRcMigratorStakingMessagePortableEraRewardPoints: {
    total: 'u32',
    individual: 'Vec<(AccountId32,u32)>'
  },
  /**
   * Lookup739: pallet_rc_migrator::staking::message::PortableUnappliedSlash
   **/
  PalletRcMigratorStakingMessagePortableUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporters: 'Vec<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup745: pallet_rc_migrator::recovery::PortableRecoveryMessage
   **/
  PalletRcMigratorRecoveryPortableRecoveryMessage: {
    _enum: {
      Recoverable: '(AccountId32,PalletRcMigratorRecoveryPortableRecoveryConfig)',
      ActiveRecoveries: '(AccountId32,AccountId32,PalletRcMigratorRecoveryPortableActiveRecovery)',
      Proxy: '(AccountId32,AccountId32)'
    }
  },
  /**
   * Lookup747: pallet_rc_migrator::recovery::PortableRecoveryConfig
   **/
  PalletRcMigratorRecoveryPortableRecoveryConfig: {
    delayPeriod: 'u32',
    deposit: 'u128',
    friends: 'PalletRcMigratorRecoveryPortableRecoveryFriends',
    threshold: 'u16'
  },
  /**
   * Lookup748: pallet_rc_migrator::recovery::PortableRecoveryFriends
   **/
  PalletRcMigratorRecoveryPortableRecoveryFriends: {
    friends: 'Vec<AccountId32>'
  },
  /**
   * Lookup751: pallet_rc_migrator::recovery::PortableActiveRecovery
   **/
  PalletRcMigratorRecoveryPortableActiveRecovery: {
    created: 'u32',
    deposit: 'u128',
    friends: 'PalletRcMigratorRecoveryPortableRecoveryFriends'
  },
  /**
   * Lookup754: pallet_rc_migrator::society::PortableSocietyMessage
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
   * Lookup755: pallet_rc_migrator::society::SocietyValues
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
   * Lookup757: pallet_rc_migrator::society::PortableGroupParams
   **/
  PalletRcMigratorSocietyPortableGroupParams: {
    maxMembers: 'u32',
    maxIntake: 'u32',
    maxStrikes: 'u32',
    candidateDeposit: 'u128'
  },
  /**
   * Lookup760: pallet_rc_migrator::society::PortableBid
   **/
  PalletRcMigratorSocietyPortableBid: {
    who: 'AccountId32',
    kind: 'PalletRcMigratorSocietyPortableBidKind',
    value: 'u128'
  },
  /**
   * Lookup761: pallet_rc_migrator::society::PortableBidKind
   **/
  PalletRcMigratorSocietyPortableBidKind: {
    _enum: {
      Deposit: 'u128',
      Vouch: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup763: pallet_rc_migrator::society::PortableIntakeRecord
   **/
  PalletRcMigratorSocietyPortableIntakeRecord: {
    who: 'AccountId32',
    bid: 'u128',
    round: 'u32'
  },
  /**
   * Lookup766: pallet_rc_migrator::society::PortableTally
   **/
  PalletRcMigratorSocietyPortableTally: {
    approvals: 'u32',
    rejections: 'u32'
  },
  /**
   * Lookup767: pallet_rc_migrator::society::PortableMemberRecord
   **/
  PalletRcMigratorSocietyPortableMemberRecord: {
    rank: 'u32',
    strikes: 'u32',
    vouching: 'Option<PalletRcMigratorSocietyPortableVouchingStatus>',
    index: 'u32'
  },
  /**
   * Lookup769: pallet_rc_migrator::society::PortableVouchingStatus
   **/
  PalletRcMigratorSocietyPortableVouchingStatus: {
    _enum: ['Vouching', 'Banned']
  },
  /**
   * Lookup770: pallet_rc_migrator::society::PortablePayoutRecord
   **/
  PalletRcMigratorSocietyPortablePayoutRecord: {
    paid: 'u128',
    payouts: 'Vec<(u32,u128)>'
  },
  /**
   * Lookup771: pallet_rc_migrator::society::PortableCandidacy
   **/
  PalletRcMigratorSocietyPortableCandidacy: {
    round: 'u32',
    kind: 'PalletRcMigratorSocietyPortableBidKind',
    bid: 'u128',
    tally: 'PalletRcMigratorSocietyPortableTally',
    skepticStruck: 'bool'
  },
  /**
   * Lookup772: pallet_rc_migrator::society::PortableVote
   **/
  PalletRcMigratorSocietyPortableVote: {
    approve: 'bool',
    weight: 'u32'
  },
  /**
   * Lookup773: pallet_ah_migrator::MigrationStage
   **/
  PalletAhMigratorMigrationStage: {
    _enum: ['Pending', 'DataMigrationOngoing', 'MigrationDone']
  },
  /**
   * Lookup776: pallet_rc_migrator::types::MigrationFinishedData<Balance>
   **/
  PalletRcMigratorMigrationFinishedData: {
    rcBalanceKept: 'u128'
  },
  /**
   * Lookup785: pallet_ah_ops::pallet::Event<T>
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
   * Lookup786: pallet_ah_migrator::pallet::Event<T>
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
        messageId: '[u8;32]'
      }
    }
  },
  /**
   * Lookup787: pallet_ah_migrator::PalletEventName
   **/
  PalletAhMigratorPalletEventName: {
    _enum: ['AssetRates', 'BagsList', 'Balances', 'Bounties', 'ChildBounties', 'Claims', 'ConvictionVoting', 'Crowdloan', 'DelegatedStaking', 'Indices', 'Multisig', 'NomPools', 'PreimageChunk', 'PreimageLegacyStatus', 'PreimageRequestStatus', 'ProxyAnnouncements', 'ProxyProxies', 'Recovery', 'ReferendaMetadata', 'ReferendaReferendums', 'ReferendaValues', 'Scheduler', 'SchedulerAgenda', 'Staking', 'Treasury', 'Vesting', 'Society']
  },
  /**
   * Lookup827: cumulus_pallet_parachain_system::parachain_inherent::InboundMessageId
   **/
  CumulusPalletParachainSystemParachainInherentInboundMessageId: {
    sentAt: 'u32',
    reverseIdx: 'u32'
  },
  /**
   * Lookup852: asset_hub_kusama_runtime::RuntimeHoldReason
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
   * Lookup855: pallet_election_provider_multi_block::signed::pallet::HoldReason
   **/
  PalletElectionProviderMultiBlockSignedPalletHoldReason: {
    _enum: ['SignedSubmission']
  },
  /**
   * Lookup856: pallet_staking_async::pallet::pallet::HoldReason
   **/
  PalletStakingAsyncPalletHoldReason: {
    _enum: ['Staking']
  },
  /**
   * Lookup860: asset_hub_kusama_runtime::RuntimeFreezeReason
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
   * Lookup938: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, asset_hub_kusama_runtime::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinitionAssetHubKusamaRuntimeProxyType: {
    delegate: 'AccountId32',
    proxyType: 'AssetHubKusamaRuntimeProxyType',
    delay: 'u32'
  },
  /**
   * Lookup946: pallet_remote_proxy::pallet::Error<T, I>
   **/
  PalletRemoteProxyError: {
    _enum: ['CouldNotConvertLocalToRemoteAccountId', 'UnknownProofAnchorBlock', 'InvalidProof', 'ProxyDefinitionDecodingFailed', 'Unannounced', 'DidNotFindMatchingProxyDefinition', 'ProxyProofNotRegistered']
  },
  /**
   * Lookup1022: pallet_revive::vm::CodeInfo<T>
   **/
  PalletReviveVmCodeInfo: {
    owner: 'AccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>',
    codeLen: 'u32',
    behaviourVersion: 'u32'
  },
  /**
   * Lookup1023: pallet_revive::storage::AccountInfo<T>
   **/
  PalletReviveStorageAccountInfo: {
    accountType: 'PalletReviveStorageAccountType',
    dust: 'u32'
  },
  /**
   * Lookup1024: pallet_revive::storage::AccountType<T>
   **/
  PalletReviveStorageAccountType: {
    _enum: {
      Contract: 'PalletReviveStorageContractInfo',
      EOA: 'Null'
    }
  },
  /**
   * Lookup1051: pallet_election_provider_multi_block::pallet::Error<T>
   **/
  PalletElectionProviderMultiBlockError: {
    _enum: ['Fallback', 'UnexpectedPhase', 'Snapshot']
  },
  /**
   * Lookup1052: pallet_election_provider_multi_block::verifier::impls::ValidSolution
   **/
  PalletElectionProviderMultiBlockVerifierImplsValidSolution: {
    _enum: ['X', 'Y']
  },
  /**
   * Lookup1055: pallet_election_provider_multi_block::verifier::impls::PartialBackings
   **/
  PalletElectionProviderMultiBlockVerifierImplsPartialBackings: {
    total: 'u128',
    backers: 'u32'
  },
  /**
   * Lookup1057: pallet_election_provider_multi_block::verifier::impls::Status
   **/
  PalletElectionProviderMultiBlockVerifierImplsStatus: {
    _enum: {
      Ongoing: 'u32',
      Nothing: 'Null'
    }
  },
  /**
   * Lookup1063: pallet_election_provider_multi_block::signed::SubmissionMetadata<T>
   **/
  PalletElectionProviderMultiBlockSignedSubmissionMetadata: {
    deposit: 'u128',
    fee: 'u128',
    reward: 'u128',
    claimedScore: 'SpNposElectionsElectionScore',
    pages: 'Vec<bool>'
  },
  /**
   * Lookup1066: pallet_election_provider_multi_block::signed::pallet::Error<T>
   **/
  PalletElectionProviderMultiBlockSignedPalletError: {
    _enum: ['PhaseNotSigned', 'Duplicate', 'QueueFull', 'BadPageIndex', 'NotRegistered', 'NoSubmission', 'RoundNotOver', 'BadWitnessData', 'TooManyInvulnerables']
  },
  /**
   * Lookup1067: pallet_staking_async::ledger::StakingLedger<T>
   **/
  PalletStakingAsyncLedgerStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingAsyncLedgerUnlockChunk>'
  },
  /**
   * Lookup1068: pallet_staking_async::Nominations<T>
   **/
  PalletStakingAsyncNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup1069: pallet_staking_async::ActiveEraInfo
   **/
  PalletStakingAsyncActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup1072: pallet_staking_async::pallet::pallet::BoundedExposurePage<T>
   **/
  PalletStakingAsyncPalletBoundedExposurePage: 'SpStakingExposurePage',
  /**
   * Lookup1077: pallet_staking_async::EraRewardPoints<T>
   **/
  PalletStakingAsyncEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup1080: pallet_staking_async::slashing::OffenceRecord<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncSlashingOffenceRecord: {
    reporter: 'Option<AccountId32>',
    reportedEra: 'u32',
    exposurePage: 'u32',
    slashFraction: 'Perbill',
    priorSlashFraction: 'Perbill'
  },
  /**
   * Lookup1084: pallet_staking_async::UnappliedSlash<T>
   **/
  PalletStakingAsyncUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporter: 'Option<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup1087: pallet_staking_async::SnapshotStatus<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncSnapshotStatus: {
    _enum: {
      Ongoing: 'AccountId32',
      Consumed: 'Null',
      Waiting: 'Null'
    }
  },
  /**
   * Lookup1089: pallet_staking_async::pallet::pallet::PruningStep
   **/
  PalletStakingAsyncPalletPruningStep: {
    _enum: ['ErasStakersPaged', 'ErasStakersOverview', 'ErasValidatorPrefs', 'ClaimedRewards', 'ErasValidatorReward', 'ErasRewardPoints', 'ErasTotalStake']
  },
  /**
   * Lookup1090: pallet_staking_async::pallet::pallet::Error<T>
   **/
  PalletStakingAsyncPalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashRecord', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'AlreadyClaimed', 'InvalidPage', 'IncorrectHistoryDepth', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow', 'BoundNotMet', 'ControllerDeprecated', 'CannotRestoreLedger', 'RewardDestinationRestricted', 'NotEnoughFunds', 'VirtualStakerNotAllowed', 'CannotReapStash', 'AlreadyMigrated', 'EraNotStarted', 'Restricted', 'UnappliedSlashesInPreviousEra', 'EraNotPrunable', 'CancelledSlash']
  },
  /**
   * Lookup1101: pallet_referenda::types::ReferendumInfo<TrackId, asset_hub_kusama_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<asset_hub_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
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
   * Lookup1102: pallet_referenda::types::ReferendumStatus<TrackId, asset_hub_kusama_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<asset_hub_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatusOriginCaller: {
    track: 'u16',
    origin: 'AssetHubKusamaRuntimeOriginCaller',
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
   * Lookup1120: pallet_ah_ops::pallet::Error<T>
   **/
  PalletAhOpsError: {
    _enum: ['NoLeaseReserve', 'NoCrowdloanContribution', 'NoCrowdloanReserve', 'FailedToWithdrawCrowdloanContribution', 'NotYet', 'ContributionsRemaining', 'WrongDerivedTranslation', 'NotSovereign', 'InternalError', 'MigrationNotCompleted', 'ZeroBalance']
  },
  /**
   * Lookup1121: pallet_ah_migrator::BalancesBefore<Balance>
   **/
  PalletAhMigratorBalancesBefore: {
    checkingAccount: 'u128',
    totalIssuance: 'u128'
  },
  /**
   * Lookup1122: pallet_ah_migrator::pallet::Error<T>
   **/
  PalletAhMigratorError: {
    _enum: ['FailedToUnreserveDeposit', 'FailedToProcessAccount', 'InsertConflict', 'FailedToConvertType', 'PreimageNotFound', 'FailedToConvertCall', 'FailedToBoundCall', 'XcmError', 'FailedToIntegrateVestingSchedule', 'FailedToCalculateCheckingAccount', 'FailedToBoundVector', 'DmpQueuePriorityAlreadySet', 'InvalidParameter', 'PreimageMissing', 'PreimageTooBig', 'PreimageChunkMissing', 'PreimageStatusInvalid', 'BadXcmVersion', 'InvalidOrigin']
  },
  /**
   * Lookup1181: xcm::VersionedAsset
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
   * Lookup1183: xcm_runtime_apis::trusted_query::Error
   **/
  XcmRuntimeApisTrustedQueryError: {
    _enum: ['VersionedAssetConversionFailed', 'VersionedLocationConversionFailed']
  },
  /**
   * Lookup1185: xcm_runtime_apis::authorized_aliases::Error
   **/
  XcmRuntimeApisAuthorizedAliasesError: {
    _enum: ['LocationVersionConversionFailed']
  },
  /**
   * Lookup1227: pallet_revive::evm::api::debug_rpc_types::PrestateTracerConfig
   **/
  PalletReviveEvmApiDebugRpcTypesPrestateTracerConfig: {
    diffMode: 'bool',
    disableStorage: 'bool',
    disableCode: 'bool'
  },
  /**
   * Lookup1236: pallet_revive::evm::api::debug_rpc_types::PrestateTrace
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
   * Lookup1238: pallet_revive::evm::api::debug_rpc_types::PrestateTraceInfo
   **/
  PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo: {
    balance: 'Option<U256>',
    nonce: 'Option<u32>',
    code: 'Option<Bytes>',
    storage: 'BTreeMap<Bytes, Option<Bytes>>'
  },
  /**
   * Lookup1246: asset_hub_kusama_runtime::RuntimeError
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
