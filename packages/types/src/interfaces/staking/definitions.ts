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
      votes1: 'Vec<(ValidatorIndex, [CompactScore; 0], NominatorIndex)>',
      votes2: 'Vec<(ValidatorIndex, [CompactScore; 1], NominatorIndex)>',
      votes3: 'Vec<(ValidatorIndex, [CompactScore; 2], NominatorIndex)>',
      votes4: 'Vec<(ValidatorIndex, [CompactScore; 3], NominatorIndex)>',
      votes5: 'Vec<(ValidatorIndex, [CompactScore; 4], NominatorIndex)>',
      votes6: 'Vec<(ValidatorIndex, [CompactScore; 5], NominatorIndex)>',
      votes7: 'Vec<(ValidatorIndex, [CompactScore; 6], NominatorIndex)>',
      votes8: 'Vec<(ValidatorIndex, [CompactScore; 7], NominatorIndex)>',
      votes9: 'Vec<(ValidatorIndex, [CompactScore; 8], NominatorIndex)>',
      votes10: 'Vec<(ValidatorIndex, [CompactScore; 9], NominatorIndex)>',
      votes11: 'Vec<(ValidatorIndex, [CompactScore; 10], NominatorIndex)>',
      votes12: 'Vec<(ValidatorIndex, [CompactScore; 11], NominatorIndex)>',
      votes13: 'Vec<(ValidatorIndex, [CompactScore; 12], NominatorIndex)>',
      votes14: 'Vec<(ValidatorIndex, [CompactScore; 13], NominatorIndex)>',
      votes15: 'Vec<(ValidatorIndex, [CompactScore; 14], NominatorIndex)>',
      votes16: 'Vec<(ValidatorIndex, [CompactScore; 15], NominatorIndex)>'
    },
    CompactScore: '(u16, OffchainAccuracy)',
    ElectionCompute: {
      _enum: ['OnChain', 'Signed', 'Authority']
    },
    ElectionResult: {
      compute: 'ElectionCompute',
      slotStake: 'Balance',
      electedStashes: 'Vec<AccountId>',
      exposures: 'Vec<(AccountId, Exposure)>'
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
    ReleasesStaking: {
      _enum: ['V1_0_0', 'V2_0_0', 'V3_0_0']
    },
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
