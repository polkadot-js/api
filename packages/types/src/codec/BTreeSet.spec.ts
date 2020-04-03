// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../create';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';
import Struct from './Struct';
import { CodecTo } from '../types';

import BTreeSet from './BTreeSet';

const registry = new TypeRegistry();

const mockU32Set = new Set<U32>();

mockU32Set.add(new U32(registry, 2));
mockU32Set.add(new U32(registry, 24));
mockU32Set.add(new U32(registry, 30));
mockU32Set.add(new U32(registry, 80));

const mockU32SetString = '[2,24,30,80]';
const mockU32SetObject = [2, 24, 30, 80];
const mockU32SetHexString = '0x1002000000180000001e00000050000000';
const mockU32SetUint8Array = Uint8Array.from([16, 2, 0, 0, 0, 24, 0, 0, 0, 30, 0, 0, 0, 80, 0, 0, 0]);

describe('BTreeSet', (): void => {
  describe('decoding', (): void => {
    const testDecode = (type: string, input: any, output: string): void =>
      it(`can decode from ${type}`, (): void => {
        const s = new BTreeSet(registry, U32, input);

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
    ).toThrowError(/BTreeSet: cannot decode type/);
  });

  it('correctly encodes length', (): void => {
    expect(
      new (
        BTreeSet.with(U32))(registry, mockU32Set).encodedLength
    ).toEqual(17);
  });

  it('generates sane toRawTypes', (): void => {
    expect(new (BTreeSet.with(U32))(registry).toRawType()).toBe('BTreeSet<u32>');
    expect(new (BTreeSet.with(Text))(registry).toRawType()).toBe('BTreeSet<Text>');
    expect(new (BTreeSet.with(Struct.with({ a: U32, b: Text })))(registry).toRawType())
      .toBe('BTreeSet<{"a":"u32","b":"Text"}>');
  });
});
