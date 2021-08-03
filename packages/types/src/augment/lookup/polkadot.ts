// Auto-generated via `yarn polkadot-types-from-`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types';

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128'
  },
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
   * Lookup17: sp_core::changes_trie::ChangesTrieConfiguration
   **/
  SpCoreChangesTrieChangesTrieConfiguration: {
    digestInterval: 'u32',
    digestLevels: 'u32'
  },
  /**
   * Lookup19: frame_system::EventRecord<kusama_runtime::Event, primitive_types::H256>
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
   * Lookup30: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup38: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup39: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup41: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup42: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup45: pallet_staking::Exposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingExposure: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    others: 'Vec<PalletStakingIndividualExposure>'
  },
  /**
   * Lookup48: pallet_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingIndividualExposure: {
    who: 'AccountId32',
    value: 'Compact<u128>'
  },
  /**
   * Lookup51: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup55: pallet_collective::Instance1
   **/
  PalletCollectiveInstance1: 'Null',
  /**
   * Lookup58: pallet_collective::Instance2
   **/
  PalletCollectiveInstance2: 'Null',
  /**
   * Lookup63: pallet_membership::Instance1
   **/
  PalletMembershipInstance1: 'Null',
  /**
   * Lookup66: polkadot_runtime_common::claims::EthereumAddress
   **/
  PolkadotRuntimeCommonClaimsEthereumAddress: '[u8;20]',
  /**
   * Lookup71: pallet_society::DefaultInstance
   **/
  PalletSocietyDefaultInstance: 'Null',
  /**
   * Lookup78: kusama_runtime::ProxyType
   **/
  KusamaRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'IdentityJudgement', 'CancelProxy']
  },
  /**
   * Lookup81: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup85: pallet_election_provider_multi_phase::ElectionCompute
   **/
  PalletElectionProviderMultiPhaseElectionCompute: {
    _enum: ['OnChain', 'Signed', 'Unsigned', 'Emergency']
  },
  /**
   * Lookup89: polkadot_primitives::v1::CandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV1CandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV1CandidateDescriptor',
    commitmentsHash: 'H256'
  },
  /**
   * Lookup90: polkadot_primitives::v1::CandidateDescriptor<primitive_types::H256>
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
   * Lookup92: polkadot_primitives::v0::collator_app::Public
   **/
  PolkadotPrimitivesV0CollatorAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup93: polkadot_primitives::v0::collator_app::Signature
   **/
  PolkadotPrimitivesV0CollatorAppSignature: 'SpCoreSr25519Signature',
  /**
   * Lookup94: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup102: xcm::v0::traits::Outcome
   **/
  XcmV0TraitsOutcome: {
    _enum: {
      Complete: 'u64',
      Incomplete: '(u64,XcmV0TraitsError)',
      Error: 'XcmV0TraitsError',
    }
  },
  /**
   * Lookup103: xcm::v0::traits::Error
   **/
  XcmV0TraitsError: {
    _enum: {
      Undefined: 'Null',
      Overflow: 'Null',
      Unimplemented: 'Null',
      UnhandledXcmVersion: 'Null',
      UnhandledXcmMessage: 'Null',
      UnhandledEffect: 'Null',
      EscalationOfPrivilege: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      DestinationBufferOverflow: 'Null',
      SendFailed: 'Null',
      CannotReachDestination: '(XcmV0MultiLocation,XcmV0Xcm)',
      MultiLocationFull: 'Null',
      FailedToDecode: 'Null',
      BadOrigin: 'Null',
      ExceedsMaxMessageSize: 'Null',
      FailedToTransactAsset: 'Null',
      WeightLimitReached: 'u64',
      Wildcard: 'Null',
      TooMuchWeightRequired: 'Null',
      NotHoldingFees: 'Null',
      WeightNotComputable: 'Null',
      Barrier: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      TooExpensive: 'Null',
      AssetNotFound: 'Null',
    }
  },
  /**
   * Lookup104: xcm::v0::multi_location::MultiLocation
   **/
  XcmV0MultiLocation: {
    _enum: {
      Null: 'Null',
      X1: 'XcmV0Junction',
      X2: '(XcmV0Junction,XcmV0Junction)',
      X3: '(XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X4: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X5: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X6: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X7: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X8: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
    }
  },
  /**
   * Lookup105: xcm::v0::junction::Junction
   **/
  XcmV0Junction: {
    _enum: {
      Parent: 'Null',
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV0JunctionNetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV0JunctionNetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV0JunctionNetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: {
        id: 'Compact<u128>',
      },
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV0JunctionBodyId',
        part: 'XcmV0JunctionBodyPart',
      },
    }
  },
  /**
   * Lookup107: xcm::v0::junction::NetworkId
   **/
  XcmV0JunctionNetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null',
    }
  },
  /**
   * Lookup109: xcm::v0::junction::BodyId
   **/
  XcmV0JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: {
        id: 'Compact<u32>',
      },
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
    }
  },
  /**
   * Lookup110: xcm::v0::junction::BodyPart
   **/
  XcmV0JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
    }
  },
  /**
   * Lookup111: xcm::v0::Xcm<Call>
   **/
  XcmV0Xcm: {
    _enum: {
      WithdrawAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      ReserveAssetDeposit: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      TeleportAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV0Response',
      },
      TransferAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      Transact: {
        _alias: {
          call_: 'call',
        },
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'u64',
        call_: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      RelayedFrom: {
        who: 'XcmV0MultiLocation',
        message: 'XcmV0Xcm',
      },
    }
  },
  /**
   * Lookup113: xcm::v0::multi_asset::MultiAsset
   **/
  XcmV0MultiAsset: {
    _enum: {
      None: 'Null',
      All: 'Null',
      AllFungible: 'Null',
      AllNonFungible: 'Null',
      AllAbstractFungible: {
        id: 'Bytes',
      },
      AllAbstractNonFungible: {
        class: 'Bytes',
      },
      AllConcreteFungible: {
        id: 'XcmV0MultiLocation',
      },
      AllConcreteNonFungible: {
        class: 'XcmV0MultiLocation',
      },
      AbstractFungible: {
        id: 'Bytes',
        amount: 'Compact<u128>',
      },
      AbstractNonFungible: {
        class: 'Bytes',
        instance: 'XcmV0MultiAssetAssetInstance',
      },
      ConcreteFungible: {
        id: 'XcmV0MultiLocation',
        amount: 'Compact<u128>',
      },
      ConcreteNonFungible: {
        class: 'XcmV0MultiLocation',
        instance: 'XcmV0MultiAssetAssetInstance',
      },
    }
  },
  /**
   * Lookup114: xcm::v0::multi_asset::AssetInstance
   **/
  XcmV0MultiAssetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: {
        id: 'Compact<u128>',
      },
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes',
    }
  },
  /**
   * Lookup117: xcm::v0::order::Order<Call>
   **/
  XcmV0Order: {
    _enum: {
      Null: 'Null',
      DepositAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'DoNotConstruct<Lookup116>',
      },
      ExchangeAsset: {
        give: 'Vec<XcmV0MultiAsset>',
        receive: 'Vec<XcmV0MultiAsset>',
      },
      InitiateReserveWithdraw: {
        assets: 'Vec<XcmV0MultiAsset>',
        reserve: 'XcmV0MultiLocation',
        effects: 'DoNotConstruct<Lookup116>',
      },
      InitiateTeleport: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'DoNotConstruct<Lookup116>',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV0MultiLocation',
        assets: 'Vec<XcmV0MultiAsset>',
      },
      BuyExecution: {
        fees: 'XcmV0MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        xcm: 'Vec<XcmV0Xcm>',
      },
    }
  },
  /**
   * Lookup119: xcm::v0::Response
   **/
  XcmV0Response: {
    _enum: {
      Assets: 'Vec<XcmV0MultiAsset>',
    }
  },
  /**
   * Lookup120: xcm::v0::OriginKind
   **/
  XcmV0OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup121: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup123: polkadot_parachain::primitives::HrmpChannelId
   **/
  PolkadotParachainPrimitivesHrmpChannelId: {
    sender: 'u32',
    recipient: 'u32'
  },
  /**
   * Lookup129: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null',
    }
  },
  /**
   * Lookup132: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup139: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'u64',
    maxBlock: 'u64',
    perClass: {
      normal: 'FrameSystemLimitsWeightsPerClass',
      operational: 'FrameSystemLimitsWeightsPerClass',
      mandatory: 'FrameSystemLimitsWeightsPerClass',
    }
  },
  /**
   * Lookup141: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'u64',
    maxExtrinsic: 'Option<u64>',
    maxTotal: 'Option<u64>',
    reserved: 'Option<u64>'
  },
  /**
   * Lookup143: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: {
      normal: 'u32',
      operational: 'u32',
      mandatory: 'u32',
    }
  },
  /**
   * Lookup145: frame_support::weights::RuntimeDbWeight
   **/
  FrameSupportWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup146: sp_version::RuntimeVersion
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
   * Lookup153: sp_consensus_babe::app::Public
   **/
  SpConsensusBabeAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup155: sp_consensus_babe::digests::NextConfigDescriptor
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
   * Lookup157: sp_consensus_babe::AllowedSlots
   **/
  SpConsensusBabeAllowedSlots: {
    _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
  },
  /**
   * Lookup160: sp_consensus_babe::BabeEpochConfiguration
   **/
  SpConsensusBabeBabeEpochConfiguration: {
    c: '(u64,u64)',
    allowedSlots: 'SpConsensusBabeAllowedSlots'
  },
  /**
   * Lookup162: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>, sp_consensus_babe::app::Public>
   **/
  SpConsensusSlotsEquivocationProof: {
    offender: 'SpConsensusBabeAppPublic',
    slot: 'u64',
    firstHeader: 'SpRuntimeGenericHeader',
    secondHeader: 'SpRuntimeGenericHeader'
  },
  /**
   * Lookup163: sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>
   **/
  SpRuntimeGenericHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeGenericDigest'
  },
  /**
   * Lookup164: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup165: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup172: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup173: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup176: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup178: pallet_balances::Releases
   **/
  PalletBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0']
  },
  /**
   * Lookup184: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup186: frame_support::weights::WeightToFeeCoefficient<Balance>
   **/
  FrameSupportWeightsWeightToFeeCoefficient: {
    coeffInteger: 'u128',
    coeffFrac: 'Perbill',
    negative: 'bool',
    degree: 'u8'
  },
  /**
   * Lookup188: pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, sp_core::crypto::AccountId32>
   **/
  PalletAuthorshipUncleEntryItem: {
    _enum: {
      InclusionHeight: 'u32',
      Uncle: '(H256,Option<AccountId32>)',
    }
  },
  /**
   * Lookup193: pallet_staking::StakingLedger<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingUnlockChunk>',
    claimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup195: pallet_staking::UnlockChunk<Balance>
   **/
  PalletStakingUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup197: pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
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
   * Lookup198: pallet_staking::ValidatorPrefs
   **/
  PalletStakingValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup200: pallet_staking::Nominations<sp_core::crypto::AccountId32>
   **/
  PalletStakingNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup201: pallet_staking::ActiveEraInfo
   **/
  PalletStakingActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup202: pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  PalletStakingEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup206: pallet_staking::Forcing
   **/
  PalletStakingForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup208: pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporters: 'Vec<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup210: pallet_staking::slashing::SlashingSpans
   **/
  PalletStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup211: pallet_staking::slashing::SpanRecord<Balance>
   **/
  PalletStakingSlashingSpanRecord: {
    slashed: 'u128',
    paidOut: 'u128'
  },
  /**
   * Lookup212: pallet_staking::Releases
   **/
  PalletStakingReleases: {
    _enum: ['V1_0_0Ancient', 'V2_0_0', 'V3_0_0', 'V4_0_0', 'V5_0_0', 'V6_0_0', 'V7_0_0']
  },
  /**
   * Lookup219: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,PalletStakingExposure)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup222: kusama_runtime::SessionKeys
   **/
  KusamaRuntimeSessionKeys: {
    grandpa: 'SpFinalityGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    paraValidator: 'PolkadotPrimitivesV0ValidatorAppPublic',
    paraAssignment: 'PolkadotPrimitivesV1AssignmentAppPublic',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic'
  },
  /**
   * Lookup223: polkadot_primitives::v0::validator_app::Public
   **/
  PolkadotPrimitivesV0ValidatorAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup224: polkadot_primitives::v1::assignment_app::Public
   **/
  PolkadotPrimitivesV1AssignmentAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup225: sp_authority_discovery::app::Public
   **/
  SpAuthorityDiscoveryAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup227: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup230: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
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
   * Lookup231: pallet_grandpa::StoredPendingChange<N>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup233: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation'
  },
  /**
   * Lookup234: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: {
        roundNumber: 'u64',
        identity: 'SpFinalityGrandpaAppPublic',
        first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
        second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
      },
      Precommit: {
        roundNumber: 'u64',
        identity: 'SpFinalityGrandpaAppPublic',
        first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
        second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
      },
    }
  },
  /**
   * Lookup236: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup237: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup238: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup241: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup246: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    networkState: 'SpCoreOffchainOpaqueNetworkState',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup247: sp_core::offchain::OpaqueNetworkState
   **/
  SpCoreOffchainOpaqueNetworkState: {
    peerId: 'Bytes',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup251: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: 'SpCoreSr25519Signature',
  /**
   * Lookup256: pallet_democracy::PreimageStatus<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletDemocracyPreimageStatus: {
    _enum: {
      Missing: 'u32',
      Available: {
        data: 'Bytes',
        provider: 'AccountId32',
        deposit: 'u128',
        since: 'u32',
        expiry: 'Option<u32>',
      },
    }
  },
  /**
   * Lookup257: pallet_democracy::types::ReferendumInfo<BlockNumber, primitive_types::H256, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32',
      },
    }
  },
  /**
   * Lookup258: pallet_democracy::types::ReferendumStatus<BlockNumber, primitive_types::H256, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposalHash: 'H256',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup259: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup260: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
    }
  },
  /**
   * Lookup263: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
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
   * Lookup265: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup266: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup267: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup270: pallet_democracy::Releases
   **/
  PalletDemocracyReleases: {
    _enum: ['V1']
  },
  /**
   * Lookup278: pallet_elections_phragmen::Renouncing
   **/
  PalletElectionsPhragmenRenouncing: {
    _enum: {
      Member: 'Null',
      RunnerUp: 'Null',
      Candidate: 'Compact<u32>',
    }
  },
  /**
   * Lookup282: polkadot_runtime_common::claims::EcdsaSignature
   **/
  PolkadotRuntimeCommonClaimsEcdsaSignature: '[u8;65]',
  /**
   * Lookup287: polkadot_runtime_common::claims::StatementKind
   **/
  PolkadotRuntimeCommonClaimsStatementKind: {
    _enum: ['Regular', 'Saft']
  },
  /**
   * Lookup291: pallet_identity::types::IdentityInfo<FieldLimit>
   **/
  PalletIdentityIdentityInfo: {
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
   * Lookup327: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128
  },
  /**
   * Lookup328: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['Unused0', 'Display', 'Legal', 'Unused3', 'Web', 'Unused5', 'Unused6', 'Unused7', 'Riot', 'Unused9', 'Unused10', 'Unused11', 'Unused12', 'Unused13', 'Unused14', 'Unused15', 'Email', 'Unused17', 'Unused18', 'Unused19', 'Unused20', 'Unused21', 'Unused22', 'Unused23', 'Unused24', 'Unused25', 'Unused26', 'Unused27', 'Unused28', 'Unused29', 'Unused30', 'Unused31', 'PgpFingerprint', 'Unused33', 'Unused34', 'Unused35', 'Unused36', 'Unused37', 'Unused38', 'Unused39', 'Unused40', 'Unused41', 'Unused42', 'Unused43', 'Unused44', 'Unused45', 'Unused46', 'Unused47', 'Unused48', 'Unused49', 'Unused50', 'Unused51', 'Unused52', 'Unused53', 'Unused54', 'Unused55', 'Unused56', 'Unused57', 'Unused58', 'Unused59', 'Unused60', 'Unused61', 'Unused62', 'Unused63', 'Image', 'Unused65', 'Unused66', 'Unused67', 'Unused68', 'Unused69', 'Unused70', 'Unused71', 'Unused72', 'Unused73', 'Unused74', 'Unused75', 'Unused76', 'Unused77', 'Unused78', 'Unused79', 'Unused80', 'Unused81', 'Unused82', 'Unused83', 'Unused84', 'Unused85', 'Unused86', 'Unused87', 'Unused88', 'Unused89', 'Unused90', 'Unused91', 'Unused92', 'Unused93', 'Unused94', 'Unused95', 'Unused96', 'Unused97', 'Unused98', 'Unused99', 'Unused100', 'Unused101', 'Unused102', 'Unused103', 'Unused104', 'Unused105', 'Unused106', 'Unused107', 'Unused108', 'Unused109', 'Unused110', 'Unused111', 'Unused112', 'Unused113', 'Unused114', 'Unused115', 'Unused116', 'Unused117', 'Unused118', 'Unused119', 'Unused120', 'Unused121', 'Unused122', 'Unused123', 'Unused124', 'Unused125', 'Unused126', 'Unused127', 'Twitter']
  },
  /**
   * Lookup329: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
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
   * Lookup331: pallet_society::Judgement
   **/
  PalletSocietyJudgement: {
    _enum: ['Rebid', 'Reject', 'Approve']
  },
  /**
   * Lookup334: pallet_vesting::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup344: pallet_election_provider_multi_phase::RawSolution<kusama_runtime::NposCompactSolution24>
   **/
  PalletElectionProviderMultiPhaseRawSolution: {
    compact: 'KusamaRuntimeNposCompactSolution24',
    score: '[u128;3]',
    round: 'u32'
  },
  /**
   * Lookup345: kusama_runtime::NposCompactSolution24
   **/
  KusamaRuntimeNposCompactSolution24: {
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
   * Lookup421: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
   **/
  PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  /**
   * Lookup425: sp_npos_elections::Support<sp_core::crypto::AccountId32>
   **/
  SpNposElectionsSupport: {
    total: 'u128',
    voters: 'Vec<(AccountId32,u128)>'
  },
  /**
   * Lookup432: polkadot_runtime_parachains::paras_inherent::Call<T>
   **/
  PolkadotRuntimeParachainsParasInherentCall: {
    _enum: {
      enter: {
        data: 'PolkadotPrimitivesV1InherentData',
      },
    }
  },
  /**
   * Lookup433: polkadot_primitives::v1::InherentData<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>>
   **/
  PolkadotPrimitivesV1InherentData: {
    bitfields: 'Vec<PolkadotPrimitivesV1SignedUncheckedSigned>',
    backedCandidates: 'Vec<PolkadotPrimitivesV1BackedCandidate>',
    disputes: 'Vec<PolkadotPrimitivesV1DisputeStatementSet>',
    parentHeader: 'SpRuntimeGenericHeader'
  },
  /**
   * Lookup435: polkadot_primitives::v1::signed::UncheckedSigned<polkadot_primitives::v1::AvailabilityBitfield, polkadot_primitives::v1::AvailabilityBitfield>
   **/
  PolkadotPrimitivesV1SignedUncheckedSigned: {
    payload: 'BitVec',
    validatorIndex: 'u32',
    signature: 'PolkadotPrimitivesV0ValidatorAppSignature'
  },
  /**
   * Lookup438: bitvec::order::Lsb0
   **/
  BitvecOrderLsb0: 'Null',
  /**
   * Lookup440: polkadot_primitives::v0::validator_app::Signature
   **/
  PolkadotPrimitivesV0ValidatorAppSignature: 'SpCoreSr25519Signature',
  /**
   * Lookup442: polkadot_primitives::v1::BackedCandidate<primitive_types::H256>
   **/
  PolkadotPrimitivesV1BackedCandidate: {
    candidate: 'PolkadotPrimitivesV1CommittedCandidateReceipt',
    validityVotes: 'Vec<PolkadotPrimitivesV0ValidityAttestation>',
    validatorIndices: 'BitVec'
  },
  /**
   * Lookup443: polkadot_primitives::v1::CommittedCandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV1CommittedCandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV1CandidateDescriptor',
    commitments: 'PolkadotPrimitivesV1CandidateCommitments'
  },
  /**
   * Lookup444: polkadot_primitives::v1::CandidateCommitments<N>
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
   * Lookup446: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup450: polkadot_primitives::v0::ValidityAttestation
   **/
  PolkadotPrimitivesV0ValidityAttestation: {
    _enum: {
      Unused0: 'Null',
      Implicit: 'PolkadotPrimitivesV0ValidatorAppSignature',
      Explicit: 'PolkadotPrimitivesV0ValidatorAppSignature',
    }
  },
  /**
   * Lookup452: polkadot_primitives::v1::DisputeStatementSet
   **/
  PolkadotPrimitivesV1DisputeStatementSet: {
    candidateHash: 'H256',
    session: 'u32',
    statements: 'Vec<(PolkadotPrimitivesV1DisputeStatement,u32,PolkadotPrimitivesV0ValidatorAppSignature)>'
  },
  /**
   * Lookup456: polkadot_primitives::v1::DisputeStatement
   **/
  PolkadotPrimitivesV1DisputeStatement: {
    _enum: {
      Valid: 'PolkadotPrimitivesV1ValidDisputeStatementKind',
      Invalid: 'PolkadotPrimitivesV1InvalidDisputeStatementKind',
    }
  },
  /**
   * Lookup457: polkadot_primitives::v1::ValidDisputeStatementKind
   **/
  PolkadotPrimitivesV1ValidDisputeStatementKind: {
    _enum: {
      Explicit: 'Null',
      BackingSeconded: 'H256',
      BackingValid: 'H256',
      ApprovalChecking: 'Null',
    }
  },
  /**
   * Lookup458: polkadot_primitives::v1::InvalidDisputeStatementKind
   **/
  PolkadotPrimitivesV1InvalidDisputeStatementKind: {
    _enum: ['Explicit']
  },
  /**
   * Lookup470: sp_runtime::MultiSigner
   **/
  SpRuntimeMultiSigner: {
    _enum: {
      Ed25519: 'SpCoreEd25519Public',
      Sr25519: 'SpCoreSr25519Public',
      Ecdsa: 'SpCoreEcdsaPublic',
    }
  },
  /**
   * Lookup471: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',
  /**
   * Lookup474: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature',
    }
  },
  /**
   * Lookup475: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup482: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup487: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenSeatHolder: {
    who: 'AccountId32',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup488: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenVoter: {
    votes: 'Vec<AccountId32>',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup491: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup494: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup497: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup505: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup509: pallet_society::Bid<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyBid: {
    who: 'AccountId32',
    kind: 'PalletSocietyBidKind',
    value: 'u128'
  },
  /**
   * Lookup510: pallet_society::BidKind<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyBidKind: {
    _enum: {
      Deposit: 'u128',
      Vouch: '(AccountId32,u128)',
    }
  },
  /**
   * Lookup512: pallet_society::VouchingStatus
   **/
  PalletSocietyVouchingStatus: {
    _enum: ['Vouching', 'Banned']
  },
  /**
   * Lookup515: pallet_society::Vote
   **/
  PalletSocietyVote: {
    _enum: ['Skeptic', 'Reject', 'Approve']
  },
  /**
   * Lookup517: pallet_recovery::RecoveryConfig<BlockNumber, Balance, sp_core::crypto::AccountId32>
   **/
  PalletRecoveryRecoveryConfig: {
    delayPeriod: 'u32',
    deposit: 'u128',
    friends: 'Vec<AccountId32>',
    threshold: 'u16'
  },
  /**
   * Lookup518: pallet_recovery::ActiveRecovery<BlockNumber, Balance, sp_core::crypto::AccountId32>
   **/
  PalletRecoveryActiveRecovery: {
    created: 'u32',
    deposit: 'u128',
    friends: 'Vec<AccountId32>'
  },
  /**
   * Lookup523: pallet_scheduler::ScheduledV2<kusama_runtime::Call, BlockNumber, kusama_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduledV2: {
    _alias: {
      call_: 'call',
    },
    maybeId: 'Option<Bytes>',
    priority: 'u8',
    call_: 'Call',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'KusamaRuntimeOriginCaller'
  },
  /**
   * Lookup524: kusama_runtime::OriginCaller
   **/
  KusamaRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSystemRawOrigin',
      Unused1: 'Null',
      Unused2: 'Null',
      Unused3: 'Null',
      Unused4: 'Null',
      Void: 'SpCoreVoid',
      Unused6: 'Null',
      Unused7: 'Null',
      Unused8: 'Null',
      Unused9: 'Null',
      Unused10: 'Null',
      Unused11: 'Null',
      Unused12: 'Null',
      Unused13: 'Null',
      Council: 'PalletCollectiveRawOriginInstance1',
      TechnicalCommittee: 'PalletCollectiveRawOriginInstance2',
      Unused16: 'Null',
      Unused17: 'Null',
      Unused18: 'Null',
      Unused19: 'Null',
      Unused20: 'Null',
      Unused21: 'Null',
      Unused22: 'Null',
      Unused23: 'Null',
      Unused24: 'Null',
      Unused25: 'Null',
      Unused26: 'Null',
      Unused27: 'Null',
      Unused28: 'Null',
      Unused29: 'Null',
      Unused30: 'Null',
      Unused31: 'Null',
      Unused32: 'Null',
      Unused33: 'Null',
      Unused34: 'Null',
      Unused35: 'Null',
      Unused36: 'Null',
      Unused37: 'Null',
      Unused38: 'Null',
      Unused39: 'Null',
      Unused40: 'Null',
      Unused41: 'Null',
      Unused42: 'Null',
      Unused43: 'Null',
      Unused44: 'Null',
      Unused45: 'Null',
      Unused46: 'Null',
      Unused47: 'Null',
      Unused48: 'Null',
      Unused49: 'Null',
      ParachainsOrigin: 'PolkadotRuntimeParachainsOriginPalletOrigin',
      Unused51: 'Null',
      Unused52: 'Null',
      Unused53: 'Null',
      Unused54: 'Null',
      Unused55: 'Null',
      Unused56: 'Null',
      Unused57: 'Null',
      Unused58: 'Null',
      Unused59: 'Null',
      Unused60: 'Null',
      Unused61: 'Null',
      Unused62: 'Null',
      Unused63: 'Null',
      Unused64: 'Null',
      Unused65: 'Null',
      Unused66: 'Null',
      Unused67: 'Null',
      Unused68: 'Null',
      Unused69: 'Null',
      Unused70: 'Null',
      Unused71: 'Null',
      Unused72: 'Null',
      Unused73: 'Null',
      Unused74: 'Null',
      Unused75: 'Null',
      Unused76: 'Null',
      Unused77: 'Null',
      Unused78: 'Null',
      Unused79: 'Null',
      Unused80: 'Null',
      Unused81: 'Null',
      Unused82: 'Null',
      Unused83: 'Null',
      Unused84: 'Null',
      Unused85: 'Null',
      Unused86: 'Null',
      Unused87: 'Null',
      Unused88: 'Null',
      Unused89: 'Null',
      Unused90: 'Null',
      Unused91: 'Null',
      Unused92: 'Null',
      Unused93: 'Null',
      Unused94: 'Null',
      Unused95: 'Null',
      Unused96: 'Null',
      Unused97: 'Null',
      Unused98: 'Null',
      XcmPallet: 'PalletXcmOrigin',
    }
  },
  /**
   * Lookup525: frame_system::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSystemRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null',
    }
  },
  /**
   * Lookup526: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, pallet_collective::Instance1>
   **/
  PalletCollectiveRawOriginInstance1: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null',
    }
  },
  /**
   * Lookup527: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, pallet_collective::Instance2>
   **/
  PalletCollectiveRawOriginInstance2: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null',
    }
  },
  /**
   * Lookup528: polkadot_runtime_parachains::origin::pallet::Origin
   **/
  PolkadotRuntimeParachainsOriginPalletOrigin: {
    _enum: {
      Parachain: 'u32',
    }
  },
  /**
   * Lookup529: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'XcmV0MultiLocation',
    }
  },
  /**
   * Lookup530: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup531: pallet_scheduler::Releases
   **/
  PalletSchedulerReleases: {
    _enum: ['V1', 'V2']
  },
  /**
   * Lookup535: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, kusama_runtime::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'KusamaRuntimeProxyType',
    delay: 'u32'
  },
  /**
   * Lookup539: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup542: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup545: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
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
   * Lookup546: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
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
   * Lookup548: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
   **/
  PalletTipsOpenTip: {
    reason: 'H256',
    who: 'AccountId32',
    finder: 'AccountId32',
    deposit: 'u128',
    closes: 'Option<u32>',
    tips: 'Vec<(AccountId32,u128)>',
    findersFee: 'bool'
  },
  /**
   * Lookup550: pallet_election_provider_multi_phase::Phase<Bn>
   **/
  PalletElectionProviderMultiPhasePhase: {
    _enum: {
      Off: 'Null',
      Signed: 'Null',
      Unsigned: '(bool,u32)',
      Emergency: 'Null',
    }
  },
  /**
   * Lookup552: pallet_election_provider_multi_phase::ReadySolution<sp_core::crypto::AccountId32>
   **/
  PalletElectionProviderMultiPhaseReadySolution: {
    supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    score: '[u128;3]',
    compute: 'PalletElectionProviderMultiPhaseElectionCompute'
  },
  /**
   * Lookup553: pallet_election_provider_multi_phase::RoundSnapshot<sp_core::crypto::AccountId32>
   **/
  PalletElectionProviderMultiPhaseRoundSnapshot: {
    voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    targets: 'Vec<AccountId32>'
  },
  /**
   * Lookup560: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, kusama_runtime::NposCompactSolution24>
   **/
  PalletElectionProviderMultiPhaseSignedSignedSubmission: {
    who: 'AccountId32',
    deposit: 'u128',
    solution: 'PalletElectionProviderMultiPhaseRawSolution',
    reward: 'u128'
  },
  /**
   * Lookup563: pallet_gilt::pallet::GiltBid<Balance, sp_core::crypto::AccountId32>
   **/
  PalletGiltGiltBid: {
    amount: 'u128',
    who: 'AccountId32'
  },
  /**
   * Lookup564: pallet_gilt::pallet::ActiveGiltsTotal<Balance>
   **/
  PalletGiltActiveGiltsTotal: {
    frozen: 'u128',
    proportion: 'Perquintill',
    index: 'u32',
    target: 'Perquintill'
  },
  /**
   * Lookup565: pallet_gilt::pallet::ActiveGilt<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletGiltActiveGilt: {
    proportion: 'Perquintill',
    amount: 'u128',
    who: 'AccountId32',
    expiry: 'u32'
  },
  /**
   * Lookup567: polkadot_runtime_parachains::configuration::HostConfiguration<BlockNumber>
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
    hrmpOpenRequestTtl: 'u32',
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
    relayVrfModuloSamples: 'u32'
  },
  /**
   * Lookup571: polkadot_runtime_parachains::inclusion::AvailabilityBitfieldRecord<N>
   **/
  PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord: {
    bitfield: 'BitVec',
    submittedAt: 'u32'
  },
  /**
   * Lookup572: polkadot_runtime_parachains::inclusion::CandidatePendingAvailability<primitive_types::H256, N>
   **/
  PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: {
    _alias: {
      hash_: 'hash',
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
   * Lookup574: polkadot_runtime_parachains::paras_inherent::Error<T>
   **/
  PolkadotRuntimeParachainsParasInherentError: {
    _enum: ['TooManyInclusionInherents', 'InvalidParentHeader', 'CandidateCouldBeInvalid']
  },
  /**
   * Lookup576: polkadot_runtime_parachains::scheduler::ParathreadClaimQueue
   **/
  PolkadotRuntimeParachainsSchedulerParathreadClaimQueue: {
    queue: 'Vec<PolkadotRuntimeParachainsSchedulerQueuedParathread>',
    nextCoreOffset: 'u32'
  },
  /**
   * Lookup578: polkadot_runtime_parachains::scheduler::QueuedParathread
   **/
  PolkadotRuntimeParachainsSchedulerQueuedParathread: {
    claim: 'PolkadotPrimitivesV1ParathreadEntry',
    coreOffset: 'u32'
  },
  /**
   * Lookup579: polkadot_primitives::v1::ParathreadEntry
   **/
  PolkadotPrimitivesV1ParathreadEntry: {
    claim: 'PolkadotPrimitivesV1ParathreadClaim',
    retries: 'u32'
  },
  /**
   * Lookup580: polkadot_primitives::v1::ParathreadClaim
   **/
  PolkadotPrimitivesV1ParathreadClaim: '(u32,PolkadotPrimitivesV0CollatorAppPublic)',
  /**
   * Lookup583: polkadot_primitives::v1::CoreOccupied
   **/
  PolkadotPrimitivesV1CoreOccupied: {
    _enum: {
      Parathread: 'PolkadotPrimitivesV1ParathreadEntry',
      Parachain: 'Null',
    }
  },
  /**
   * Lookup586: polkadot_runtime_parachains::scheduler::CoreAssignment
   **/
  PolkadotRuntimeParachainsSchedulerCoreAssignment: {
    core: 'u32',
    paraId: 'u32',
    kind: 'PolkadotRuntimeParachainsSchedulerAssignmentKind',
    groupIdx: 'u32'
  },
  /**
   * Lookup587: polkadot_runtime_parachains::scheduler::AssignmentKind
   **/
  PolkadotRuntimeParachainsSchedulerAssignmentKind: {
    _enum: {
      Parachain: 'Null',
      Parathread: '(PolkadotPrimitivesV0CollatorAppPublic,u32)',
    }
  },
  /**
   * Lookup588: polkadot_runtime_parachains::paras::ParaLifecycle
   **/
  PolkadotRuntimeParachainsParasParaLifecycle: {
    _enum: ['Onboarding', 'Parathread', 'Parachain', 'UpgradingParathread', 'DowngradingParachain', 'OffboardingParathread', 'OffboardingParachain']
  },
  /**
   * Lookup590: polkadot_runtime_parachains::paras::ParaPastCodeMeta<N>
   **/
  PolkadotRuntimeParachainsParasParaPastCodeMeta: {
    upgradeTimes: 'Vec<PolkadotRuntimeParachainsParasReplacementTimes>',
    lastPruned: 'Option<u32>'
  },
  /**
   * Lookup592: polkadot_runtime_parachains::paras::ReplacementTimes<N>
   **/
  PolkadotRuntimeParachainsParasReplacementTimes: {
    expectedAt: 'u32',
    activatedAt: 'u32'
  },
  /**
   * Lookup594: polkadot_runtime_parachains::paras::ParaGenesisArgs
   **/
  PolkadotRuntimeParachainsParasParaGenesisArgs: {
    genesisHead: 'Bytes',
    validationCode: 'Bytes',
    parachain: 'bool'
  },
  /**
   * Lookup597: polkadot_runtime_parachains::initializer::BufferedSessionChange
   **/
  PolkadotRuntimeParachainsInitializerBufferedSessionChange: {
    validators: 'Vec<PolkadotPrimitivesV0ValidatorAppPublic>',
    queued: 'Vec<PolkadotPrimitivesV0ValidatorAppPublic>',
    sessionIndex: 'u32'
  },
  /**
   * Lookup599: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup600: polkadot_runtime_parachains::hrmp::HrmpOpenChannelRequest
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
   * Lookup602: polkadot_runtime_parachains::hrmp::HrmpChannel
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
   * Lookup605: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup610: polkadot_primitives::v1::SessionInfo
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
   * Lookup612: polkadot_runtime_common::paras_registrar::ParaInfo<sp_core::crypto::AccountId32, Balance>
   **/
  PolkadotRuntimeCommonParasRegistrarParaInfo: {
    manager: 'AccountId32',
    deposit: 'u128',
    locked: 'bool'
  },
  /**
   * Lookup622: polkadot_runtime_common::crowdloan::FundInfo<sp_core::crypto::AccountId32, Balance, BlockNumber, LeasePeriod>
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
   * Lookup623: polkadot_runtime_common::crowdloan::LastContribution<BlockNumber>
   **/
  PolkadotRuntimeCommonCrowdloanLastContribution: {
    _enum: {
      Never: 'Null',
      PreEnding: 'u32',
      Ending: 'u32',
    }
  },
  /**
   * Lookup628: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup629: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup630: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup633: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup634: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup635: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>'
} as DefinitionsTypes;
