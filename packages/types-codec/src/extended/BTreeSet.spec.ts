// Copyright 2017-2025 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { CodecClass, CodecTo } from '@polkadot/types-codec/types';
import type { ITuple } from '../types/interfaces.js';

import { TypeRegistry } from '@polkadot/types';
import { BTreeSet, Enum, I32, Option, Struct, Text, Tuple, U32 } from '@polkadot/types-codec';

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

const mockU32Set = new Set<U32>();

mockU32Set.add(new U32(registry, 2));
mockU32Set.add(new U32(registry, 24));
mockU32Set.add(new U32(registry, 30));
mockU32Set.add(new U32(registry, 80));

const mockU32SetString = '[2,24,30,80]';
const mockU32SetObject = [2, 24, 30, 80];
const mockU32SetHexString = '0x1002000000180000001e00000050000000';
const mockU32SetUint8Array = Uint8Array.from([16, 2, 0, 0, 0, 24, 0, 0, 0, 30, 0, 0, 0, 80, 0, 0, 0]);

const mockI32SetObj = [1000, 0, 255, -255, -1000];
const mockTextSetObj = [
  new Text(registry, 'baz'),
  new Text(registry, 'b'),
  new Text(registry, 'bb'),
  new Text(registry, 'ba'),
  new Text(registry, 'c')
];
const mockTupleSetObj = [
  new U32TextTuple(registry, [2, 'ba']),
  new U32TextTuple(registry, [2, 'bb']),
  new U32TextTuple(registry, [2, 'b']),
  new U32TextTuple(registry, [1, 'baz'])
];
const mockStructSetObj = [
  new MockStruct(registry, { int: 1, text: 'b' }),
  new MockStruct(registry, { int: -1, text: 'b' }),
  new MockStruct(registry, { int: -1, text: 'ba' }),
  new MockStruct(registry, { int: -2, text: 'baz' })
];
const mockEnumSetObj = [
  new MockEnum(registry, { Key3: new U32TextTuple(registry, [2, 'ba']) }),
  new MockEnum(registry, { Key3: new U32TextTuple(registry, [2, 'b']) }),
  new MockEnum(registry, { Key2: new MockStruct(registry, { int: -1, text: 'b' }) }),
  new MockEnum(registry, { Key1: new MockStruct(registry, { int: 1, text: 'b' }) }),
  new MockEnum(registry, { Key1: new MockStruct(registry, { int: -1, text: 'b' }) })
];

const mockOptionEnumSetObj = [
  new Option(registry, MockEnum, null),
  new Option(registry, MockEnum, { Key3: new U32TextTuple(registry, [2, 'ba']) }),
  new Option(registry, MockEnum, { Key3: new U32TextTuple(registry, [2, 'b']) }),
  new Option(registry, MockEnum, { Key2: new MockStruct(registry, { int: -1, text: 'b' }) }),
  new Option(registry, MockEnum, { Key1: new MockStruct(registry, { int: 1, text: 'b' }) }),
  new Option(registry, MockEnum, { Key1: new MockStruct(registry, { int: -1, text: 'b' }) })
];
const mockDuplicateTextSetObj = [
  new Text(registry, 'baz'),
  new Text(registry, 'bb'),
  new Text(registry, 'bb'), // duplicate.
  new Text(registry, 'ba'),
  new Text(registry, 'c')
];

