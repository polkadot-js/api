// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const deprecated = {
  Points: 'u32',
  EraPoints: {
    total: 'Points',
    individual: 'Vec<Points>'
  }
};

export default {
  types: {
    ...deprecated,
    ActiveEraInfo: {
      index: 'EraIndex',
      start: 'Option<Moment>'
    },
    CompactAssignments: {
      votes1: 'Vec<(AccountId, [CompactScore; 0], AccountId)>',
      votes2: 'Vec<(AccountId, [CompactScore; 1], AccountId)>',
      votes3: 'Vec<(AccountId, [CompactScore; 2], AccountId)>',
      votes4: 'Vec<(AccountId, [CompactScore; 3], AccountId)>',
      votes5: 'Vec<(AccountId, [CompactScore; 4], AccountId)>',
      votes6: 'Vec<(AccountId, [CompactScore; 5], AccountId)>',
      votes7: 'Vec<(AccountId, [CompactScore; 6], AccountId)>',
      votes8: 'Vec<(AccountId, [CompactScore; 7], AccountId)>',
      votes9: 'Vec<(AccountId, [CompactScore; 8], AccountId)>',
      votes10: 'Vec<(AccountId, [CompactScore; 9], AccountId)>',
      votes11: 'Vec<(AccountId, [CompactScore; 10], AccountId)>',
      votes12: 'Vec<(AccountId, [CompactScore; 11], AccountId)>',
      votes13: 'Vec<(AccountId, [CompactScore; 12], AccountId)>',
      votes14: 'Vec<(AccountId, [CompactScore; 13], AccountId)>',
      votes15: 'Vec<(AccountId, [CompactScore; 14], AccountId)>',
      votes16: 'Vec<(AccountId, [CompactScore; 15], AccountId)>'
    },
    CompactScore: '(AccountId, u128)',
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
    PhragmenScore: '[u128; 3]',
    Points: 'u32',
    ReleasesStaking: {
      _enum: ['V1_0_0', 'V2_0_0']
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
    // TODO Enable as default when new staking payouts go live
    StakingLedger: {
      stash: 'AccountId',
      total: 'Compact<Balance>',
      active: 'Compact<Balance>',
      unlocking: 'Vec<UnlockChunk>',
      lastReward: 'Option<EraIndex>'
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
};
