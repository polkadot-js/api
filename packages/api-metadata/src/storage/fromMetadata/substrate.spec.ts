// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { authorityCount, authorityPrefix, changesTrieConfig, childStorageKeyPrefix, code, extrinsicIndex, heapPages } from './substrate';

describe('substrate', (): void => {
  // @deprecated: The ':auth:' (authorityPrefix) and ':auth:len' (authorityCount) storage keys
  // have been removed in https://github.com/paritytech/substrate/pull/2802
  it('authorityCount should return the correct storage key', (): void => {
    expect(authorityCount()).toEqual(Uint8Array.from([36, 58, 97, 117, 116, 104, 58, 108, 101, 110])); // Length-prefixed
  });

  it('authorityPrefix should return the correct storage key', (): void => {
    expect(authorityPrefix()).toEqual(Uint8Array.from([24, 58, 97, 117, 116, 104, 58])); // Length-prefixed
  });

  it('changesTrieConfig should return the correct storage key', (): void => {
    expect(changesTrieConfig()).toEqual(Uint8Array.from([52, 58, 99, 104, 97, 110, 103, 101, 115, 95, 116, 114, 105, 101])); // Length-prefixed
  });

  it('childStorageKeyPrefix should return the correct storage key', (): void => {
    expect(childStorageKeyPrefix()).toEqual(Uint8Array.from([60, 58, 99, 104, 105, 108, 100, 95, 115, 116, 111, 114, 97, 103, 101, 58])); // Length-prefixed
  });

  it('code should return the correct storage key', (): void => {
    expect(code()).toEqual(Uint8Array.from([20, 58, 99, 111, 100, 101])); // Length-prefixed
  });

  it('extrinsicIndex should return the correct storage key', (): void => {
    expect(extrinsicIndex()).toEqual(
      Uint8Array.from([64, 58, 101, 120, 116, 114, 105, 110, 115, 105, 99, 95, 105, 110, 100, 101, 120]) // Length-prefixed
    );
  });

  it('heapPages should return the correct storage key', (): void => {
    expect(heapPages()).toEqual(Uint8Array.from([40, 58, 104, 101, 97, 112, 112, 97, 103, 101, 115])); // Length-prefixed
  });
});
