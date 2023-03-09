// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

/* eslint-disable sort-keys */

import type { CodecTo } from '@polkadot/types-codec/types';

import { TypeRegistry } from '@polkadot/types';
import { Bool, Enum, Option, Struct, Text, U32, Vec } from '@polkadot/types-codec';

import { TEST_A } from './Struct.data.js';

describe('Struct', (): void => {
  const registry = new TypeRegistry();

  describe('decoding', (): void => {
    const testDecode = (type: string, input: any): void =>
      it(`can decode from ${type}`, (): void => {
        const s = new Struct(registry, {
          foo: Text,
          bar: U32
        }, input);

        expect([...s.keys()]).toEqual(['foo', 'bar']);
        expect(
          [...s.values()].map((v): string =>
            v.toString()
          )
        ).toEqual(['bazzing', '69']);
      });

    testDecode('array', ['bazzing', 69]);
    testDecode('hex', '0x1c62617a7a696e6745000000');
    testDecode('object', { foo: 'bazzing', bar: 69 });
    testDecode('Uint8Array', Uint8Array.from([28, 98, 97, 122, 122, 105, 110, 103, 69, 0, 0, 0]));
    testDecode('Struct.with', new (Struct.with({ foo: 'Text', bar: 'U32' }))(registry, { foo: 'bazzing', bar: 69 }));

    it('decodes null/undefined/empty correctly (& equivalent)', (): void => {
      const Clazz = Struct.with({
        txt: Text,
        u32: U32
      });
      const expected = { txt: '', u32: '0' };

      expect(new Clazz(registry, {}).toHuman()).toEqual(expected);
      expect(new Clazz(registry, null).toHuman()).toEqual(expected);
      expect(new Clazz(registry, undefined).toHuman()).toEqual(expected);
    });

    it('decodes with Optionals', (): void => {
      const Clazz = Struct.with({
        a: 'Option<Bool>',
        b: 'Option<Bool>'
      });

      const c = new Clazz(registry, { a: false }) as unknown as { a: Option<Bool>, b: Option<Bool> };

      expect(c.a.isSome).toEqual(true);
      expect(c.a.unwrap().isTrue).toEqual(false);
      expect(c.b.isSome).toEqual(false);
    });

    it('decodes reusing instantiated inputs', (): void => {
      const foo = new Text(registry, 'bar');

      expect(
        (new Struct(
          registry,
          { foo: Text },
          { foo }
        )).get('foo')
      ).toBe(foo);
    });

    it('decodes a more complicated type', (): void => {
      const s = new Struct(registry, {
        foo: Vec.with(Struct.with({
          bar: Text
        }))
      }, { foo: [{ bar: 1 }, { bar: 2 }] });

      expect(s.toString()).toBe('{"foo":[{"bar":"1"},{"bar":"2"}]}');
    });

    it('decodes a previously problematic input', (): void => {
      let data;

      try {
        data = new Struct(registry, {
          a: 'u32',
          b: 'H256',
          c: 'H256',
          swap: Enum.with({
            A: 'u256',
            B: 'u256'
          }),
          d: Vec.with('u8'),
          e: 'u8'
        }, TEST_A);
      } catch (error) {
        console.error(error);

        throw error;
      }

      expect(data.get('d')).toHaveLength(50000);
    });

    it('decodes from a Map input', (): void => {
      const s = new Struct(registry, {
        txt: Text,
        foo: U32,
        bar: U32
      }, new Map<string, unknown>([['a', 42], ['txt', 'fubar']]));

      expect(s.toString()).toEqual('{"txt":"fubar","foo":0,"bar":0}');
    });

    it('decodes from a snake_case input', (): void => {
      const input = new Struct(registry, {
        snakeCaseA: U32,
        snakeCaseB: Text,
        other: U32
      }, { snake_case_a: 42, snake_case_b: 'fubar', other: 69 } as any);

      expect(input.toString()).toEqual('{"snakeCaseA":42,"snakeCaseB":"fubar","other":69}');
    });

    it('throws when it cannot decode', (): void => {
      expect(
        (): Struct<any> => new (
          Struct.with({
            txt: Text,
            u32: U32
          })
        )(registry, 'ABC')
      ).toThrow(/Cannot decode value/);
    });

    it('throws a sensical error on incorrect array values passed to structs', (): void => {
      expect(
        () => new Struct(registry, {
          _: 'Vec<u32>'
        }, [123, 456])
      ).toThrow(/array to object with known keys/);
    });
  });

  describe('encoding', (): void => {
    const testEncode = (to: CodecTo, expected: any): void =>
      it(`can encode ${to}`, (): void => {
        const s = new Struct(registry, {
          foo: Text,
          bar: U32
        }, { foo: 'bazzing', bar: 69 });

        expect(s[to]()).toEqual(expected);
      });

    testEncode('toHex', '0x1c62617a7a696e6745000000');
    testEncode('toJSON', { foo: 'bazzing', bar: 69 });
    testEncode('toU8a', Uint8Array.from([28, 98, 97, 122, 122, 105, 110, 103, 69, 0, 0, 0]));
    testEncode('toString', '{"foo":"bazzing","bar":69}');
  });

  it('provides a clean toString()', (): void => {
    expect(
      new (
        Struct.with({
          txt: Text,
          u32: U32
        })
      )(registry, { txt: 'foo', u32: 0x123456 }).toString()
    ).toEqual('{"txt":"foo","u32":1193046}');
  });

  it('provides a clean toString() (string types)', (): void => {
    expect(
      new (
        Struct.with({
          txt: 'Text',
          num: 'u32',
          cls: U32
        })
      )(registry, { txt: 'foo', num: 0x123456, cls: 123 }).toString()
    ).toEqual('{"txt":"foo","num":1193046,"cls":123}');
  });

  it('exposes the properties on the object', (): void => {
    const struct = new (
      Struct.with({
        txt: Text,
        u32: U32
      })
    )(registry, { txt: 'foo', u32: 0x123456 });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
    expect((struct as any).txt.toString()).toEqual('foo');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
    expect((struct as any).u32.toNumber()).toEqual(0x123456);
  });

  it('correctly encodes length', (): void => {
    expect(
      new (
        Struct.with({
          txt: Text,
          u32: U32
        })
      )(registry, { foo: 'bazzing', bar: 69 }).encodedLength
    ).toEqual(5);
  });

  it('exposes the types', (): void => {
    expect(
      new Struct(registry, {
        foo: Text,
        bar: Text,
        baz: U32
      }, {
        foo: 'foo',
        bar: 'bar',
        baz: 3
      }).Type
    ).toEqual({
      foo: 'Text',
      bar: 'Text',
      baz: 'u32'
    });
  });

  it('gets the value at a particular index', (): void => {
    expect(
      new (
        Struct.with({
          txt: Text,
          u32: U32
        })
      )(registry, { txt: 'foo', u32: 1234 })
        .getAtIndex(1)
        .toString()
    ).toEqual('1234');
  });

  describe('utils', (): void => {
    it('compares against other objects', (): void => {
      const test = {
        foo: 'foo',
        bar: 'bar',
        baz: 3
      };

      expect(
        new Struct(registry, {
          foo: Text,
          bar: Text,
          baz: U32
        }, test).eq(test)
      ).toBe(true);
    });

    it('has a sane toPrimitive', (): void => {
      const S = Struct.with({
        name: 'Text',
        description: 'Vec<Text>',
        fooA: 'Bytes',
        fooB: 'Bytes',
        fooC: Struct.with({
          a: 'u32',
          b: 'u128',
          c: 'Compact<u128>',
          d: 'bool'
        })
      });

      expect(
        new S(registry, {
          name: 'Something',
          description: ['One line', 'Another line'],
          fooA: 'hello world!',
          fooB: '0x123456',
          fooC: {
            a: 1234,
            b: BigInt('1234567890111213141516'),
            c: 123456,
            d: true
          }
        }).toPrimitive()
      ).toEqual({
        name: 'Something',
        description: ['One line', 'Another line'],
        fooA: 'hello world!',
        fooB: '0x123456',
        fooC: {
          a: 1234,
          b: '1234567890111213141516',
          c: 123456,
          d: true
        }
      });
    });

    it('generates sane toRawType', (): void => {
      expect(
        new Struct(registry, {
          accountId: 'AccountId',
          balanceCompact: registry.createClass('Compact<Balance>'),
          blockNumber: registry.createClass('BlockNumber'),
          compactNumber: registry.createClass('Compact<BlockNumber>'),
          optionNumber: registry.createClass('Option<BlockNumber>'),
          counter: U32,
          vector: Vec.with('AccountId')
        }).toRawType()
      ).toEqual(JSON.stringify({
        accountId: 'AccountId',
        balanceCompact: 'Compact<Balance>', // Override in Uint
        blockNumber: 'BlockNumber',
        compactNumber: 'Compact<BlockNumber>',
        optionNumber: 'Option<BlockNumber>',
        counter: 'u32',
        vector: 'Vec<AccountId>'
      }));
    });

    it('generates sane toRawType (via with)', (): void => {
      const Type = Struct.with({
        accountId: 'AccountId',
        balance: registry.createClass('Balance')
      });

      expect(
        new Type(registry).toRawType()
      ).toEqual(JSON.stringify({
        accountId: 'AccountId',
        balance: 'Balance' // Override in Uint
      }));
    });
  });

  it('allows toString with large numbers', (): void => {
    // replicate https://github.com/polkadot-js/api/issues/640
    expect(
      new Struct(registry, {
        blockNumber: registry.createClass('Option<BlockNumber>')
      }, { blockNumber: '0x0000000010abcdef' }).toString()
    ).toEqual('{"blockNumber":279694831}');
  });

  describe('toU8a', (): void => {
    const def: Record<string, any> = {
      foo: 'Bytes',
      method: 'Bytes',
      bar: 'Option<u32>',
      baz: 'bool'
    };
    const val = {
      foo: '0x4269',
      method: '0x99',
      bar: 1,
      baz: true
    };

    it('generates toU8a with undefined', (): void => {
      expect(
        new Struct(registry, def, val).toU8a()
      ).toEqual(new Uint8Array([2 << 2, 0x42, 0x69, 1 << 2, 0x99, 1, 1, 0, 0, 0, 1]));
    });

    it('generates toU8a with true', (): void => {
      expect(
        new Struct(registry, def, val).toU8a(true)
      ).toEqual(new Uint8Array([0x42, 0x69, 0x99, 1, 0, 0, 0, 1]));
    });

    it('generates toU8a with { method: true }', (): void => {
      expect(
        new Struct(registry, def, val).toU8a({ method: true })
      ).toEqual(new Uint8Array([2 << 2, 0x42, 0x69, 0x99, 1, 1, 0, 0, 0, 1]));
    });

    it('has a sane inspect', (): void => {
      expect(
        new Struct(registry, def, val).inspect()
      ).toEqual({
        inner: [
          {
            name: 'foo',
            outer: [new Uint8Array([2 << 2]), new Uint8Array([0x42, 0x69])]
          },
          {
            name: 'method',
            outer: [new Uint8Array([1 << 2]), new Uint8Array([0x99])]
          },
          {
            inner: undefined,
            name: 'bar',
            outer: [new Uint8Array([1]), new Uint8Array([1, 0, 0, 0])]
          },
          {
            name: 'baz',
            outer: [new Uint8Array([1])]
          }
        ]
      });
    });
  });
});
