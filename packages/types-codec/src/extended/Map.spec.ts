// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecTo } from '@polkadot/types-codec/types';

import { TypeRegistry } from '@polkadot/types';
import { CodecMap, Text, U32 } from '@polkadot/types-codec';
import { stringToU8a } from '@polkadot/util';

const registry = new TypeRegistry();
const mockU32TextMap = new Map<Text, U32>();

mockU32TextMap.set(new Text(registry, 'bazzing'), new U32(registry, 69));

const mockU32TextMapString = '{"bazzing":69}';
const mockU32TextMapObject = { bazzing: 69 };
const mockU32TextMapHexString = '0x041c62617a7a696e6745000000';
const mockU32TextMapUint8Array = Uint8Array.from([4, 28, 98, 97, 122, 122, 105, 110, 103, 69, 0, 0, 0]);

const mockU32U32Map = new Map<U32, U32>();

mockU32U32Map.set(new U32(registry, 1), new U32(registry, 2));
mockU32U32Map.set(new U32(registry, 23), new U32(registry, 24));
mockU32U32Map.set(new U32(registry, 28), new U32(registry, 30));
mockU32U32Map.set(new U32(registry, 45), new U32(registry, 80));

const mockU32U32MapString = '{"1":2,"23":24,"28":30,"45":80}';
const mockU32U32MapObject = { 1: 2, 23: 24, 28: 30, 45: 80 };
const mockU32U32MapHexString = '0x10043102000000083233180000000832381e00000008343550000000';
const mockU32U32MapUint8Array = Uint8Array.from([16, 4, 49, 2, 0, 0, 0, 8, 50, 51, 24, 0, 0, 0, 8, 50, 56, 30, 0, 0, 0, 8, 52, 53, 80, 0, 0, 0]);

describe('CodecMap', (): void => {
  describe('decoding', (): void => {
    const testDecode = (type: string, input: unknown, output: string): void =>
      it(`can decode from ${type}`, (): void => {
        const s = new CodecMap(registry, Text, U32, input as string);

        expect(s.toString()).toBe(output);
      });

    testDecode('map', mockU32TextMap, mockU32TextMapString);
    testDecode('hex', mockU32TextMapHexString, mockU32TextMapString);
    testDecode('Uint8Array', mockU32TextMapUint8Array, mockU32TextMapString);

    testDecode('map', mockU32U32Map, mockU32U32MapString);
    testDecode('hex', mockU32U32MapHexString, mockU32U32MapString);
    testDecode('Uint8Array', mockU32U32MapUint8Array, mockU32U32MapString);
  });

  describe('encoding', (): void => {
    const testEncode = (to: CodecTo, expected: any): void =>
      it(`can encode ${to}`, (): void => {
        const s = new CodecMap(registry, Text, U32, mockU32TextMap, 'BTreeMap');

        expect(s[to]()).toEqual(expected);
      });

    testEncode('toHex', mockU32TextMapHexString);
    testEncode('toJSON', mockU32TextMapObject);
    testEncode('toU8a', mockU32TextMapUint8Array);
    testEncode('toString', mockU32TextMapString);
  });

  describe('encoding multiple values', (): void => {
    const testEncode = (to: CodecTo, expected: any): void =>
      it(`can encode ${to}`, (): void => {
        const s = new CodecMap(registry, Text, U32, mockU32U32Map, 'BTreeMap');

        expect(s[to]()).toEqual(expected);
      });

    testEncode('toHex', mockU32U32MapHexString);
    testEncode('toJSON', mockU32U32MapObject);
    testEncode('toU8a', mockU32U32MapUint8Array);
    testEncode('toString', mockU32U32MapString);
  });

  describe('enocodedLength & initialU8aLength', (): void => {
    it('correctly encodes/decodes empty', (): void => {
      const none = new CodecMap(registry, Text, Text, new Map([]));

      // only the length byte
      expect(none.toHex()).toEqual('0x00');
      expect(none.encodedLength).toEqual(1);
      expect(
        new CodecMap(registry, Text, Text, none.toHex()).initialU8aLength
      ).toEqual(none.encodedLength);
    });

    it('correctly encodes/decodes filled', (): void => {
      const some = new CodecMap(registry, Text, Text, new Map([
        [new Text(registry, '1'), new Text(registry, 'foo')],
        [new Text(registry, '2'), new Text(registry, 'bar')]
      ]));

      // length byte + 2 values, 2 << 2 with Text values
      expect(some.toHex()).toEqual('0x0804310c666f6f04320c626172');
      expect(some.encodedLength).toEqual(1 + ((1 + 1) * 2) + ((1 + 3) * 2));
      expect(
        new CodecMap(registry, Text, Text, some.toHex()).initialU8aLength
      ).toEqual(some.encodedLength);
    });
  });

  it('has a sane inspect', (): void => {
    expect(
      new CodecMap(registry, Text, Text, new Map([
        [new Text(registry, '1'), new Text(registry, 'foo')],
        [new Text(registry, '2'), new Text(registry, 'bar')]
      ])).inspect()
    ).toEqual({
      inner: [
        { outer: [new Uint8Array([1 << 2]), stringToU8a('1')] },
        { outer: [new Uint8Array([3 << 2]), stringToU8a('foo')] },
        { outer: [new Uint8Array([1 << 2]), stringToU8a('2')] },
        { outer: [new Uint8Array([3 << 2]), stringToU8a('bar')] }
      ],
      outer: [new Uint8Array([2 << 2])]
    });
  });
});
