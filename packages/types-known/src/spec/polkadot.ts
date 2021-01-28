// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  AccountInfo: 'AccountInfoWithProviders',
  Address: 'MultiAddress',
  Keys: 'SessionKeys5',
  LookupSource: 'MultiAddress',
  ProxyType: {
    // was: SudoBalances
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'Unused', 'IdentityJudgement']
  }
};

const addrAccountIdTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  LookupSource: 'AccountId'
};

// these are override types for Polkadot
const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 12],
    types: {
      ...sharedTypes,
      ...addrAccountIdTypes,
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
      ...addrAccountIdTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      RefCount: 'RefCountTo259',
      RewardDestination: 'RewardDestinationTo257'
    }
  },
  {
    minmax: [23, 24],
    types: {
      ...sharedTypes,
      ...addrAccountIdTypes,
      RefCount: 'RefCountTo259'
    }
  },
  {
    minmax: [25, 27],
    types: {
      ...sharedTypes,
      ...addrAccountIdTypes
    }
  },
  {
    minmax: [28, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
