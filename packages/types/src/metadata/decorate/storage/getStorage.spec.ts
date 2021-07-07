// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { compactAddLength, u8aToU8a } from '@polkadot/util';

import { TypeRegistry } from '../../../create';
import { getStorage } from './getStorage';

describe('getSorage', (): void => {
  const registry = new TypeRegistry();
  const storage = getStorage(registry);

  it('should return well known keys', (): void => {
    expect(typeof storage.substrate).toBe('object');

    expect(storage.substrate.code()).toEqual(compactAddLength(u8aToU8a(':code')));

    expect(storage.substrate.changesTrieConfig).toBeTruthy();
    expect(storage.substrate.childStorageKeyPrefix).toBeTruthy();
    expect(storage.substrate.extrinsicIndex).toBeTruthy();
    expect(storage.substrate.heapPages).toBeTruthy();
  });
});
