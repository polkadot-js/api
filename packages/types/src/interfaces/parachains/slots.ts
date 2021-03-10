// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

const SLOT_RANGE_COUNT = 10;

export default {
  AuctionIndex: 'u32',
  // Bidder: {
  //   _enum: {
  //     New: 'NewBidder',
  //     Existing: 'ParaId'
  //   }
  // },
  // IncomingParachain: {
  //   _enum: {
  //     Unset: 'NewBidder',
  //     Fixed: 'IncomingParachainFixed',
  //     Deploy: 'IncomingParachainDeploy'
  //   }
  // },
  // IncomingParachainDeploy: {
  //   code: 'ValidationCode',
  //   initialHeadData: 'HeadData'
  // },
  // IncomingParachainFixed: {
  //   codeHash: 'Hash',
  //   codeSize: 'u32',
  //   initialHeadData: 'HeadData'
  // },
  LeasePeriod: 'BlockNumber',
  LeasePeriodOf: 'BlockNumber',
  // NewBidder: {
  //   who: 'AccountId',
  //   sub: 'SubId'
  // },
  // NewBidderOption: 'Option<NewBidder>',
  SlotRange: {
    _enum: ['ZeroZero', 'ZeroOne', 'ZeroTwo', 'ZeroThree', 'OneOne', 'OneTwo', 'OneThree', 'TwoTwo', 'TwoThree', 'ThreeThree']
  },
  // SubId: 'u32',
  WinningData: `[WinningDataEntry; ${SLOT_RANGE_COUNT}]`,
  WinningDataEntry: 'Option<(AccountId, ParaId, BalanceOf)>',
  WinnersData: 'Vec<WinnersDataTuple>',
  WinnersDataTuple: '(AccountId, ParaId, BalanceOf, SlotRange)'
};
