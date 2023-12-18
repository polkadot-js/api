// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { CodecClass, ITuple } from '@polkadot/types-codec/types';

import { TypeRegistry } from '@polkadot/types';
import { BTreeMap, Enum, I32, Option, Struct, Text, Tuple, U32 } from '@polkadot/types-codec';
import { stringToU8a } from '@polkadot/util';

const registry = new TypeRegistry();

class U32TextTuple extends (Tuple.with([U32, Text]) as unknown as CodecClass<ITuple<[U32, Text]>>) {}
// Reason: We purposefully want `text` to be the first key of the struct and take priority during sorting
// eslint-disable-next-line sort-keys
class MockStruct extends Struct.with({ text: Text, int: I32 }) {}
class MockEnum extends Enum.with({
  Key1: MockStruct,
  Key2: MockStruct,
  Key3: U32TextTuple
}) {}
class MockOptionEnum extends Option.with(MockEnum) {}

const mockU32TextMap = new Map<Text, U32>();
const mockU32DuplicateTextMap = new Map<Text, U32>();
const mockU32TupleMap = new Map<ITuple<[U32, Text]>, U32>();
const mockU32I32Map = new Map<I32, U32>();
const mockU32StructMap = new Map<MockStruct, U32>();
const mockU32EnumMap = new Map<MockEnum, U32>();
const mockU32OptionEnumMap = new Map<MockOptionEnum, U32>();

mockU32TextMap.set(new Text(registry, 'bazzing'), new U32(registry, 69));

mockU32DuplicateTextMap.set(new Text(registry, 'bazzing'), new U32(registry, 42));
mockU32DuplicateTextMap.set(new Text(registry, 'bazzing'), new U32(registry, 43));

mockU32TupleMap.set((new U32TextTuple(registry, [2, 'ba'])), new U32(registry, 42));
mockU32TupleMap.set((new U32TextTuple(registry, [2, 'b'])), new U32(registry, 7));
mockU32TupleMap.set((new U32TextTuple(registry, [1, 'baz'])), new U32(registry, 13));

mockU32I32Map.set(new I32(registry, 255), new U32(registry, 69));
mockU32I32Map.set(new I32(registry, -255), new U32(registry, 42));
mockU32I32Map.set(new I32(registry, 1000), new U32(registry, 7));
mockU32I32Map.set(new I32(registry, -1000), new U32(registry, 25));
mockU32I32Map.set(new I32(registry, 0), new U32(registry, 13));

mockU32StructMap.set(new MockStruct(registry, { int: 1, text: 'b' }), new U32(registry, 42));
mockU32StructMap.set(new MockStruct(registry, { int: -1, text: 'b' }), new U32(registry, 7));
mockU32StructMap.set(new MockStruct(registry, { int: -1, text: 'ba' }), new U32(registry, 25));
mockU32StructMap.set(new MockStruct(registry, { int: -2, text: 'baz' }), new U32(registry, 13));

mockU32EnumMap.set(new MockEnum(registry, { Key3: new U32TextTuple(registry, [2, 'ba']) }), new U32(registry, 13));
mockU32EnumMap.set(new MockEnum(registry, { Key3: new U32TextTuple(registry, [2, 'b']) }), new U32(registry, 42));
mockU32EnumMap.set(new MockEnum(registry, { Key2: new MockStruct(registry, { int: -1, text: 'b' }) }), new U32(registry, 7));
mockU32EnumMap.set(new MockEnum(registry, { Key1: new MockStruct(registry, { int: 1, text: 'b' }) }), new U32(registry, 25));
mockU32EnumMap.set(new MockEnum(registry, { Key1: new MockStruct(registry, { int: -1, text: 'b' }) }), new U32(registry, 69));

