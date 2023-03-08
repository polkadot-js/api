// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types/index.js';

export const v0: DefinitionsTypes = {
  FungibilityV0: 'FungibilityV1',
  WildFungibilityV0: 'WildFungibilityV1',
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
  JunctionV0: {
    _enum: {
      Parent: 'Null',
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'NetworkId',
        id: 'AccountId'
      },
      AccountIndex64: {
        network: 'NetworkId',
        index: 'Compact<u64>'
      },
      AccountKey20: {
        network: 'NetworkId',
        key: '[u8; 20]'
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Vec<u8>',
      OnlyChild: 'Null',
      Plurality: {
        id: 'BodyId',
        part: 'BodyPart'
      }
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
  MultiLocationV0: {
    _enum: {
      Here: 'Null',
      X1: 'JunctionV0',
      X2: '(JunctionV0, JunctionV0)',
      X3: '(JunctionV0, JunctionV0, JunctionV0)',
      X4: '(JunctionV0, JunctionV0, JunctionV0, JunctionV0)',
      X5: '(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)',
      X6: '(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)',
      X7: '(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)',
      X8: '(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)'
    }
  },
  OriginKindV0: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
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
      TooExpensive: 'Null',
      AssetNotFound: 'Null',
      RecursionLimitReached: 'Null'
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
        assets: 'Vec<MultiAssetV0>',
        dest: 'MultiLocationV0',
        effects: 'Vec<XcmOrderV0>'
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'MultiLocationV0',
        assets: 'Vec<MultiAssetV0>'
      },
      BuyExecution: {
        fees: 'MultiAssetV0',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        xcm: 'Vec<XcmV0>'
      }
    }
  }
};
