// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Option from './Option';
import Text from '../Text';

const testDecode = (type, input, expected) =>
  it(`can decode from ${type}`, () => {
    const o = new Option(Text, input);
    expect(o.isEmpty).toBe(!expected.length)
    expect(o.toString()).toBe(expected);
  });

const testEncode = (to, expected) =>
  it(`can encode ${to}`, () => {
    const e = new Option(Text, 'foo');
    expect(e[to]()).toEqual(expected);
  });

describe('Option', () => {

  testDecode('string (with)', 'foo', 'foo');
  testDecode('string (without)', undefined, '');
  testDecode('Uint8Array (with)', Uint8Array.from([1, 12, 102, 111, 111]), 'foo');
  testDecode('Uint8Array (without)', Uint8Array.from([0]), '');

  // testEncode('toHex', '0x010c666f6f'); // FIXME Add this
  testEncode('toString', 'foo');
  testEncode('toU8a', Uint8Array.from([1, 12, 102, 111, 111]));

  it('has empty toString() (undefined)', () => {
    expect(
      new Option(Text).toString()
    ).toEqual('');
  });

  it('has value toString() (provided)', () => {
    expect(
      new Option(Text).fromU8a(new Uint8Array([1, 4 << 2, 49, 50, 51, 52])).toString()
    ).toEqual('1234');
  });

  it('converts toU8a() with', () => {
    expect(
      new Option(Text, '1234').toU8a()
    ).toEqual(new Uint8Array([1, 4 << 2, 49, 50, 51, 52]));
  });

  it('converts toU8a() without', () => {
    expect(
      new Option(Text).toU8a()
    ).toEqual(new Uint8Array([0]));
  });
});
