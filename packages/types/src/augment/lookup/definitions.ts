// Auto-generated via `yarn polkadot-types-from-`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    /**
     * sp_core::crypto::AccountId32
     **/
    Lookup0: 'Lookup1',
    SpCoreCryptoAccountId32: 'Lookup0',
    Lookup1: {},
    Lookup2: {},
    /**
     * frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
     **/
    Lookup3: {},
    FrameSystemAccountInfo: 'Lookup3',
    Lookup4: {},
    /**
     * pallet_balances::AccountData<Balance>
     **/
    Lookup5: {},
    PalletBalancesAccountData: 'Lookup5',
    Lookup6: {},
    /**
     * frame_support::weights::PerDispatchClass<T>
     **/
    Lookup7: {},
    Lookup8: {},
    /**
     * primitive_types::H256
     **/
    Lookup9: 'Lookup1',
    PrimitiveTypesH256: 'Lookup9',
    Lookup10: {},
    /**
     * sp_runtime::generic::digest::Digest<primitive_types::H256>
     **/
    Lookup11: {},
    SpRuntimeGenericDigest: 'Lookup11',
    Lookup12: {},
    /**
     * sp_runtime::generic::digest::DigestItem<primitive_types::H256>
     **/
    Lookup13: {},
    SpRuntimeGenericDigestDigestItem: 'Lookup13',
    Lookup14: {},
    /**
     * sp_runtime::generic::digest::ChangesTrieSignal
     **/
    Lookup15: {},
    SpRuntimeGenericDigestChangesTrieSignal: 'Lookup15',
    /**
     * Option<sp_core::changes_trie::ChangesTrieConfiguration>
     **/
    Lookup16: {},
    /**
     * sp_core::changes_trie::ChangesTrieConfiguration
     **/
    Lookup17: {},
    SpCoreChangesTrieChangesTrieConfiguration: 'Lookup17',
    Lookup18: {},
    /**
     * frame_system::EventRecord<node_runtime::Event, primitive_types::H256>
     **/
    Lookup19: {},
    FrameSystemEventRecord: 'Lookup19',
    /**
     * frame_support::weights::DispatchInfo
     **/
    Lookup22: {},
    /**
     * frame_support::weights::DispatchClass
     **/
    Lookup23: {},
    /**
     * frame_support::weights::Pays
     **/
    Lookup24: {},
    /**
     * sp_runtime::DispatchError
     **/
    Lookup25: {},
    SpRuntimeDispatchError: 'Lookup25',
    /**
     * sp_runtime::TokenError
     **/
    Lookup26: {},
    SpRuntimeTokenError: 'Lookup26',
    /**
     * sp_runtime::ArithmeticError
     **/
    Lookup27: {},
    SpRuntimeArithmeticError: 'Lookup27',
    /**
     * frame_support::traits::tokens::misc::BalanceStatus
     **/
    Lookup31: {},
    /**
     * pallet_election_provider_multi_phase::ElectionCompute
     **/
    Lookup33: {},
    PalletElectionProviderMultiPhaseElectionCompute: 'Lookup33',
    Lookup34: {},
    /**
     * Option<pallet_election_provider_multi_phase::ElectionCompute>
     **/
    Lookup35: {},
    Lookup39: {},
    /**
     * pallet_democracy::vote_threshold::VoteThreshold
     **/
    Lookup40: {},
    PalletDemocracyVoteThreshold: 'Lookup40',
    /**
     * pallet_collective::Instance1
     **/
    Lookup42: {},
    PalletCollectiveInstance1: 'Lookup42',
    /**
     * Result<T, sp_runtime::DispatchError>
     **/
    Lookup43: {},
    Result: 'Lookup43',
    Lookup44: {},
    /**
     * pallet_collective::Instance2
     **/
    Lookup46: {},
    PalletCollectiveInstance2: 'Lookup46',
    Lookup48: {},
    Lookup49: {},
    /**
     * pallet_membership::Instance1
     **/
    Lookup51: {},
    PalletMembershipInstance1: 'Lookup51',
    Lookup53: {},
    Lookup54: {},
    /**
     * sp_finality_grandpa::app::Public
     **/
    Lookup55: 'Lookup56',
    SpFinalityGrandpaAppPublic: 'Lookup55',
    /**
     * sp_core::ed25519::Public
     **/
    Lookup56: 'Lookup1',
    SpCoreEd25519Public: 'Lookup56',
    /**
     * pallet_im_online::sr25519::app_sr25519::Public
     **/
    Lookup61: 'Lookup62',
    PalletImOnlineSr25519AppSr25519Public: 'Lookup61',
    /**
     * sp_core::sr25519::Public
     **/
    Lookup62: 'Lookup1',
    SpCoreSr25519Public: 'Lookup62',
    Lookup63: {},
    Lookup64: {},
    /**
     * pallet_staking::Exposure<sp_core::crypto::AccountId32, Balance>
     **/
    Lookup65: {},
    PalletStakingExposure: 'Lookup65',
    Lookup66: {},
    Lookup67: {},
    /**
     * pallet_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
     **/
    Lookup68: {},
    PalletStakingIndividualExposure: 'Lookup68',
    Lookup70: {},
    /**
     * pallet_society::DefaultInstance
     **/
    Lookup73: {},
    PalletSocietyDefaultInstance: 'Lookup73',
    Lookup77: {},
    /**
     * Option<T>
     **/
    Lookup78: {},
    /**
     * node_runtime::ProxyType
     **/
    Lookup80: {},
    NodeRuntimeProxyType: 'Lookup80',
    Lookup81: {},
    /**
     * pallet_multisig::Timepoint<BlockNumber>
     **/
    Lookup83: {},
    PalletMultisigTimepoint: 'Lookup83',
    Lookup88: {},
    /**
     * frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup91: 'Lookup10',
    Lookup92: {},
    /**
     * Option<T>
     **/
    Lookup93: {},
    /**
     * frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup94: 'Lookup10',
    /**
     * frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup95: 'Lookup10',
    /**
     * frame_system::Phase
     **/
    Lookup97: {},
    FrameSystemPhase: 'Lookup97',
    Lookup98: {},
    Lookup99: {},
    /**
     * frame_system::LastRuntimeUpgradeInfo
     **/
    Lookup100: {},
    FrameSystemLastRuntimeUpgradeInfo: 'Lookup100',
    Lookup101: {},
    Lookup102: {},
    /**
     * sp_arithmetic::per_things::Perbill
     **/
    Lookup104: 'Lookup4',
    SpArithmeticPerThingsPerbill: 'Lookup104',
    Lookup105: {},
    Lookup106: {},
    Lookup107: {},
    /**
     * frame_system::limits::BlockWeights
     **/
    Lookup108: {},
    FrameSystemLimitsBlockWeights: 'Lookup108',
    /**
     * frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    Lookup109: {},
    /**
     * frame_system::limits::WeightsPerClass
     **/
    Lookup110: {},
    FrameSystemLimitsWeightsPerClass: 'Lookup110',
    /**
     * Option<T>
     **/
    Lookup111: {},
    /**
     * frame_system::limits::BlockLength
     **/
    Lookup112: {},
    FrameSystemLimitsBlockLength: 'Lookup112',
    /**
     * frame_support::weights::PerDispatchClass<T>
     **/
    Lookup113: {},
    /**
     * frame_support::weights::RuntimeDbWeight
     **/
    Lookup114: {},
    /**
     * sp_version::RuntimeVersion
     **/
    Lookup115: {},
    SpVersionRuntimeVersion: 'Lookup115',
    /**
     * Cow<T>
     **/
    Lookup116: 'Lookup117',
    Cow: 'Lookup116',
    Lookup117: {},
    Lookup118: {},
    Lookup119: {},
    /**
     * frame_support::Never
     **/
    Lookup121: {},
    Lookup123: {},
    /**
     * sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header, sp_consensus_babe::app::Public>
     **/
    Lookup126: {},
    SpConsensusSlotsEquivocationProof: 'Lookup126',
    /**
     * sp_runtime::generic::header::Header
     **/
    Lookup127: {},
    SpRuntimeGenericHeader: 'Lookup127',
    /**
     * sp_consensus_babe::app::Public
     **/
    Lookup128: 'Lookup62',
    SpConsensusBabeAppPublic: 'Lookup128',
    /**
     * sp_consensus_slots::Slot
     **/
    Lookup129: 'Lookup8',
    SpConsensusSlotsSlot: 'Lookup129',
    /**
     * sp_session::MembershipProof
     **/
    Lookup130: {},
    SpSessionMembershipProof: 'Lookup130',
    /**
     * sp_consensus_babe::digests::NextConfigDescriptor
     **/
    Lookup131: {},
    SpConsensusBabeDigestsNextConfigDescriptor: 'Lookup131',
    Lookup132: {},
    /**
     * sp_consensus_babe::AllowedSlots
     **/
    Lookup133: {},
    SpConsensusBabeAllowedSlots: 'Lookup133',
    Lookup135: {},
    Lookup137: {},
    /**
     * sp_runtime::multiaddress::MultiAddress<sp_core::crypto::AccountId32, AccountIndex>
     **/
    Lookup140: {},
    SpRuntimeMultiaddressMultiAddress: 'Lookup140',
    Lookup141: {},
    /**
     * pallet_election_provider_multi_phase::RawSolution<node_runtime::NposCompactSolution16>
     **/
    Lookup143: {},
    PalletElectionProviderMultiPhaseRawSolution: 'Lookup143',
    /**
     * node_runtime::NposCompactSolution16
     **/
    Lookup144: {},
    NodeRuntimeNposCompactSolution16: 'Lookup144',
    Lookup145: {},
    Lookup146: {},
    Lookup147: {},
    Lookup148: {},
    Lookup149: {},
    Lookup150: {},
    Lookup151: {},
    /**
     * sp_arithmetic::per_things::PerU16
     **/
    Lookup152: 'Lookup81',
    SpArithmeticPerThingsPerU16: 'Lookup152',
    Lookup153: {},
    Lookup154: {},
    Lookup155: {},
    Lookup156: {},
    Lookup157: {},
    Lookup158: {},
    Lookup159: {},
    Lookup160: {},
    Lookup161: {},
    Lookup162: {},
    Lookup163: {},
    Lookup164: {},
    Lookup165: {},
    Lookup166: {},
    Lookup167: {},
    Lookup168: {},
    Lookup169: {},
    Lookup170: {},
    Lookup171: {},
    Lookup172: {},
    Lookup173: {},
    Lookup174: {},
    Lookup175: {},
    Lookup176: {},
    Lookup177: {},
    Lookup178: {},
    Lookup179: {},
    Lookup180: {},
    Lookup181: {},
    Lookup182: {},
    Lookup183: {},
    Lookup184: {},
    Lookup185: {},
    Lookup186: {},
    Lookup187: {},
    Lookup188: {},
    Lookup189: {},
    Lookup190: {},
    Lookup191: {},
    Lookup192: {},
    Lookup193: {},
    Lookup194: {},
    Lookup195: {},
    /**
     * pallet_election_provider_multi_phase::SolutionOrSnapshotSize
     **/
    Lookup196: {},
    PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: 'Lookup196',
    /**
     * Option<T>
     **/
    Lookup197: {},
    Lookup198: {},
    Lookup199: {},
    /**
     * sp_npos_elections::Support<sp_core::crypto::AccountId32>
     **/
    Lookup200: {},
    SpNposElectionsSupport: 'Lookup200',
    /**
     * pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
     **/
    Lookup202: {},
    PalletStakingRewardDestination: 'Lookup202',
    /**
     * pallet_staking::ValidatorPrefs
     **/
    Lookup203: {},
    PalletStakingValidatorPrefs: 'Lookup203',
    Lookup204: {},
    Lookup205: {},
    /**
     * sp_arithmetic::per_things::Percent
     **/
    Lookup206: 'Lookup2',
    SpArithmeticPerThingsPercent: 'Lookup206',
    /**
     * Option<sp_arithmetic::per_things::Percent>
     **/
    Lookup207: {},
    /**
     * node_runtime::SessionKeys
     **/
    Lookup209: {},
    NodeRuntimeSessionKeys: 'Lookup209',
    /**
     * sp_authority_discovery::app::Public
     **/
    Lookup210: 'Lookup62',
    SpAuthorityDiscoveryAppPublic: 'Lookup210',
    /**
     * pallet_democracy::vote::AccountVote<Balance>
     **/
    Lookup212: {},
    PalletDemocracyVoteAccountVote: 'Lookup212',
    /**
     * pallet_democracy::vote::Vote
     **/
    Lookup213: 'Lookup2',
    PalletDemocracyVote: 'Lookup213',
    /**
     * pallet_democracy::conviction::Conviction
     **/
    Lookup214: {},
    PalletDemocracyConviction: 'Lookup214',
    /**
     * Option<sp_core::crypto::AccountId32>
     **/
    Lookup216: {},
    /**
     * pallet_elections_phragmen::Renouncing
     **/
    Lookup219: {},
    PalletElectionsPhragmenRenouncing: 'Lookup219',
    /**
     * sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
     **/
    Lookup222: {},
    SpFinalityGrandpaEquivocationProof: 'Lookup222',
    /**
     * sp_finality_grandpa::Equivocation<primitive_types::H256, N>
     **/
    Lookup223: {},
    SpFinalityGrandpaEquivocation: 'Lookup223',
    /**
     * finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
     **/
    Lookup224: {},
    /**
     * finality_grandpa::Prevote<primitive_types::H256, N>
     **/
    Lookup225: {},
    FinalityGrandpaPrevote: 'Lookup225',
    /**
     * sp_finality_grandpa::app::Signature
     **/
    Lookup226: 'Lookup227',
    SpFinalityGrandpaAppSignature: 'Lookup226',
    /**
     * sp_core::ed25519::Signature
     **/
    Lookup227: 'Lookup228',
    SpCoreEd25519Signature: 'Lookup227',
    Lookup228: {},
    Lookup229: {},
    /**
     * finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
     **/
    Lookup230: {},
    /**
     * finality_grandpa::Precommit<primitive_types::H256, N>
     **/
    Lookup231: {},
    FinalityGrandpaPrecommit: 'Lookup231',
    Lookup232: {},
    /**
     * pallet_im_online::Heartbeat<BlockNumber>
     **/
    Lookup237: {},
    PalletImOnlineHeartbeat: 'Lookup237',
    /**
     * sp_core::offchain::OpaqueNetworkState
     **/
    Lookup238: {},
    SpCoreOffchainOpaqueNetworkState: 'Lookup238',
    /**
     * sp_core::OpaquePeerId
     **/
    Lookup239: 'Lookup10',
    SpCoreOpaquePeerId: 'Lookup239',
    Lookup240: {},
    /**
     * sp_core::offchain::OpaqueMultiaddr
     **/
    Lookup241: 'Lookup10',
    SpCoreOffchainOpaqueMultiaddr: 'Lookup241',
    /**
     * pallet_im_online::sr25519::app_sr25519::Signature
     **/
    Lookup242: 'Lookup243',
    PalletImOnlineSr25519AppSr25519Signature: 'Lookup242',
    /**
     * sp_core::sr25519::Signature
     **/
    Lookup243: 'Lookup228',
    SpCoreSr25519Signature: 'Lookup243',
    /**
     * pallet_identity::types::IdentityInfo<FieldLimit>
     **/
    Lookup245: {},
    PalletIdentityTypesIdentityInfo: 'Lookup245',
    /**
     * frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup246: 'Lookup277',
    Lookup247: {},
    /**
     * pallet_identity::types::Data
     **/
    Lookup248: {},
    PalletIdentityTypesData: 'Lookup248',
    Lookup249: {},
    Lookup250: {},
    Lookup251: {},
    Lookup252: {},
    Lookup253: {},
    Lookup254: {},
    Lookup255: {},
    Lookup256: {},
    Lookup257: {},
    Lookup258: {},
    Lookup259: {},
    Lookup260: {},
    Lookup261: {},
    Lookup262: {},
    Lookup263: {},
    Lookup264: {},
    Lookup265: {},
    Lookup266: {},
    Lookup267: {},
    Lookup268: {},
    Lookup269: {},
    Lookup270: {},
    Lookup271: {},
    Lookup272: {},
    Lookup273: {},
    Lookup274: {},
    Lookup275: {},
    Lookup276: {},
    Lookup277: {},
    /**
     * Option<T>
     **/
    Lookup278: {},
    Lookup279: {},
    Lookup280: {},
    /**
     * pallet_identity::types::IdentityFields
     **/
    Lookup281: 'Lookup282',
    PalletIdentityTypesIdentityFields: 'Lookup281',
    /**
     * pallet_identity::types::IdentityField
     **/
    Lookup282: {},
    PalletIdentityTypesIdentityField: 'Lookup282',
    /**
     * pallet_identity::types::Judgement<Balance>
     **/
    Lookup283: {},
    PalletIdentityTypesJudgement: 'Lookup283',
    /**
     * pallet_society::Judgement
     **/
    Lookup285: {},
    PalletSocietyJudgement: 'Lookup285',
    /**
     * pallet_vesting::VestingInfo<Balance, BlockNumber>
     **/
    Lookup288: {},
    PalletVestingVestingInfo: 'Lookup288',
    /**
     * Option<T>
     **/
    Lookup290: {},
    /**
     * Option<node_runtime::ProxyType>
     **/
    Lookup292: {},
    /**
     * Option<pallet_multisig::Timepoint<BlockNumber>>
     **/
    Lookup294: {},
    /**
     * pallet_assets::types::DestroyWitness
     **/
    Lookup298: {},
    PalletAssetsTypesDestroyWitness: 'Lookup298',
    Lookup301: {},
    /**
     * sp_arithmetic::per_things::Perquintill
     **/
    Lookup302: 'Lookup8',
    SpArithmeticPerThingsPerquintill: 'Lookup302',
    /**
     * pallet_uniques::types::DestroyWitness
     **/
    Lookup304: {},
    PalletUniquesTypesDestroyWitness: 'Lookup304',
    /**
     * Option<sp_runtime::multiaddress::MultiAddress<sp_core::crypto::AccountId32, AccountIndex>>
     **/
    Lookup305: {},
    /**
     * sp_transaction_storage_proof::TransactionStorageProof
     **/
    Lookup307: {},
    SpTransactionStorageProofTransactionStorageProof: 'Lookup307',
    Lookup308: {},
    Lookup309: {},
    Lookup310: {},
    /**
     * Option<T>
     **/
    Lookup311: {},
    /**
     * sp_consensus_babe::BabeEpochConfiguration
     **/
    Lookup312: {},
    SpConsensusBabeBabeEpochConfiguration: 'Lookup312',
    Lookup314: {},
    /**
     * pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, sp_core::crypto::AccountId32>
     **/
    Lookup315: {},
    PalletAuthorshipUncleEntryItem: 'Lookup315',
    Lookup317: {},
    /**
     * frame_support::storage::weak_bounded_vec::WeakBoundedVec<pallet_balances::BalanceLock<Balance>, S>
     **/
    Lookup319: 'Lookup322',
    /**
     * pallet_balances::BalanceLock<Balance>
     **/
    Lookup320: {},
    PalletBalancesBalanceLock: 'Lookup320',
    /**
     * pallet_balances::Reasons
     **/
    Lookup321: {},
    PalletBalancesReasons: 'Lookup321',
    Lookup322: {},
    /**
     * frame_support::storage::bounded_vec::BoundedVec<pallet_balances::ReserveData<ReserveIdentifier, Balance>, S>
     **/
    Lookup323: 'Lookup325',
    /**
     * pallet_balances::ReserveData<ReserveIdentifier, Balance>
     **/
    Lookup324: {},
    PalletBalancesReserveData: 'Lookup324',
    Lookup325: {},
    /**
     * pallet_balances::Releases
     **/
    Lookup326: {},
    PalletBalancesReleases: 'Lookup326',
    /**
     * sp_arithmetic::fixed_point::FixedU128
     **/
    Lookup328: 'Lookup6',
    SpArithmeticFixedPointFixedU128: 'Lookup328',
    /**
     * pallet_transaction_payment::Releases
     **/
    Lookup329: {},
    PalletTransactionPaymentReleases: 'Lookup329',
    Lookup330: {},
    /**
     * frame_support::weights::WeightToFeeCoefficient<Balance>
     **/
    Lookup331: {},
    /**
     * pallet_election_provider_multi_phase::Phase<Bn>
     **/
    Lookup332: {},
    PalletElectionProviderMultiPhasePhase: 'Lookup332',
    Lookup333: {},
    /**
     * pallet_election_provider_multi_phase::ReadySolution<sp_core::crypto::AccountId32>
     **/
    Lookup334: {},
    PalletElectionProviderMultiPhaseReadySolution: 'Lookup334',
    /**
     * pallet_election_provider_multi_phase::RoundSnapshot<sp_core::crypto::AccountId32>
     **/
    Lookup335: {},
    PalletElectionProviderMultiPhaseRoundSnapshot: 'Lookup335',
    Lookup336: {},
    Lookup337: {},
    /**
     * frame_support::storage::bounded_btree_map::BoundedBTreeMap<K, V, S>
     **/
    Lookup338: 'Lookup339',
    /**
     * BTreeMap<K, V>
     **/
    Lookup339: 'Lookup340',
    Lookup340: {},
    Lookup341: {},
    /**
     * pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, node_runtime::NposCompactSolution16>
     **/
    Lookup342: {},
    PalletElectionProviderMultiPhaseSignedSignedSubmission: 'Lookup342',
    /**
     * pallet_staking::StakingLedger<sp_core::crypto::AccountId32, Balance>
     **/
    Lookup344: {},
    PalletStakingStakingLedger: 'Lookup344',
    Lookup345: {},
    /**
     * pallet_staking::UnlockChunk<Balance>
     **/
    Lookup346: {},
    PalletStakingUnlockChunk: 'Lookup346',
    /**
     * pallet_staking::Nominations<sp_core::crypto::AccountId32>
     **/
    Lookup347: {},
    PalletStakingNominations: 'Lookup347',
    /**
     * pallet_staking::ActiveEraInfo
     **/
    Lookup348: {},
    PalletStakingActiveEraInfo: 'Lookup348',
    /**
     * pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
     **/
    Lookup349: {},
    PalletStakingEraRewardPoints: 'Lookup349',
    /**
     * BTreeMap<sp_core::crypto::AccountId32, V>
     **/
    Lookup350: 'Lookup351',
    Lookup351: {},
    Lookup352: {},
    /**
     * pallet_staking::Forcing
     **/
    Lookup353: {},
    PalletStakingForcing: 'Lookup353',
    Lookup354: {},
    /**
     * pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
     **/
    Lookup355: {},
    PalletStakingUnappliedSlash: 'Lookup355',
    Lookup356: {},
    /**
     * pallet_staking::slashing::SlashingSpans
     **/
    Lookup357: {},
    PalletStakingSlashingSlashingSpans: 'Lookup357',
    /**
     * pallet_staking::slashing::SpanRecord<Balance>
     **/
    Lookup358: {},
    PalletStakingSlashingSpanRecord: 'Lookup358',
    /**
     * pallet_staking::Releases
     **/
    Lookup359: {},
    PalletStakingReleases: 'Lookup359',
    Lookup361: {},
    Lookup362: {},
    Lookup363: {},
    /**
     * sp_core::crypto::KeyTypeId
     **/
    Lookup364: 'Lookup14',
    SpCoreCryptoKeyTypeId: 'Lookup364',
    Lookup366: {},
    Lookup367: {},
    Lookup368: {},
    /**
     * pallet_democracy::PreimageStatus<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    Lookup369: {},
    PalletDemocracyPreimageStatus: 'Lookup369',
    /**
     * pallet_democracy::types::ReferendumInfo<BlockNumber, primitive_types::H256, Balance>
     **/
    Lookup370: {},
    PalletDemocracyTypesReferendumInfo: 'Lookup370',
    /**
     * pallet_democracy::types::ReferendumStatus<BlockNumber, primitive_types::H256, Balance>
     **/
    Lookup371: {},
    PalletDemocracyTypesReferendumStatus: 'Lookup371',
    /**
     * pallet_democracy::types::Tally<Balance>
     **/
    Lookup372: {},
    PalletDemocracyTypesTally: 'Lookup372',
    /**
     * pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber>
     **/
    Lookup373: {},
    PalletDemocracyVoteVoting: 'Lookup373',
    Lookup374: {},
    Lookup375: {},
    /**
     * pallet_democracy::types::Delegations<Balance>
     **/
    Lookup376: {},
    PalletDemocracyTypesDelegations: 'Lookup376',
    /**
     * pallet_democracy::vote::PriorLock<BlockNumber, Balance>
     **/
    Lookup377: {},
    PalletDemocracyVotePriorLock: 'Lookup377',
    Lookup378: {},
    Lookup379: {},
    /**
     * pallet_democracy::Releases
     **/
    Lookup380: {},
    PalletDemocracyReleases: 'Lookup380',
    /**
     * frame_support::storage::bounded_vec::BoundedVec<primitive_types::H256, S>
     **/
    Lookup382: 'Lookup98',
    /**
     * pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
     **/
    Lookup383: {},
    PalletCollectiveVotes: 'Lookup383',
    /**
     * frame_support::storage::bounded_vec::BoundedVec<primitive_types::H256, S>
     **/
    Lookup385: 'Lookup98',
    Lookup387: {},
    /**
     * pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
     **/
    Lookup388: {},
    PalletElectionsPhragmenSeatHolder: 'Lookup388',
    /**
     * pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
     **/
    Lookup389: {},
    PalletElectionsPhragmenVoter: 'Lookup389',
    /**
     * pallet_grandpa::StoredState<N>
     **/
    Lookup392: {},
    PalletGrandpaStoredState: 'Lookup392',
    /**
     * pallet_grandpa::StoredPendingChange<N>
     **/
    Lookup393: {},
    PalletGrandpaStoredPendingChange: 'Lookup393',
    /**
     * pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
     **/
    Lookup395: {},
    PalletTreasuryProposal: 'Lookup395',
    /**
     * frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup396: 'Lookup92',
    /**
     * sp_arithmetic::per_things::Permill
     **/
    Lookup397: 'Lookup4',
    SpArithmeticPerThingsPermill: 'Lookup397',
    /**
     * frame_support::PalletId
     **/
    Lookup398: 'Lookup119',
    /**
     * pallet_contracts::wasm::PrefabWasmModule<T>
     **/
    Lookup400: {},
    PalletContractsWasmPrefabWasmModule: 'Lookup400',
    /**
     * Option<T>
     **/
    Lookup401: {},
    /**
     * pallet_contracts::storage::ContractInfo<T>
     **/
    Lookup402: {},
    PalletContractsStorageContractInfo: 'Lookup402',
    /**
     * pallet_contracts::storage::RawAliveContractInfo<primitive_types::H256, Balance, BlockNumber>
     **/
    Lookup403: {},
    PalletContractsStorageRawAliveContractInfo: 'Lookup403',
    /**
     * pallet_contracts::storage::RawTombstoneContractInfo<primitive_types::H256, sp_runtime::traits::BlakeTwo256>
     **/
    Lookup404: 'Lookup9',
    PalletContractsStorageRawTombstoneContractInfo: 'Lookup404',
    /**
     * sp_runtime::traits::BlakeTwo256
     **/
    Lookup405: {},
    SpRuntimeTraitsBlakeTwo256: 'Lookup405',
    Lookup406: {},
    /**
     * pallet_contracts::storage::DeletedContract
     **/
    Lookup407: {},
    PalletContractsStorageDeletedContract: 'Lookup407',
    /**
     * pallet_contracts::schedule::Schedule<T>
     **/
    Lookup408: {},
    PalletContractsSchedule: 'Lookup408',
    /**
     * pallet_contracts::schedule::Limits
     **/
    Lookup409: {},
    PalletContractsScheduleLimits: 'Lookup409',
    /**
     * pallet_contracts::schedule::InstructionWeights<T>
     **/
    Lookup410: {},
    PalletContractsScheduleInstructionWeights: 'Lookup410',
    /**
     * pallet_contracts::schedule::HostFnWeights<T>
     **/
    Lookup411: {},
    PalletContractsScheduleHostFnWeights: 'Lookup411',
    Lookup414: {},
    /**
     * sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
     **/
    Lookup416: {},
    SpStakingOffenceOffenceDetails: 'Lookup416',
    /**
     * pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    Lookup417: {},
    PalletIdentityTypesRegistration: 'Lookup417',
    /**
     * frame_support::storage::bounded_vec::BoundedVec<T, S>
     **/
    Lookup418: 'Lookup420',
    Lookup419: {},
    Lookup420: {},
    Lookup421: {},
    /**
     * frame_support::storage::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>
     **/
    Lookup422: 'Lookup39',
    /**
     * frame_support::storage::bounded_vec::BoundedVec<Option<pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>>, S>
     **/
    Lookup423: 'Lookup426',
    /**
     * Option<pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>>
     **/
    Lookup424: {},
    /**
     * pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
     **/
    Lookup425: {},
    PalletIdentityTypesRegistrarInfo: 'Lookup425',
    Lookup426: {},
    Lookup428: {},
    /**
     * pallet_society::Bid<sp_core::crypto::AccountId32, Balance>
     **/
    Lookup429: {},
    PalletSocietyBid: 'Lookup429',
    /**
     * pallet_society::BidKind<sp_core::crypto::AccountId32, Balance>
     **/
    Lookup430: {},
    PalletSocietyBidKind: 'Lookup430',
    Lookup431: {},
    /**
     * pallet_society::VouchingStatus
     **/
    Lookup432: {},
    PalletSocietyVouchingStatus: 'Lookup432',
    Lookup433: {},
    Lookup434: {},
    /**
     * pallet_society::Vote
     **/
    Lookup435: {},
    PalletSocietyVote: 'Lookup435',
    /**
     * pallet_recovery::RecoveryConfig<BlockNumber, Balance, sp_core::crypto::AccountId32>
     **/
    Lookup437: {},
    PalletRecoveryRecoveryConfig: 'Lookup437',
    /**
     * pallet_recovery::ActiveRecovery<BlockNumber, Balance, sp_core::crypto::AccountId32>
     **/
    Lookup438: {},
    PalletRecoveryActiveRecovery: 'Lookup438',
    Lookup441: {},
    /**
     * Option<pallet_scheduler::ScheduledV2<node_runtime::Call, BlockNumber, node_runtime::OriginCaller, sp_core::crypto::AccountId32>>
     **/
    Lookup442: {},
    /**
     * pallet_scheduler::ScheduledV2<node_runtime::Call, BlockNumber, node_runtime::OriginCaller, sp_core::crypto::AccountId32>
     **/
    Lookup443: {},
    PalletSchedulerScheduledV2: 'Lookup443',
    /**
     * node_runtime::OriginCaller
     **/
    Lookup444: {},
    NodeRuntimeOriginCaller: 'Lookup444',
    /**
     * frame_system::RawOrigin<sp_core::crypto::AccountId32>
     **/
    Lookup445: {},
    FrameSystemRawOrigin: 'Lookup445',
    /**
     * pallet_collective::RawOrigin<sp_core::crypto::AccountId32, pallet_collective::Instance1>
     **/
    Lookup446: {},
    /**
     * pallet_collective::RawOrigin<sp_core::crypto::AccountId32, pallet_collective::Instance2>
     **/
    Lookup447: {},
    /**
     * sp_core::Void
     **/
    Lookup448: {},
    SpCoreVoid: 'Lookup448',
    /**
     * pallet_scheduler::Releases
     **/
    Lookup449: {},
    PalletSchedulerReleases: 'Lookup449',
    Lookup451: {},
    /**
     * frame_support::storage::bounded_vec::BoundedVec<pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, node_runtime::ProxyType, BlockNumber>, S>
     **/
    Lookup452: 'Lookup454',
    /**
     * pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, node_runtime::ProxyType, BlockNumber>
     **/
    Lookup453: {},
    PalletProxyProxyDefinition: 'Lookup453',
    Lookup454: {},
    Lookup455: {},
    /**
     * frame_support::storage::bounded_vec::BoundedVec<pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>, S>
     **/
    Lookup456: 'Lookup458',
    /**
     * pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
     **/
    Lookup457: {},
    PalletProxyAnnouncement: 'Lookup457',
    Lookup458: {},
    /**
     * pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32>
     **/
    Lookup460: {},
    PalletMultisigMultisig: 'Lookup460',
    Lookup461: {},
    /**
     * pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    Lookup463: {},
    PalletBountiesBounty: 'Lookup463',
    /**
     * pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
     **/
    Lookup464: {},
    PalletBountiesBountyStatus: 'Lookup464',
    /**
     * pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
     **/
    Lookup466: {},
    PalletTipsOpenTip: 'Lookup466',
    /**
     * pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance>
     **/
    Lookup468: {},
    PalletAssetsTypesAssetDetails: 'Lookup468',
    /**
     * pallet_assets::types::AssetBalance<Balance, Extra>
     **/
    Lookup469: {},
    PalletAssetsTypesAssetBalance: 'Lookup469',
    Lookup470: {},
    /**
     * pallet_assets::types::Approval<Balance, DepositBalance>
     **/
    Lookup471: {},
    PalletAssetsTypesApproval: 'Lookup471',
    /**
     * pallet_assets::types::AssetMetadata<DepositBalance, frame_support::storage::bounded_vec::BoundedVec<T, S>>
     **/
    Lookup472: {},
    PalletAssetsTypesAssetMetadata: 'Lookup472',
    /**
     * pallet_lottery::LotteryConfig<BlockNumber, Balance>
     **/
    Lookup474: {},
    PalletLotteryLotteryConfig: 'Lookup474',
    Lookup475: {},
    Lookup476: {},
    Lookup478: {},
    /**
     * pallet_gilt::pallet::GiltBid<Balance, sp_core::crypto::AccountId32>
     **/
    Lookup479: {},
    PalletGiltPalletGiltBid: 'Lookup479',
    /**
     * pallet_gilt::pallet::ActiveGiltsTotal<Balance>
     **/
    Lookup480: {},
    PalletGiltPalletActiveGiltsTotal: 'Lookup480',
    /**
     * pallet_gilt::pallet::ActiveGilt<Balance, sp_core::crypto::AccountId32, BlockNumber>
     **/
    Lookup481: {},
    PalletGiltPalletActiveGilt: 'Lookup481',
    /**
     * pallet_uniques::types::ClassDetails<sp_core::crypto::AccountId32, DepositBalance>
     **/
    Lookup483: {},
    PalletUniquesTypesClassDetails: 'Lookup483',
    Lookup484: {},
    /**
     * pallet_uniques::types::InstanceDetails<sp_core::crypto::AccountId32, DepositBalance>
     **/
    Lookup485: {},
    PalletUniquesTypesInstanceDetails: 'Lookup485',
    /**
     * pallet_uniques::types::ClassMetadata<DepositBalance, StringLimit>
     **/
    Lookup486: {},
    PalletUniquesTypesClassMetadata: 'Lookup486',
    /**
     * pallet_uniques::types::InstanceMetadata<DepositBalance, StringLimit>
     **/
    Lookup487: {},
    PalletUniquesTypesInstanceMetadata: 'Lookup487',
    Lookup488: {},
    Lookup489: {},
    Lookup491: {},
    /**
     * pallet_transaction_storage::TransactionInfo
     **/
    Lookup492: {},
    PalletTransactionStorageTransactionInfo: 'Lookup492',
    /**
     * sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic
     **/
    Lookup494: 'Lookup10',
    SpRuntimeGenericUncheckedExtrinsic: 'Lookup494',
    /**
     * frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    Lookup495: {},
    FrameSystemExtensionsCheckSpecVersion: 'Lookup495',
    /**
     * frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    Lookup496: {},
    FrameSystemExtensionsCheckTxVersion: 'Lookup496',
    /**
     * frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    Lookup497: {},
    FrameSystemExtensionsCheckGenesis: 'Lookup497',
    /**
     * frame_system::extensions::check_mortality::CheckMortality<T>
     **/
    Lookup498: 'Lookup499',
    FrameSystemExtensionsCheckMortality: 'Lookup498',
    /**
     * sp_runtime::generic::era::Era
     **/
    Lookup499: {},
    SpRuntimeGenericEra: 'Lookup499',
    /**
     * frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    Lookup500: 'Lookup101',
    FrameSystemExtensionsCheckNonce: 'Lookup500',
    /**
     * frame_system::extensions::check_weight::CheckWeight<T>
     **/
    Lookup501: {},
    FrameSystemExtensionsCheckWeight: 'Lookup501',
    /**
     * pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    Lookup502: 'Lookup66',
    PalletTransactionPaymentChargeTransactionPayment: 'Lookup502'
  }
} as Definitions;
