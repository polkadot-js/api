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
      sufficient: 'bool'
    },
    AssetBalanceTo265: {
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
      minBalance: 'TAssetBalance',
      isSufficient: 'bool',
      accounts: 'u32',
      sufficients: 'u32',
      approvals: 'u32',
      isFrozen: 'bool'
    },
    AssetDetailsTo265: {
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
      name: 'Bytes',
      symbol: 'Bytes',
      decimals: 'u8'
    },
    DestroyWitness: {
      accounts: 'Compact<u32>',
      sufficients: 'Compact<u32>',
      approvals: 'Compact<u32>'
    },
    TAssetBalance: 'u64',
    TAssetDepositBalance: 'BalanceOf'
  }
} as Definitions;
