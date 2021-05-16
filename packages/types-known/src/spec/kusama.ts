// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  Keys: 'SessionKeys6',
  ProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'IdentityJudgement', 'CancelProxy']
  }
};

const addrIndicesTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'LookupSource',
  CompactAssignments: 'CompactAssignmentsWith16',
  Keys: 'SessionKeys5',
  LookupSource: 'IndicesLookupSource',
  RawSolution: 'RawSolutionWith16',
  ValidatorPrefs: 'ValidatorPrefsWithCommission'
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

const versioned: OverrideVersionedType[] = [
  {
    // 1020 is first CC3
    minmax: [1019, 1031],
    types: {
      ...addrIndicesTypes,
      BalanceLock: 'BalanceLockTo212',
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchError: 'DispatchErrorTo198',
      DispatchInfo: 'DispatchInfoTo244',
      Keys: 'SessionKeys5',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      SlashingSpans: 'SlashingSpansTo204',
      StakingLedger: 'StakingLedgerTo223',
      Votes: 'VotesTo230',
      Weight: 'u32'
    }
  },
  {
    minmax: [1032, 1042],
    types: {
      ...addrIndicesTypes,
      BalanceLock: 'BalanceLockTo212',
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Keys: 'SessionKeys5',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      SlashingSpans: 'SlashingSpansTo204',
      StakingLedger: 'StakingLedgerTo223',
      Votes: 'VotesTo230',
      Weight: 'u32'
    }
  },
  {
    // actual at 1045 (1043-1044 is dev)
    minmax: [1043, 1045],
    types: {
      ...addrIndicesTypes,
      BalanceLock: 'BalanceLockTo212',
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Keys: 'SessionKeys5',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      StakingLedger: 'StakingLedgerTo223',
      Votes: 'VotesTo230',
      Weight: 'u32'
    }
  },
  {
    minmax: [1046, 1054],
    types: {
      // Indices optional, not in transaction
      ...sharedTypes,
      ...addrAccountIdTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      StakingLedger: 'StakingLedgerTo240',
      Weight: 'u32'
    }
  },
  {
    minmax: [1055, 1056],
    types: {
      ...sharedTypes,
      ...addrAccountIdTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      StakingLedger: 'StakingLedgerTo240',
      Weight: 'u32'
    }
  },
  {
    minmax: [1057, 1061],
    types: {
      ...sharedTypes,
      ...addrAccountIdTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259'
    }
  },
  {
    minmax: [1062, 2012],
    types: {
      ...sharedTypes,
      ...addrAccountIdTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259'
    }
  },
  {
    minmax: [2013, 2022],
    types: {
      ...sharedTypes,
      ...addrAccountIdTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      RefCount: 'RefCountTo259'
    }
  },
  {
    minmax: [2023, 2024],
    types: {
      ...sharedTypes,
      ...addrAccountIdTypes,
      RefCount: 'RefCountTo259'
    }
  },
  {
    minmax: [2025, 2027],
    types: {
      ...sharedTypes,
      ...addrAccountIdTypes
    }
  },
  {
    minmax: [2028, 2029],
    types: {
      ...sharedTypes,
      AccountInfo: 'AccountInfoWithDualRefCount',
      CompactAssignments: 'CompactAssignmentsWith16',
      RawSolution: 'RawSolutionWith16'
    }
  },
  {
    minmax: [2030, 9000],
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
