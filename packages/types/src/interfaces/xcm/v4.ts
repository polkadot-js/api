// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types/index.js';

export const v4: DefinitionsTypes = {
  AssetIdV4: 'MultiLocationV4',
  AssetInstanceV4: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  FungibilityV4: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'AssetInstanceV4'
    }
  },
  UncheckedFungibilityV4: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'AssetInstanceV4'
    }
  },
  JunctionV4: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<NetworkIdV4>',
        id: '[u8;32]'
      },
      AccountIndex64: {
        network: 'Option<NetworkIdV4>',
        index: 'Compact<u64>'
      },
      AccountKey20: {
        network: 'Option<NetworkIdV4>',
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
      GlobalConsensus: 'NetworkIdV4'
    }
  },
  JunctionsV4: {
    _enum: {
      Here: 'Null',
      X1: '[JunctionV4;1]',
      X2: '[JunctionV4;2]',
      X3: '[JunctionV4;3]',
      X4: '[JunctionV4;4]',
      X5: '[JunctionV4;5]',
      X6: '[JunctionV4;6]',
      X7: '[JunctionV4;7]',
      X8: '[JunctionV4;8]'
    }
  },
  MaxPalletsInfo: 'u32',
  NetworkIdV4: 'NetworkIdV3',
  MultiAssetV4: {
    id: 'AssetIdV4',
    fun: 'FungibilityV4'
  },
  MultiAssetsV4: 'Vec<MultiAssetV4>',
  MultiAssetFilterV4: {
    _enum: {
      Definite: 'MultiAssetsV4',
      Wild: 'WildMultiAssetV4'
    }
  },
  MultiLocationV4: {
    parents: 'u8',
    interior: 'JunctionsV4'
  },
  OriginKindV4: 'XcmOriginKind',
  PalletInfoV4: 'PalletInfoV3',
  WildFungibilityV4: 'WildFungibilityV2',
  QueryResponseInfoV4: {
    destination: 'MultiLocationV4',
    queryId: 'Compact<u64>',
    maxWeight: 'WeightV2'
  },
  ResponseV4: {
    _enum: {
      Null: 'Null',
      Assets: 'MultiAssetsV4',
      ExecutionResult: 'Option<(u32, XcmErrorV3)>',
      Version: 'u32',
      PalletsInfo: 'Vec<PalletInfoV4>',
      DispatchResult: 'MaybeErrorCodeV3'
    }
  },
  InstructionV4: {
    _enum: {
      WithdrawAsset: 'MultiAssetsV4',
      ReserveAssetDeposited: 'MultiAssetsV4',
      ReceiveTeleportedAsset: 'MultiAssetsV4',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'ResponseV4',
        maxWeight: 'WeightV2',
        querier: 'Option<MultiLocationV4>'
      },
      TransferAsset: {
        assets: 'MultiAssetsV4',
        beneficiary: 'MultiLocationV4'
      },
      TransferReserveAsset: {
        assets: 'MultiAssetsV4',
        dest: 'MultiLocationV4',
        xcm: 'XcmV4'
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
      DescendOrigin: 'JunctionsV4',
      ReportError: 'QueryResponseInfoV4',
      DepositAsset: {
        assets: 'MultiAssetFilterV4',
        beneficiary: 'MultiLocationV4'
      },
      DepositReserveAsset: {
        assets: 'MultiAssetFilterV4',
        dest: 'MultiLocationV4',
        xcm: 'XcmV4'
      },
      ExchangeAsset: {
        give: 'MultiAssetFilterV4',
        want: 'MultiAssetsV4',
        maximal: 'bool'
      },
      InitiateReserveWithdraw: {
        assets: 'MultiAssetFilterV4',
        reserve: 'MultiLocationV4',
        xcm: 'XcmV4'
      },
      InitiateTeleport: {
        assets: 'MultiAssetFilterV4',
        dest: 'MultiLocationV4',
        xcm: 'XcmV4'
      },
      ReportHolding: {
        responseInfo: 'QueryResponseInfoV4',
        assets: 'MultiAssetFilterV4'
      },
      BuyExecution: {
        fees: 'MultiAssetV4',
        weightLimit: 'WeightLimitV3'
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV4',
      SetAppendix: 'XcmV4',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'MultiAssetsV4',
        ticket: 'MultiLocationV4'
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'WeightV2'
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'MultiAssetsV4',
      ExpectAsset: 'MultiAssetsV4',
      ExpectOrigin: 'Option<MultiLocationV4>',
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
      UniversalOrigin: 'JunctionV4',
      ExportMessage: {
        network: 'NetworkIdV4',
        destination: 'JunctionsV4',
        xcm: 'XcmV4'
      },
      LockAsset: {
        asset: 'MultiAssetV4',
        unlocker: 'MultiLocationV4'
      },
      UnlockAsset: {
        asset: 'MultiAssetV4',
        target: 'MultiLocationV4'
      },
      NoteUnlockable: {
        asset: 'MultiAssetV4',
        owner: 'MultiLocationV4'
      },
      RequestUnlock: {
        asset: 'MultiAssetV4',
        locker: 'MultiLocationV4'
      },
      SetFeesMode: {
        jitWithdraw: 'bool'
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'MultiLocationV4',
      UnpaidExecution: {
        weightLimit: 'WeightLimitV3',
        checkOrigin: 'Option<MultiLocationV4>'
      }
    }
  },
  OutcomeV4: {
    _enum: {
      Complete: {
        used: 'WeightV2'
      },
      Incomplete: {
        used: 'WeightV2',
        error: 'XcmErrorV3'
      },
      Error: {
        error: 'XcmErrorV3'
      }
    }
  },
  WildMultiAssetV4: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'AssetIdV4',
        fun: 'WildFungibilityV4'
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'AssetIdV4',
        fun: 'WildFungibilityV4',
        count: 'Compact<u32>'
      }
    }
  },
  VersionV4: 'u32',
  XcmV4: 'Vec<InstructionV4>',
  XcmErrorV4: 'XcmErrorV3'
};
