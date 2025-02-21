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
   * Lookup928: staging_kusama_runtime::Runtime
   **/
  StagingKusamaRuntimeRuntime: 'Null',
  /**
   * Lookup950: polkadot_primitives::v7::GroupRotationInfo<N>
   **/
  PolkadotPrimitivesV7GroupRotationInfo: {
    sessionStartBlock: 'u32',
    groupRotationFrequency: 'u32',
    now: 'u32'
  },
  /**
   * Lookup952: polkadot_primitives::v7::CoreState<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV7CoreState: {
    _enum: {
      Occupied: 'PolkadotPrimitivesV7OccupiedCore',
      Scheduled: 'PolkadotPrimitivesV7ScheduledCore',
      Free: 'Null'
    }
  },
  /**
   * Lookup953: polkadot_primitives::v7::OccupiedCore<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV7OccupiedCore: {
    nextUpOnAvailable: 'Option<PolkadotPrimitivesV7ScheduledCore>',
    occupiedSince: 'u32',
    timeOutAt: 'u32',
    nextUpOnTimeOut: 'Option<PolkadotPrimitivesV7ScheduledCore>',
    availability: 'BitVec',
    groupResponsible: 'u32',
    candidateHash: 'H256',
    candidateDescriptor: 'PolkadotPrimitivesV7CandidateDescriptor'
  },
  /**
   * Lookup955: polkadot_primitives::v7::ScheduledCore
   **/
  PolkadotPrimitivesV7ScheduledCore: {
    paraId: 'u32',
    collator: 'Option<PolkadotPrimitivesV7CollatorAppPublic>'
  },
  /**
   * Lookup957: polkadot_primitives::v7::OccupiedCoreAssumption
   **/
  PolkadotPrimitivesV7OccupiedCoreAssumption: {
    _enum: ['Included', 'TimedOut', 'Free']
  },
  /**
   * Lookup959: polkadot_primitives::v7::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV7PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup964: polkadot_primitives::v7::CandidateEvent<primitive_types::H256>
   **/
  PolkadotPrimitivesV7CandidateEvent: {
    _enum: {
      CandidateBacked: '(PolkadotPrimitivesV7CandidateReceipt,Bytes,u32,u32)',
      CandidateIncluded: '(PolkadotPrimitivesV7CandidateReceipt,Bytes,u32,u32)',
      CandidateTimedOut: '(PolkadotPrimitivesV7CandidateReceipt,Bytes,u32)'
    }
  },
  /**
   * Lookup980: polkadot_primitives::v7::async_backing::BackingState<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV7AsyncBackingBackingState: {
    constraints: 'PolkadotPrimitivesV7AsyncBackingConstraints',
    pendingAvailability: 'Vec<PolkadotPrimitivesV7AsyncBackingCandidatePendingAvailability>'
  },
  /**
   * Lookup981: polkadot_primitives::v7::async_backing::Constraints<N>
   **/
  PolkadotPrimitivesV7AsyncBackingConstraints: {
    minRelayParentNumber: 'u32',
    maxPovSize: 'u32',
    maxCodeSize: 'u32',
    umpRemaining: 'u32',
    umpRemainingBytes: 'u32',
    maxUmpNumPerCandidate: 'u32',
    dmpRemainingMessages: 'Vec<u32>',
    hrmpInbound: 'PolkadotPrimitivesV7AsyncBackingInboundHrmpLimitations',
    hrmpChannelsOut: 'Vec<(u32,PolkadotPrimitivesV7AsyncBackingOutboundHrmpChannelLimitations)>',
    maxHrmpNumPerCandidate: 'u32',
    requiredParent: 'Bytes',
    validationCodeHash: 'H256',
    upgradeRestriction: 'Option<PolkadotPrimitivesV7UpgradeRestriction>',
    futureValidationCode: 'Option<(u32,H256)>'
  },
  /**
   * Lookup982: polkadot_primitives::v7::async_backing::InboundHrmpLimitations<N>
   **/
  PolkadotPrimitivesV7AsyncBackingInboundHrmpLimitations: {
    validWatermarks: 'Vec<u32>'
  },
  /**
   * Lookup985: polkadot_primitives::v7::async_backing::OutboundHrmpChannelLimitations
   **/
  PolkadotPrimitivesV7AsyncBackingOutboundHrmpChannelLimitations: {
    bytesRemaining: 'u32',
    messagesRemaining: 'u32'
  },
  /**
   * Lookup990: polkadot_primitives::v7::async_backing::CandidatePendingAvailability<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV7AsyncBackingCandidatePendingAvailability: {
    candidateHash: 'H256',
    descriptor: 'PolkadotPrimitivesV7CandidateDescriptor',
    commitments: 'PolkadotPrimitivesV7CandidateCommitments',
    relayParentNumber: 'u32',
    maxPovSize: 'u32'
  },
  /**
   * Lookup1040: staging_kusama_runtime::RuntimeError
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
      Nis: 'PalletNisError',
      VoterList: 'PalletBagsListError',
      ChildBounties: 'PalletChildBountiesError',
      NominationPools: 'PalletNominationPoolsError',
      FastUnstake: 'PalletFastUnstakeError',
      __Unused43: 'Null',
      Whitelist: 'PalletWhitelistError',
      NisCounterpartBalances: 'PalletBalancesError',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
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
      OnDemandAssignmentProvider: 'PolkadotRuntimeParachainsAssignerOnDemandPalletError',
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
      Beefy: 'PalletBeefyError'
    }
  }
};
