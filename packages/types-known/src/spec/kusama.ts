// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@polkadot/types/types';

const versioned: OverrideVersionedType[] = [
  {
    // 1020 is first CC3
    minmax: [1019, 1031],
    types: {
      Address: 'GenericAddress',
      BalanceLock: 'BalanceLockTo212',
      DispatchError: 'DispatchErrorTo198',
      DispatchInfo: 'DispatchInfoTo244',
      Keys: 'SessionKeys5',
      LookupSource: 'Address',
      Multiplier: 'Fixed64',
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
      Address: 'GenericAddress',
      BalanceLock: 'BalanceLockTo212',
      DispatchInfo: 'DispatchInfoTo244',
      Keys: 'SessionKeys5',
      LookupSource: 'Address',
      Multiplier: 'Fixed64',
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
      Address: 'GenericAddress',
      BalanceLock: 'BalanceLockTo212',
      DispatchInfo: 'DispatchInfoTo244',
      Keys: 'SessionKeys5',
      LookupSource: 'Address',
      Multiplier: 'Fixed64',
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
      Address: 'AccountId',
      DispatchInfo: 'DispatchInfoTo244',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId',
      Multiplier: 'Fixed64',
      ReferendumInfo: 'ReferendumInfoTo239',
      StakingLedger: 'StakingLedgerTo240',
      Weight: 'u32'
    }
  },
  {
    minmax: [1055, 1056],
    types: {
      Address: 'AccountId',
      DispatchInfo: 'DispatchInfoTo244',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId',
      Multiplier: 'Fixed64',
      StakingLedger: 'StakingLedgerTo240',
      Weight: 'u32'
    }
  },
  {
    minmax: [1057, 1061],
    types: {
      Address: 'AccountId',
      DispatchInfo: 'DispatchInfoTo244',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId'
    }
  },
  {
    minmax: [1062, undefined],
    types: {
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId'
    }
  }
];

export default versioned;
