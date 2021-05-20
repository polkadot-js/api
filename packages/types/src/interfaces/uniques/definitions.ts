// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    ClassId: 'u32',
    InstanceId: 'u32',
    DepositBalance: 'Balance',
    DepositBalanceOf: 'Balance',
    ClassDetails: {
      owner: 'AccountId',
      issuer: 'AccountId',
      admin: 'AccountId',
      freezer: 'AccountId',
      totalTeposit: 'DepositBalance',
      freeHolding: 'bool',
      instances: 'u32',
      instanceMetadatas: 'u32',
      isFrozen: 'bool'
    },
    DestroyWitness: {
      instances: 'Compact<u32>',
      instanceMetadatas: 'Compact<u32>'
    },
    InstanceDetails: {
      owner: 'AccountId',
      approved: 'Option<AccountId>',
      isFrozen: 'bool',
      deposit: 'DepositBalance'
    },
    ClassMetadata: {
      deposit: 'DepositBalance',
      name: 'Vec<u8>',
      information: 'Vec<u8>',
      isFrozen: 'bool'
    },
    InstanceMetadata: {
      deposit: 'DepositBalance',
      name: 'Vec<u8>',
      information: 'Vec<u8>',
      isFrozen: 'bool'
    }
  }
} as Definitions;
