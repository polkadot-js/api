// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    AssetBalance: {
      balance: 'TBalance',
      isFrozen: 'bool',
      isZombie: 'bool'
    },
    AssetDetails: {
      owner: 'AccountId',
      issuer: 'AccountId',
      admin: 'AccountId',
      freezer: 'AccountId',
      supply: 'TBalance',
      deposit: 'TDepositBalance',
      maxZombies: 'u32',
      minBalance: 'TBalance',
      zombies: 'u32',
      accounts: 'u32'
    },
    TBalance: 'Balance',
    TDepositBalance: 'BalanceOf'
  }
} as Definitions;
