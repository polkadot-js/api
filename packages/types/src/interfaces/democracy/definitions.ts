// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    Conviction: {
      _enum: [
        // 0.1x votes, unlocked.
        'None',
        // 1x votes, locked for an enactment period following a successful vote.
        'Locked1x',
        // 2x votes, locked for 2x enactment periods following a successful vote.
        'Locked2x',
        // 3x votes, locked for 4x...
        'Locked3x',
        // 4x votes, locked for 8x...
        'Locked4x',
        // 5x votes, locked for 16x...
        'Locked5x',
        /// 6x votes, locked for 32x...
        'Locked6x'
      ]
    },
    PropIndex: 'u32',
    Proposal: 'Call',
    ReferendumIndex: 'u32',
    ReferendumInfo: {
      end: 'BlockNumber',
      proposalHash: 'Hash',
      threshold: 'VoteThreshold',
      delay: 'BlockNumber'
    }
  }
};
