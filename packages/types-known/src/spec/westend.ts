// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@polkadot/types/types';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [1, undefined],
    types: {
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId',
      Weight: 'u32'
    }
  }
];

export default versioned;
