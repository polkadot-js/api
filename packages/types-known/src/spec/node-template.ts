// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      Address: 'AccountId',
      LookupSource: 'AccountId'
    }
  }
];

export default versioned;
