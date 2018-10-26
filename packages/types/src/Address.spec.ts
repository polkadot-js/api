// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import AccountId from './AccountId';
import AccountIndex from './AccountIndex';
import Address from './Address';

describe('Address', () => {
  const testDecode = (type: string, input: Address | AccountId | AccountIndex | Array<number> | Uint8Array, expected: string) =>
    it(`can decode from ${type}`, () => {
      const a = new Address(input);
      expect(a.toString()).toBe(expected);
    });

  describe('decoding', () => {
    testDecode(
      'Address',
      new Address('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'),
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    );
    testDecode(
      'AccountId',
      new AccountId('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'),
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    );
    testDecode(
      'AccountIndex',
      new Address('PrF3'),
      // NOTE Expected adress here is encoded with prefix 42, input above with 68
      'F7ih'
    );
    testDecode(
      'AccountIndex',
      new AccountIndex('0x0001'),
      '25GUyk'
    );
    testDecode(
      'Array',
      [
        255,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
      ],
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    );
    testDecode(
      'Uint8Array (with prefix 255)',
      Uint8Array.from([
        255,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
      ]),
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    );
    testDecode(
      'Uint8Array (with prefix 1 byte)',
      Uint8Array.from([1]),
      'F7L6'
    );
    testDecode(
      'Uint8Array (with prefix 2 bytes)',
      Uint8Array.from([0xfc, 0, 1]),
      '25GUyk'
    );
    testDecode(
      'Uint8Array (with prefix 4 bytes)',
      Uint8Array.from([0xfd, 17, 18, 19, 20]),
      'Mwz15xN8'
    );
    testDecode(
      'Uint8Array (with prefix 8 bytes)',
      Uint8Array.from([0xfe, 17, 18, 19, 20, 21, 22, 23, 24]),
      '3N5RJXxM5fLd4h'
    );
  });

  describe('encoding', () => {
    const testEncode = (to: 'toHex' | 'toString' | 'toU8a', expected: string | Uint8Array) =>
      it(`can encode ${to}`, () => {
        const a = new Address('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
        expect(a[to]()).toEqual(expected);
      });

    testEncode(
      'toHex',
      '0xff0102030405060708010203040506070801020304050607080102030405060708'
    );
    testEncode(
      'toString',
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
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
