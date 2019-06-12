// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Enum from './Enum';
import Null from '../primitive/Null';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';

describe('Enum', () => {
  describe('typed enum (previously EnumType)', () => {
    it('provides a clean toString() (value)', () => {
      expect(
        new Enum(
          { Text, U32 },
          new Uint8Array([0, 2 << 2, 49, 50])
        ).value.toString()
      ).toEqual('12');
    });

    it('provides a clean toString() (enum)', () => {
      expect(
        new Enum(
          { Text, U32 },
          new Uint8Array([1, 2 << 2, 49, 50])
        ).toString()
      ).toEqual('{"U32":3289352}');
    });

    it('decodes from a JSON input (lowercase)', () => {
      expect(
        new Enum(
          { Text, U32 },
          { 'text': 'some text value' }
        ).value.toString()
      ).toEqual('some text value');
    });

    it('decodes from hex', () => {
      expect(
        new Enum(
          { Text, U32 },
          '0x0134120000'
        ).value.toString()
      ).toEqual('4660'); // 0x1234 in decimal
    });

    it('decodes from a JSON input (mixed case)', () => {
      expect(
        new Enum(
          { Text, U32 },
          { 'U32': 42 }
        ).value.toString()
      ).toEqual('42');
    });

    it('decodes from JSON string', () => {
      expect(
        new Enum(
          { Null, U32 },
          'null'
        ).type
      ).toEqual('Null');
    });

    it('stringifies with custom types', () => {
      class A extends Null { }
      class B extends Null { }
      class C extends Null { }
      class Test extends Enum {
        constructor (value?: string, index?: number) {
          super({
            a: A,
            b: B,
            c: C
          }, value, index);
        }
      }

      expect(new Test().toJSON()).toEqual({ a: null });
    });

    it('creates via with', () => {
      class A extends Null { }
      class B extends U32 { }
      class C extends Null { }
      const Test = Enum.with({ A, B, C });

      expect(new Test().toJSON()).toEqual({ A: null });
      expect(new Test(1234, 1).toJSON()).toEqual({ B: 1234 });
    });

    // We are currently not using this approach, none of the types in Substrate currently
    // have any overrides. Instead of trying to support it (just-in-case), rather have it
    // removed to simplify the code - it can be pulled-back if needed
    it.skip('allows checking against defined indexes', () => {
      expect(
        new Enum(
          { 1: Text, 5: U32 },
          new Uint8Array([1, 2 << 2, 49, 50])
        ).toString()
      ).toEqual('Text');
    });

    it('allows accessing the type and value', () => {
      const text = new Text('foo');
      const enumType = new Enum(
        { Text, U32 },
        { Text: text }
      );

      expect(enumType.type).toBe('Text');
      expect(enumType.value).toEqual(text);
    });

    describe('utils', () => {
      const eqtest = new Enum(
        { U32, Text },
        new Uint8Array([1, 3 << 2, 88, 89, 90])
      );

      it('compares against index', () => {
        expect(
          eqtest.eq(1)
        ).toBe(true);
      });

      it('compares against values', () => {
        expect(
          eqtest.eq('XYZ')
        ).toBe(true);
      });
    });
  });

  describe('string-only construction (old Enum)', () => {
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

    testDecode('Enum', undefined, 'foo');
    testDecode('Enum', new Enum(['foo', 'bar'], 1), 'bar');
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
        new Enum(['foo', 'bar'], new Enum(['foo', 'bar'], 1)).toNumber()
      ).toEqual(1);
    });

    it('converts to and from U8a', () => {
      expect(
        new Enum(['foo', 'bar'], new Uint8Array([1])).toU8a()
      ).toEqual(new Uint8Array([1]));
    });

    it('converts from JSON', () => {
      expect(
        new Enum(['foo', 'bar', 'baz', 'gaz', 'jaz'], 4).toNumber()
      ).toEqual(4);
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

  describe('toRawType', () => {
    it('has a sane output for basic enums', () => {
      expect(
        new Enum(['foo', 'bar']).toRawType()
      ).toEqual(JSON.stringify({ _enum: ['foo', 'bar'] }));
    });

    it('has a sane output for types enums', () => {
      expect(
        new Enum({ foo: Text, bar: U32 }).toRawType()
      ).toEqual(JSON.stringify({ _enum: { foo: 'Text', bar: 'u32' } }));
    });
  });
});
