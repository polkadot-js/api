// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

// these are override types for Polkadot
const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 259],
    types: {
      AccountInfo: 'AccountInfoWithRefCount',
      Address: 'LookupSource',
      LookupSource: 'IndicesLookupSource'
    }
  },
  {
    minmax: [260, undefined],
    types: {
      AccountInfo: 'AccountInfoWithRefCount',
      Address: 'MultiAddress',
      LookupSource: 'MultiAddress'
    }
  }
];

export default versioned;
