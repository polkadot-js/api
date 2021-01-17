// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const sharedTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  FullIdentification: '()', // No staking, only session (as per config)
  LookupSource: 'AccountId',
  Keys: 'SessionKeys6'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 9],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      RefCount: 'RefCountTo259',
      RewardDestination: 'RewardDestinationTo257',
      Keys: 'SessionKeys5'
    }
  },
  {
    minmax: [10, 12],
    types: {
      ...sharedTypes,
      Keys: 'SessionKeys5'
    }
  },
  {
    minmax: [13, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
