// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@polkadot/types/types';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [1000, undefined],
    types: {
      Address: 'GenericAddress',
      BalanceLock: 'BalanceLockTo212',
      Keys: 'SessionKeys5',
      ReferendumInfo: 'ReferendumInfoTo239',
      StakingLedger: 'StakingLedgerTo223'
    }
  }
];

export default versioned;
