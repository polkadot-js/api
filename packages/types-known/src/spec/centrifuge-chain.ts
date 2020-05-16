// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@polkadot/types/types';

const versioned: OverrideVersionedType[] = [
  {
    // most chains started at 1000 (Fulvous at 224)
    minmax: [1, undefined],
    types: {
      Address: 'AccountId',
      LookupSource: 'AccountId',
      Multiplier: 'Fixed64',
      ReferendumInfo: 'ReferendumInfoTo239',
      StakingLedger: 'StakingLedgerTo240',
      Weight: 'u32'
    }
  }
];

export default versioned;
