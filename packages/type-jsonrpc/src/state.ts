// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt, RpcSection } from './types';

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

const getMetadata: RpcMethodOpt = {
  description: 'Returns the runtime metadata',
  params: [
    createParam('block', 'Hash', { isOptional: true })
  ],
  type: 'Metadata'
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
    getMetadata: createMethod(section, 'getMetadata', getMetadata),
    getStorage: createMethod(section, 'getStorage', getStorage),
    getStorageHash: createMethod(section, 'getStorageHash', getStorageHash),
    getStorageSize: createMethod(section, 'getStorageSize', getStorageSize),
    queryStorage: createMethod(section, 'queryStorage', queryStorage),
    subscribeStorage: createMethod(section, 'subscribeStorage', subscribeStorage)
  }
} as RpcSection;
