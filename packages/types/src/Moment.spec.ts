// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import Moment from './Moment';
import U64 from './U64';

describe('Moment', () => {
  describe('decode', () => {
    const testDecode = (type: string, input: Date | Moment | U64 | number, expected: string | number, toJSON: boolean = false) =>
      it(`can decode from ${type}`, () => {
        expect(new Moment(input)[toJSON ? 'toJSON' : 'toString']()).toBe(expected);
      });

    testDecode('Date', new Date(1537968546280), 'Wed Sep 26 2018 15:29:07 GMT+0200 (Central European Summer Time)');
    testDecode('Moment', new Moment(1234), 1234, true);
    testDecode('number', 1234, 1234, true);
    testDecode('U64', new U64(69), 69, true);
  });

  describe('encode', () => {
    const testEncode = (to: 'toBn' | 'toJSON' | 'toString' | 'toNumber' | 'toU8a', expected: BN | number | string | Uint8Array) =>
      it(`can encode ${to}`, () => {
        expect(new Moment(421)[to]()).toEqual(expected);
      });

    testEncode('toBn', new BN(421));
    testEncode('toJSON', 421);
    testEncode('toString', 'Thu Jan 01 1970 01:07:01 GMT+0100 (Central European Standard Time)');
    testEncode('toNumber', 421);
    testEncode('toU8a', Uint8Array.from([165, 1, 0, 0, 0, 0, 0, 0]));
  });
});
