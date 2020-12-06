// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    AssetBalance: {
      balance: 'Balance',
      isFrozen: 'bool',
      isZombie: 'bool'
    },
    AssetDepositBalance: 'Balance',
    AssetDetails: {
      owner: 'AccountId',
      issuer: 'AccountId',
      admin: 'AccountId',
      freezer: 'AccountId',
      supply: 'Balance',
      deposit: 'AssetDepositBalance',
      maxZombies: 'u32',
      minBalance: 'Balance',
      zombies: 'u32',
      accounts: 'u32'
    }
  }
} as Definitions;
