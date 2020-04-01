// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    AuthorityIndex: 'u64',
    AuthorityList: 'Vec<NextAuthority>',
    AuthorityWeight: 'u64',
    NextAuthority: '(AuthorityId, AuthorityWeight)',
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
    SetId: 'u64',
    StoredPendingChange: {
      scheduledAt: 'BlockNumber',
      delay: 'BlockNumber',
      nextAuthorities: 'AuthorityList'
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
} as Definitions;
