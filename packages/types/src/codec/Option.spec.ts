// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';
import Bytes from '../primitive/Bytes';
import U32 from '../primitive/U32';
import Text from '../primitive/Text';
import Option from './Option';

const registry = new TypeRegistry();

const testDecode = (type: string, input: any, expected: string): void =>
  it(`can decode from ${type}`, (): void => {
    const o = new Option(registry, Text, input);

    expect(o.toString()).toBe(expected);
    expect(o.isNone).toBe(!expected.length);
  });

const testEncode = (to: 'toHex' | 'toString' | 'toU8a', expected: any): void =>
  it(`can encode ${to}`, (): void => {
    const e = new Option(registry, Text, 'foo');

    expect(e[to]()).toEqual(expected);
  });

describe('Option', (): void => {
  it('converts undefined/null to empty', (): void => {
    expect(new Option(registry, Text, undefined).isNone).toBe(true);
    expect(new Option(registry, Text, null).isNone).toBe(true);
    expect(new Option(registry, Text, 'test').isNone).toBe(false);
  });

  it('converts an option to an option', (): void => {
    expect(
      new Option(registry, Text, new Option(registry, Text, 'hello')).toString()
    ).toEqual('hello');
  });

  it('converts an option to an option (strings)', (): void => {
    expect(
      new Option(registry, 'Text', new Option(registry, 'Text', 'hello')).toString()
    ).toEqual('hello');
  });

  it('converts correctly from hex with toHex (Bytes)', (): void => {
    // Option<Bytes> for a parachain head, however, this is effectively an
    // Option<Option<Bytes>> (hence the length, since it is from storage)
    const HEX = '0x210100000000000000000000000000000000000000000000000000000000000000000000000000000000011b4d03dd8c01f1049143cf9c4c817e4b167f1d1b83e5c6f0f10d89ba1e7bce';

    // watch the hex prefix and length
    expect(
      new Option(registry, Bytes, HEX).toHex().substr(6)
    ).toEqual(HEX.substr(2));
  });

  it('converts correctly from hex with toNumber (U64)', (): void => {
    const HEX = '0x12345678';

    expect(
      new Option(registry, U32, HEX).unwrap().toNumber()
    ).toEqual(0x12345678);
  });

  it('decodes reusing instanciated inputs', (): void => {
    const foo = new Text(registry, 'bar');

    expect(
      (new Option(registry, Text, foo)).value
    ).toBe(foo);
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
      new Option(registry, Text).toString()
    ).toEqual('');
  });

  it('has value toString() (provided)', (): void => {
    expect(
      new Option(registry, Text, new Uint8Array([1, 4 << 2, 49, 50, 51, 52])).toString()
    ).toEqual('1234');
  });

  it('converts toU8a() with', (): void => {
    expect(
      new Option(registry, Text, '1234').toU8a()
    ).toEqual(new Uint8Array([1, 4 << 2, 49, 50, 51, 52]));
  });

  it('converts toU8a() without', (): void => {
    expect(
      new Option(registry, Text).toU8a()
    ).toEqual(new Uint8Array([0]));
  });

  describe('utils', (): void => {
    const test = new Option(registry, Text, '1234');

    it('compares against other option', (): void => {
      expect(test.eq(new Option(registry, Text, '1234'))).toBe(true);
    });

    it('compares against raw value', (): void => {
      expect(test.eq('1234')).toBe(true);
    });

    it('unwrapOr to specified if empty', (): void => {
      expect(new Option(registry, Text).unwrapOr('6789').toString()).toEqual('6789');
    });

    it('unwrapOr to specified if non-empty', (): void => {
      expect(new Option(registry, Text, '1234').unwrapOr(null)?.toString()).toEqual('1234');
    });

    it('unwrapOrDefault to default if empty', (): void => {
      expect(new Option(registry, U32).unwrapOrDefault().toNumber()).toEqual(0);
    });

    it('unwrapOrDefault to specified if non-empty', (): void => {
      expect(new Option(registry, U32, '1234').unwrapOrDefault().toNumber()).toEqual(1234);
    });
  });
});
