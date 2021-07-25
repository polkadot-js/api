// Auto-generated via `yarn polkadot-types-from-`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    /**
     * Lookup0: sp_core::crypto::AccountId32
     **/
    SpCoreCryptoAccountId32: 'AccountId32',
    /**
     * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
      nonce: 'u32',
      consumers: 'u32',
      providers: 'u32',
      sufficients: 'u32',
      data: 'PalletBalancesAccountDataU128'
    },
    /**
     * Lookup5: pallet_balances::AccountData<Balance>
     **/
    PalletBalancesAccountDataU128: {
      free: 'u128',
      reserved: 'u128',
      miscFrozen: 'u128',
      feeFrozen: 'u128'
    },
    /**
     * Lookup7: frame_support::weights::PerDispatchClass<T>
     **/
    FrameSupportWeightsPerDispatchClassU64: {
      normal: 'u64',
      operational: 'u64',
      mandatory: 'u64'
    },
    /**
     * Lookup9: primitive_types::H256
     **/
    PrimitiveTypesH256: 'H256',
    /**
     * Lookup11: sp_runtime::generic::digest::Digest<primitive_types::H256>
     **/
    SpRuntimeGenericDigest: {
      logs: 'Vec<SpRuntimeGenericDigestDigestItem>'
    },
    /**
     * Lookup13: sp_runtime::generic::digest::DigestItem<primitive_types::H256>
     **/
    SpRuntimeGenericDigestDigestItem: {
      _enum: {
        Other: 'Bytes',
        Unused1: 'Null',
        ChangesTrieRoot: 'H256',
        Unused3: 'Null',
        Consensus: '([u8;4],Bytes)',
        Seal: '([u8;4],Bytes)',
        PreRuntime: '([u8;4],Bytes)',
        ChangesTrieSignal: 'SpRuntimeGenericDigestChangesTrieSignal',
      }
    },
    /**
     * Lookup15: sp_runtime::generic::digest::ChangesTrieSignal
     **/
    SpRuntimeGenericDigestChangesTrieSignal: {
      _enum: {
        NewConfiguration: 'Option<SpCoreChangesTrieChangesTrieConfiguration>',
      }
    },
    /**
     * Lookup16: Option<sp_core::changes_trie::ChangesTrieConfiguration>
     **/
    Lookup16: 'Option<SpCoreChangesTrieChangesTrieConfiguration>',
    /**
     * Lookup17: sp_core::changes_trie::ChangesTrieConfiguration
     **/
    SpCoreChangesTrieChangesTrieConfiguration: {
      digestInterval: 'u32',
      digestLevels: 'u32'
    },
    /**
     * Lookup19: frame_system::EventRecord<node_runtime::Event, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
      phase: 'FrameSystemPhase',
      event: 'Event',
      topics: 'Vec<H256>'
    },
    /**
     * Lookup22: frame_support::weights::DispatchInfo
     **/
    FrameSupportWeightsDispatchInfo: {
      weight: 'u64',
      class: 'FrameSupportWeightsDispatchClass',
      paysFee: 'FrameSupportWeightsPays'
    },
    /**
     * Lookup23: frame_support::weights::DispatchClass
     **/
    FrameSupportWeightsDispatchClass: {
      _enum: ['Normal', 'Operational', 'Mandatory']
    },
    /**
     * Lookup24: frame_support::weights::Pays
     **/
    FrameSupportWeightsPays: {
      _enum: ['Yes', 'No']
    },
    /**
     * Lookup25: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
      _enum: {
        Other: 'Null',
        CannotLookup: 'Null',
        BadOrigin: 'Null',
        Module: {
          index: 'u8',
          error: 'u8',
        },
        ConsumerRemaining: 'Null',
        NoProviders: 'Null',
        Token: 'SpRuntimeTokenError',
        Arithmetic: 'SpRuntimeArithmeticError',
      }
    },
    /**
     * Lookup26: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
      _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
    },
    /**
     * Lookup27: sp_runtime::ArithmeticError
     **/
    SpRuntimeArithmeticError: {
      _enum: ['Underflow', 'Overflow', 'DivisionByZero']
    },
    /**
     * Lookup31: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTraitsTokensMiscBalanceStatus: {
      _enum: ['Free', 'Reserved']
    },
    /**
     * Lookup33: pallet_election_provider_multi_phase::ElectionCompute
     **/
    PalletElectionProviderMultiPhaseElectionCompute: {
      _enum: ['OnChain', 'Signed', 'Unsigned', 'Emergency']
    },
    /**
     * Lookup35: Option<pallet_election_provider_multi_phase::ElectionCompute>
     **/
    Lookup35: 'Option<PalletElectionProviderMultiPhaseElectionCompute>',
    /**
     * Lookup40: pallet_democracy::vote_threshold::VoteThreshold
     **/
    PalletDemocracyVoteThreshold: {
      _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
    },
    /**
     * Lookup41: Result<T, sp_runtime::DispatchError>
     **/
    Lookup41: 'Result<Null, SpRuntimeDispatchError>',
    /**
     * Lookup44: pallet_collective::Instance1
     **/
    PalletCollectiveInstance1: 'Null',
    /**
     * Lookup46: pallet_collective::Instance2
     **/
    PalletCollectiveInstance2: 'Null',
    /**
     * Lookup51: pallet_membership::Instance1
     **/
    PalletMembershipInstance1: 'Null',
    /**
     * Lookup55: sp_finality_grandpa::app::Public
     **/
    Lookup55: '[u8;32]',
    /**
     * Lookup56: sp_core::ed25519::Public
     **/
    Lookup56: '[u8;32]',
    /**
     * Lookup61: pallet_im_online::sr25519::app_sr25519::Public
     **/
    Lookup61: '[u8;32]',
    /**
     * Lookup62: sp_core::sr25519::Public
     **/
    Lookup62: '[u8;32]',
    /**
     * Lookup65: pallet_staking::Exposure<sp_core::crypto::AccountId32, Balance>
     **/
    PalletStakingExposure: {
      total: 'CompactU128',
      own: 'CompactU128',
      others: 'Vec<PalletStakingIndividualExposure>'
    },
    /**
     * Lookup66
     **/
    Lookup66: 'Compact<u128>',
    /**
     * Lookup68: pallet_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
     **/
    PalletStakingIndividualExposure: {
      who: 'AccountId32',
      value: 'CompactU128'
    },
    /**
     * Lookup73: pallet_society::DefaultInstance
     **/
    PalletSocietyDefaultInstance: 'Null',
    /**
     * Lookup78: Option<T>
     **/
    Lookup78: 'Option<Bytes>',
    /**
     * Lookup80: node_runtime::ProxyType
     **/
    NodeRuntimeProxyType: {
      _enum: ['Any', 'NonTransfer', 'Governance', 'Staking']
    },
    /**
     * Lookup83: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepointU32: {
      height: 'u32',
      index: 'u32'
    },
    /**
     * Lookup91: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup91: 'Bytes',
    /**
     * Lookup93: Option<T>
     **/
    OptionU32: 'Option<u32>',
    /**
     * Lookup94: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup94: 'Bytes',
    /**
     * Lookup95: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup95: 'Bytes',
    /**
     * Lookup97: frame_system::Phase
     **/
    FrameSystemPhase: {
      _enum: {
        ApplyExtrinsic: 'u32',
        Finalization: 'Null',
        Initialization: 'Null',
      }
    },
    /**
     * Lookup100: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
      specVersion: 'CompactU32',
      specName: 'Text'
    },
    /**
     * Lookup101
     **/
    Lookup101: 'Compact<u32>',
    /**
     * Lookup104: sp_arithmetic::per_things::Perbill
     **/
    SpArithmeticPerThingsPerbill: 'Perbill',
    /**
     * Lookup108: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
      baseBlock: 'u64',
      maxBlock: 'u64',
      perClass: 'FrameSupportWeightsPerDispatchClass'
    },
    /**
     * Lookup109: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportWeightsPerDispatchClass: {
      normal: 'FrameSystemLimitsWeightsPerClass',
      operational: 'FrameSystemLimitsWeightsPerClass',
      mandatory: 'FrameSystemLimitsWeightsPerClass'
    },
    /**
     * Lookup110: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
      baseExtrinsic: 'u64',
      maxExtrinsic: 'OptionU64',
      maxTotal: 'OptionU64',
      reserved: 'OptionU64'
    },
    /**
     * Lookup111: Option<T>
     **/
    OptionU64: 'Option<u64>',
    /**
     * Lookup112: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
      max: 'FrameSupportWeightsPerDispatchClassU32'
    },
    /**
     * Lookup113: frame_support::weights::PerDispatchClass<T>
     **/
    FrameSupportWeightsPerDispatchClassU32: {
      normal: 'u32',
      operational: 'u32',
      mandatory: 'u32'
    },
    /**
     * Lookup114: frame_support::weights::RuntimeDbWeight
     **/
    FrameSupportWeightsRuntimeDbWeight: {
      read: 'u64',
      write: 'u64'
    },
    /**
     * Lookup115: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
      specName: 'Text',
      implName: 'Text',
      authoringVersion: 'u32',
      specVersion: 'u32',
      implVersion: 'u32',
      apis: 'Vec<([u8;8],u32)>',
      transactionVersion: 'u32'
    },
    /**
     * Lookup116: Cow<T>
     **/
    Lookup116: 'Vec<([u8;8],u32)>',
    /**
     * Lookup123: node_runtime::Call
     **/
    NodeRuntimeCall: 'Call',
    /**
     * Lookup125: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header, sp_consensus_babe::app::Public>
     **/
    SpConsensusSlotsEquivocationProof: {
      offender: 'SpCoreSr25519Public',
      slot: 'u64',
      firstHeader: 'SpRuntimeGenericHeader',
      secondHeader: 'SpRuntimeGenericHeader'
    },
    /**
     * Lookup126: sp_runtime::generic::header::Header
     **/
    SpRuntimeGenericHeader: {
      parentHash: 'H256',
      number: 'CompactU32',
      stateRoot: 'H256',
      extrinsicsRoot: 'H256',
      digest: 'SpRuntimeGenericDigest'
    },
    /**
     * Lookup127: sp_consensus_babe::app::Public
     **/
    Lookup127: '[u8;32]',
    /**
     * Lookup128: sp_consensus_slots::Slot
     **/
    SpConsensusSlotsSlot: 'u64',
    /**
     * Lookup129: sp_session::MembershipProof
     **/
    SpSessionMembershipProof: {
      session: 'u32',
      trieNodes: 'Vec<Bytes>',
      validatorCount: 'u32'
    },
    /**
     * Lookup130: sp_consensus_babe::digests::NextConfigDescriptor
     **/
    SpConsensusBabeDigestsNextConfigDescriptor: {
      _enum: {
        Unused0: 'Null',
        V1: {
          c: '(u64,u64)',
          allowedSlots: 'SpConsensusBabeAllowedSlots',
        },
      }
    },
    /**
     * Lookup132: sp_consensus_babe::AllowedSlots
     **/
    SpConsensusBabeAllowedSlots: {
      _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
    },
    /**
     * Lookup134
     **/
    CompactU64: 'Compact<u64>',
    /**
     * Lookup139: sp_runtime::multiaddress::MultiAddress<sp_core::crypto::AccountId32, AccountIndex>
     **/
    SpRuntimeMultiAddress: 'MultiAddress',
    /**
     * Lookup142: pallet_election_provider_multi_phase::RawSolution<node_runtime::NposCompactSolution16>
     **/
    PalletElectionProviderMultiPhaseRawSolution: {
      compact: 'NodeRuntimeNposCompactSolution16',
      score: '[u128;3]',
      round: 'u32'
    },
    /**
     * Lookup143: node_runtime::NposCompactSolution16
     **/
    NodeRuntimeNposCompactSolution16: {
      votes1: 'Vec<(CompactU32,CompactU16)>',
      votes2: 'Vec<(CompactU32,(CompactU16,Compact<PerU16>),CompactU16)>',
      votes3: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);2],CompactU16)>',
      votes4: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);3],CompactU16)>',
      votes5: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);4],CompactU16)>',
      votes6: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);5],CompactU16)>',
      votes7: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);6],CompactU16)>',
      votes8: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);7],CompactU16)>',
      votes9: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);8],CompactU16)>',
      votes10: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);9],CompactU16)>',
      votes11: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);10],CompactU16)>',
      votes12: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);11],CompactU16)>',
      votes13: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);12],CompactU16)>',
      votes14: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);13],CompactU16)>',
      votes15: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);14],CompactU16)>',
      votes16: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);15],CompactU16)>'
    },
    /**
     * Lookup146
     **/
    CompactU16: 'Compact<u16>',
    /**
     * Lookup151: sp_arithmetic::per_things::PerU16
     **/
    SpArithmeticPerThingsPerU16: 'PerU16',
    /**
     * Lookup195: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
     **/
    PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
      voters: 'CompactU32',
      targets: 'CompactU32'
    },
    /**
     * Lookup196: Option<T>
     **/
    Lookup196: 'Option<[u128;3]>',
    /**
     * Lookup199: sp_npos_elections::Support<sp_core::crypto::AccountId32>
     **/
    SpNposElectionsSupport: {
      total: 'u128',
      voters: 'Vec<(AccountId32,u128)>'
    },
    /**
     * Lookup201: pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
     **/
    PalletStakingRewardDestination: {
      _enum: {
        Staked: 'Null',
        Stash: 'Null',
        Controller: 'Null',
        Account: 'AccountId32',
        None: 'Null',
      }
    },
    /**
     * Lookup202: pallet_staking::ValidatorPrefs
     **/
    PalletStakingValidatorPrefs: {
      commission: 'Compact<Perbill>',
      blocked: 'bool'
    },
    /**
     * Lookup205: sp_arithmetic::per_things::Percent
     **/
    SpArithmeticPerThingsPercent: 'Percent',
    /**
     * Lookup206: Option<sp_arithmetic::per_things::Percent>
     **/
    Lookup206: 'Option<Percent>',
    /**
     * Lookup208: node_runtime::SessionKeys
     **/
    NodeRuntimeSessionKeys: {
      grandpa: 'SpCoreEd25519Public',
      babe: 'SpCoreSr25519Public',
      imOnline: 'SpCoreSr25519Public',
      authorityDiscovery: 'SpCoreSr25519Public'
    },
    /**
     * Lookup209: sp_authority_discovery::app::Public
     **/
    Lookup209: '[u8;32]',
    /**
     * Lookup211: pallet_democracy::vote::AccountVote<Balance>
     **/
    PalletDemocracyVoteAccountVoteU128: {
      _enum: {
        Standard: {
          vote: 'Vote',
          balance: 'u128',
        },
        Split: {
          aye: 'u128',
          nay: 'u128',
        },
      }
    },
    /**
     * Lookup212: pallet_democracy::vote::Vote
     **/
    PalletDemocracyVote: 'Vote',
    /**
     * Lookup213: pallet_democracy::conviction::Conviction
     **/
    PalletDemocracyConviction: {
      _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
    },
    /**
     * Lookup215: Option<sp_core::crypto::AccountId32>
     **/
    Lookup215: 'Option<AccountId32>',
    /**
     * Lookup218: pallet_elections_phragmen::Renouncing
     **/
    PalletElectionsPhragmenRenouncing: {
      _enum: {
        Member: 'Null',
        RunnerUp: 'Null',
        Candidate: 'CompactU32',
      }
    },
    /**
     * Lookup221: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
     **/
    SpFinalityGrandpaEquivocationProof: {
      setId: 'u64',
      equivocation: 'SpFinalityGrandpaEquivocation'
    },
    /**
     * Lookup222: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
     **/
    SpFinalityGrandpaEquivocation: {
      _enum: {
        Prevote: {
          roundNumber: 'u64',
          identity: 'SpCoreEd25519Public',
          first: '(FinalityGrandpaPrevote,SpCoreEd25519Signature)',
          second: '(FinalityGrandpaPrevote,SpCoreEd25519Signature)',
        },
        Precommit: {
          roundNumber: 'u64',
          identity: 'SpCoreEd25519Public',
          first: '(FinalityGrandpaPrecommit,SpCoreEd25519Signature)',
          second: '(FinalityGrandpaPrecommit,SpCoreEd25519Signature)',
        },
      }
    },
    /**
     * Lookup223: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
     **/
    Lookup223: {
      roundNumber: 'u64',
      identity: 'SpCoreEd25519Public',
      first: '(FinalityGrandpaPrevote,SpCoreEd25519Signature)',
      second: '(FinalityGrandpaPrevote,SpCoreEd25519Signature)'
    },
    /**
     * Lookup224: finality_grandpa::Prevote<primitive_types::H256, N>
     **/
    FinalityGrandpaPrevote: {
      targetHash: 'H256',
      targetNumber: 'u32'
    },
    /**
     * Lookup225: sp_finality_grandpa::app::Signature
     **/
    Lookup225: '[u8;64]',
    /**
     * Lookup226: sp_core::ed25519::Signature
     **/
    Lookup226: '[u8;64]',
    /**
     * Lookup229: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
     **/
    Lookup229: {
      roundNumber: 'u64',
      identity: 'SpCoreEd25519Public',
      first: '(FinalityGrandpaPrecommit,SpCoreEd25519Signature)',
      second: '(FinalityGrandpaPrecommit,SpCoreEd25519Signature)'
    },
    /**
     * Lookup230: finality_grandpa::Precommit<primitive_types::H256, N>
     **/
    FinalityGrandpaPrecommit: {
      targetHash: 'H256',
      targetNumber: 'u32'
    },
    /**
     * Lookup236: pallet_im_online::Heartbeat<BlockNumber>
     **/
    PalletImOnlineHeartbeatU32: {
      blockNumber: 'u32',
      networkState: 'SpCoreOffchainOpaqueNetworkState',
      sessionIndex: 'u32',
      authorityIndex: 'u32',
      validatorsLen: 'u32'
    },
    /**
     * Lookup237: sp_core::offchain::OpaqueNetworkState
     **/
    SpCoreOffchainOpaqueNetworkState: {
      peerId: 'Bytes',
      externalAddresses: 'Vec<Bytes>'
    },
    /**
     * Lookup238: sp_core::OpaquePeerId
     **/
    SpCoreOpaquePeerId: 'Bytes',
    /**
     * Lookup240: sp_core::offchain::OpaqueMultiaddr
     **/
    SpCoreOffchainOpaqueMultiaddr: 'Bytes',
    /**
     * Lookup241: pallet_im_online::sr25519::app_sr25519::Signature
     **/
    Lookup241: '[u8;64]',
    /**
     * Lookup242: sp_core::sr25519::Signature
     **/
    Lookup242: '[u8;64]',
    /**
     * Lookup244: pallet_identity::types::IdentityInfo<FieldLimit>
     **/
    PalletIdentityTypesIdentityInfo: {
      additional: 'Vec<(Data,Data)>',
      display: 'Data',
      legal: 'Data',
      web: 'Data',
      riot: 'Data',
      email: 'Data',
      pgpFingerprint: 'Option<[u8;20]>',
      image: 'Data',
      twitter: 'Data'
    },
    /**
     * Lookup245: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup245: 'Vec<(Data,Data)>',
    /**
     * Lookup247: pallet_identity::types::Data
     **/
    PalletIdentityTypesData: 'Data',
    /**
     * Lookup277: Option<T>
     **/
    Lookup277: 'Option<[u8;20]>',
    /**
     * Lookup280: pallet_identity::types::IdentityFields
     **/
    PalletIdentityTypesIdentityFields: 'IdentityFields',
    /**
     * Lookup281: pallet_identity::types::IdentityField
     **/
    PalletIdentityTypesIdentityField: {
      _enum: ['Unused0', 'Display', 'Legal', 'Unused3', 'Web', 'Unused5', 'Unused6', 'Unused7', 'Riot', 'Unused9', 'Unused10', 'Unused11', 'Unused12', 'Unused13', 'Unused14', 'Unused15', 'Email', 'Unused17', 'Unused18', 'Unused19', 'Unused20', 'Unused21', 'Unused22', 'Unused23', 'Unused24', 'Unused25', 'Unused26', 'Unused27', 'Unused28', 'Unused29', 'Unused30', 'Unused31', 'PgpFingerprint', 'Unused33', 'Unused34', 'Unused35', 'Unused36', 'Unused37', 'Unused38', 'Unused39', 'Unused40', 'Unused41', 'Unused42', 'Unused43', 'Unused44', 'Unused45', 'Unused46', 'Unused47', 'Unused48', 'Unused49', 'Unused50', 'Unused51', 'Unused52', 'Unused53', 'Unused54', 'Unused55', 'Unused56', 'Unused57', 'Unused58', 'Unused59', 'Unused60', 'Unused61', 'Unused62', 'Unused63', 'Image', 'Unused65', 'Unused66', 'Unused67', 'Unused68', 'Unused69', 'Unused70', 'Unused71', 'Unused72', 'Unused73', 'Unused74', 'Unused75', 'Unused76', 'Unused77', 'Unused78', 'Unused79', 'Unused80', 'Unused81', 'Unused82', 'Unused83', 'Unused84', 'Unused85', 'Unused86', 'Unused87', 'Unused88', 'Unused89', 'Unused90', 'Unused91', 'Unused92', 'Unused93', 'Unused94', 'Unused95', 'Unused96', 'Unused97', 'Unused98', 'Unused99', 'Unused100', 'Unused101', 'Unused102', 'Unused103', 'Unused104', 'Unused105', 'Unused106', 'Unused107', 'Unused108', 'Unused109', 'Unused110', 'Unused111', 'Unused112', 'Unused113', 'Unused114', 'Unused115', 'Unused116', 'Unused117', 'Unused118', 'Unused119', 'Unused120', 'Unused121', 'Unused122', 'Unused123', 'Unused124', 'Unused125', 'Unused126', 'Unused127', 'Twitter']
    },
    /**
     * Lookup282: pallet_identity::types::Judgement<Balance>
     **/
    PalletIdentityTypesJudgementU128: {
      _enum: {
        Unknown: 'Null',
        FeePaid: 'u128',
        Reasonable: 'Null',
        KnownGood: 'Null',
        OutOfDate: 'Null',
        LowQuality: 'Null',
        Erroneous: 'Null',
      }
    },
    /**
     * Lookup284: pallet_society::Judgement
     **/
    PalletSocietyJudgement: {
      _enum: ['Rebid', 'Reject', 'Approve']
    },
    /**
     * Lookup287: pallet_vesting::VestingInfo<Balance, BlockNumber>
     **/
    PalletVestingVestingInfo: {
      locked: 'u128',
      perBlock: 'u128',
      startingBlock: 'u32'
    },
    /**
     * Lookup289: Option<T>
     **/
    Lookup289: 'Option<(u32,u32)>',
    /**
     * Lookup291: Option<node_runtime::ProxyType>
     **/
    Lookup291: 'Option<NodeRuntimeProxyType>',
    /**
     * Lookup293: Option<pallet_multisig::Timepoint<BlockNumber>>
     **/
    Lookup293: 'Option<PalletMultisigTimepointU32>',
    /**
     * Lookup297: pallet_assets::types::DestroyWitness
     **/
    PalletAssetsTypesDestroyWitness: {
      accounts: 'CompactU32',
      sufficients: 'CompactU32',
      approvals: 'CompactU32'
    },
    /**
     * Lookup301: sp_arithmetic::per_things::Perquintill
     **/
    SpArithmeticPerThingsPerquintill: 'Perquintill',
    /**
     * Lookup303: pallet_uniques::types::DestroyWitness
     **/
    PalletUniquesTypesDestroyWitness: {
      instances: 'CompactU32',
      instanceMetadatas: 'CompactU32',
      attributes: 'CompactU32'
    },
    /**
     * Lookup304: Option<sp_runtime::multiaddress::MultiAddress<sp_core::crypto::AccountId32, AccountIndex>>
     **/
    Lookup304: 'Option<MultiAddress>',
    /**
     * Lookup306: sp_transaction_storage_proof::TransactionStorageProof
     **/
    SpTransactionStorageProofTransactionStorageProof: {
      chunk: 'Bytes',
      proof: 'Vec<Bytes>'
    },
    /**
     * Lookup310: Option<T>
     **/
    Lookup310: 'Option<[u8;32]>',
    /**
     * Lookup311: sp_consensus_babe::BabeEpochConfiguration
     **/
    SpConsensusBabeBabeEpochConfiguration: {
      c: '(u64,u64)',
      allowedSlots: 'SpConsensusBabeAllowedSlots'
    },
    /**
     * Lookup314: pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, sp_core::crypto::AccountId32>
     **/
    PalletAuthorshipUncleEntryItem: {
      _enum: {
        InclusionHeight: 'u32',
        Uncle: '(H256,Option<AccountId32>)',
      }
    },
    /**
     * Lookup318: frame_support::storage::weak_bounded_vec::WeakBoundedVec<pallet_balances::BalanceLock<Balance>, S>
     **/
    FrameSupportStorageWeakBoundedVec: 'Vec<PalletBalancesBalanceLockU128>',
    /**
     * Lookup319: pallet_balances::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLockU128: {
      id: '[u8;8]',
      amount: 'u128',
      reasons: 'PalletBalancesReasons'
    },
    /**
     * Lookup320: pallet_balances::Reasons
     **/
    PalletBalancesReasons: {
      _enum: ['Fee', 'Misc', 'All']
    },
    /**
     * Lookup322: frame_support::storage::bounded_vec::BoundedVec<pallet_balances::ReserveData<ReserveIdentifier, Balance>, S>
     **/
    Lookup322: 'Vec<PalletBalancesReserveData>',
    /**
     * Lookup323: pallet_balances::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
      id: '[u8;8]',
      amount: 'u128'
    },
    /**
     * Lookup325: pallet_balances::Releases
     **/
    PalletBalancesReleases: {
      _enum: ['V1_0_0', 'V2_0_0']
    },
    /**
     * Lookup327: sp_arithmetic::fixed_point::FixedU128
     **/
    SpArithmeticFixedPointFixedU128: 'u128',
    /**
     * Lookup328: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
      _enum: ['V1Ancient', 'V2']
    },
    /**
     * Lookup330: frame_support::weights::WeightToFeeCoefficient<Balance>
     **/
    FrameSupportWeightsWeightToFeeCoefficientU128: {
      coeffInteger: 'u128',
      coeffFrac: 'Perbill',
      negative: 'bool',
      degree: 'u8'
    },
    /**
     * Lookup331: pallet_election_provider_multi_phase::Phase<Bn>
     **/
    PalletElectionProviderMultiPhasePhaseU32: {
      _enum: {
        Off: 'Null',
        Signed: 'Null',
        Unsigned: '(bool,u32)',
        Emergency: 'Null',
      }
    },
    /**
     * Lookup333: pallet_election_provider_multi_phase::ReadySolution<sp_core::crypto::AccountId32>
     **/
    PalletElectionProviderMultiPhaseReadySolution: {
      supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
      score: '[u128;3]',
      compute: 'PalletElectionProviderMultiPhaseElectionCompute'
    },
    /**
     * Lookup334: pallet_election_provider_multi_phase::RoundSnapshot<sp_core::crypto::AccountId32>
     **/
    PalletElectionProviderMultiPhaseRoundSnapshot: {
      voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
      targets: 'Vec<AccountId32>'
    },
    /**
     * Lookup337: frame_support::storage::bounded_btree_map::BoundedBTreeMap<K, V, S>
     **/
    FrameSupportStorageBoundedBTreeMap: 'BTreeMap<[u128;3], u32>',
    /**
     * Lookup338: BTreeMap<K, V>
     **/
    Lookup338: 'BTreeMap<[u128;3], u32>',
    /**
     * Lookup341: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, node_runtime::NposCompactSolution16>
     **/
    PalletElectionProviderMultiPhaseSignedSignedSubmission: {
      who: 'AccountId32',
      deposit: 'u128',
      solution: 'PalletElectionProviderMultiPhaseRawSolution'
    },
    /**
     * Lookup343: pallet_staking::StakingLedger<sp_core::crypto::AccountId32, Balance>
     **/
    PalletStakingStakingLedger: {
      stash: 'AccountId32',
      total: 'CompactU128',
      active: 'CompactU128',
      unlocking: 'Vec<PalletStakingUnlockChunkU128>',
      claimedRewards: 'Vec<u32>'
    },
    /**
     * Lookup345: pallet_staking::UnlockChunk<Balance>
     **/
    PalletStakingUnlockChunkU128: {
      value: 'CompactU128',
      era: 'CompactU32'
    },
    /**
     * Lookup346: pallet_staking::Nominations<sp_core::crypto::AccountId32>
     **/
    PalletStakingNominations: {
      targets: 'Vec<AccountId32>',
      submittedIn: 'u32',
      suppressed: 'bool'
    },
    /**
     * Lookup347: pallet_staking::ActiveEraInfo
     **/
    PalletStakingActiveEraInfo: {
      index: 'u32',
      start: 'OptionU64'
    },
    /**
     * Lookup348: pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
     **/
    PalletStakingEraRewardPoints: {
      total: 'u32',
      individual: 'BTreeMap<AccountId32, u32>'
    },
    /**
     * Lookup349: BTreeMap<sp_core::crypto::AccountId32, V>
     **/
    Lookup349: 'BTreeMap<AccountId32, u32>',
    /**
     * Lookup352: pallet_staking::Forcing
     **/
    PalletStakingForcing: {
      _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
    },
    /**
     * Lookup354: pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
     **/
    PalletStakingUnappliedSlash: {
      validator: 'AccountId32',
      own: 'u128',
      others: 'Vec<(AccountId32,u128)>',
      reporters: 'Vec<AccountId32>',
      payout: 'u128'
    },
    /**
     * Lookup356: pallet_staking::slashing::SlashingSpans
     **/
    PalletStakingSlashingSlashingSpans: {
      spanIndex: 'u32',
      lastStart: 'u32',
      lastNonzeroSlash: 'u32',
      prior: 'Vec<u32>'
    },
    /**
     * Lookup357: pallet_staking::slashing::SpanRecord<Balance>
     **/
    PalletStakingSlashingSpanRecordU128: {
      slashed: 'u128',
      paidOut: 'u128'
    },
    /**
     * Lookup358: pallet_staking::Releases
     **/
    PalletStakingReleases: {
      _enum: ['V1_0_0Ancient', 'V2_0_0', 'V3_0_0', 'V4_0_0', 'V5_0_0', 'V6_0_0', 'V7_0_0']
    },
    /**
     * Lookup363: sp_core::crypto::KeyTypeId
     **/
    SpCoreCryptoKeyTypeId: '[u8;4]',
    /**
     * Lookup368: pallet_democracy::PreimageStatus<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletDemocracyPreimageStatus: {
      _enum: {
        Missing: 'u32',
        Available: {
          data: 'Bytes',
          provider: 'AccountId32',
          deposit: 'u128',
          since: 'u32',
          expiry: 'OptionU32',
        },
      }
    },
    /**
     * Lookup369: pallet_democracy::types::ReferendumInfo<BlockNumber, primitive_types::H256, Balance>
     **/
    PalletDemocracyTypesReferendumInfo: {
      _enum: {
        Ongoing: 'PalletDemocracyTypesReferendumStatus',
        Finished: {
          approved: 'bool',
          end: 'u32',
        },
      }
    },
    /**
     * Lookup370: pallet_democracy::types::ReferendumStatus<BlockNumber, primitive_types::H256, Balance>
     **/
    PalletDemocracyTypesReferendumStatus: {
      end: 'u32',
      proposalHash: 'H256',
      threshold: 'PalletDemocracyVoteThreshold',
      delay: 'u32',
      tally: 'PalletDemocracyTypesTallyU128'
    },
    /**
     * Lookup371: pallet_democracy::types::Tally<Balance>
     **/
    PalletDemocracyTypesTallyU128: {
      ayes: 'u128',
      nays: 'u128',
      turnout: 'u128'
    },
    /**
     * Lookup372: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletDemocracyVoteVoting: {
      _enum: {
        Direct: {
          votes: 'Vec<(u32,PalletDemocracyVoteAccountVoteU128)>',
          delegations: 'PalletDemocracyTypesDelegationsU128',
          prior: 'PalletDemocracyVotePriorLock',
        },
        Delegating: {
          balance: 'u128',
          target: 'AccountId32',
          conviction: 'PalletDemocracyConviction',
          delegations: 'PalletDemocracyTypesDelegationsU128',
          prior: 'PalletDemocracyVotePriorLock',
        },
      }
    },
    /**
     * Lookup375: pallet_democracy::types::Delegations<Balance>
     **/
    PalletDemocracyTypesDelegationsU128: {
      votes: 'u128',
      capital: 'u128'
    },
    /**
     * Lookup376: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletDemocracyVotePriorLock: '(u32,u128)',
    /**
     * Lookup379: pallet_democracy::Releases
     **/
    PalletDemocracyReleases: {
      _enum: ['V1']
    },
    /**
     * Lookup381: frame_support::storage::bounded_vec::BoundedVec<primitive_types::H256, S>
     **/
    Lookup381: 'Vec<H256>',
    /**
     * Lookup382: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletCollectiveVotes: {
      index: 'u32',
      threshold: 'u32',
      ayes: 'Vec<AccountId32>',
      nays: 'Vec<AccountId32>',
      end: 'u32'
    },
    /**
     * Lookup384: frame_support::storage::bounded_vec::BoundedVec<primitive_types::H256, S>
     **/
    Lookup384: 'Vec<H256>',
    /**
     * Lookup387: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenSeatHolder: {
      who: 'AccountId32',
      stake: 'u128',
      deposit: 'u128'
    },
    /**
     * Lookup388: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenVoter: {
      votes: 'Vec<AccountId32>',
      stake: 'u128',
      deposit: 'u128'
    },
    /**
     * Lookup391: pallet_grandpa::StoredState<N>
     **/
    PalletGrandpaStoredStateU32: {
      _enum: {
        Live: 'Null',
        PendingPause: {
          scheduledAt: 'u32',
          delay: 'u32',
        },
        Paused: 'Null',
        PendingResume: {
          scheduledAt: 'u32',
          delay: 'u32',
        },
      }
    },
    /**
     * Lookup392: pallet_grandpa::StoredPendingChange<N>
     **/
    PalletGrandpaStoredPendingChangeU32: {
      scheduledAt: 'u32',
      delay: 'u32',
      nextAuthorities: 'Vec<(SpCoreEd25519Public,u64)>',
      forced: 'OptionU32'
    },
    /**
     * Lookup394: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
      proposer: 'AccountId32',
      value: 'u128',
      beneficiary: 'AccountId32',
      bond: 'u128'
    },
    /**
     * Lookup395: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup395: 'Vec<u32>',
    /**
     * Lookup396: sp_arithmetic::per_things::Permill
     **/
    SpArithmeticPerThingsPermill: 'Permill',
    /**
     * Lookup397: frame_support::PalletId
     **/
    FrameSupportPalletId: '[u8;8]',
    /**
     * Lookup399: pallet_contracts::wasm::PrefabWasmModule<T>
     **/
    PalletContractsWasmPrefabWasmModule: {
      instructionWeightsVersion: 'CompactU32',
      initial: 'CompactU32',
      maximum: 'CompactU32',
      refcount: 'CompactU64',
      reserved: 'Option<Null>',
      code: 'Bytes',
      originalCodeLen: 'u32'
    },
    /**
     * Lookup400: Option<T>
     **/
    Lookup400: 'Option<Null>',
    /**
     * Lookup401: pallet_contracts::storage::ContractInfo<T>
     **/
    PalletContractsStorageContractInfo: {
      _enum: {
        Alive: 'PalletContractsStorageRawAliveContractInfo',
        Tombstone: 'H256',
      }
    },
    /**
     * Lookup402: pallet_contracts::storage::RawAliveContractInfo<primitive_types::H256, Balance, BlockNumber>
     **/
    PalletContractsStorageRawAliveContractInfo: {
      trieId: 'Bytes',
      storageSize: 'u32',
      pairCount: 'u32',
      codeHash: 'H256',
      rentAllowance: 'u128',
      rentPaid: 'u128',
      deductBlock: 'u32',
      lastWrite: 'OptionU32',
      reserved: 'Option<Null>'
    },
    /**
     * Lookup403: pallet_contracts::storage::RawTombstoneContractInfo<primitive_types::H256, sp_runtime::traits::BlakeTwo256>
     **/
    PalletContractsStorageRawTombstoneContractInfo: 'H256',
    /**
     * Lookup404: sp_runtime::traits::BlakeTwo256
     **/
    SpRuntimeTraitsBlakeTwo256: 'Null',
    /**
     * Lookup406: pallet_contracts::storage::DeletedContract
     **/
    PalletContractsStorageDeletedContract: {
      pairCount: 'u32',
      trieId: 'Bytes'
    },
    /**
     * Lookup407: pallet_contracts::schedule::Schedule<T>
     **/
    PalletContractsSchedule: {
      limits: 'PalletContractsScheduleLimits',
      instructionWeights: 'PalletContractsScheduleInstructionWeights',
      hostFnWeights: 'PalletContractsScheduleHostFnWeights'
    },
    /**
     * Lookup408: pallet_contracts::schedule::Limits
     **/
    PalletContractsScheduleLimits: {
      eventTopics: 'u32',
      stackHeight: 'u32',
      globals: 'u32',
      parameters: 'u32',
      memoryPages: 'u32',
      tableSize: 'u32',
      brTableSize: 'u32',
      subjectLen: 'u32',
      callDepth: 'u32',
      payloadLen: 'u32',
      codeLen: 'u32'
    },
    /**
     * Lookup409: pallet_contracts::schedule::InstructionWeights<T>
     **/
    PalletContractsScheduleInstructionWeights: {
      _alias: {
        r_if: 'r#if',
      },
      version: 'u32',
      i64Const: 'u32',
      i64Load: 'u32',
      i64Store: 'u32',
      select: 'u32',
      r_if: 'u32',
      br: 'u32',
      brIf: 'u32',
      brTable: 'u32',
      brTablePerEntry: 'u32',
      call: 'u32',
      callIndirect: 'u32',
      callIndirectPerParam: 'u32',
      localGet: 'u32',
      localSet: 'u32',
      localTee: 'u32',
      globalGet: 'u32',
      globalSet: 'u32',
      memoryCurrent: 'u32',
      memoryGrow: 'u32',
      i64Clz: 'u32',
      i64Ctz: 'u32',
      i64Popcnt: 'u32',
      i64Eqz: 'u32',
      i64Extendsi32: 'u32',
      i64Extendui32: 'u32',
      i32Wrapi64: 'u32',
      i64Eq: 'u32',
      i64Ne: 'u32',
      i64Lts: 'u32',
      i64Ltu: 'u32',
      i64Gts: 'u32',
      i64Gtu: 'u32',
      i64Les: 'u32',
      i64Leu: 'u32',
      i64Ges: 'u32',
      i64Geu: 'u32',
      i64Add: 'u32',
      i64Sub: 'u32',
      i64Mul: 'u32',
      i64Divs: 'u32',
      i64Divu: 'u32',
      i64Rems: 'u32',
      i64Remu: 'u32',
      i64And: 'u32',
      i64Or: 'u32',
      i64Xor: 'u32',
      i64Shl: 'u32',
      i64Shrs: 'u32',
      i64Shru: 'u32',
      i64Rotl: 'u32',
      i64Rotr: 'u32'
    },
    /**
     * Lookup410: pallet_contracts::schedule::HostFnWeights<T>
     **/
    PalletContractsScheduleHostFnWeights: {
      _alias: {
        r_return: 'r#return',
      },
      caller: 'u64',
      address: 'u64',
      gasLeft: 'u64',
      balance: 'u64',
      valueTransferred: 'u64',
      minimumBalance: 'u64',
      tombstoneDeposit: 'u64',
      rentAllowance: 'u64',
      blockNumber: 'u64',
      now: 'u64',
      weightToFee: 'u64',
      gas: 'u64',
      input: 'u64',
      inputPerByte: 'u64',
      r_return: 'u64',
      returnPerByte: 'u64',
      terminate: 'u64',
      restoreTo: 'u64',
      restoreToPerDelta: 'u64',
      random: 'u64',
      depositEvent: 'u64',
      depositEventPerTopic: 'u64',
      depositEventPerByte: 'u64',
      debugMessage: 'u64',
      setRentAllowance: 'u64',
      setStorage: 'u64',
      setStoragePerByte: 'u64',
      clearStorage: 'u64',
      getStorage: 'u64',
      getStoragePerByte: 'u64',
      transfer: 'u64',
      call: 'u64',
      callTransferSurcharge: 'u64',
      callPerInputByte: 'u64',
      callPerOutputByte: 'u64',
      instantiate: 'u64',
      instantiatePerInputByte: 'u64',
      instantiatePerOutputByte: 'u64',
      instantiatePerSaltByte: 'u64',
      hashSha2256: 'u64',
      hashSha2256PerByte: 'u64',
      hashKeccak256: 'u64',
      hashKeccak256PerByte: 'u64',
      hashBlake2256: 'u64',
      hashBlake2256PerByte: 'u64',
      hashBlake2128: 'u64',
      hashBlake2128PerByte: 'u64'
    },
    /**
     * Lookup415: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
     **/
    SpStakingOffenceOffenceDetails: {
      offender: '(AccountId32,PalletStakingExposure)',
      reporters: 'Vec<AccountId32>'
    },
    /**
     * Lookup416: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    PalletIdentityTypesRegistration: {
      judgements: 'Vec<(u32,PalletIdentityTypesJudgementU128)>',
      deposit: 'u128',
      info: 'PalletIdentityTypesIdentityInfo'
    },
    /**
     * Lookup417: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup417: 'Vec<(u32,PalletIdentityTypesJudgementU128)>',
    /**
     * Lookup421: frame_support::storage::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>
     **/
    Lookup421: 'Vec<AccountId32>',
    /**
     * Lookup422: frame_support::storage::bounded_vec::BoundedVec<Option<pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>>, S>
     **/
    Lookup422: 'Vec<Option<PalletIdentityTypesRegistrarInfo>>',
    /**
     * Lookup423: Option<pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>>
     **/
    Lookup423: 'Option<PalletIdentityTypesRegistrarInfo>',
    /**
     * Lookup424: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
     **/
    PalletIdentityTypesRegistrarInfo: {
      account: 'AccountId32',
      fee: 'u128',
      fields: 'IdentityFields'
    },
    /**
     * Lookup428: pallet_society::Bid<sp_core::crypto::AccountId32, Balance>
     **/
    PalletSocietyBid: {
      who: 'AccountId32',
      kind: 'PalletSocietyBidKind',
      value: 'u128'
    },
    /**
     * Lookup429: pallet_society::BidKind<sp_core::crypto::AccountId32, Balance>
     **/
    PalletSocietyBidKind: {
      _enum: {
        Deposit: 'u128',
        Vouch: '(AccountId32,u128)',
      }
    },
    /**
     * Lookup431: pallet_society::VouchingStatus
     **/
    PalletSocietyVouchingStatus: {
      _enum: ['Vouching', 'Banned']
    },
    /**
     * Lookup434: pallet_society::Vote
     **/
    PalletSocietyVote: {
      _enum: ['Skeptic', 'Reject', 'Approve']
    },
    /**
     * Lookup436: pallet_recovery::RecoveryConfig<BlockNumber, Balance, sp_core::crypto::AccountId32>
     **/
    PalletRecoveryRecoveryConfig: {
      delayPeriod: 'u32',
      deposit: 'u128',
      friends: 'Vec<AccountId32>',
      threshold: 'u16'
    },
    /**
     * Lookup437: pallet_recovery::ActiveRecovery<BlockNumber, Balance, sp_core::crypto::AccountId32>
     **/
    PalletRecoveryActiveRecovery: {
      created: 'u32',
      deposit: 'u128',
      friends: 'Vec<AccountId32>'
    },
    /**
     * Lookup441: Option<pallet_scheduler::ScheduledV2<node_runtime::Call, BlockNumber, node_runtime::OriginCaller, sp_core::crypto::AccountId32>>
     **/
    Lookup441: 'Option<PalletSchedulerScheduledV2>',
    /**
     * Lookup442: pallet_scheduler::ScheduledV2<node_runtime::Call, BlockNumber, node_runtime::OriginCaller, sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduledV2: {
      maybeId: 'Option<Bytes>',
      priority: 'u8',
      call: 'Call',
      maybePeriodic: 'Option<(u32,u32)>',
      origin: 'NodeRuntimeOriginCaller'
    },
    /**
     * Lookup443: node_runtime::OriginCaller
     **/
    NodeRuntimeOriginCaller: {
      _enum: {
        system: 'FrameSystemRawOrigin',
        Unused1: 'Null',
        Unused2: 'Null',
        Void: 'SpCoreVoid',
        Unused4: 'Null',
        Unused5: 'Null',
        Unused6: 'Null',
        Unused7: 'Null',
        Unused8: 'Null',
        Unused9: 'Null',
        Unused10: 'Null',
        Unused11: 'Null',
        Council: 'PalletCollectiveRawOriginInstance1',
        TechnicalCommittee: 'PalletCollectiveRawOriginInstance2',
      }
    },
    /**
     * Lookup444: frame_system::RawOrigin<sp_core::crypto::AccountId32>
     **/
    FrameSystemRawOrigin: {
      _enum: {
        Root: 'Null',
        Signed: 'AccountId32',
        None: 'Null',
      }
    },
    /**
     * Lookup445: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, pallet_collective::Instance1>
     **/
    PalletCollectiveRawOriginInstance1: {
      _enum: {
        Members: '(u32,u32)',
        Member: 'AccountId32',
        _Phantom: 'Null',
      }
    },
    /**
     * Lookup446: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, pallet_collective::Instance2>
     **/
    PalletCollectiveRawOriginInstance2: {
      _enum: {
        Members: '(u32,u32)',
        Member: 'AccountId32',
        _Phantom: 'Null',
      }
    },
    /**
     * Lookup447: sp_core::Void
     **/
    SpCoreVoid: 'Null',
    /**
     * Lookup448: pallet_scheduler::Releases
     **/
    PalletSchedulerReleases: {
      _enum: ['V1', 'V2']
    },
    /**
     * Lookup451: frame_support::storage::bounded_vec::BoundedVec<pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, node_runtime::ProxyType, BlockNumber>, S>
     **/
    Lookup451: 'Vec<PalletProxyProxyDefinition>',
    /**
     * Lookup452: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, node_runtime::ProxyType, BlockNumber>
     **/
    PalletProxyProxyDefinition: {
      delegate: 'AccountId32',
      proxyType: 'NodeRuntimeProxyType',
      delay: 'u32'
    },
    /**
     * Lookup455: frame_support::storage::bounded_vec::BoundedVec<pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>, S>
     **/
    Lookup455: 'Vec<PalletProxyAnnouncement>',
    /**
     * Lookup456: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
     **/
    PalletProxyAnnouncement: {
      real: 'AccountId32',
      callHash: 'H256',
      height: 'u32'
    },
    /**
     * Lookup459: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32>
     **/
    PalletMultisigMultisig: {
      when: 'PalletMultisigTimepointU32',
      deposit: 'u128',
      depositor: 'AccountId32',
      approvals: 'Vec<AccountId32>'
    },
    /**
     * Lookup462: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletBountiesBounty: {
      proposer: 'AccountId32',
      value: 'u128',
      fee: 'u128',
      curatorDeposit: 'u128',
      bond: 'u128',
      status: 'PalletBountiesBountyStatus'
    },
    /**
     * Lookup463: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletBountiesBountyStatus: {
      _enum: {
        Proposed: 'Null',
        Approved: 'Null',
        Funded: 'Null',
        CuratorProposed: {
          curator: 'AccountId32',
        },
        Active: {
          curator: 'AccountId32',
          updateDue: 'u32',
        },
        PendingPayout: {
          curator: 'AccountId32',
          beneficiary: 'AccountId32',
          unlockAt: 'u32',
        },
      }
    },
    /**
     * Lookup465: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
     **/
    PalletTipsOpenTip: {
      reason: 'H256',
      who: 'AccountId32',
      finder: 'AccountId32',
      deposit: 'u128',
      closes: 'OptionU32',
      tips: 'Vec<(AccountId32,u128)>',
      findersFee: 'bool'
    },
    /**
     * Lookup467: pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance>
     **/
    PalletAssetsTypesAssetDetails: {
      owner: 'AccountId32',
      issuer: 'AccountId32',
      admin: 'AccountId32',
      freezer: 'AccountId32',
      supply: 'u64',
      deposit: 'u128',
      minBalance: 'u64',
      isSufficient: 'bool',
      accounts: 'u32',
      sufficients: 'u32',
      approvals: 'u32',
      isFrozen: 'bool'
    },
    /**
     * Lookup468: pallet_assets::types::AssetBalance<Balance, Extra>
     **/
    PalletAssetsTypesAssetBalance: {
      balance: 'u64',
      isFrozen: 'bool',
      sufficient: 'bool',
      extra: 'Null'
    },
    /**
     * Lookup470: pallet_assets::types::Approval<Balance, DepositBalance>
     **/
    PalletAssetsTypesApproval: {
      amount: 'u64',
      deposit: 'u128'
    },
    /**
     * Lookup471: pallet_assets::types::AssetMetadata<DepositBalance, frame_support::storage::bounded_vec::BoundedVec<T, S>>
     **/
    PalletAssetsTypesAssetMetadata: {
      deposit: 'u128',
      name: 'Bytes',
      symbol: 'Bytes',
      decimals: 'u8',
      isFrozen: 'bool'
    },
    /**
     * Lookup473: pallet_lottery::LotteryConfig<BlockNumber, Balance>
     **/
    PalletLotteryLotteryConfig: {
      price: 'u128',
      start: 'u32',
      length: 'u32',
      delay: 'u32',
      repeat: 'bool'
    },
    /**
     * Lookup478: pallet_gilt::pallet::GiltBid<Balance, sp_core::crypto::AccountId32>
     **/
    PalletGiltPalletGiltBid: {
      amount: 'u128',
      who: 'AccountId32'
    },
    /**
     * Lookup479: pallet_gilt::pallet::ActiveGiltsTotal<Balance>
     **/
    PalletGiltPalletActiveGiltsTotalU128: {
      frozen: 'u128',
      proportion: 'Perquintill',
      index: 'u32',
      target: 'Perquintill'
    },
    /**
     * Lookup480: pallet_gilt::pallet::ActiveGilt<Balance, sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletGiltPalletActiveGilt: {
      proportion: 'Perquintill',
      amount: 'u128',
      who: 'AccountId32',
      expiry: 'u32'
    },
    /**
     * Lookup482: pallet_uniques::types::ClassDetails<sp_core::crypto::AccountId32, DepositBalance>
     **/
    PalletUniquesTypesClassDetails: {
      owner: 'AccountId32',
      issuer: 'AccountId32',
      admin: 'AccountId32',
      freezer: 'AccountId32',
      totalDeposit: 'u128',
      freeHolding: 'bool',
      instances: 'u32',
      instanceMetadatas: 'u32',
      attributes: 'u32',
      isFrozen: 'bool'
    },
    /**
     * Lookup484: pallet_uniques::types::InstanceDetails<sp_core::crypto::AccountId32, DepositBalance>
     **/
    PalletUniquesTypesInstanceDetails: {
      owner: 'AccountId32',
      approved: 'Option<AccountId32>',
      isFrozen: 'bool',
      deposit: 'u128'
    },
    /**
     * Lookup485: pallet_uniques::types::ClassMetadata<DepositBalance, StringLimit>
     **/
    PalletUniquesTypesClassMetadata: {
      deposit: 'u128',
      data: 'Bytes',
      isFrozen: 'bool'
    },
    /**
     * Lookup486: pallet_uniques::types::InstanceMetadata<DepositBalance, StringLimit>
     **/
    PalletUniquesTypesInstanceMetadata: {
      deposit: 'u128',
      data: 'Bytes',
      isFrozen: 'bool'
    },
    /**
     * Lookup491: pallet_transaction_storage::TransactionInfo
     **/
    PalletTransactionStorageTransactionInfo: {
      _alias: {
        size_: 'size',
      },
      chunkRoot: 'H256',
      contentHash: 'H256',
      size_: 'u32',
      blockChunks: 'u32'
    },
    /**
     * Lookup493: sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic
     **/
    SpRuntimeGenericUncheckedExtrinsic: 'Bytes',
    /**
     * Lookup494: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: 'Null',
    /**
     * Lookup495: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: 'Null',
    /**
     * Lookup496: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: 'Null',
    /**
     * Lookup497: frame_system::extensions::check_mortality::CheckMortality<T>
     **/
    FrameSystemExtensionsCheckMortality: 'Era',
    /**
     * Lookup498: sp_runtime::generic::era::Era
     **/
    SpRuntimeGenericEra: 'Era',
    /**
     * Lookup499: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    Lookup499: 'Compact<u32>',
    /**
     * Lookup500: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: 'Null',
    /**
     * Lookup501: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    Lookup501: 'Compact<u128>'
  }
} as Definitions;
