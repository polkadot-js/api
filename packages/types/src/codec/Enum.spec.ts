// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Enum from './Enum';

const testDecode = (type: string, input: any, expected: any) =>
  it(`can decode from ${type}`, () => {
    const e = new Enum(['foo', 'bar'], input);
    expect(e.toString()).toBe(expected);
  });

const testEncode = (to: 'toJSON' | 'toNumber' | 'toString' | 'toU8a', expected: any) =>
  it(`can encode ${to}`, () => {
    const e = new Enum(['foo', 'bar'], 1);

    expect(e[to]()).toEqual(expected);
  });

describe('Enum', () => {
  testDecode('Enum', undefined, 'foo');
  testDecode('Enum', new Enum([], 1), 'bar');
  testDecode('number', 0, 'foo');
  testDecode('number', 1, 'bar');
  testDecode('string', 'bar', 'bar');
  testDecode('Uint8Array', Uint8Array.from([0]), 'foo');
  testDecode('Uint8Array', Uint8Array.from([1]), 'bar');

  testEncode('toJSON', 1);
  testEncode('toNumber', 1);
  testEncode('toString', 'bar');
  testEncode('toU8a', Uint8Array.from([1]));

  it('provides a clean toString()', () => {
    expect(
      new Enum(['foo', 'bar']).toString()
    ).toEqual('foo');
  });

  it('provides a clean toString() (enum)', () => {
    expect(
      new Enum(['foo', 'bar'], new Enum([], 1)).toNumber()
    ).toEqual(1);
  });

  it('converts to and from U8a', () => {
    expect(
      new Enum(['foo', 'bar'], new Uint8Array([1])).toU8a()
    ).toEqual(new Uint8Array([1]));
  });

  it('converts from JSON', () => {
    expect(
      new Enum(['foo', 'bar'], 5).toString()
    ).toEqual('5');
  });

  describe('utils', () => {
    it('compares agains the index value', () => {
      expect(
        new Enum(['foo', 'bar'], 1).eq(1)
      ).toBe(true);
    });

    it('compares agains the index value (false)', () => {
      expect(
        new Enum(['foo', 'bar'], 1).eq(0)
      ).toBe(false);
    });

    it('compares agains the string value', () => {
      expect(
        new Enum(['foo', 'bar'], 1).eq('bar')
      ).toBe(true);
    });

    it('compares agains the string value (false)', () => {
      expect(
        new Enum(['foo', 'bar'], 1).eq('foo')
      ).toBe(false);
    });
  });
});
