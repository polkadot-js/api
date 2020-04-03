// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    Bid: {
      who: 'AccountId',
      kind: 'BidKind',
      value: 'Balance'
    },
    BidKind: {
      _enum: {
        Deposit: 'Balance',
        Vouch: '(AccountId, Balance)'
      }
    },
    // a society-specific Judgement (not the same as identity Judgement)
    SocietyJudgement: {
      _enum: ['Rebid', 'Reject', 'Approve']
    },
    // a society-specific Vote
    SocietyVote: {
      _enum: ['Skeptic', 'Reject', 'Approve']
    },
    StrikeCount: 'u32',
    VouchingStatus: {
      _enum: ['Vouching', 'Banned']
    }
  }
} as Definitions;
