// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    AuctionIndex: 'U32',
    ParaId: 'U32',
    ParaIdOf: 'ParaId',
    SubId: 'U32',
    NewBidder: {
      who: 'AccountId',
      sub: 'SubId'
    },
    Bidder: {
      _enum: {
        New: 'NewBidder',
        Existing: 'ParaId'
      }
    },
    IncomingParachainDeploy: {
      code: 'Bytes',
      initialHeadData: 'Bytes'
    },
    IncomingParachainFixed: {
      codeHash: 'Hash',
      initialHeadData: 'Bytes'
    },
    IncomingParachain: {
      _enum: {
        Unset: 'NewBidder',
        Fixed: 'IncomingParachainFixed',
        Deploy: 'IncomingParachainDeploy'
      }
    },
    ParachainDispatchOrigin: {
      _enum: [
        'Signed',
        'Parachain'
      ]
    },
    SlotRange: {
      _enum: [
        'ZeroZero', // 0
        'ZeroOne', // 1,
        'ZeroTwo', // 2,
        'ZeroThree', // 3,
        'OneOne', // 4,
        'OneTwo', // 5,
        'OneThree', // 6,
        'TwoTwo', // 7,
        'TwoThree', // 8,
        'ThreeThree' // 9
      ]
    },
    UpwardMessage: {
      origin: 'ParachainDispatchOrigin',
      data: 'Bytes'
    },
    WinningDataEntry: '(AccountId, ParaIdOf, BalanceOf)',
    WinningData: '[WinningDataEntry; 10]'
  }
};
