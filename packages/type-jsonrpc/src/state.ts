// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, CreateItemOptionsMap, Section } from '@polkadot/params/types';
import { Interfaces, Interface$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const call: CreateItemOptions = {
  description: 'Perform a call to a builtin on the chain',
  params: [
    param('method', 'String'),
    param('data', 'Bytes')
  ],
  type: 'Bytes'
};

const callAt: CreateItemOptions = {
  description: 'Perform a call to a builtin on the chain (At block)',
  params: [
    param('method', 'String'),
    param('data', 'Bytes'),
    param('block', 'Hash')
  ],
  type: 'Bytes'
};

const getMetadata: CreateItemOptions = {
  description: 'Returns the runtime metadata',
  params: [],
  type: 'Metadata'
};

const getMetadataAt: CreateItemOptions = {
  description: 'Returns the runtime metadata',
  params: [
    param('block', 'Hash')
  ],
  type: 'Metadata'
};

const getStorage: CreateItemOptions = {
  description: 'Retrieves the storage for a key',
  params: [
    param('key', 'StorageKey')
  ],
  type: 'StorageResult'
};

const getStorageAt: CreateItemOptions = {
  description: 'Retrieves the storage for a key at a specific block',
  params: [
    param('key', 'Bytes'),
    param('block', 'Hash')
  ],
  type: 'Bytes'
};

const getStorageHash: CreateItemOptions = {
  description: 'Retrieves the storage hash',
  params: [
    param('key', 'Bytes')
  ],
  type: 'Hash'
};

const getStorageHashAt: CreateItemOptions = {
  description: 'Retrieves the storage hash at a specific block',
  params: [
    param('key', 'Bytes'),
    param('block', 'Hash')
  ],
  type: 'Hash'
};

const getStorageSize: CreateItemOptions = {
  description: 'Retrieves the storage size',
  params: [
    param('key', 'Bytes')
  ],
  type: 'u64'
};

const getStorageSizeAt: CreateItemOptions = {
  description: 'Retrieves the storage size at a specific block',
  params: [
    param('key', 'Bytes'),
    param('block', 'Hash')
  ],
  type: 'u64'
};

const storage: CreateItemOptions = {
  description: 'Subscribes to storage changes for the provided keys',
  subscribe: [
    'state_subscribeStorage',
    'state_unsubscribeStorage'
  ],
  params: [
    param('keys', ['StorageKey'])
  ],
  type: 'StorageResultSet'
};

const privateMethods: CreateItemOptionsMap = {};

const publicMethods: CreateItemOptionsMap = {
  call, callAt, getStorage, getStorageAt, getStorageHash, getStorageHashAt, getStorageSize, getStorageSizeAt, storage
};

export type PrivateMethods = typeof privateMethods;
export type PublicMethods = typeof publicMethods;

/**
 * @summary Query the state and state storage.
 */
export default (name: Interface$Sections): Section<Interfaces, PrivateMethods, PublicMethods> =>
  createSection(name)((createMethod: CreateItems<Interfaces>) => ({
    description: 'Query of state',
    public: {
      call:
        createMethod('call')(call),
      callAt:
        createMethod('callAt')(callAt),
      getMetadata:
        createMethod('getMetadata')(getMetadata),
      getMetadataAt:
        createMethod('getMetadataAt')(getMetadataAt),
      getStorage:
        createMethod('getStorage')(getStorage),
      getStorageAt:
        createMethod('getStorageAt')(getStorageAt),
      getStorageHash:
        createMethod('getStorageHash')(getStorageHash),
      getStorageHashAt:
        createMethod('getStrorageHashAt')(getStorageHashAt),
      getStorageSize:
        createMethod('getStorageSize')(getStorageSize),
      getStorageSizeAt:
        createMethod('getStorageSizeAt')(getStorageSizeAt),
      storage:
        createMethod('storage')(storage)
    }
  }));
