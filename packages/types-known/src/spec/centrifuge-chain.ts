// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  Address: 'GenericAddress',
  AnchorData: {
    id: 'H256',
    docRoot: 'H256',
    anchoredBlock: 'u64'
  },
  Fee: {
    key: 'Hash',
    price: 'Balance'
  },
  LookupSource: 'GenericAddress',
  MultiAccountData: {
    threshold: 'u16',
    signatories: 'Vec<AccountId>',
    deposit: 'Balance',
    depositor: 'AccountId'
  },
  Multiplier: 'Fixed64',
  PreCommitData: {
    signingRoot: 'H256',
    identity: 'H256',
    expirationBlock: 'u64'
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
      ResourceId: '[u8; 32]',
      'chainbridge::ChainId': 'u8',
      DepositNonce: 'u64'
    }
  }
];

export default versioned;
