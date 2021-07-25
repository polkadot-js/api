// Auto-generated via `yarn polkadot-types-from-`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    /**
     * 0: sp_core::crypto::AccountId32
     **/
    Lookup0: 'AccountId32',
    Lookup1: '[u8;32]',
    Lookup2: 'u8',
    /**
     * 3: frame_system::AccountInfo<Index, <field>: pallet_balances::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
      nonce: 'u32',
      consumers: 'u32',
      providers: 'u32',
      sufficients: 'u32',
      data: 'PalletBalancesAccountDataU128'
    },
    Lookup3: 'FrameSystemAccountInfo',
    Lookup4: 'u32',
    /**
     * 5: pallet_balances::AccountData<Balance>
     **/
    PalletBalancesAccountDataU128: {
      free: 'u128',
      reserved: 'u128',
      miscFrozen: 'u128',
      feeFrozen: 'u128'
    },
    Lookup5: 'PalletBalancesAccountDataU128',
    Lookup6: 'u128',
    /**
     * 7: frame_support::weights::PerDispatchClass<T>
     **/
    FrameSupportWeightsPerDispatchClassU64: {
      normal: 'u64',
      operational: 'u64',
      mandatory: 'u64'
    },
    Lookup7: 'FrameSupportWeightsPerDispatchClassU64',
    Lookup8: 'u64',
    /**
     * 9: primitive_types::H256
     **/
    Lookup9: 'H256',
    Lookup10: 'Vec<u8>',
    /**
     * 11: sp_runtime::generic::digest::Digest<<field>: primitive_types::H256>
     **/
    SpRuntimeGenericDigest: {
      logs: 'Vec<SpRuntimeGenericDigestDigestItem>'
    },
    Lookup11: 'SpRuntimeGenericDigest',
    Lookup12: 'Vec<SpRuntimeGenericDigestDigestItem>',
    /**
     * 13: sp_runtime::generic::digest::DigestItem<<field>: primitive_types::H256>
     **/
    SpRuntimeGenericDigestDigestItem: {
      _enum: {
        Other: 'Vec<u8>',
        Unused1: 'Null',
        ChangesTrieRoot: 'H256',
        Unused3: 'Null',
        Consensus: '([u8;4],Vec<u8>)',
        Seal: '([u8;4],Vec<u8>)',
        PreRuntime: '([u8;4],Vec<u8>)',
        ChangesTrieSignal: 'SpRuntimeGenericDigestChangesTrieSignal',
      }
    },
    Lookup13: 'SpRuntimeGenericDigestDigestItem',
    Lookup14: '[u8;4]',
    /**
     * 15: sp_runtime::generic::digest::ChangesTrieSignal
     **/
    SpRuntimeGenericDigestChangesTrieSignal: {
      _enum: {
        NewConfiguration: 'Option<SpCoreChangesTrieChangesTrieConfiguration>',
      }
    },
    Lookup15: 'SpRuntimeGenericDigestChangesTrieSignal',
    /**
     * 16: Option<<field>: sp_core::changes_trie::ChangesTrieConfiguration>
     **/
    Lookup16: 'Option<SpCoreChangesTrieChangesTrieConfiguration>',
    /**
     * 17: sp_core::changes_trie::ChangesTrieConfiguration
     **/
    SpCoreChangesTrieChangesTrieConfiguration: {
      digestInterval: 'u32',
      digestLevels: 'u32'
    },
    Lookup17: 'SpCoreChangesTrieChangesTrieConfiguration',
    Lookup18: 'Vec<FrameSystemEventRecord>',
    /**
     * 19: frame_system::EventRecord<<field>: node_runtime::Event, <field>: primitive_types::H256>
     **/
    FrameSystemEventRecord: {
      phase: 'FrameSystemPhase',
      event: 'NodeRuntimeEvent',
      topics: 'Vec<H256>'
    },
    Lookup19: 'FrameSystemEventRecord',
    /**
     * 22: frame_support::weights::DispatchInfo
     **/
    FrameSupportWeightsDispatchInfo: {
      weight: 'u64',
      class: 'FrameSupportWeightsDispatchClass',
      paysFee: 'FrameSupportWeightsPays'
    },
    Lookup22: 'FrameSupportWeightsDispatchInfo',
    /**
     * 23: frame_support::weights::DispatchClass
     **/
    FrameSupportWeightsDispatchClass: {
      _enum: ['Normal', 'Operational', 'Mandatory']
    },
    Lookup23: 'FrameSupportWeightsDispatchClass',
    /**
     * 24: frame_support::weights::Pays
     **/
    FrameSupportWeightsPays: {
      _enum: ['Yes', 'No']
    },
    Lookup24: 'FrameSupportWeightsPays',
    /**
     * 25: sp_runtime::DispatchError
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
    Lookup25: 'SpRuntimeDispatchError',
    /**
     * 26: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
      _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
    },
    Lookup26: 'SpRuntimeTokenError',
    /**
     * 27: sp_runtime::ArithmeticError
     **/
    SpRuntimeArithmeticError: {
      _enum: ['Underflow', 'Overflow', 'DivisionByZero']
    },
    Lookup27: 'SpRuntimeArithmeticError',
    /**
     * 31: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTraitsTokensMiscBalanceStatus: {
      _enum: ['Free', 'Reserved']
    },
    Lookup31: 'FrameSupportTraitsTokensMiscBalanceStatus',
    /**
     * 33: pallet_election_provider_multi_phase::ElectionCompute
     **/
    PalletElectionProviderMultiPhaseElectionCompute: {
      _enum: ['OnChain', 'Signed', 'Unsigned', 'Emergency']
    },
    Lookup33: 'PalletElectionProviderMultiPhaseElectionCompute',
    Lookup34: 'bool',
    /**
     * 35: Option<<field>: pallet_election_provider_multi_phase::ElectionCompute>
     **/
    Lookup35: 'Option<PalletElectionProviderMultiPhaseElectionCompute>',
    Lookup39: 'Vec<AccountId32>',
    /**
     * 40: pallet_democracy::vote_threshold::VoteThreshold
     **/
    PalletDemocracyVoteThreshold: {
      _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
    },
    Lookup40: 'PalletDemocracyVoteThreshold',
    /**
     * 41: Result<T, <field>: sp_runtime::DispatchError>
     **/
    Lookup41: 'Result<Null, SpRuntimeDispatchError>',
    Lookup42: 'Null',
    /**
     * 44: pallet_collective::Instance1
     **/
    PalletCollectiveInstance1: 'Null',
    Lookup44: 'PalletCollectiveInstance1',
    /**
     * 46: pallet_collective::Instance2
     **/
    PalletCollectiveInstance2: 'Null',
    Lookup46: 'PalletCollectiveInstance2',
    Lookup48: 'Vec<(AccountId32,u128)>',
    Lookup49: '(AccountId32,u128)',
    /**
     * 51: pallet_membership::Instance1
     **/
    PalletMembershipInstance1: 'Null',
    Lookup51: 'PalletMembershipInstance1',
    Lookup53: 'Vec<([u8;32],u64)>',
    Lookup54: '([u8;32],u64)',
    /**
     * 55: sp_finality_grandpa::app::Public
     **/
    Lookup55: '[u8;32]',
    /**
     * 56: sp_core::ed25519::Public
     **/
    Lookup56: '[u8;32]',
    /**
     * 61: pallet_im_online::sr25519::app_sr25519::Public
     **/
    Lookup61: '[u8;32]',
    /**
     * 62: sp_core::sr25519::Public
     **/
    Lookup62: '[u8;32]',
    Lookup63: 'Vec<(AccountId32,PalletStakingExposure)>',
    Lookup64: '(AccountId32,PalletStakingExposure)',
    /**
     * 65: pallet_staking::Exposure<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletStakingExposure: {
      total: 'CompactU128',
      own: 'CompactU128',
      others: 'Vec<PalletStakingIndividualExposure>'
    },
    Lookup65: 'PalletStakingExposure',
    Lookup66: 'Compact<u128>',
    Lookup67: 'Vec<PalletStakingIndividualExposure>',
    /**
     * 68: pallet_staking::IndividualExposure<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletStakingIndividualExposure: {
      who: 'AccountId32',
      value: 'CompactU128'
    },
    Lookup68: 'PalletStakingIndividualExposure',
    Lookup70: '[u8;16]',
    /**
     * 73: pallet_society::DefaultInstance
     **/
    PalletSocietyDefaultInstance: 'Null',
    Lookup73: 'PalletSocietyDefaultInstance',
    Lookup77: '(u32,u32)',
    /**
     * 78: Option<T>
     **/
    Lookup78: 'Option<Vec<u8>>',
    /**
     * 80: node_runtime::ProxyType
     **/
    NodeRuntimeProxyType: {
      _enum: ['Any', 'NonTransfer', 'Governance', 'Staking']
    },
    Lookup80: 'NodeRuntimeProxyType',
    Lookup81: 'u16',
    /**
     * 83: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepointU32: {
      height: 'u32',
      index: 'u32'
    },
    Lookup83: 'PalletMultisigTimepointU32',
    Lookup88: '(u8,u8)',
    /**
     * 91: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup91: 'Vec<u8>',
    Lookup92: 'Vec<u32>',
    /**
     * 93: Option<T>
     **/
    OptionU32: 'Option<u32>',
    Lookup93: 'OptionU32',
    /**
     * 94: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup94: 'Vec<u8>',
    /**
     * 95: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup95: 'Vec<u8>',
    /**
     * 97: frame_system::Phase
     **/
    FrameSystemPhase: {
      _enum: {
        ApplyExtrinsic: 'u32',
        Finalization: 'Null',
        Initialization: 'Null',
      }
    },
    Lookup97: 'FrameSystemPhase',
    Lookup98: 'Vec<H256>',
    Lookup99: 'Vec<(u32,u32)>',
    /**
     * 100: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
      specVersion: 'CompactU32',
      specName: 'Text'
    },
    Lookup100: 'FrameSystemLastRuntimeUpgradeInfo',
    Lookup101: 'Compact<u32>',
    Lookup102: 'Text',
    /**
     * 104: sp_arithmetic::per_things::Perbill
     **/
    Lookup104: 'Perbill',
    Lookup105: 'Vec<(Vec<u8>,Vec<u8>)>',
    Lookup106: '(Vec<u8>,Vec<u8>)',
    Lookup107: 'Vec<Vec<u8>>',
    /**
     * 108: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
      baseBlock: 'u64',
      maxBlock: 'u64',
      perClass: 'FrameSupportWeightsPerDispatchClass'
    },
    Lookup108: 'FrameSystemLimitsBlockWeights',
    /**
     * 109: frame_support::weights::PerDispatchClass<<field>: frame_system::limits::WeightsPerClass>
     **/
    FrameSupportWeightsPerDispatchClass: {
      normal: 'FrameSystemLimitsWeightsPerClass',
      operational: 'FrameSystemLimitsWeightsPerClass',
      mandatory: 'FrameSystemLimitsWeightsPerClass'
    },
    Lookup109: 'FrameSupportWeightsPerDispatchClass',
    /**
     * 110: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
      baseExtrinsic: 'u64',
      maxExtrinsic: 'OptionU64',
      maxTotal: 'OptionU64',
      reserved: 'OptionU64'
    },
    Lookup110: 'FrameSystemLimitsWeightsPerClass',
    /**
     * 111: Option<T>
     **/
    OptionU64: 'Option<u64>',
    Lookup111: 'OptionU64',
    /**
     * 112: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
      max: 'FrameSupportWeightsPerDispatchClassU32'
    },
    Lookup112: 'FrameSystemLimitsBlockLength',
    /**
     * 113: frame_support::weights::PerDispatchClass<T>
     **/
    FrameSupportWeightsPerDispatchClassU32: {
      normal: 'u32',
      operational: 'u32',
      mandatory: 'u32'
    },
    Lookup113: 'FrameSupportWeightsPerDispatchClassU32',
    /**
     * 114: frame_support::weights::RuntimeDbWeight
     **/
    FrameSupportWeightsRuntimeDbWeight: {
      read: 'u64',
      write: 'u64'
    },
    Lookup114: 'FrameSupportWeightsRuntimeDbWeight',
    /**
     * 115: sp_version::RuntimeVersion
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
    Lookup115: 'SpVersionRuntimeVersion',
    /**
     * 116: Cow<T>
     **/
    Lookup116: 'Vec<([u8;8],u32)>',
    Lookup117: 'Vec<([u8;8],u32)>',
    Lookup118: '([u8;8],u32)',
    Lookup119: '[u8;8]',
    Lookup122: 'Vec<Call>',
    /**
     * 123: node_runtime::Call
     **/
    Lookup123: 'Call',
    /**
     * 125: sp_consensus_slots::EquivocationProof<<field>: sp_runtime::generic::header::Header, <field>: sp_consensus_babe::app::Public>
     **/
    SpConsensusSlotsEquivocationProof: {
      offender: '[u8;32]',
      slot: 'u64',
      firstHeader: 'SpRuntimeGenericHeader',
      secondHeader: 'SpRuntimeGenericHeader'
    },
    Lookup125: 'SpConsensusSlotsEquivocationProof',
    /**
     * 126: sp_runtime::generic::header::Header
     **/
    SpRuntimeGenericHeader: {
      parentHash: 'H256',
      number: 'CompactU32',
      stateRoot: 'H256',
      extrinsicsRoot: 'H256',
      digest: 'SpRuntimeGenericDigest'
    },
    Lookup126: 'SpRuntimeGenericHeader',
    /**
     * 127: sp_consensus_babe::app::Public
     **/
    Lookup127: '[u8;32]',
    /**
     * 128: sp_consensus_slots::Slot
     **/
    Lookup128: 'u64',
    /**
     * 129: sp_session::MembershipProof
     **/
    SpSessionMembershipProof: {
      session: 'u32',
      trieNodes: 'Vec<Vec<u8>>',
      validatorCount: 'u32'
    },
    Lookup129: 'SpSessionMembershipProof',
    /**
     * 130: sp_consensus_babe::digests::NextConfigDescriptor
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
    Lookup130: 'SpConsensusBabeDigestsNextConfigDescriptor',
    Lookup131: '(u64,u64)',
    /**
     * 132: sp_consensus_babe::AllowedSlots
     **/
    SpConsensusBabeAllowedSlots: {
      _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
    },
    Lookup132: 'SpConsensusBabeAllowedSlots',
    CompactU64: 'Compact<u64>',
    Lookup134: 'CompactU64',
    Lookup136: 'Vec<SpRuntimeGenericHeader>',
    /**
     * 139: sp_runtime::multiaddress::MultiAddress<<field>: sp_core::crypto::AccountId32, AccountIndex>
     **/
    Lookup139: 'MultiAddress',
    Lookup140: '[u8;20]',
    /**
     * 142: pallet_election_provider_multi_phase::RawSolution<<field>: node_runtime::NposCompactSolution16>
     **/
    PalletElectionProviderMultiPhaseRawSolution: {
      compact: 'NodeRuntimeNposCompactSolution16',
      score: '[u128;3]',
      round: 'u32'
    },
    Lookup142: 'PalletElectionProviderMultiPhaseRawSolution',
    /**
     * 143: node_runtime::NposCompactSolution16
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
    Lookup143: 'NodeRuntimeNposCompactSolution16',
    Lookup144: 'Vec<(CompactU32,CompactU16)>',
    Lookup145: '(CompactU32,CompactU16)',
    CompactU16: 'Compact<u16>',
    Lookup146: 'CompactU16',
    Lookup147: 'Vec<(CompactU32,(CompactU16,Compact<PerU16>),CompactU16)>',
    Lookup148: '(CompactU32,(CompactU16,Compact<PerU16>),CompactU16)',
    Lookup149: '(CompactU16,Compact<PerU16>)',
    Lookup150: 'Compact<PerU16>',
    /**
     * 151: sp_arithmetic::per_things::PerU16
     **/
    Lookup151: 'PerU16',
    Lookup152: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);2],CompactU16)>',
    Lookup153: '(CompactU32,[(CompactU16,Compact<PerU16>);2],CompactU16)',
    Lookup154: '[(CompactU16,Compact<PerU16>);2]',
    Lookup155: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);3],CompactU16)>',
    Lookup156: '(CompactU32,[(CompactU16,Compact<PerU16>);3],CompactU16)',
    Lookup157: '[(CompactU16,Compact<PerU16>);3]',
    Lookup158: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);4],CompactU16)>',
    Lookup159: '(CompactU32,[(CompactU16,Compact<PerU16>);4],CompactU16)',
    Lookup160: '[(CompactU16,Compact<PerU16>);4]',
    Lookup161: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);5],CompactU16)>',
    Lookup162: '(CompactU32,[(CompactU16,Compact<PerU16>);5],CompactU16)',
    Lookup163: '[(CompactU16,Compact<PerU16>);5]',
    Lookup164: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);6],CompactU16)>',
    Lookup165: '(CompactU32,[(CompactU16,Compact<PerU16>);6],CompactU16)',
    Lookup166: '[(CompactU16,Compact<PerU16>);6]',
    Lookup167: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);7],CompactU16)>',
    Lookup168: '(CompactU32,[(CompactU16,Compact<PerU16>);7],CompactU16)',
    Lookup169: '[(CompactU16,Compact<PerU16>);7]',
    Lookup170: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);8],CompactU16)>',
    Lookup171: '(CompactU32,[(CompactU16,Compact<PerU16>);8],CompactU16)',
    Lookup172: '[(CompactU16,Compact<PerU16>);8]',
    Lookup173: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);9],CompactU16)>',
    Lookup174: '(CompactU32,[(CompactU16,Compact<PerU16>);9],CompactU16)',
    Lookup175: '[(CompactU16,Compact<PerU16>);9]',
    Lookup176: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);10],CompactU16)>',
    Lookup177: '(CompactU32,[(CompactU16,Compact<PerU16>);10],CompactU16)',
    Lookup178: '[(CompactU16,Compact<PerU16>);10]',
    Lookup179: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);11],CompactU16)>',
    Lookup180: '(CompactU32,[(CompactU16,Compact<PerU16>);11],CompactU16)',
    Lookup181: '[(CompactU16,Compact<PerU16>);11]',
    Lookup182: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);12],CompactU16)>',
    Lookup183: '(CompactU32,[(CompactU16,Compact<PerU16>);12],CompactU16)',
    Lookup184: '[(CompactU16,Compact<PerU16>);12]',
    Lookup185: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);13],CompactU16)>',
    Lookup186: '(CompactU32,[(CompactU16,Compact<PerU16>);13],CompactU16)',
    Lookup187: '[(CompactU16,Compact<PerU16>);13]',
    Lookup188: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);14],CompactU16)>',
    Lookup189: '(CompactU32,[(CompactU16,Compact<PerU16>);14],CompactU16)',
    Lookup190: '[(CompactU16,Compact<PerU16>);14]',
    Lookup191: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);15],CompactU16)>',
    Lookup192: '(CompactU32,[(CompactU16,Compact<PerU16>);15],CompactU16)',
    Lookup193: '[(CompactU16,Compact<PerU16>);15]',
    Lookup194: '[u128;3]',
    /**
     * 195: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
     **/
    PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
      voters: 'CompactU32',
      targets: 'CompactU32'
    },
    Lookup195: 'PalletElectionProviderMultiPhaseSolutionOrSnapshotSize',
    /**
     * 196: Option<T>
     **/
    Lookup196: 'Option<[u128;3]>',
    Lookup197: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    Lookup198: '(AccountId32,SpNposElectionsSupport)',
    /**
     * 199: sp_npos_elections::Support<<field>: sp_core::crypto::AccountId32>
     **/
    SpNposElectionsSupport: {
      total: 'u128',
      voters: 'Vec<(AccountId32,u128)>'
    },
    Lookup199: 'SpNposElectionsSupport',
    /**
     * 201: pallet_staking::RewardDestination<<field>: sp_core::crypto::AccountId32>
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
    Lookup201: 'PalletStakingRewardDestination',
    /**
     * 202: pallet_staking::ValidatorPrefs
     **/
    PalletStakingValidatorPrefs: {
      commission: 'Compact<Perbill>',
      blocked: 'bool'
    },
    Lookup202: 'PalletStakingValidatorPrefs',
    Lookup203: 'Compact<Perbill>',
    Lookup204: 'Vec<MultiAddress>',
    /**
     * 205: sp_arithmetic::per_things::Percent
     **/
    Lookup205: 'Percent',
    /**
     * 206: Option<<field>: sp_arithmetic::per_things::Percent>
     **/
    Lookup206: 'Option<Percent>',
    /**
     * 208: node_runtime::SessionKeys
     **/
    NodeRuntimeSessionKeys: {
      grandpa: '[u8;32]',
      babe: '[u8;32]',
      imOnline: '[u8;32]',
      authorityDiscovery: '[u8;32]'
    },
    Lookup208: 'NodeRuntimeSessionKeys',
    /**
     * 209: sp_authority_discovery::app::Public
     **/
    Lookup209: '[u8;32]',
    /**
     * 211: pallet_democracy::vote::AccountVote<Balance>
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
    Lookup211: 'PalletDemocracyVoteAccountVoteU128',
    /**
     * 212: pallet_democracy::vote::Vote
     **/
    Lookup212: 'Vote',
    /**
     * 213: pallet_democracy::conviction::Conviction
     **/
    PalletDemocracyConviction: {
      _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
    },
    Lookup213: 'PalletDemocracyConviction',
    /**
     * 215: Option<<field>: sp_core::crypto::AccountId32>
     **/
    Lookup215: 'Option<AccountId32>',
    /**
     * 218: pallet_elections_phragmen::Renouncing
     **/
    PalletElectionsPhragmenRenouncing: {
      _enum: {
        Member: 'Null',
        RunnerUp: 'Null',
        Candidate: 'CompactU32',
      }
    },
    Lookup218: 'PalletElectionsPhragmenRenouncing',
    /**
     * 221: sp_finality_grandpa::EquivocationProof<<field>: primitive_types::H256, N>
     **/
    SpFinalityGrandpaEquivocationProof: {
      setId: 'u64',
      equivocation: 'SpFinalityGrandpaEquivocation'
    },
    Lookup221: 'SpFinalityGrandpaEquivocationProof',
    /**
     * 222: sp_finality_grandpa::Equivocation<<field>: primitive_types::H256, N>
     **/
    SpFinalityGrandpaEquivocation: {
      _enum: {
        Prevote: 'Lookup223',
        Precommit: 'Lookup229',
      }
    },
    Lookup222: 'SpFinalityGrandpaEquivocation',
    /**
     * 223: finality_grandpa::Equivocation<<field>: sp_finality_grandpa::app::Public, <field>: finality_grandpa::Prevote<<field>: primitive_types::H256, N>, <field>: sp_finality_grandpa::app::Signature>
     **/
    Lookup223: {
      roundNumber: 'u64',
      identity: '[u8;32]',
      first: '(FinalityGrandpaPrevote,[u8;64])',
      second: '(FinalityGrandpaPrevote,[u8;64])'
    },
    /**
     * 224: finality_grandpa::Prevote<<field>: primitive_types::H256, N>
     **/
    FinalityGrandpaPrevote: {
      targetHash: 'H256',
      targetNumber: 'u32'
    },
    Lookup224: 'FinalityGrandpaPrevote',
    /**
     * 225: sp_finality_grandpa::app::Signature
     **/
    Lookup225: '[u8;64]',
    /**
     * 226: sp_core::ed25519::Signature
     **/
    Lookup226: '[u8;64]',
    Lookup227: '[u8;64]',
    Lookup228: '(FinalityGrandpaPrevote,[u8;64])',
    /**
     * 229: finality_grandpa::Equivocation<<field>: sp_finality_grandpa::app::Public, <field>: finality_grandpa::Precommit<<field>: primitive_types::H256, N>, <field>: sp_finality_grandpa::app::Signature>
     **/
    Lookup229: {
      roundNumber: 'u64',
      identity: '[u8;32]',
      first: '(FinalityGrandpaPrecommit,[u8;64])',
      second: '(FinalityGrandpaPrecommit,[u8;64])'
    },
    /**
     * 230: finality_grandpa::Precommit<<field>: primitive_types::H256, N>
     **/
    FinalityGrandpaPrecommit: {
      targetHash: 'H256',
      targetNumber: 'u32'
    },
    Lookup230: 'FinalityGrandpaPrecommit',
    Lookup231: '(FinalityGrandpaPrecommit,[u8;64])',
    /**
     * 236: pallet_im_online::Heartbeat<BlockNumber>
     **/
    PalletImOnlineHeartbeatU32: {
      blockNumber: 'u32',
      networkState: 'SpCoreOffchainOpaqueNetworkState',
      sessionIndex: 'u32',
      authorityIndex: 'u32',
      validatorsLen: 'u32'
    },
    Lookup236: 'PalletImOnlineHeartbeatU32',
    /**
     * 237: sp_core::offchain::OpaqueNetworkState
     **/
    SpCoreOffchainOpaqueNetworkState: {
      peerId: 'Vec<u8>',
      externalAddresses: 'Vec<Vec<u8>>'
    },
    Lookup237: 'SpCoreOffchainOpaqueNetworkState',
    /**
     * 238: sp_core::OpaquePeerId
     **/
    Lookup238: 'Vec<u8>',
    Lookup239: 'Vec<Vec<u8>>',
    /**
     * 240: sp_core::offchain::OpaqueMultiaddr
     **/
    Lookup240: 'Vec<u8>',
    /**
     * 241: pallet_im_online::sr25519::app_sr25519::Signature
     **/
    Lookup241: '[u8;64]',
    /**
     * 242: sp_core::sr25519::Signature
     **/
    Lookup242: '[u8;64]',
    /**
     * 244: pallet_identity::types::IdentityInfo<FieldLimit>
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
    Lookup244: 'PalletIdentityTypesIdentityInfo',
    /**
     * 245: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup245: 'Vec<(Data,Data)>',
    Lookup246: '(Data,Data)',
    /**
     * 247: pallet_identity::types::Data
     **/
    Lookup247: 'Data',
    Lookup248: '[u8;0]',
    Lookup249: '[u8;1]',
    Lookup250: '[u8;2]',
    Lookup251: '[u8;3]',
    Lookup252: '[u8;5]',
    Lookup253: '[u8;6]',
    Lookup254: '[u8;7]',
    Lookup255: '[u8;9]',
    Lookup256: '[u8;10]',
    Lookup257: '[u8;11]',
    Lookup258: '[u8;12]',
    Lookup259: '[u8;13]',
    Lookup260: '[u8;14]',
    Lookup261: '[u8;15]',
    Lookup262: '[u8;17]',
    Lookup263: '[u8;18]',
    Lookup264: '[u8;19]',
    Lookup265: '[u8;21]',
    Lookup266: '[u8;22]',
    Lookup267: '[u8;23]',
    Lookup268: '[u8;24]',
    Lookup269: '[u8;25]',
    Lookup270: '[u8;26]',
    Lookup271: '[u8;27]',
    Lookup272: '[u8;28]',
    Lookup273: '[u8;29]',
    Lookup274: '[u8;30]',
    Lookup275: '[u8;31]',
    Lookup276: 'Vec<(Data,Data)>',
    /**
     * 277: Option<T>
     **/
    Lookup277: 'Option<[u8;20]>',
    Lookup278: 'Vec<(AccountId32,Data)>',
    Lookup279: '(AccountId32,Data)',
    /**
     * 280: pallet_identity::types::IdentityFields
     **/
    Lookup280: 'Lookup281',
    /**
     * 281: pallet_identity::types::IdentityField
     **/
    Lookup281: {
      _enum: ['Unused0', 'Display', 'Legal', 'Unused3', 'Web', 'Unused5', 'Unused6', 'Unused7', 'Riot', 'Unused9', 'Unused10', 'Unused11', 'Unused12', 'Unused13', 'Unused14', 'Unused15', 'Email', 'Unused17', 'Unused18', 'Unused19', 'Unused20', 'Unused21', 'Unused22', 'Unused23', 'Unused24', 'Unused25', 'Unused26', 'Unused27', 'Unused28', 'Unused29', 'Unused30', 'Unused31', 'PgpFingerprint', 'Unused33', 'Unused34', 'Unused35', 'Unused36', 'Unused37', 'Unused38', 'Unused39', 'Unused40', 'Unused41', 'Unused42', 'Unused43', 'Unused44', 'Unused45', 'Unused46', 'Unused47', 'Unused48', 'Unused49', 'Unused50', 'Unused51', 'Unused52', 'Unused53', 'Unused54', 'Unused55', 'Unused56', 'Unused57', 'Unused58', 'Unused59', 'Unused60', 'Unused61', 'Unused62', 'Unused63', 'Image', 'Unused65', 'Unused66', 'Unused67', 'Unused68', 'Unused69', 'Unused70', 'Unused71', 'Unused72', 'Unused73', 'Unused74', 'Unused75', 'Unused76', 'Unused77', 'Unused78', 'Unused79', 'Unused80', 'Unused81', 'Unused82', 'Unused83', 'Unused84', 'Unused85', 'Unused86', 'Unused87', 'Unused88', 'Unused89', 'Unused90', 'Unused91', 'Unused92', 'Unused93', 'Unused94', 'Unused95', 'Unused96', 'Unused97', 'Unused98', 'Unused99', 'Unused100', 'Unused101', 'Unused102', 'Unused103', 'Unused104', 'Unused105', 'Unused106', 'Unused107', 'Unused108', 'Unused109', 'Unused110', 'Unused111', 'Unused112', 'Unused113', 'Unused114', 'Unused115', 'Unused116', 'Unused117', 'Unused118', 'Unused119', 'Unused120', 'Unused121', 'Unused122', 'Unused123', 'Unused124', 'Unused125', 'Unused126', 'Unused127', 'Twitter']
    },
    /**
     * 282: pallet_identity::types::Judgement<Balance>
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
    Lookup282: 'PalletIdentityTypesJudgementU128',
    /**
     * 284: pallet_society::Judgement
     **/
    PalletSocietyJudgement: {
      _enum: ['Rebid', 'Reject', 'Approve']
    },
    Lookup284: 'PalletSocietyJudgement',
    /**
     * 287: pallet_vesting::VestingInfo<Balance, BlockNumber>
     **/
    PalletVestingVestingInfo: {
      locked: 'u128',
      perBlock: 'u128',
      startingBlock: 'u32'
    },
    Lookup287: 'PalletVestingVestingInfo',
    /**
     * 289: Option<T>
     **/
    Lookup289: 'Option<(u32,u32)>',
    /**
     * 291: Option<<field>: node_runtime::ProxyType>
     **/
    Lookup291: 'Option<NodeRuntimeProxyType>',
    /**
     * 293: Option<<field>: pallet_multisig::Timepoint<BlockNumber>>
     **/
    Lookup293: 'Option<PalletMultisigTimepointU32>',
    /**
     * 297: pallet_assets::types::DestroyWitness
     **/
    PalletAssetsTypesDestroyWitness: {
      accounts: 'CompactU32',
      sufficients: 'CompactU32',
      approvals: 'CompactU32'
    },
    Lookup297: 'PalletAssetsTypesDestroyWitness',
    Lookup300: 'Compact<Perquintill>',
    /**
     * 301: sp_arithmetic::per_things::Perquintill
     **/
    Lookup301: 'Perquintill',
    /**
     * 303: pallet_uniques::types::DestroyWitness
     **/
    PalletUniquesTypesDestroyWitness: {
      instances: 'CompactU32',
      instanceMetadatas: 'CompactU32',
      attributes: 'CompactU32'
    },
    Lookup303: 'PalletUniquesTypesDestroyWitness',
    /**
     * 304: Option<<field>: sp_runtime::multiaddress::MultiAddress<<field>: sp_core::crypto::AccountId32, AccountIndex>>
     **/
    Lookup304: 'Option<MultiAddress>',
    /**
     * 306: sp_transaction_storage_proof::TransactionStorageProof
     **/
    SpTransactionStorageProofTransactionStorageProof: {
      chunk: 'Vec<u8>',
      proof: 'Vec<Vec<u8>>'
    },
    Lookup306: 'SpTransactionStorageProofTransactionStorageProof',
    Lookup307: 'Vec<([u8;32],u64)>',
    Lookup308: '([u8;32],u64)',
    Lookup309: 'Vec<[u8;32]>',
    /**
     * 310: Option<T>
     **/
    Lookup310: 'Option<[u8;32]>',
    /**
     * 311: sp_consensus_babe::BabeEpochConfiguration
     **/
    SpConsensusBabeBabeEpochConfiguration: {
      c: '(u64,u64)',
      allowedSlots: 'SpConsensusBabeAllowedSlots'
    },
    Lookup311: 'SpConsensusBabeBabeEpochConfiguration',
    Lookup313: 'Vec<PalletAuthorshipUncleEntryItem>',
    /**
     * 314: pallet_authorship::UncleEntryItem<BlockNumber, <field>: primitive_types::H256, <field>: sp_core::crypto::AccountId32>
     **/
    PalletAuthorshipUncleEntryItem: {
      _enum: {
        InclusionHeight: 'u32',
        Uncle: '(H256,Option<AccountId32>)',
      }
    },
    Lookup314: 'PalletAuthorshipUncleEntryItem',
    Lookup316: '(AccountId32,u128,bool)',
    /**
     * 318: frame_support::storage::weak_bounded_vec::WeakBoundedVec<<field>: pallet_balances::BalanceLock<Balance>, S>
     **/
    Lookup318: 'Vec<PalletBalancesBalanceLockU128>',
    /**
     * 319: pallet_balances::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLockU128: {
      id: '[u8;8]',
      amount: 'u128',
      reasons: 'PalletBalancesReasons'
    },
    Lookup319: 'PalletBalancesBalanceLockU128',
    /**
     * 320: pallet_balances::Reasons
     **/
    PalletBalancesReasons: {
      _enum: ['Fee', 'Misc', 'All']
    },
    Lookup320: 'PalletBalancesReasons',
    Lookup321: 'Vec<PalletBalancesBalanceLockU128>',
    /**
     * 322: frame_support::storage::bounded_vec::BoundedVec<<field>: pallet_balances::ReserveData<ReserveIdentifier, Balance>, S>
     **/
    Lookup322: 'Vec<PalletBalancesReserveData>',
    /**
     * 323: pallet_balances::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
      id: '[u8;8]',
      amount: 'u128'
    },
    Lookup323: 'PalletBalancesReserveData',
    Lookup324: 'Vec<PalletBalancesReserveData>',
    /**
     * 325: pallet_balances::Releases
     **/
    PalletBalancesReleases: {
      _enum: ['V1_0_0', 'V2_0_0']
    },
    Lookup325: 'PalletBalancesReleases',
    /**
     * 327: sp_arithmetic::fixed_point::FixedU128
     **/
    Lookup327: 'u128',
    /**
     * 328: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
      _enum: ['V1Ancient', 'V2']
    },
    Lookup328: 'PalletTransactionPaymentReleases',
    Lookup329: 'Vec<FrameSupportWeightsWeightToFeeCoefficientU128>',
    /**
     * 330: frame_support::weights::WeightToFeeCoefficient<Balance>
     **/
    FrameSupportWeightsWeightToFeeCoefficientU128: {
      coeffInteger: 'u128',
      coeffFrac: 'Perbill',
      negative: 'bool',
      degree: 'u8'
    },
    Lookup330: 'FrameSupportWeightsWeightToFeeCoefficientU128',
    /**
     * 331: pallet_election_provider_multi_phase::Phase<Bn>
     **/
    PalletElectionProviderMultiPhasePhaseU32: {
      _enum: {
        Off: 'Null',
        Signed: 'Null',
        Unsigned: '(bool,u32)',
        Emergency: 'Null',
      }
    },
    Lookup331: 'PalletElectionProviderMultiPhasePhaseU32',
    Lookup332: '(bool,u32)',
    /**
     * 333: pallet_election_provider_multi_phase::ReadySolution<<field>: sp_core::crypto::AccountId32>
     **/
    PalletElectionProviderMultiPhaseReadySolution: {
      supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
      score: '[u128;3]',
      compute: 'PalletElectionProviderMultiPhaseElectionCompute'
    },
    Lookup333: 'PalletElectionProviderMultiPhaseReadySolution',
    /**
     * 334: pallet_election_provider_multi_phase::RoundSnapshot<<field>: sp_core::crypto::AccountId32>
     **/
    PalletElectionProviderMultiPhaseRoundSnapshot: {
      voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
      targets: 'Vec<AccountId32>'
    },
    Lookup334: 'PalletElectionProviderMultiPhaseRoundSnapshot',
    Lookup335: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    Lookup336: '(AccountId32,u64,Vec<AccountId32>)',
    /**
     * 337: frame_support::storage::bounded_btree_map::BoundedBTreeMap<K, V, S>
     **/
    Lookup337: 'BTreeMap<[u128;3], u32>',
    /**
     * 338: BTreeMap<K, V>
     **/
    Lookup338: 'BTreeMap<[u128;3], u32>',
    Lookup339: 'Vec<([u128;3],u32)>',
    Lookup340: '([u128;3],u32)',
    /**
     * 341: pallet_election_provider_multi_phase::signed::SignedSubmission<<field>: sp_core::crypto::AccountId32, Balance, <field>: node_runtime::NposCompactSolution16>
     **/
    PalletElectionProviderMultiPhaseSignedSignedSubmission: {
      who: 'AccountId32',
      deposit: 'u128',
      solution: 'PalletElectionProviderMultiPhaseRawSolution'
    },
    Lookup341: 'PalletElectionProviderMultiPhaseSignedSignedSubmission',
    /**
     * 343: pallet_staking::StakingLedger<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletStakingStakingLedger: {
      stash: 'AccountId32',
      total: 'CompactU128',
      active: 'CompactU128',
      unlocking: 'Vec<PalletStakingUnlockChunkU128>',
      claimedRewards: 'Vec<u32>'
    },
    Lookup343: 'PalletStakingStakingLedger',
    Lookup344: 'Vec<PalletStakingUnlockChunkU128>',
    /**
     * 345: pallet_staking::UnlockChunk<Balance>
     **/
    PalletStakingUnlockChunkU128: {
      value: 'CompactU128',
      era: 'CompactU32'
    },
    Lookup345: 'PalletStakingUnlockChunkU128',
    /**
     * 346: pallet_staking::Nominations<<field>: sp_core::crypto::AccountId32>
     **/
    PalletStakingNominations: {
      targets: 'Vec<AccountId32>',
      submittedIn: 'u32',
      suppressed: 'bool'
    },
    Lookup346: 'PalletStakingNominations',
    /**
     * 347: pallet_staking::ActiveEraInfo
     **/
    PalletStakingActiveEraInfo: {
      index: 'u32',
      start: 'OptionU64'
    },
    Lookup347: 'PalletStakingActiveEraInfo',
    /**
     * 348: pallet_staking::EraRewardPoints<<field>: sp_core::crypto::AccountId32>
     **/
    PalletStakingEraRewardPoints: {
      total: 'u32',
      individual: 'BTreeMap<AccountId32, u32>'
    },
    Lookup348: 'PalletStakingEraRewardPoints',
    /**
     * 349: BTreeMap<<field>: sp_core::crypto::AccountId32, V>
     **/
    Lookup349: 'BTreeMap<AccountId32, u32>',
    Lookup350: 'Vec<(AccountId32,u32)>',
    Lookup351: '(AccountId32,u32)',
    /**
     * 352: pallet_staking::Forcing
     **/
    PalletStakingForcing: {
      _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
    },
    Lookup352: 'PalletStakingForcing',
    Lookup353: 'Vec<PalletStakingUnappliedSlash>',
    /**
     * 354: pallet_staking::UnappliedSlash<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletStakingUnappliedSlash: {
      validator: 'AccountId32',
      own: 'u128',
      others: 'Vec<(AccountId32,u128)>',
      reporters: 'Vec<AccountId32>',
      payout: 'u128'
    },
    Lookup354: 'PalletStakingUnappliedSlash',
    Lookup355: '(Perbill,u128)',
    /**
     * 356: pallet_staking::slashing::SlashingSpans
     **/
    PalletStakingSlashingSlashingSpans: {
      spanIndex: 'u32',
      lastStart: 'u32',
      lastNonzeroSlash: 'u32',
      prior: 'Vec<u32>'
    },
    Lookup356: 'PalletStakingSlashingSlashingSpans',
    /**
     * 357: pallet_staking::slashing::SpanRecord<Balance>
     **/
    PalletStakingSlashingSpanRecordU128: {
      slashed: 'u128',
      paidOut: 'u128'
    },
    Lookup357: 'PalletStakingSlashingSpanRecordU128',
    /**
     * 358: pallet_staking::Releases
     **/
    PalletStakingReleases: {
      _enum: ['V1_0_0Ancient', 'V2_0_0', 'V3_0_0', 'V4_0_0', 'V5_0_0', 'V6_0_0', 'V7_0_0']
    },
    Lookup358: 'PalletStakingReleases',
    Lookup360: 'Vec<(AccountId32,NodeRuntimeSessionKeys)>',
    Lookup361: '(AccountId32,NodeRuntimeSessionKeys)',
    Lookup362: '([u8;4],Vec<u8>)',
    /**
     * 363: sp_core::crypto::KeyTypeId
     **/
    Lookup363: '[u8;4]',
    Lookup365: 'Vec<(u32,H256,AccountId32)>',
    Lookup366: '(u32,H256,AccountId32)',
    Lookup367: '(Vec<AccountId32>,u128)',
    /**
     * 368: pallet_democracy::PreimageStatus<<field>: sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletDemocracyPreimageStatus: {
      _enum: {
        Missing: 'u32',
        Available: {
          data: 'Vec<u8>',
          provider: 'AccountId32',
          deposit: 'u128',
          since: 'u32',
          expiry: 'OptionU32',
        },
      }
    },
    Lookup368: 'PalletDemocracyPreimageStatus',
    /**
     * 369: pallet_democracy::types::ReferendumInfo<BlockNumber, <field>: primitive_types::H256, Balance>
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
    Lookup369: 'PalletDemocracyTypesReferendumInfo',
    /**
     * 370: pallet_democracy::types::ReferendumStatus<BlockNumber, <field>: primitive_types::H256, Balance>
     **/
    PalletDemocracyTypesReferendumStatus: {
      end: 'u32',
      proposalHash: 'H256',
      threshold: 'PalletDemocracyVoteThreshold',
      delay: 'u32',
      tally: 'PalletDemocracyTypesTallyU128'
    },
    Lookup370: 'PalletDemocracyTypesReferendumStatus',
    /**
     * 371: pallet_democracy::types::Tally<Balance>
     **/
    PalletDemocracyTypesTallyU128: {
      ayes: 'u128',
      nays: 'u128',
      turnout: 'u128'
    },
    Lookup371: 'PalletDemocracyTypesTallyU128',
    /**
     * 372: pallet_democracy::vote::Voting<Balance, <field>: sp_core::crypto::AccountId32, BlockNumber>
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
    Lookup372: 'PalletDemocracyVoteVoting',
    Lookup373: 'Vec<(u32,PalletDemocracyVoteAccountVoteU128)>',
    Lookup374: '(u32,PalletDemocracyVoteAccountVoteU128)',
    /**
     * 375: pallet_democracy::types::Delegations<Balance>
     **/
    PalletDemocracyTypesDelegationsU128: {
      votes: 'u128',
      capital: 'u128'
    },
    Lookup375: 'PalletDemocracyTypesDelegationsU128',
    /**
     * 376: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletDemocracyVotePriorLock: '(u32,u128)',
    Lookup376: 'PalletDemocracyVotePriorLock',
    Lookup377: '(H256,PalletDemocracyVoteThreshold)',
    Lookup378: '(u32,Vec<AccountId32>)',
    /**
     * 379: pallet_democracy::Releases
     **/
    PalletDemocracyReleases: {
      _enum: ['V1']
    },
    Lookup379: 'PalletDemocracyReleases',
    /**
     * 381: frame_support::storage::bounded_vec::BoundedVec<<field>: primitive_types::H256, S>
     **/
    Lookup381: 'Vec<H256>',
    /**
     * 382: pallet_collective::Votes<<field>: sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletCollectiveVotes: {
      index: 'u32',
      threshold: 'u32',
      ayes: 'Vec<AccountId32>',
      nays: 'Vec<AccountId32>',
      end: 'u32'
    },
    Lookup382: 'PalletCollectiveVotes',
    /**
     * 384: frame_support::storage::bounded_vec::BoundedVec<<field>: primitive_types::H256, S>
     **/
    Lookup384: 'Vec<H256>',
    Lookup386: 'Vec<PalletElectionsPhragmenSeatHolder>',
    /**
     * 387: pallet_elections_phragmen::SeatHolder<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenSeatHolder: {
      who: 'AccountId32',
      stake: 'u128',
      deposit: 'u128'
    },
    Lookup387: 'PalletElectionsPhragmenSeatHolder',
    /**
     * 388: pallet_elections_phragmen::Voter<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenVoter: {
      votes: 'Vec<AccountId32>',
      stake: 'u128',
      deposit: 'u128'
    },
    Lookup388: 'PalletElectionsPhragmenVoter',
    /**
     * 391: pallet_grandpa::StoredState<N>
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
    Lookup391: 'PalletGrandpaStoredStateU32',
    /**
     * 392: pallet_grandpa::StoredPendingChange<N>
     **/
    PalletGrandpaStoredPendingChangeU32: {
      scheduledAt: 'u32',
      delay: 'u32',
      nextAuthorities: 'Vec<([u8;32],u64)>',
      forced: 'OptionU32'
    },
    Lookup392: 'PalletGrandpaStoredPendingChangeU32',
    /**
     * 394: pallet_treasury::Proposal<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
      proposer: 'AccountId32',
      value: 'u128',
      beneficiary: 'AccountId32',
      bond: 'u128'
    },
    Lookup394: 'PalletTreasuryProposal',
    /**
     * 395: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup395: 'Vec<u32>',
    /**
     * 396: sp_arithmetic::per_things::Permill
     **/
    Lookup396: 'Permill',
    /**
     * 397: frame_support::PalletId
     **/
    Lookup397: '[u8;8]',
    /**
     * 399: pallet_contracts::wasm::PrefabWasmModule<T>
     **/
    PalletContractsWasmPrefabWasmModule: {
      instructionWeightsVersion: 'CompactU32',
      initial: 'CompactU32',
      maximum: 'CompactU32',
      refcount: 'CompactU64',
      reserved: 'Option<Null>',
      code: 'Vec<u8>',
      originalCodeLen: 'u32'
    },
    Lookup399: 'PalletContractsWasmPrefabWasmModule',
    /**
     * 400: Option<T>
     **/
    Lookup400: 'Option<Null>',
    /**
     * 401: pallet_contracts::storage::ContractInfo<T>
     **/
    PalletContractsStorageContractInfo: {
      _enum: {
        Alive: 'PalletContractsStorageRawAliveContractInfo',
        Tombstone: 'H256',
      }
    },
    Lookup401: 'PalletContractsStorageContractInfo',
    /**
     * 402: pallet_contracts::storage::RawAliveContractInfo<<field>: primitive_types::H256, Balance, BlockNumber>
     **/
    PalletContractsStorageRawAliveContractInfo: {
      trieId: 'Vec<u8>',
      storageSize: 'u32',
      pairCount: 'u32',
      codeHash: 'H256',
      rentAllowance: 'u128',
      rentPaid: 'u128',
      deductBlock: 'u32',
      lastWrite: 'OptionU32',
      reserved: 'Option<Null>'
    },
    Lookup402: 'PalletContractsStorageRawAliveContractInfo',
    /**
     * 403: pallet_contracts::storage::RawTombstoneContractInfo<<field>: primitive_types::H256, <field>: sp_runtime::traits::BlakeTwo256>
     **/
    Lookup403: 'H256',
    /**
     * 404: sp_runtime::traits::BlakeTwo256
     **/
    SpRuntimeTraitsBlakeTwo256: 'Null',
    Lookup404: 'SpRuntimeTraitsBlakeTwo256',
    Lookup405: 'Vec<PalletContractsStorageDeletedContract>',
    /**
     * 406: pallet_contracts::storage::DeletedContract
     **/
    PalletContractsStorageDeletedContract: {
      pairCount: 'u32',
      trieId: 'Vec<u8>'
    },
    Lookup406: 'PalletContractsStorageDeletedContract',
    /**
     * 407: pallet_contracts::schedule::Schedule<T>
     **/
    PalletContractsSchedule: {
      limits: 'PalletContractsScheduleLimits',
      instructionWeights: 'PalletContractsScheduleInstructionWeights',
      hostFnWeights: 'PalletContractsScheduleHostFnWeights'
    },
    Lookup407: 'PalletContractsSchedule',
    /**
     * 408: pallet_contracts::schedule::Limits
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
    Lookup408: 'PalletContractsScheduleLimits',
    /**
     * 409: pallet_contracts::schedule::InstructionWeights<T>
     **/
    PalletContractsScheduleInstructionWeights: {
      alias: {
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
    Lookup409: 'PalletContractsScheduleInstructionWeights',
    /**
     * 410: pallet_contracts::schedule::HostFnWeights<T>
     **/
    PalletContractsScheduleHostFnWeights: {
      alias: {
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
    Lookup410: 'PalletContractsScheduleHostFnWeights',
    Lookup413: 'Vec<[u8;32]>',
    /**
     * 415: sp_staking::offence::OffenceDetails<<field>: sp_core::crypto::AccountId32, Offender>
     **/
    SpStakingOffenceOffenceDetails: {
      offender: '(AccountId32,PalletStakingExposure)',
      reporters: 'Vec<AccountId32>'
    },
    Lookup415: 'SpStakingOffenceOffenceDetails',
    /**
     * 416: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    PalletIdentityTypesRegistration: {
      judgements: 'Vec<(u32,PalletIdentityTypesJudgementU128)>',
      deposit: 'u128',
      info: 'PalletIdentityTypesIdentityInfo'
    },
    Lookup416: 'PalletIdentityTypesRegistration',
    /**
     * 417: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup417: 'Vec<(u32,PalletIdentityTypesJudgementU128)>',
    Lookup418: '(u32,PalletIdentityTypesJudgementU128)',
    Lookup419: 'Vec<(u32,PalletIdentityTypesJudgementU128)>',
    Lookup420: '(u128,Vec<AccountId32>)',
    /**
     * 421: frame_support::storage::bounded_vec::BoundedVec<<field>: sp_core::crypto::AccountId32, S>
     **/
    Lookup421: 'Vec<AccountId32>',
    /**
     * 422: frame_support::storage::bounded_vec::BoundedVec<<field>: Option<<field>: pallet_identity::types::RegistrarInfo<Balance, <field>: sp_core::crypto::AccountId32>>, S>
     **/
    Lookup422: 'Vec<Option<PalletIdentityTypesRegistrarInfo>>',
    /**
     * 423: Option<<field>: pallet_identity::types::RegistrarInfo<Balance, <field>: sp_core::crypto::AccountId32>>
     **/
    Lookup423: 'Option<PalletIdentityTypesRegistrarInfo>',
    /**
     * 424: pallet_identity::types::RegistrarInfo<Balance, <field>: sp_core::crypto::AccountId32>
     **/
    PalletIdentityTypesRegistrarInfo: {
      account: 'AccountId32',
      fee: 'u128',
      fields: 'PalletIdentityTypesIdentityField'
    },
    Lookup424: 'PalletIdentityTypesRegistrarInfo',
    Lookup425: 'Vec<Option<PalletIdentityTypesRegistrarInfo>>',
    Lookup427: 'Vec<PalletSocietyBid>',
    /**
     * 428: pallet_society::Bid<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletSocietyBid: {
      who: 'AccountId32',
      kind: 'PalletSocietyBidKind',
      value: 'u128'
    },
    Lookup428: 'PalletSocietyBid',
    /**
     * 429: pallet_society::BidKind<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletSocietyBidKind: {
      _enum: {
        Deposit: 'u128',
        Vouch: '(AccountId32,u128)',
      }
    },
    Lookup429: 'PalletSocietyBidKind',
    Lookup430: '(u128,PalletSocietyBidKind)',
    /**
     * 431: pallet_society::VouchingStatus
     **/
    PalletSocietyVouchingStatus: {
      _enum: ['Vouching', 'Banned']
    },
    Lookup431: 'PalletSocietyVouchingStatus',
    Lookup432: 'Vec<(u32,u128)>',
    Lookup433: '(u32,u128)',
    /**
     * 434: pallet_society::Vote
     **/
    PalletSocietyVote: {
      _enum: ['Skeptic', 'Reject', 'Approve']
    },
    Lookup434: 'PalletSocietyVote',
    /**
     * 436: pallet_recovery::RecoveryConfig<BlockNumber, Balance, <field>: sp_core::crypto::AccountId32>
     **/
    PalletRecoveryRecoveryConfig: {
      delayPeriod: 'u32',
      deposit: 'u128',
      friends: 'Vec<AccountId32>',
      threshold: 'u16'
    },
    Lookup436: 'PalletRecoveryRecoveryConfig',
    /**
     * 437: pallet_recovery::ActiveRecovery<BlockNumber, Balance, <field>: sp_core::crypto::AccountId32>
     **/
    PalletRecoveryActiveRecovery: {
      created: 'u32',
      deposit: 'u128',
      friends: 'Vec<AccountId32>'
    },
    Lookup437: 'PalletRecoveryActiveRecovery',
    Lookup440: 'Vec<Option<PalletSchedulerScheduledV2>>',
    /**
     * 441: Option<<field>: pallet_scheduler::ScheduledV2<<field>: node_runtime::Call, BlockNumber, <field>: node_runtime::OriginCaller, <field>: sp_core::crypto::AccountId32>>
     **/
    Lookup441: 'Option<PalletSchedulerScheduledV2>',
    /**
     * 442: pallet_scheduler::ScheduledV2<<field>: node_runtime::Call, BlockNumber, <field>: node_runtime::OriginCaller, <field>: sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduledV2: {
      maybeId: 'Option<Vec<u8>>',
      priority: 'u8',
      call: 'Call',
      maybePeriodic: 'Option<(u32,u32)>',
      origin: 'NodeRuntimeOriginCaller'
    },
    Lookup442: 'PalletSchedulerScheduledV2',
    /**
     * 443: node_runtime::OriginCaller
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
    Lookup443: 'NodeRuntimeOriginCaller',
    /**
     * 444: frame_system::RawOrigin<<field>: sp_core::crypto::AccountId32>
     **/
    FrameSystemRawOrigin: {
      _enum: {
        Root: 'Null',
        Signed: 'AccountId32',
        None: 'Null',
      }
    },
    Lookup444: 'FrameSystemRawOrigin',
    /**
     * 445: pallet_collective::RawOrigin<<field>: sp_core::crypto::AccountId32, <field>: pallet_collective::Instance1>
     **/
    PalletCollectiveRawOriginInstance1: {
      _enum: {
        Members: '(u32,u32)',
        Member: 'AccountId32',
        _Phantom: 'Null',
      }
    },
    Lookup445: 'PalletCollectiveRawOriginInstance1',
    /**
     * 446: pallet_collective::RawOrigin<<field>: sp_core::crypto::AccountId32, <field>: pallet_collective::Instance2>
     **/
    PalletCollectiveRawOriginInstance2: {
      _enum: {
        Members: '(u32,u32)',
        Member: 'AccountId32',
        _Phantom: 'Null',
      }
    },
    Lookup446: 'PalletCollectiveRawOriginInstance2',
    /**
     * 447: sp_core::Void
     **/
    SpCoreVoid: 'Null',
    Lookup447: 'SpCoreVoid',
    /**
     * 448: pallet_scheduler::Releases
     **/
    PalletSchedulerReleases: {
      _enum: ['V1', 'V2']
    },
    Lookup448: 'PalletSchedulerReleases',
    Lookup450: '(Vec<PalletProxyProxyDefinition>,u128)',
    /**
     * 451: frame_support::storage::bounded_vec::BoundedVec<<field>: pallet_proxy::ProxyDefinition<<field>: sp_core::crypto::AccountId32, <field>: node_runtime::ProxyType, BlockNumber>, S>
     **/
    Lookup451: 'Vec<PalletProxyProxyDefinition>',
    /**
     * 452: pallet_proxy::ProxyDefinition<<field>: sp_core::crypto::AccountId32, <field>: node_runtime::ProxyType, BlockNumber>
     **/
    PalletProxyProxyDefinition: {
      delegate: 'AccountId32',
      proxyType: 'NodeRuntimeProxyType',
      delay: 'u32'
    },
    Lookup452: 'PalletProxyProxyDefinition',
    Lookup453: 'Vec<PalletProxyProxyDefinition>',
    Lookup454: '(Vec<PalletProxyAnnouncement>,u128)',
    /**
     * 455: frame_support::storage::bounded_vec::BoundedVec<<field>: pallet_proxy::Announcement<<field>: sp_core::crypto::AccountId32, <field>: primitive_types::H256, BlockNumber>, S>
     **/
    Lookup455: 'Vec<PalletProxyAnnouncement>',
    /**
     * 456: pallet_proxy::Announcement<<field>: sp_core::crypto::AccountId32, <field>: primitive_types::H256, BlockNumber>
     **/
    PalletProxyAnnouncement: {
      real: 'AccountId32',
      callHash: 'H256',
      height: 'u32'
    },
    Lookup456: 'PalletProxyAnnouncement',
    Lookup457: 'Vec<PalletProxyAnnouncement>',
    /**
     * 459: pallet_multisig::Multisig<BlockNumber, Balance, <field>: sp_core::crypto::AccountId32>
     **/
    PalletMultisigMultisig: {
      when: 'PalletMultisigTimepointU32',
      deposit: 'u128',
      depositor: 'AccountId32',
      approvals: 'Vec<AccountId32>'
    },
    Lookup459: 'PalletMultisigMultisig',
    Lookup460: '(Vec<u8>,AccountId32,u128)',
    /**
     * 462: pallet_bounties::Bounty<<field>: sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletBountiesBounty: {
      proposer: 'AccountId32',
      value: 'u128',
      fee: 'u128',
      curatorDeposit: 'u128',
      bond: 'u128',
      status: 'PalletBountiesBountyStatus'
    },
    Lookup462: 'PalletBountiesBounty',
    /**
     * 463: pallet_bounties::BountyStatus<<field>: sp_core::crypto::AccountId32, BlockNumber>
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
    Lookup463: 'PalletBountiesBountyStatus',
    /**
     * 465: pallet_tips::OpenTip<<field>: sp_core::crypto::AccountId32, Balance, BlockNumber, <field>: primitive_types::H256>
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
    Lookup465: 'PalletTipsOpenTip',
    /**
     * 467: pallet_assets::types::AssetDetails<Balance, <field>: sp_core::crypto::AccountId32, DepositBalance>
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
    Lookup467: 'PalletAssetsTypesAssetDetails',
    /**
     * 468: pallet_assets::types::AssetBalance<Balance, Extra>
     **/
    PalletAssetsTypesAssetBalance: {
      balance: 'u64',
      isFrozen: 'bool',
      sufficient: 'bool',
      extra: 'Null'
    },
    Lookup468: 'PalletAssetsTypesAssetBalance',
    Lookup469: '(u32,AccountId32,AccountId32)',
    /**
     * 470: pallet_assets::types::Approval<Balance, DepositBalance>
     **/
    PalletAssetsTypesApproval: {
      amount: 'u64',
      deposit: 'u128'
    },
    Lookup470: 'PalletAssetsTypesApproval',
    /**
     * 471: pallet_assets::types::AssetMetadata<DepositBalance, <field>: frame_support::storage::bounded_vec::BoundedVec<T, S>>
     **/
    PalletAssetsTypesAssetMetadata: {
      deposit: 'u128',
      name: 'Vec<u8>',
      symbol: 'Vec<u8>',
      decimals: 'u8',
      isFrozen: 'bool'
    },
    Lookup471: 'PalletAssetsTypesAssetMetadata',
    /**
     * 473: pallet_lottery::LotteryConfig<BlockNumber, Balance>
     **/
    PalletLotteryLotteryConfig: {
      price: 'u128',
      start: 'u32',
      length: 'u32',
      delay: 'u32',
      repeat: 'bool'
    },
    Lookup473: 'PalletLotteryLotteryConfig',
    Lookup474: '(u32,Vec<(u8,u8)>)',
    Lookup475: 'Vec<(u8,u8)>',
    Lookup477: 'Vec<PalletGiltPalletGiltBid>',
    /**
     * 478: pallet_gilt::pallet::GiltBid<Balance, <field>: sp_core::crypto::AccountId32>
     **/
    PalletGiltPalletGiltBid: {
      amount: 'u128',
      who: 'AccountId32'
    },
    Lookup478: 'PalletGiltPalletGiltBid',
    /**
     * 479: pallet_gilt::pallet::ActiveGiltsTotal<Balance>
     **/
    PalletGiltPalletActiveGiltsTotalU128: {
      frozen: 'u128',
      proportion: 'Perquintill',
      index: 'u32',
      target: 'Perquintill'
    },
    Lookup479: 'PalletGiltPalletActiveGiltsTotalU128',
    /**
     * 480: pallet_gilt::pallet::ActiveGilt<Balance, <field>: sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletGiltPalletActiveGilt: {
      proportion: 'Perquintill',
      amount: 'u128',
      who: 'AccountId32',
      expiry: 'u32'
    },
    Lookup480: 'PalletGiltPalletActiveGilt',
    /**
     * 482: pallet_uniques::types::ClassDetails<<field>: sp_core::crypto::AccountId32, DepositBalance>
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
    Lookup482: 'PalletUniquesTypesClassDetails',
    Lookup483: '(AccountId32,u32,u32)',
    /**
     * 484: pallet_uniques::types::InstanceDetails<<field>: sp_core::crypto::AccountId32, DepositBalance>
     **/
    PalletUniquesTypesInstanceDetails: {
      owner: 'AccountId32',
      approved: 'Option<AccountId32>',
      isFrozen: 'bool',
      deposit: 'u128'
    },
    Lookup484: 'PalletUniquesTypesInstanceDetails',
    /**
     * 485: pallet_uniques::types::ClassMetadata<DepositBalance, StringLimit>
     **/
    PalletUniquesTypesClassMetadata: {
      deposit: 'u128',
      data: 'Vec<u8>',
      isFrozen: 'bool'
    },
    Lookup485: 'PalletUniquesTypesClassMetadata',
    /**
     * 486: pallet_uniques::types::InstanceMetadata<DepositBalance, StringLimit>
     **/
    PalletUniquesTypesInstanceMetadata: {
      deposit: 'u128',
      data: 'Vec<u8>',
      isFrozen: 'bool'
    },
    Lookup486: 'PalletUniquesTypesInstanceMetadata',
    Lookup487: '(u32,OptionU32,Vec<u8>)',
    Lookup488: '(Vec<u8>,u128)',
    Lookup490: 'Vec<PalletTransactionStorageTransactionInfo>',
    /**
     * 491: pallet_transaction_storage::TransactionInfo
     **/
    PalletTransactionStorageTransactionInfo: {
      alias: {
        size_: 'size',
      },
      chunkRoot: 'H256',
      contentHash: 'H256',
      size_: 'u32',
      blockChunks: 'u32'
    },
    Lookup491: 'PalletTransactionStorageTransactionInfo',
    /**
     * 493: sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic
     **/
    Lookup493: 'Vec<u8>',
    /**
     * 494: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: 'Null',
    Lookup494: 'FrameSystemExtensionsCheckSpecVersion',
    /**
     * 495: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: 'Null',
    Lookup495: 'FrameSystemExtensionsCheckTxVersion',
    /**
     * 496: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: 'Null',
    Lookup496: 'FrameSystemExtensionsCheckGenesis',
    /**
     * 497: frame_system::extensions::check_mortality::CheckMortality<T>
     **/
    Lookup497: 'Era',
    /**
     * 498: sp_runtime::generic::era::Era
     **/
    Lookup498: 'Era',
    /**
     * 499: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    Lookup499: 'Compact<u32>',
    /**
     * 500: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: 'Null',
    Lookup500: 'FrameSystemExtensionsCheckWeight',
    /**
     * 501: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    Lookup501: 'Compact<u128>'
  }
} as Definitions;
