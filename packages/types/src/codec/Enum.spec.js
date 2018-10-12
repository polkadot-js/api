// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Enum from './Enum';

const testDecode = (type, input, expected) =>
  it(`can decode from ${type}`, () => {
    const e = new Enum(['foo', 'bar'], input);
    expect(e.toString()).toBe(expected);
  });

const testEncode = (to, expected) =>
  it(`can encode ${to}`, () => {
    const e = new Enum(['foo', 'bar'], 1);
    expect(e[to]()).toEqual(expected);
  });

describe('Enum', () => {

  testDecode('Enum', undefined, 'foo');
  testDecode('Enum', new Enum([], 1), 'bar');
  testDecode('number', 0, 'foo');
  testDecode('number', 1, 'bar');
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
      new Enum(['foo', 'bar']).fromU8a(new Uint8Array([1])).toU8a()
    ).toEqual(new Uint8Array([1]));
  });

  it('converts from JSON', () => {
    expect(
      new Enum(['foo', 'bar'], 5).toString()
    ).toEqual('5');
  });
});
