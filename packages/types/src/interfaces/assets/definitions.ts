// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    AssetBalance: {
      balance: 'TAssetBalance',
      isFrozen: 'bool',
      isZombie: 'bool'
    },
    AssetDetails: {
      owner: 'AccountId',
      issuer: 'AccountId',
      admin: 'AccountId',
      freezer: 'AccountId',
      supply: 'TAssetBalance',
      deposit: 'TAssetDepositBalance',
      maxZombies: 'u32',
      minBalance: 'TAssetBalance',
      zombies: 'u32',
      accounts: 'u32'
    },
    AssetMetadata: {
      deposit: 'TAssetDepositBalance',
      name: 'Vec<u8>',
      symbol: 'Vec<u8>',
      decimals: 'u8'
    },
    TAssetBalance: 'u64',
    TAssetDepositBalance: 'BalanceOf'
  }
} as Definitions;
