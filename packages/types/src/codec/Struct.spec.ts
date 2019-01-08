// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecTo } from '../types';
import Struct from './Struct';
import Text from '../Text';
import U32 from '../U32';
import Vector from './Vector';

describe('Struct', () => {
  describe('decoding', () => {
    const testDecode = (type: string, input: any) =>
      it(`can decode from ${type}`, () => {
        const s = new Struct({
          foo: Text,
          bar: U32
        }, input);
        expect([...s.keys()]).toEqual(['foo', 'bar']);
        expect(
          [...s.values()].map((v) =>
            v.toString()
          )
        ).toEqual(['bazzing', '69']);
      });

    testDecode('array', ['bazzing', 69]);
    testDecode('hex', '0x1c62617a7a696e6745000000');
    testDecode('object', { foo: 'bazzing', bar: 69 });
    testDecode('Uint8Array', Uint8Array.from([28, 98, 97, 122, 122, 105, 110, 103, 69, 0, 0, 0]));
  });

  describe('encoding', () => {
    const testEncode = (to: CodecTo, expected: any) =>
      it(`can encode ${to}`, () => {
        const s = new Struct({
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

  it('decodes null', () => {
    expect(
      new (
        Struct.with({
          txt: Text,
          u32: U32
        })
      )(null).toString()
    ).toEqual('{}');
  });

  it('decodes a more complicated type', () => {
    const s = new Struct({
      foo: Vector.with(Struct.with({
        bar: Text
      }))
    }, { foo: [{ bar: 1 }, { bar: 2 }] });
    expect(s.toString()).toBe('{"foo":[{"bar":"1"},{"bar":"2"}]}');
  });

  it('decodes from a Map input', () => {
    const input = new Struct({
      a: U32,
      txt: Text
    }, { a: 42, txt: 'fubar' });
    const s = new Struct({
      txt: Text,
      foo: U32,
      bar: U32
    }, input);
    expect(s.toString()).toEqual('{"txt":"fubar","foo":0,"bar":0}');
  });

  it('throws when it cannot decode', () => {
    expect(
      () => new (
        Struct.with({
          txt: Text,
          u32: U32
        })
      )('ABC')
    ).toThrowError(/Struct: cannot decode type/);
  });

  it('provides a clean toString()', () => {
    expect(
      new (
        Struct.with({
          txt: Text,
          u32: U32
        })
      )({ txt: 'foo', u32: 0x123456 }).toString()
    ).toEqual('{"txt":"foo","u32":1193046}');
  });

  it('exposes the properties on the object', () => {
    const struct = new (
      Struct.with({
        txt: Text,
        u32: U32
      })
    )({ txt: 'foo', u32: 0x123456 });

    expect((struct as any).txt.toString()).toEqual('foo');
    expect((struct as any).u32.toNumber()).toEqual(0x123456);
  });

  it('correctly encodes length', () => {
    expect(
      new (
        Struct.with({
          txt: Text,
          u32: U32
        })
      )({ foo: 'bazzing', bar: 69 }).encodedLength
    ).toEqual(5);
  });

  it('exposes the types', () => {
    expect(
      new Struct({
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
      baz: 'U32'
    });
  });

  it('gets the value at a particular index', () => {
    expect(
      new (
        Struct.with({
          txt: Text,
          u32: U32
        })
      )({ txt: 'foo', u32: 1234 })
        .getAtIndex(1)
        .toString()
    ).toEqual('1234');
  });
});
