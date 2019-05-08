// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { authorityCount, authorityPrefix, changesTrieConfig, code, extrinsicIndex, heapPages } from './substrate';

describe('substrate', () => {
  it('authorityCount should return the correct storage key', () => {
    expect(authorityCount()).toEqual(Uint8Array.from([36, 58, 97, 117, 116, 104, 58, 108, 101, 110])); // Length-prefixed
  });

  it('authorityPrefix should return the correct storage key', () => {
    expect(authorityPrefix()).toEqual(Uint8Array.from([24, 58, 97, 117, 116, 104, 58])); // Length-prefixed
  });

  it('changesTrieConfig should return the correct storage key', () => {
    expect(changesTrieConfig()).toEqual(Uint8Array.from([52, 58, 99, 104, 97, 110, 103, 101, 115, 95, 116, 114, 105, 101])); // Length-prefixed
  });

  it('code should return the correct storage key', () => {
    expect(code()).toEqual(Uint8Array.from([20, 58, 99, 111, 100, 101])); // Length-prefixed
  });

  it('extrinsicIndex should return the correct storage key', () => {
    expect(extrinsicIndex()).toEqual(
      Uint8Array.from([64, 58, 101, 120, 116, 114, 105, 110, 115, 105, 99, 95, 105, 110, 100, 101, 120]) // Length-prefixed
    );
  });

  it('heapPages should return the correct storage key', () => {
    expect(heapPages()).toEqual(Uint8Array.from([40, 58, 104, 101, 97, 112, 112, 97, 103, 101, 115])); // Length-prefixed
  });
});
