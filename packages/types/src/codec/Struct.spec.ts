// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ClassOf, TypeRegistry } from './create';
import AccountId from '../primitive/Generic/AccountId';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';
import { CodecTo } from '../types';
import Struct from './Struct';
import Vec from './Vec';

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

  it('decodes null', (): void => {
    expect(
      new (
        Struct.with({
          txt: Text,
          u32: U32
        })
      )(registry, null).toString()
    ).toEqual('{}');
  });

  it('decodes a more complicated type', (): void => {
    const s = new Struct(registry, {
      foo: Vec.with(Struct.with({
        bar: Text
      }))
    }, { foo: [{ bar: 1 }, { bar: 2 }] });
    expect(s.toString()).toBe('{"foo":[{"bar":"1"},{"bar":"2"}]}');
  });

  it('decodes from a Map input', (): void => {
    const input = new Struct(registry, {
      a: U32,
      txt: Text
    }, { a: 42, txt: 'fubar' });
    const s = new Struct(registry, {
      txt: Text,
      foo: U32,
      bar: U32
    }, input);
    expect(s.toString()).toEqual('{"txt":"fubar","foo":0,"bar":0}');
  });

  it('throws when it cannot decode', (): void => {
    expect(
      (): Struct<any> => new (
        Struct.with({
          txt: Text,
          u32: U32
        })
      )(registry, 'ABC')
    ).toThrowError(/Struct: cannot decode type/);
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

    expect((struct as any).txt.toString()).toEqual('foo');
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
  });

  it('allows toString with large numbers', (): void => {
    // replicate https://github.com/polkadot-js/api/issues/640
    expect(
      new Struct(registry, {
        blockNumber: ClassOf(registry, 'Option<BlockNumber>')
      }, { blockNumber: '0x0000000010abcdef' }).toString()
    ).toEqual('{"blockNumber":279694831}');
  });

  it('generates sane toRawType', (): void => {
    expect(
      new Struct(registry, {
        accountId: AccountId,
        balanceCompact: ClassOf(registry, 'Compact<Balance>'),
        blockNumber: ClassOf(registry, 'BlockNumber'),
        compactNumber: ClassOf(registry, 'Compact<BlockNumber>'),
        optionNumber: ClassOf(registry, 'Option<BlockNumber>'),
        counter: U32,
        vector: Vec.with(AccountId)
      }).toRawType()
    ).toEqual(JSON.stringify({
      accountId: 'AccountId',
      balanceCompact: 'Compact<Balance>', // Override in Uint
      blockNumber: 'u32',
      compactNumber: 'Compact<u32>',
      optionNumber: 'Option<u32>',
      counter: 'u32',
      vector: 'Vec<AccountId>'
    }));
  });

  it('generates sane toRawType (via with)', (): void => {
    const Type = Struct.with({
      accountId: AccountId,
      balance: ClassOf(registry, 'Balance')
    });

    expect(
      new Type(registry).toRawType()
    ).toEqual(JSON.stringify({
      accountId: 'AccountId',
      balance: 'Balance' // Override in Uint
    }));
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
  });
});
