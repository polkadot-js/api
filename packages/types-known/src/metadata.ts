// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@polkadot/types/types';

// Type overrides based on  metadata versions
const typesMeta: OverrideVersionedType[] = [
  {
    // NOTE this is for support of old, e.g. Alex, old metadata and BlockNumber/Index
    // This is detected based on metadata version, since this is what we have up-front
    //   v3 = Alex
    //   v4 = v1.0 branch
    minmax: [0, 4],
    types: {
      Address: 'GenericAddress',
      BlockNumber: 'u64',
      EventRecord: 'EventRecordTo76',
      Index: 'u64',
      StakingLedger: 'StakingLedgerTo223',
      ValidatorPrefs: 'ValidatorPrefsTo145'
    }
  }
];

export default typesMeta;
