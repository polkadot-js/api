// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../create';
import Raw from '../codec/Raw';
import jsonVec from '../json/AccountIdVec.001.json';
import AccountId from './AccountId';

describe('AccountId', (): void => {
  const registry = new TypeRegistry();

  describe('defaults', (): void => {
    const id = registry.createType('AccountId');

    it('has a 32-byte length', (): void => {
      expect(id).toHaveLength(32);
    });

    it('is empty by default', (): void => {
      expect(id.isEmpty).toBe(true);
    });

    it('equals the empty address', (): void => {
      expect(id.eq('5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM')).toBe(true);
    });
  });

  describe('decoding', (): void => {
    const testDecode = (type: string, input: Uint8Array | string | AccountId, expected: string): void =>
      it(`can decode from ${type}`, (): void => {
        const a = registry.createType('AccountId', input);

        expect(a.toString()).toBe(expected);
      });

    testDecode(
      'AccountId',
      registry.createType('AccountId', '0x0102030405060708010203040506070801020304050607080102030405060708'),
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF'
    );
    testDecode('hex', '0x0102030405060708010203040506070801020304050607080102030405060708', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF');
    testDecode('string', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF');
    testDecode(
      'Raw',
      new Raw(registry, [
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
      ]),
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF'
    );
    testDecode(
      'Uint8Array',
      Uint8Array.from([
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
      ]),
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF'
    );
  });

  describe('encoding', (): void => {
    const testEncode = (to: 'toHex' | 'toJSON' | 'toString' | 'toU8a', expected: Uint8Array | string, input = '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF'): void =>
      it(`can encode ${to}`, (): void => {
        const a = registry.createType('AccountId', input);

        expect(a[to]()).toEqual(expected);
      });

    testEncode('toHex', '0x0102030405060708010203040506070801020304050607080102030405060708');
    testEncode('toJSON', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF');
    testEncode('toString', '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF');
    testEncode('toString', '5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM', '0x00');
    testEncode('toU8a', Uint8Array.from([
      1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
      1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
    ]));

    it('decodes to a non-empty value', (): void => {
      expect(registry.createType('AccountId', '7qT1BvpawNbqb3BZaBTMFMMAKrpJKLPf1LmEHR1JyarWJdMX').isEmpty).toBe(false);
    });
  });

  describe('storage decoding', (): void => {
    it('has the correct entries', (): void => {
      registry.setChainProperties(
        registry.createType('ChainProperties', {
          ss58Format: 68
        })
      );

      const data = registry.createType('StorageData', jsonVec.params.result.changes[0][1]);
      const list = registry.createType('Vec<AccountId>', data).map((accountId): string => accountId.toString());

      expect(list).toEqual([
        '7qVJujLF3EDbZt5WfQXWvueFedMS4Vfk2Hb4GyR8jwksTLup',
        '7pHyqeYaJjJPgxQgCXoS2EZMhBhtpm6BLCqQ4jJZTQB2kMhw',
        '7pYLWV6PTUmLTMQfHmmuBwBNLkhcKhRAnkM36CSJtjat9ACb',
        '7qT1BvpawNbqb3BZaBTMFMMAKrpJKLPf1LmEHR1JyarWJdMX',
        '7rADc9JW5EUGFPWLjPMipH4c3bJ2GyAUedmqQHiaGucWVrsT',
        '7oK5KRH6jt4p8auipnru9ptqeuRwbLMHA2tgCViZzhmW4Lox',
        '7ndAVsHvonnzTg4AvRhpraNCKj9g4CGQXKoLrgkTZ91Na6PE',
        '7oL7VfXgLA8L3pJJwi11v3sBYc1b5R3tLrweHwzMNxgEpjxP'
      ]);
    });
  });
});
