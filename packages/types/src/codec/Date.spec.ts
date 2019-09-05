// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { CodecTo } from '../types';
import CodecDate from './Date';
import U64 from '../primitive/U64';

describe('Date', (): void => {
  describe('decode', (): void => {
    const testDecode = (type: string, input: Date | CodecDate | U64 | number, expected: string | number, toJSON = false): void =>
      it(`can decode from ${type}`, (): void => {
        expect(new CodecDate(input)[toJSON ? 'toJSON' : 'toISOString']()).toBe(expected);
      });

    testDecode('Date', new Date(1537968546280), '2018-09-26T13:29:06.280Z');
    testDecode('CodecDate', new CodecDate(1234), 1234, true);
    testDecode('number', 1234, 1234, true);
    testDecode('U64', new U64(69), 69, true);
  });

  describe('encode', (): void => {
    const testEncode = (to: 'toBn' | 'toISOString' | 'toNumber' | CodecTo, expected: BN | number | string | Uint8Array): void =>
      it(`can encode ${to}`, (): void => {
        expect(new CodecDate(421)[to]()).toEqual(expected);
      });

    testEncode('toBn', new BN(421));
    testEncode('toJSON', 421);
    testEncode('toISOString', '1970-01-01T00:07:01.000Z');

    testEncode('toNumber', 421);
    testEncode('toU8a', Uint8Array.from([165, 1, 0, 0, 0, 0, 0, 0]));

    it('can encode toString', (): void => {
      expect(
        new CodecDate(421)
          .toString()
          .startsWith('Thu Jan 01 1970') // The time depends on the timezone this test is run in
      ).toBe(true);
    });

    it('encodes default BE hex', (): void => {
      expect(
        new CodecDate(3).toHex()
      ).toEqual('0x0000000000000003');
    });

    it('encodes options LE hex', (): void => {
      expect(
        new CodecDate(3).toHex(true)
      ).toEqual('0x0300000000000000');
    });
  });

  describe('utils', (): void => {
    it('compares values', (): void => {
      expect(new CodecDate(123).eq(123)).toBe(true);
    });

    it('compares values (non-match)', (): void => {
      expect(new CodecDate(123).eq(456)).toBe(false);
    });
  });
});
