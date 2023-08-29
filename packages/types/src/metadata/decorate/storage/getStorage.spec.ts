// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import metadataStatic from '@polkadot/types-support/metadata/static-substrate';
import { compactAddLength, u8aToU8a } from '@polkadot/util';

import { TypeRegistry } from '../../../create/index.js';
import { Metadata } from '../../Metadata.js';
import { getStorage } from './getStorage.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, metadataStatic);

registry.setMetadata(metadata);

describe('getSorage', (): void => {
  const storage = getStorage(registry);

  it('should return well known keys', (): void => {
    expect(typeof storage['substrate']).toBe('object');

    expect(storage['substrate']['code']()).toEqual(compactAddLength(u8aToU8a(':code')));

    expect(storage['substrate']['changesTrieConfig']).toBeTruthy();
    expect(storage['substrate']['childStorageKeyPrefix']).toBeTruthy();
    expect(storage['substrate']['extrinsicIndex']).toBeTruthy();
    expect(storage['substrate']['heapPages']).toBeTruthy();
  });
});
