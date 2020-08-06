// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  Address: 'GenericAddress',
  AnchorData: {
    anchoredBlock: 'u64',
    docRoot: 'H256',
    id: 'H256'
  },
  Fee: {
    key: 'Hash',
    price: 'Balance'
  },
  LookupSource: 'GenericAddress',
  MultiAccountData: {
    deposit: 'Balance',
    depositor: 'AccountId',
    signatories: 'Vec<AccountId>',
    threshold: 'u16'
  },
  Multiplier: 'Fixed64',
  PreCommitData: {
    expirationBlock: 'u64',
    identity: 'H256',
    signingRoot: 'H256'
  },
  Proof: {
    leafHash: 'H256',
    sortedHashes: 'H256'
  },
  ReferendumInfo: 'ReferendumInfoTo239',
  StakingLedger: 'StakingLedgerTo240',
  Weight: 'u32'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [229, undefined],
    types: {
      ...sharedTypes,
      ChainId: 'u8',
      DepositNonce: 'u64',
      ResourceId: '[u8; 32]',
      'chainbridge::ChainId': 'u8'
    }
  }
];

export default versioned;
