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
  Xcm: {
    _enum: {
      WithdrawAsset: {
        assets: 'MultiAssets',
        effects: 'Vec<XcmOrderV0>'
      },
      ReserveAssetDeposit: {
        assets: 'MultiAssets',
        effects: 'Vec<XcmOrderV0>'
      },
      ReceiveTeleportedAsset: {
        assets: 'MultiAssets',
        effects: 'Vec<XcmOrderV0>'
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmResponse'
      },
      TransferAsset: {
        assets: 'MultiAssets',
        dest: 'MultiLocation'
      },
      TransferReserveAsset: {
        assets: 'MultiAssets',
        dest: 'MultiLocation',
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
        who: 'MultiLocation',
        message: 'Xcm'
      }
    }
  },
  XcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  },
  VersionedXcm: {
    _enum: {
      V0: 'Xcm'
    }
  }
};

const xmcOrder = {
  XcmOrder: 'XcmOrderV1',
  XcmOrderV0: {
    _enum: {
      Null: 'Null',
      DepositAsset: {
        assets: 'Vec<MultiAsset>',
        dest: 'MultiLocation'
      },
      DepositReserveAsset: {
        assets: 'Vec<MultiAsset>',
        dest: 'MultiLocation',
        effects: 'Vec<XcmOrderV0>'
      },
      ExchangeAsset: {
        give: 'Vec<MultiAsset>',
        receive: 'Vec<MultiAsset>'
      },
      InitiateReserveWithdraw: {
        assets: 'Vec<MultiAsset>',
        reserve: 'MultiLocation',
        effects: 'Vec<XcmOrderV0>'
      },
      InitiateTeleport: {
        assets: 'Vec<MultiAsset>',
        dest: 'MultiLocation',
        effects: 'Vec<XcmOrderV0>'
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'MultiLocation',
        assets: 'Vec<MultiAsset>'
      },
      BuyExecution: {
        fees: 'MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        xcm: 'Vec<Xcm>'
      }
    }
  },
  XcmOrderV1: {
    _enum: {
      Noop: 'Null',
      DepositAsset: {
        assets: 'MultiAssetFilter',
        maxAssets: 'u32',
        beneficiary: 'MultiLocation'
      },
      DepositReserveAsset: {
        assets: 'MultiAssetFilter',
        maxAssets: 'u32',
        dest: 'MultiLocation',
        effects: 'Vec<XcmOrderV1>'
      },
      ExchangeAsset: {
        give: 'MultiAssetFilter',
        receive: 'MultiAssets'
      },
      InitiateReserveWithdraw: {
        assets: 'MultiAssetFilter',
        reserve: 'MultiLocation',
        effects: 'Vec<XcmOrderV1>'
      },
      InitiateTeleport: {
        assets: 'MultiAssetFilter',
        dest: 'MultiLocation',
        effects: 'Vec<XcmOrderV1>'
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'MultiLocation',
        assets: 'MultiAssetFilter'
      },
      BuyExecution: {
        fees: 'MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        orders: 'Vec<XcmOrderV1>',
        instructions: 'Vec<Xcm>'
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
  MultiAssetFilter: {
    _enum: {
      Definite: 'MultiAssets',
      Wild: 'WildMultiAsset'
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
      AllConcreteFungible: 'MultiLocation',
      AllConcreteNonFungible: 'MultiLocation',
      AbstractFungible: {
        id: 'Vec<u8>',
        instance: 'Compact<u128>'
      },
      AbstractNonFungible: {
        class: 'Vec<u8>',
        instance: 'AssetInstance'
      },
      ConcreteFungible: {
        id: 'MultiLocation',
        amount: 'Compact<u128>'
      },
      ConcreteNonFungible: {
        class: 'MultiLocation',
        instance: 'AssetInstance'
      }
    }
  },
  MultiAssetV1: {
    id: 'XcmAssetId',
    fungibility: 'Fungibility'
  },
  MultiAssets: 'Vec<MultiAsset>',
  VersionedMultiAsset: {
    _enum: {
      V0: 'MultiAsset'
    }
  },
  WildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  WildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmAssetId',
        fungibility: 'WildFungibility'
      }
    }
  }
};

const junction = {
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
    ...junction,
    ...multiAsset,
    ...xcm,
    ...xmcOrder,
    DoubleEncodedCall: { encoded: 'Vec<u8>' },
    XcmOriginKind: {
      _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
    },
    XcmResponse: {
      _enum: {
        Assets: 'Vec<MultiAsset>'
      }
    },
    XcmError: {
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
        SendFailed: 'Null', // (#[codec(skip)] &'static str),
        CannotReachDestination: '(MultiLocation, Xcm)',
        MultiLocationFull: 'Null',
        FailedToDecode: 'Null',
        BadOrigin: 'Null',
        ExceedsMaxMessageSize: 'Null',
        FailedToTransactAsset: 'Null', // (#[codec(skip)] &'static str),
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
    Outcome: {
      _enum: {
        Complete: 'Weight',
        Incomplete: '(Weight, XcmError)',
        Error: 'XcmError'
      }
    },
    QueueConfigData: {
      suspendThreshold: 'u32',
      dropThreshold: 'u32',
      resumeThreshold: 'u32',
      thresholdWeight: 'Weight',
      weightRestrictDecay: 'Weight'
    },
    VersionedMultiLocation: {
      _enum: {
        V0: 'MultiLocation'
      }
    }
  }
} as Definitions;