mockU32OptionEnumMap.set(new Option(registry, MockEnum, null), new U32(registry, 13));
mockU32OptionEnumMap.set(new Option(registry, MockEnum, { Key3: new U32TextTuple(registry, [2, 'ba']) }), new U32(registry, 13));
mockU32OptionEnumMap.set(new Option(registry, MockEnum, { Key3: new U32TextTuple(registry, [2, 'b']) }), new U32(registry, 42));
mockU32OptionEnumMap.set(new Option(registry, MockEnum, { Key2: new MockStruct(registry, { int: -1, text: 'b' }) }), new U32(registry, 7));
mockU32OptionEnumMap.set(new Option(registry, MockEnum, { Key1: new MockStruct(registry, { int: 1, text: 'b' }) }), new U32(registry, 25));
mockU32OptionEnumMap.set(new Option(registry, MockEnum, { Key1: new MockStruct(registry, { int: -1, text: 'b' }) }), new U32(registry, 69));

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
      value: 'BTreeMap<Text, U32>'
    });

    s.set('value', new (BTreeMap.with(Text, U32))(registry, mockU32TextMap));
    expect(s.toString()).toBe('{"placeholder":0,"value":{"bazzing":69}}');
  });

  it('throws on duplicate keys', (): void => {
    expect(
      () => new (BTreeMap.with(Text, U32))(registry, mockU32DuplicateTextMap)
    ).toThrow(/Duplicate value in BTreeMap/);
  });

  it('throws when it cannot decode', (): void => {
    expect(
      (): BTreeMap<Text, U32> => new (
        BTreeMap.with(Text, U32)
      )(registry, 'ABC')
    ).toThrow(/Map: cannot decode type/);
  });

  it('correctly encodes length', (): void => {
    expect(
      new (
        BTreeMap.with(Text, U32))(registry, mockU32TextMap).encodedLength
    ).toEqual(13);
  });

  it('correctly sorts simple keys', (): void => {
    expect(
      Array.from(new (BTreeMap.with(I32, U32))(registry, mockU32I32Map).keys()).map((k) => k.toNumber())
    ).toEqual([-1000, -255, 0, 255, 1000]);
  });

  it('correctly sorts tuple keys', (): void => {
    expect(
      Array.from(new (BTreeMap.with(U32TextTuple, U32))(registry, mockU32TupleMap).keys()).map((k) => k.toJSON())
    ).toEqual([[1, 'baz'], [2, 'b'], [2, 'ba']]);
  });

  it('correctly sorts struct keys', (): void => {
    expect(
      Array.from(new (BTreeMap.with(MockStruct, U32))(registry, mockU32StructMap).keys()).map((k) => k.toJSON())
    ).toEqual([
      { int: -1, text: 'b' },
      { int: 1, text: 'b' },
      { int: -1, text: 'ba' },
      { int: -2, text: 'baz' }
    ]);
  });

  it('correctly sorts Option(Enum) keys', (): void => {
    expect(
      Array.from(new (BTreeMap.with(MockOptionEnum, U32))(registry, mockU32OptionEnumMap).keys()).map((k) => k.value.toJSON())
    ).toEqual([
      null,
      { key1: { int: -1, text: 'b' } },
      { key1: { int: 1, text: 'b' } },
      { key2: { int: -1, text: 'b' } },
      { key3: [2, 'b'] },
      { key3: [2, 'ba'] }
    ]);
  });

  it('correctly sorts enum keys', (): void => {
    expect(
      Array.from(new (BTreeMap.with(MockEnum, U32))(registry, mockU32EnumMap).keys()).map((k) => k.toJSON())
    ).toEqual([
      { key1: { int: -1, text: 'b' } },
      { key1: { int: 1, text: 'b' } },
      { key2: { int: -1, text: 'b' } },
      { key3: [2, 'b'] },
      { key3: [2, 'ba'] }
    ]);
  });

  it('correctly serializes/deserializes to/from json with numeric keys', (): void => {
    expect(
      new (BTreeMap.with(I32, U32))(
        registry,
        new (BTreeMap.with(I32, U32))(registry, mockU32I32Map).toJSON()
      ).toJSON()
    ).toEqual({ '-1000': 25, '-255': 42, 0: 13, 1000: 7, 255: 69 });
  });

  it('correctly serializes/deserializes to/from json with text keys', (): void => {
    expect(
      new (BTreeMap.with(Text, U32))(
        registry,
        new (BTreeMap.with(Text, U32))(registry, mockU32TextMap).toJSON()
      ).toJSON()
    ).toEqual({ bazzing: 69 });
  });

  it('correctly serializes/deserializes to/from json with tuple keys', (): void => {
    expect(
      new (BTreeMap.with(U32TextTuple, U32))(
        registry,
        new (BTreeMap.with(U32TextTuple, U32))(registry, mockU32TupleMap).toJSON()
      ).toJSON()
    ).toEqual({ '[1,"baz"]': 13, '[2,"b"]': 7, '[2,"ba"]': 42 });
  });

  it('correctly serializes/deserializes to/from json with struct keys', (): void => {
    expect(
      new (BTreeMap.with(MockStruct, U32))(
        registry,
        new (BTreeMap.with(MockStruct, U32))(registry, mockU32StructMap).toJSON()
      ).toJSON()
    ).toEqual({
      '{"text":"b","int":-1}': 7,
      '{"text":"b","int":1}': 42,
      '{"text":"ba","int":-1}': 25,
      '{"text":"baz","int":-2}': 13
    });
  });

  it('correctly serializes/deserializes to/from json with enum keys', (): void => {
    expect(
      new (BTreeMap.with(MockEnum, U32))(
        registry,
        new (BTreeMap.with(MockEnum, U32))(registry, mockU32EnumMap).toJSON()
      ).toJSON()
    ).toEqual({
      '{"key1":{"text":"b","int":-1}}': 69,
      '{"key1":{"text":"b","int":1}}': 25,
      '{"key2":{"text":"b","int":-1}}': 7,
      '{"key3":[2,"b"]}': 42,
      '{"key3":[2,"ba"]}': 13
    });
  });

  it('generates sane toRawTypes', (): void => {
    expect(new (BTreeMap.with(Text, U32))(registry).toRawType()).toBe('BTreeMap<Text,u32>');
    expect(new (BTreeMap.with(Text, Text))(registry).toRawType()).toBe('BTreeMap<Text,Text>');
    expect(new (BTreeMap.with(Text, Struct.with({ a: U32, b: Text })))(registry).toRawType())
      .toBe('BTreeMap<Text,{"a":"u32","b":"Text"}>');
  });

  it('has a sane inspect', (): void => {
    expect(
      new (BTreeMap.with(Text, Text))(registry, new Map([
        [new Text(registry, '1'), new Text(registry, 'foo')],
        [new Text(registry, '2'), new Text(registry, 'bar')],
        [new Text(registry, '3'), new Text(registry, 'baz')]
      ])).inspect()
    ).toEqual({
      inner: [
        { outer: [new Uint8Array([1 << 2]), stringToU8a('1')] },
        { outer: [new Uint8Array([3 << 2]), stringToU8a('foo')] },
        { outer: [new Uint8Array([1 << 2]), stringToU8a('2')] },
        { outer: [new Uint8Array([3 << 2]), stringToU8a('bar')] },
        { outer: [new Uint8Array([1 << 2]), stringToU8a('3')] },
        { outer: [new Uint8Array([3 << 2]), stringToU8a('baz')] }
      ],
      outer: [new Uint8Array([3 << 2])]
    });
  });
});
