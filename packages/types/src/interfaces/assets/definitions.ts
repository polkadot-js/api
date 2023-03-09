// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

export default {
  rpc: {},
  types: {
    AssetApprovalKey: {
      owner: 'AccountId',
      delegate: 'AccountId'
    },
    AssetApproval: {
      amount: 'TAssetBalance',
      deposit: 'TAssetDepositBalance'
    },
    AssetBalance: {
      balance: 'TAssetBalance',
      isFrozen: 'bool',
      isSufficient: 'bool'
    },
    AssetDestroyWitness: {
      accounts: 'Compact<u32>',
      sufficients: 'Compact<u32>',
      approvals: 'Compact<u32>'
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
    AssetMetadata: {
      deposit: 'TAssetDepositBalance',
      name: 'Vec<u8>',
      symbol: 'Vec<u8>',
      decimals: 'u8',
      isFrozen: 'bool'
    },
    TAssetBalance: 'u64',
    TAssetDepositBalance: 'BalanceOf'
  }
} as Definitions;
