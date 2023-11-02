// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { GenericAccountId as AccountId, GenericAccountIndex as AccountIndex, GenericLookupSource as LookupSource } from './index.js';

import { TypeRegistry } from '../create/index.js';

describe('LookupSource', (): void => {
  const registry = new TypeRegistry();

  const testDecode = (type: string, input: LookupSource | AccountId | AccountIndex | number[] | Uint8Array, expected: string): void =>
    it(`can decode from ${type}`, (): void => {
      const a = registry.createType('IndicesLookupSource', input);

      expect(a.toString()).toBe(expected);
    });

  describe('utility', (): void => {
    it('equals on AccountId', (): void => {
      const addr = '5DkQbYAExs3M2sZgT1Ec3mKfZnAQCL4Dt9beTCknkCUn5jzo';

      expect(registry.createType('IndicesLookupSource', addr).eq(addr)).toBe(true);
    });

    it('equals on AccountIndex', (): void => {
      // see the test below - these are equivalent (with different prefix encoding)
      expect(registry.createType('IndicesLookupSource', '118r').eq('25GUyv')).toBe(true);
    });
  });

  describe('decoding', (): void => {
    testDecode(
      'Address',
      registry.createType('IndicesLookupSource', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF'),
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF'
    );
    testDecode(
      'AccountId',
      registry.createType('AccountId', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF'),
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF'
    );
    testDecode(
      'AccountIndex (mixed prefixes)',
      registry.createType('IndicesLookupSource', '118r'),
      // NOTE Expected address here is encoded with prefix 42, input above with 1
      '25GUyv'
    );
    testDecode(
      'AccountIndex (hex)',
      registry.createType('AccountIndex', '0x0100'),
      '25GUyv'
    );
    testDecode(
      'Array',
      [
        255,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
      ],
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF'
    );
    testDecode(
      'Uint8Array (with prefix 255)',
      Uint8Array.from([
        255,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
      ]),
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF'
    );
    testDecode(
      'Uint8Array (with prefix 1 byte)',
      Uint8Array.from([1]),
      'F7NZ'
    );
    testDecode(
      'Uint8Array (with prefix 2 bytes)',
      Uint8Array.from([0xfc, 0, 1]),
      '25GUyv'
    );
    testDecode(
      'Uint8Array (with prefix 4 bytes)',
      Uint8Array.from([0xfd, 17, 18, 19, 20]),
      'Mwz15xP2'
    );
    // FIXME The specification allows for 8 byte addresses, however since AccountIndex is u32 internally
    // (and defined that way in the default Substrate),this does not actually work since it is 8 bytes,
    // instead of 4 bytes max u32 length
    // testDecode(
    //   'Uint8Array (with prefix 8 bytes)',
    //   Uint8Array.from([0xfe, 17, 18, 19, 20, 21, 22, 23, 24]),
    //   '3N5RJXxM5fLd4h'
    // );
  });

  describe('encoding', (): void => {
    const testEncode = (to: 'toHex' | 'toString' | 'toU8a', expected: string | Uint8Array): void =>
      it(`can encode ${to}`, (): void => {
        const a = registry.createType('IndicesLookupSource', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF');

        expect(a[to]()).toEqual(expected);
      });

    testEncode(
      'toHex',
      '0xff0102030405060708010203040506070801020304050607080102030405060708'
    );
    testEncode(
      'toString',
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF'
    );
    testEncode(
      'toU8a',
      Uint8Array.from([
        255,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
      ])
    );
  });
});
