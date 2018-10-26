// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import AccountId from './AccountId';
import U8a from './codec/U8a';

describe('AccountId', () => {
  describe('decoding', () => {
    const testDecode = (type: string, input: Uint8Array | string | AccountId | U8a, expected: string) =>
      it(`can decode from ${type}`, () => {
        const a = new AccountId(input);
        expect(a.toString()).toBe(expected);
      });

    testDecode(
      'AccountId',
      new AccountId('0x0102030405060708010203040506070801020304050607080102030405060708'),
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    );
    testDecode('hex', '0x0102030405060708010203040506070801020304050607080102030405060708', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
    testDecode('string', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
    testDecode(
      'U8a',
      new U8a([
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
      ]),
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    );
    testDecode(
      'Uint8Array',
      Uint8Array.from([
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
      ]),
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    );
  });

  describe('encoding', () => {
    const testEncode = (to: 'toHex' | 'toJSON' | 'toString' | 'toU8a', expected: Uint8Array | string) =>
      it(`can encode ${to}`, () => {
        const a = new AccountId('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');

        expect(a[to]()).toEqual(expected);
      });

    testEncode('toHex', '0x0102030405060708010203040506070801020304050607080102030405060708');
    testEncode('toJSON', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
    testEncode('toString', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
    testEncode('toU8a', Uint8Array.from([
      1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
      1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
    ]));
  });
});
