// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import AccountIndex from './AccountIndex';
import U8a from './codec/U8a';


const testDecode = (type, input, expected) =>
  it(`can decode from ${type}`, () => {
    const a = new AccountIndex(input);
    expect(a.toString()).toBe(expected);
  });

const testEncode = (to, expected) =>
  it(`can encode ${to}`, () => {
    const a = new AccountIndex('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
    expect(a[to]()).toEqual(expected);
  });


describe('AccountIndex', () => {

  testDecode(
    'AccountIndex',
    new AccountIndex('0x0102030405060708010203040506070801020304050607080102030405060708'),
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

  testEncode('toHex', '0x0102030405060708010203040506070801020304050607080102030405060708');
  testEncode('toJSON', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
  testEncode('toString', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
  testEncode('toU8a', Uint8Array.from([
    1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
    1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
  ]));
});
