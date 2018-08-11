// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
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

const getStorage: CreateItemOptions = {
  description: 'Retrieves the storage for a key',
  params: [
    param('key', 'Bytes')
  ],
  type: 'Bytes'
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

const subscribeStorage: CreateItemOptions = {
  description: 'Subscribes to storage changes for the provided keys',
  isSubscription: true,
  params: [
    param('keys', ['Bytes'])
  ],
  type: ['Bytes']
};

/**
 * @summary Query the state and state storage.
 */
export default (name: Interface$Sections): Section<Interfaces> =>
  createSection(name)((createMethod: CreateItems<Interfaces>) => ({
    description: 'Query of state',
    public: {
      call:
        createMethod('call')(call),
      callAt:
        createMethod('callAt')(callAt),
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
      subscribeStorage:
        createMethod('subscribeStorage')(subscribeStorage)
    }
  }));
