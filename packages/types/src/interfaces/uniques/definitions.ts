// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    CollectionId: 'u32',
    ItemId: 'u32',
    DepositBalance: 'Balance',
    DepositBalanceOf: 'Balance',
    ItemPrice: 'Balance',
    CollectionDetails: {
      owner: 'AccountId',
      issuer: 'AccountId',
      admin: 'AccountId',
      freezer: 'AccountId',
      totalDeposit: 'DepositBalance',
      freeHolding: 'bool',
      items: 'u32',
      itemMetadatas: 'u32',
      attributes: 'u32',
      isFrozen: 'bool'
    },
    DestroyWitness: {
      items: 'Compact<u32>',
      itemMetadatas: 'Compact<u32>',
      attributes: 'Compact<u32>'
    },
    ItemDetails: {
      owner: 'AccountId',
      approved: 'Option<AccountId>',
      isFrozen: 'bool',
      deposit: 'DepositBalance'
    },
    CollectionMetadata: {
      deposit: 'DepositBalance',
      data: 'Vec<u8>',
      isFrozen: 'bool'
    },
    ItemMetadata: {
      deposit: 'DepositBalance',
      data: 'Vec<u8>',
      isFrozen: 'bool'
    }
  }
} as Definitions;
