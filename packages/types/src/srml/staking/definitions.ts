// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    EraIndex: 'u32',
    EraRewards: {
      // Total number of points. Equals the sum of reward points for each validator.
      total: 'u32',
      // Reward at one index correspond to reward for validator in current_elected of this index. This this reward vec is only valid for one elected set.
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
    RewardDestination: {
      _enum: [
        // Pay into the stash account, increasing the amount at stake accordingly.
        'Staked',
        // Pay into the stash account, not increasing the amount at stake.
        'Stash',
        // Pay into the controller account.
        'Controller'
      ]
    },
    ValidatorPrefs: {
      unstakeThreshold: 'Compact<u32>',
      validatorPayment: 'Compact<Balance>'
    }
  }
};
