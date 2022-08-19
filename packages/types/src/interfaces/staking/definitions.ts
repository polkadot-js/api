// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

import { objectSpread } from '@polkadot/util';

const deprecated = {
  Points: 'u32',
  EraPoints: {
    total: 'Points',
    individual: 'Vec<Points>'
  }
};

const phragmen = {
  CompactAssignments: 'CompactAssignmentsWith16',
  CompactAssignmentsWith16: {
    votes1: 'Vec<(NominatorIndexCompact, ValidatorIndexCompact)>',
    votes2: 'Vec<(NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact)>',
    votes3: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 2], ValidatorIndexCompact)>',
    votes4: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 3], ValidatorIndexCompact)>',
    votes5: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 4], ValidatorIndexCompact)>',
    votes6: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 5], ValidatorIndexCompact)>',
    votes7: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 6], ValidatorIndexCompact)>',
    votes8: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 7], ValidatorIndexCompact)>',
    votes9: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 8], ValidatorIndexCompact)>',
    votes10: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 9], ValidatorIndexCompact)>',
    votes11: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 10], ValidatorIndexCompact)>',
    votes12: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 11], ValidatorIndexCompact)>',
    votes13: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 12], ValidatorIndexCompact)>',
    votes14: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 13], ValidatorIndexCompact)>',
    votes15: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 14], ValidatorIndexCompact)>',
    votes16: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 15], ValidatorIndexCompact)>'
  },
  CompactAssignmentsWith24: {
    votes1: 'Vec<(NominatorIndexCompact, ValidatorIndexCompact)>',
    votes2: 'Vec<(NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact)>',
    votes3: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 2], ValidatorIndexCompact)>',
    votes4: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 3], ValidatorIndexCompact)>',
    votes5: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 4], ValidatorIndexCompact)>',
    votes6: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 5], ValidatorIndexCompact)>',
    votes7: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 6], ValidatorIndexCompact)>',
    votes8: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 7], ValidatorIndexCompact)>',
    votes9: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 8], ValidatorIndexCompact)>',
    votes10: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 9], ValidatorIndexCompact)>',
    votes11: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 10], ValidatorIndexCompact)>',
    votes12: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 11], ValidatorIndexCompact)>',
    votes13: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 12], ValidatorIndexCompact)>',
    votes14: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 13], ValidatorIndexCompact)>',
    votes15: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 14], ValidatorIndexCompact)>',
    votes16: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 15], ValidatorIndexCompact)>',
    votes17: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 16], ValidatorIndexCompact)>',
    votes18: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 17], ValidatorIndexCompact)>',
    votes19: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 18], ValidatorIndexCompact)>',
    votes20: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 19], ValidatorIndexCompact)>',
    votes21: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 20], ValidatorIndexCompact)>',
    votes22: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 21], ValidatorIndexCompact)>',
    votes23: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 22], ValidatorIndexCompact)>',
    votes24: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 23], ValidatorIndexCompact)>'
  },
  CompactAssignmentsTo265: 'CompactAssignmentsWith16',
  CompactAssignmentsTo257: {
    votes1: 'Vec<(NominatorIndex, [CompactScore; 0], ValidatorIndex)>',
    votes2: 'Vec<(NominatorIndex, [CompactScore; 1], ValidatorIndex)>',
    votes3: 'Vec<(NominatorIndex, [CompactScore; 2], ValidatorIndex)>',
    votes4: 'Vec<(NominatorIndex, [CompactScore; 3], ValidatorIndex)>',
    votes5: 'Vec<(NominatorIndex, [CompactScore; 4], ValidatorIndex)>',
    votes6: 'Vec<(NominatorIndex, [CompactScore; 5], ValidatorIndex)>',
    votes7: 'Vec<(NominatorIndex, [CompactScore; 6], ValidatorIndex)>',
    votes8: 'Vec<(NominatorIndex, [CompactScore; 7], ValidatorIndex)>',
    votes9: 'Vec<(NominatorIndex, [CompactScore; 8], ValidatorIndex)>',
    votes10: 'Vec<(NominatorIndex, [CompactScore; 9], ValidatorIndex)>',
    votes11: 'Vec<(NominatorIndex, [CompactScore; 10], ValidatorIndex)>',
    votes12: 'Vec<(NominatorIndex, [CompactScore; 11], ValidatorIndex)>',
    votes13: 'Vec<(NominatorIndex, [CompactScore; 12], ValidatorIndex)>',
    votes14: 'Vec<(NominatorIndex, [CompactScore; 13], ValidatorIndex)>',
    votes15: 'Vec<(NominatorIndex, [CompactScore; 14], ValidatorIndex)>',
    votes16: 'Vec<(NominatorIndex, [CompactScore; 15], ValidatorIndex)>'
  },
  CompactScore: '(ValidatorIndex, OffchainAccuracy)',
  CompactScoreCompact: '(ValidatorIndexCompact, OffchainAccuracyCompact)',
  ElectionCompute: {
    // in previous versions the last entry was "AuthorityId"
    // (since no data attached, and it is via SCALE can rename)
    _enum: ['OnChain', 'Signed', 'Unsigned']
  },
  ElectionPhase: {
    _enum: {
      Off: null,
      Signed: null,
      Unsigned: '(bool, BlockNumber)',
      Emergency: null
    }
  },
  ElectionResult: {
    compute: 'ElectionCompute',
    slotStake: 'Balance',
    electedStashes: 'Vec<AccountId>',
    exposures: 'Vec<(AccountId, Exposure)>'
  },
  ElectionScore: '[u128; 3]',
  ElectionSize: {
    validators: 'Compact<ValidatorIndex>',
    nominators: 'Compact<NominatorIndex>'
  },
  ElectionStatus: {
    _enum: {
      Close: 'Null',
      Open: 'BlockNumber'
    }
  },
  ExtendedBalance: 'u128',
  RawSolution: 'RawSolutionWith16',
  RawSolutionWith16: {
    compact: 'CompactAssignmentsWith16',
    score: 'ElectionScore',
    round: 'u32'
  },
  RawSolutionWith24: {
    compact: 'CompactAssignmentsWith24',
    score: 'ElectionScore',
    round: 'u32'
  },
  RawSolutionTo265: 'RawSolutionWith16',
  ReadySolution: {
    supports: 'SolutionSupports',
    score: 'ElectionScore',
    compute: 'ElectionCompute'
  },
  RoundSnapshot: {
    voters: 'Vec<(AccountId, VoteWeight, Vec<AccountId>)>',
    targets: 'Vec<AccountId>'
  },
  SeatHolder: {
    who: 'AccountId',
    stake: 'Balance',
    deposit: 'Balance'
  },
  SignedSubmission: {
    _fallback: 'SignedSubmissionTo276',
    who: 'AccountId',
    deposit: 'Balance',
    solution: 'RawSolution',
    reward: 'Balance'
  },
  SignedSubmissionTo276: {
    who: 'AccountId',
    deposit: 'Balance',
    solution: 'RawSolution'
  },
  SignedSubmissionOf: 'SignedSubmission',
  SolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  SolutionSupport: {
    total: 'ExtendedBalance',
    voters: 'Vec<(AccountId, ExtendedBalance)>'
  },
  SolutionSupports: 'Vec<(AccountId, SolutionSupport)>',
  Supports: 'SolutionSupports',
  SubmissionIndicesOf: 'BTreeMap<ElectionScore, u32>',
  Voter: {
    votes: 'Vec<AccountId>',
    stake: 'Balance',
    deposit: 'Balance'
  },
  VoteWeight: 'u64'
};

