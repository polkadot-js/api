// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

const xcm = {
  XcmAssetEffects: {
    assets: 'Vec<MultiAsset>',
    effects: 'Vec<XcmOrder>'
  },
  XcmWithdrawAsset: 'XcmAssetEffects',
  XcmReserveAssetDeposit: 'XcmAssetEffects',
  XcmTeleportAsset: 'XcmAssetEffects',
  XcmQueryResponse: { queryId: 'Compact<u64>', response: 'XcmResponse' },
  XcmTransferAsset: { assets: 'Vec<MultiAsset>', dest: 'MultiLocation' },
  XcmTransferReserveAsset: { assets: 'Vec<MultiAsset>', dest: 'MultiLocation', effects: 'Vec<XcmOrder>' },
  XcmTransact: { originType: 'XcmOriginKind', requireWeightAtMost: 'u64', call: 'DoubleEncodedCall' },
  XcmHrmpNewChannelOpenRequest: { sender: 'Compact<u32>', maxMessageSize: 'Compact<u32>', maxCapacity: 'Compact<u32>' },
  XcmHrmpChannelAccepted: { recipient: 'Compact<u32>' },
  XcmHrmpChannelClosing: { initiator: 'Compact<u32>', sender: 'Compact<u32>', recipient: 'Compact<u32>' },
  XcmRelayedFrom: { who: 'MultiLocation', message: 'Xcm' },
  Xcm: {
    _enum: {
      WithdrawAsset: 'XcmWithdrawAsset',
      ReserveAssetDeposit: 'XcmReserveAssetDeposit',
      TeleportAsset: 'XcmTeleportAsset',
      QueryResponse: 'XcmQueryResponse',
      TransferAsset: 'XcmTransferAsset',
      TransferReserveAsset: 'XcmTransferReserveAsset',
      Transact: 'XcmTransact',
      HrmpNewChannelOpenRequest: 'XcmHrmpNewChannelOpenRequest',
      HrmpChannelAccepted: 'XcmHrmpChannelAccepted',
      HrmpChannelClosing: 'XcmHrmpChannelClosing',
      RelayedFrom: 'XcmRelayedFrom'
    }
  },
  VersionedXcm: {
    _enum: {
      V0: 'Xcm'
    }
  }
};

const xmcOrder = {
  XcmOrderDepositAsset: { assets: 'Vec<MultiAsset>', dest: 'MultiLocation' },
  XcmOrderDepositReserveAsset: { assets: 'Vec<MultiAsset>', dest: 'MultiLocation', effects: 'Vec<XcmOrder>' },
  XcmOrderExchangeAsset: { give: 'Vec<MultiAsset>', receive: 'Vec<MultiAsset>' },
  XcmOrderInitiateReserveWithdraw: { assets: 'Vec<MultiAsset>', reserve: 'MultiLocation', effects: 'Vec<XcmOrder>' },
  XcmOrderInitiateTeleport: { assets: 'Vec<MultiAsset>', dest: 'MultiLocation', effects: 'Vec<XcmOrder>' },
  XcmOrderQueryHolding: { queryId: 'Compact<u64>', dest: 'MultiLocation', assets: 'Vec<MultiAsset>' },
  XcmOrderBuyExecution: { fees: 'MultiAsset', weight: 'u64', debt: 'u64', haltOnError: 'bool', xcm: 'Vec<Xcm>' },
  XcmOrder: {
    _enum: {
      Null: 'Null',
      DepositAsset: 'XcmOrderDepositAsset',
      DepositReserveAsset: 'XcmOrderDepositReserveAsset',
      ExchangeAsset: 'XcmOrderExchangeAsset',
      InitiateReserveWithdraw: 'XcmOrderInitiateReserveWithdraw',
      InitiateTeleport: 'XcmOrderInitiateTeleport',
      QueryHolding: 'XcmOrderQueryHolding',
      BuyExecution: 'XcmOrderBuyExecution'
    }
  }
};

const multiAsset = {
  MultiAssetAbstractFungible: {
    id: 'Vec<u8>',
    instance: 'Compact<u128>'
  },
  MultiAssetAbstractNonFungible: {
    class: 'Vec<u8>',
    instance: 'AssetInstance'
  },
  MultiAssetConcreteFungible: {
    id: 'MultiLocation',
    amount: 'Compact<u128>'
  },
  MultiAssetConcreteNonFungible: {
    class: 'MultiLocation',
    instance: 'AssetInstance'
  },
  MultiAsset: {
    _enum: {
      None: 'Null',
      All: 'Null',
      AllFungible: 'Null',
      AllNonFungible: 'Null',
      AllAbstractFungible: 'Vec<u8>',
      AllAbstractNonFungible: 'Vec<u8>',
      AllConcreteFungible: 'MultiLocation',
      AllConcreteNonFungible: 'MultiLocation',
      AbstractFungible: 'MultiAssetAbstractFungible',
      AbstractNonFungible: 'MultiAssetAbstractNonFungible',
      ConcreteFungible: 'MultiAssetConcreteFungible',
      ConcreteNonFungible: 'MultiAssetConcreteNonFungible'
    }
  },
  VersionedMultiAsset: {
    _enum: {
      V0: 'MultiAsset'
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
      Fraction: 'BodyPartFraction',
      AtLeastProportion: 'BodyPartAtLeastProportion',
      MoreThanProportion: 'BodyPartMoreThanProportion'
    }
  },
  BodyPartFraction: { nom: 'Compact<u32>', denom: 'Compact<u32>' },
  BodyPartAtLeastProportion: { nom: 'Compact<u32>', denom: 'Compact<u32>' },
  BodyPartMoreThanProportion: { nom: 'Compact<u32>', denom: 'Compact<u32>' },
  AccountId32Junction: {
    network: 'NetworkId',
    id: 'AccountId'
  },
  AccountIndex64Junction: {
    network: 'NetworkId',
    index: 'Compact<u64>'
  },
  AccountKey20Junction: {
    network: 'NetworkId',
    index: '[u8; 20]'
  },
  PluralityJunction: {
    id: 'BodyId',
    part: 'BodyPart'
  },
  Junction: {
    _enum: {
      Parent: 'Null',
      Parachain: 'Compact<u32>',
      AccountId32: 'AccountId32Junction',
      AccountIndex64: 'AccountIndex64Junction',
      AccountKey20: 'AccountKey20Junction',
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Vec<u8>',
      OnlyChild: 'Null',
      Plurality: 'PluralityJunction'
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
        WeightLimitReached: 'Null',
        Wildcard: 'Null',
        TooMuchWeightRequired: 'Null',
        NotHoldingFees: 'Null',
        WeightNotComputable: 'Null',
        Barrier: 'Null',
        NotWithdrawable: 'Null',
        LocationCannotHold: 'Null'
      }
    },
    XcmOutcome: {
      _enum: {
        Complete: 'Weight',
        Incomplete: '(Weight, XcmError)',
        Error: 'XcmError'
      }
    },
    MultiLocation: {
      _enum: {
        Null: 'Null',
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
    VersionedMultiLocation: {
      _enum: {
        V0: 'MultiLocation'
      }
    },
    AssetInstance: {
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
    }
  }
} as Definitions;
