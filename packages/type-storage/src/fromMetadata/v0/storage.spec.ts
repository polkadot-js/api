// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { storage } from './storage';

describe('storage', () => {
  it('should return well known keys', () => {
    expect(typeof storage.substrate).toBe('object');
    expect(storage.substrate.authorityCount).toBeTruthy();
    expect(storage.substrate.authorityPrefix).toBeTruthy();
    expect(storage.substrate.changesTrieConfig).toBeTruthy();
    expect(storage.substrate.code).toBeTruthy();
    expect(storage.substrate.extrinsicIndex).toBeTruthy();
    expect(storage.substrate.heapPages).toBeTruthy();
  });
});
