// Copyright 2017-2022 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

const sharedTypes = {
  CompactAssignments: 'CompactAssignmentsWith16',
  RawSolution: 'RawSolutionWith16',
  Keys: 'SessionKeys6',
  ProxyType: {
    _enum: {
      Any: 0,
      NonTransfer: 1,
      Governance: 2,
      Staking: 3,
      UnusedSudoBalances: 4,
      IdentityJudgement: 5,
      CancelProxy: 6,
      Auction: 7
    }
  }
};

const addrAccountIdTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  Keys: 'SessionKeys5',
  LookupSource: 'AccountId',
  ValidatorPrefs: 'ValidatorPrefsWithCommission'
};

// these are override types for Polkadot
const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 12],
    types: objectSpread({}, sharedTypes, addrAccountIdTypes, {
      CompactAssignments: 'CompactAssignmentsTo257',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259'
    })
  },
  {
    minmax: [13, 22],
    types: objectSpread({}, sharedTypes, addrAccountIdTypes, {
      CompactAssignments: 'CompactAssignmentsTo257',
      RefCount: 'RefCountTo259'
    })
  },
  {
    minmax: [23, 24],
    types: objectSpread({}, sharedTypes, addrAccountIdTypes, {
      RefCount: 'RefCountTo259'
    })
  },
  {
    minmax: [25, 27],
    types: objectSpread({}, sharedTypes, addrAccountIdTypes)
  },
  {
    minmax: [28, 29],
    types: objectSpread({}, sharedTypes, {
      AccountInfo: 'AccountInfoWithDualRefCount'
    })
  },
  {
    minmax: [30, 9109],
    types: objectSpread({}, sharedTypes)
  },
  {
    // metadata v14
    minmax: [9110, undefined],
    types: {}
  }
];

export default versioned;
