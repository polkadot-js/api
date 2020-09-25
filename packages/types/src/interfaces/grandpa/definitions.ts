// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {
    proveFinality: {
      description: 'Prove finality for the range (begin; end] hash.',
      params: [
        {
          name: 'begin',
          type: 'BlockHash'
        },
        {
          name: 'end',
          type: 'BlockHash'
        },
        {
          name: 'authoritiesSetId',
          type: 'u64',
          isOptional: true
        }
      ],
      type: 'Option<EncodedFinalityProofs>'
    },
    roundState: {
      description: 'Returns the state of the current best round state as well as the ongoing background rounds',
      params: [],
      type: 'ReportedRoundStates'
    },
    subscribeJustifications: {
      description: 'Subscribes to grandpa justifications',
      params: [],
      pubsub: [
        'justifications',
        'subscribeJustifications',
        'unsubscribeJustifications'
      ],
      type: 'JustificationNotification'
    }
  },
  types: {
    AuthorityIndex: 'u64',
    AuthorityList: 'Vec<NextAuthority>',
    AuthorityWeight: 'u64',
    EncodedFinalityProofs: 'Bytes',
    GrandpaEquivocation: {
      _enum: {
        Prevote: 'GrandpaEquivocationValue',
        Precommit: 'GrandpaEquivocationValue'
      }
    },
    GrandpaEquivocationProof: {
      setId: 'SetId',
      equivocation: 'GrandpaEquivocation'
    },
    GrandpaEquivocationValue: {
      roundNumber: 'u64',
      identity: 'AuthorityId',
      first: '(GrandpaPrevote, AuthoritySignature)',
      second: '(GrandpaPrevote, AuthoritySignature)'
    },
    GrandpaPrevote: {
      targetHash: 'Hash',
      targetNumber: 'BlockNumber'
    },
    JustificationNotification: 'Bytes',
    KeyOwnerProof: 'MembershipProof',
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
    Precommits: {
      currentWeight: 'u32',
      missing: 'BTreeSet<AuthorityId>'
    },
    Prevotes: {
      currentWeight: 'u32',
      missing: 'BTreeSet<AuthorityId>'
    },
    ReportedRoundStates: {
      setId: 'u32',
      best: 'RoundState',
      background: 'Vec<RoundState>'
    },
    RoundState: {
      round: 'u32',
      totalWeight: 'u32',
      thresholdWeight: 'u32',
      prevotes: 'Prevotes',
      precommits: 'Precommits'
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
