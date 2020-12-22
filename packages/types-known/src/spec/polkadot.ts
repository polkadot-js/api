// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  Keys: 'SessionKeys5',
  LookupSource: 'AccountId',
  ProxyType: {
    // was: SudoBalances
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'Unused', 'IdentityJudgement']
  }
};

// these are override types for Polkadot
const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 12],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      RewardDestination: 'RewardDestinationTo257'
    }
  },
  {
    minmax: [13, 22],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      RefCount: 'RefCountTo259',
      RewardDestination: 'RewardDestinationTo257'
    }
  },
  {
    minmax: [23, 24],
    types: {
      ...sharedTypes,
      RefCount: 'RefCountTo259'
    }
  },
  {
    minmax: [25, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
