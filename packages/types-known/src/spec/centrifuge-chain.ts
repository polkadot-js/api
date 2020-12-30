// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  // substrate
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'LookupSource',
  LookupSource: 'IndicesLookupSource',

  AnchorData: {
    anchoredBlock: 'u64',
    docRoot: 'H256',
    id: 'H256'
  },
  ChainId: 'u8',
  DepositNonce: 'u64',
  Fee: {
    key: 'Hash',
    price: 'Balance'
  },
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
  ResourceId: '[u8; 32]',
  'chainbridge::ChainId': 'u8'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [240, undefined],
    types: {
      ...sharedTypes,
      RefCount: 'RefCountTo259'
    }
  }
];

export default versioned;
