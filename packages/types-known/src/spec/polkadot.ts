// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  Keys: 'SessionKeys6',
  ProxyType: {
    _enum: {
      Any: 0,
      NonTransfer: 1,
      Governance: 2,
      Staking: 3,
      UnusedSudoBalances: 4,
      IdentityJudgement: 5,
      CancelProxy: 6
    }
  }
};

const addrAccountIdTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  CompactAssignments: 'CompactAssignmentsWith16',
  Keys: 'SessionKeys5',
  LookupSource: 'AccountId',
  RawSolution: 'RawSolutionWith16',
  ValidatorPrefs: 'ValidatorPrefsWithCommission'
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
      RefCount: 'RefCountTo259'
    }
  },
  {
    minmax: [13, 22],
    types: {
      ...sharedTypes,
      ...addrAccountIdTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      RefCount: 'RefCountTo259'
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
    minmax: [28, 29],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsWith16',
      RawSolution: 'RawSolutionWith16',
      AccountInfo: 'AccountInfoWithDualRefCount'
    }
  },
  {
    minmax: [30, 9000],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsWith16',
      RawSolution: 'RawSolutionWith16'
    }
  },
  {
    minmax: [9010, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
