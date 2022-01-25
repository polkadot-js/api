// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { objectSpread } from '@polkadot/util';

// order important in structs... :)
/* eslint-disable sort-keys */

const SlotRange10Enum = ['ZeroZero', 'ZeroOne', 'ZeroTwo', 'ZeroThree', 'OneOne', 'OneTwo', 'OneThree', 'TwoTwo', 'TwoThree', 'ThreeThree'];

const SlotRangeEnum = ['ZeroZero', 'ZeroOne', 'ZeroTwo', 'ZeroThree', 'ZeroFour', 'ZeroFive', 'ZeroSix', 'ZeroSeven', 'OneOne', 'OneTwo', 'OneThree', 'OneFour', 'OneFive', 'OneSix', 'OneSeven', 'TwoTwo', 'TwoThree', 'TwoFour', 'TwoFive', 'TwoSix', 'TwoSeven', 'ThreeThree', 'ThreeFour', 'ThreeFive', 'ThreeSix', 'ThreeSeven', 'FourFour', 'FourFive', 'FourSix', 'FourSeven', 'FiveFive', 'FiveSix', 'FiveSeven', 'SixSix', 'SixSeven', 'SevenSeven'];

const oldTypes = {
  Bidder: {
    _enum: {
      New: 'NewBidder',
      Existing: 'ParaId'
    }
  },
  IncomingParachain: {
    _enum: {
      Unset: 'NewBidder',
      Fixed: 'IncomingParachainFixed',
      Deploy: 'IncomingParachainDeploy'
    }
  },
  IncomingParachainDeploy: {
    code: 'ValidationCode',
    initialHeadData: 'HeadData'
  },
  IncomingParachainFixed: {
    codeHash: 'Hash',
    codeSize: 'u32',
    initialHeadData: 'HeadData'
  },
  NewBidder: {
    who: 'AccountId',
    sub: 'SubId'
  },
  SubId: 'u32'
};

export default objectSpread({}, oldTypes, {
  AuctionIndex: 'u32',
  LeasePeriod: 'BlockNumber',
  LeasePeriodOf: 'BlockNumber',
  SlotRange10: {
    _enum: SlotRange10Enum
  },
  SlotRange: {
    _enum: SlotRangeEnum
  },
  WinningData10: `[WinningDataEntry; ${SlotRange10Enum.length}]`,
  WinningData: `[WinningDataEntry; ${SlotRangeEnum.length}]`,
  WinningDataEntry: 'Option<(AccountId, ParaId, BalanceOf)>',
  WinnersData10: 'Vec<WinnersDataTuple10>',
  WinnersData: 'Vec<WinnersDataTuple>',
  WinnersDataTuple10: '(AccountId, ParaId, BalanceOf, SlotRange10)',
  WinnersDataTuple: '(AccountId, ParaId, BalanceOf, SlotRange)'
});
