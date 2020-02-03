// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '@polkadot/types';

import { changesTrieConfig, childStorageKeyPrefix, code, extrinsicIndex, heapPages } from './substrate';

describe('substrate', (): void => {
  const registry = new TypeRegistry();

  it('changesTrieConfig should return the correct storage key', (): void => {
    expect(changesTrieConfig(registry, 8)()).toEqual(Uint8Array.from([52, 58, 99, 104, 97, 110, 103, 101, 115, 95, 116, 114, 105, 101])); // Length-prefixed
  });

  it('childStorageKeyPrefix should return the correct storage key', (): void => {
    expect(childStorageKeyPrefix(registry, 8)()).toEqual(Uint8Array.from([60, 58, 99, 104, 105, 108, 100, 95, 115, 116, 111, 114, 97, 103, 101, 58])); // Length-prefixed
  });

  it('code should return the correct storage key', (): void => {
    expect(code(registry, 8)()).toEqual(Uint8Array.from([20, 58, 99, 111, 100, 101])); // Length-prefixed
  });

  it('extrinsicIndex should return the correct storage key', (): void => {
    expect(extrinsicIndex(registry, 8)()).toEqual(
      Uint8Array.from([64, 58, 101, 120, 116, 114, 105, 110, 115, 105, 99, 95, 105, 110, 100, 101, 120]) // Length-prefixed
    );
  });

  it('heapPages should return the correct storage key', (): void => {
    expect(heapPages(registry, 8)()).toEqual(Uint8Array.from([40, 58, 104, 101, 97, 112, 112, 97, 103, 101, 115])); // Length-prefixed
  });
});
