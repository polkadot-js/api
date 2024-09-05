// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup125: staging_kusama_runtime::SessionKeys
   **/
  StagingKusamaRuntimeSessionKeys: {
    grandpa: 'SpConsensusGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    paraValidator: 'PolkadotPrimitivesV7ValidatorAppPublic',
    paraAssignment: 'PolkadotPrimitivesV7AssignmentAppPublic',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic',
    beefy: 'SpConsensusBeefyEcdsaCryptoPublic'
  },
  /**
   * Lookup126: polkadot_primitives::v7::validator_app::Public
   **/
  PolkadotPrimitivesV7ValidatorAppPublic: '[u8;32]',
  /**
   * Lookup127: polkadot_primitives::v7::assignment_app::Public
   **/
  PolkadotPrimitivesV7AssignmentAppPublic: '[u8;32]',
  /**
   * Lookup150: staging_kusama_runtime::OriginCaller
   **/
  StagingKusamaRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Void: 'SpCoreVoid',
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
   * Lookup152: staging_kusama_runtime::governance::origins::pallet_custom_origins::Origin
   **/
  StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
    _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'AuctionAdmin', 'LeaseAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'SmallTipper', 'BigTipper', 'SmallSpender', 'MediumSpender', 'BigSpender', 'WhitelistedCaller', 'FellowshipInitiates', 'Fellows', 'FellowshipExperts', 'FellowshipMasters', 'Fellowship1Dan', 'Fellowship2Dan', 'Fellowship3Dan', 'Fellowship4Dan', 'Fellowship5Dan', 'Fellowship6Dan', 'Fellowship7Dan', 'Fellowship8Dan', 'Fellowship9Dan', 'WishForChange']
  },
  /**
   * Lookup163: staging_kusama_runtime::RuntimeParameters
   **/
  StagingKusamaRuntimeRuntimeParameters: {
    _enum: {
      Inflation: 'StagingKusamaRuntimeDynamicParamsInflationParameters'
    }
  },
  /**
   * Lookup164: staging_kusama_runtime::dynamic_params::inflation::Parameters
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
   * Lookup165: staging_kusama_runtime::dynamic_params::inflation::MinInflation
   **/
  StagingKusamaRuntimeDynamicParamsInflationMinInflation: 'Null',
  /**
   * Lookup168: staging_kusama_runtime::dynamic_params::inflation::MaxInflation
   **/
  StagingKusamaRuntimeDynamicParamsInflationMaxInflation: 'Null',
  /**
   * Lookup169: staging_kusama_runtime::dynamic_params::inflation::IdealStake
   **/
  StagingKusamaRuntimeDynamicParamsInflationIdealStake: 'Null',
  /**
   * Lookup170: staging_kusama_runtime::dynamic_params::inflation::Falloff
   **/
  StagingKusamaRuntimeDynamicParamsInflationFalloff: 'Null',
  /**
   * Lookup171: staging_kusama_runtime::dynamic_params::inflation::UseAuctionSlots
   **/
  StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots: 'Null',
  /**
   * Lookup192: staging_kusama_runtime::ProxyType
   **/
  StagingKusamaRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', '__Unused4', 'CancelProxy', 'Auction', 'Society', 'NominationPools', 'Spokesperson']
  },
  /**
   * Lookup202: staging_kusama_runtime::NposCompactSolution24
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
   * Lookup303: polkadot_primitives::v7::async_backing::AsyncBackingParams
   **/
  PolkadotPrimitivesV7AsyncBackingAsyncBackingParams: {
    maxCandidateDepth: 'u32',
    allowedAncestryLen: 'u32'
  },
  /**
   * Lookup304: polkadot_primitives::v7::executor_params::ExecutorParams
   **/
  PolkadotPrimitivesV7ExecutorParams: 'Vec<PolkadotPrimitivesV7ExecutorParamsExecutorParam>',
  /**
   * Lookup306: polkadot_primitives::v7::executor_params::ExecutorParam
   **/
  PolkadotPrimitivesV7ExecutorParamsExecutorParam: {
    _enum: {
      __Unused0: 'Null',
      MaxMemoryPages: 'u32',
      StackLogicalMax: 'u32',
      StackNativeMax: 'u32',
      PrecheckingMaxMemory: 'u64',
      PvfPrepTimeout: '(PolkadotPrimitivesV7PvfPrepKind,u64)',
      PvfExecTimeout: '(PolkadotPrimitivesV7PvfExecKind,u64)',
      WasmExtBulkMemory: 'Null'
    }
  },
  /**
   * Lookup307: polkadot_primitives::v7::PvfPrepKind
   **/
  PolkadotPrimitivesV7PvfPrepKind: {
    _enum: ['Precheck', 'Prepare']
  },
  /**
   * Lookup308: polkadot_primitives::v7::PvfExecKind
   **/
  PolkadotPrimitivesV7PvfExecKind: {
    _enum: ['Backing', 'Approval']
  },
  /**
   * Lookup309: polkadot_primitives::v7::ApprovalVotingParams
   **/
  PolkadotPrimitivesV7ApprovalVotingParams: {
    maxApprovalCoalesceCount: 'u32'
  },
  /**
   * Lookup310: polkadot_primitives::vstaging::SchedulerParams<BlockNumber>
   **/
  PolkadotPrimitivesVstagingSchedulerParams: {
    groupRotationFrequency: 'u32',
    parasAvailabilityPeriod: 'u32',
    maxValidatorsPerCore: 'Option<u32>',
    lookahead: 'u32',
    numCores: 'u32',
    maxAvailabilityTimeouts: 'u32',
    onDemandQueueMaxSize: 'u32',
    onDemandTargetQueueUtilization: 'Perbill',
    onDemandFeeVariability: 'Perbill',
    onDemandBaseFee: 'u128',
    ttl: 'u32'
  },
  /**
   * Lookup314: polkadot_primitives::v7::InherentData<sp_runtime::generic::header::Header<Number, Hash>>
   **/
  PolkadotPrimitivesV7InherentData: {
    bitfields: 'Vec<PolkadotPrimitivesV7SignedUncheckedSigned>',
    backedCandidates: 'Vec<PolkadotPrimitivesV7BackedCandidate>',
    disputes: 'Vec<PolkadotPrimitivesV7DisputeStatementSet>',
    parentHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup316: polkadot_primitives::v7::signed::UncheckedSigned<polkadot_primitives::v7::AvailabilityBitfield, polkadot_primitives::v7::AvailabilityBitfield>
   **/
  PolkadotPrimitivesV7SignedUncheckedSigned: {
    payload: 'BitVec',
    validatorIndex: 'u32',
    signature: 'PolkadotPrimitivesV7ValidatorAppSignature'
  },
  /**
   * Lookup321: polkadot_primitives::v7::validator_app::Signature
   **/
  PolkadotPrimitivesV7ValidatorAppSignature: '[u8;64]',
  /**
   * Lookup323: polkadot_primitives::v7::BackedCandidate<primitive_types::H256>
   **/
  PolkadotPrimitivesV7BackedCandidate: {
    candidate: 'PolkadotPrimitivesV7CommittedCandidateReceipt',
    validityVotes: 'Vec<PolkadotPrimitivesV7ValidityAttestation>',
    validatorIndices: 'BitVec'
  },
  /**
   * Lookup324: polkadot_primitives::v7::CommittedCandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV7CommittedCandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV7CandidateDescriptor',
    commitments: 'PolkadotPrimitivesV7CandidateCommitments'
  },
  /**
   * Lookup325: polkadot_primitives::v7::CandidateDescriptor<primitive_types::H256>
   **/
  PolkadotPrimitivesV7CandidateDescriptor: {
    paraId: 'u32',
    relayParent: 'H256',
    collator: 'PolkadotPrimitivesV7CollatorAppPublic',
    persistedValidationDataHash: 'H256',
    povHash: 'H256',
    erasureRoot: 'H256',
    signature: 'PolkadotPrimitivesV7CollatorAppSignature',
    paraHead: 'H256',
    validationCodeHash: 'H256'
  },
  /**
   * Lookup326: polkadot_primitives::v7::collator_app::Public
   **/
  PolkadotPrimitivesV7CollatorAppPublic: '[u8;32]',
  /**
   * Lookup327: polkadot_primitives::v7::collator_app::Signature
   **/
  PolkadotPrimitivesV7CollatorAppSignature: '[u8;64]',
  /**
   * Lookup329: polkadot_primitives::v7::CandidateCommitments<N>
   **/
  PolkadotPrimitivesV7CandidateCommitments: {
    upwardMessages: 'Vec<Bytes>',
    horizontalMessages: 'Vec<PolkadotCorePrimitivesOutboundHrmpMessage>',
    newValidationCode: 'Option<Bytes>',
    headData: 'Bytes',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'u32'
  },
  /**
   * Lookup338: polkadot_primitives::v7::ValidityAttestation
   **/
  PolkadotPrimitivesV7ValidityAttestation: {
    _enum: {
      __Unused0: 'Null',
      Implicit: 'PolkadotPrimitivesV7ValidatorAppSignature',
      Explicit: 'PolkadotPrimitivesV7ValidatorAppSignature'
    }
  },
  /**
   * Lookup340: polkadot_primitives::v7::DisputeStatementSet
   **/
  PolkadotPrimitivesV7DisputeStatementSet: {
    candidateHash: 'H256',
    session: 'u32',
    statements: 'Vec<(PolkadotPrimitivesV7DisputeStatement,u32,PolkadotPrimitivesV7ValidatorAppSignature)>'
  },
  /**
   * Lookup344: polkadot_primitives::v7::DisputeStatement
   **/
  PolkadotPrimitivesV7DisputeStatement: {
    _enum: {
      Valid: 'PolkadotPrimitivesV7ValidDisputeStatementKind',
      Invalid: 'PolkadotPrimitivesV7InvalidDisputeStatementKind'
    }
  },
  /**
   * Lookup345: polkadot_primitives::v7::ValidDisputeStatementKind
   **/
  PolkadotPrimitivesV7ValidDisputeStatementKind: {
    _enum: {
      Explicit: 'Null',
      BackingSeconded: 'H256',
      BackingValid: 'H256',
      ApprovalChecking: 'Null',
      ApprovalCheckingMultipleCandidates: 'Vec<H256>'
    }
  },
  /**
   * Lookup347: polkadot_primitives::v7::InvalidDisputeStatementKind
   **/
  PolkadotPrimitivesV7InvalidDisputeStatementKind: {
    _enum: ['Explicit']
  },
  /**
   * Lookup349: polkadot_primitives::v7::PvfCheckStatement
   **/
  PolkadotPrimitivesV7PvfCheckStatement: {
    accept: 'bool',
    subject: 'H256',
    sessionIndex: 'u32',
    validatorIndex: 'u32'
  },
  /**
   * Lookup355: polkadot_primitives::v7::slashing::DisputeProof
   **/
  PolkadotPrimitivesV7SlashingDisputeProof: {
    timeSlot: 'PolkadotPrimitivesV7SlashingDisputesTimeSlot',
    kind: 'PolkadotPrimitivesV7SlashingSlashingOffenceKind',
    validatorIndex: 'u32',
    validatorId: 'PolkadotPrimitivesV7ValidatorAppPublic'
  },
  /**
   * Lookup356: polkadot_primitives::v7::slashing::DisputesTimeSlot
   **/
  PolkadotPrimitivesV7SlashingDisputesTimeSlot: {
    sessionIndex: 'u32',
    candidateHash: 'H256'
  },
  /**
   * Lookup357: polkadot_primitives::v7::slashing::SlashingOffenceKind
   **/
  PolkadotPrimitivesV7SlashingSlashingOffenceKind: {
    _enum: ['ForInvalid', 'AgainstValid']
  },
  /**
   * Lookup358: polkadot_runtime_parachains::assigner_on_demand::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsAssignerOnDemandPalletCall: {
    _enum: {
      place_order_allow_death: {
        maxAmount: 'u128',
        paraId: 'u32',
      },
      place_order_keep_alive: {
        maxAmount: 'u128',
        paraId: 'u32'
      }
    }
  },
  /**
   * Lookup368: polkadot_runtime_parachains::coretime::pallet::Call<T>
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
      __Unused3: 'Null',
      assign_core: {
        core: 'u16',
        begin: 'u32',
        assignment: 'Vec<(PalletBrokerCoretimeInterfaceCoreAssignment,u16)>',
        endHint: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup414: xcm::v3::OriginKind
   **/
  XcmV3OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup479: staging_kusama_runtime::RuntimeParametersKey
   **/
  StagingKusamaRuntimeRuntimeParametersKey: {
    _enum: {
      Inflation: 'StagingKusamaRuntimeDynamicParamsInflationParametersKey'
    }
  },
  /**
   * Lookup480: staging_kusama_runtime::dynamic_params::inflation::ParametersKey
   **/
  StagingKusamaRuntimeDynamicParamsInflationParametersKey: {
    _enum: ['MinInflation', 'MaxInflation', 'IdealStake', 'Falloff', 'UseAuctionSlots']
  },
  /**
   * Lookup482: staging_kusama_runtime::RuntimeParametersValue
   **/
  StagingKusamaRuntimeRuntimeParametersValue: {
    _enum: {
      Inflation: 'StagingKusamaRuntimeDynamicParamsInflationParametersValue'
    }
  },
  /**
   * Lookup483: staging_kusama_runtime::dynamic_params::inflation::ParametersValue
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
   * Lookup508: polkadot_primitives::v7::CandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV7CandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV7CandidateDescriptor',
    commitmentsHash: 'H256'
  },
  /**
   * Lookup516: polkadot_runtime_parachains::assigner_on_demand::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsAssignerOnDemandPalletEvent: {
    _enum: {
      OnDemandOrderPlaced: {
        paraId: 'u32',
        spotPrice: 'u128',
        orderedBy: 'AccountId32',
      },
      SpotPriceSet: {
        spotPrice: 'u128'
      }
    }
  },
  /**
   * Lookup521: polkadot_runtime_parachains::coretime::pallet::Event<T>
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
   * Lookup570: staging_kusama_runtime::RuntimeHoldReason
   **/
  StagingKusamaRuntimeRuntimeHoldReason: {
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
      Preimage: 'PalletPreimageHoldReason',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      Nis: 'PalletNisHoldReason'
    }
  },
  /**
   * Lookup576: staging_kusama_runtime::RuntimeFreezeReason
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
   * Lookup749: frame_support::traits::tokens::misc::IdAmount<Id, Balance>
   **/
  FrameSupportTokensMiscIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup791: polkadot_primitives::v7::ScrapedOnChainVotes<primitive_types::H256>
   **/
  PolkadotPrimitivesV7ScrapedOnChainVotes: {
    session: 'u32',
    backingValidatorsPerCandidate: 'Vec<(PolkadotPrimitivesV7CandidateReceipt,Vec<(u32,PolkadotPrimitivesV7ValidityAttestation)>)>',
    disputes: 'Vec<PolkadotPrimitivesV7DisputeStatementSet>'
  },
  /**
   * Lookup809: polkadot_runtime_parachains::paras::UpgradeStrategy
   **/
  PolkadotRuntimeParachainsParasUpgradeStrategy: {
    _enum: ['SetGoAheadSignal', 'ApplyAtExpectedBlock']
  },
  /**
   * Lookup818: polkadot_primitives::v7::UpgradeGoAhead
   **/
  PolkadotPrimitivesV7UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup819: polkadot_primitives::v7::UpgradeRestriction
   **/
  PolkadotPrimitivesV7UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup835: polkadot_primitives::v7::SessionInfo
   **/
  PolkadotPrimitivesV7SessionInfo: {
    activeValidatorIndices: 'Vec<u32>',
    randomSeed: '[u8;32]',
    disputePeriod: 'u32',
    validators: 'PolkadotPrimitivesV7IndexedVecValidatorIndex',
    discoveryKeys: 'Vec<SpAuthorityDiscoveryAppPublic>',
    assignmentKeys: 'Vec<PolkadotPrimitivesV7AssignmentAppPublic>',
    validatorGroups: 'PolkadotPrimitivesV7IndexedVecGroupIndex',
    nCores: 'u32',
    zerothDelayTrancheWidth: 'u32',
    relayVrfModuloSamples: 'u32',
    nDelayTranches: 'u32',
    noShowSlots: 'u32',
    neededApprovals: 'u32'
  },
  /**
   * Lookup836: polkadot_primitives::v7::IndexedVec<polkadot_primitives::v7::ValidatorIndex, polkadot_primitives::v7::validator_app::Public>
   **/
  PolkadotPrimitivesV7IndexedVecValidatorIndex: 'Vec<PolkadotPrimitivesV7ValidatorAppPublic>',
  /**
   * Lookup837: polkadot_primitives::v7::IndexedVec<polkadot_primitives::v7::GroupIndex, V>
   **/
  PolkadotPrimitivesV7IndexedVecGroupIndex: 'Vec<Vec<u32>>',
  /**
   * Lookup839: polkadot_primitives::v7::DisputeState<N>
   **/
  PolkadotPrimitivesV7DisputeState: {
    validatorsFor: 'BitVec',
    validatorsAgainst: 'BitVec',
    start: 'u32',
    concludedAt: 'Option<u32>'
  },
  /**
   * Lookup842: polkadot_primitives::v7::slashing::PendingSlashes
   **/
  PolkadotPrimitivesV7SlashingPendingSlashes: {
    _alias: {
      keys_: 'keys'
    },
    keys_: 'BTreeMap<u32, PolkadotPrimitivesV7ValidatorAppPublic>',
    kind: 'PolkadotPrimitivesV7SlashingSlashingOffenceKind'
  },
  /**
   * Lookup847: polkadot_runtime_parachains::assigner_on_demand::types::CoreAffinityCount
   **/
  PolkadotRuntimeParachainsAssignerOnDemandTypesCoreAffinityCount: {
    coreIndex: 'u32',
    count: 'u32'
  },
  /**
   * Lookup848: polkadot_runtime_parachains::assigner_on_demand::types::QueueStatusType
   **/
  PolkadotRuntimeParachainsAssignerOnDemandTypesQueueStatusType: {
    traffic: 'u128',
    nextIndex: 'u32',
    smallestIndex: 'u32',
    freedIndices: 'BinaryHeapReverseQueueIndex'
  },
  /**
   * Lookup850: BinaryHeap<polkadot_runtime_parachains::assigner_on_demand::types::ReverseQueueIndex>
   **/
  BinaryHeapReverseQueueIndex: 'Vec<u32>',
  /**
   * Lookup853: BinaryHeap<polkadot_runtime_parachains::assigner_on_demand::types::EnqueuedOrder>
   **/
  BinaryHeapEnqueuedOrder: 'Vec<PolkadotRuntimeParachainsAssignerOnDemandTypesEnqueuedOrder>',
  /**
   * Lookup854: polkadot_runtime_parachains::assigner_on_demand::types::EnqueuedOrder
   **/
  PolkadotRuntimeParachainsAssignerOnDemandTypesEnqueuedOrder: {
    paraId: 'u32',
    idx: 'u32'
  },
  /**
   * Lookup858: polkadot_runtime_parachains::assigner_on_demand::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsAssignerOnDemandPalletError: {
    _enum: ['QueueFull', 'SpotPriceHigherThanMaxAmount']
  },
  /**
   * Lookup860: polkadot_runtime_parachains::assigner_coretime::Schedule<N>
   **/
  PolkadotRuntimeParachainsAssignerCoretimeSchedule: {
    assignments: 'Vec<(PalletBrokerCoretimeInterfaceCoreAssignment,u16)>',
    endHint: 'Option<u32>',
    nextSchedule: 'Option<u32>'
  },
  /**
   * Lookup861: polkadot_runtime_parachains::assigner_coretime::CoreDescriptor<N>
   **/
  PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor: {
    queue: 'Option<PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor>',
    currentWork: 'Option<PolkadotRuntimeParachainsAssignerCoretimeWorkState>'
  },
  /**
   * Lookup863: polkadot_runtime_parachains::assigner_coretime::QueueDescriptor<N>
   **/
  PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor: {
    first: 'u32',
    last: 'u32'
  },
  /**
   * Lookup865: polkadot_runtime_parachains::assigner_coretime::WorkState<N>
   **/
  PolkadotRuntimeParachainsAssignerCoretimeWorkState: {
    assignments: 'Vec<(PalletBrokerCoretimeInterfaceCoreAssignment,PolkadotRuntimeParachainsAssignerCoretimeAssignmentState)>',
    endHint: 'Option<u32>',
    pos: 'u16',
    step: 'u16'
  },
  /**
   * Lookup868: polkadot_runtime_parachains::assigner_coretime::AssignmentState
   **/
  PolkadotRuntimeParachainsAssignerCoretimeAssignmentState: {
    ratio: 'u16',
    remaining: 'u16'
  },
  /**
   * Lookup869: polkadot_runtime_parachains::assigner_coretime::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsAssignerCoretimePalletError: {
    _enum: ['AssignmentsEmpty', 'OverScheduled', 'UnderScheduled', 'DisallowedInsert', 'DuplicateInsert', 'AssignmentsNotSorted']
  },
  /**
   * Lookup882: polkadot_runtime_parachains::coretime::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsCoretimePalletError: {
    _enum: ['NotBroker', 'RequestedFutureRevenue', 'AssetTransferFailed']
  },
  /**
   * Lookup929: staging_kusama_runtime::Runtime
   **/
  StagingKusamaRuntimeRuntime: 'Null'
};
