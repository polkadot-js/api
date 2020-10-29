// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';
import { stringToU8a } from '@polkadot/util';
import { xxhashAsU8a } from '@polkadot/util-crypto';

import getHasher from './getHasher';

describe('getHasher', (): void => {
  const registry = new TypeRegistry();

  describe('Twox64Concat', (): void => {
    it('matches the foo test from Rust', (): void => {
      const hasher = getHasher(registry.createType('StorageHasher', 'Twox64Concat'));
      const hash = hasher('foo');
      const xxhash = xxhashAsU8a('foo', 128);

      expect([
        hash.subarray(0, 8),
        hash.subarray(8)
      ]).toEqual([
        xxhash.subarray(0, 8),
        stringToU8a('foo')
      ]);
    });
  });
});
