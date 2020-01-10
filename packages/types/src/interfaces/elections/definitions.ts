// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    ApprovalFlag: 'u32',
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
        'Super majority approval',
        'Super majority rejection',
        'Simple majority'
      ]
    }
  }
};
