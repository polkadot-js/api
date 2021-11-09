// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types';

export default {
  /**
   * Lookup72: polkadot_runtime::ProxyType
   **/
  PolkadotRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', '__Unused4', 'IdentityJudgement', 'CancelProxy', 'Auction']
  },
  /**
   * Lookup83: polkadot_primitives::v1::CandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV1CandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV1CandidateDescriptor',
    commitmentsHash: 'H256'
  },
  /**
   * Lookup84: polkadot_primitives::v1::CandidateDescriptor<primitive_types::H256>
   **/
  PolkadotPrimitivesV1CandidateDescriptor: {
    paraId: 'u32',
    relayParent: 'H256',
    collator: 'PolkadotPrimitivesV0CollatorAppPublic',
    persistedValidationDataHash: 'H256',
    povHash: 'H256',
    erasureRoot: 'H256',
    signature: 'PolkadotPrimitivesV0CollatorAppSignature',
    paraHead: 'H256',
    validationCodeHash: 'H256'
  },
  /**
   * Lookup86: polkadot_primitives::v0::collator_app::Public
   **/
  PolkadotPrimitivesV0CollatorAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup87: polkadot_primitives::v0::collator_app::Signature
   **/
  PolkadotPrimitivesV0CollatorAppSignature: 'SpCoreSr25519Signature',
  /**
   * Lookup96: xcm::v2::traits::Outcome
   **/
  XcmV2TraitsOutcome: {
    _enum: {
      Complete: 'u64',
      Incomplete: '(u64,XcmV2TraitsError)',
      Error: 'XcmV2TraitsError'
    }
  },
  /**
   * Lookup97: xcm::v2::traits::Error
   **/
  XcmV2TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
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
      TooMuchWeightRequired: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'u64',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  },
  /**
   * Lookup99: polkadot_parachain::primitives::HrmpChannelId
   **/
  PolkadotParachainPrimitivesHrmpChannelId: {
    sender: 'u32',
    recipient: 'u32'
  },
  /**
   * Lookup162: polkadot_runtime::SessionKeys
   **/
  PolkadotRuntimeSessionKeys: {
    grandpa: 'SpFinalityGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    paraValidator: 'PolkadotPrimitivesV0ValidatorAppPublic',
    paraAssignment: 'PolkadotPrimitivesV1AssignmentAppPublic',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic'
  },
  /**
   * Lookup163: polkadot_primitives::v0::validator_app::Public
   **/
  PolkadotPrimitivesV0ValidatorAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup164: polkadot_primitives::v1::assignment_app::Public
   **/
  PolkadotPrimitivesV1AssignmentAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup196: polkadot_runtime_common::claims::EcdsaSignature
   **/
  PolkadotRuntimeCommonClaimsEcdsaSignature: '[u8;65]',
  /**
   * Lookup201: polkadot_runtime_common::claims::StatementKind
   **/
  PolkadotRuntimeCommonClaimsStatementKind: {
    _enum: ['Regular', 'Saft']
  },
  /**
   * Lookup206: polkadot_runtime::OriginCaller
   **/
  PolkadotRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSystemRawOrigin',
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
      Council: 'PalletCollectiveRawOrigin',
      TechnicalCommittee: 'PalletCollectiveRawOrigin',
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
      ParachainsOrigin: 'PolkadotRuntimeParachainsOriginPalletOrigin'
    }
  },
  /**
   * Lookup210: polkadot_runtime_parachains::origin::pallet::Origin
   **/
  PolkadotRuntimeParachainsOriginPalletOrigin: {
    _enum: {
      Parachain: 'u32'
    }
  },
  /**
   * Lookup261: polkadot_runtime::NposCompactSolution16
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
   * Lookup323: polkadot_primitives::v1::InherentData<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>>
   **/
  PolkadotPrimitivesV1InherentData: {
    bitfields: 'Vec<PolkadotPrimitivesV1SignedUncheckedSigned>',
    backedCandidates: 'Vec<PolkadotPrimitivesV1BackedCandidate>',
    disputes: 'Vec<PolkadotPrimitivesV1DisputeStatementSet>',
    parentHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup325: polkadot_primitives::v1::signed::UncheckedSigned<polkadot_primitives::v1::AvailabilityBitfield, polkadot_primitives::v1::AvailabilityBitfield>
   **/
  PolkadotPrimitivesV1SignedUncheckedSigned: {
    payload: 'BitVec',
    validatorIndex: 'u32',
    signature: 'PolkadotPrimitivesV0ValidatorAppSignature'
  },
  /**
   * Lookup328: bitvec::order::Lsb0
   **/
  BitvecOrderLsb0: 'Null',
  /**
   * Lookup330: polkadot_primitives::v0::validator_app::Signature
   **/
  PolkadotPrimitivesV0ValidatorAppSignature: 'SpCoreSr25519Signature',
  /**
   * Lookup332: polkadot_primitives::v1::BackedCandidate<primitive_types::H256>
   **/
  PolkadotPrimitivesV1BackedCandidate: {
    candidate: 'PolkadotPrimitivesV1CommittedCandidateReceipt',
    validityVotes: 'Vec<PolkadotPrimitivesV0ValidityAttestation>',
    validatorIndices: 'BitVec'
  },
  /**
   * Lookup333: polkadot_primitives::v1::CommittedCandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV1CommittedCandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV1CandidateDescriptor',
    commitments: 'PolkadotPrimitivesV1CandidateCommitments'
  },
  /**
   * Lookup334: polkadot_primitives::v1::CandidateCommitments<N>
   **/
  PolkadotPrimitivesV1CandidateCommitments: {
    upwardMessages: 'Vec<Bytes>',
    horizontalMessages: 'Vec<PolkadotCorePrimitivesOutboundHrmpMessage>',
    newValidationCode: 'Option<Bytes>',
    headData: 'Bytes',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'u32'
  },
  /**
   * Lookup336: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup340: polkadot_primitives::v0::ValidityAttestation
   **/
  PolkadotPrimitivesV0ValidityAttestation: {
    _enum: {
      __Unused0: 'Null',
      Implicit: 'PolkadotPrimitivesV0ValidatorAppSignature',
      Explicit: 'PolkadotPrimitivesV0ValidatorAppSignature'
    }
  },
  /**
   * Lookup342: polkadot_primitives::v1::DisputeStatementSet
   **/
  PolkadotPrimitivesV1DisputeStatementSet: {
    candidateHash: 'H256',
    session: 'u32',
    statements: 'Vec<(PolkadotPrimitivesV1DisputeStatement,u32,PolkadotPrimitivesV0ValidatorAppSignature)>'
  },
  /**
   * Lookup346: polkadot_primitives::v1::DisputeStatement
   **/
  PolkadotPrimitivesV1DisputeStatement: {
    _enum: {
      Valid: 'PolkadotPrimitivesV1ValidDisputeStatementKind',
      Invalid: 'PolkadotPrimitivesV1InvalidDisputeStatementKind'
    }
  },
  /**
   * Lookup347: polkadot_primitives::v1::ValidDisputeStatementKind
   **/
  PolkadotPrimitivesV1ValidDisputeStatementKind: {
    _enum: {
      Explicit: 'Null',
      BackingSeconded: 'H256',
      BackingValid: 'H256',
      ApprovalChecking: 'Null'
    }
  },
  /**
   * Lookup348: polkadot_primitives::v1::InvalidDisputeStatementKind
   **/
  PolkadotPrimitivesV1InvalidDisputeStatementKind: {
    _enum: ['Explicit']
  },
  /**
   * Lookup360: sp_runtime::MultiSigner
   **/
  SpRuntimeMultiSigner: {
    _enum: {
      Ed25519: 'SpCoreEd25519Public',
      Sr25519: 'SpCoreSr25519Public',
      Ecdsa: 'SpCoreEcdsaPublic'
    }
  },
  /**
   * Lookup361: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',
  /**
   * Lookup514: polkadot_runtime_parachains::configuration::HostConfiguration<BlockNumber>
   **/
  PolkadotRuntimeParachainsConfigurationHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeFrequency: 'u32',
    validationUpgradeDelay: 'u32',
    maxPovSize: 'u32',
    maxDownwardMessageSize: 'u32',
    umpServiceTotalWeight: 'u64',
    hrmpMaxParachainOutboundChannels: 'u32',
    hrmpMaxParathreadOutboundChannels: 'u32',
    hrmpSenderDeposit: 'u128',
    hrmpRecipientDeposit: 'u128',
    hrmpChannelMaxCapacity: 'u32',
    hrmpChannelMaxTotalSize: 'u32',
    hrmpMaxParachainInboundChannels: 'u32',
    hrmpMaxParathreadInboundChannels: 'u32',
    hrmpChannelMaxMessageSize: 'u32',
    codeRetentionPeriod: 'u32',
    parathreadCores: 'u32',
    parathreadRetries: 'u32',
    groupRotationFrequency: 'u32',
    chainAvailabilityPeriod: 'u32',
    threadAvailabilityPeriod: 'u32',
    schedulingLookahead: 'u32',
    maxValidatorsPerCore: 'Option<u32>',
    maxValidators: 'Option<u32>',
    disputePeriod: 'u32',
    disputePostConclusionAcceptancePeriod: 'u32',
    disputeMaxSpamSlots: 'u32',
    disputeConclusionByTimeOutPeriod: 'u32',
    noShowSlots: 'u32',
    nDelayTranches: 'u32',
    zerothDelayTrancheWidth: 'u32',
    neededApprovals: 'u32',
    relayVrfModuloSamples: 'u32',
    umpMaxIndividualWeight: 'u64'
  },
  /**
   * Lookup518: polkadot_runtime_parachains::inclusion::AvailabilityBitfieldRecord<N>
   **/
  PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord: {
    bitfield: 'BitVec',
    submittedAt: 'u32'
  },
  /**
   * Lookup519: polkadot_runtime_parachains::inclusion::CandidatePendingAvailability<primitive_types::H256, N>
   **/
  PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: {
    _alias: {
      hash_: 'hash'
    },
    core: 'u32',
    hash_: 'H256',
    descriptor: 'PolkadotPrimitivesV1CandidateDescriptor',
    availabilityVotes: 'BitVec',
    backers: 'BitVec',
    relayParentNumber: 'u32',
    backedInNumber: 'u32',
    backingGroup: 'u32'
  },
  /**
   * Lookup521: polkadot_primitives::v1::ScrapedOnChainVotes<primitive_types::H256>
   **/
  PolkadotPrimitivesV1ScrapedOnChainVotes: {
    session: 'u32',
    backingValidatorsPerCandidate: 'Vec<(PolkadotPrimitivesV1CandidateReceipt,Vec<(u32,PolkadotPrimitivesV0ValidityAttestation)>)>',
    disputes: 'Vec<PolkadotPrimitivesV1DisputeStatementSet>'
  },
  /**
   * Lookup528: polkadot_runtime_parachains::scheduler::ParathreadClaimQueue
   **/
  PolkadotRuntimeParachainsSchedulerParathreadClaimQueue: {
    queue: 'Vec<PolkadotRuntimeParachainsSchedulerQueuedParathread>',
    nextCoreOffset: 'u32'
  },
  /**
   * Lookup530: polkadot_runtime_parachains::scheduler::QueuedParathread
   **/
  PolkadotRuntimeParachainsSchedulerQueuedParathread: {
    claim: 'PolkadotPrimitivesV1ParathreadEntry',
    coreOffset: 'u32'
  },
  /**
   * Lookup531: polkadot_primitives::v1::ParathreadEntry
   **/
  PolkadotPrimitivesV1ParathreadEntry: {
    claim: 'PolkadotPrimitivesV1ParathreadClaim',
    retries: 'u32'
  },
  /**
   * Lookup532: polkadot_primitives::v1::ParathreadClaim
   **/
  PolkadotPrimitivesV1ParathreadClaim: '(u32,PolkadotPrimitivesV0CollatorAppPublic)',
  /**
   * Lookup535: polkadot_primitives::v1::CoreOccupied
   **/
  PolkadotPrimitivesV1CoreOccupied: {
    _enum: {
      Parathread: 'PolkadotPrimitivesV1ParathreadEntry',
      Parachain: 'Null'
    }
  },
  /**
   * Lookup538: polkadot_runtime_parachains::scheduler::CoreAssignment
   **/
  PolkadotRuntimeParachainsSchedulerCoreAssignment: {
    core: 'u32',
    paraId: 'u32',
    kind: 'PolkadotRuntimeParachainsSchedulerAssignmentKind',
    groupIdx: 'u32'
  },
  /**
   * Lookup539: polkadot_runtime_parachains::scheduler::AssignmentKind
   **/
  PolkadotRuntimeParachainsSchedulerAssignmentKind: {
    _enum: {
      Parachain: 'Null',
      Parathread: '(PolkadotPrimitivesV0CollatorAppPublic,u32)'
    }
  },
  /**
   * Lookup540: polkadot_runtime_parachains::paras::ParaLifecycle
   **/
  PolkadotRuntimeParachainsParasParaLifecycle: {
    _enum: ['Onboarding', 'Parathread', 'Parachain', 'UpgradingParathread', 'DowngradingParachain', 'OffboardingParathread', 'OffboardingParachain']
  },
  /**
   * Lookup542: polkadot_runtime_parachains::paras::ParaPastCodeMeta<N>
   **/
  PolkadotRuntimeParachainsParasParaPastCodeMeta: {
    upgradeTimes: 'Vec<PolkadotRuntimeParachainsParasReplacementTimes>',
    lastPruned: 'Option<u32>'
  },
  /**
   * Lookup544: polkadot_runtime_parachains::paras::ReplacementTimes<N>
   **/
  PolkadotRuntimeParachainsParasReplacementTimes: {
    expectedAt: 'u32',
    activatedAt: 'u32'
  },
  /**
   * Lookup546: polkadot_primitives::v1::UpgradeGoAhead
   **/
  PolkadotPrimitivesV1UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup547: polkadot_primitives::v1::UpgradeRestriction
   **/
  PolkadotPrimitivesV1UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup548: polkadot_runtime_parachains::paras::ParaGenesisArgs
   **/
  PolkadotRuntimeParachainsParasParaGenesisArgs: {
    genesisHead: 'Bytes',
    validationCode: 'Bytes',
    parachain: 'bool'
  },
  /**
   * Lookup551: polkadot_runtime_parachains::initializer::BufferedSessionChange
   **/
  PolkadotRuntimeParachainsInitializerBufferedSessionChange: {
    validators: 'Vec<PolkadotPrimitivesV0ValidatorAppPublic>',
    queued: 'Vec<PolkadotPrimitivesV0ValidatorAppPublic>',
    sessionIndex: 'u32'
  },
  /**
   * Lookup553: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup556: polkadot_runtime_parachains::hrmp::HrmpOpenChannelRequest
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
   * Lookup558: polkadot_runtime_parachains::hrmp::HrmpChannel
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
   * Lookup561: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup566: polkadot_primitives::v1::SessionInfo
   **/
  PolkadotPrimitivesV1SessionInfo: {
    validators: 'Vec<PolkadotPrimitivesV0ValidatorAppPublic>',
    discoveryKeys: 'Vec<SpAuthorityDiscoveryAppPublic>',
    assignmentKeys: 'Vec<PolkadotPrimitivesV1AssignmentAppPublic>',
    validatorGroups: 'Vec<Vec<u32>>',
    nCores: 'u32',
    zerothDelayTrancheWidth: 'u32',
    relayVrfModuloSamples: 'u32',
    nDelayTranches: 'u32',
    noShowSlots: 'u32',
    neededApprovals: 'u32'
  },
  /**
   * Lookup568: polkadot_runtime_common::paras_registrar::ParaInfo<sp_core::crypto::AccountId32, Balance>
   **/
  PolkadotRuntimeCommonParasRegistrarParaInfo: {
    manager: 'AccountId32',
    deposit: 'u128',
    locked: 'bool'
  },
  /**
   * Lookup578: polkadot_runtime_common::crowdloan::FundInfo<sp_core::crypto::AccountId32, Balance, BlockNumber, LeasePeriod>
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
    trieIndex: 'u32'
  },
  /**
   * Lookup579: polkadot_runtime_common::crowdloan::LastContribution<BlockNumber>
   **/
  PolkadotRuntimeCommonCrowdloanLastContribution: {
    _enum: {
      Never: 'Null',
      PreEnding: 'u32',
      Ending: 'u32'
    }
  },
  /**
   * Lookup591: polkadot_runtime_common::claims::PrevalidateAttests<T>
   **/
  PolkadotRuntimeCommonClaimsPrevalidateAttests: 'Null',
  /**
   * Lookup592: polkadot_runtime::Runtime
   **/
  PolkadotRuntimeRuntime: 'Null'
} as DefinitionsTypes;
