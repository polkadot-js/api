// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    AuthorityWeight: 'u64',
    NextAuthority: '(SessionKey, u64)',
    PendingPause: {
      /// Block at which the intention to pause was scheduled.
      scheduledAt: 'BlockNumber',
      /// Number of blocks after which the change will be enacted.
      delay: 'BlockNumber'
    },
    PendingResume: {
      /// Block at which the intention to resume was scheduled.
      scheduledAt: 'BlockNumber',
      /// Number of blocks after which the change will be enacted.
      delay: 'BlockNumber'
    },
    StoredPendingChange: {
      scheduledAt: 'BlockNumber',
      delay: 'BlockNumber',
      nextAuthorities: 'Vec<NextAuthority>'
    },
    StoredState: {
      _enum: {
        /// The current authority set is live, and GRANDPA is enabled.
        Live: 'Null',
        /// There is a pending pause event which will be enacted at the given block height.
        PendingPause: 'PendingPause',
        /// The current GRANDPA authority set is paused.
        Paused: 'Null',
        /// There is a pending resume event which will be enacted at the given block height.
        PendingResume: 'PendingResume'
      }
    }
  }
};
