// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import Moment from './Moment';
import U64 from './U64';

const testDecode = (type, input, expected, toJSON = false) =>
  it(`can decode from ${type}`, () => {
    expect(new Moment(input)[toJSON ? 'toJSON' : 'toString']()).toBe(expected);
  });

const testEncode = (to, expected) =>
  it(`can encode ${to}`, () => {
    expect(new Moment(421)[to]()).toEqual(expected);
  });

describe('Moment', () => {
  testDecode('Date', new Date(1537968546280), '2018-09-26T13:29:07.000Z');
  testDecode('Moment', new Moment(1234), 1234, true);
  testDecode('number', 1234, 1234, true);
  testDecode('U64', new U64(69), 69, true);

  testEncode('toBn', new BN(421));
  testEncode('toJSON', 421);
  testEncode('toString', '1970-01-01T00:07:01.000Z');
  testEncode('toNumber', 421);
  testEncode('toU8a', Uint8Array.from([165, 1, 0, 0, 0, 0, 0, 0]));
});
