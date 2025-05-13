// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types/index.js';

export const v5: DefinitionsTypes = {
  AssetIdV5: 'MultiLocationV5',
  AssetInstanceV5: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  // Maps to xcmV5::Asset but we keep the prefix 'Multi'
  // to keep consistency with the rest of the code base.
  MultiAssetV5: {
    id: 'AssetIdV5',
    fun: 'FungibilityV5'
  },
  MultiAssetsV5: 'Vec<MultiAssetV5>',
  WildMultiAssetV5: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'AssetIdV5',
        fun: 'WildFungibilityV5'
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'AssetIdV5',
        fun: 'WildFungibilityV5',
        count: 'Compact<u32>'
      }
    }
  },
  MultiAssetFilterV5: {
    _enum: {
      Definite: 'MultiAssetsV5',
      Wild: 'WildMultiAssetV5'
    }
  },
  MultiAssetTransferFilterV5: {
    _enum: {
      Teleport: 'MultiAssetFilterV5',
      ReserveDeposit: 'MultiAssetFilterV5',
      ReserveWithdraw: 'MultiAssetFilterV5'
    }
  },
  FungibilityV5: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'AssetInstanceV5'
    }
  },
  UncheckedFungibilityV5: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'AssetInstanceV5'
    }
  },
  WildFungibilityV5: 'WildFungibilityV2',
  JunctionV5: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<NetworkIdV5>',
        id: '[u8;32]'
      },
      AccountIndex64: {
        network: 'Option<NetworkIdV5>',
        index: 'Compact<u64>'
      },
      AccountKey20: {
        network: 'Option<NetworkIdV5>',
        key: '[u8;20]'
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]'
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'BodyIdV3',
        part: 'BodyPartV3'
      },
      GlobalConsensus: 'NetworkIdV5'
    }
  },
  NetworkIdV5: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]'
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>'
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null',
      PolkadotBulletin: 'Null'
    }
  },
  JunctionsV5: {
    _enum: {
      Here: 'Null',
      X1: '[JunctionV5;1]',
      X2: '[JunctionV5;2]',
      X3: '[JunctionV5;3]',
      X4: '[JunctionV5;4]',
      X5: '[JunctionV5;5]',
      X6: '[JunctionV5;6]',
      X7: '[JunctionV5;7]',
      X8: '[JunctionV5;8]'
    }
  },
  MultiLocationV5: {
    parents: 'u8',
    interior: 'JunctionsV5'
  },
  InteriorMultiLocationV5: 'JunctionsV5',
  XcmV5: 'Vec<InstructionV5>',
  PalletInfoV5: 'PalletInfoV3',
  ResponseV5: {
    _enum: {
      Null: 'Null',
      Assets: 'MultiAssetsV5',
      ExecutionResult: 'Option<(u32, XcmErrorV3)>',
      Version: 'u32',
      PalletsInfo: 'Vec<PalletInfoV5>',
      DispatchResult: 'MaybeErrorCodeV3'
    }
  },
  QueryResponseInfoV5: {
    destination: 'MultiLocationV5',
    queryId: 'Compact<u64>',
    maxWeight: 'WeightV2'
  },
  InstructionV5: {
    _enum: {
      WithdrawAsset: 'MultiAssetsV5',
      ReserveAssetDeposited: 'MultiAssetsV5',
      ReceiveTeleportedAsset: 'MultiAssetsV5',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'ResponseV5',
        maxWeight: 'WeightV2',
        querier: 'Option<MultiLocationV5>'
      },
      TransferAsset: {
        assets: 'MultiAssetsV5',
        beneficiary: 'MultiLocationV5'
      },
      TransferReserveAsset: {
        assets: 'MultiAssetsV5',
        dest: 'MultiLocationV5',
        xcm: 'XcmV5'
      },
      Transact: {
        originKind: 'OriginKindV4',
        requireWeightAtMost: 'WeightV2',
        call: 'DoubleEncodedCall'
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>'
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>'
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>'
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'InteriorMultiLocationV5',
      ReportError: 'QueryResponseInfoV4',
      DepositAsset: {
        assets: 'MultiAssetFilterV5',
        beneficiary: 'MultiLocationV5'
      },
      DepositReserveAsset: {
        assets: 'MultiAssetFilterV5',
        dest: 'MultiLocationV5',
        xcm: 'XcmV5'
      },
      ExchangeAsset: {
        give: 'MultiAssetFilterV5',
        want: 'MultiAssetsV5',
        maximal: 'bool'
      },
      InitiateReserveWithdraw: {
        assets: 'MultiAssetFilterV5',
        reserve: 'MultiLocationV5',
        xcm: 'XcmV5'
      },
      InitiateTeleport: {
        assets: 'MultiAssetFilterV5',
        dest: 'MultiLocationV5',
        xcm: 'XcmV5'
      },
      ReportHolding: {
        responseInfo: 'QueryResponseInfoV4',
        assets: 'MultiAssetFilterV5'
      },
      BuyExecution: {
        fees: 'MultiAssetV4',
        weightLimit: 'WeightLimitV3'
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV5',
      SetAppendix: 'XcmV5',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'MultiAssetsV5',
        ticket: 'MultiLocationV5'
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'WeightV2'
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'MultiAssetsV5',
      ExpectAsset: 'MultiAssetsV5',
      ExpectOrigin: 'Option<MultiLocationV5>',
      ExpectError: 'Option<(u32, XcmErrorV3)>',
      ExpectTransactStatus: 'MaybeErrorCodeV3',
      QueryPallet: {
        moduleName: 'Vec<u8>',
        responseInfo: 'QueryResponseInfoV4'
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Vec<u8>',
        moduleName: 'Vec<u8>',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>'
      },
      ReportTransactStatus: 'QueryResponseInfoV4',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'JunctionV5',
      ExportMessage: {
        network: 'NetworkIdV5',
        destination: 'InteriorMultiLocationV5',
        xcm: 'XcmV5'
      },
      LockAsset: {
        asset: 'MultiAssetV5',
        unlocker: 'MultiLocationV5'
      },
      UnlockAsset: {
        asset: 'MultiAssetV5',
        target: 'MultiLocationV5'
      },
      NoteUnlockable: {
        asset: 'MultiAssetV5',
        owner: 'MultiLocationV5'
      },
      RequestUnlock: {
        asset: 'MultiAssetV5',
        locker: 'MultiLocationV5'
      },
      SetFeesMode: {
        jitWithdraw: 'bool'
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'MultiLocationV5',
      UnpaidExecution: {
        weightLimit: 'WeightLimitV3',
        checkOrigin: 'Option<MultiLocationV5>'
      },
      PayFees: {
        asset: 'MultiAssetV5'
      },
      InitiateTransfer: {
        destination: 'MultiLocationV5',
        remoteFees: 'Option<MultiAssetTransferFilterV5>',
        preserveOrigin: 'bool',
        assets: 'Vec<MultiAssetTransferFilterV5>',
        remoteXcm: 'XcmV5'
      },
      ExecuteWithOrigin: {
        descendant_origin: 'Option<InteriorMultiLocationV5>',
        xcm: 'XcmV5'
      },
      SetHints: {
        hints: 'Vec<HintV5>'
      }
    }
  },
  HintV5: {
    _enum: {
      AssetClaimer: {
        location: 'MultiLocationV5'
      }
    }
  },
  XcmErrorV5: 'XcmErrorV3'
};
