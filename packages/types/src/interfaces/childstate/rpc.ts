// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types';

export const rpc: DefinitionsRpc = {
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
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'Hash'
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
        isOptional: true,
        name: 'startKey',
        type: 'StorageKey'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'Hash'
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
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'Hash'
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
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'Hash'
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
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'Hash'
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
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'Hash'
      }
    ],
    type: 'Option<u64>'
  }
};
