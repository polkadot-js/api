// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  Address: 'AccountId',
  Keys: 'SessionKeys5',
  LookupSource: 'AccountId',
  ProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'SudoBalances', 'IdentityJudgement']
  }
};

// these are override types for Polkadot
const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 12],
    types: {
      ...sharedTypes,
      OpenTip: 'OpenTipTo225'
    }
  },
  {
    minmax: [13, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
