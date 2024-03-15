// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup121: staging_kusama_runtime::SessionKeys
   **/
  StagingKusamaRuntimeSessionKeys: {
    grandpa: 'SpConsensusGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    paraValidator: 'PolkadotPrimitivesV6ValidatorAppPublic',
    paraAssignment: 'PolkadotPrimitivesV6AssignmentAppPublic',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic',
    beefy: 'SpConsensusBeefyEcdsaCryptoPublic'
  },
  /**
   * Lookup148: staging_kusama_runtime::OriginCaller
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
   * Lookup150: staging_kusama_runtime::governance::origins::pallet_custom_origins::Origin
   **/
  StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
    _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'AuctionAdmin', 'LeaseAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'SmallTipper', 'BigTipper', 'SmallSpender', 'MediumSpender', 'BigSpender', 'WhitelistedCaller', 'FellowshipInitiates', 'Fellows', 'FellowshipExperts', 'FellowshipMasters', 'Fellowship1Dan', 'Fellowship2Dan', 'Fellowship3Dan', 'Fellowship4Dan', 'Fellowship5Dan', 'Fellowship6Dan', 'Fellowship7Dan', 'Fellowship8Dan', 'Fellowship9Dan', 'WishForChange']
  },
  /**
   * Lookup224: staging_kusama_runtime::ProxyType
   **/
  StagingKusamaRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'IdentityJudgement', 'CancelProxy', 'Auction', 'Society', 'NominationPools']
  },
  /**
   * Lookup234: staging_kusama_runtime::NposCompactSolution24
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
   * Lookup391: polkadot_runtime_parachains::assigner_on_demand::pallet::Call<T>
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
   * Lookup399: polkadot_runtime_parachains::coretime::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsCoretimePalletCall: {
    _enum: {
      __Unused0: 'Null',
      request_core_count: {
        count: 'u16',
      },
      __Unused2: 'Null',
      __Unused3: 'Null',
      assign_core: {
        core: 'u16',
        begin: 'u32',
        assignment: 'Vec<(PalletBrokerCoretimeInterfaceCoreAssignment,u16)>',
        endHint: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup543: polkadot_runtime_parachains::assigner_on_demand::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsAssignerOnDemandPalletEvent: {
    _enum: {
      OnDemandOrderPlaced: {
        paraId: 'u32',
        spotPrice: 'u128',
      },
      SpotTrafficSet: {
        traffic: 'u128'
      }
    }
  },
  /**
   * Lookup548: polkadot_runtime_parachains::coretime::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsCoretimePalletEvent: {
    _enum: {
      RevenueInfoRequested: {
        when: 'u32',
      },
      CoreAssigned: {
        core: 'u32'
      }
    }
  },
  /**
   * Lookup600: staging_kusama_runtime::RuntimeHoldReason
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
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
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
      StateTrieMigration: 'PalletStateTrieMigrationHoldReason'
    }
  },
  /**
   * Lookup607: staging_kusama_runtime::RuntimeFreezeReason
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
   * Lookup800: pallet_balances::types::IdAmount<Id, Balance>
   **/
  PalletBalancesIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup899: polkadot_runtime_parachains::assigner_on_demand::EnqueuedOrder
   **/
  PolkadotRuntimeParachainsAssignerOnDemandEnqueuedOrder: {
    paraId: 'u32'
  },
  /**
   * Lookup900: polkadot_runtime_parachains::assigner_on_demand::CoreAffinityCount
   **/
  PolkadotRuntimeParachainsAssignerOnDemandCoreAffinityCount: {
    coreIdx: 'u32',
    count: 'u32'
  },
  /**
   * Lookup901: polkadot_runtime_parachains::assigner_on_demand::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsAssignerOnDemandPalletError: {
    _enum: ['InvalidParaId', 'QueueFull', 'SpotPriceHigherThanMaxAmount']
  },
  /**
   * Lookup903: polkadot_runtime_parachains::assigner_coretime::Schedule<N>
   **/
  PolkadotRuntimeParachainsAssignerCoretimeSchedule: {
    assignments: 'Vec<(PalletBrokerCoretimeInterfaceCoreAssignment,u16)>',
    endHint: 'Option<u32>',
    nextSchedule: 'Option<u32>'
  },
  /**
   * Lookup904: polkadot_runtime_parachains::assigner_coretime::CoreDescriptor<N>
   **/
  PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor: {
    queue: 'Option<PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor>',
    currentWork: 'Option<PolkadotRuntimeParachainsAssignerCoretimeWorkState>'
  },
  /**
   * Lookup906: polkadot_runtime_parachains::assigner_coretime::QueueDescriptor<N>
   **/
  PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor: {
    first: 'u32',
    last: 'u32'
  },
  /**
   * Lookup908: polkadot_runtime_parachains::assigner_coretime::WorkState<N>
   **/
  PolkadotRuntimeParachainsAssignerCoretimeWorkState: {
    assignments: 'Vec<(PalletBrokerCoretimeInterfaceCoreAssignment,PolkadotRuntimeParachainsAssignerCoretimeAssignmentState)>',
    endHint: 'Option<u32>',
    pos: 'u16',
    step: 'u16'
  },
  /**
   * Lookup911: polkadot_runtime_parachains::assigner_coretime::AssignmentState
   **/
  PolkadotRuntimeParachainsAssignerCoretimeAssignmentState: {
    ratio: 'u16',
    remaining: 'u16'
  },
  /**
   * Lookup912: polkadot_runtime_parachains::assigner_coretime::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsAssignerCoretimePalletError: {
    _enum: ['AssignmentsEmpty', 'OverScheduled', 'UnderScheduled', 'DisallowedInsert', 'DuplicateInsert', 'AssignmentsNotSorted']
  },
  /**
   * Lookup926: polkadot_runtime_parachains::coretime::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsCoretimePalletError: {
    _enum: ['NotBroker']
  },
  /**
   * Lookup972: staging_kusama_runtime::Runtime
   **/
  StagingKusamaRuntimeRuntime: 'Null'
};
