// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Struct from './Struct';
import Text from '../Text';
import U32 from '../U32';
import Vector from './Vector';


/**
 * Helper function to test decoding.
 */
const testDecode = (type, input) =>
  it(`can decode from ${type}`, () => {
    const s = new Struct({
      foo: Text,
      bar: U32
    }, input);
    expect(s.keys()).toEqual(['foo', 'bar']);
    expect(
      s.values().map((v) =>
        v.toString()
      )
    ).toEqual(['bazzing', '69']);
  });

describe('Struct', () => {

  testDecode('object', { foo: 'bazzing', bar: 69 });
  testDecode('Uint8Array', Uint8Array.from([28, 98, 97, 122, 122, 105, 110, 103, 69, 0, 0, 0]));

  it('decoded a more complicated type', () => {
    const s = new Struct({
      foo: Vector.with(Struct.with({
        bar: Text
      }))
    }, { foo: [{ bar: 1 }, { bar: 2 }] });
    expect(s.toString()).toBe('{foo: [{bar: 1}, {bar: 2}]}');
  })

  it('provides a clean toString()', () => {
    expect(
      new (
        Struct.with({
          txt: Text,
          u32: U32
        })
      )({ txt: 'foo', u32: 0x123456 }).toString()
    ).toEqual(`{txt: foo, u32: 1193046}`);
  });

  it('exposes the types', () => {
    expect(
      new Struct({
        foo: Text,
        bar: Text,
        baz: U32
      }).Type
    ).toEqual({
      foo: 'Text',
      bar: 'Text',
      baz: 'U32'
    });
  });

  it('exposes the keys/values', () => {
    const test = new Struct({
      foo: Text,
      bar: U32
    }, { foo: 'bazzing', bar: 69 });

    expect(test.keys()).toEqual(['foo', 'bar']);
    expect(
      test.values().map((v) =>
        v.toString()
      )
    ).toEqual(['bazzing', '69']);
  });
});
