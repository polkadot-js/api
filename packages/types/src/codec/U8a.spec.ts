// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecTo } from '../types';
import U8a from './U8a';

const testDecode = (type: string, input: any, expected: string) =>
  it(`can decode from ${type}`, () => {
    const e = new U8a(input);
    expect(e.toString()).toBe(expected);
  });

const testEncode = (to: CodecTo, expected: any) =>
  it(`can encode ${to}`, () => {
    const e = new U8a([1, 2, 3, 4, 5]);
    expect(e[to]()).toEqual(expected);
  });

describe('U8a', () => {
  let u8a: U8a;

  beforeEach(() => {
    u8a = new U8a([1, 2, 3, 4, 5]);
  });

  testDecode('Array', [1, 2, 3, 4, 5], '0x0102030405');
  testDecode('hex', '0x0102030405', '0x0102030405');
  testDecode('U8a', new Uint8Array([1, 2, 3, 4, 5]), '0x0102030405');
  testDecode('Uint8Array', Uint8Array.from([1, 2, 3, 4, 5]), '0x0102030405');

  testEncode('toJSON', '0x0102030405');
  testEncode('toHex', '0x0102030405');
  testEncode('toString', '0x0102030405');
  testEncode('toU8a', Uint8Array.from([1, 2, 3, 4, 5]));

  it('contains the length of the elements', () => {
    expect(u8a.length).toEqual(5);
  });

  it('correctly encodes length', () => {
    expect(u8a.encodedLength).toEqual(5);
  });

  it('allows wrapping of a pre-existing instance', () => {
    expect(
      new U8a(u8a).length
    ).toEqual(5);
  });

  it('implements subarray correctly', () => {
    expect(u8a.subarray(1, 3)).toEqual(Uint8Array.from([2, 3]));
  });

  describe('utils', () => {
    it('compares against other U8a', () => {
      expect(u8a.eq(new Uint8Array([1, 2, 3, 4, 5]))).toBe(true);
    });

    it('compares against other U8a (non-length)', () => {
      expect(u8a.eq(new Uint8Array([1, 2, 3, 4]))).toBe(false);
    });

    it('compares against other U8a (mismatch)', () => {
      expect(u8a.eq(new Uint8Array([1, 2, 3, 4, 6]))).toBe(false);
    });

    it('compares against hex inputs', () => {
      expect(u8a.eq('0x0102030405')).toBe(true);
    });
  });
});
