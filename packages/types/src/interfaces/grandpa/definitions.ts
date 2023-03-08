// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { rpc } from './rpc.js';
import { runtime } from './runtime.js';

export default {
  rpc,
  runtime,
  types: {
    AuthorityIndex: 'u64',
    AuthorityList: 'Vec<NextAuthority>',
    AuthoritySet: {
      currentAuthorities: 'AuthorityList',
      setId: 'u64',
      pendingStandardChanges: 'ForkTreePendingChange',
      pendingForcedChanges: 'Vec<PendingChange>',
      authoritySetChanges: 'AuthoritySetChanges'
    },
    ForkTreePendingChange: {
      roots: 'Vec<ForkTreePendingChangeNode>',
      bestFinalizedNumber: 'Option<BlockNumber>'
    },
    ForkTreePendingChangeNode: {
      hash: 'BlockHash',
      number: 'BlockNumber',
      data: 'PendingChange', // actual data, here PendingChange
      children: 'Vec<ForkTreePendingChangeNode>'
    },
    AuthoritySetChange: '(U64, BlockNumber)',
    AuthoritySetChanges: 'Vec<AuthoritySetChange>',
    AuthorityWeight: 'u64',
    DelayKind: {
      _enum: {
        Finalized: 'Null',
        Best: 'DelayKindBest'
      }
    },
    DelayKindBest: {
      medianLastFinalized: 'BlockNumber'
    },
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
    GrandpaCommit: {
      targetHash: 'BlockHash',
      targetNumber: 'BlockNumber',
      precommits: 'Vec<GrandpaSignedPrecommit>'
    },
    GrandpaPrecommit: {
      targetHash: 'BlockHash',
      targetNumber: 'BlockNumber'
    },
    GrandpaSignedPrecommit: {
      precommit: 'GrandpaPrecommit',
      signature: 'AuthoritySignature',
      id: 'AuthorityId'
    },
    GrandpaJustification: {
      round: 'u64',
      commit: 'GrandpaCommit',
      votesAncestries: 'Vec<Header>'
    },
    JustificationNotification: 'Bytes',
    KeyOwnerProof: 'MembershipProof',
    NextAuthority: '(AuthorityId, AuthorityWeight)',
    PendingChange: {
      nextAuthorities: 'AuthorityList',
      delay: 'BlockNumber',
      canonHeight: 'BlockNumber',
      canonHash: 'BlockHash',
      delayKind: 'DelayKind'
    },
    PendingPause: {
      scheduledAt: 'BlockNumber',
      delay: 'BlockNumber'
    },
    PendingResume: {
      scheduledAt: 'BlockNumber',
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
        Live: 'Null',
        PendingPause: 'PendingPause',
        Paused: 'Null',
        PendingResume: 'PendingResume'
      }
    }
  }
} as Definitions;
