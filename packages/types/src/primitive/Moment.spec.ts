// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { CodecTo } from '../types';
import Moment from './Moment';
import U64 from './U64';

describe('Moment', () => {
  describe('decode', () => {
    const testDecode = (type: string, input: Date | Moment | U64 | number, expected: string | number, toJSON: boolean = false) =>
      it(`can decode from ${type}`, () => {
        expect(new Moment(input)[toJSON ? 'toJSON' : 'toISOString']()).toBe(expected);
      });

    testDecode('Date', new Date(1537968546280), '2018-09-26T13:29:06.280Z');
    testDecode('Moment', new Moment(1234), 1234, true);
    testDecode('number', 1234, 1234, true);
    testDecode('U64', new U64(69), 69, true);
  });

  describe('encode', () => {
    const testEncode = (to: 'toBn' | 'toISOString' | 'toNumber' | CodecTo, expected: BN | number | string | Uint8Array) =>
      it(`can encode ${to}`, () => {
        expect(new Moment(421)[to]()).toEqual(expected);
      });

    testEncode('toBn', new BN(421));
    testEncode('toJSON', 421);
    testEncode('toISOString', '1970-01-01T00:07:01.000Z');

    testEncode('toNumber', 421);
    testEncode('toU8a', Uint8Array.from([165, 1, 0, 0, 0, 0, 0, 0]));

    it(`can encode toString`, () => {
      expect(
        new Moment(421)
          .toString()
          .startsWith('Thu Jan 01 1970') // The time depends on the timezone this test is run in
      ).toBe(true);
    });

    it('encodes default BE hex', () => {
      expect(
        new Moment(3).toHex()
      ).toEqual('0x0000000000000003');
    });

    it('encodes options LE hex', () => {
      expect(
        new Moment(3).toHex(true)
      ).toEqual('0x0300000000000000');
    });
  });

  describe('utils', () => {
    it('compares values', () => {
      expect(new Moment(123).eq(123)).toBe(true);
    });

    it('compares values (non-match)', () => {
      expect(new Moment(123).eq(456)).toBe(false);
    });
  });
});
