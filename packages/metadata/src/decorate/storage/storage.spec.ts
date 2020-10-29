// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';

import getStorage from './storage';

describe('storage', (): void => {
  const registry = new TypeRegistry();
  const storage = getStorage(registry, 8);

  it('should return well known keys', (): void => {
    expect(typeof storage.substrate).toBe('object');

    expect(storage.substrate.changesTrieConfig).toBeTruthy();
    expect(storage.substrate.childStorageKeyPrefix).toBeTruthy();
    expect(storage.substrate.code).toBeTruthy();
    expect(storage.substrate.extrinsicIndex).toBeTruthy();
    expect(storage.substrate.heapPages).toBeTruthy();
  });
});
