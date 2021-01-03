// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  // substrate
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'LookupSource',
  LookupSource: 'IndicesLookupSource',
  Multiplier: 'Fixed64',

  // Anchor
  AnchorData: {
    anchoredBlock: 'u64',
    docRoot: 'H256',
    id: 'H256'
  },
  PreCommitData: {
    expirationBlock: 'u64',
    identity: 'H256',
    signingRoot: 'H256'
  },

  // Fees
  Fee: {
    key: 'Hash',
    price: 'Balance'
  },

  // MultiAccount
  MultiAccountData: {
    deposit: 'Balance',
    depositor: 'AccountId',
    signatories: 'Vec<AccountId>',
    threshold: 'u16'
  },

  // Bridge
  ChainId: 'u8',
  DepositNonce: 'u64',
  ResourceId: '[u8; 32]',
  'chainbridge::ChainId': 'u8',

  // NFT
  RegistryId: 'H160',
  TokenId: 'U256',
  AssetId: {
    registryId: 'RegistryId',
    tokenId: 'TokenId'
  },
  AssetInfo: {
    metadata: 'Bytes'
  },
  MintInfo: {
    anchorId: 'Hash',
    proofs: 'Vec<ProofMint>',
    staticHashes: '[Hash; 3]'
  },
  Proof: {
    leafHash: 'H256',
    sortedHashes: 'H256'
  },
  ProofMint: {
    hashes: 'Vec<Hash>',
    property: 'Bytes',
    salt: '[u8; 32]',
    value: 'Bytes'
  },
  RegistryInfo: {
    fields: 'Vec<Bytes>',
    ownerCanBurn: 'bool'
  }
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
