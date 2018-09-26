// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { storage } from './storage';

describe('storage', () => {
  it('should return well known keys', () => {
    expect(typeof storage.wellKnownKeys).toBe('object');
    expect(storage.wellKnownKeys.authorityCount).toBeTruthy();
    expect(storage.wellKnownKeys.authorityPrefix).toBeTruthy();
    expect(storage.wellKnownKeys.changesTrieConfig).toBeTruthy();
    expect(storage.wellKnownKeys.code).toBeTruthy();
    expect(storage.wellKnownKeys.extrinsicIndex).toBeTruthy();
    expect(storage.wellKnownKeys.heapPages).toBeTruthy();
  });
});
