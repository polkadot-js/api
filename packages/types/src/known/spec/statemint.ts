// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '../../types';

import { objectSpread } from '@polkadot/util';

import { mapXcmTypes } from '../xcm';

const sharedTypes = {
  TAssetBalance: 'u128',
  ProxyType: {
    _enum: [
      'Any',
      'NonTransfer',
      'CancelProxy',
      'Assets',
      'AssetOwner',
      'AssetManager',
      'Staking'
    ]
  }
};

// these are override types for Statemine, Statemint, Westmint
const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 3],
    types: objectSpread({}, sharedTypes, mapXcmTypes('V0'))
  },
  {
    minmax: [4, 5],
    types: objectSpread({}, sharedTypes, mapXcmTypes('V1'))
  },
  {
    // metadata V14
    minmax: [500, undefined],
    types: {}
  }
];

export default versioned;
