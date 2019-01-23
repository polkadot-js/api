// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { setAddressPrefix } from '@polkadot/keyring';
import U8a from './codec/U8a';
import Vector from './codec/Vector';
import jsonVec from './json/AccountIdVec.001.json';
import AccountId from './AccountId';
import StorageData from './StorageData';

describe('AccountId', () => {
  describe('defaults', () => {
    const id = new AccountId();

    it('has a 32-byte length', () => {
      expect(id).toHaveLength(32);
    });

    it('is empty by default', () => {
      expect(id.isEmpty).toBe(true);
    });

    it('equals the empty address', () => {
      expect(id.eq('5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUppTZ')).toBe(true);
    });
  });

  describe('decoding', () => {
    const testDecode = (type: string, input: Uint8Array | string | AccountId, expected: string) =>
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
    const testEncode = (to: 'toHex' | 'toJSON' | 'toString' | 'toU8a', expected: Uint8Array | string, input: string = '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s') =>
      it(`can encode ${to}`, () => {
        const a = new AccountId(input);

        expect(a[to]()).toEqual(expected);
      });

    testEncode('toHex', '0x0102030405060708010203040506070801020304050607080102030405060708');
    testEncode('toJSON', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
    testEncode('toString', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
    testEncode('toString', '5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUppTZ', '0x00');
    testEncode('toU8a', Uint8Array.from([
      1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
      1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
    ]));

    it('decodes to a non-empty value', () => {
      expect(new AccountId('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s').isEmpty).toBe(false);
    });
  });

  describe('storage decoding', () => {
    it('has the correct entries', () => {
      setAddressPrefix(68);

      const data = new StorageData(jsonVec.params.result.changes[0][1]);
      const list = new Vector(AccountId, data).map((accountId) => accountId.toString());

      expect(list).toEqual([
        '7qVJujLF3EDbZt5WfQXWvueFedMS4Vfk2Hb4GyR8jwksTZQ5',
        '7pHyqeYaJjJPgxQgCXoS2EZMhBhtpm6BLCqQ4jJZTQB2kEDM',
        '7pYLWV6PTUmLTMQfHmmuBwBNLkhcKhRAnkM36CSJtjat9Cxe',
        '7qT1BvpawNbqb3BZaBTMFMMAKrpJKLPf1LmEHR1JyarWJpvA',
        '7rADc9JW5EUGFPWLjPMipH4c3bJ2GyAUedmqQHiaGucWVifb',
        '7oK5KRH6jt4p8auipnru9ptqeuRwbLMHA2tgCViZzhmW4Mo2',
        '7ndAVsHvonnzTg4AvRhpraNCKj9g4CGQXKoLrgkTZ91NaLgJ',
        '7oL7VfXgLA8L3pJJwi11v3sBYc1b5R3tLrweHwzMNxgEpWuv'
      ]);
    });
  });
});
