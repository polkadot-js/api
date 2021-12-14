// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecTo } from '../types';

import { CodecDate } from '@polkadot/types-codec';
import { BN } from '@polkadot/util';

import { TypeRegistry } from '../create';
import { U64 } from '../primitive';

describe('Date', (): void => {
  const registry = new TypeRegistry();

  describe('decode', (): void => {
    const testDecode = (type: string, input: Date | CodecDate | U64 | number, expected: string | number, toJSON = false): void =>
      it(`can decode from ${type}`, (): void => {
        expect(new CodecDate(registry, input)[toJSON ? 'toJSON' : 'toISOString']()).toBe(expected);
      });

    testDecode('Date', new Date(1537968546280), '2018-09-26T13:29:06.280Z');
    testDecode('CodecDate', new CodecDate(registry, 1234), 1234, true);
    testDecode('number', 1234, 1234, true);
    testDecode('U64', new U64(registry, 69), 69, true);
  });

  describe('encode', (): void => {
    const testEncode = (to: 'toBigInt' | 'toBn' | 'toISOString' | 'toNumber' | CodecTo, expected: bigint | BN | number | string | Uint8Array): void =>
      it(`can encode ${to}`, (): void => {
        expect(new CodecDate(registry, 421)[to]()).toEqual(expected);
      });

    testEncode('toBigInt', 421n);
    testEncode('toBn', new BN(421));
    testEncode('toJSON', 421);
    testEncode('toISOString', '1970-01-01T00:07:01.000Z');

    testEncode('toNumber', 421);
    testEncode('toU8a', Uint8Array.from([165, 1, 0, 0, 0, 0, 0, 0]));

    it('can encode toString', (): void => {
      const date = new Date(Date.UTC(1970, 0, 1, 2, 3, 4));

      date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

      expect(
        new CodecDate(registry, date).toString()
      ).toMatch(/^Thu Jan 01 1970 02:03:04/);
    });

    it('encodes default BE hex', (): void => {
      expect(
        new CodecDate(registry, 3).toHex()
      ).toEqual('0x0000000000000003');
    });

    it('encodes options LE hex', (): void => {
      expect(
        new CodecDate(registry, 3).toHex(true)
      ).toEqual('0x0300000000000000');
    });

    it('encodes correctly to BigInt', (): void => {
      expect(
        new CodecDate(registry, 41).toBigInt() + 1n
      ).toEqual(42n);
    });
  });

  describe('utils', (): void => {
    it('compares values', (): void => {
      expect(new CodecDate(registry, 123).eq(123)).toBe(true);
    });

    it('compares values (non-match)', (): void => {
      expect(new CodecDate(registry, 123).eq(456)).toBe(false);
    });
  });
});
