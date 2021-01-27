// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const sharedTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'MultiAddress',
  FullIdentification: '()', // No staking, only session (as per config)
  LookupSource: 'MultiAddress',
  Keys: 'SessionKeys6'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 9],
    types: {
      ...sharedTypes,
      Address: 'AccountId',
      CompactAssignments: 'CompactAssignmentsTo257',
      LookupSource: 'AccountId',
      RefCount: 'RefCountTo259',
      RewardDestination: 'RewardDestinationTo257',
      Keys: 'SessionKeys5'
    }
  },
  {
    minmax: [10, 12],
    types: {
      ...sharedTypes,
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId'
    }
  },
  {
    minmax: [13, 201],
    types: {
      ...sharedTypes,
      Address: 'AccountId',
      LookupSource: 'AccountId'
    }
  },
  {
    minmax: [202, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
