// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecTo } from '../types';
import U8a from '../codec/U8a';
import Text from './Text';

describe('Text', (): void => {
  describe('decode', (): void => {
    const testDecode = (type: string, input: string | Uint8Array | { toString: () => string }, expected: string, toFn: 'toString' | 'toHex' = 'toString'): void =>
      it(`can decode from ${type}`, (): void => {
        expect(new Text(input)[toFn]()).toBe(expected);
      });

    testDecode('string', 'foo', 'foo');
    testDecode('Text', new Text('foo'), 'foo');
    testDecode('Uint8Array', Uint8Array.from([12, 102, 111, 111]), 'foo');
    testDecode('U8a', new U8a(Uint8Array.from([12, 102, 111, 111])), 'foo');
    testDecode('object with `toString()`', { toString (): string { return 'foo'; } }, 'foo');
    testDecode('hex input value', new Text('0x12345678'), '0x12345678', 'toHex');
  });

  describe('encode', (): void => {
    const testEncode = (to: CodecTo, expected: string | Uint8Array): void =>
      it(`can encode ${to}`, (): void => {
        expect(new Text('foo')[to]()).toEqual(expected);
      });

    testEncode('toHex', '0x666f6f');
    testEncode('toString', 'foo');
    testEncode('toU8a', Uint8Array.from([12, 102, 111, 111]));
  });

  describe('utils', (): void => {
    it('compares actual string values', (): void => {
      expect(new Text('123').eq('123')).toBe(true);
    });

    it('compares actual String values', (): void => {
      expect(new Text('XYX').eq(String('XYX'))).toBe(true);
    });

    it('compares actual non-string values (fails)', (): void => {
      expect(new Text('123').eq(123)).toBe(false);
    });

    it('calulates the length & encoded length correctly for ASCII', (): void => {
      const test = new Text('abcde');

      expect(test.encodedLength).toEqual(6);
      expect(test).toHaveLength(5);
    });

    it('calulates the length & encoded length correctly for non-ASCII', (): void => {
      const test = new Text('中文');

      expect(test.encodedLength).toEqual(7);
      expect(test).toHaveLength(2);
    });
  });
});
