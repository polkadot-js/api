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
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'IdentityJudgement']
  }
};

const indicesTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'LookupSource',
  LookupSource: 'IndicesLookupSource'
};

const versioned: OverrideVersionedType[] = [
  {
    // 1020 is first CC3
    minmax: [1019, 1031],
    types: {
      ...indicesTypes,
      BalanceLock: 'BalanceLockTo212',
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchError: 'DispatchErrorTo198',
      DispatchInfo: 'DispatchInfoTo244',
      Keys: 'SessionKeys5',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      RewardDestination: 'RewardDestinationTo257',
      SlashingSpans: 'SlashingSpansTo204',
      StakingLedger: 'StakingLedgerTo223',
      Votes: 'VotesTo230',
      Weight: 'u32'
    }
  },
  {
    minmax: [1032, 1042],
    types: {
      ...indicesTypes,
      BalanceLock: 'BalanceLockTo212',
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Keys: 'SessionKeys5',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      RewardDestination: 'RewardDestinationTo257',
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
      ...indicesTypes,
      BalanceLock: 'BalanceLockTo212',
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Keys: 'SessionKeys5',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      RewardDestination: 'RewardDestinationTo257',
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
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      ReferendumInfo: 'ReferendumInfoTo239',
      RewardDestination: 'RewardDestinationTo257',
      StakingLedger: 'StakingLedgerTo240',
      Weight: 'u32'
    }
  },
  {
    minmax: [1055, 1056],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      Multiplier: 'Fixed64',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      RewardDestination: 'RewardDestinationTo257',
      StakingLedger: 'StakingLedgerTo240',
      Weight: 'u32'
    }
  },
  {
    minmax: [1057, 1061],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      DispatchInfo: 'DispatchInfoTo244',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      RewardDestination: 'RewardDestinationTo257'
    }
  },
  {
    minmax: [1062, 2012],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      OpenTip: 'OpenTipTo225',
      RefCount: 'RefCountTo259',
      RewardDestination: 'RewardDestinationTo257'
    }
  },
  {
    minmax: [2013, 2022],
    types: {
      ...sharedTypes,
      CompactAssignments: 'CompactAssignmentsTo257',
      RefCount: 'RefCountTo259',
      RewardDestination: 'RewardDestinationTo257'
    }
  },
  {
    minmax: [2023, 2024],
    types: {
      ...sharedTypes,
      RefCount: 'RefCountTo259'
    }
  },
  {
    minmax: [2025, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
