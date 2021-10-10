// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

import { mapXcm } from '@polkadot/types/interfaces/xcm/definitions';

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
    types: {
      ...sharedTypes,
      ...mapXcm('V0')
    }
  },
  {
    // metadata V14
    minmax: [4, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
