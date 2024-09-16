// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types/index.js';

export const v2: DefinitionsTypes = {
  AssetIdV2: {
    _enum: {
      Concrete: 'MultiLocationV2',
      Abstract: 'Bytes'
    }
  },
  AssetInstanceV2: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },
  BodyIdV2: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
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
  BodyPartV2: {
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
  NetworkIdV2: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  JunctionV2: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'NetworkIdV2',
        id: '[u8; 32]'
      },
      AccountIndex64: {
        network: 'NetworkIdV2',
        index: 'Compact<u64>'
      },
      AccountKey20: {
        network: 'NetworkIdV2',
        key: '[u8; 20]'
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'BodyIdV2',
        part: 'BodyPartV2'
      }
    }
  },
  JunctionsV2: {
    _enum: {
      Here: 'Null',
      X1: 'JunctionV2',
      X2: '(JunctionV2, JunctionV2)',
      X3: '(JunctionV2, JunctionV2, JunctionV2)',
      X4: '(JunctionV2, JunctionV2, JunctionV2, JunctionV2)',
      X5: '(JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2)',
      X6: '(JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2)',
      X7: '(JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2)',
      X8: '(JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2)'
    }
  },
  FungibilityV2: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'AssetInstanceV2'
    }
  },
  InteriorMultiLocationV2: 'JunctionsV2',
  MultiAssetV2: {
    id: 'AssetIdV2',
    fun: 'FungibilityV2'
  },
  MultiAssetsV2: 'Vec<MultiAssetV2>',
  MultiAssetFilterV2: {
    _enum: {
      Definite: 'MultiAssetsV2',
      Wild: 'WildMultiAssetV2'
    }
  },
  MultiLocationV2: {
    parents: 'u8',
    interior: 'JunctionsV2'
  },
  OriginKindV2: {
    _enum: {
      Native: 'Null',
      SovereignAccount: 'Null',
      Superuser: 'Null',
      Xcm: 'Null'
    }
  },
  WildFungibilityV2: {
    _enum: {
      Fungible: 'Null',
      NonFungible: 'Null'
    }
  },
  ResponseV2: {
    _enum: {
      Null: 'Null',
      Assets: 'MultiAssetsV2',
      ExecutionResult: 'Option<(u32, XcmErrorV2)>',
      Version: 'u32'
    }
  },
  ResponseV2Error: '(u32, XcmErrorV2)',
  WeightLimitV2: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  InstructionV2: {
    _enum: {
      WithdrawAsset: 'MultiAssetsV2',
      ReserveAssetDeposited: 'MultiAssetsV2',
      ReceiveTeleportedAsset: 'MultiAssetsV2',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'ResponseV2',
        maxWeight: 'Compact<u64>'
      },
      TransferAsset: {
        assets: 'MultiAssetsV2',
        beneficiary: 'MultiLocationV2'
      },
      TransferReserveAsset: {
        assets: 'MultiAssetsV2',
        dest: 'MultiLocationV2',
        xcm: 'XcmV2'
      },
      Transact: {
        originType: 'XcmOriginKind',
        requireWeightAtMost: 'Compact<u64>',
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
      DescendOrigin: 'InteriorMultiLocationV2',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'MultiLocationV2',
        maxResponseWeight: 'Compact<u64>'
      },
      DepositAsset: {
        assets: 'MultiAssetFilterV2',
        maxAssets: 'Compact<u32>',
        beneficiary: 'MultiLocationV2'
      },
      DepositReserveAsset: {
        assets: 'MultiAssetFilterV2',
        maxAssets: 'Compact<u32>',
        dest: 'MultiLocationV2',
        xcm: 'XcmV2'
      },
      ExchangeAsset: {
        give: 'MultiAssetFilterV2',
        receive: 'MultiAssetsV2'
      },
      InitiateReserveWithdraw: {
        assets: 'MultiAssetFilterV2',
        reserve: 'MultiLocationV2',
        xcm: 'XcmV2'
      },
      InitiateTeleport: {
        assets: 'MultiAssetFilterV2',
        dest: 'MultiLocationV2',
        xcm: 'XcmV2'
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'MultiLocationV2',
        assets: 'MultiAssetFilterV2',
        maxResponseWeight: 'Compact<u64>'
      },
      BuyExecution: {
        fees: 'MultiAssetV2',
        weightLimit: 'WeightLimitV2'
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2<RuntimeCall>',
      SetAppendix: 'XcmV2<RuntimeCall>',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'MultiAssetsV2',
        ticket: 'MultiLocationV2'
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>'
      },
      UnsubscribeVersion: 'Null'
    }
  },
  WildMultiAssetV2: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'AssetIdV2',
        fun: 'WildFungibilityV2'
      }
    }
  },
  XcmV2: 'Vec<InstructionV2>',
  XcmErrorV2: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
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
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  }
};
