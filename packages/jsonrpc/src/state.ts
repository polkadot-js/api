// Copyright 2017-2020 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt } from './types';

import createMethod from './create/method';
import createParam from './create/param';

// NOTE Order here is the same as in the Rust code

const call: RpcMethodOpt = {
  description: 'Perform a call to a builtin on the chain',
  params: [
    createParam('method', 'Text'),
    createParam('data', 'Bytes'),
    createParam('at', 'BlockHash', { isOptional: true })
  ],
  type: 'Bytes'
};

const KEY_QUERY_PARAMS = [
  createParam('key', 'StorageKey'),
  createParam('at', 'BlockHash', { isOptional: true })
];

const getKeys: RpcMethodOpt = {
  description: 'Retrieves the keys with a certain prefix',
  params: KEY_QUERY_PARAMS,
  type: 'Vec<StorageKey>'
};

const getKeysPaged: RpcMethodOpt = {
  description: 'Returns the keys with prefix with pagination support.',
  params: [
    createParam('key', 'StorageKey'),
    createParam('count', 'u32'),
    createParam('startKey', 'StorageKey', { isOptional: true }),
    createParam('at', 'BlockHash', { isOptional: true })
  ],
  type: 'Vec<StorageKey>'
};

const getStorage: RpcMethodOpt = {
  description: 'Retrieves the storage for a key',
  params: KEY_QUERY_PARAMS,
  type: 'StorageData'
};

const getStorageHash: RpcMethodOpt = {
  description: 'Retrieves the storage hash',
  params: KEY_QUERY_PARAMS,
  type: 'Hash'
};

const getStorageSize: RpcMethodOpt = {
  description: 'Retrieves the storage size',
  params: KEY_QUERY_PARAMS,
  type: 'u64'
};

const CHILD_QUERY_PARAMS = [
  createParam('childStorageKey', 'StorageKey'),
  createParam('childDefinition', 'StorageKey'),
  createParam('childType', 'u32'),
  createParam('key', 'StorageKey'),
  createParam('at', 'BlockHash', { isOptional: true })
];

const getChildKeys: RpcMethodOpt = {
  description: 'Retrieves the keys with prefix of a specific child storage',
  params: CHILD_QUERY_PARAMS,
  type: 'Vec<StorageKey>'
};

const getChildStorage: RpcMethodOpt = {
  description: 'Retrieves the child storage for a key',
  params: CHILD_QUERY_PARAMS,
  type: 'StorageData'
};

const getChildStorageHash: RpcMethodOpt = {
  description: 'Retrieves the child storage hash',
  params: CHILD_QUERY_PARAMS,
  type: 'Hash'
};

const getChildStorageSize: RpcMethodOpt = {
  description: 'Retrieves the child storage size',
  params: CHILD_QUERY_PARAMS,
  type: 'u64'
};

const getMetadata: RpcMethodOpt = {
  description: 'Returns the runtime metadata',
  params: [
    createParam('at', 'BlockHash', { isOptional: true })
  ],
  // This is not part of keyof InterfaceTypes
  type: 'Metadata' as any
};

const getRuntimeVersion: RpcMethodOpt = {
  description: 'Get the runtime version',
  params: [
    createParam('at', 'BlockHash', { isOptional: true })
  ],
  type: 'RuntimeVersion'
};

const queryStorage: RpcMethodOpt = {
  description: 'Query historical storage entries (by key) starting from a start block',
  params: [
    createParam('keys', 'Vec<StorageKey>'),
    createParam('startBlock', 'Hash'),
    createParam('at', 'BlockHash', { isOptional: true })
  ],
  type: 'Vec<StorageChangeSet>'
};

const subscribeRuntimeVersion: RpcMethodOpt = {
  description: 'Retrieves the runtime version via subscription',
  params: [],
  pubsub: [
    'runtimeVersion',
    'subscribeRuntimeVersion',
    'unsubscribeRuntimeVersion'
  ],
  type: 'RuntimeVersion'
};

const subscribeStorage: RpcMethodOpt = {
  description: 'Subscribes to storage changes for the provided keys',
  params: [
    createParam('keys', 'Vec<StorageKey>')
  ],
  pubsub: [
    'storage',
    'subscribeStorage',
    'unsubscribeStorage'
  ],
  type: 'StorageChangeSet'
};

const section = 'state';

/**
 * @summary Query the state and state storage.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Query of state',
  section,
  methods: {
    call: createMethod(section, 'call', call),
    getChildKeys: createMethod(section, 'getChildKeys', getChildKeys),
    getChildStorage: createMethod(section, 'getChildStorage', getChildStorage),
    getChildStorageHash: createMethod(section, 'getChildStorageHash', getChildStorageHash),
    getChildStorageSize: createMethod(section, 'getChildStorageSize', getChildStorageSize),
    getKeys: createMethod(section, 'getKeys', getKeys),
    getKeysPaged: createMethod(section, 'getKeysPaged', getKeysPaged),
    getMetadata: createMethod(section, 'getMetadata', getMetadata),
    getRuntimeVersion: createMethod(section, 'getRuntimeVersion', getRuntimeVersion),
    getStorage: createMethod(section, 'getStorage', getStorage),
    getStorageHash: createMethod(section, 'getStorageHash', getStorageHash),
    getStorageSize: createMethod(section, 'getStorageSize', getStorageSize),
    queryStorage: createMethod(section, 'queryStorage', queryStorage),
    subscribeRuntimeVersion: createMethod(section, 'subscribeRuntimeVersion', subscribeRuntimeVersion),
    subscribeStorage: createMethod(section, 'subscribeStorage', subscribeStorage)
  }
};