describe('BTreeSet', (): void => {
  describe('decoding', (): void => {
    const testDecode = (type: string, input: unknown, output: string): void =>
      it(`can decode from ${type}`, (): void => {
        const s = new BTreeSet(registry, U32, input as string);

        expect(s.toString()).toBe(output);
      });

    testDecode('Set', mockU32Set, mockU32SetString);
    testDecode('hex', mockU32SetHexString, mockU32SetString);
    testDecode('Uint8Array', mockU32SetUint8Array, mockU32SetString);

    testDecode('Set', mockU32Set, mockU32SetString);
    testDecode('hex', mockU32SetHexString, mockU32SetString);
    testDecode('Uint8Array', mockU32SetUint8Array, mockU32SetString);
  });

  describe('encoding multiple values', (): void => {
    const testEncode = (to: CodecTo, expected: any): void =>
      it(`can encode ${to}`, (): void => {
        const s = new BTreeSet(registry, U32, mockU32Set);

        expect(s[to]()).toEqual(expected);
      });

    testEncode('toHex', mockU32SetHexString);
    testEncode('toJSON', mockU32SetObject);
    testEncode('toU8a', mockU32SetUint8Array);
    testEncode('toString', mockU32SetString);
  });

  it('decodes null', (): void => {
    expect(
      new (
        BTreeSet.with(U32)
      )(registry, null).toString()
    ).toEqual('[]');
  });

  it('decodes reusing instantiated inputs', (): void => {
    const foo = new Text(registry, 'bar');

    expect(
      (new BTreeSet(registry, Text, new Set([foo]))).eq(new Set([foo]))
    ).toBe(true);
  });

  it('decodes within more complicated types', (): void => {
    const s = new Struct(registry, {
      placeholder: U32,
      value: BTreeSet.with(U32)
    });

    s.set('value', new BTreeSet(registry, U32, mockU32Set));
    expect(s.toString()).toBe('{"placeholder":0,"value":[2,24,30,80]}');
  });

  it('throws when it cannot decode', (): void => {
    expect(
      (): BTreeSet<U32> => new (
        BTreeSet.with(U32)
      )(registry, 'ABC')
    ).toThrow(/BTreeSet: cannot decode type/);
  });

  describe('enocodedLength & initialU8aLength', (): void => {
    it('correctly encodes length', (): void => {
      expect(
        new (
          BTreeSet.with(U32))(registry, mockU32Set).encodedLength
      ).toEqual(17);
    });

    it('correctly encodes/decodes empty', (): void => {
      const none = new (BTreeSet.with(U32))(registry, []);

      // only the length byte
      expect(none.toHex()).toEqual('0x00');
      expect(none.encodedLength).toEqual(1);
      expect(
        (new (BTreeSet.with(U32))(registry, none.toHex())).initialU8aLength
      ).toEqual(none.encodedLength);
    });

    it('correctly encodes/decodes filled', (): void => {
      const some = new (BTreeSet.with(U32))(registry, [1, 2]);

      // length byte + 2 values, 2 << 2 with u32 values
      expect(some.toHex()).toEqual('0x080100000002000000');
      expect(some.encodedLength).toEqual(1 + (4 * 2));
      expect(
        (new (BTreeSet.with(U32))(registry, some.toHex())).initialU8aLength
      ).toEqual(some.encodedLength);
    });
  });

  describe('sorting', (): void => {
    it('correctly sorts numeric values', (): void => {
      expect(
        Array.from(new (BTreeSet.with(I32))(registry, mockI32SetObj)).map((k) => k.toNumber())
      ).toEqual([-1000, -255, 0, 255, 1000]);
    });

    it('correctly sorts text values', (): void => {
      expect(
        Array.from(new (BTreeSet.with(Text))(registry, mockTextSetObj)).map((k) => k.toString())
      ).toEqual(['b', 'ba', 'baz', 'bb', 'c']);
    });

    it('Reject duplicate values', (): void => {
      expect(
        () => new (BTreeSet.with(Text))(registry, mockDuplicateTextSetObj)
      ).toThrow(/Duplicate value in BTreeSet/);
    });

    it('correctly sorts complex tuple values', (): void => {
      expect(
        Array.from(new (BTreeSet.with(U32TextTuple))(registry, mockTupleSetObj)).map((k) => k.toJSON())
      ).toEqual([[1, 'baz'], [2, 'b'], [2, 'ba'], [2, 'bb']]);
    });

    it('correctly sorts complex struct values', (): void => {
      expect(
        Array.from(new (BTreeSet.with(MockStruct))(registry, mockStructSetObj)).map((k) => k.toJSON())
      ).toEqual([
        { int: -1, text: 'b' },
        { int: 1, text: 'b' },
        { int: -1, text: 'ba' },
        { int: -2, text: 'baz' }
      ]);
    });

    it('correctly sorts complex Option(enum) values', (): void => {
      expect(
        Array.from(new (BTreeSet.with(MockOptionEnum))(registry, mockOptionEnumSetObj)).map((k) => k.value.toJSON())
      ).toEqual([
        null,
        { key1: { int: -1, text: 'b' } },
        { key1: { int: 1, text: 'b' } },
        { key2: { int: -1, text: 'b' } },
        { key3: [2, 'b'] },
        { key3: [2, 'ba'] }
      ]);
    });

    it('correctly sorts complex enum values', (): void => {
      expect(
        Array.from(new (BTreeSet.with(MockEnum))(registry, mockEnumSetObj)).map((k) => k.toJSON())
      ).toEqual([
        { key1: { int: -1, text: 'b' } },
        { key1: { int: 1, text: 'b' } },
        { key2: { int: -1, text: 'b' } },
        { key3: [2, 'b'] },
        { key3: [2, 'ba'] }
      ]);
    });
  });

  it('generates sane toRawTypes', (): void => {
    expect(new (BTreeSet.with(U32))(registry).toRawType()).toBe('BTreeSet<u32>');
    expect(new (BTreeSet.with(Text))(registry).toRawType()).toBe('BTreeSet<Text>');
    expect(new (BTreeSet.with(Struct.with({ a: U32, b: Text })))(registry).toRawType())
      .toBe('BTreeSet<{"a":"u32","b":"Text"}>');
  });

  it('has a sane inspect', (): void => {
    expect(
      new (BTreeSet.with(U32))(registry, [1, 2, 3, 4]).inspect()
    ).toEqual({
      inner: [
        { outer: [new Uint8Array([1, 0, 0, 0])] },
        { outer: [new Uint8Array([2, 0, 0, 0])] },
        { outer: [new Uint8Array([3, 0, 0, 0])] },
        { outer: [new Uint8Array([4, 0, 0, 0])] }
      ],
      outer: [new Uint8Array([4 << 2])]
    });
  });
});
