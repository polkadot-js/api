// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import AccountId from './AccountId';
import AccountIndex from './AccountIndex';
import Address from './Address';

const testDecode = (type, input, expected) =>
  it(`can decode from ${type}`, () => {
    const a = new Address(input);
    expect(a.toString()).toBe(expected);
  });

const testEncode = (to, expected) =>
  it(`can encode ${to}`, () => {
    const a = new Address('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
    expect(a[to]()).toEqual(expected);
  });

describe('Address', () => {
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

  // FIXME Add this
  // testEncode(
  //   'toHex',
  //   '0x0102030405060708010203040506070801020304050607080102030405060708'
  // );
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
