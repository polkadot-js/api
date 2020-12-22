// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const sharedTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  Keys: 'SessionKeys5',
  LookupSource: 'AccountId'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 9],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      RefCount: 'RefCountTo259',
      RewardDestination: 'RewardDestinationTo257'
    }
  },
  {
    minmax: [10, undefined],
    types: {
      ...sharedTypes,
      ParaGenesisArgs: {
        genesisHead: 'Bytes',
        validationCode: 'Bytes',
        parachain: 'bool'
      }
    }
  }
];

export default versioned;
