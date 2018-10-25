// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Text from './Text';
import U8a from './codec/U8a';

describe('Text', () => {
  describe('decode', () => {
    const testDecode = (type: string, input: string | U8a | Uint8Array | { toString: () => string }, expected: string) =>
      it(`can decode from ${type}`, () => {
        expect(new Text(input).toString()).toBe(expected);
      });

    testDecode('string', 'foo', 'foo');
    testDecode('Text', new Text('foo'), 'foo');
    testDecode('Uint8Array', Uint8Array.from([12, 102, 111, 111]), 'foo');
    testDecode('U8a', new U8a(Uint8Array.from([12, 102, 111, 111])), 'foo');
    testDecode('object with `toString()`', { toString (): string { return 'foo'; } }, 'foo');
  });

  describe('encode', () => {
    const testEncode = (to: 'toString' | 'toU8a', expected: string | Uint8Array) =>
      it(`can encode ${to}`, () => {
        expect(new Text('foo')[to]()).toEqual(expected);
      });

    // testEncode('toHex', '0x0c666f6f'); // FIXME Add this
    testEncode('toString', 'foo');
    testEncode('toU8a', Uint8Array.from([12, 102, 111, 111]));
  });
});
