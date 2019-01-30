// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Option from './Option';
import Text from '../Text';

const testDecode = (type: string, input: any, expected: any) =>
  it(`can decode from ${type}`, () => {
    const o = new Option(Text, input);

    expect(o.toString()).toBe(expected);
    expect(o.isNone).toBe(!expected.length);
  });

const testEncode = (to: string, expected: any) =>
  it(`can encode ${to}`, () => {
    const e = new Option(Text, 'foo');

    expect((e as any)[to]()).toEqual(expected);
  });

describe('Option', () => {
  it('converts undefined/null to empty', () => {
    expect(new Option(Text, undefined).isNone).toBe(true);
    expect(new Option(Text, null).isNone).toBe(true);
    expect(new Option(Text, 'test').isNone).toBe(false);
  });

  it('converts an option to an option', () => {
    expect(
      new Option(Text, new Option(Text, 'hello')).toString()
    ).toEqual('hello');
  });

  testDecode('string (with)', 'foo', 'foo');
  testDecode('string (without)', undefined, '');
  testDecode('Uint8Array (with)', Uint8Array.from([1, 12, 102, 111, 111]), 'foo');
  testDecode('Uint8Array (without)', Uint8Array.from([0]), '');

  testEncode('toHex', '0x010c666f6f');
  testEncode('toString', 'foo');
  testEncode('toU8a', Uint8Array.from([1, 12, 102, 111, 111]));

  it('has empty toString() (undefined)', () => {
    expect(
      new Option(Text).toString()
    ).toEqual('');
  });

  it('has value toString() (provided)', () => {
    expect(
      new Option(Text, new Uint8Array([1, 4 << 2, 49, 50, 51, 52])).toString()
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

  describe('utils', () => {
    const testeq = new Option(Text, '1234');

    it('compares against other option', () => {
      expect(testeq.eq(new Option(Text, '1234'))).toBe(true);
    });

    it('compares against raw value', () => {
      expect(testeq.eq('1234')).toBe(true);
    });

    it('unwraps to default if empty', () => {
      expect(new Option(Text).unwrapOr('6789')).toBe('6789');
    });

    it('unwraps to value if non-empty', () => {
      expect((new Option(Text, '1234').unwrapOr(null) as Text).toString()).toBe('1234');
    });
  });
});
