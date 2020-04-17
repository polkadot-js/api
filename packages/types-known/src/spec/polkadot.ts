// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@polkadot/types/types';

// these are override types for Polkadot & Kusama chains
// NOTE The SessionKeys definition for Polkadot and Substrate (OpaqueKeys
// implementation) are different. Detect Polkadot and inject the `Keys`
// definition as applicable. (4 keys in substrate vs 5 in Polkadot/CC3).
const versioned: OverrideVersionedType[] = [
  {
    minmax: [1000, 1003],
    types: {
      Address: 'GenericAddress',
      BalanceLock: 'BalanceLockTo212',
      Keys: 'SessionKeys5',
      LookupSource: 'Address',
      StakingLedger: 'StakingLedgerTo223',
      Votes: 'VotesTo230',
      Weight: 'u32'
    }
  },
  {
    minmax: [1004, 1004],
    types: {
      // Indices optional, not in transaction
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId',
      ReferendumInfo: 'ReferendumInfoTo239',
      StakingLedger: 'StakingLedgerTo240',
      Weight: 'u32'
    }
  },
  {
    minmax: [1005, 1005],
    types: {
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId',
      StakingLedger: 'StakingLedgerTo240',
      Weight: 'u32'
    }
  },
  {
    minmax: [1006, 1006],
    types: {
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId',
      Weight: 'u32'
    }
  },
  {
    minmax: [1007, undefined],
    types: {
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId'
    }
  }
];

export default versioned;
