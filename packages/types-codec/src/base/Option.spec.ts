// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '@polkadot/types';
import { bool, Bytes, Null, Option, Text, U32 } from '@polkadot/types-codec';

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
    expect(new Option(registry, Text, '0x').isNone).toBe(true);
    expect(new Option(registry, '()', null).isNone).toBe(true);
  });

  it('can wrap an Option<Null>/Option<()>', (): void => {
    [
      new Option(registry, Null, new Null(registry)),
      new Option(registry, '()', new Null(registry))
    ].forEach((test): void => {
      expect(test.isSome).toBe(true);
      expect(test.isNone).toBe(false);
      expect(test.isEmpty).toBe(false);
      expect(test.toU8a()).toEqual(new Uint8Array([1]));
      expect(test.unwrap().toHex()).toEqual('0x');
    });
  });

  it('can decode a nested Option', (): void => {
    expect(
      new Option(
        registry,
        Option.with(Option.with(Text)),
        new Option(
          registry,
          Option.with(Text),
          new Option(
            registry,
            Text,
            new Uint8Array([1, 3 << 2, 66, 67, 68])
          )
        )
      ).toU8a()
    ).toEqual(new Uint8Array([1, 1, 1, 3 << 2, 66, 67, 68]));
  });

  it('can convert between different Some/None', (): void => {
    const def = '{ "foo":"Text", "zar":"Text" }';
    const none = new Option(registry, def, null);
    const some = new Option(registry, def, new Option(registry, def, { foo: 'a', zar: 'b' }));

    expect(new Option(registry, def, none).isNone).toBe(true);
    expect(new Option(registry, def, some).isNone).toBe(false);
    expect(new Option(registry, def, some).unwrap().toHuman()).toEqual({ foo: 'a', zar: 'b' });
  });

  it('correctly handles booleans', (): void => {
    expect(new Option(registry, bool).isNone).toBe(true);
    expect(new Option(registry, bool, true).isSome).toBe(true);
    expect(new Option(registry, bool, true).unwrap().isTrue).toBe(true);
    expect(new Option(registry, bool, false).isSome).toBe(true);
    expect(new Option(registry, bool, false).unwrap().isTrue).toBe(false);
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

  it('allows bare specifiers on toU8a', (): void => {
    expect(
      new Option(registry, Text, '1234').toU8a(true)
    ).toEqual(new Uint8Array([49, 50, 51, 52]));
  });

  it('converts toU8a() without', (): void => {
    expect(
      new Option(registry, Text).toU8a()
    ).toEqual(new Uint8Array([0]));
  });

  it('converts toJSON() as null without', (): void => {
    expect(
      new Option(registry, Text).toJSON()
    ).toEqual(null);
  });

  it('converts toJSON() as non-null with Bytes', (): void => {
    expect(
      new Option(registry, Bytes, 'abcde').toJSON()
    ).toEqual('0x6162636465');
  });

  it('converts toJSON() as non-null with Text', (): void => {
    expect(
      new Option(registry, Text, 'abcde').toJSON()
    ).toEqual('abcde');
  });

  describe('toHex()', (): void => {
    it('converts Option<U32> correctly', (): void => {
      expect(
        new Option(registry, U32, 0x1234).toHex()
      ).toEqual('0x00001234');
    });

    it('converts Option<Option<U32>> correctly', (): void => {
      expect(
        new Option(registry, Option.with(U32), 0x1234).toHex()
      ).toEqual('0x00001234');
    });

    it('constructs from hex Option<Option<U32>> correctly', (): void => {
      expect(
        new Option(registry, Option.with(U32), '0x00001234').toHex()
      ).toEqual('0x00001234');
    });

    it('converts Option<Bytes> correctly', (): void => {
      expect(
        new Option(registry, Bytes, 'abcde').toHex()
      ).toEqual('0x6162636465');
    });

    it('converts Option<Option<Bytes>> correctly', (): void => {
      expect(
        new Option(registry, Option.with(Bytes), 'abcde').toHex()
      ).toEqual('0x6162636465');
    });

    it('constructs from hex Option<Option<Bytes>> correctly', (): void => {
      expect(
        new Option(registry, Option.with(Bytes), '0x6162636465').toHex()
      ).toEqual('0x6162636465');
    });

    it('converts correctly from hex with toHex (Bytes)', (): void => {
      // Option<Bytes> for a parachain head, however, this is effectively an
      // Option<Option<Bytes>> (hence the length, since it is from storage)
      const HEX = '0x210100000000000000000000000000000000000000000000000000000000000000000000000000000000011b4d03dd8c01f1049143cf9c4c817e4b167f1d1b83e5c6f0f10d89ba1e7bce';

      // watch the hex prefix and length
      expect(
        new Option(registry, Bytes, HEX).toHex()
      ).toEqual(HEX);
    });
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

    it('has a sane inspect', (): void => {
      expect(
        new Option(registry, U32, '1234').inspect()
      ).toEqual({
        inner: undefined,
        outer: [new Uint8Array([0x01]), new Uint8Array([210, 4, 0, 0])]
      });
    });
  });
});
