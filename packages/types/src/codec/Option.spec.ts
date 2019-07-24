// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Option from './Option';
import Bytes from '../primitive/Bytes';
import U32 from '../primitive/U32';
import Text from '../primitive/Text';

const testDecode = (type: string, input: any, expected: any): void =>
  it(`can decode from ${type}`, (): void => {
    const o = new Option(Text, input);

    expect(o.toString()).toBe(expected);
    expect(o.isNone).toBe(!expected.length);
  });

const testEncode = (to: string, expected: any): void =>
  it(`can encode ${to}`, (): void => {
    const e = new Option(Text, 'foo');

    expect((e as any)[to]()).toEqual(expected);
  });

describe('Option', (): void => {
  it('converts undefined/null to empty', (): void => {
    expect(new Option(Text, undefined).isNone).toBe(true);
    expect(new Option(Text, null).isNone).toBe(true);
    expect(new Option(Text, 'test').isNone).toBe(false);
  });

  it('converts an option to an option', (): void => {
    expect(
      new Option(Text, new Option(Text, 'hello')).toString()
    ).toEqual('hello');
  });

  it('converts correctly from hex with toHex (Bytes)', (): void => {
    // Option<Bytes> for a parachain head, however, this is effectively an
    // Option<Option<Bytes>> (hence the length, since it is from storage)
    const HEX = '0x210100000000000000000000000000000000000000000000000000000000000000000000000000000000011b4d03dd8c01f1049143cf9c4c817e4b167f1d1b83e5c6f0f10d89ba1e7bce';

    // whatc the hex prefix and length
    expect(
      new Option(Bytes, HEX).toHex().substr(6)
    ).toEqual(HEX.substr(2));
  });

  it('converts correctly from hex with toNumber (U64)', (): void => {
    const HEX = '0x12345678';

    expect(
      (new Option(U32, HEX).unwrap() as U32).toNumber()
    ).toEqual(0x12345678);
  });

  testDecode('string (with)', 'foo', 'foo');
  testDecode('string (without)', undefined, '');
  testDecode('Uint8Array (with)', Uint8Array.from([1, 12, 102, 111, 111]), 'foo');
  testDecode('Uint8Array (without)', Uint8Array.from([0]), '');

  testEncode('toHex', '0x0c666f6f');
  testEncode('toString', 'foo');
  testEncode('toU8a', Uint8Array.from([1, 12, 102, 111, 111]));

  it('has empty toString() (undefined)', (): void => {
    expect(
      new Option(Text).toString()
    ).toEqual('');
  });

  it('has value toString() (provided)', (): void => {
    expect(
      new Option(Text, new Uint8Array([1, 4 << 2, 49, 50, 51, 52])).toString()
    ).toEqual('1234');
  });

  it('converts toU8a() with', (): void => {
    expect(
      new Option(Text, '1234').toU8a()
    ).toEqual(new Uint8Array([1, 4 << 2, 49, 50, 51, 52]));
  });

  it('converts toU8a() without', (): void => {
    expect(
      new Option(Text).toU8a()
    ).toEqual(new Uint8Array([0]));
  });

  describe('utils', (): void => {
    const testeq = new Option(Text, '1234');

    it('compares against other option', (): void => {
      expect(testeq.eq(new Option(Text, '1234'))).toBe(true);
    });

    it('compares against raw value', (): void => {
      expect(testeq.eq('1234')).toBe(true);
    });

    it('unwraps to default if empty', (): void => {
      expect(new Option(Text).unwrapOr('6789')).toBe('6789');
    });

    it('unwraps to value if non-empty', (): void => {
      expect((new Option(Text, '1234').unwrapOr(null) as Text).toString()).toBe('1234');
    });
  });
});
