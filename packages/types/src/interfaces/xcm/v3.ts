// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types/index.js';

export const v3: DefinitionsTypes = {
  AssetIdV3: {
    _enum: {
      Concrete: 'MultiLocationV3',
      Abstract: 'Bytes'
    }
  },
  BodyIdV3: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  BodyPartV3: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>'
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  AssetInstanceV3: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  FungibilityV3: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'AssetInstanceV3'
    }
  },
  InteriorMultiLocationV3: 'JunctionsV3',
  JunctionV3: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<NetworkIdV3>',
        id: '[u8;32]'
      },
      AccountIndex64: {
        network: 'Option<NetworkIdV3>',
        index: 'Compact<u64>'
      },
      AccountKey20: {
        network: 'Option<NetworkIdV3>',
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
      GlobalConsensus: 'NetworkIdV3'
    }
  },
  JunctionsV3: {
    _enum: {
      Here: 'Null',
      X1: 'JunctionV3',
      X2: '(JunctionV3, JunctionV3)',
      X3: '(JunctionV3, JunctionV3, JunctionV3)',
      X4: '(JunctionV3, JunctionV3, JunctionV3, JunctionV3)',
      X5: '(JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3)',
      X6: '(JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3)',
      X7: '(JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3)',
      X8: '(JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3)'
    }
  },
  MaybeErrorCodeV3: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  MaxPalletsInfo: 'u32',
  MultiAssetV3: {
    id: 'AssetIdV3',
    fun: 'FungibilityV3'
  },
  MultiAssetsV3: 'Vec<MultiAssetV3>',
  MultiAssetFilterV3: {
    _enum: {
      Definite: 'MultiAssetsV3',
      Wild: 'WildMultiAssetV3'
    }
  },
  MultiLocationV3: {
    parents: 'u8',
    interior: 'JunctionsV3'
  },
  MaxPalletNameLen: 'u32',
  NetworkIdV3: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]'
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>'
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null',
      PolkadotBulletin: 'Null'
    }

  },
  OriginKindV3: 'OriginKindV2',
  PalletInfoV3: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  WildFungibilityV3: 'WildFungibilityV2',
  QueryResponseInfoV3: {
    destination: 'MultiLocationV3',
    queryId: 'Compact<u64>',
    maxWeight: 'WeightV2'
  },
  ResponseV3: {
    _enum: {
      Null: 'Null',
      Assets: 'MultiAssetsV3',
      ExecutionResult: 'Option<(u32,XcmErrorV3)>',
      Version: 'u32',
      PalletsInfo: 'Vec<PalletInfoV3>',
      DispatchResult: 'MaybeErrorCodeV3'
    }
  },
  XcmErrorV3: {
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
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'WeightV2',
      Barrier: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  ResponseV3Error: '(u32, XcmErrorV3)',
  ResponseV3Result: 'Option<(u32, ResponseV3Error)>',
  WeightLimitV3: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'WeightV2'
    }
  },
  InstructionV3: {
    _enum: {
      WithdrawAsset: 'MultiAssetsV3',
      ReserveAssetDeposited: 'MultiAssetsV3',
      ReceiveTeleportedAsset: 'MultiAssetsV3',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'ResponseV3',
        maxWeight: 'WeightV2',
        querier: 'Option<MultiLocationV3>'
      },
      TransferAsset: {
        assets: 'MultiAssetsV3',
        beneficiary: 'MultiLocationV3'
      },
      TransferReserveAsset: {
        assets: 'MultiAssetsV3',
        dest: 'MultiLocationV3',
        xcm: 'XcmV3'
      },
      Transact: {
        originKind: 'XcmOriginKind',
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
      DescendOrigin: 'JunctionsV3',
      ReportError: 'QueryResponseInfoV3',
      DepositAsset: {
        assets: 'MultiAssetFilterV3',
        beneficiary: 'MultiLocationV3'
      },
      DepositReserveAsset: {
        assets: 'MultiAssetFilterV3',
        dest: 'MultiLocationV3',
        xcm: 'XcmV3'
      },
      ExchangeAsset: {
        give: 'MultiAssetFilterV3',
        want: 'MultiAssetsV3',
        maximal: 'bool'
      },
      InitiateReserveWithdraw: {
        assets: 'MultiAssetFilterV3',
        reserve: 'MultiLocationV3',
        xcm: 'XcmV3'
      },
      InitiateTeleport: {
        assets: 'MultiAssetFilterV3',
        dest: 'MultiLocationV3',
        xcm: 'XcmV3'
      },
      ReportHolding: {
        responseInfo: 'QueryResponseInfoV3',
        assets: 'MultiAssetFilterV3'
      },
      BuyExecution: {
        fees: 'MultiAssetV3',
        weightLimit: 'WeightLimitV3'
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV3<RuntimeCall>',
      SetAppendix: 'XcmV3<RuntimeCall>',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'MultiAssetsV3',
        ticket: 'MultiLocationV3'
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'WeightV2'
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'MultiAssetsV3',
      ExpectAsset: 'MultiAssetsV3',
      ExpectOrigin: 'Option<MultiLocationV3>',
      ExpectError: 'Option<(u32, XcmErrorV3)>',
      ExpectTransactStatus: 'MaybeErrorCodeV3',
      QueryPallet: {
        moduleName: 'Vec<u8>',
        responseInfo: 'QueryResponseInfoV3'
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Vec<u8>',
        moduleName: 'Vec<u8>',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>'
      },
      ReportTransactStatus: 'QueryResponseInfoV3',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'JunctionV3',
      ExportMessage: {
        network: 'NetworkIdV3',
        destination: 'JunctionsV3',
        xcm: 'XcmV3'
      },
      LockAsset: {
        asset: 'MultiAssetV3',
        unlocker: 'MultiLocationV3'
      },
      UnlockAsset: {
        asset: 'MultiAssetV3',
        target: 'MultiLocationV3'
      },
      NoteUnlockable: {
        asset: 'MultiAssetV3',
        owner: 'MultiLocationV3'
      },
      RequestUnlock: {
        asset: 'MultiAssetV3',
        locker: 'MultiLocationV3'
      },
      SetFeesMode: {
        jitWithdraw: 'bool'
      },
      SetTopic: '[u8; 32]',
      ClearTopic: 'Null',
      AliasOrigin: 'MultiLocationV3',
      UnpaidExecution: {
        weightLimit: 'WeightLimitV3',
        checkOrigin: 'Option<MultiLocationV3>'
      }
    }
  },
  WildMultiAssetV3: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'AssetIdV3',
        fun: 'WildFungibilityV2'
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'AssetIdV3',
        fun: 'WildFungibilityV2',
        count: 'Compact<u32>'
      }
    }
  },
  VersionV3: 'u32',
  XcmV3: 'Vec<InstructionV3>'
};
