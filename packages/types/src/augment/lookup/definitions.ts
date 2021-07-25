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
    SpCoreCryptoAccountId32: 'AccountId32',
    /**
     * 1
     **/
    Lookup1: '[u8;32]',
    /**
     * 2
     **/
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
    /**
     * 4
     **/
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
    /**
     * 6
     **/
    Lookup6: 'u128',
    /**
     * 7: frame_support::weights::PerDispatchClass<T>
     **/
    FrameSupportWeightsPerDispatchClassU64: {
      normal: 'u64',
      operational: 'u64',
      mandatory: 'u64'
    },
    /**
     * 8
     **/
    Lookup8: 'u64',
    /**
     * 9: primitive_types::H256
     **/
    PrimitiveTypesH256: 'H256',
    /**
     * 10
     **/
    Lookup10: 'Bytes',
    /**
     * 11: sp_runtime::generic::digest::Digest<<field>: primitive_types::H256>
     **/
    SpRuntimeGenericDigest: {
      logs: 'Vec<SpRuntimeGenericDigestDigestItem>'
    },
    /**
     * 12
     **/
    Lookup12: 'Vec<SpRuntimeGenericDigestDigestItem>',
    /**
     * 13: sp_runtime::generic::digest::DigestItem<<field>: primitive_types::H256>
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
     * 14
     **/
    Lookup14: '[u8;4]',
    /**
     * 15: sp_runtime::generic::digest::ChangesTrieSignal
     **/
    SpRuntimeGenericDigestChangesTrieSignal: {
      _enum: {
        NewConfiguration: 'Option<SpCoreChangesTrieChangesTrieConfiguration>',
      }
    },
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
    /**
     * 18
     **/
    Lookup18: 'Vec<FrameSystemEventRecord>',
    /**
     * 19: frame_system::EventRecord<<field>: node_runtime::Event, <field>: primitive_types::H256>
     **/
    FrameSystemEventRecord: {
      phase: 'FrameSystemPhase',
      event: 'NodeRuntimeEvent',
      topics: 'Vec<H256>'
    },
    /**
     * 22: frame_support::weights::DispatchInfo
     **/
    FrameSupportWeightsDispatchInfo: {
      weight: 'u64',
      class: 'FrameSupportWeightsDispatchClass',
      paysFee: 'FrameSupportWeightsPays'
    },
    /**
     * 23: frame_support::weights::DispatchClass
     **/
    FrameSupportWeightsDispatchClass: {
      _enum: ['Normal', 'Operational', 'Mandatory']
    },
    /**
     * 24: frame_support::weights::Pays
     **/
    FrameSupportWeightsPays: {
      _enum: ['Yes', 'No']
    },
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
    /**
     * 26: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
      _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
    },
    /**
     * 27: sp_runtime::ArithmeticError
     **/
    SpRuntimeArithmeticError: {
      _enum: ['Underflow', 'Overflow', 'DivisionByZero']
    },
    /**
     * 31: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTraitsTokensMiscBalanceStatus: {
      _enum: ['Free', 'Reserved']
    },
    /**
     * 33: pallet_election_provider_multi_phase::ElectionCompute
     **/
    PalletElectionProviderMultiPhaseElectionCompute: {
      _enum: ['OnChain', 'Signed', 'Unsigned', 'Emergency']
    },
    /**
     * 34
     **/
    Lookup34: 'bool',
    /**
     * 35: Option<<field>: pallet_election_provider_multi_phase::ElectionCompute>
     **/
    Lookup35: 'Option<PalletElectionProviderMultiPhaseElectionCompute>',
    /**
     * 39
     **/
    Lookup39: 'Vec<AccountId32>',
    /**
     * 40: pallet_democracy::vote_threshold::VoteThreshold
     **/
    PalletDemocracyVoteThreshold: {
      _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
    },
    /**
     * 41: Result<T, <field>: sp_runtime::DispatchError>
     **/
    Lookup41: 'Result<Null, SpRuntimeDispatchError>',
    /**
     * 42
     **/
    Lookup42: 'Null',
    /**
     * 44: pallet_collective::Instance1
     **/
    PalletCollectiveInstance1: 'Null',
    /**
     * 46: pallet_collective::Instance2
     **/
    PalletCollectiveInstance2: 'Null',
    /**
     * 48
     **/
    Lookup48: 'Vec<(AccountId32,u128)>',
    /**
     * 49
     **/
    Lookup49: '(AccountId32,u128)',
    /**
     * 51: pallet_membership::Instance1
     **/
    PalletMembershipInstance1: 'Null',
    /**
     * 53
     **/
    Lookup53: 'Vec<(SpCoreEd25519Public,u64)>',
    /**
     * 54
     **/
    Lookup54: '(SpCoreEd25519Public,u64)',
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
    /**
     * 63
     **/
    Lookup63: 'Vec<(AccountId32,PalletStakingExposure)>',
    /**
     * 64
     **/
    Lookup64: '(AccountId32,PalletStakingExposure)',
    /**
     * 65: pallet_staking::Exposure<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletStakingExposure: {
      total: 'CompactU128',
      own: 'CompactU128',
      others: 'Vec<PalletStakingIndividualExposure>'
    },
    /**
     * 66
     **/
    Lookup66: 'Compact<u128>',
    /**
     * 67
     **/
    Lookup67: 'Vec<PalletStakingIndividualExposure>',
    /**
     * 68: pallet_staking::IndividualExposure<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletStakingIndividualExposure: {
      who: 'AccountId32',
      value: 'CompactU128'
    },
    /**
     * 70
     **/
    Lookup70: '[u8;16]',
    /**
     * 73: pallet_society::DefaultInstance
     **/
    PalletSocietyDefaultInstance: 'Null',
    /**
     * 77
     **/
    Lookup77: '(u32,u32)',
    /**
     * 78: Option<T>
     **/
    Lookup78: 'Option<Bytes>',
    /**
     * 80: node_runtime::ProxyType
     **/
    NodeRuntimeProxyType: {
      _enum: ['Any', 'NonTransfer', 'Governance', 'Staking']
    },
    /**
     * 81
     **/
    Lookup81: 'u16',
    /**
     * 83: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepointU32: {
      height: 'u32',
      index: 'u32'
    },
    /**
     * 88
     **/
    Lookup88: '(u8,u8)',
    /**
     * 91: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup91: 'Bytes',
    /**
     * 92
     **/
    Lookup92: 'Vec<u32>',
    /**
     * 93: Option<T>
     **/
    OptionU32: 'Option<u32>',
    /**
     * 94: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup94: 'Bytes',
    /**
     * 95: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup95: 'Bytes',
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
    /**
     * 98
     **/
    Lookup98: 'Vec<H256>',
    /**
     * 99
     **/
    Lookup99: 'Vec<(u32,u32)>',
    /**
     * 100: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
      specVersion: 'CompactU32',
      specName: 'Text'
    },
    /**
     * 101
     **/
    Lookup101: 'Compact<u32>',
    /**
     * 102
     **/
    Lookup102: 'Text',
    /**
     * 104: sp_arithmetic::per_things::Perbill
     **/
    SpArithmeticPerThingsPerbill: 'Perbill',
    /**
     * 105
     **/
    Lookup105: 'Vec<(Bytes,Bytes)>',
    /**
     * 106
     **/
    Lookup106: '(Bytes,Bytes)',
    /**
     * 107
     **/
    Lookup107: 'Vec<Bytes>',
    /**
     * 108: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
      baseBlock: 'u64',
      maxBlock: 'u64',
      perClass: 'FrameSupportWeightsPerDispatchClass'
    },
    /**
     * 109: frame_support::weights::PerDispatchClass<<field>: frame_system::limits::WeightsPerClass>
     **/
    FrameSupportWeightsPerDispatchClass: {
      normal: 'FrameSystemLimitsWeightsPerClass',
      operational: 'FrameSystemLimitsWeightsPerClass',
      mandatory: 'FrameSystemLimitsWeightsPerClass'
    },
    /**
     * 110: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
      baseExtrinsic: 'u64',
      maxExtrinsic: 'OptionU64',
      maxTotal: 'OptionU64',
      reserved: 'OptionU64'
    },
    /**
     * 111: Option<T>
     **/
    OptionU64: 'Option<u64>',
    /**
     * 112: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
      max: 'FrameSupportWeightsPerDispatchClassU32'
    },
    /**
     * 113: frame_support::weights::PerDispatchClass<T>
     **/
    FrameSupportWeightsPerDispatchClassU32: {
      normal: 'u32',
      operational: 'u32',
      mandatory: 'u32'
    },
    /**
     * 114: frame_support::weights::RuntimeDbWeight
     **/
    FrameSupportWeightsRuntimeDbWeight: {
      read: 'u64',
      write: 'u64'
    },
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
    /**
     * 116: Cow<T>
     **/
    Lookup116: 'Vec<([u8;8],u32)>',
    /**
     * 117
     **/
    Lookup117: 'Vec<([u8;8],u32)>',
    /**
     * 118
     **/
    Lookup118: '([u8;8],u32)',
    /**
     * 119
     **/
    Lookup119: '[u8;8]',
    /**
     * 122
     **/
    Lookup122: 'Vec<Call>',
    /**
     * 123: node_runtime::Call
     **/
    NodeRuntimeCall: 'Call',
    /**
     * 125: sp_consensus_slots::EquivocationProof<<field>: sp_runtime::generic::header::Header, <field>: sp_consensus_babe::app::Public>
     **/
    SpConsensusSlotsEquivocationProof: {
      offender: 'SpCoreSr25519Public',
      slot: 'u64',
      firstHeader: 'SpRuntimeGenericHeader',
      secondHeader: 'SpRuntimeGenericHeader'
    },
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
    /**
     * 127: sp_consensus_babe::app::Public
     **/
    Lookup127: '[u8;32]',
    /**
     * 128: sp_consensus_slots::Slot
     **/
    SpConsensusSlotsSlot: 'u64',
    /**
     * 129: sp_session::MembershipProof
     **/
    SpSessionMembershipProof: {
      session: 'u32',
      trieNodes: 'Vec<Bytes>',
      validatorCount: 'u32'
    },
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
    /**
     * 131
     **/
    Lookup131: '(u64,u64)',
    /**
     * 132: sp_consensus_babe::AllowedSlots
     **/
    SpConsensusBabeAllowedSlots: {
      _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
    },
    /**
     * 134
     **/
    CompactU64: 'Compact<u64>',
    /**
     * 136
     **/
    Lookup136: 'Vec<SpRuntimeGenericHeader>',
    /**
     * 139: sp_runtime::multiaddress::MultiAddress<<field>: sp_core::crypto::AccountId32, AccountIndex>
     **/
    SpRuntimeMultiaddressMultiAddress: 'MultiAddress',
    /**
     * 140
     **/
    Lookup140: '[u8;20]',
    /**
     * 142: pallet_election_provider_multi_phase::RawSolution<<field>: node_runtime::NposCompactSolution16>
     **/
    PalletElectionProviderMultiPhaseRawSolution: {
      compact: 'NodeRuntimeNposCompactSolution16',
      score: '[u128;3]',
      round: 'u32'
    },
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
    /**
     * 144
     **/
    Lookup144: 'Vec<(CompactU32,CompactU16)>',
    /**
     * 145
     **/
    Lookup145: '(CompactU32,CompactU16)',
    /**
     * 146
     **/
    CompactU16: 'Compact<u16>',
    /**
     * 147
     **/
    Lookup147: 'Vec<(CompactU32,(CompactU16,Compact<PerU16>),CompactU16)>',
    /**
     * 148
     **/
    Lookup148: '(CompactU32,(CompactU16,Compact<PerU16>),CompactU16)',
    /**
     * 149
     **/
    Lookup149: '(CompactU16,Compact<PerU16>)',
    /**
     * 150
     **/
    Lookup150: 'Compact<PerU16>',
    /**
     * 151: sp_arithmetic::per_things::PerU16
     **/
    SpArithmeticPerThingsPerU16: 'PerU16',
    /**
     * 152
     **/
    Lookup152: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);2],CompactU16)>',
    /**
     * 153
     **/
    Lookup153: '(CompactU32,[(CompactU16,Compact<PerU16>);2],CompactU16)',
    /**
     * 154
     **/
    Lookup154: '[(CompactU16,Compact<PerU16>);2]',
    /**
     * 155
     **/
    Lookup155: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);3],CompactU16)>',
    /**
     * 156
     **/
    Lookup156: '(CompactU32,[(CompactU16,Compact<PerU16>);3],CompactU16)',
    /**
     * 157
     **/
    Lookup157: '[(CompactU16,Compact<PerU16>);3]',
    /**
     * 158
     **/
    Lookup158: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);4],CompactU16)>',
    /**
     * 159
     **/
    Lookup159: '(CompactU32,[(CompactU16,Compact<PerU16>);4],CompactU16)',
    /**
     * 160
     **/
    Lookup160: '[(CompactU16,Compact<PerU16>);4]',
    /**
     * 161
     **/
    Lookup161: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);5],CompactU16)>',
    /**
     * 162
     **/
    Lookup162: '(CompactU32,[(CompactU16,Compact<PerU16>);5],CompactU16)',
    /**
     * 163
     **/
    Lookup163: '[(CompactU16,Compact<PerU16>);5]',
    /**
     * 164
     **/
    Lookup164: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);6],CompactU16)>',
    /**
     * 165
     **/
    Lookup165: '(CompactU32,[(CompactU16,Compact<PerU16>);6],CompactU16)',
    /**
     * 166
     **/
    Lookup166: '[(CompactU16,Compact<PerU16>);6]',
    /**
     * 167
     **/
    Lookup167: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);7],CompactU16)>',
    /**
     * 168
     **/
    Lookup168: '(CompactU32,[(CompactU16,Compact<PerU16>);7],CompactU16)',
    /**
     * 169
     **/
    Lookup169: '[(CompactU16,Compact<PerU16>);7]',
    /**
     * 170
     **/
    Lookup170: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);8],CompactU16)>',
    /**
     * 171
     **/
    Lookup171: '(CompactU32,[(CompactU16,Compact<PerU16>);8],CompactU16)',
    /**
     * 172
     **/
    Lookup172: '[(CompactU16,Compact<PerU16>);8]',
    /**
     * 173
     **/
    Lookup173: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);9],CompactU16)>',
    /**
     * 174
     **/
    Lookup174: '(CompactU32,[(CompactU16,Compact<PerU16>);9],CompactU16)',
    /**
     * 175
     **/
    Lookup175: '[(CompactU16,Compact<PerU16>);9]',
    /**
     * 176
     **/
    Lookup176: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);10],CompactU16)>',
    /**
     * 177
     **/
    Lookup177: '(CompactU32,[(CompactU16,Compact<PerU16>);10],CompactU16)',
    /**
     * 178
     **/
    Lookup178: '[(CompactU16,Compact<PerU16>);10]',
    /**
     * 179
     **/
    Lookup179: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);11],CompactU16)>',
    /**
     * 180
     **/
    Lookup180: '(CompactU32,[(CompactU16,Compact<PerU16>);11],CompactU16)',
    /**
     * 181
     **/
    Lookup181: '[(CompactU16,Compact<PerU16>);11]',
    /**
     * 182
     **/
    Lookup182: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);12],CompactU16)>',
    /**
     * 183
     **/
    Lookup183: '(CompactU32,[(CompactU16,Compact<PerU16>);12],CompactU16)',
    /**
     * 184
     **/
    Lookup184: '[(CompactU16,Compact<PerU16>);12]',
    /**
     * 185
     **/
    Lookup185: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);13],CompactU16)>',
    /**
     * 186
     **/
    Lookup186: '(CompactU32,[(CompactU16,Compact<PerU16>);13],CompactU16)',
    /**
     * 187
     **/
    Lookup187: '[(CompactU16,Compact<PerU16>);13]',
    /**
     * 188
     **/
    Lookup188: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);14],CompactU16)>',
    /**
     * 189
     **/
    Lookup189: '(CompactU32,[(CompactU16,Compact<PerU16>);14],CompactU16)',
    /**
     * 190
     **/
    Lookup190: '[(CompactU16,Compact<PerU16>);14]',
    /**
     * 191
     **/
    Lookup191: 'Vec<(CompactU32,[(CompactU16,Compact<PerU16>);15],CompactU16)>',
    /**
     * 192
     **/
    Lookup192: '(CompactU32,[(CompactU16,Compact<PerU16>);15],CompactU16)',
    /**
     * 193
     **/
    Lookup193: '[(CompactU16,Compact<PerU16>);15]',
    /**
     * 194
     **/
    Lookup194: '[u128;3]',
    /**
     * 195: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
     **/
    PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
      voters: 'CompactU32',
      targets: 'CompactU32'
    },
    /**
     * 196: Option<T>
     **/
    Lookup196: 'Option<[u128;3]>',
    /**
     * 197
     **/
    Lookup197: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    /**
     * 198
     **/
    Lookup198: '(AccountId32,SpNposElectionsSupport)',
    /**
     * 199: sp_npos_elections::Support<<field>: sp_core::crypto::AccountId32>
     **/
    SpNposElectionsSupport: {
      total: 'u128',
      voters: 'Vec<(AccountId32,u128)>'
    },
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
    /**
     * 202: pallet_staking::ValidatorPrefs
     **/
    PalletStakingValidatorPrefs: {
      commission: 'Compact<Perbill>',
      blocked: 'bool'
    },
    /**
     * 203
     **/
    Lookup203: 'Compact<Perbill>',
    /**
     * 204
     **/
    Lookup204: 'Vec<MultiAddress>',
    /**
     * 205: sp_arithmetic::per_things::Percent
     **/
    SpArithmeticPerThingsPercent: 'Percent',
    /**
     * 206: Option<<field>: sp_arithmetic::per_things::Percent>
     **/
    Lookup206: 'Option<Percent>',
    /**
     * 208: node_runtime::SessionKeys
     **/
    NodeRuntimeSessionKeys: {
      grandpa: 'SpCoreEd25519Public',
      babe: 'SpCoreSr25519Public',
      imOnline: 'SpCoreSr25519Public',
      authorityDiscovery: 'SpCoreSr25519Public'
    },
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
    /**
     * 212: pallet_democracy::vote::Vote
     **/
    PalletDemocracyVote: 'Vote',
    /**
     * 213: pallet_democracy::conviction::Conviction
     **/
    PalletDemocracyConviction: {
      _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
    },
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
    /**
     * 221: sp_finality_grandpa::EquivocationProof<<field>: primitive_types::H256, N>
     **/
    SpFinalityGrandpaEquivocationProof: {
      setId: 'u64',
      equivocation: 'SpFinalityGrandpaEquivocation'
    },
    /**
     * 222: sp_finality_grandpa::Equivocation<<field>: primitive_types::H256, N>
     **/
    SpFinalityGrandpaEquivocation: {
      _enum: {
        Prevote: 'Lookup223',
        Precommit: 'Lookup229',
      }
    },
    /**
     * 223: finality_grandpa::Equivocation<<field>: sp_finality_grandpa::app::Public, <field>: finality_grandpa::Prevote<<field>: primitive_types::H256, N>, <field>: sp_finality_grandpa::app::Signature>
     **/
    Lookup223: {
      roundNumber: 'u64',
      identity: 'SpCoreEd25519Public',
      first: '(FinalityGrandpaPrevote,SpCoreEd25519Signature)',
      second: '(FinalityGrandpaPrevote,SpCoreEd25519Signature)'
    },
    /**
     * 224: finality_grandpa::Prevote<<field>: primitive_types::H256, N>
     **/
    FinalityGrandpaPrevote: {
      targetHash: 'H256',
      targetNumber: 'u32'
    },
    /**
     * 225: sp_finality_grandpa::app::Signature
     **/
    Lookup225: '[u8;64]',
    /**
     * 226: sp_core::ed25519::Signature
     **/
    Lookup226: '[u8;64]',
    /**
     * 227
     **/
    Lookup227: '[u8;64]',
    /**
     * 228
     **/
    Lookup228: '(FinalityGrandpaPrevote,SpCoreEd25519Signature)',
    /**
     * 229: finality_grandpa::Equivocation<<field>: sp_finality_grandpa::app::Public, <field>: finality_grandpa::Precommit<<field>: primitive_types::H256, N>, <field>: sp_finality_grandpa::app::Signature>
     **/
    Lookup229: {
      roundNumber: 'u64',
      identity: 'SpCoreEd25519Public',
      first: '(FinalityGrandpaPrecommit,SpCoreEd25519Signature)',
      second: '(FinalityGrandpaPrecommit,SpCoreEd25519Signature)'
    },
    /**
     * 230: finality_grandpa::Precommit<<field>: primitive_types::H256, N>
     **/
    FinalityGrandpaPrecommit: {
      targetHash: 'H256',
      targetNumber: 'u32'
    },
    /**
     * 231
     **/
    Lookup231: '(FinalityGrandpaPrecommit,SpCoreEd25519Signature)',
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
    /**
     * 237: sp_core::offchain::OpaqueNetworkState
     **/
    SpCoreOffchainOpaqueNetworkState: {
      peerId: 'Bytes',
      externalAddresses: 'Vec<Bytes>'
    },
    /**
     * 238: sp_core::OpaquePeerId
     **/
    SpCoreOpaquePeerId: 'Bytes',
    /**
     * 239
     **/
    Lookup239: 'Vec<Bytes>',
    /**
     * 240: sp_core::offchain::OpaqueMultiaddr
     **/
    SpCoreOffchainOpaqueMultiaddr: 'Bytes',
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
    /**
     * 245: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup245: 'Vec<(Data,Data)>',
    /**
     * 246
     **/
    Lookup246: '(Data,Data)',
    /**
     * 247: pallet_identity::types::Data
     **/
    PalletIdentityTypesData: 'Data',
    /**
     * 248
     **/
    Lookup248: '[u8;0]',
    /**
     * 249
     **/
    Lookup249: '[u8;1]',
    /**
     * 250
     **/
    Lookup250: '[u8;2]',
    /**
     * 251
     **/
    Lookup251: '[u8;3]',
    /**
     * 252
     **/
    Lookup252: '[u8;5]',
    /**
     * 253
     **/
    Lookup253: '[u8;6]',
    /**
     * 254
     **/
    Lookup254: '[u8;7]',
    /**
     * 255
     **/
    Lookup255: '[u8;9]',
    /**
     * 256
     **/
    Lookup256: '[u8;10]',
    /**
     * 257
     **/
    Lookup257: '[u8;11]',
    /**
     * 258
     **/
    Lookup258: '[u8;12]',
    /**
     * 259
     **/
    Lookup259: '[u8;13]',
    /**
     * 260
     **/
    Lookup260: '[u8;14]',
    /**
     * 261
     **/
    Lookup261: '[u8;15]',
    /**
     * 262
     **/
    Lookup262: '[u8;17]',
    /**
     * 263
     **/
    Lookup263: '[u8;18]',
    /**
     * 264
     **/
    Lookup264: '[u8;19]',
    /**
     * 265
     **/
    Lookup265: '[u8;21]',
    /**
     * 266
     **/
    Lookup266: '[u8;22]',
    /**
     * 267
     **/
    Lookup267: '[u8;23]',
    /**
     * 268
     **/
    Lookup268: '[u8;24]',
    /**
     * 269
     **/
    Lookup269: '[u8;25]',
    /**
     * 270
     **/
    Lookup270: '[u8;26]',
    /**
     * 271
     **/
    Lookup271: '[u8;27]',
    /**
     * 272
     **/
    Lookup272: '[u8;28]',
    /**
     * 273
     **/
    Lookup273: '[u8;29]',
    /**
     * 274
     **/
    Lookup274: '[u8;30]',
    /**
     * 275
     **/
    Lookup275: '[u8;31]',
    /**
     * 276
     **/
    Lookup276: 'Vec<(Data,Data)>',
    /**
     * 277: Option<T>
     **/
    Lookup277: 'Option<[u8;20]>',
    /**
     * 278
     **/
    Lookup278: 'Vec<(AccountId32,Data)>',
    /**
     * 279
     **/
    Lookup279: '(AccountId32,Data)',
    /**
     * 280: pallet_identity::types::IdentityFields
     **/
    PalletIdentityTypesIdentityFields: 'IdentityFields',
    /**
     * 281: pallet_identity::types::IdentityField
     **/
    PalletIdentityTypesIdentityField: {
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
    /**
     * 284: pallet_society::Judgement
     **/
    PalletSocietyJudgement: {
      _enum: ['Rebid', 'Reject', 'Approve']
    },
    /**
     * 287: pallet_vesting::VestingInfo<Balance, BlockNumber>
     **/
    PalletVestingVestingInfo: {
      locked: 'u128',
      perBlock: 'u128',
      startingBlock: 'u32'
    },
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
    /**
     * 300
     **/
    Lookup300: 'Compact<Perquintill>',
    /**
     * 301: sp_arithmetic::per_things::Perquintill
     **/
    SpArithmeticPerThingsPerquintill: 'Perquintill',
    /**
     * 303: pallet_uniques::types::DestroyWitness
     **/
    PalletUniquesTypesDestroyWitness: {
      instances: 'CompactU32',
      instanceMetadatas: 'CompactU32',
      attributes: 'CompactU32'
    },
    /**
     * 304: Option<<field>: sp_runtime::multiaddress::MultiAddress<<field>: sp_core::crypto::AccountId32, AccountIndex>>
     **/
    Lookup304: 'Option<MultiAddress>',
    /**
     * 306: sp_transaction_storage_proof::TransactionStorageProof
     **/
    SpTransactionStorageProofTransactionStorageProof: {
      chunk: 'Bytes',
      proof: 'Vec<Bytes>'
    },
    /**
     * 307
     **/
    Lookup307: 'Vec<(SpCoreSr25519Public,u64)>',
    /**
     * 308
     **/
    Lookup308: '(SpCoreSr25519Public,u64)',
    /**
     * 309
     **/
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
    /**
     * 313
     **/
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
    /**
     * 316
     **/
    Lookup316: '(AccountId32,u128,bool)',
    /**
     * 318: frame_support::storage::weak_bounded_vec::WeakBoundedVec<<field>: pallet_balances::BalanceLock<Balance>, S>
     **/
    FrameSupportStorageWeakBoundedVec: 'Vec<PalletBalancesBalanceLockU128>',
    /**
     * 319: pallet_balances::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLockU128: {
      id: '[u8;8]',
      amount: 'u128',
      reasons: 'PalletBalancesReasons'
    },
    /**
     * 320: pallet_balances::Reasons
     **/
    PalletBalancesReasons: {
      _enum: ['Fee', 'Misc', 'All']
    },
    /**
     * 321
     **/
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
    /**
     * 324
     **/
    Lookup324: 'Vec<PalletBalancesReserveData>',
    /**
     * 325: pallet_balances::Releases
     **/
    PalletBalancesReleases: {
      _enum: ['V1_0_0', 'V2_0_0']
    },
    /**
     * 327: sp_arithmetic::fixed_point::FixedU128
     **/
    SpArithmeticFixedPointFixedU128: 'u128',
    /**
     * 328: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
      _enum: ['V1Ancient', 'V2']
    },
    /**
     * 329
     **/
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
    /**
     * 332
     **/
    Lookup332: '(bool,u32)',
    /**
     * 333: pallet_election_provider_multi_phase::ReadySolution<<field>: sp_core::crypto::AccountId32>
     **/
    PalletElectionProviderMultiPhaseReadySolution: {
      supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
      score: '[u128;3]',
      compute: 'PalletElectionProviderMultiPhaseElectionCompute'
    },
    /**
     * 334: pallet_election_provider_multi_phase::RoundSnapshot<<field>: sp_core::crypto::AccountId32>
     **/
    PalletElectionProviderMultiPhaseRoundSnapshot: {
      voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
      targets: 'Vec<AccountId32>'
    },
    /**
     * 335
     **/
    Lookup335: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    /**
     * 336
     **/
    Lookup336: '(AccountId32,u64,Vec<AccountId32>)',
    /**
     * 337: frame_support::storage::bounded_btree_map::BoundedBTreeMap<K, V, S>
     **/
    FrameSupportStorageBoundedBtreeMapBoundedBTreeMap: 'BTreeMap<[u128;3], u32>',
    /**
     * 338: BTreeMap<K, V>
     **/
    Lookup338: 'BTreeMap<[u128;3], u32>',
    /**
     * 339
     **/
    Lookup339: 'Vec<([u128;3],u32)>',
    /**
     * 340
     **/
    Lookup340: '([u128;3],u32)',
    /**
     * 341: pallet_election_provider_multi_phase::signed::SignedSubmission<<field>: sp_core::crypto::AccountId32, Balance, <field>: node_runtime::NposCompactSolution16>
     **/
    PalletElectionProviderMultiPhaseSignedSignedSubmission: {
      who: 'AccountId32',
      deposit: 'u128',
      solution: 'PalletElectionProviderMultiPhaseRawSolution'
    },
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
    /**
     * 344
     **/
    Lookup344: 'Vec<PalletStakingUnlockChunkU128>',
    /**
     * 345: pallet_staking::UnlockChunk<Balance>
     **/
    PalletStakingUnlockChunkU128: {
      value: 'CompactU128',
      era: 'CompactU32'
    },
    /**
     * 346: pallet_staking::Nominations<<field>: sp_core::crypto::AccountId32>
     **/
    PalletStakingNominations: {
      targets: 'Vec<AccountId32>',
      submittedIn: 'u32',
      suppressed: 'bool'
    },
    /**
     * 347: pallet_staking::ActiveEraInfo
     **/
    PalletStakingActiveEraInfo: {
      index: 'u32',
      start: 'OptionU64'
    },
    /**
     * 348: pallet_staking::EraRewardPoints<<field>: sp_core::crypto::AccountId32>
     **/
    PalletStakingEraRewardPoints: {
      total: 'u32',
      individual: 'BTreeMap<AccountId32, u32>'
    },
    /**
     * 349: BTreeMap<<field>: sp_core::crypto::AccountId32, V>
     **/
    Lookup349: 'BTreeMap<AccountId32, u32>',
    /**
     * 350
     **/
    Lookup350: 'Vec<(AccountId32,u32)>',
    /**
     * 351
     **/
    Lookup351: '(AccountId32,u32)',
    /**
     * 352: pallet_staking::Forcing
     **/
    PalletStakingForcing: {
      _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
    },
    /**
     * 353
     **/
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
    /**
     * 355
     **/
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
    /**
     * 357: pallet_staking::slashing::SpanRecord<Balance>
     **/
    PalletStakingSlashingSpanRecordU128: {
      slashed: 'u128',
      paidOut: 'u128'
    },
    /**
     * 358: pallet_staking::Releases
     **/
    PalletStakingReleases: {
      _enum: ['V1_0_0Ancient', 'V2_0_0', 'V3_0_0', 'V4_0_0', 'V5_0_0', 'V6_0_0', 'V7_0_0']
    },
    /**
     * 360
     **/
    Lookup360: 'Vec<(AccountId32,NodeRuntimeSessionKeys)>',
    /**
     * 361
     **/
    Lookup361: '(AccountId32,NodeRuntimeSessionKeys)',
    /**
     * 362
     **/
    Lookup362: '(SpCoreCryptoKeyTypeId,Bytes)',
    /**
     * 363: sp_core::crypto::KeyTypeId
     **/
    SpCoreCryptoKeyTypeId: '[u8;4]',
    /**
     * 365
     **/
    Lookup365: 'Vec<(u32,H256,AccountId32)>',
    /**
     * 366
     **/
    Lookup366: '(u32,H256,AccountId32)',
    /**
     * 367
     **/
    Lookup367: '(Vec<AccountId32>,u128)',
    /**
     * 368: pallet_democracy::PreimageStatus<<field>: sp_core::crypto::AccountId32, Balance, BlockNumber>
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
    /**
     * 371: pallet_democracy::types::Tally<Balance>
     **/
    PalletDemocracyTypesTallyU128: {
      ayes: 'u128',
      nays: 'u128',
      turnout: 'u128'
    },
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
    /**
     * 373
     **/
    Lookup373: 'Vec<(u32,PalletDemocracyVoteAccountVoteU128)>',
    /**
     * 374
     **/
    Lookup374: '(u32,PalletDemocracyVoteAccountVoteU128)',
    /**
     * 375: pallet_democracy::types::Delegations<Balance>
     **/
    PalletDemocracyTypesDelegationsU128: {
      votes: 'u128',
      capital: 'u128'
    },
    /**
     * 376: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletDemocracyVotePriorLock: '(u32,u128)',
    /**
     * 377
     **/
    Lookup377: '(H256,PalletDemocracyVoteThreshold)',
    /**
     * 378
     **/
    Lookup378: '(u32,Vec<AccountId32>)',
    /**
     * 379: pallet_democracy::Releases
     **/
    PalletDemocracyReleases: {
      _enum: ['V1']
    },
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
    /**
     * 384: frame_support::storage::bounded_vec::BoundedVec<<field>: primitive_types::H256, S>
     **/
    Lookup384: 'Vec<H256>',
    /**
     * 386
     **/
    Lookup386: 'Vec<PalletElectionsPhragmenSeatHolder>',
    /**
     * 387: pallet_elections_phragmen::SeatHolder<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenSeatHolder: {
      who: 'AccountId32',
      stake: 'u128',
      deposit: 'u128'
    },
    /**
     * 388: pallet_elections_phragmen::Voter<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenVoter: {
      votes: 'Vec<AccountId32>',
      stake: 'u128',
      deposit: 'u128'
    },
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
    /**
     * 392: pallet_grandpa::StoredPendingChange<N>
     **/
    PalletGrandpaStoredPendingChangeU32: {
      scheduledAt: 'u32',
      delay: 'u32',
      nextAuthorities: 'Vec<(SpCoreEd25519Public,u64)>',
      forced: 'OptionU32'
    },
    /**
     * 394: pallet_treasury::Proposal<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
      proposer: 'AccountId32',
      value: 'u128',
      beneficiary: 'AccountId32',
      bond: 'u128'
    },
    /**
     * 395: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup395: 'Vec<u32>',
    /**
     * 396: sp_arithmetic::per_things::Permill
     **/
    SpArithmeticPerThingsPermill: 'Permill',
    /**
     * 397: frame_support::PalletId
     **/
    FrameSupportPalletId: '[u8;8]',
    /**
     * 399: pallet_contracts::wasm::PrefabWasmModule<T>
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
    /**
     * 402: pallet_contracts::storage::RawAliveContractInfo<<field>: primitive_types::H256, Balance, BlockNumber>
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
     * 403: pallet_contracts::storage::RawTombstoneContractInfo<<field>: primitive_types::H256, <field>: sp_runtime::traits::BlakeTwo256>
     **/
    PalletContractsStorageRawTombstoneContractInfo: 'H256',
    /**
     * 404: sp_runtime::traits::BlakeTwo256
     **/
    SpRuntimeTraitsBlakeTwo256: 'Null',
    /**
     * 405
     **/
    Lookup405: 'Vec<PalletContractsStorageDeletedContract>',
    /**
     * 406: pallet_contracts::storage::DeletedContract
     **/
    PalletContractsStorageDeletedContract: {
      pairCount: 'u32',
      trieId: 'Bytes'
    },
    /**
     * 407: pallet_contracts::schedule::Schedule<T>
     **/
    PalletContractsSchedule: {
      limits: 'PalletContractsScheduleLimits',
      instructionWeights: 'PalletContractsScheduleInstructionWeights',
      hostFnWeights: 'PalletContractsScheduleHostFnWeights'
    },
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
    /**
     * 413
     **/
    Lookup413: 'Vec<SpCoreSr25519Public>',
    /**
     * 415: sp_staking::offence::OffenceDetails<<field>: sp_core::crypto::AccountId32, Offender>
     **/
    SpStakingOffenceOffenceDetails: {
      offender: '(AccountId32,PalletStakingExposure)',
      reporters: 'Vec<AccountId32>'
    },
    /**
     * 416: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    PalletIdentityTypesRegistration: {
      judgements: 'Vec<(u32,PalletIdentityTypesJudgementU128)>',
      deposit: 'u128',
      info: 'PalletIdentityTypesIdentityInfo'
    },
    /**
     * 417: frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup417: 'Vec<(u32,PalletIdentityTypesJudgementU128)>',
    /**
     * 418
     **/
    Lookup418: '(u32,PalletIdentityTypesJudgementU128)',
    /**
     * 419
     **/
    Lookup419: 'Vec<(u32,PalletIdentityTypesJudgementU128)>',
    /**
     * 420
     **/
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
      fields: 'IdentityFields'
    },
    /**
     * 425
     **/
    Lookup425: 'Vec<Option<PalletIdentityTypesRegistrarInfo>>',
    /**
     * 427
     **/
    Lookup427: 'Vec<PalletSocietyBid>',
    /**
     * 428: pallet_society::Bid<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletSocietyBid: {
      who: 'AccountId32',
      kind: 'PalletSocietyBidKind',
      value: 'u128'
    },
    /**
     * 429: pallet_society::BidKind<<field>: sp_core::crypto::AccountId32, Balance>
     **/
    PalletSocietyBidKind: {
      _enum: {
        Deposit: 'u128',
        Vouch: '(AccountId32,u128)',
      }
    },
    /**
     * 430
     **/
    Lookup430: '(u128,PalletSocietyBidKind)',
    /**
     * 431: pallet_society::VouchingStatus
     **/
    PalletSocietyVouchingStatus: {
      _enum: ['Vouching', 'Banned']
    },
    /**
     * 432
     **/
    Lookup432: 'Vec<(u32,u128)>',
    /**
     * 433
     **/
    Lookup433: '(u32,u128)',
    /**
     * 434: pallet_society::Vote
     **/
    PalletSocietyVote: {
      _enum: ['Skeptic', 'Reject', 'Approve']
    },
    /**
     * 436: pallet_recovery::RecoveryConfig<BlockNumber, Balance, <field>: sp_core::crypto::AccountId32>
     **/
    PalletRecoveryRecoveryConfig: {
      delayPeriod: 'u32',
      deposit: 'u128',
      friends: 'Vec<AccountId32>',
      threshold: 'u16'
    },
    /**
     * 437: pallet_recovery::ActiveRecovery<BlockNumber, Balance, <field>: sp_core::crypto::AccountId32>
     **/
    PalletRecoveryActiveRecovery: {
      created: 'u32',
      deposit: 'u128',
      friends: 'Vec<AccountId32>'
    },
    /**
     * 440
     **/
    Lookup440: 'Vec<Option<PalletSchedulerScheduledV2>>',
    /**
     * 441: Option<<field>: pallet_scheduler::ScheduledV2<<field>: node_runtime::Call, BlockNumber, <field>: node_runtime::OriginCaller, <field>: sp_core::crypto::AccountId32>>
     **/
    Lookup441: 'Option<PalletSchedulerScheduledV2>',
    /**
     * 442: pallet_scheduler::ScheduledV2<<field>: node_runtime::Call, BlockNumber, <field>: node_runtime::OriginCaller, <field>: sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduledV2: {
      maybeId: 'Option<Bytes>',
      priority: 'u8',
      call: 'Call',
      maybePeriodic: 'Option<(u32,u32)>',
      origin: 'NodeRuntimeOriginCaller'
    },
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
    /**
     * 447: sp_core::Void
     **/
    SpCoreVoid: 'Null',
    /**
     * 448: pallet_scheduler::Releases
     **/
    PalletSchedulerReleases: {
      _enum: ['V1', 'V2']
    },
    /**
     * 450
     **/
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
    /**
     * 453
     **/
    Lookup453: 'Vec<PalletProxyProxyDefinition>',
    /**
     * 454
     **/
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
    /**
     * 457
     **/
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
    /**
     * 460
     **/
    Lookup460: '(Bytes,AccountId32,u128)',
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
    /**
     * 468: pallet_assets::types::AssetBalance<Balance, Extra>
     **/
    PalletAssetsTypesAssetBalance: {
      balance: 'u64',
      isFrozen: 'bool',
      sufficient: 'bool',
      extra: 'Null'
    },
    /**
     * 469
     **/
    Lookup469: '(u32,AccountId32,AccountId32)',
    /**
     * 470: pallet_assets::types::Approval<Balance, DepositBalance>
     **/
    PalletAssetsTypesApproval: {
      amount: 'u64',
      deposit: 'u128'
    },
    /**
     * 471: pallet_assets::types::AssetMetadata<DepositBalance, <field>: frame_support::storage::bounded_vec::BoundedVec<T, S>>
     **/
    PalletAssetsTypesAssetMetadata: {
      deposit: 'u128',
      name: 'Bytes',
      symbol: 'Bytes',
      decimals: 'u8',
      isFrozen: 'bool'
    },
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
    /**
     * 474
     **/
    Lookup474: '(u32,Vec<(u8,u8)>)',
    /**
     * 475
     **/
    Lookup475: 'Vec<(u8,u8)>',
    /**
     * 477
     **/
    Lookup477: 'Vec<PalletGiltPalletGiltBid>',
    /**
     * 478: pallet_gilt::pallet::GiltBid<Balance, <field>: sp_core::crypto::AccountId32>
     **/
    PalletGiltPalletGiltBid: {
      amount: 'u128',
      who: 'AccountId32'
    },
    /**
     * 479: pallet_gilt::pallet::ActiveGiltsTotal<Balance>
     **/
    PalletGiltPalletActiveGiltsTotalU128: {
      frozen: 'u128',
      proportion: 'Perquintill',
      index: 'u32',
      target: 'Perquintill'
    },
    /**
     * 480: pallet_gilt::pallet::ActiveGilt<Balance, <field>: sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletGiltPalletActiveGilt: {
      proportion: 'Perquintill',
      amount: 'u128',
      who: 'AccountId32',
      expiry: 'u32'
    },
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
    /**
     * 483
     **/
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
    /**
     * 485: pallet_uniques::types::ClassMetadata<DepositBalance, StringLimit>
     **/
    PalletUniquesTypesClassMetadata: {
      deposit: 'u128',
      data: 'Bytes',
      isFrozen: 'bool'
    },
    /**
     * 486: pallet_uniques::types::InstanceMetadata<DepositBalance, StringLimit>
     **/
    PalletUniquesTypesInstanceMetadata: {
      deposit: 'u128',
      data: 'Bytes',
      isFrozen: 'bool'
    },
    /**
     * 487
     **/
    Lookup487: '(u32,OptionU32,Bytes)',
    /**
     * 488
     **/
    Lookup488: '(Bytes,u128)',
    /**
     * 490
     **/
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
    /**
     * 493: sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic
     **/
    SpRuntimeGenericUncheckedExtrinsic: 'Bytes',
    /**
     * 494: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: 'Null',
    /**
     * 495: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: 'Null',
    /**
     * 496: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: 'Null',
    /**
     * 497: frame_system::extensions::check_mortality::CheckMortality<T>
     **/
    FrameSystemExtensionsCheckMortality: 'Era',
    /**
     * 498: sp_runtime::generic::era::Era
     **/
    SpRuntimeGenericEra: 'Era',
    /**
     * 499: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    Lookup499: 'Compact<u32>',
    /**
     * 500: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: 'Null',
    /**
     * 501: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    Lookup501: 'Compact<u128>'
  }
} as Definitions;
