// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  Address: 'AccountId',
  Keys: 'SessionKeys5',
  LookupSource: 'AccountId',
  RewardDestination: 'RewardDestinationTo257'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257'
    }
  }
];

export default versioned;
