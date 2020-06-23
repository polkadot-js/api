// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

const deprecated = {
  Points: 'u32',
  EraPoints: {
    total: 'Points',
    individual: 'Vec<Points>'
  }
};

export default {
  rpc: {},
  types: {
    ...deprecated,
    ActiveEraInfo: {
      index: 'EraIndex',
      start: 'Option<Moment>'
    },
    CompactAssignments: {
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
    ElectionCompute: {
      _enum: ['OnChain', 'Signed', 'Authority']
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
    OffchainAccuracy: 'PerU16',
    PerU16: 'u16',
    PhragmenScore: '[u128; 3]',
    Points: 'u32',
    RewardDestination: {
      _enum: [
        'Staked',
        'Stash',
        'Controller'
      ]
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
    ValidatorPrefs: {
      commission: 'Compact<Perbill>'
    },
    ValidatorPrefsTo196: {
      validatorPayment: 'Compact<Balance>'
    },
    ValidatorPrefsTo145: {
      unstakeThreshold: 'Compact<u32>',
      validatorPayment: 'Compact<Balance>'
    }
  }
} as Definitions;
