// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup127: staging_kusama_runtime::SessionKeys
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
   * Lookup128: polkadot_primitives::v8::validator_app::Public
   **/
  PolkadotPrimitivesV8ValidatorAppPublic: '[u8;32]',
  /**
   * Lookup129: polkadot_primitives::v8::assignment_app::Public
   **/
  PolkadotPrimitivesV8AssignmentAppPublic: '[u8;32]',
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
      Inflation: 'StagingKusamaRuntimeDynamicParamsInflationParameters',
      Treasury: 'StagingKusamaRuntimeDynamicParamsTreasuryParameters'
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
   * Lookup173: staging_kusama_runtime::dynamic_params::treasury::Parameters
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryParameters: {
    _enum: {
      BurnPortion: '(StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion,Option<Permill>)',
      BurnDestination: '(StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination,Option<StagingKusamaRuntimeBurnDestinationAccount>)'
    }
  },
  /**
   * Lookup174: staging_kusama_runtime::dynamic_params::treasury::BurnPortion
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion: 'Null',
  /**
   * Lookup177: staging_kusama_runtime::dynamic_params::treasury::BurnDestination
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination: 'Null',
  /**
   * Lookup179: staging_kusama_runtime::BurnDestinationAccount
   **/
  StagingKusamaRuntimeBurnDestinationAccount: 'Option<AccountId32>',
  /**
   * Lookup199: staging_kusama_runtime::ProxyType
   **/
  StagingKusamaRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', '__Unused4', 'CancelProxy', 'Auction', 'Society', 'NominationPools', 'Spokesperson', 'ParaRegistration']
  },
  /**
   * Lookup209: staging_kusama_runtime::NposCompactSolution24
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
   * Lookup310: polkadot_primitives::v8::async_backing::AsyncBackingParams
   **/
  PolkadotPrimitivesV8AsyncBackingAsyncBackingParams: {
    maxCandidateDepth: 'u32',
    allowedAncestryLen: 'u32'
  },
  /**
   * Lookup311: polkadot_primitives::v8::executor_params::ExecutorParams
   **/
  PolkadotPrimitivesV8ExecutorParams: 'Vec<PolkadotPrimitivesV8ExecutorParamsExecutorParam>',
  /**
   * Lookup313: polkadot_primitives::v8::executor_params::ExecutorParam
   **/
  PolkadotPrimitivesV8ExecutorParamsExecutorParam: {
    _enum: {
      __Unused0: 'Null',
      MaxMemoryPages: 'u32',
      StackLogicalMax: 'u32',
      StackNativeMax: 'u32',
      PrecheckingMaxMemory: 'u64',
      PvfPrepTimeout: '(PolkadotPrimitivesV8PvfPrepKind,u64)',
      PvfExecTimeout: '(PolkadotPrimitivesV8PvfExecKind,u64)',
      WasmExtBulkMemory: 'Null'
    }
  },
  /**
   * Lookup314: polkadot_primitives::v8::PvfPrepKind
   **/
  PolkadotPrimitivesV8PvfPrepKind: {
    _enum: ['Precheck', 'Prepare']
  },
  /**
   * Lookup315: polkadot_primitives::v8::PvfExecKind
   **/
  PolkadotPrimitivesV8PvfExecKind: {
    _enum: ['Backing', 'Approval']
  },
  /**
   * Lookup316: polkadot_primitives::v8::ApprovalVotingParams
   **/
  PolkadotPrimitivesV8ApprovalVotingParams: {
    maxApprovalCoalesceCount: 'u32'
  },
  /**
   * Lookup317: polkadot_primitives::v8::SchedulerParams<BlockNumber>
   **/
  PolkadotPrimitivesV8SchedulerParams: {
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
   * Lookup321: polkadot_primitives::v8::InherentData<sp_runtime::generic::header::Header<Number, Hash>>
   **/
  PolkadotPrimitivesV8InherentData: {
    bitfields: 'Vec<PolkadotPrimitivesV8SignedUncheckedSigned>',
    backedCandidates: 'Vec<PolkadotPrimitivesV8BackedCandidate>',
    disputes: 'Vec<PolkadotPrimitivesV8DisputeStatementSet>',
    parentHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup323: polkadot_primitives::v8::signed::UncheckedSigned<polkadot_primitives::v8::AvailabilityBitfield, polkadot_primitives::v8::AvailabilityBitfield>
   **/
  PolkadotPrimitivesV8SignedUncheckedSigned: {
    payload: 'BitVec',
    validatorIndex: 'u32',
    signature: 'PolkadotPrimitivesV8ValidatorAppSignature'
  },
  /**
   * Lookup328: polkadot_primitives::v8::validator_app::Signature
   **/
  PolkadotPrimitivesV8ValidatorAppSignature: '[u8;64]',
  /**
   * Lookup330: polkadot_primitives::v8::BackedCandidate<primitive_types::H256>
   **/
  PolkadotPrimitivesV8BackedCandidate: {
    candidate: 'PolkadotPrimitivesV8CommittedCandidateReceipt',
    validityVotes: 'Vec<PolkadotPrimitivesV8ValidityAttestation>',
    validatorIndices: 'BitVec'
  },
  /**
   * Lookup331: polkadot_primitives::v8::CommittedCandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV8CommittedCandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV8CandidateDescriptor',
    commitments: 'PolkadotPrimitivesV8CandidateCommitments'
  },
  /**
   * Lookup332: polkadot_primitives::v8::CandidateDescriptor<primitive_types::H256>
   **/
  PolkadotPrimitivesV8CandidateDescriptor: {
    paraId: 'u32',
    relayParent: 'H256',
    collator: 'PolkadotPrimitivesV8CollatorAppPublic',
    persistedValidationDataHash: 'H256',
    povHash: 'H256',
    erasureRoot: 'H256',
    signature: 'PolkadotPrimitivesV8CollatorAppSignature',
    paraHead: 'H256',
    validationCodeHash: 'H256'
  },
  /**
   * Lookup333: polkadot_primitives::v8::collator_app::Public
   **/
  PolkadotPrimitivesV8CollatorAppPublic: '[u8;32]',
  /**
   * Lookup334: polkadot_primitives::v8::collator_app::Signature
   **/
  PolkadotPrimitivesV8CollatorAppSignature: '[u8;64]',
  /**
   * Lookup336: polkadot_primitives::v8::CandidateCommitments<N>
   **/
  PolkadotPrimitivesV8CandidateCommitments: {
    upwardMessages: 'Vec<Bytes>',
    horizontalMessages: 'Vec<PolkadotCorePrimitivesOutboundHrmpMessage>',
    newValidationCode: 'Option<Bytes>',
    headData: 'Bytes',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'u32'
  },
  /**
   * Lookup345: polkadot_primitives::v8::ValidityAttestation
   **/
  PolkadotPrimitivesV8ValidityAttestation: {
    _enum: {
      __Unused0: 'Null',
      Implicit: 'PolkadotPrimitivesV8ValidatorAppSignature',
      Explicit: 'PolkadotPrimitivesV8ValidatorAppSignature'
    }
  },
  /**
   * Lookup347: polkadot_primitives::v8::DisputeStatementSet
   **/
  PolkadotPrimitivesV8DisputeStatementSet: {
    candidateHash: 'H256',
    session: 'u32',
    statements: 'Vec<(PolkadotPrimitivesV8DisputeStatement,u32,PolkadotPrimitivesV8ValidatorAppSignature)>'
  },
  /**
   * Lookup351: polkadot_primitives::v8::DisputeStatement
   **/
  PolkadotPrimitivesV8DisputeStatement: {
    _enum: {
      Valid: 'PolkadotPrimitivesV8ValidDisputeStatementKind',
      Invalid: 'PolkadotPrimitivesV8InvalidDisputeStatementKind'
    }
  },
  /**
   * Lookup352: polkadot_primitives::v8::ValidDisputeStatementKind
   **/
  PolkadotPrimitivesV8ValidDisputeStatementKind: {
    _enum: {
      Explicit: 'Null',
      BackingSeconded: 'H256',
      BackingValid: 'H256',
      ApprovalChecking: 'Null',
      ApprovalCheckingMultipleCandidates: 'Vec<H256>'
    }
  },
  /**
   * Lookup354: polkadot_primitives::v8::InvalidDisputeStatementKind
   **/
  PolkadotPrimitivesV8InvalidDisputeStatementKind: {
    _enum: ['Explicit']
  },
  /**
   * Lookup356: polkadot_primitives::v8::PvfCheckStatement
   **/
  PolkadotPrimitivesV8PvfCheckStatement: {
    accept: 'bool',
    subject: 'H256',
    sessionIndex: 'u32',
    validatorIndex: 'u32'
  },
  /**
   * Lookup362: polkadot_primitives::v8::slashing::DisputeProof
   **/
  PolkadotPrimitivesV8SlashingDisputeProof: {
    timeSlot: 'PolkadotPrimitivesV8SlashingDisputesTimeSlot',
    kind: 'PolkadotPrimitivesV8SlashingSlashingOffenceKind',
    validatorIndex: 'u32',
    validatorId: 'PolkadotPrimitivesV8ValidatorAppPublic'
  },
  /**
   * Lookup363: polkadot_primitives::v8::slashing::DisputesTimeSlot
   **/
  PolkadotPrimitivesV8SlashingDisputesTimeSlot: {
    sessionIndex: 'u32',
    candidateHash: 'H256'
  },
  /**
   * Lookup364: polkadot_primitives::v8::slashing::SlashingOffenceKind
   **/
  PolkadotPrimitivesV8SlashingSlashingOffenceKind: {
    _enum: ['ForInvalid', 'AgainstValid']
  },
  /**
   * Lookup365: polkadot_runtime_parachains::on_demand::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsOnDemandPalletCall: {
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
   * Lookup491: staging_kusama_runtime::RuntimeParametersKey
   **/
  StagingKusamaRuntimeRuntimeParametersKey: {
    _enum: {
      Inflation: 'StagingKusamaRuntimeDynamicParamsInflationParametersKey',
      Treasury: 'StagingKusamaRuntimeDynamicParamsTreasuryParametersKey'
    }
  },
  /**
   * Lookup492: staging_kusama_runtime::dynamic_params::inflation::ParametersKey
   **/
  StagingKusamaRuntimeDynamicParamsInflationParametersKey: {
    _enum: ['MinInflation', 'MaxInflation', 'IdealStake', 'Falloff', 'UseAuctionSlots']
  },
  /**
   * Lookup493: staging_kusama_runtime::dynamic_params::treasury::ParametersKey
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryParametersKey: {
    _enum: ['BurnPortion', 'BurnDestination']
  },
  /**
   * Lookup495: staging_kusama_runtime::RuntimeParametersValue
   **/
  StagingKusamaRuntimeRuntimeParametersValue: {
    _enum: {
      Inflation: 'StagingKusamaRuntimeDynamicParamsInflationParametersValue',
      Treasury: 'StagingKusamaRuntimeDynamicParamsTreasuryParametersValue'
    }
  },
  /**
   * Lookup496: staging_kusama_runtime::dynamic_params::inflation::ParametersValue
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
   * Lookup497: staging_kusama_runtime::dynamic_params::treasury::ParametersValue
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryParametersValue: {
    _enum: {
      BurnPortion: 'Permill',
      BurnDestination: 'StagingKusamaRuntimeBurnDestinationAccount'
    }
  },
  /**
   * Lookup521: pallet_delegated_staking::pallet::Event<T>
   **/
  PalletDelegatedStakingEvent: {
    _enum: {
      Delegated: {
        agent: 'AccountId32',
        delegator: 'AccountId32',
        amount: 'u128',
      },
      Released: {
        agent: 'AccountId32',
        delegator: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        agent: 'AccountId32',
        delegator: 'AccountId32',
        amount: 'u128',
      },
      MigratedDelegation: {
        agent: 'AccountId32',
        delegator: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup523: polkadot_primitives::v8::CandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV8CandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV8CandidateDescriptor',
    commitmentsHash: 'H256'
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
        spotPrice: 'u128'
      }
    }
  },
  /**
   * Lookup585: staging_kusama_runtime::RuntimeHoldReason
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
      Nis: 'PalletNisHoldReason',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      DelegatedStaking: 'PalletDelegatedStakingHoldReason'
    }
  },
  /**
   * Lookup588: pallet_delegated_staking::pallet::HoldReason
   **/
  PalletDelegatedStakingHoldReason: {
    _enum: ['StakingDelegation']
  },
  /**
   * Lookup592: staging_kusama_runtime::RuntimeFreezeReason
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
   * Lookup764: frame_support::traits::tokens::misc::IdAmount<Id, Balance>
   **/
  FrameSupportTokensMiscIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup794: pallet_delegated_staking::types::Delegation<T>
   **/
  PalletDelegatedStakingDelegation: {
    agent: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup795: pallet_delegated_staking::types::AgentLedger<T>
   **/
  PalletDelegatedStakingAgentLedger: {
    payee: 'AccountId32',
    totalDelegated: 'Compact<u128>',
    unclaimedWithdrawals: 'Compact<u128>',
    pendingSlash: 'Compact<u128>'
  },
  /**
   * Lookup796: pallet_delegated_staking::pallet::Error<T>
   **/
  PalletDelegatedStakingError: {
    _enum: ['NotAllowed', 'AlreadyStaking', 'InvalidRewardDestination', 'InvalidDelegation', 'NotEnoughFunds', 'NotAgent', 'NotDelegator', 'BadState', 'UnappliedSlash', 'NothingToSlash', 'WithdrawFailed', 'NotSupported']
  },
  /**
   * Lookup809: polkadot_primitives::v8::ScrapedOnChainVotes<primitive_types::H256>
   **/
  PolkadotPrimitivesV8ScrapedOnChainVotes: {
    session: 'u32',
    backingValidatorsPerCandidate: 'Vec<(PolkadotPrimitivesV8CandidateReceipt,Vec<(u32,PolkadotPrimitivesV8ValidityAttestation)>)>',
    disputes: 'Vec<PolkadotPrimitivesV8DisputeStatementSet>'
  },
  /**
   * Lookup836: polkadot_primitives::v8::UpgradeGoAhead
   **/
  PolkadotPrimitivesV8UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup837: polkadot_primitives::v8::UpgradeRestriction
   **/
  PolkadotPrimitivesV8UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup853: polkadot_primitives::v8::SessionInfo
   **/
  PolkadotPrimitivesV8SessionInfo: {
    activeValidatorIndices: 'Vec<u32>',
    randomSeed: '[u8;32]',
    disputePeriod: 'u32',
    validators: 'PolkadotPrimitivesV8IndexedVecValidatorIndex',
    discoveryKeys: 'Vec<SpAuthorityDiscoveryAppPublic>',
    assignmentKeys: 'Vec<PolkadotPrimitivesV8AssignmentAppPublic>',
    validatorGroups: 'PolkadotPrimitivesV8IndexedVecGroupIndex',
    nCores: 'u32',
    zerothDelayTrancheWidth: 'u32',
    relayVrfModuloSamples: 'u32',
    nDelayTranches: 'u32',
    noShowSlots: 'u32',
    neededApprovals: 'u32'
  },
  /**
   * Lookup854: polkadot_primitives::v8::IndexedVec<polkadot_primitives::v8::ValidatorIndex, polkadot_primitives::v8::validator_app::Public>
   **/
  PolkadotPrimitivesV8IndexedVecValidatorIndex: 'Vec<PolkadotPrimitivesV8ValidatorAppPublic>',
  /**
   * Lookup855: polkadot_primitives::v8::IndexedVec<polkadot_primitives::v8::GroupIndex, V>
   **/
  PolkadotPrimitivesV8IndexedVecGroupIndex: 'Vec<Vec<u32>>',
  /**
   * Lookup857: polkadot_primitives::v8::DisputeState<N>
   **/
  PolkadotPrimitivesV8DisputeState: {
    validatorsFor: 'BitVec',
    validatorsAgainst: 'BitVec',
    start: 'u32',
    concludedAt: 'Option<u32>'
  },
  /**
   * Lookup860: polkadot_primitives::v8::slashing::PendingSlashes
   **/
  PolkadotPrimitivesV8SlashingPendingSlashes: {
    _alias: {
      keys_: 'keys'
    },
    keys_: 'BTreeMap<u32, PolkadotPrimitivesV8ValidatorAppPublic>',
    kind: 'PolkadotPrimitivesV8SlashingSlashingOffenceKind'
  },
  /**
   * Lookup865: polkadot_runtime_parachains::on_demand::types::CoreAffinityCount
   **/
  PolkadotRuntimeParachainsOnDemandTypesCoreAffinityCount: {
    coreIndex: 'u32',
    count: 'u32'
  },
  /**
   * Lookup866: polkadot_runtime_parachains::on_demand::types::QueueStatusType
   **/
  PolkadotRuntimeParachainsOnDemandTypesQueueStatusType: {
    traffic: 'u128',
    nextIndex: 'u32',
    smallestIndex: 'u32',
    freedIndices: 'BinaryHeapReverseQueueIndex'
  },
  /**
   * Lookup872: polkadot_runtime_parachains::on_demand::types::EnqueuedOrder
   **/
  PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder: {
    paraId: 'u32',
    idx: 'u32'
  },
  /**
   * Lookup876: polkadot_runtime_parachains::on_demand::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsOnDemandPalletError: {
    _enum: ['QueueFull', 'SpotPriceHigherThanMaxAmount']
  },
  /**
   * Lookup946: staging_kusama_runtime::Runtime
   **/
  StagingKusamaRuntimeRuntime: 'Null',
  /**
   * Lookup968: polkadot_primitives::v8::GroupRotationInfo<N>
   **/
  PolkadotPrimitivesV8GroupRotationInfo: {
    sessionStartBlock: 'u32',
    groupRotationFrequency: 'u32',
    now: 'u32'
  },
  /**
   * Lookup970: polkadot_primitives::v8::CoreState<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV8CoreState: {
    _enum: {
      Occupied: 'PolkadotPrimitivesV8OccupiedCore',
      Scheduled: 'PolkadotPrimitivesV8ScheduledCore',
      Free: 'Null'
    }
  },
  /**
   * Lookup971: polkadot_primitives::v8::OccupiedCore<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV8OccupiedCore: {
    nextUpOnAvailable: 'Option<PolkadotPrimitivesV8ScheduledCore>',
    occupiedSince: 'u32',
    timeOutAt: 'u32',
    nextUpOnTimeOut: 'Option<PolkadotPrimitivesV8ScheduledCore>',
    availability: 'BitVec',
    groupResponsible: 'u32',
    candidateHash: 'H256',
    candidateDescriptor: 'PolkadotPrimitivesV8CandidateDescriptor'
  },
  /**
   * Lookup973: polkadot_primitives::v8::ScheduledCore
   **/
  PolkadotPrimitivesV8ScheduledCore: {
    paraId: 'u32',
    collator: 'Option<PolkadotPrimitivesV8CollatorAppPublic>'
  },
  /**
   * Lookup975: polkadot_primitives::v8::OccupiedCoreAssumption
   **/
  PolkadotPrimitivesV8OccupiedCoreAssumption: {
    _enum: ['Included', 'TimedOut', 'Free']
  },
  /**
   * Lookup977: polkadot_primitives::v8::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV8PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup982: polkadot_primitives::v8::CandidateEvent<primitive_types::H256>
   **/
  PolkadotPrimitivesV8CandidateEvent: {
    _enum: {
      CandidateBacked: '(PolkadotPrimitivesV8CandidateReceipt,Bytes,u32,u32)',
      CandidateIncluded: '(PolkadotPrimitivesV8CandidateReceipt,Bytes,u32,u32)',
      CandidateTimedOut: '(PolkadotPrimitivesV8CandidateReceipt,Bytes,u32)'
    }
  },
  /**
   * Lookup998: polkadot_primitives::v8::async_backing::BackingState<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV8AsyncBackingBackingState: {
    constraints: 'PolkadotPrimitivesV8AsyncBackingConstraints',
    pendingAvailability: 'Vec<PolkadotPrimitivesV8AsyncBackingCandidatePendingAvailability>'
  },
  /**
   * Lookup999: polkadot_primitives::v8::async_backing::Constraints<N>
   **/
  PolkadotPrimitivesV8AsyncBackingConstraints: {
    minRelayParentNumber: 'u32',
    maxPovSize: 'u32',
    maxCodeSize: 'u32',
    umpRemaining: 'u32',
    umpRemainingBytes: 'u32',
    maxUmpNumPerCandidate: 'u32',
    dmpRemainingMessages: 'Vec<u32>',
    hrmpInbound: 'PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations',
    hrmpChannelsOut: 'Vec<(u32,PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations)>',
    maxHrmpNumPerCandidate: 'u32',
    requiredParent: 'Bytes',
    validationCodeHash: 'H256',
    upgradeRestriction: 'Option<PolkadotPrimitivesV8UpgradeRestriction>',
    futureValidationCode: 'Option<(u32,H256)>'
  },
  /**
   * Lookup1000: polkadot_primitives::v8::async_backing::InboundHrmpLimitations<N>
   **/
  PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations: {
    validWatermarks: 'Vec<u32>'
  },
  /**
   * Lookup1003: polkadot_primitives::v8::async_backing::OutboundHrmpChannelLimitations
   **/
  PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations: {
    bytesRemaining: 'u32',
    messagesRemaining: 'u32'
  },
  /**
   * Lookup1008: polkadot_primitives::v8::async_backing::CandidatePendingAvailability<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV8AsyncBackingCandidatePendingAvailability: {
    candidateHash: 'H256',
    descriptor: 'PolkadotPrimitivesV8CandidateDescriptor',
    commitments: 'PolkadotPrimitivesV8CandidateCommitments',
    relayParentNumber: 'u32',
    maxPovSize: 'u32'
  },
  /**
   * Lookup1059: staging_kusama_runtime::RuntimeError
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
      DelegatedStaking: 'PalletDelegatedStakingError',
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
      Beefy: 'PalletBeefyError'
    }
  }
};
