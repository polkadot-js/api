// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Raw } from '../codec/Raw';
import { TypeRegistry } from '../create';
import jsonVec from '../json/AccountIdVec.001.json';
import { GenericAccountId as AccountId } from '.';

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

    it('allows decoding from null', (): void => {
      expect(
        registry.createType('AccountId', null).eq('5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM')
      ).toBe(true);
    });
  });

  describe('decoding', (): void => {
    const testDecode = (type: string, input: Uint8Array | string | AccountId, expected: string): void =>
      it(`can decode from ${type}`, (): void => {
        const a = registry.createType('AccountId', input);

        expect(a.toString()).toBe(expected);
      });

    it('fails with non-32-byte lengths', (): void => {
      expect(
        () => registry.createType('AccountId', '0x1234')
      ).toThrow(/Invalid AccountId provided, expected 32 bytes/);
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
    testEncode('toString', '5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM', '0x0000000000000000000000000000000000000000000000000000000000000000');
    testEncode('toU8a', Uint8Array.from([
      1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
      1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
    ]));

    it('decodes to a non-empty value', (): void => {
      expect(registry.createType('AccountId', 'FVU8T5yaAssHAUwo3PnKso7fqNthEqJZGCZgJZSR9cKjWAf').isEmpty).toBe(false);
    });
  });

  describe('storage decoding', (): void => {
    it('has the correct entries', (): void => {
      registry.setChainProperties(
        registry.createType('ChainProperties', {
          ss58Format: 2
        })
      );

      const data = registry.createType('StorageData', jsonVec.params.result.changes[0][1]);
      const list = registry.createType('Vec<AccountId>', data).map((accountId) => accountId.toString());

      expect(list).toEqual([
        'FXmrFbdg2VdG1NttGTx1S6Czbv2SQ7PaD2PfryGBWWgt52i',
        'ELSnAoxwXaRP5i4RPjs6m1K3AGVCfXpt8GjTcrgtxvrAuZv',
        'EaoT1Mn6H3N9Ui3WdiLGTdKgjGChbrpLfnNV5zSLJLhZvgj',
        'FVU8T5yaAssHAUwo3PnKso7fqNthEqJZGCZgJZSR9cKjWAf',
        'GCgYfZti2kHwWoixFJ9toWZPZrcesc8CZDAoBGhiUNKvTQM',
        'DMYFwYVNgLqpiD73eoLEMLnzszXyEnvhxL1bPGhSGXKV8kS',
        'CfdSPZKSb529oMZ9HeFw6p9fhiGS6i45FEgFaJazhmBzsxZ',
        'DNaSBo4xxQMjwbhAZwSzaK8taaBTKVXtnNygqYUpXS4FMwN'
      ]);
    });
  });
});
