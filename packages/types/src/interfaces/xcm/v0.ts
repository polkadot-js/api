// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types';

export const v0: DefinitionsTypes = {
  AssetInstanceV0: {
    _enum: {
      Undefined: 'Null',
      Index8: 'u8',
      Index16: 'Compact<u16>',
      Index32: 'Compact<u32>',
      Index64: 'Compact<u64>',
      Index128: 'Compact<u128>',
      Array4: '[u8; 4]',
      Array8: '[u8; 8]',
      Array16: '[u8; 16]',
      Array32: '[u8; 32]',
      Blob: 'Vec<u8>'
    }
  },
  MultiAssetV0: {
    _enum: {
      None: 'Null',
      All: 'Null',
      AllFungible: 'Null',
      AllNonFungible: 'Null',
      AllAbstractFungible: 'Vec<u8>',
      AllAbstractNonFungible: 'Vec<u8>',
      AllConcreteFungible: 'MultiLocationV0',
      AllConcreteNonFungible: 'MultiLocationV0',
      AbstractFungible: {
        id: 'Vec<u8>',
        instance: 'Compact<u128>'
      },
      AbstractNonFungible: {
        class: 'Vec<u8>',
        instance: 'AssetInstanceV0'
      },
      ConcreteFungible: {
        id: 'MultiLocationV0',
        amount: 'Compact<u128>'
      },
      ConcreteNonFungible: {
        class: 'MultiLocationV0',
        instance: 'AssetInstanceV0'
      }
    }
  },
  MultiLocationV0: 'MultiLocation',
  ResponseV0: {
    _enum: {
      Assets: 'Vec<MultiAssetV0>'
    }
  },
  XcmV0: {
    _enum: {
      WithdrawAsset: {
        assets: 'Vec<MultiAssetV0>',
        effects: 'Vec<XcmOrderV0>'
      },
      ReserveAssetDeposit: {
        assets: 'Vec<MultiAssetV0>',
        effects: 'Vec<XcmOrderV0>'
      },
      ReceiveTeleportedAsset: {
        assets: 'Vec<MultiAssetV0>',
        effects: 'Vec<XcmOrderV0>'
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'ResponseV0'
      },
      TransferAsset: {
        assets: 'Vec<MultiAssetV0>',
        dest: 'MultiLocationV0'
      },
      TransferReserveAsset: {
        assets: 'Vec<MultiAssetV0>',
        dest: 'MultiLocationV0',
        effects: 'Vec<XcmOrderV0>'
      },
      Transact: {
        originType: 'XcmOriginKind',
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
      RelayedFrom: {
        who: 'MultiLocationV0',
        message: 'XcmV0'
      }
    }
  },
  XcmErrorV0: {
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
      CannotReachDestination: '(MultiLocation, Xcm)',
      MultiLocationFull: 'Null',
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
      TooExpensive: 'Null'
    }
  },
  XcmOrderV0: {
    _enum: {
      Null: 'Null',
      DepositAsset: {
        assets: 'Vec<MultiAssetV0>',
        dest: 'MultiLocationV0'
      },
      DepositReserveAsset: {
        assets: 'Vec<MultiAssetV0>',
        dest: 'MultiLocationV0',
        effects: 'Vec<XcmOrderV0>'
      },
      ExchangeAsset: {
        give: 'Vec<MultiAssetV0>',
        receive: 'Vec<MultiAssetV0>'
      },
      InitiateReserveWithdraw: {
        assets: 'Vec<MultiAssetV0>',
        reserve: 'MultiLocationV0',
        effects: 'Vec<XcmOrderV0>'
      },
      InitiateTeleport: {
        assets: 'Vec<MultiAsset>',
        dest: 'MultiLocationV0',
        effects: 'Vec<XcmOrderV0>'
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'MultiLocationV0',
        assets: 'Vec<MultiAssetV0>'
      },
      BuyExecution: {
        fees: 'MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        xcm: 'Vec<XcmV0>'
      }
    }
  }
};
