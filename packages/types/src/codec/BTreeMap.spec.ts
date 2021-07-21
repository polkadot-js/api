// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';
import { I32, Text, U32 } from '../primitive';
import { ITuple } from '../types/interfaces'
import { Constructor } from '../types'
import { BTreeMap, Struct, Tuple } from '.';

const registry = new TypeRegistry();

class U32TextTuple extends (Tuple.with([U32, Text]) as unknown as Constructor<ITuple<[U32, Text]>>) {}

const mockU32TextMap = new Map<Text, U32>();
const mockU32TupleMap = new Map<ITuple<[U32, Text]>, U32>() 
const mockU32I32Map = new Map<I32, U32>()

mockU32TextMap.set(new Text(registry, 'bazzing'), new U32(registry, 69));

mockU32TupleMap.set((new U32TextTuple(registry, [2, 'ba'])), new U32(registry, 42))
mockU32TupleMap.set((new U32TextTuple(registry, [2, 'b'])), new U32(registry, 7))
mockU32TupleMap.set((new U32TextTuple(registry, [1, 'baz'])), new U32(registry, 13))

mockU32I32Map.set(new I32(registry, 255), new U32(registry, 69))
mockU32I32Map.set(new I32(registry, -255), new U32(registry, 42))
mockU32I32Map.set(new I32(registry, 1000), new U32(registry, 7))
mockU32I32Map.set(new I32(registry, -1000), new U32(registry, 25))
mockU32I32Map.set(new I32(registry, 0), new U32(registry, 13))

describe('BTreeMap', (): void => {
  it('decodes null', (): void => {
    expect(
      new (
        BTreeMap.with(Text, U32)
      )(registry, null).toString()
    ).toEqual('{}');
  });

  it('decodes reusing instantiated inputs', (): void => {
    const key = new Text(registry, 'foo');
    const val = new Text(registry, 'bar');

    expect(
      (new (BTreeMap.with(Text, Text))(registry, new Map([[key, val]]))).eq(new Map([[key, val]]))
    ).toBe(true);
  });

  it('decodes within more complicated types', (): void => {
    const s = new Struct(registry, {
      placeholder: U32,
      value: 'BTreeMap<Text, U32>' as 'u32'
    });

    s.set('value', new (BTreeMap.with(Text, U32))(registry, mockU32TextMap));
    expect(s.toString()).toBe('{"placeholder":0,"value":{"bazzing":69}}');
  });

  it('throws when it cannot decode', (): void => {
    expect(
      (): BTreeMap<Text, U32> => new (
        BTreeMap.with(Text, U32)
      )(registry, 'ABC')
    ).toThrowError(/Map: cannot decode type/);
  });

  it('correctly encodes length', (): void => {
    expect(
      new (
        BTreeMap.with(Text, U32))(registry, mockU32TextMap).encodedLength
    ).toEqual(13);
  });

  it('correctly sorts simple keys', (): void => {
    expect(
      Array.from(new (BTreeMap.with(I32, U32))(registry, mockU32I32Map).keys()).map(k => k.toNumber())
    ).toEqual([-1000, -255, 0, 255, 1000]);
  });

  it('correctly sorts complex keys', (): void => {
    expect(
      Array.from(new (BTreeMap.with(U32TextTuple, U32))(registry, mockU32TupleMap).keys()).map(k => k.toJSON())
    ).toEqual([ [1, 'baz'], [2, 'b'], [2, 'ba'] ]);
  });

  it('correctly serializes/deserializes to/from json with numeric keys', (): void => {
    expect(
      new (BTreeMap.with(I32, U32))(
        registry,
        new (BTreeMap.with(I32, U32))(registry, mockU32I32Map).toJSON()
      ).toJSON()
    ).toEqual({ '255': 69, '-255': 42, '1000': 7, '-1000': 25, '0': 13 })
  })

  it('correctly serializes/deserializes to/from json with text keys', (): void => {
    expect(
      new (BTreeMap.with(Text, U32))(
        registry,
        new (BTreeMap.with(Text, U32))(registry, mockU32TextMap).toJSON()
      ).toJSON()
    ).toEqual({ 'bazzing': 69 })
  })

  it('correctly serializes/deserializes to/from json with tuple keys', (): void => {
    expect(
      new (BTreeMap.with(U32TextTuple, U32))(
        registry,
        new (BTreeMap.with(U32TextTuple, U32))(registry, mockU32TupleMap).toJSON()
      ).toJSON()
    ).toEqual({ '[2,"ba"]': 42, '[2,"b"]': 7,'[1,"baz"]': 13 })
  })

  it('generates sane toRawTypes', (): void => {
    expect(new (BTreeMap.with(Text, U32))(registry).toRawType()).toBe('BTreeMap<Text,u32>');
    expect(new (BTreeMap.with(Text, Text))(registry).toRawType()).toBe('BTreeMap<Text,Text>');
    expect(new (BTreeMap.with(Text, Struct.with({ a: U32, b: Text })))(registry).toRawType())
      .toBe('BTreeMap<Text,{"a":"u32","b":"Text"}>');
  });
});
