// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const sharedTypes = {
  FullIdentification: '()', // No staking, only session (as per config)
  Keys: 'SessionKeys7B'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 200],
    types: {
      ...sharedTypes,
      AccountInfo: 'AccountInfoWithDualRefCount',
      Address: 'AccountId',
      LookupSource: 'AccountId'
    }
  },
  {
    minmax: [201, 214],
    types: {
      ...sharedTypes,
      AccountInfo: 'AccountInfoWithDualRefCount'
    }
  },
  {
    minmax: [215, 228],
    types: {
      ...sharedTypes,
      Keys: 'SessionKeys6'
    }
  },
  {
    minmax: [229, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
