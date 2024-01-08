// Copyright 2017-2024 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

import { mapXcmTypes } from '@polkadot/types-create';

const sharedTypes = {
  CompactAssignments: 'CompactAssignmentsWith24',
  DispatchErrorModule: 'DispatchErrorModuleU8',
  RawSolution: 'RawSolutionWith24',
  Keys: 'SessionKeys6',
  ProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'IdentityJudgement', 'CancelProxy', 'Auction']
  },
  Weight: 'WeightV1'
};

const addrIndicesTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'LookupSource',
  CompactAssignments: 'CompactAssignmentsWith16',
  DispatchErrorModule: 'DispatchErrorModuleU8',
  RawSolution: 'RawSolutionWith16',
  Keys: 'SessionKeys5',
  LookupSource: 'IndicesLookupSource',
  ValidatorPrefs: 'ValidatorPrefsWithCommission'
};

const addrAccountIdTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  CompactAssignments: 'CompactAssignmentsWith16',
  DispatchErrorModule: 'DispatchErrorModuleU8',
  RawSolution: 'RawSolutionWith16',
  Keys: 'SessionKeys5',
  LookupSource: 'AccountId',
  ValidatorPrefs: 'ValidatorPrefsWithCommission'
};

export const versioned: OverrideVersionedType[] = [
  {
    // 1020 is first CC3
    minmax: [1019, 1031],
    types: {
      ...addrIndicesTypes,
      BalanceLock: 'BalanceLockTo212',
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchError: 'DispatchErrorTo198',
      DispatchInfo: 'DispatchInfoTo244',
      Heartbeat: 'HeartbeatTo244',
      IdentityInfo: 'IdentityInfoTo198',
      Keys: 'SessionKeys5',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      Scheduled: 'ScheduledTo254',
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
      Heartbeat: 'HeartbeatTo244',
      Keys: 'SessionKeys5',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      Scheduled: 'ScheduledTo254',
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
      Heartbeat: 'HeartbeatTo244',
      Keys: 'SessionKeys5',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      Scheduled: 'ScheduledTo254',
      StakingLedger: 'StakingLedgerTo223',
      Votes: 'VotesTo230',
      Weight: 'u32'
    }
  },
  {
    minmax: [1046, 1049],
    types: {
      ...sharedTypes,
      ...addrAccountIdTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Heartbeat: 'HeartbeatTo244',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      Scheduled: 'ScheduledTo254',
      StakingLedger: 'StakingLedgerTo223',
      Weight: 'u32'
    }
  },
  {
    minmax: [1050, 1054],
    types: {
      ...sharedTypes,
      ...addrAccountIdTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Heartbeat: 'HeartbeatTo244',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      Scheduled: 'ScheduledTo254',
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
      Heartbeat: 'HeartbeatTo244',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      Scheduled: 'ScheduledTo254',
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
      Heartbeat: 'HeartbeatTo244',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      // Last 100% known problematic runtime range - this quite possibly need to
      // apply to more runtime ranges that follow, we just don't know how far this
      // should be applied to
      //
      // TL;DR whack-a-mole since this was not histrically checked
      //
      // See https://github.com/polkadot-js/api/issues/5618#issuecomment-1530970316
      Scheduled: 'ScheduledTo254'
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
    minmax: [9010, 9099],
    types: {
      ...sharedTypes,
      ...mapXcmTypes('V0')
    }
  },
  {
    // jump from 9100 to 9110, however align with Rococo
    minmax: [9100, 9105],
    types: {
      ...sharedTypes,
      ...mapXcmTypes('V1')
    }
  },
  {
    // metadata v14
    minmax: [9106, undefined],
    types: {
      Weight: 'WeightV1'
    }
  }
  // ,
  // {
  //   // weight v2 introduction
  //   minmax: [9300, undefined],
  //   types: {
  //     Weight: 'WeightV2'
  //   }
  // }
];
