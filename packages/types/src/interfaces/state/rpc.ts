// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types/index.js';

export const rpc: DefinitionsRpc = {
  call: {
    alias: ['state_callAt'],
    description: 'Perform a call to a builtin on the chain',
    params: [
      {
        name: 'method',
        type: 'Text'
      },
      {
        name: 'data',
        type: 'Bytes'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'Bytes'
  },
  getChildKeys: {
    description: 'Retrieves the keys with prefix of a specific child storage',
    params: [
      {
        name: 'childStorageKey',
        type: 'StorageKey'
      },
      {
        name: 'childDefinition',
        type: 'StorageKey'
      },
      {
        name: 'childType',
        type: 'u32'
      },
      {
        name: 'key',
        type: 'StorageKey'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'Vec<StorageKey>'
  },
  getChildReadProof: {
    description: 'Returns proof of storage for child key entries at a specific block state.',
    params: [
      {
        name: 'childStorageKey',
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
        type: 'BlockHash'
      }
    ],
    type: 'ReadProof'
  },
  getChildStorage: {
    description: 'Retrieves the child storage for a key',
    params: [
      {
        name: 'childStorageKey',
        type: 'StorageKey'
      },
      {
        name: 'childDefinition',
        type: 'StorageKey'
      },
      {
        name: 'childType',
        type: 'u32'
      },
      {
        name: 'key',
        type: 'StorageKey'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'StorageData'
  },
  getChildStorageHash: {
    description: 'Retrieves the child storage hash',
    params: [
      {
        name: 'childStorageKey',
        type: 'StorageKey'
      },
      {
        name: 'childDefinition',
        type: 'StorageKey'
      },
      {
        name: 'childType',
        type: 'u32'
      },
      {
        name: 'key',
        type: 'StorageKey'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'Hash'
  },
  getChildStorageSize: {
    description: 'Retrieves the child storage size',
    params: [
      {
        name: 'childStorageKey',
        type: 'StorageKey'
      },
      {
        name: 'childDefinition',
        type: 'StorageKey'
      },
      {
        name: 'childType',
        type: 'u32'
      },
      {
        name: 'key',
        type: 'StorageKey'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'u64'
  },
  getKeys: {
    deprecated: 'Use `api.rpc.state.getKeysPaged` to retrieve keys',
    description: 'Retrieves the keys with a certain prefix',
    params: [
      {
        name: 'key',
        type: 'StorageKey'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'Vec<StorageKey>'
  },
  getKeysPaged: {
    alias: ['state_getKeysPagedAt'],
    description: 'Returns the keys with prefix with pagination support.',
    params: [
      {
        name: 'key',
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
        type: 'BlockHash'
      }
    ],
    type: 'Vec<StorageKey>'
  },
  getMetadata: {
    description: 'Returns the runtime metadata',
    params: [
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'Metadata'
  },
  getPairs: {
    deprecated: 'Use `api.rpc.state.getKeysPaged` to retrieve keys',
    description: 'Returns the keys with prefix, leave empty to get all the keys (deprecated: Use getKeysPaged)',
    params: [
      {
        name: 'prefix',
        type: 'StorageKey'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'Vec<KeyValue>'
  },
  getReadProof: {
    description: 'Returns proof of storage entries at a specific block state',
    params: [
      {
        name: 'keys',
        type: 'Vec<StorageKey>'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'ReadProof'
  },
  getRuntimeVersion: {
    alias: ['chain_getRuntimeVersion'],
    description: 'Get the runtime version',
    params: [
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'RuntimeVersion'
  },
  getStorage: {
    alias: ['state_getStorageAt'],
    description: 'Retrieves the storage for a key',
    params: [
      {
        name: 'key',
        type: 'StorageKey'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'StorageData'
  },
  getStorageHash: {
    alias: ['state_getStorageHashAt'],
    description: 'Retrieves the storage hash',
    params: [
      {
        name: 'key',
        type: 'StorageKey'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'Hash'
  },
  getStorageSize: {
    alias: ['state_getStorageSizeAt'],
    description: 'Retrieves the storage size',
    params: [
      {
        name: 'key',
        type: 'StorageKey'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'u64'
  },
  queryStorage: {
    description: 'Query historical storage entries (by key) starting from a start block',
    params: [
      {
        name: 'keys',
        type: 'Vec<StorageKey>'
      },
      {
        name: 'fromBlock',
        type: 'Hash'
      },
      {
        isOptional: true,
        name: 'toBlock',
        type: 'BlockHash'
      }
    ],
    type: 'Vec<StorageChangeSet>'
  },
  queryStorageAt: {
    description: 'Query storage entries (by key) starting at block hash given as the second parameter',
    params: [
      {
        name: 'keys',
        type: 'Vec<StorageKey>'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'Vec<StorageChangeSet>'
  },
  subscribeRuntimeVersion: {
    alias: ['chain_subscribeRuntimeVersion', 'chain_unsubscribeRuntimeVersion'],
    description: 'Retrieves the runtime version via subscription',
    params: [],
    pubsub: [
      'runtimeVersion',
      'subscribeRuntimeVersion',
      'unsubscribeRuntimeVersion'
    ],
    type: 'RuntimeVersion'
  },
  subscribeStorage: {
    description: 'Subscribes to storage changes for the provided keys',
    params: [
      {
        isOptional: true,
        name: 'keys',
        type: 'Vec<StorageKey>'
      }
    ],
    pubsub: [
      'storage',
      'subscribeStorage',
      'unsubscribeStorage'
    ],
    type: 'StorageChangeSet'
  },
  traceBlock: {
    description: 'Provides a way to trace the re-execution of a single block',
    params: [
      {
        name: 'block',
        type: 'Hash'
      },
      {
        name: 'targets',
        type: 'Option<Text>'
      },
      {
        name: 'storageKeys',
        type: 'Option<Text>'
      },
      {
        name: 'methods',
        type: 'Option<Text>'
      }
    ],
    type: 'TraceBlockResponse'
  },
  trieMigrationStatus: {
    description: 'Check current migration state',
    params: [
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'MigrationStatusResult'
  }
};
