// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { objectSpread } from '@polkadot/util';

// order important in structs... :)
/* eslint-disable sort-keys */

const SLOT_RANGE_COUNT = 10;

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
  SlotRange: {
    _enum: ['ZeroZero', 'ZeroOne', 'ZeroTwo', 'ZeroThree', 'OneOne', 'OneTwo', 'OneThree', 'TwoTwo', 'TwoThree', 'ThreeThree']
  },
  WinningData: `[WinningDataEntry; ${SLOT_RANGE_COUNT}]`,
  WinningDataEntry: 'Option<(AccountId, ParaId, BalanceOf)>',
  WinnersData: 'Vec<WinnersDataTuple>',
  WinnersDataTuple: '(AccountId, ParaId, BalanceOf, SlotRange)'
});
