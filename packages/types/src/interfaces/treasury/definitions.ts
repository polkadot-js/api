// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    Bounty: {
      proposer: 'AccountId',
      value: 'Balance',
      fee: 'Balance',
      curatorDeposit: 'Balance',
      bond: 'Balance',
      status: 'BountyStatus'
    },
    BountyIndex: 'u32',
    BountyStatus: {
      _enum: {
        Proposed: 'Null',
        Approved: 'Null',
        Funded: 'Null',
        CuratorProposed: 'BountyStatusCuratorProposed',
        Active: 'BountyStatusActive',
        PendingPayout: 'BountyStatusPendingPayout'
      }
    },
    BountyStatusActive: {
      curator: 'AccountId',
      updateDue: 'BlockNumber'
    },
    BountyStatusCuratorProposed: {
      curator: 'AccountId'
    },
    BountyStatusPendingPayout: {
      curator: 'AccountId',
      beneficiary: 'AccountId',
      unlockAt: 'BlockNumber'
    },
    OpenTip: {
      reason: 'Hash',
      who: 'AccountId',
      finder: 'AccountId',
      deposit: 'Balance',
      closes: 'Option<BlockNumber>',
      tips: 'Vec<OpenTipTip>',
      findersFee: 'bool'
    },
    OpenTipTo225: {
      reason: 'Hash',
      who: 'AccountId',
      finder: 'Option<OpenTipFinderTo225>',
      closes: 'Option<BlockNumber>',
      tips: 'Vec<OpenTipTip>'
    },
    OpenTipFinderTo225: '(AccountId, Balance)',
    OpenTipTip: '(AccountId, Balance)',
    TreasuryProposal: {
      proposer: 'AccountId',
      value: 'Balance',
      beneficiary: 'AccountId',
      bond: 'Balance'
    }
  }
} as Definitions;
