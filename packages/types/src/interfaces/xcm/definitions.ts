// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

const xcm = {
  XcmOrigin: {
    _enum: {
      Xcm: 'MultiLocation'
    }
  },
  Xcm: 'XcmV1',
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
  XcmV1: {
    _enum: {
      WithdrawAsset: {
        Vassets: 'MultiAssetsV1',
        effects: 'Vec<XcmOrderV1>'
      },
      ReserveAssetDeposit: {
        Vassets: 'MultiAssetsV1',
        effects: 'Vec<XcmOrderV1>'
      },
      ReceiveTeleportedAsset: {
        Vassets: 'MultiAssetsV1',
        effects: 'Vec<XcmOrderV1>'
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'ResponseV1'
      },
      TransferAsset: {
        Vassets: 'MultiAssetsV1',
        dest: 'MultiLocationV1'
      },
      TransferReserveAsset: {
        Vassets: 'MultiAssetsV1',
        dest: 'MultiLocationV1',
        effects: 'Vec<XcmOrderV1>'
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
        who: 'MultiLocationV1',
        message: 'XcmV1'
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
  XcmErrorV1: {
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
      CannotReachDestination: '(MultiLocationV1, XcmV1)',
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
      DestinationUnsupported: 'Null',
      RecursionLimitReached: 'Null'
    }
  },
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
      UnknownClaim: 'Null'
    }
  },
  XcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  }
};

const xmcOrder = {
  XcmOrder: 'XcmOrderV1',
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
  },
  XcmOrderV1: {
    _enum: {
      Noop: 'Null',
      DepositAsset: {
        assets: 'MultiAssetFilterV1',
        maxAssets: 'u32',
        beneficiary: 'MultiLocationV1'
      },
      DepositReserveAsset: {
        assets: 'MultiAssetFilterV1',
        maxAssets: 'u32',
        dest: 'MultiLocationV1',
        effects: 'Vec<XcmOrderV1>'
      },
      ExchangeAsset: {
        give: 'MultiAssetFilterV1',
        receive: 'MultiAssetsV1'
      },
      InitiateReserveWithdraw: {
        assets: 'MultiAssetFilterV1',
        reserve: 'MultiLocationV1',
        effects: 'Vec<XcmOrderV1>'
      },
      InitiateTeleport: {
        assets: 'MultiAssetFilterV1',
        dest: 'MultiLocationV1',
        effects: 'Vec<XcmOrderV1>'
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'MultiLocationV1',
        assets: 'MultiAssetFilterV1'
      },
      BuyExecution: {
        fees: 'MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        orders: 'Vec<XcmOrderV1>',
        instructions: 'Vec<XcmV1>'
      }
    }
  }
};

const multiAsset = {
  XcmAssetId: {
    _enum: {
      Concrete: 'MultiLocation',
      Abstract: 'Bytes'
    }
  },
  AssetInstance: 'AssetInstanceV1',
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
  AssetInstanceV1: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8; 4]',
      Array8: '[u8; 8]',
      Array16: '[u8; 16]',
      Array32: '[u8; 32]',
      Blob: 'Bytes'
    }
  },
  Fungibility: {
    _enum: {
      Fungible: 'u128',
      NonFungible: 'AssetInstance'
    }
  },
  InboundStatus: {
    _enum: ['Ok', 'Suspended']
  },
  OutboundStatus: {
    _enum: ['Ok', 'Suspended']
  },
  MultiAssetFilter: 'MultiAssetFilterV1',
  MultiAssetFilterV1: {
    _enum: {
      Definite: 'MultiAssetsV1',
      Wild: 'WildMultiAssetV1'
    }
  },
  MultiAsset: 'MultiAssetV1',
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
  MultiAssetV1: {
    id: 'XcmAssetId',
    fungibility: 'Fungibility'
  },
  MultiAssetV2: 'MultiAssetV1',
  MultiAssets: 'Vec<MultiAsset>',
  MultiAssetsV1: 'Vec<MultiAssetV1>',
  MultiAssetsV2: 'MultiAssetsV1',
  WildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  WildMultiAsset: 'WildMultiAssetV1',
  WildMultiAssetV1: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmAssetId',
        fungibility: 'WildFungibility'
      }
    }
  }
};

const location = {
  BodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Vec<u8>',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null'
    }
  },
  BodyPart: {
    _enum: {
      Voice: 'Null',
      Members: 'Compact<u32>',
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
  Junction: {
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
  MultiLocation: {
    _enum: {
      Here: 'Null',
      X1: 'Junction',
      X2: '(Junction, Junction)',
      X3: '(Junction, Junction, Junction)',
      X4: '(Junction, Junction, Junction, Junction)',
      X5: '(Junction, Junction, Junction, Junction, Junction)',
      X6: '(Junction, Junction, Junction, Junction, Junction, Junction)',
      X7: '(Junction, Junction, Junction, Junction, Junction, Junction, Junction)',
      X8: '(Junction, Junction, Junction, Junction, Junction, Junction, Junction, Junction)'
    }
  },
  NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Vec<u8>',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  }
};

export default {
  rpc: {},
  types: {
    ...location,
    ...multiAsset,
    ...xcm,
    ...xmcOrder,
    DoubleEncodedCall: {
      encoded: 'Vec<u8>'
    },
    XcmOriginKind: {
      _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
    },
    Response: 'ResponseV1',
    ResponseV0: {
      _enum: {
        Assets: 'Vec<MultiAssetV0>'
      }
    },
    ResponseV1: {
      _enum: {
        Assets: 'MultiAssetsV1'
      }
    },
    ResponseV2: {
      _enum: {
        Null: 'Null',
        Assets: 'MultiAssetsV2',
        ExecutionResult: 'ResponseV2Result'
      }
    },
    ResponseV2Error: '(u32, XcmErrorV2)',
    ResponseV2Result: 'Result<Null, ResponseV2Error>',
    MultiLocationV0: 'MultiLocation',
    MultiLocationV1: 'MultiLocation',
    MultiLocationV2: 'MultiLocation',
    Outcome: {
      _enum: {
        Complete: 'Weight',
        Incomplete: '(Weight, XcmErrorV0)',
        Error: 'XcmErrorV0'
      }
    },
    QueryId: 'u64',
    QueryStatus: {
      _enum: {
        Pending: {
          responder: 'VersionedMultiLocation',
          maybeNotify: 'Option<(u8, u8)>',
          timeout: 'BlockNumber'
        },
        Ready: {
          response: 'VersionedResponse',
          at: 'BlockNumber'
        }
      }
    },
    QueueConfigData: {
      suspendThreshold: 'u32',
      dropThreshold: 'u32',
      resumeThreshold: 'u32',
      thresholdWeight: 'Weight',
      weightRestrictDecay: 'Weight'
    },
    VersionedMultiAsset: {
      _enum: {
        V0: 'MultiAssetV0',
        V1: 'MultiAssetV1',
        V2: 'MultiAssetV2'
      }
    },
    VersionedMultiAssets: {
      _enum: {
        V0: 'Vec<MultiAssetV0>',
        V1: 'MultiAssetsV1',
        V2: 'MultiAssetsV2'
      }
    },
    VersionedMultiLocation: {
      _enum: {
        V0: 'MultiLocationV0',
        V1: 'MultiLocationV1',
        V2: 'MultiLocationV2'
      }
    },
    VersionedResponse: {
      V0: 'ResponseV0',
      V1: 'ResponseV1',
      V2: 'ResponseV2'
    },
    VersionedXcm: {
      _enum: {
        V0: 'XcmV0',
        V1: 'XcmV1'
      }
    }
  }
} as Definitions;
