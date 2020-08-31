// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  Address: 'AccountId',
  Keys: 'SessionKeys5',
  LookupSource: 'AccountId',
  ProxyType: {
    // was: SudoBalances
    _enum: ['Any', 'NonTransfer', 'Staking', 'Unused', 'IdentityJudgement']
  }
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [1, 2],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RewardDestination: 'RewardDestinationTo257',
      Weight: 'u32'
    }
  },
  {
    minmax: [3, 22],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      OpenTip: 'OpenTipTo225',
      RewardDestination: 'RewardDestinationTo257'
    }
  },
  {
    minmax: [23, 42],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      RewardDestination: 'RewardDestinationTo257'
    }
  },
  {
    minmax: [43, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
