// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    EraIndex: 'u32',
    EraRewards: {
      total: 'u32',
      rewards: 'Vec<u32>'
    },
    IndividualExposure: {
      who: 'AccountId',
      value: 'Compact<Balance>'
    },
    Exposure: {
      total: 'Compact<Balance>',
      own: 'Compact<Balance>',
      others: 'Vec<IndividualExposure>'
    },
    MomentOf: 'Moment',
    RewardDestination: {
      _enum: [
        'Staked',
        'Stash',
        'Controller'
      ]
    },
    UnlockChunk: {
      value: 'Compact<Balance>',
      era: 'Compact<BlockNumber>'
    },
    StakingLedger: {
      stash: 'AccountId',
      total: 'Compact<Balance>',
      active: 'Compact<Balance>',
      unlocking: 'Vec<UnlockChunk>'
    },
    ValidatorPrefs: {
      unstakeThreshold: 'Compact<u32>',
      validatorPayment: 'Compact<Balance>'
    }
  }
};
