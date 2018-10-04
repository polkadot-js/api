// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MethodOpt, Section } from './types';

import createMethod from './create/method';
import createParam from './create/param';

const call: MethodOpt = {
  description: 'Perform a call to a builtin on the chain',
  params: [
    createParam('method', 'Text'),
    createParam('data', 'Bytes')
  ],
  type: 'Bytes'
};

const callAt: MethodOpt = {
  description: 'Perform a call to a builtin on the chain (At block)',
  params: [
    createParam('method', 'Text'),
    createParam('data', 'Bytes'),
    createParam('block', 'Hash')
  ],
  type: 'Bytes'
};

const getMetadata: MethodOpt = {
  description: 'Returns the runtime metadata',
  params: [],
  type: 'Metadata'
};

const getMetadataAt: MethodOpt = {
  description: 'Returns the runtime metadata',
  params: [
    createParam('block', 'Hash')
  ],
  type: 'Metadata'
};

const getStorage: MethodOpt = {
  description: 'Retrieves the storage for a key',
  params: [
    createParam('key', 'StorageKey')
  ],
  type: 'StorageData'
};

const getStorageAt: MethodOpt = {
  description: 'Retrieves the storage for a key at a specific block',
  params: [
    createParam('key', 'Bytes'),
    createParam('block', 'Hash')
  ],
  type: 'Bytes'
};

const getStorageHash: MethodOpt = {
  description: 'Retrieves the storage hash',
  params: [
    createParam('key', 'Bytes')
  ],
  type: 'Hash'
};

const getStorageHashAt: MethodOpt = {
  description: 'Retrieves the storage hash at a specific block',
  params: [
    createParam('key', 'Bytes'),
    createParam('block', 'Hash')
  ],
  type: 'Hash'
};

const getStorageSize: MethodOpt = {
  description: 'Retrieves the storage size',
  params: [
    createParam('key', 'Bytes')
  ],
  type: 'u64'
};

const getStorageSizeAt: MethodOpt = {
  description: 'Retrieves the storage size at a specific block',
  params: [
    createParam('key', 'Bytes'),
    createParam('block', 'Hash')
  ],
  type: 'u64'
};

const storage: MethodOpt = {
  description: 'Subscribes to storage changes for the provided keys',
  subscribe: [
    'state_subscribeStorage',
    'state_unsubscribeStorage'
  ],
  params: [
    // @ts-ignore The Vec<> wrap is fine
    createParam('keys', 'Vec<StorageKey>')
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
    callAt: createMethod(section, 'callAt', callAt),
    getMetadata: createMethod(section, 'getMetadata', getMetadata),
    getMetadataAt: createMethod(section, 'getMetadataAt', getMetadataAt),
    getStorage: createMethod(section, 'getStorage', getStorage),
    getStorageAt: createMethod(section, 'getStorageAt', getStorageAt),
    getStorageHash: createMethod(section, 'getStorageHash', getStorageHash),
    getStorageHashAt: createMethod(section, 'getStorageHashAt', getStorageHashAt),
    getStorageSize: createMethod(section, 'getStorageSize', getStorageSize),
    getStorageSizeAt: createMethod(section, 'getStorageSizeAt', getStorageSizeAt),
    storage: createMethod(section, 'storage', storage)
  }
} as Section;
