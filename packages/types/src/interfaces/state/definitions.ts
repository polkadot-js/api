// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
      description: 'Returns the keys with prefix, leave empty to get all the keys',
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
          name: 'startBlock',
          type: 'Hash'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isOptional: true
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
    }
  },
  types: {}
} as Definitions;
