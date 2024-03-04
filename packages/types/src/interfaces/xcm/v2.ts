// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types/index.js';

export const v2: DefinitionsTypes = {
  AssetInstanceV2: 'AssetInstanceV1',
  FungibilityV2: 'FungibilityV1',
  JunctionV2: 'JunctionV1',
  JunctionsV2: 'JunctionsV1',
  MultiAssetsV2: 'MultiAssetsV1',
  MultiAssetV2: 'MultiAssetV1',
  MultiAssetFilterV2: 'MultiAssetFilterV1',
  MultiLocationV2: 'MultiLocationV1',
  OriginKindV2: 'OriginKindV1',
  WildFungibilityV2: 'WildFungibilityV1',
  ResponseV2: {
    _enum: {
      Null: 'Null',
      Assets: 'MultiAssetsV2',
      ExecutionResult: 'ResponseV2Result'
    }
  },
  ResponseV2Error: '(u32, XcmErrorV2)',
  ResponseV2Result: 'Result<Null, ResponseV2Error>',
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
        originType: 'OriginKindV2',
        requireWeightAtMost: 'u64',
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
      DescendOrigin: 'InteriorMultiLocation',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'MultiLocationV2',
        maxResponseWeight: 'Compact<u64>'
      },
      DepositAsset: {
        assets: 'MultiAssetFilterV2',
        maxAssets: 'u32',
        beneficiary: 'MultiLocationV2'
      },
      DepositReserveAsset: {
        assets: 'MultiAssetFilterV2',
        maxAssets: 'u32',
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
        query_id: 'Compact<u64>',
        dest: 'MultiLocationV2',
        assets: 'MultiAssetFilterV2',
        maxResponse_Weight: 'Compact<u64>'
      },
      BuyExecution: {
        fees: 'MultiAssetV2',
        weightLimit: 'WeightLimitV2'
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2',
      SetAppendix: 'XcmV2',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'MultiAssetsV2',
        ticket: 'MultiLocationV2'
      },
      Trap: 'u64'
    }
  },
  WildMultiAssetV2: 'WildMultiAssetV1',
  XcmV2: 'Vec<InstructionV2>',
  XcmErrorV2: {
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
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      FailedToDecode: 'Null',
      BadOrigin: 'Null',
      ExceedsMaxMessageSize: 'Null',
      FailedToTransactAsset: 'Null',
      WeightLimitReached: 'Weight',
      Wildcard: 'Null',
      TooMuchWeightRequired: 'Null',
      NotHoldingFees: 'Null',
      WeightNotComputable: 'Null',
      Barrier: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      TooExpensive: 'Null',
      AssetNotFound: 'Null',
      DestinationUnsupported: 'Null',
      RecursionLimitReached: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownWeightRequired: 'Null',
      Trap: 'u64',
      UnknownClaim: 'Null',
      InvalidLocation: 'Null'
    }
  },
  XcmOrderV2: 'XcmOrderV1'
};
