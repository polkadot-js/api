// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Bool from './Bool';
import { CodecTo } from '../types';

describe('Bool', () => {
  describe('decode', () => {
    const testDecode = (type: string, input: Uint8Array | boolean | Boolean | Bool | number, expected: boolean) =>
      it(`can decode from ${type}`, () => {
        expect(new Bool(input).toJSON()).toBe(expected);
      });

    testDecode('Bool', new Bool(true), true);
    testDecode('Boolean', Boolean(true), true);
    testDecode('boolean', true, true);
    testDecode('number', 1, true);
    testDecode('Uint8Array', Uint8Array.from([1]), true);
  });

  describe('encode', () => {
    const testEncode = (to: CodecTo, expected: string | Uint8Array | boolean, value: boolean) =>
      it(`can encode ${to}`, () => {
        expect(new Bool(value)[to]()).toEqual(expected);
      });

    testEncode('toJSON', true, true);
    testEncode('toHex', '0x01', true);
    testEncode('toString', 'true', true);
    testEncode('toU8a', Uint8Array.from([1]), true);
    testEncode('toU8a', Uint8Array.from([0]), false);
  });

  it('correctly encodes length', () => {
    expect(new Bool(true).encodedLength).toEqual(1);
  });

  describe('utils', () => {
    it('compares agains a boolean', () => {
      expect(new Bool(true).eq(true)).toBe(true);
    });

    it('compares agains a Bool', () => {
      expect(new Bool(false).eq(new Bool(false))).toBe(true);
    });
  });
});
