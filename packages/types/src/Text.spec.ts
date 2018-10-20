// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Text from './Text';
import U8a from './codec/U8a';

const testDecode = (type, input, expected) =>
  it(`can decode from ${type}`, () => {
    expect(new Text(input).toString()).toBe(expected);
  });

const testEncode = (to, expected) =>
  it(`can encode ${to}`, () => {
    expect(new Text('foo')[to]()).toEqual(expected);
  });

describe('Text', () => {

  testDecode('string', 'foo', 'foo');
  testDecode('Text', new Text('foo'), 'foo');
  testDecode('Uint8Array', Uint8Array.from([12, 102, 111, 111]), 'foo');
  testDecode('U8a', new U8a(Uint8Array.from([12, 102, 111, 111])), 'foo');
  testDecode('object with `toString()`', { toString() { return 'foo'; } }, 'foo');

  // testEncode('toHex', '0x0c666f6f'); // FIXME Add this
  testEncode('toString', 'foo');
  testEncode('toU8a', Uint8Array.from([12, 102, 111, 111]));
});
