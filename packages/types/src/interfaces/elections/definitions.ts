// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    ApprovalFlag: 'u32',
    DefunctVoter: {
      who: 'AccountId',
      voteCount: 'Compact<u32>',
      candidateCount: 'Compact<u32>'
    },
    Renouncing: {
      _enum: {
        Member: 'Null',
        RunnerUp: 'Null',
        Candidate: 'Compact<u32>'
      }
    },
    SetIndex: 'u32',
    Vote: 'GenericVote',
    VoteIndex: 'u32',
    VoterInfo: {
      lastActive: 'VoteIndex',
      lastWin: 'VoteIndex',
      pot: 'Balance',
      stake: 'Balance'
    },
    VoteThreshold: {
      _enum: [
        'Super Majority Approve',
        'Super Majority Against',
        'Simple Majority'
      ]
    }
  }
} as Definitions;
