// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    SessionIndex: 'u32',
    SessionKey: 'AuthorityId',
    SessionKeys: {
      ed25519: 'SessionKey'
    },
    Keys: 'SessionKeys',

    // this needs to be moved to primitives (runtime, support)
    KeyTypeId: 'u32',

    // this needs to be in staking
    EraRewards: {
      // Total number of points. Equals the sum of reward points for each validator.
      total: 'u32',
      // Reward at one index correspond to reward for validator in current_elected of this index. This this reward vec is only valid for one elected set.
      rewards: 'Vec<u32>'
    }
  }
};
