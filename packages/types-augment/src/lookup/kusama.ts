// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup77: staging_xcm::v5::location::Location
   **/
  StagingXcmV5Location: {
    parents: 'u8',
    interior: 'StagingXcmV5Junctions'
  },
  /**
   * Lookup78: staging_xcm::v5::junctions::Junctions
   **/
  StagingXcmV5Junctions: {
    _enum: {
      Here: 'Null',
      X1: '[Lookup80;1]',
      X2: '[Lookup80;2]',
      X3: '[Lookup80;3]',
      X4: '[Lookup80;4]',
      X5: '[Lookup80;5]',
      X6: '[Lookup80;6]',
      X7: '[Lookup80;7]',
      X8: '[Lookup80;8]'
    }
  },
  /**
   * Lookup80: staging_xcm::v5::junction::Junction
   **/
  StagingXcmV5Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<StagingXcmV5JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<StagingXcmV5JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<StagingXcmV5JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'StagingXcmV5JunctionNetworkId'
    }
  },
  /**
   * Lookup82: staging_xcm::v5::junction::NetworkId
   **/
  StagingXcmV5JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null',
      PolkadotBulletin: 'Null'
    }
  },
  /**
   * Lookup90: staging_xcm::v5::asset::AssetId
   **/
  StagingXcmV5AssetAssetId: 'StagingXcmV5Location',
  /**
   * Lookup136: staging_kusama_runtime::SessionKeys
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
   * Lookup158: staging_kusama_runtime::OriginCaller
   **/
  StagingKusamaRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
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
   * Lookup160: staging_kusama_runtime::governance::origins::pallet_custom_origins::Origin
   **/
  StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
    _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'AuctionAdmin', 'LeaseAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'SmallTipper', 'BigTipper', 'SmallSpender', 'MediumSpender', 'BigSpender', 'WhitelistedCaller', 'FellowshipInitiates', 'Fellows', 'FellowshipExperts', 'FellowshipMasters', 'Fellowship1Dan', 'Fellowship2Dan', 'Fellowship3Dan', 'Fellowship4Dan', 'Fellowship5Dan', 'Fellowship6Dan', 'Fellowship7Dan', 'Fellowship8Dan', 'Fellowship9Dan', 'WishForChange']
  },
  /**
   * Lookup170: staging_kusama_runtime::RuntimeParameters
   **/
  StagingKusamaRuntimeRuntimeParameters: {
    _enum: {
      Inflation: 'StagingKusamaRuntimeDynamicParamsInflationParameters',
      Treasury: 'StagingKusamaRuntimeDynamicParamsTreasuryParameters'
    }
  },
  /**
   * Lookup171: staging_kusama_runtime::dynamic_params::inflation::Parameters
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
   * Lookup172: staging_kusama_runtime::dynamic_params::inflation::MinInflation
   **/
  StagingKusamaRuntimeDynamicParamsInflationMinInflation: 'Null',
  /**
   * Lookup175: staging_kusama_runtime::dynamic_params::inflation::MaxInflation
   **/
  StagingKusamaRuntimeDynamicParamsInflationMaxInflation: 'Null',
  /**
   * Lookup176: staging_kusama_runtime::dynamic_params::inflation::IdealStake
   **/
  StagingKusamaRuntimeDynamicParamsInflationIdealStake: 'Null',
  /**
   * Lookup177: staging_kusama_runtime::dynamic_params::inflation::Falloff
   **/
  StagingKusamaRuntimeDynamicParamsInflationFalloff: 'Null',
  /**
   * Lookup178: staging_kusama_runtime::dynamic_params::inflation::UseAuctionSlots
   **/
  StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots: 'Null',
  /**
   * Lookup180: staging_kusama_runtime::dynamic_params::treasury::Parameters
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryParameters: {
    _enum: {
      BurnPortion: '(StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion,Option<Permill>)',
      BurnDestination: '(StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination,Option<StagingKusamaRuntimeBurnDestinationAccount>)'
    }
  },
  /**
   * Lookup181: staging_kusama_runtime::dynamic_params::treasury::BurnPortion
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryBurnPortion: 'Null',
  /**
   * Lookup184: staging_kusama_runtime::dynamic_params::treasury::BurnDestination
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryBurnDestination: 'Null',
  /**
   * Lookup186: staging_kusama_runtime::BurnDestinationAccount
   **/
  StagingKusamaRuntimeBurnDestinationAccount: 'Option<AccountId32>',
  /**
   * Lookup206: kusama_runtime_constants::proxy::ProxyType
   **/
  KusamaRuntimeConstantsProxyProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', '__Unused4', 'CancelProxy', 'Auction', 'Society', 'NominationPools', 'Spokesperson', 'ParaRegistration']
  },
  /**
   * Lookup216: staging_kusama_runtime::NposCompactSolution24
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
   * Lookup328: polkadot_primitives::vstaging::InherentData<sp_runtime::generic::header::Header<Number, Hash>>
   **/
  PolkadotPrimitivesVstagingInherentData: {
    bitfields: 'Vec<PolkadotPrimitivesV8SignedUncheckedSigned>',
    backedCandidates: 'Vec<PolkadotPrimitivesVstagingBackedCandidate>',
    disputes: 'Vec<PolkadotPrimitivesV8DisputeStatementSet>',
    parentHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup337: polkadot_primitives::vstaging::BackedCandidate<primitive_types::H256>
   **/
  PolkadotPrimitivesVstagingBackedCandidate: {
    candidate: 'PolkadotPrimitivesVstagingCommittedCandidateReceiptV2',
    validityVotes: 'Vec<PolkadotPrimitivesV8ValidityAttestation>',
    validatorIndices: 'BitVec'
  },
  /**
   * Lookup338: polkadot_primitives::vstaging::CommittedCandidateReceiptV2<primitive_types::H256>
   **/
  PolkadotPrimitivesVstagingCommittedCandidateReceiptV2: {
    descriptor: 'PolkadotPrimitivesVstagingCandidateDescriptorV2',
    commitments: 'PolkadotPrimitivesV8CandidateCommitments'
  },
  /**
   * Lookup339: polkadot_primitives::vstaging::CandidateDescriptorV2<primitive_types::H256>
   **/
  PolkadotPrimitivesVstagingCandidateDescriptorV2: {
    paraId: 'u32',
    relayParent: 'H256',
    version: 'u8',
    coreIndex: 'u16',
    sessionIndex: 'u32',
    reserved1: '[u8;25]',
    persistedValidationDataHash: 'H256',
    povHash: 'H256',
    erasureRoot: 'H256',
    reserved2: '[u8;64]',
    paraHead: 'H256',
    validationCodeHash: 'H256'
  },
  /**
   * Lookup434: staging_xcm::v5::Xcm<Call>
   **/
  StagingXcmV5Xcm: 'Vec<StagingXcmV5Instruction>',
  /**
   * Lookup436: staging_xcm::v5::Instruction<Call>
   **/
  StagingXcmV5Instruction: {
    _enum: {
      WithdrawAsset: 'StagingXcmV5AssetAssets',
      ReserveAssetDeposited: 'StagingXcmV5AssetAssets',
      ReceiveTeleportedAsset: 'StagingXcmV5AssetAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'StagingXcmV5Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV5Location>',
      },
      TransferAsset: {
        assets: 'StagingXcmV5AssetAssets',
        beneficiary: 'StagingXcmV5Location',
      },
      TransferReserveAsset: {
        assets: 'StagingXcmV5AssetAssets',
        dest: 'StagingXcmV5Location',
        xcm: 'StagingXcmV5Xcm',
      },
      Transact: {
        originKind: 'XcmV3OriginKind',
        fallbackMaxWeight: 'Option<SpWeightsWeightV2Weight>',
        call: 'XcmDoubleEncoded',
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
      ClearOrigin: 'Null',
      DescendOrigin: 'StagingXcmV5Junctions',
      ReportError: 'StagingXcmV5QueryResponseInfo',
      DepositAsset: {
        assets: 'StagingXcmV5AssetAssetFilter',
        beneficiary: 'StagingXcmV5Location',
      },
      DepositReserveAsset: {
        assets: 'StagingXcmV5AssetAssetFilter',
        dest: 'StagingXcmV5Location',
        xcm: 'StagingXcmV5Xcm',
      },
      ExchangeAsset: {
        give: 'StagingXcmV5AssetAssetFilter',
        want: 'StagingXcmV5AssetAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'StagingXcmV5AssetAssetFilter',
        reserve: 'StagingXcmV5Location',
        xcm: 'StagingXcmV5Xcm',
      },
      InitiateTeleport: {
        assets: 'StagingXcmV5AssetAssetFilter',
        dest: 'StagingXcmV5Location',
        xcm: 'StagingXcmV5Xcm',
      },
      ReportHolding: {
        responseInfo: 'StagingXcmV5QueryResponseInfo',
        assets: 'StagingXcmV5AssetAssetFilter',
      },
      BuyExecution: {
        fees: 'StagingXcmV5Asset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'StagingXcmV5Xcm',
      SetAppendix: 'StagingXcmV5Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'StagingXcmV5AssetAssets',
        ticket: 'StagingXcmV5Location',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'StagingXcmV5AssetAssets',
      ExpectAsset: 'StagingXcmV5AssetAssets',
      ExpectOrigin: 'Option<StagingXcmV5Location>',
      ExpectError: 'Option<(u32,XcmV5TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'StagingXcmV5QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'StagingXcmV5QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'StagingXcmV5Junction',
      ExportMessage: {
        network: 'StagingXcmV5JunctionNetworkId',
        destination: 'StagingXcmV5Junctions',
        xcm: 'StagingXcmV5Xcm',
      },
      LockAsset: {
        asset: 'StagingXcmV5Asset',
        unlocker: 'StagingXcmV5Location',
      },
      UnlockAsset: {
        asset: 'StagingXcmV5Asset',
        target: 'StagingXcmV5Location',
      },
      NoteUnlockable: {
        asset: 'StagingXcmV5Asset',
        owner: 'StagingXcmV5Location',
      },
      RequestUnlock: {
        asset: 'StagingXcmV5Asset',
        locker: 'StagingXcmV5Location',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV5Location',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV5Location>',
      },
      PayFees: {
        asset: 'StagingXcmV5Asset',
      },
      InitiateTransfer: {
        destination: 'StagingXcmV5Location',
        remoteFees: 'Option<StagingXcmV5AssetAssetTransferFilter>',
        preserveOrigin: 'bool',
        assets: 'Vec<StagingXcmV5AssetAssetTransferFilter>',
        remoteXcm: 'StagingXcmV5Xcm',
      },
      ExecuteWithOrigin: {
        descendantOrigin: 'Option<StagingXcmV5Junctions>',
        xcm: 'StagingXcmV5Xcm',
      },
      SetHints: {
        hints: 'Vec<StagingXcmV5Hint>'
      }
    }
  },
  /**
   * Lookup437: staging_xcm::v5::asset::Assets
   **/
  StagingXcmV5AssetAssets: 'Vec<StagingXcmV5Asset>',
  /**
   * Lookup439: staging_xcm::v5::asset::Asset
   **/
  StagingXcmV5Asset: {
    id: 'StagingXcmV5AssetAssetId',
    fun: 'StagingXcmV5AssetFungibility'
  },
  /**
   * Lookup440: staging_xcm::v5::asset::Fungibility
   **/
  StagingXcmV5AssetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'StagingXcmV5AssetAssetInstance'
    }
  },
  /**
   * Lookup441: staging_xcm::v5::asset::AssetInstance
   **/
  StagingXcmV5AssetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup442: staging_xcm::v5::Response
   **/
  StagingXcmV5Response: {
    _enum: {
      Null: 'Null',
      Assets: 'StagingXcmV5AssetAssets',
      ExecutionResult: 'Option<(u32,XcmV5TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<StagingXcmV5PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup445: xcm::v5::traits::Error
   **/
  XcmV5TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
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
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      TooManyAssets: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup447: staging_xcm::v5::PalletInfo
   **/
  StagingXcmV5PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup452: staging_xcm::v5::QueryResponseInfo
   **/
  StagingXcmV5QueryResponseInfo: {
    destination: 'StagingXcmV5Location',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup453: staging_xcm::v5::asset::AssetFilter
   **/
  StagingXcmV5AssetAssetFilter: {
    _enum: {
      Definite: 'StagingXcmV5AssetAssets',
      Wild: 'StagingXcmV5AssetWildAsset'
    }
  },
  /**
   * Lookup454: staging_xcm::v5::asset::WildAsset
   **/
  StagingXcmV5AssetWildAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'StagingXcmV5AssetAssetId',
        fun: 'StagingXcmV5AssetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'StagingXcmV5AssetAssetId',
        fun: 'StagingXcmV5AssetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup455: staging_xcm::v5::asset::WildFungibility
   **/
  StagingXcmV5AssetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup457: staging_xcm::v5::asset::AssetTransferFilter
   **/
  StagingXcmV5AssetAssetTransferFilter: {
    _enum: {
      Teleport: 'StagingXcmV5AssetAssetFilter',
      ReserveDeposit: 'StagingXcmV5AssetAssetFilter',
      ReserveWithdraw: 'StagingXcmV5AssetAssetFilter'
    }
  },
  /**
   * Lookup462: staging_xcm::v5::Hint
   **/
  StagingXcmV5Hint: {
    _enum: {
      AssetClaimer: {
        location: 'StagingXcmV5Location'
      }
    }
  },
  /**
   * Lookup509: staging_kusama_runtime::RuntimeParametersKey
   **/
  StagingKusamaRuntimeRuntimeParametersKey: {
    _enum: {
      Inflation: 'StagingKusamaRuntimeDynamicParamsInflationParametersKey',
      Treasury: 'StagingKusamaRuntimeDynamicParamsTreasuryParametersKey'
    }
  },
  /**
   * Lookup510: staging_kusama_runtime::dynamic_params::inflation::ParametersKey
   **/
  StagingKusamaRuntimeDynamicParamsInflationParametersKey: {
    _enum: ['MinInflation', 'MaxInflation', 'IdealStake', 'Falloff', 'UseAuctionSlots']
  },
  /**
   * Lookup511: staging_kusama_runtime::dynamic_params::treasury::ParametersKey
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryParametersKey: {
    _enum: ['BurnPortion', 'BurnDestination']
  },
  /**
   * Lookup513: staging_kusama_runtime::RuntimeParametersValue
   **/
  StagingKusamaRuntimeRuntimeParametersValue: {
    _enum: {
      Inflation: 'StagingKusamaRuntimeDynamicParamsInflationParametersValue',
      Treasury: 'StagingKusamaRuntimeDynamicParamsTreasuryParametersValue'
    }
  },
  /**
   * Lookup514: staging_kusama_runtime::dynamic_params::inflation::ParametersValue
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
   * Lookup515: staging_kusama_runtime::dynamic_params::treasury::ParametersValue
   **/
  StagingKusamaRuntimeDynamicParamsTreasuryParametersValue: {
    _enum: {
      BurnPortion: 'Permill',
      BurnDestination: 'StagingKusamaRuntimeBurnDestinationAccount'
    }
  },
  /**
   * Lookup541: polkadot_primitives::vstaging::CandidateReceiptV2<primitive_types::H256>
   **/
  PolkadotPrimitivesVstagingCandidateReceiptV2: {
    descriptor: 'PolkadotPrimitivesVstagingCandidateDescriptorV2',
    commitmentsHash: 'H256'
  },
  /**
   * Lookup556: staging_xcm::v5::traits::Outcome
   **/
  StagingXcmV5TraitsOutcome: {
    _enum: {
      Complete: {
        used: 'SpWeightsWeightV2Weight',
      },
      Incomplete: {
        used: 'SpWeightsWeightV2Weight',
        error: 'XcmV5TraitsError',
      },
      Error: {
        error: 'XcmV5TraitsError'
      }
    }
  },
  /**
   * Lookup604: staging_kusama_runtime::RuntimeHoldReason
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
   * Lookup611: staging_kusama_runtime::RuntimeFreezeReason
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
   * Lookup783: frame_support::traits::tokens::misc::IdAmount<Id, Balance>
   **/
  FrameSupportTokensMiscIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup824: polkadot_runtime_parachains::shared::RelayParentInfo<primitive_types::H256>
   **/
  PolkadotRuntimeParachainsSharedRelayParentInfo: {
    relayParent: 'H256',
    stateRoot: 'H256',
    claimQueue: 'BTreeMap<u32, BTreeMap<u8, BTreeSet<u32>>>'
  },
  /**
   * Lookup836: polkadot_primitives::vstaging::ScrapedOnChainVotes<primitive_types::H256>
   **/
  PolkadotPrimitivesVstagingScrapedOnChainVotes: {
    session: 'u32',
    backingValidatorsPerCandidate: 'Vec<(PolkadotPrimitivesVstagingCandidateReceiptV2,Vec<(u32,PolkadotPrimitivesV8ValidityAttestation)>)>',
    disputes: 'Vec<PolkadotPrimitivesV8DisputeStatementSet>'
  },
  /**
   * Lookup970: staging_kusama_runtime::Runtime
   **/
  StagingKusamaRuntimeRuntime: 'Null',
  /**
   * Lookup994: polkadot_primitives::vstaging::CoreState<primitive_types::H256, N>
   **/
  PolkadotPrimitivesVstagingCoreState: {
    _enum: {
      Occupied: 'PolkadotPrimitivesVstagingOccupiedCore',
      Scheduled: 'PolkadotPrimitivesV8ScheduledCore',
      Free: 'Null'
    }
  },
  /**
   * Lookup995: polkadot_primitives::vstaging::OccupiedCore<primitive_types::H256, N>
   **/
  PolkadotPrimitivesVstagingOccupiedCore: {
    nextUpOnAvailable: 'Option<PolkadotPrimitivesV8ScheduledCore>',
    occupiedSince: 'u32',
    timeOutAt: 'u32',
    nextUpOnTimeOut: 'Option<PolkadotPrimitivesV8ScheduledCore>',
    availability: 'BitVec',
    groupResponsible: 'u32',
    candidateHash: 'H256',
    candidateDescriptor: 'PolkadotPrimitivesVstagingCandidateDescriptorV2'
  },
  /**
   * Lookup1007: polkadot_primitives::vstaging::CandidateEvent<primitive_types::H256>
   **/
  PolkadotPrimitivesVstagingCandidateEvent: {
    _enum: {
      CandidateBacked: '(PolkadotPrimitivesVstagingCandidateReceiptV2,Bytes,u32,u32)',
      CandidateIncluded: '(PolkadotPrimitivesVstagingCandidateReceiptV2,Bytes,u32,u32)',
      CandidateTimedOut: '(PolkadotPrimitivesVstagingCandidateReceiptV2,Bytes,u32)'
    }
  },
  /**
   * Lookup1023: polkadot_primitives::vstaging::async_backing::BackingState<primitive_types::H256, N>
   **/
  PolkadotPrimitivesVstagingAsyncBackingBackingState: {
    constraints: 'PolkadotPrimitivesV8AsyncBackingConstraints',
    pendingAvailability: 'Vec<PolkadotPrimitivesVstagingAsyncBackingCandidatePendingAvailability>'
  },
  /**
   * Lookup1033: polkadot_primitives::vstaging::async_backing::CandidatePendingAvailability<primitive_types::H256, N>
   **/
  PolkadotPrimitivesVstagingAsyncBackingCandidatePendingAvailability: {
    candidateHash: 'H256',
    descriptor: 'PolkadotPrimitivesVstagingCandidateDescriptorV2',
    commitments: 'PolkadotPrimitivesV8CandidateCommitments',
    relayParentNumber: 'u32',
    maxPovSize: 'u32'
  },
  /**
   * Lookup1084: staging_kusama_runtime::RuntimeError
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
