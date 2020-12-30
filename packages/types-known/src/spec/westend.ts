// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
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
      RefCount: 'RefCountTo259',
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
      RefCount: 'RefCountTo259',
      RewardDestination: 'RewardDestinationTo257'
    }
  },
  {
    minmax: [23, 42],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      RefCount: 'RefCountTo259',
      RewardDestination: 'RewardDestinationTo257'
    }
  },
  {
    minmax: [43, 44],
    types: {
      ...sharedTypes,
      RefCount: 'RefCountTo259'
    }
  },
  {
    minmax: [45, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
