// Copyright 2017-2019 @polkadot/jsonrpc authors & contributors
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
    createParam('block', 'Hash', { isOptional: true })
  ],
  type: 'Bytes'
};

const getKeys: RpcMethodOpt = {
  description: 'Retrieves the keys with a certain prefix',
  params: [
    createParam('prefix', 'StorageKey'),
    createParam('block', 'Hash', { isOptional: true })
  ],
  // @ts-ignore The Vec<> wrap is fine
  type: 'Vec<StorageKey>'
};

const getStorage: RpcMethodOpt = {
  description: 'Retrieves the storage for a key',
  params: [
    createParam('key', 'StorageKey'),
    createParam('block', 'Hash', { isOptional: true })
  ],
  type: 'StorageData'
};

const getStorageHash: RpcMethodOpt = {
  description: 'Retrieves the storage hash',
  params: [
    createParam('key', 'StorageKey'),
    createParam('block', 'Hash', { isOptional: true })
  ],
  type: 'Hash'
};

const getStorageSize: RpcMethodOpt = {
  description: 'Retrieves the storage size',
  params: [
    createParam('key', 'StorageKey'),
    createParam('block', 'Hash', { isOptional: true })
  ],
  type: 'u64'
};

const getChildKeys: RpcMethodOpt = {
  description: 'Retrieves the keys with prefix of a specific child storage',
  params: [
    createParam('childStorageKey', 'StorageKey'),
    createParam('prefix', 'StorageKey'),
    createParam('block', 'Hash', { isOptional: true })
  ],
  // @ts-ignore The Vec<> wrap is fine
  type: 'Vec<StorageKey>'
};

const getChildStorage: RpcMethodOpt = {
  description: 'Retrieves the child storage for a key',
  params: [
    createParam('childStorageKey', 'StorageKey'),
    createParam('key', 'StorageKey'),
    createParam('block', 'Hash', { isOptional: true })
  ],
  type: 'StorageData'
};

const getChildStorageHash: RpcMethodOpt = {
  description: 'Retrieves the child storage hash',
  params: [
    createParam('childStorageKey', 'StorageKey'),
    createParam('key', 'StorageKey'),
    createParam('block', 'Hash', { isOptional: true })
  ],
  type: 'Hash'
};

const getChildStorageSize: RpcMethodOpt = {
  description: 'Retrieves the child storage size',
  params: [
    createParam('childStorageKey', 'StorageKey'),
    createParam('key', 'StorageKey'),
    createParam('block', 'Hash', { isOptional: true })
  ],
  type: 'u64'
};

const getMetadata: RpcMethodOpt = {
  description: 'Returns the runtime metadata',
  params: [
    createParam('block', 'Hash', { isOptional: true })
  ],
  type: 'Metadata'
};

const getRuntimeVersion: RpcMethodOpt = {
  description: 'Get the runtime version',
  params: [
    createParam('hash', 'Hash', { isOptional: true })
  ],
  type: 'RuntimeVersion'
};

const queryStorage: RpcMethodOpt = {
  description: 'Query historical storage entries (by key) starting from a start block',
  params: [
    // @ts-ignore The Vec<> wrap is fine
    createParam('keys', 'Vec<StorageKey>'),
    createParam('startBlock', 'Hash'),
    createParam('block', 'Hash', { isOptional: true })
  ],
  // @ts-ignore The Vec<> wrap is fine
  type: 'Vec<StorageChangeSet>'
};

const subscribeStorage: RpcMethodOpt = {
  description: 'Subscribes to storage changes for the provided keys',
  params: [
    // @ts-ignore The Vec<> wrap is fine
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
    getMetadata: createMethod(section, 'getMetadata', getMetadata),
    getRuntimeVersion: createMethod(section, 'getRuntimeVersion', getRuntimeVersion),
    getStorage: createMethod(section, 'getStorage', getStorage),
    getStorageHash: createMethod(section, 'getStorageHash', getStorageHash),
    getStorageSize: createMethod(section, 'getStorageSize', getStorageSize),
    queryStorage: createMethod(section, 'queryStorage', queryStorage),
    subscribeStorage: createMethod(section, 'subscribeStorage', subscribeStorage)
  }
};
