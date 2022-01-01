// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

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
    getKeysPaged: {
      alias: ['childstate_getKeysPagedAt'],
      description: 'Returns the keys with prefix from a child storage with pagination support',
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
          name: 'count',
          type: 'u32'
        },
        {
          name: 'startKey',
          type: 'StorageKey',
          isOptional: true
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
    getStorageEntries: {
      description: 'Returns child storage entries for multiple keys at a specific block state',
      params: [
        {
          name: 'childKey',
          type: 'PrefixedStorageKey'
        },
        {
          name: 'keys',
          type: 'Vec<StorageKey>'
        },
        {
          name: 'at',
          type: 'Hash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Vec<Option<StorageData>>'
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
