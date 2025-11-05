// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup35: pallet_balances::pallet::UnexpectedKind
   **/
  PalletBalancesUnexpectedKind: {
    _enum: ['BalanceUpdated', 'FailedToMutateAccount']
  },
  /**
   * Lookup46: pallet_session::historical::pallet::Event<T>
   **/
  PalletSessionHistoricalPalletEvent: {
    _enum: {
      RootStored: {
        index: 'u32',
      },
      RootsPruned: {
        upTo: 'u32'
      }
    }
  },
  /**
   * Lookup138: staging_kusama_runtime::SessionKeys
   **/
  StagingKusamaRuntimeSessionKeys: {
    grandpa: 'SpConsensusGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    paraValidator: 'PolkadotPrimitivesV8ValidatorAppPublic',
    paraAssignment: 'PolkadotPrimitivesV8AssignmentAppPublic',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic',
    beefy: 'SpConsensusBeefyEcdsaCryptoPublic'
  },
  /**
   * Lookup160: staging_kusama_runtime::OriginCaller
   **/
  StagingKusamaRuntimeOriginCaller: {
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
      Origins: 'StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin',
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
   * Lookup162: staging_kusama_runtime::governance::origins::pallet_custom_origins::Origin
   **/
  StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
    _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'AuctionAdmin', 'LeaseAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'SmallTipper', 'BigTipper', 'SmallSpender', 'MediumSpender', 'BigSpender', 'WhitelistedCaller', 'FellowshipInitiates', 'Fellows', 'FellowshipExperts', 'FellowshipMasters', 'Fellowship1Dan', 'Fellowship2Dan', 'Fellowship3Dan', 'Fellowship4Dan', 'Fellowship5Dan', 'Fellowship6Dan', 'Fellowship7Dan', 'Fellowship8Dan', 'Fellowship9Dan', 'WishForChange']
  },
  /**
   * Lookup172: staging_kusama_runtime::RuntimeParameters
   **/
  StagingKusamaRuntimeRuntimeParameters: {
    _enum: {
      Inflation: 'StagingKusamaRuntimeDynamicParamsInflationParameters',
      Treasury: 'StagingKusamaRuntimeDynamicParamsTreasuryParameters'
    }
  },
  /**
   * Lookup173: staging_kusama_runtime::dynamic_params::inflation::Parameters
   **/
  StagingKusamaRuntimeDynamicParamsInflationParameters: {
    _enum: {
      MinInflation: '(StagingKusamaRuntimeDynamicParamsInflationMinInflation,Option<Perquintill>)',
      MaxInflation: '(StagingKusamaRuntimeDynamicParamsInflationMaxInflation,Option<Perquintill>)',
      IdealStake: '(StagingKusamaRuntimeDynamicParamsInflationIdealStake,Option<Perquintill>)',
      Falloff: '(StagingKusamaRuntimeDynamicParamsInflationFalloff,Option<Perquintill>)',
      UseAuctionSlots: '(StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots,Option<bool>)'
    }
  },
  /**
   * Lookup174: staging_kusama_runtime::dynamic_params::inflation::MinInflation
   **/
  StagingKusamaRuntimeDynamicParamsInflationMinInflation: 'Null',
  /**
   * Lookup177: staging_kusama_runtime::dynamic_params::inflation::MaxInflation
   **/
  StagingKusamaRuntimeDynamicParamsInflationMaxInflation: 'Null',
  /**
   * Lookup178: staging_kusama_runtime::dynamic_params::inflation::IdealStake
   **/
  StagingKusamaRuntimeDynamicParamsInflationIdealStake: 'Null',
  /**
   * Lookup179: staging_kusama_runtime::dynamic_params::inflation::Falloff
   **/
  StagingKusamaRuntimeDynamicParamsInflationFalloff: 'Null',
  /**
   * Lookup180: staging_kusama_runtime::dynamic_params::inflation::UseAuctionSlots
   **/
  StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots: 'Null',
  /**
   * Lookup182: staging_kusama_runtime::dynamic_params::treasury::Parameters
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryParameters: {
    _enum: {
      BurnPortion: '(StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion,Option<Permill>)',
      BurnDestination: '(StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination,Option<StagingKusamaRuntimeBurnDestinationAccount>)'
    }
  },
  /**
   * Lookup183: staging_kusama_runtime::dynamic_params::treasury::BurnPortion
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion: 'Null',
  /**
   * Lookup186: staging_kusama_runtime::dynamic_params::treasury::BurnDestination
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination: 'Null',
  /**
   * Lookup188: staging_kusama_runtime::BurnDestinationAccount
   **/
  StagingKusamaRuntimeBurnDestinationAccount: 'Option<AccountId32>',
  /**
   * Lookup209: kusama_runtime_constants::proxy::ProxyType
   **/
  KusamaRuntimeConstantsProxyProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', '__Unused4', 'CancelProxy', 'Auction', 'Society', 'NominationPools', 'Spokesperson', 'ParaRegistration']
  },
  /**
   * Lookup219: staging_kusama_runtime::NposCompactSolution24
   **/
  StagingKusamaRuntimeNposCompactSolution24: {
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
   * Lookup317: pallet_staking_async_ah_client::pallet::Call<T>
   **/
  PalletStakingAsyncAhClientCall: {
    _enum: {
      validator_set: {
        report: 'PalletStakingAsyncRcClientValidatorSetReport',
      },
      set_mode: {
        mode: 'PalletStakingAsyncAhClientOperatingMode',
      },
      force_on_migration_end: 'Null'
    }
  },
  /**
   * Lookup318: pallet_staking_async_rc_client::ValidatorSetReport<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncRcClientValidatorSetReport: {
    newValidatorSet: 'Vec<AccountId32>',
    id: 'u32',
    pruneUpTo: 'Option<u32>',
    leftover: 'bool'
  },
  /**
   * Lookup319: pallet_staking_async_ah_client::OperatingMode
   **/
  PalletStakingAsyncAhClientOperatingMode: {
    _enum: ['Passive', 'Buffered', 'Active']
  },
  /**
   * Lookup373: polkadot_primitives::vstaging::DisputeProof
   **/
  PolkadotPrimitivesVstagingDisputeProof: {
    timeSlot: 'PolkadotPrimitivesV8SlashingDisputesTimeSlot',
    kind: 'PolkadotPrimitivesVstagingDisputeOffenceKind',
    validatorIndex: 'u32',
    validatorId: 'PolkadotPrimitivesV8ValidatorAppPublic'
  },
  /**
   * Lookup375: polkadot_primitives::vstaging::DisputeOffenceKind
   **/
  PolkadotPrimitivesVstagingDisputeOffenceKind: {
    _enum: ['ForInvalidBacked', 'AgainstValid', 'ForInvalidApproved']
  },
  /**
   * Lookup502: pallet_rc_migrator::pallet::Call<T>
   **/
  PalletRcMigratorCall: {
    _enum: {
      force_set_stage: {
        stage: 'PalletRcMigratorMigrationStage',
      },
      schedule_migration: {
        start: 'FrameSupportScheduleDispatchTime',
        warmUp: 'FrameSupportScheduleDispatchTime',
        coolOff: 'FrameSupportScheduleDispatchTime',
        unsafeIgnoreStakingLockCheck: 'bool',
      },
      start_data_migration: 'Null',
      receive_query_response: {
        queryId: 'u64',
        response: 'StagingXcmV5Response',
      },
      resend_xcm: {
        queryId: 'u64',
      },
      set_unprocessed_msg_buffer: {
        _alias: {
          new_: 'new',
        },
        new_: 'Option<u32>',
      },
      set_ah_ump_queue_priority: {
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
      send_xcm_message: {
        dest: 'XcmVersionedLocation',
        message: 'XcmVersionedXcm',
      },
      preserve_accounts: {
        accounts: 'Vec<AccountId32>',
      },
      set_canceller: {
        _alias: {
          new_: 'new',
        },
        new_: 'Option<AccountId32>',
      },
      pause_migration: 'Null',
      cancel_migration: 'Null',
      vote_manager_multisig: {
        payload: 'PalletRcMigratorManagerMultisigVote',
        sig: 'SpRuntimeMultiSignature'
      }
    }
  },
  /**
   * Lookup503: pallet_rc_migrator::MigrationStage<sp_core::crypto::AccountId32, BlockNumber, BagsListScore, VotingClass, polkadot_runtime_common::impls::VersionedLocatableAsset, SchedulerBlockNumber>
   **/
  PalletRcMigratorMigrationStage: {
    _enum: {
      Pending: 'Null',
      MigrationPaused: 'Null',
      Scheduled: {
        start: 'u32',
      },
      WaitingForAh: 'Null',
      WarmUp: {
        endAt: 'u32',
      },
      Starting: 'Null',
      PureProxyCandidatesMigrationInit: 'Null',
      AccountsMigrationInit: 'Null',
      AccountsMigrationOngoing: {
        lastKey: 'Option<AccountId32>',
      },
      AccountsMigrationDone: 'Null',
      MultisigMigrationInit: 'Null',
      MultisigMigrationOngoing: {
        lastKey: 'Option<(AccountId32,[u8;32])>',
      },
      MultisigMigrationDone: 'Null',
      ClaimsMigrationInit: 'Null',
      ClaimsMigrationOngoing: {
        currentKey: 'Option<PalletRcMigratorClaimsClaimsStage>',
      },
      ClaimsMigrationDone: 'Null',
      ProxyMigrationInit: 'Null',
      ProxyMigrationProxies: {
        lastKey: 'Option<AccountId32>',
      },
      ProxyMigrationAnnouncements: {
        lastKey: 'Option<AccountId32>',
      },
      ProxyMigrationDone: 'Null',
      PreimageMigrationInit: 'Null',
      PreimageMigrationChunksOngoing: {
        lastKey: 'Option<((H256,u32),u32)>',
      },
      PreimageMigrationChunksDone: 'Null',
      PreimageMigrationRequestStatusOngoing: {
        nextKey: 'Option<H256>',
      },
      PreimageMigrationRequestStatusDone: 'Null',
      PreimageMigrationLegacyRequestStatusInit: 'Null',
      PreimageMigrationLegacyRequestStatusOngoing: {
        nextKey: 'Option<H256>',
      },
      PreimageMigrationLegacyRequestStatusDone: 'Null',
      PreimageMigrationDone: 'Null',
      NomPoolsMigrationInit: 'Null',
      NomPoolsMigrationOngoing: {
        nextKey: 'Option<PalletRcMigratorStakingNomPoolsNomPoolsStage>',
      },
      NomPoolsMigrationDone: 'Null',
      VestingMigrationInit: 'Null',
      VestingMigrationOngoing: {
        nextKey: 'Option<AccountId32>',
      },
      VestingMigrationDone: 'Null',
      DelegatedStakingMigrationInit: 'Null',
      DelegatedStakingMigrationOngoing: {
        nextKey: 'Option<PalletRcMigratorStakingDelegatedStakingDelegatedStakingStage>',
      },
      DelegatedStakingMigrationDone: 'Null',
      IndicesMigrationInit: 'Null',
      IndicesMigrationOngoing: {
        nextKey: 'Option<Null>',
      },
      IndicesMigrationDone: 'Null',
      ReferendaMigrationInit: 'Null',
      ReferendaMigrationOngoing: {
        lastKey: 'Option<PalletRcMigratorReferendaReferendaStage>',
      },
      ReferendaMigrationDone: 'Null',
      BagsListMigrationInit: 'Null',
      BagsListMigrationOngoing: {
        nextKey: 'Option<PalletRcMigratorStakingBagsListBagsListStage>',
      },
      BagsListMigrationDone: 'Null',
      SchedulerMigrationInit: 'Null',
      SchedulerMigrationOngoing: {
        lastKey: 'Option<PalletRcMigratorSchedulerSchedulerStage>',
      },
      SchedulerAgendaMigrationOngoing: {
        lastKey: 'Option<u32>',
      },
      SchedulerMigrationDone: 'Null',
      ConvictionVotingMigrationInit: 'Null',
      ConvictionVotingMigrationOngoing: {
        lastKey: 'Option<PalletRcMigratorConvictionVotingConvictionVotingStage>',
      },
      ConvictionVotingMigrationDone: 'Null',
      BountiesMigrationInit: 'Null',
      BountiesMigrationOngoing: {
        lastKey: 'Option<PalletRcMigratorBountiesBountiesStage>',
      },
      BountiesMigrationDone: 'Null',
      ChildBountiesMigrationInit: 'Null',
      ChildBountiesMigrationOngoing: {
        lastKey: 'Option<PalletRcMigratorChildBountiesChildBountiesStage>',
      },
      ChildBountiesMigrationDone: 'Null',
      AssetRateMigrationInit: 'Null',
      AssetRateMigrationOngoing: {
        lastKey: 'Option<PolkadotRuntimeCommonImplsVersionedLocatableAsset>',
      },
      AssetRateMigrationDone: 'Null',
      CrowdloanMigrationInit: 'Null',
      CrowdloanMigrationOngoing: {
        lastKey: 'Option<PalletRcMigratorCrowdloanCrowdloanStage>',
      },
      CrowdloanMigrationDone: 'Null',
      TreasuryMigrationInit: 'Null',
      TreasuryMigrationOngoing: {
        lastKey: 'Option<PalletRcMigratorTreasuryTreasuryStage>',
      },
      TreasuryMigrationDone: 'Null',
      RecoveryMigrationInit: 'Null',
      RecoveryMigrationOngoing: {
        lastKey: 'Option<PalletRcMigratorRecoveryRecoveryStage>',
      },
      RecoveryMigrationDone: 'Null',
      SocietyMigrationInit: 'Null',
      SocietyMigrationOngoing: {
        lastKey: 'Option<PalletRcMigratorSocietySocietyStage>',
      },
      SocietyMigrationDone: 'Null',
      StakingMigrationInit: 'Null',
      StakingMigrationOngoing: {
        nextKey: 'Option<PalletRcMigratorStakingStakingImplStakingStage>',
      },
      StakingMigrationDone: 'Null',
      CoolOff: {
        endAt: 'u32',
      },
      SignalMigrationFinish: 'Null',
      MigrationDone: 'Null'
    }
  },
  /**
   * Lookup507: pallet_rc_migrator::claims::ClaimsStage<sp_core::crypto::AccountId32>
   **/
  PalletRcMigratorClaimsClaimsStage: {
    _enum: {
      StorageValues: 'Null',
      Claims: 'Option<EthereumAddress>',
      Vesting: 'Option<EthereumAddress>',
      Signing: 'Option<EthereumAddress>',
      Preclaims: 'Option<AccountId32>',
      Finished: 'Null'
    }
  },
  /**
   * Lookup513: pallet_rc_migrator::staking::nom_pools::NomPoolsStage<sp_core::crypto::AccountId32>
   **/
  PalletRcMigratorStakingNomPoolsNomPoolsStage: {
    _enum: {
      StorageValues: 'Null',
      PoolMembers: 'Option<AccountId32>',
      BondedPools: 'Option<u32>',
      RewardPools: 'Option<u32>',
      SubPoolsStorage: 'Option<u32>',
      Metadata: 'Option<u32>',
      ReversePoolIdLookup: 'Option<AccountId32>',
      ClaimPermissions: 'Option<AccountId32>',
      Finished: 'Null'
    }
  },
  /**
   * Lookup515: pallet_rc_migrator::staking::delegated_staking::DelegatedStakingStage<sp_core::crypto::AccountId32>
   **/
  PalletRcMigratorStakingDelegatedStakingDelegatedStakingStage: {
    _enum: {
      Delegators: 'Option<AccountId32>',
      Agents: 'Option<AccountId32>',
      Finished: 'Null'
    }
  },
  /**
   * Lookup518: pallet_rc_migrator::referenda::ReferendaStage
   **/
  PalletRcMigratorReferendaReferendaStage: {
    _enum: {
      StorageValues: 'Null',
      Metadata: 'Option<u32>',
      ReferendumInfo: 'Option<u32>'
    }
  },
  /**
   * Lookup520: pallet_rc_migrator::staking::bags_list::BagsListStage<sp_core::crypto::AccountId32, Score>
   **/
  PalletRcMigratorStakingBagsListBagsListStage: {
    _enum: {
      ListNodes: 'Option<AccountId32>',
      ListBags: 'Option<u64>',
      Finished: 'Null'
    }
  },
  /**
   * Lookup522: pallet_rc_migrator::scheduler::SchedulerStage<BlockNumber>
   **/
  PalletRcMigratorSchedulerSchedulerStage: {
    _enum: {
      IncompleteSince: 'Null',
      Retries: 'Option<(u32,u32)>',
      Lookup: 'Option<[u8;32]>',
      Finished: 'Null'
    }
  },
  /**
   * Lookup525: pallet_rc_migrator::conviction_voting::ConvictionVotingStage<sp_core::crypto::AccountId32, Class>
   **/
  PalletRcMigratorConvictionVotingConvictionVotingStage: {
    _enum: {
      VotingFor: 'Option<(AccountId32,u16)>',
      ClassLocksFor: 'Option<AccountId32>',
      Finished: 'Null'
    }
  },
  /**
   * Lookup529: pallet_rc_migrator::bounties::BountiesStage
   **/
  PalletRcMigratorBountiesBountiesStage: {
    _enum: {
      BountyCount: 'Null',
      BountyApprovals: 'Null',
      BountyDescriptions: {
        lastKey: 'Option<u32>',
      },
      Bounties: {
        lastKey: 'Option<u32>',
      },
      Finished: 'Null'
    }
  },
  /**
   * Lookup531: pallet_rc_migrator::child_bounties::ChildBountiesStage
   **/
  PalletRcMigratorChildBountiesChildBountiesStage: {
    _enum: {
      ChildBountyCount: 'Null',
      ParentChildBounties: {
        parentId: 'Option<u32>',
      },
      ParentTotalChildBounties: {
        parentId: 'Option<u32>',
      },
      ChildBounties: {
        ids: 'Option<(u32,u32)>',
      },
      ChildBountyDescriptionsV1: {
        ids: 'Option<(u32,u32)>',
      },
      V0ToV1ChildBountyIds: {
        childId: 'Option<u32>',
      },
      ChildrenCuratorFees: {
        childId: 'Option<u32>',
      },
      Finished: 'Null'
    }
  },
  /**
   * Lookup534: pallet_rc_migrator::crowdloan::CrowdloanStage
   **/
  PalletRcMigratorCrowdloanCrowdloanStage: {
    _enum: {
      Setup: 'Null',
      LeaseReserve: {
        lastKey: 'Option<u32>',
      },
      CrowdloanContribution: {
        lastKey: 'Option<u32>',
      },
      CrowdloanReserve: 'Null',
      Finished: 'Null'
    }
  },
  /**
   * Lookup537: pallet_rc_migrator::treasury::TreasuryStage
   **/
  PalletRcMigratorTreasuryTreasuryStage: {
    _enum: {
      ProposalCount: 'Null',
      Proposals: 'Option<u32>',
      Approvals: 'Null',
      SpendCount: 'Null',
      Spends: 'Option<u32>',
      LastSpendPeriod: 'Null',
      Funds: 'Null',
      Finished: 'Null'
    }
  },
  /**
   * Lookup539: pallet_rc_migrator::recovery::RecoveryStage
   **/
  PalletRcMigratorRecoveryRecoveryStage: {
    _enum: {
      Recoverable: 'Option<AccountId32>',
      ActiveRecoveries: 'Option<(AccountId32,AccountId32)>',
      Proxy: 'Option<AccountId32>',
      Finished: 'Null'
    }
  },
  /**
   * Lookup543: pallet_rc_migrator::society::SocietyStage
   **/
  PalletRcMigratorSocietySocietyStage: {
    _enum: {
      Values: 'Null',
      Members: 'Option<AccountId32>',
      Payouts: 'Option<AccountId32>',
      MemberByIndex: 'Option<u32>',
      SuspendedMembers: 'Option<AccountId32>',
      Candidates: 'Option<AccountId32>',
      Votes: 'Option<(AccountId32,AccountId32)>',
      VoteClearCursor: 'Option<AccountId32>',
      DefenderVotes: 'Option<(u32,AccountId32)>',
      Finished: 'Null'
    }
  },
  /**
   * Lookup547: pallet_rc_migrator::staking::staking_impl::StakingStage<sp_core::crypto::AccountId32>
   **/
  PalletRcMigratorStakingStakingImplStakingStage: {
    _enum: {
      Values: 'Null',
      Invulnerables: 'Null',
      Bonded: 'Option<AccountId32>',
      Ledger: 'Option<AccountId32>',
      Payee: 'Option<AccountId32>',
      Validators: 'Option<AccountId32>',
      Nominators: 'Option<AccountId32>',
      VirtualStakers: 'Option<AccountId32>',
      ErasStakersOverview: 'Option<(u32,AccountId32)>',
      ErasStakersPaged: 'Option<(u32,AccountId32,u32)>',
      ClaimedRewards: 'Option<(u32,AccountId32)>',
      ErasValidatorPrefs: 'Option<(u32,AccountId32)>',
      ErasValidatorReward: 'Option<u32>',
      ErasRewardPoints: 'Option<u32>',
      ErasTotalStake: 'Option<u32>',
      UnappliedSlashes: 'Option<u32>',
      BondedEras: 'Null',
      ValidatorSlashInEra: 'Option<(u32,AccountId32)>',
      NominatorSlashInEra: 'Option<(u32,AccountId32)>',
      SlashingSpans: 'Option<AccountId32>',
      SpanSlash: 'Option<(AccountId32,u32)>',
      Finished: 'Null'
    }
  },
  /**
   * Lookup552: pallet_rc_migrator::types::QueuePriority<BlockNumber>
   **/
  PalletRcMigratorQueuePriority: {
    _enum: {
      Config: 'Null',
      OverrideConfig: '(u32,u32)',
      Disabled: 'Null'
    }
  },
  /**
   * Lookup553: pallet_rc_migrator::pallet::ManagerMultisigVote<T>
   **/
  PalletRcMigratorManagerMultisigVote: {
    who: 'SpRuntimeMultiSigner',
    call: 'Call',
    round: 'u32'
  },
  /**
   * Lookup566: staging_kusama_runtime::RuntimeParametersKey
   **/
  StagingKusamaRuntimeRuntimeParametersKey: {
    _enum: {
      Inflation: 'StagingKusamaRuntimeDynamicParamsInflationParametersKey',
      Treasury: 'StagingKusamaRuntimeDynamicParamsTreasuryParametersKey'
    }
  },
  /**
   * Lookup567: staging_kusama_runtime::dynamic_params::inflation::ParametersKey
   **/
  StagingKusamaRuntimeDynamicParamsInflationParametersKey: {
    _enum: ['MinInflation', 'MaxInflation', 'IdealStake', 'Falloff', 'UseAuctionSlots']
  },
  /**
   * Lookup568: staging_kusama_runtime::dynamic_params::treasury::ParametersKey
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryParametersKey: {
    _enum: ['BurnPortion', 'BurnDestination']
  },
  /**
   * Lookup570: staging_kusama_runtime::RuntimeParametersValue
   **/
  StagingKusamaRuntimeRuntimeParametersValue: {
    _enum: {
      Inflation: 'StagingKusamaRuntimeDynamicParamsInflationParametersValue',
      Treasury: 'StagingKusamaRuntimeDynamicParamsTreasuryParametersValue'
    }
  },
  /**
   * Lookup571: staging_kusama_runtime::dynamic_params::inflation::ParametersValue
   **/
  StagingKusamaRuntimeDynamicParamsInflationParametersValue: {
    _enum: {
      MinInflation: 'Perquintill',
      MaxInflation: 'Perquintill',
      IdealStake: 'Perquintill',
      Falloff: 'Perquintill',
      UseAuctionSlots: 'bool'
    }
  },
  /**
   * Lookup572: staging_kusama_runtime::dynamic_params::treasury::ParametersValue
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryParametersValue: {
    _enum: {
      BurnPortion: 'Permill',
      BurnDestination: 'StagingKusamaRuntimeBurnDestinationAccount'
    }
  },
  /**
   * Lookup579: pallet_recovery::DepositKind<staging_kusama_runtime::Runtime>
   **/
  PalletRecoveryDepositKind: {
    _enum: {
      RecoveryConfig: 'Null',
      ActiveRecoveryFor: 'AccountId32'
    }
  },
  /**
   * Lookup580: staging_kusama_runtime::Runtime
   **/
  StagingKusamaRuntimeRuntime: 'Null',
  /**
   * Lookup598: pallet_staking_async_ah_client::pallet::Event<T>
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
      Unexpected: 'PalletStakingAsyncAhClientUnexpectedKind'
    }
  },
  /**
   * Lookup599: pallet_staking_async_ah_client::pallet::UnexpectedKind
   **/
  PalletStakingAsyncAhClientUnexpectedKind: {
    _enum: ['ReceivedValidatorSetWhilePassive', 'UnexpectedModeTransition', 'SessionReportSendFailed', 'SessionReportDropped', 'OffenceSendFailed', 'ValidatorPointDropped']
  },
  /**
   * Lookup617: staging_xcm::v5::traits::InstructionError
   **/
  StagingXcmV5TraitsInstructionError: {
    index: 'u8',
    error: 'XcmV5TraitsError'
  },
  /**
   * Lookup622: pallet_rc_migrator::pallet::Event<T>
   **/
  PalletRcMigratorEvent: {
    _enum: {
      StageTransition: {
        _alias: {
          new_: 'new',
        },
        old: 'PalletRcMigratorMigrationStage',
        new_: 'PalletRcMigratorMigrationStage',
      },
      AssetHubMigrationStarted: 'Null',
      AssetHubMigrationFinished: 'Null',
      QueryResponseReceived: {
        queryId: 'u64',
        response: 'XcmV3MaybeErrorCode',
      },
      XcmResendAttempt: {
        queryId: 'u64',
        sendError: 'Option<XcmV3TraitsSendError>',
      },
      UnprocessedMsgBufferSet: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
        old: 'u32',
      },
      AhUmpQueuePrioritySet: {
        prioritized: 'bool',
        cycleBlock: 'u32',
        cyclePeriod: 'u32',
      },
      AhUmpQueuePriorityConfigSet: {
        _alias: {
          new_: 'new',
        },
        old: 'PalletRcMigratorQueuePriority',
        new_: 'PalletRcMigratorQueuePriority',
      },
      MigratedBalanceRecordSet: {
        kept: 'u128',
        migrated: 'u128',
      },
      MigratedBalanceConsumed: {
        kept: 'u128',
        migrated: 'u128',
      },
      ManagerSet: {
        _alias: {
          new_: 'new',
        },
        old: 'Option<AccountId32>',
        new_: 'Option<AccountId32>',
      },
      XcmSent: {
        origin: 'StagingXcmV5Location',
        destination: 'StagingXcmV5Location',
        message: 'StagingXcmV5Xcm',
        messageId: '[u8;32]',
      },
      StakingElectionsPaused: 'Null',
      AccountsPreserved: {
        accounts: 'Vec<AccountId32>',
      },
      CancellerSet: {
        _alias: {
          new_: 'new',
        },
        old: 'Option<AccountId32>',
        new_: 'Option<AccountId32>',
      },
      MigrationPaused: {
        pauseStage: 'PalletRcMigratorMigrationStage',
      },
      MigrationCancelled: 'Null',
      PureAccountsIndexed: {
        numPureAccounts: 'u32',
      },
      ManagerMultisigDispatched: {
        res: 'Result<Null, SpRuntimeDispatchError>',
      },
      ManagerMultisigVoted: {
        votes: 'u32'
      }
    }
  },
  /**
   * Lookup668: staging_kusama_runtime::RuntimeHoldReason
   **/
  StagingKusamaRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      Staking: 'PalletStakingPalletHoldReason',
      __Unused7: 'Null',
      Session: 'PalletSessionHoldReason',
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
      Preimage: 'PalletPreimageHoldReason',
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
      DelegatedStaking: 'PalletDelegatedStakingHoldReason',
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
      XcmPallet: 'PalletXcmHoldReason'
    }
  },
  /**
   * Lookup670: pallet_session::pallet::HoldReason
   **/
  PalletSessionHoldReason: {
    _enum: ['Keys']
  },
  /**
   * Lookup677: staging_kusama_runtime::RuntimeFreezeReason
   **/
  StagingKusamaRuntimeRuntimeFreezeReason: {
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
      NominationPools: 'PalletNominationPoolsFreezeReason'
    }
  },
  /**
   * Lookup824: frame_election_provider_support::BoundedSupports<sp_core::crypto::AccountId32, BOuter, BInner>
   **/
  FrameElectionProviderSupportBoundedSupports: 'Vec<(AccountId32,FrameElectionProviderSupportBoundedSupport)>',
  /**
   * Lookup827: frame_election_provider_support::BoundedSupport<sp_core::crypto::AccountId32, Bound>
   **/
  FrameElectionProviderSupportBoundedSupport: {
    total: 'u128',
    voters: 'Vec<(AccountId32,u128)>'
  },
  /**
   * Lookup869: pallet_staking_async_rc_client::SessionReport<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncRcClientSessionReport: {
    endIndex: 'u32',
    validatorPoints: 'Vec<(AccountId32,u32)>',
    activationTimestamp: 'Option<(u64,u32)>',
    leftover: 'bool'
  },
  /**
   * Lookup873: pallet_staking_async_rc_client::Offence<sp_core::crypto::AccountId32>
   **/
  PalletStakingAsyncRcClientOffence: {
    offender: 'AccountId32',
    reporters: 'Vec<AccountId32>',
    slashFraction: 'Perbill'
  },
  /**
   * Lookup875: pallet_staking_async_ah_client::pallet::Error<T>
   **/
  PalletStakingAsyncAhClientError: {
    _enum: ['Blocked']
  },
  /**
   * Lookup920: polkadot_runtime_parachains::paras::AuthorizedCodeHashAndExpiry<T>
   **/
  PolkadotRuntimeParachainsParasAuthorizedCodeHashAndExpiry: {
    codeHash: 'H256',
    expireAt: 'u32'
  },
  /**
   * Lookup945: polkadot_primitives::vstaging::PendingSlashes
   **/
  PolkadotPrimitivesVstagingPendingSlashes: {
    _alias: {
      keys_: 'keys'
    },
    keys_: 'BTreeMap<u32, PolkadotPrimitivesV8ValidatorAppPublic>',
    kind: 'PolkadotPrimitivesVstagingDisputeOffenceKind'
  },
  /**
   * Lookup1013: pallet_xcm::errors::ExecutionError
   **/
  PalletXcmErrorsExecutionError: {
    _enum: ['Overflow', 'Unimplemented', 'UntrustedReserveLocation', 'UntrustedTeleportLocation', 'LocationFull', 'LocationNotInvertible', 'BadOrigin', 'InvalidLocation', 'AssetNotFound', 'FailedToTransactAsset', 'NotWithdrawable', 'LocationCannotHold', 'ExceedsMaxMessageSize', 'DestinationUnsupported', 'Transport', 'Unroutable', 'UnknownClaim', 'FailedToDecode', 'MaxWeightInvalid', 'NotHoldingFees', 'TooExpensive', 'Trap', 'ExpectationFalse', 'PalletNotFound', 'NameMismatch', 'VersionIncompatible', 'HoldingWouldOverflow', 'ExportError', 'ReanchorFailed', 'NoDeal', 'FeesNotMet', 'LockError', 'NoPermission', 'Unanchored', 'NotDepositable', 'TooManyAssets', 'UnhandledXcmVersion', 'WeightLimitReached', 'Barrier', 'WeightNotComputable', 'ExceedsStackLimit']
  },
  /**
   * Lookup1026: pallet_rc_migrator::accounts::AccountState<Balance>
   **/
  PalletRcMigratorAccountsAccountState: {
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
   * Lookup1027: pallet_rc_migrator::accounts::MigratedBalances<Balance>
   **/
  PalletRcMigratorAccountsMigratedBalances: {
    kept: 'u128',
    migrated: 'u128'
  },
  /**
   * Lookup1029: pallet_rc_migrator::pallet::Error<T>
   **/
  PalletRcMigratorError: {
    _enum: ['Unreachable', 'OutOfWeight', 'XcmError', 'FailedToWithdrawAccount', 'PastBlockNumber', 'EraEndsTooSoon', 'BalanceOverflow', 'BalanceUnderflow', 'InvalidQueryResponse', 'QueryNotFound', 'XcmSendError', 'UnreachableStage', 'InvalidParameter', 'AhUmpQueuePriorityAlreadySet', 'AccountReferenced', 'BadXcmVersion', 'InvalidOrigin', 'InvalidStageTransition']
  },
  /**
   * Lookup1159: staging_kusama_runtime::RuntimeError
   **/
  StagingKusamaRuntimeRuntimeError: {
    _enum: {
      System: 'FrameSystemError',
      Babe: 'PalletBabeError',
      __Unused2: 'Null',
      Indices: 'PalletIndicesError',
      Balances: 'PalletBalancesError',
      __Unused5: 'Null',
      Staking: 'PalletStakingPalletError',
      __Unused7: 'Null',
      Session: 'PalletSessionError',
      __Unused9: 'Null',
      Grandpa: 'PalletGrandpaError',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      Treasury: 'PalletTreasuryError',
      Claims: 'PolkadotRuntimeCommonClaimsPalletError',
      ConvictionVoting: 'PalletConvictionVotingError',
      Referenda: 'PalletReferendaError',
      FellowshipCollective: 'PalletRankedCollectiveError',
      FellowshipReferenda: 'PalletReferendaError',
      Utility: 'PalletUtilityError',
      __Unused25: 'Null',
      Society: 'PalletSocietyError',
      Recovery: 'PalletRecoveryError',
      Vesting: 'PalletVestingError',
      Scheduler: 'PalletSchedulerError',
      Proxy: 'PalletProxyError',
      Multisig: 'PalletMultisigError',
      Preimage: 'PalletPreimageError',
      __Unused33: 'Null',
      __Unused34: 'Null',
      Bounties: 'PalletBountiesError',
      __Unused36: 'Null',
      ElectionProviderMultiPhase: 'PalletElectionProviderMultiPhaseError',
      __Unused38: 'Null',
      VoterList: 'PalletBagsListError',
      ChildBounties: 'PalletChildBountiesError',
      NominationPools: 'PalletNominationPoolsError',
      FastUnstake: 'PalletFastUnstakeError',
      __Unused43: 'Null',
      Whitelist: 'PalletWhitelistError',
      __Unused45: 'Null',
      __Unused46: 'Null',
      DelegatedStaking: 'PalletDelegatedStakingError',
      StakingAhClient: 'PalletStakingAsyncAhClientError',
      __Unused49: 'Null',
      __Unused50: 'Null',
      Configuration: 'PolkadotRuntimeParachainsConfigurationPalletError',
      __Unused52: 'Null',
      ParaInclusion: 'PolkadotRuntimeParachainsInclusionPalletError',
      ParaInherent: 'PolkadotRuntimeParachainsParasInherentPalletError',
      __Unused55: 'Null',
      Paras: 'PolkadotRuntimeParachainsParasPalletError',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      Hrmp: 'PolkadotRuntimeParachainsHrmpPalletError',
      __Unused61: 'Null',
      ParasDisputes: 'PolkadotRuntimeParachainsDisputesPalletError',
      ParasSlashing: 'PolkadotRuntimeParachainsDisputesSlashingPalletError',
      OnDemandAssignmentProvider: 'PolkadotRuntimeParachainsOnDemandPalletError',
      CoretimeAssignmentProvider: 'PolkadotRuntimeParachainsAssignerCoretimePalletError',
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
      __Unused98: 'Null',
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
