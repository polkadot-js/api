// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {
    getKeys: {
      description: 'Returns the keys with prefix from a child storage, leave empty to get all the keys',
      params: [
        {
          name: 'childKey',
          type: 'PrefixedStorageKey'
        },
        {
          name: 'prefix',
          type: 'StorageKey'
        },
        {
          name: 'at',
          type: 'Hash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Vec<StorageKey>'
    },
    getStorage: {
      description: 'Returns a child storage entry at a specific block state',
      params: [
        {
          name: 'childKey',
          type: 'PrefixedStorageKey'
        },
        {
          name: 'key',
          type: 'StorageKey'
        },
        {
          name: 'at',
          type: 'Hash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Option<StorageData>'
    },
    getStorageHash: {
      description: 'Returns the hash of a child storage entry at a block state',
      params: [
        {
          name: 'childKey',
          type: 'PrefixedStorageKey'
        },
        {
          name: 'key',
          type: 'StorageKey'
        },
        {
          name: 'at',
          type: 'Hash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Option<Hash>'
    },
    getStorageSize: {
      description: 'Returns the size of a child storage entry at a block state',
      params: [
        {
          name: 'childKey',
          type: 'PrefixedStorageKey'
        },
        {
          name: 'key',
          type: 'StorageKey'
        },
        {
          name: 'at',
          type: 'Hash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Option<u64>'
    }
  },
  types: {
    // StorageKey extends Bytes
    PrefixedStorageKey: 'StorageKey'
  }
} as Definitions;
