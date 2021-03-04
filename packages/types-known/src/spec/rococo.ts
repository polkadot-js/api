// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const sharedTypes = {
  AccountInfo: 'AccountInfoWithDualRefCount',
  Address: 'MultiAddress',
  FullIdentification: '()', // No staking, only session (as per config)
  LookupSource: 'MultiAddress',
  Keys: 'SessionKeys6'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 200],
    types: {
      ...sharedTypes,
      Address: 'AccountId',
      LookupSource: 'AccountId'
    }
  },
  {
    minmax: [201, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
