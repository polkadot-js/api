// Auto-generated via `yarn polkadot-types-from-`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types';

export default {
  /**
   * Lookup78: kusama_runtime::ProxyType
   **/
  KusamaRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'IdentityJudgement', 'CancelProxy']
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
        effects: 'Vec<XcmV0Order>',
      },
      ExchangeAsset: {
        give: 'Vec<XcmV0MultiAsset>',
        receive: 'Vec<XcmV0MultiAsset>',
      },
      InitiateReserveWithdraw: {
        assets: 'Vec<XcmV0MultiAsset>',
        reserve: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      InitiateTeleport: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
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
   * Lookup224: kusama_runtime::SessionKeys
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
   * Lookup347: kusama_runtime::NposCompactSolution24
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
   * Lookup435: polkadot_primitives::v1::InherentData<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>>
   **/
  PolkadotPrimitivesV1InherentData: {
    bitfields: 'Vec<PolkadotPrimitivesV1SignedUncheckedSigned>',
    backedCandidates: 'Vec<PolkadotPrimitivesV1BackedCandidate>',
    disputes: 'Vec<PolkadotPrimitivesV1DisputeStatementSet>',
    parentHeader: 'SpRuntimeGenericHeader'
  },
  /**
   * Lookup437: polkadot_primitives::v1::signed::UncheckedSigned<polkadot_primitives::v1::AvailabilityBitfield, polkadot_primitives::v1::AvailabilityBitfield>
   **/
  PolkadotPrimitivesV1SignedUncheckedSigned: {
    payload: 'BitVec',
    validatorIndex: 'u32',
    signature: 'PolkadotPrimitivesV0ValidatorAppSignature'
  },
  /**
   * Lookup440: bitvec::order::Lsb0
   **/
  BitvecOrderLsb0: 'Null',
  /**
   * Lookup442: polkadot_primitives::v0::validator_app::Signature
   **/
  PolkadotPrimitivesV0ValidatorAppSignature: 'SpCoreSr25519Signature',
  /**
   * Lookup444: polkadot_primitives::v1::BackedCandidate<primitive_types::H256>
   **/
  PolkadotPrimitivesV1BackedCandidate: {
    candidate: 'PolkadotPrimitivesV1CommittedCandidateReceipt',
    validityVotes: 'Vec<PolkadotPrimitivesV0ValidityAttestation>',
    validatorIndices: 'BitVec'
  },
  /**
   * Lookup445: polkadot_primitives::v1::CommittedCandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV1CommittedCandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV1CandidateDescriptor',
    commitments: 'PolkadotPrimitivesV1CandidateCommitments'
  },
  /**
   * Lookup446: polkadot_primitives::v1::CandidateCommitments<N>
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
   * Lookup448: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup452: polkadot_primitives::v0::ValidityAttestation
   **/
  PolkadotPrimitivesV0ValidityAttestation: {
    _enum: {
      Unused0: 'Null',
      Implicit: 'PolkadotPrimitivesV0ValidatorAppSignature',
      Explicit: 'PolkadotPrimitivesV0ValidatorAppSignature',
    }
  },
  /**
   * Lookup454: polkadot_primitives::v1::DisputeStatementSet
   **/
  PolkadotPrimitivesV1DisputeStatementSet: {
    candidateHash: 'H256',
    session: 'u32',
    statements: 'Vec<(PolkadotPrimitivesV1DisputeStatement,u32,PolkadotPrimitivesV0ValidatorAppSignature)>'
  },
  /**
   * Lookup458: polkadot_primitives::v1::DisputeStatement
   **/
  PolkadotPrimitivesV1DisputeStatement: {
    _enum: {
      Valid: 'PolkadotPrimitivesV1ValidDisputeStatementKind',
      Invalid: 'PolkadotPrimitivesV1InvalidDisputeStatementKind',
    }
  },
  /**
   * Lookup459: polkadot_primitives::v1::ValidDisputeStatementKind
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
   * Lookup460: polkadot_primitives::v1::InvalidDisputeStatementKind
   **/
  PolkadotPrimitivesV1InvalidDisputeStatementKind: {
    _enum: ['Explicit']
  },
  /**
   * Lookup472: sp_runtime::MultiSigner
   **/
  SpRuntimeMultiSigner: {
    _enum: {
      Ed25519: 'SpCoreEd25519Public',
      Sr25519: 'SpCoreSr25519Public',
      Ecdsa: 'SpCoreEcdsaPublic',
    }
  },
  /**
   * Lookup473: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',
  /**
   * Lookup527: kusama_runtime::OriginCaller
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
   * Lookup531: polkadot_runtime_parachains::origin::pallet::Origin
   **/
  PolkadotRuntimeParachainsOriginPalletOrigin: {
    _enum: {
      Parachain: 'u32',
    }
  },
  /**
   * Lookup532: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'XcmV0MultiLocation',
    }
  },
  /**
   * Lookup571: polkadot_runtime_parachains::configuration::HostConfiguration<BlockNumber>
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
   * Lookup575: polkadot_runtime_parachains::inclusion::AvailabilityBitfieldRecord<N>
   **/
  PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord: {
    bitfield: 'BitVec',
    submittedAt: 'u32'
  },
  /**
   * Lookup576: polkadot_runtime_parachains::inclusion::CandidatePendingAvailability<primitive_types::H256, N>
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
   * Lookup580: polkadot_runtime_parachains::scheduler::ParathreadClaimQueue
   **/
  PolkadotRuntimeParachainsSchedulerParathreadClaimQueue: {
    queue: 'Vec<PolkadotRuntimeParachainsSchedulerQueuedParathread>',
    nextCoreOffset: 'u32'
  },
  /**
   * Lookup582: polkadot_runtime_parachains::scheduler::QueuedParathread
   **/
  PolkadotRuntimeParachainsSchedulerQueuedParathread: {
    claim: 'PolkadotPrimitivesV1ParathreadEntry',
    coreOffset: 'u32'
  },
  /**
   * Lookup583: polkadot_primitives::v1::ParathreadEntry
   **/
  PolkadotPrimitivesV1ParathreadEntry: {
    claim: 'PolkadotPrimitivesV1ParathreadClaim',
    retries: 'u32'
  },
  /**
   * Lookup584: polkadot_primitives::v1::ParathreadClaim
   **/
  PolkadotPrimitivesV1ParathreadClaim: '(u32,PolkadotPrimitivesV0CollatorAppPublic)',
  /**
   * Lookup587: polkadot_primitives::v1::CoreOccupied
   **/
  PolkadotPrimitivesV1CoreOccupied: {
    _enum: {
      Parathread: 'PolkadotPrimitivesV1ParathreadEntry',
      Parachain: 'Null',
    }
  },
  /**
   * Lookup590: polkadot_runtime_parachains::scheduler::CoreAssignment
   **/
  PolkadotRuntimeParachainsSchedulerCoreAssignment: {
    core: 'u32',
    paraId: 'u32',
    kind: 'PolkadotRuntimeParachainsSchedulerAssignmentKind',
    groupIdx: 'u32'
  },
  /**
   * Lookup591: polkadot_runtime_parachains::scheduler::AssignmentKind
   **/
  PolkadotRuntimeParachainsSchedulerAssignmentKind: {
    _enum: {
      Parachain: 'Null',
      Parathread: '(PolkadotPrimitivesV0CollatorAppPublic,u32)',
    }
  },
  /**
   * Lookup592: polkadot_runtime_parachains::paras::ParaLifecycle
   **/
  PolkadotRuntimeParachainsParasParaLifecycle: {
    _enum: ['Onboarding', 'Parathread', 'Parachain', 'UpgradingParathread', 'DowngradingParachain', 'OffboardingParathread', 'OffboardingParachain']
  },
  /**
   * Lookup594: polkadot_runtime_parachains::paras::ParaPastCodeMeta<N>
   **/
  PolkadotRuntimeParachainsParasParaPastCodeMeta: {
    upgradeTimes: 'Vec<PolkadotRuntimeParachainsParasReplacementTimes>',
    lastPruned: 'Option<u32>'
  },
  /**
   * Lookup596: polkadot_runtime_parachains::paras::ReplacementTimes<N>
   **/
  PolkadotRuntimeParachainsParasReplacementTimes: {
    expectedAt: 'u32',
    activatedAt: 'u32'
  },
  /**
   * Lookup598: polkadot_primitives::v1::UpgradeGoAhead
   **/
  PolkadotPrimitivesV1UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup599: polkadot_primitives::v1::UpgradeRestriction
   **/
  PolkadotPrimitivesV1UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup600: polkadot_runtime_parachains::paras::ParaGenesisArgs
   **/
  PolkadotRuntimeParachainsParasParaGenesisArgs: {
    genesisHead: 'Bytes',
    validationCode: 'Bytes',
    parachain: 'bool'
  },
  /**
   * Lookup603: polkadot_runtime_parachains::initializer::BufferedSessionChange
   **/
  PolkadotRuntimeParachainsInitializerBufferedSessionChange: {
    validators: 'Vec<PolkadotPrimitivesV0ValidatorAppPublic>',
    queued: 'Vec<PolkadotPrimitivesV0ValidatorAppPublic>',
    sessionIndex: 'u32'
  },
  /**
   * Lookup605: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup606: polkadot_runtime_parachains::hrmp::HrmpOpenChannelRequest
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
   * Lookup608: polkadot_runtime_parachains::hrmp::HrmpChannel
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
   * Lookup611: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup616: polkadot_primitives::v1::SessionInfo
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
   * Lookup618: polkadot_runtime_common::paras_registrar::ParaInfo<sp_core::crypto::AccountId32, Balance>
   **/
  PolkadotRuntimeCommonParasRegistrarParaInfo: {
    manager: 'AccountId32',
    deposit: 'u128',
    locked: 'bool'
  },
  /**
   * Lookup628: polkadot_runtime_common::crowdloan::FundInfo<sp_core::crypto::AccountId32, Balance, BlockNumber, LeasePeriod>
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
   * Lookup629: polkadot_runtime_common::crowdloan::LastContribution<BlockNumber>
   **/
  PolkadotRuntimeCommonCrowdloanLastContribution: {
    _enum: {
      Never: 'Null',
      PreEnding: 'u32',
      Ending: 'u32',
    }
  }
} as DefinitionsTypes;
