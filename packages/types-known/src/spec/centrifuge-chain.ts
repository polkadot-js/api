// Copyright 2017-2024 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  // Anchor
  AnchorData: {
    anchoredBlock: 'u64',
    docRoot: 'H256',
    id: 'H256'
  },
  DispatchErrorModule: 'DispatchErrorModuleU8',
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
  },

  ProxyType: {
    _enum: [
      'Any',
      'NonTransfer',
      'Governance',
      'Staking',
      'NonProxy'
    ]
  }
};

const standaloneTypes = {
  ...sharedTypes,
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'LookupSource',
  LookupSource: 'IndicesLookupSource',
  Multiplier: 'Fixed64',
  RefCount: 'RefCountTo259'
};

export const versioned: OverrideVersionedType[] = [
  {
    minmax: [240, 243],
    types: {
      ...standaloneTypes,
      ProxyType: {
        _enum: [
          'Any',
          'NonTransfer',
          'Governance',
          'Staking',
          'Vesting'
        ]
      }
    }
  },
  {
    minmax: [244, 999],
    types: { ...standaloneTypes }
  },
  {
    minmax: [1000, undefined],
    types: { ...sharedTypes }
  }
];
