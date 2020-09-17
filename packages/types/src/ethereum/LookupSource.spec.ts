// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';
import AccountIndex from '../generic/AccountIndex';
import AccountId from './AccountId';
import Address from './LookupSource';

describe('EthereumLookupSource', (): void => {
  const registry = new TypeRegistry();

  const testDecode = (type: string, input: Address | AccountId | AccountIndex | number[] | Uint8Array, expected: string): void =>
    it(`can decode from ${type}`, (): void => {
      const a = registry.createType('EthereumLookupSource', input);

      expect(a.toString()).toBe(expected);
    });

  describe('decoding', (): void => {
    testDecode(
      'Address',
      registry.createType('EthereumLookupSource', '0x00a329c0648769a73afac7f9381e08fb43dbea72'),
      '0x00a329c0648769A73afAc7F9381E08FB43dBEA72'
    );
    testDecode(
      'AccountId',
      registry.createType('EthereumAccountId', '0x4119b2e6c3Cb618F4f0B93ac77f9BeeC7FF02887'),
      '0x4119b2e6c3Cb618F4f0B93ac77f9BeeC7FF02887'
    );
    testDecode(
      'AccountIndex (mixed prefixes)',
      registry.createType('EthereumLookupSource', '2jpAFn'),
      // NOTE Expected address here is encoded with prefix 42, input above with 68
      '25GUyv'
    );
    testDecode(
      'AccountIndex (hex)',
      registry.createType('AccountIndex', '0x0100'),
      '25GUyv'
    );
    testDecode(
      'Uint8Array (with prefix 255)',
      Uint8Array.from([
        255,
        0x41, 0x19, 0xb2, 0xe6, 0xc3, 0xcb, 0x61, 0x8f, 0x4f, 0x0b,
        0x93, 0xac, 0x77, 0xf9, 0xbe, 0xec, 0x7f, 0xf0, 0x28, 0x87
      ]),
      '0x4119b2e6c3Cb618F4f0B93ac77f9BeeC7FF02887'
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
  });

  describe('encoding', (): void => {
    const testEncode = (to: 'toHex' | 'toString' | 'toU8a', expected: string | Uint8Array): void =>
      it(`can encode ${to}`, (): void => {
        const a = registry.createType('EthereumLookupSource', '0x4119b2e6c3Cb618F4f0B93ac77f9BeeC7FF02887');

        expect(a[to]()).toEqual(expected);
      });

    testEncode(
      'toHex',
      '0xff4119b2e6c3cb618f4f0b93ac77f9beec7ff02887'
    );
    testEncode(
      'toString',
      '0x4119b2e6c3Cb618F4f0B93ac77f9BeeC7FF02887'
    );
    testEncode(
      'toU8a',
      Uint8Array.from([
        255,
        0x41, 0x19, 0xb2, 0xe6, 0xc3, 0xcb, 0x61, 0x8f, 0x4f, 0x0b,
        0x93, 0xac, 0x77, 0xf9, 0xbe, 0xec, 0x7f, 0xf0, 0x28, 0x87
      ])
    );
  });

  describe('utility', (): void => {
    it('equals on AccountId', (): void => {
      const addr = '0x4119b2e6c3Cb618F4f0B93ac77f9BeeC7FF02887';

      expect(registry.createType('EthereumLookupSource', addr).eq(addr)).toBe(true);
    });

    it('equals on AccountIndex', (): void => {
      // see the test below - these are equivalent (with different prefix encoding)
      expect(registry.createType('EthereumLookupSource', '2jpAFn').eq('25GUyv')).toBe(true);
    });
  });
});
