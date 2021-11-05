// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

import { mapXcmTypes } from '../xcm';

const sharedTypes = {
  // 16 validators
  CompactAssignments: 'CompactAssignmentsWith16',
  RawSolution: 'RawSolutionWith16',
  // general
  Keys: 'SessionKeys6',
  ProxyType: {
    _enum: ['Any', 'NonTransfer', 'Staking', 'SudoBalances', 'IdentityJudgement', 'CancelProxy']
  }
};

const addrAccountIdTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  CompactAssignments: 'CompactAssignmentsWith16',
  LookupSource: 'AccountId',
  Keys: 'SessionKeys5',
  RawSolution: 'RawSolutionWith16',
  ValidatorPrefs: 'ValidatorPrefsWithCommission'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [1, 2],
    types: objectSpread({}, sharedTypes, addrAccountIdTypes, {
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Heartbeat: 'HeartbeatTo244',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      Weight: 'u32'
    })
  },
  {
    minmax: [3, 22],
    types: objectSpread({}, sharedTypes, addrAccountIdTypes, {
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Heartbeat: 'HeartbeatTo244',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259'
    })
  },
  {
    minmax: [23, 42],
    types: objectSpread({}, sharedTypes, addrAccountIdTypes, {
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Heartbeat: 'HeartbeatTo244',
      RefCount: 'RefCountTo259'
    })
  },
  {
    minmax: [43, 44],
    types: objectSpread({}, sharedTypes, addrAccountIdTypes, {
      DispatchInfo: 'DispatchInfoTo244',
      Heartbeat: 'HeartbeatTo244',
      RefCount: 'RefCountTo259'
    })
  },
  {
    minmax: [45, 47],
    types: objectSpread({}, sharedTypes, addrAccountIdTypes)
  },
  {
    minmax: [48, 49],
    types: objectSpread({}, sharedTypes, {
      AccountInfo: 'AccountInfoWithDualRefCount'
    })
  },
  {
    minmax: [50, 9099],
    types: objectSpread({}, sharedTypes, mapXcmTypes('V0'))
  },
  {
    minmax: [9100, 9105],
    types: objectSpread({}, sharedTypes, mapXcmTypes('V1'))
  },
  {
    // metadata v14
    minmax: [9106, undefined],
    types: objectSpread({}, sharedTypes)
  }
];

export default versioned;
