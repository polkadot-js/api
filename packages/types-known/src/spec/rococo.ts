// Copyright 2017-2022 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

import { mapXcmTypes } from '@polkadot/types-create';
import { objectSpread } from '@polkadot/util';

// structs need to be in order
/* eslint-disable sort-keys */

const sharedTypes = {
  DispatchErrorModule: 'DispatchErrorModuleU8',
  FullIdentification: '()', // No staking, only session (as per config)
  Keys: 'SessionKeys7B',
  Weight: 'WeightV1'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 200],
    types: objectSpread({}, sharedTypes, {
      AccountInfo: 'AccountInfoWithDualRefCount',
      Address: 'AccountId',
      LookupSource: 'AccountId'
    })
  },
  {
    minmax: [201, 214],
    types: objectSpread({}, sharedTypes, {
      AccountInfo: 'AccountInfoWithDualRefCount'
    })
  },
  {
    minmax: [215, 228],
    types: objectSpread({}, sharedTypes, {
      Keys: 'SessionKeys6'
    })
  },
  {
    minmax: [229, 9099],
    types: objectSpread({}, sharedTypes, mapXcmTypes('V0'))
  },
  {
    minmax: [9100, 9105],
    types: objectSpread({}, sharedTypes, mapXcmTypes('V1'))
  },
  {
    // metadata v14
    minmax: [9106, 9299],
    types: {
      Weight: 'WeightV1'
    }
  },
  {
    // weight v2 introduction
    minmax: [9300, undefined],
    types: {
      Weight: 'WeightV2'
    }
  }
];

export default versioned;
