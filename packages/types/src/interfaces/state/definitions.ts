// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {
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
          name: 'at',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'Bytes'
    },
    getKeys: {
      description: 'Retrieves the keys with a certain prefix',
      params: [
        {
          name: 'key',
          type: 'StorageKey'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'Vec<StorageKey>'
    },
    getPairs: {
      description: 'Returns the keys with prefix, leave empty to get all the keys (deprecated: Use getKeysPaged)',
      params: [
        {
          name: 'prefix',
          type: 'StorageKey'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'Vec<KeyValue>'
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
          name: 'startKey',
          type: 'StorageKey',
          isOptional: true
        },
        {
          name: 'at',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'Vec<StorageKey>'
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
          name: 'at',
          type: 'BlockHash',
          isOptional: true
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
          name: 'at',
          type: 'BlockHash',
          isOptional: true
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
          name: 'at',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'u64'
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
          name: 'at',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'Vec<StorageKey>'
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
          name: 'at',
          type: 'BlockHash',
          isOptional: true
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
          name: 'at',
          type: 'BlockHash',
          isOptional: true
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
          name: 'at',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'u64'
    },
    getMetadata: {
      description: 'Returns the runtime metadata',
      params: [
        {
          name: 'at',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'Metadata'
    },
    getRuntimeVersion: {
      alias: ['chain_getRuntimeVersion'],
      description: 'Get the runtime version',
      params: [
        {
          name: 'at',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'RuntimeVersion'
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
          name: 'toBlock',
          type: 'BlockHash',
          isOptional: true
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
          name: 'at',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'Vec<StorageChangeSet>'
    },
    getReadProof: {
      description: 'Returns proof of storage entries at a specific block state',
      params: [
        {
          name: 'keys',
          type: 'Vec<StorageKey>'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'ReadProof'
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
          name: 'keys',
          type: 'Vec<StorageKey>',
          isOptional: true
        }
      ],
      pubsub: [
        'storage',
        'subscribeStorage',
        'unsubscribeStorage'
      ],
      type: 'StorageChangeSet'
    }
  },
  types: {
    ApiId: '[u8; 8]',
    KeyValueOption: '(StorageKey, Option<StorageData>)',
    ReadProof: {
      at: 'Hash',
      proof: 'Vec<Bytes>'
    },
    RuntimeVersionApi: '(ApiId, u32)',
    RuntimeVersion: {
      specName: 'Text',
      implName: 'Text',
      authoringVersion: 'u32',
      specVersion: 'u32',
      implVersion: 'u32',
      apis: 'Vec<RuntimeVersionApi>',
      transactionVersion: 'u32'
    },
    StorageChangeSet: {
      block: 'Hash',
      changes: 'Vec<KeyValueOption>'
    }
  }
} as Definitions;