export default {
  rpc: {},
  types: objectSpread({}, deprecated, phragmen, {
    ActiveEraInfo: {
      index: 'EraIndex',
      start: 'Option<Moment>'
    },
    EraIndex: 'u32',
    EraRewardPoints: {
      total: 'RewardPoint',
      individual: 'BTreeMap<AccountId, RewardPoint>'
    },
    EraRewards: {
      total: 'u32',
      rewards: 'Vec<u32>'
    },
    Exposure: {
      total: 'Compact<Balance>',
      own: 'Compact<Balance>',
      others: 'Vec<IndividualExposure>'
    },
    Forcing: {
      _enum: [
        'NotForcing',
        'ForceNew',
        'ForceNone',
        'ForceAlways'
      ]
    },
    IndividualExposure: {
      who: 'AccountId',
      value: 'Compact<Balance>'
    },
    KeyType: 'AccountId',
    MomentOf: 'Moment',
    Nominations: {
      targets: 'Vec<AccountId>',
      submittedIn: 'EraIndex',
      suppressed: 'bool'
    },
    NominatorIndex: 'u32',
    NominatorIndexCompact: 'Compact<NominatorIndex>',
    OffchainAccuracy: 'PerU16',
    OffchainAccuracyCompact: 'Compact<OffchainAccuracy>',
    PhragmenScore: '[u128; 3]',
    Points: 'u32',
    RewardDestination: {
      _enum: {
        Staked: 'Null',
        Stash: 'Null',
        Controller: 'Null',
        Account: 'AccountId',
        None: 'Null'
      }
    },
    RewardPoint: 'u32',
    SlashJournalEntry: {
      who: 'AccountId',
      amount: 'Balance',
      ownSlash: 'Balance'
    },
    SlashingSpansTo204: {
      spanIndex: 'SpanIndex',
      lastStart: 'EraIndex',
      prior: 'Vec<EraIndex>'
    },
    SlashingSpans: {
      spanIndex: 'SpanIndex',
      lastStart: 'EraIndex',
      lastNonzeroSlash: 'EraIndex',
      prior: 'Vec<EraIndex>'
    },
    SpanIndex: 'u32',
    SpanRecord: {
      slashed: 'Balance',
      paidOut: 'Balance'
    },
    StakingLedgerTo223: {
      stash: 'AccountId',
      total: 'Compact<Balance>',
      active: 'Compact<Balance>',
      unlocking: 'Vec<UnlockChunk>'
    },
    StakingLedgerTo240: {
      _fallback: 'StakingLedgerTo223',
      stash: 'AccountId',
      total: 'Compact<Balance>',
      active: 'Compact<Balance>',
      unlocking: 'Vec<UnlockChunk>',
      lastReward: 'Option<EraIndex>'
    },
    StakingLedger: {
      stash: 'AccountId',
      total: 'Compact<Balance>',
      active: 'Compact<Balance>',
      unlocking: 'Vec<UnlockChunk>',
      claimedRewards: 'Vec<EraIndex>'
    },
    UnappliedSlashOther: '(AccountId, Balance)',
    UnappliedSlash: {
      validator: 'AccountId',
      own: 'Balance',
      others: 'Vec<UnappliedSlashOther>',
      reporters: 'Vec<AccountId>',
      payout: 'Balance'
    },
    UnlockChunk: {
      value: 'Compact<Balance>',
      era: 'Compact<BlockNumber>'
    },
    ValidatorIndex: 'u16',
    ValidatorIndexCompact: 'Compact<ValidatorIndex>',
    ValidatorPrefs: 'ValidatorPrefsWithBlocked',
    ValidatorPrefsWithCommission: {
      commission: 'Compact<Perbill>'
    },
    ValidatorPrefsWithBlocked: {
      commission: 'Compact<Perbill>',
      blocked: 'bool'
    },
    ValidatorPrefsTo196: {
      validatorPayment: 'Compact<Balance>'
    },
    ValidatorPrefsTo145: {
      unstakeThreshold: 'Compact<u32>',
      validatorPayment: 'Compact<Balance>'
    }
  })
} as Definitions;
