// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '@polkadot/types';

import getStorage from './storage';

describe('storage', (): void => {
  const registry = new TypeRegistry();
  const storage = getStorage(registry, 8);

  it('should return well known keys', (): void => {
    expect(typeof storage.substrate).toBe('object');

    // @deprecated: The ':auth:' (authorityPrefix) and ':auth:len' (authorityCount) storage keys
    // have been removed in https://github.com/paritytech/substrate/pull/2802
    expect(storage.substrate.authorityCount).toBeTruthy();
    expect(storage.substrate.authorityPrefix).toBeTruthy();
    expect(storage.substrate.changesTrieConfig).toBeTruthy();
    expect(storage.substrate.childStorageKeyPrefix).toBeTruthy();
    expect(storage.substrate.code).toBeTruthy();
    expect(storage.substrate.extrinsicIndex).toBeTruthy();
    expect(storage.substrate.heapPages).toBeTruthy();
  });
});
