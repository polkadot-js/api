// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

// these are override types for Statemine, Statemint, Westmint
const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
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
      },
      AssetInstance: 'AssetInstanceV0',
      MultiAsset: 'MultiAssetV0',
      Xcm: 'XcmV0',
      XcmOrder: 'XcmOrderV0'
    }
  }
];

export default versioned;
