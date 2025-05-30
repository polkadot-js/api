// Copyright 2017-2025 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { PropIndex } from '@polkadot/types/interfaces/democracy';
import type { Codec, CodecTo, ITuple } from '@polkadot/types-codec/types';

import { createTypeUnsafe, GenericAccountId as AccountId, Metadata, TypeRegistry } from '@polkadot/types';
import { Text, u32, Vec } from '@polkadot/types-codec';
import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';
import { decodeAddress, randomAsU8a } from '@polkadot/util-crypto';

import { perf } from '../test/performance.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);
const VecU32 = Vec.with(u32);

registry.setMetadata(metadata);

describe('Vec', (): void => {
  let vector: Vec<Codec>;

  beforeEach((): void => {
    vector = new Vec(registry, Text, ['1', '23', '345', '4567', new Text(registry, '56789')]);
  });

  describe('constructor', (): void => {
    it('fails construction on non-Array, non-Hex inputs', (): void => {
      // @ts-expect-error We are intentionally passing a non-valid input
      expect(() => new Vec(registry, Text, '12345')).toThrow(/decoding, found string/);
      // @ts-expect-error We are intentionally passing a non-valid input
      expect(() => new Vec(registry, Text, {})).toThrow(/decoding, found object/);
    });

    it('allows construction via hex & null values', (): void => {
      // @ts-expect-error We are intentionally passing a non-valid input
      expect(new Vec(registry, Text, null)).toHaveLength(0);
    });

    it('decodes a complex type via construction (1)', (): void => {
      const test = createTypeUnsafe<Vec<ITuple<[PropIndex, AccountId]>>>(registry, 'Vec<(PropIndex, AccountId)>', [new Uint8Array([
        4, 10, 0, 0, 0, 209, 114, 167, 76, 218, 76, 134, 89, 18, 195, 43, 160, 168, 10, 87, 174, 105, 171, 174, 65, 14, 92, 203, 89, 222, 232, 78, 47, 68, 50, 219, 79
      ])]);

      expect(test[0][0].toNumber()).toEqual(10);
      expect(test[0][1].toString()).toEqual('5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaQua');
    });

    it('decodes a complex type via construction (2)', (): void => {
      const INPUT = '0x08cc0200000000ce0200000001';
      const test = createTypeUnsafe<Vec<Codec>>(registry, 'Vec<(u32, [u32; 0], u16)>', [INPUT]);

      expect(test).toHaveLength(2);
      expect(test.toHex()).toEqual(INPUT);
    });

    it('allows construction via JSON', (): void => {
      expect(
        new Vec(registry, Text, ['6', '7']).toJSON()
      ).toEqual(['6', '7']);
    });

    it('allows construction via JSON (string type)', (): void => {
      expect(
        new Vec(registry, 'u32', ['6', '7']).toJSON()
      ).toEqual([6, 7]);
    });

    it('decodes reusing instantiated inputs', (): void => {
      const foo = new Text(registry, 'bar');

      expect(
        (new Vec(registry, Text, [foo]))[0]
      ).toBe(foo);
    });
  });

  describe('vector-like functions', (): void => {
    it('wraps a sequence of values', (): void => {
      expect(vector).toHaveLength(5);
    });

    it('has a sane representation for toString', (): void => {
      expect(vector.toString()).toEqual('[1, 23, 345, 4567, 56789]');
    });

    it('encodes with length prefix on toU8a()', (): void => {
      expect(vector.toU8a()).toEqual(new Uint8Array([
        5 << 2,
        1 << 2, 49,
        2 << 2, 50, 51,
        3 << 2, 51, 52, 53,
        4 << 2, 52, 53, 54, 55,
        5 << 2, 53, 54, 55, 56, 57
      ]));
    });

    it('encodes without length prefix on toU8a(true)', (): void => {
      expect(vector.toU8a(true)).toEqual(new Uint8Array([
        1 << 2, 49,
        2 << 2, 50, 51,
        3 << 2, 51, 52, 53,
        4 << 2, 52, 53, 54, 55,
        5 << 2, 53, 54, 55, 56, 57
      ]));
    });

    it('exposes the type', (): void => {
      expect(vector.Type).toEqual('Text');
    });

    it('allows retrieval of a specific item', (): void => {
      expect(
        vector[2].toString()
      ).toEqual('345');
    });

    it('exposes a working forEach', (): void => {
      const result: Record<number, string> = {};

      vector.forEach((e, i): void => {
        result[i] = e.toString();
      });

      expect(result).toEqual({
        0: '1',
        1: '23',
        2: '345',
        3: '4567',
        4: '56789'
      });
    });

    it('exposes a working concat', (): void => {
      expect(
        vector.concat(new Vec(registry, Text, ['987', '654'])).toString()
      ).toEqual('1,23,345,4567,56789,987,654');
    });

    it('exposes a working filter', (): void => {
      expect(
        vector.filter((_, i): boolean => i >= 3).toString()
      ).toEqual('4567,56789');
    });

    it('exposes a working map', (): void => {
      expect(
        vector.map((e): string => e.toString().substring(0, 1))
      ).toEqual(['1', '2', '3', '4', '5']);
    });

    it('exposes a working reduce', (): void => {
      expect(
        vector.reduce((r, e): string => `${r}${e.toString()}`, '')
      ).toEqual('123345456756789');
    });

    it('exposes a working indexOf', (): void => {
      expect(vector.indexOf('1')).toEqual(0);
      expect(vector.indexOf(new Text(registry, '23'))).toEqual(1);
      expect(vector.indexOf('0')).toEqual(-1);
    });
  });

  describe('encode', (): void => {
    const testEncode = (to: CodecTo, expected: any): void =>
      it(`can encode ${to}`, (): void => {
        expect(vector[to]()).toEqual(expected);
      });

    testEncode('toHex', '0x1404310832330c3334351034353637143536373839');
    testEncode('toJSON', ['1', '23', '345', '4567', '56789']);
    testEncode('toString', '[1, 23, 345, 4567, 56789]');
    testEncode('toU8a', Uint8Array.from([20, 4, 49, 8, 50, 51, 12, 51, 52, 53, 16, 52, 53, 54, 55, 20, 53, 54, 55, 56, 57]));
  });

  describe('utils', (): void => {
    const vec = new Vec(registry, Text, ['123', '456']);

    it('compares against codec types', (): void => {
      expect(vec.eq([new Text(registry, '123'), new Text(registry, '456')])).toBe(true);
    });

    it('compares against codec + primitive types', (): void => {
      expect(vec.eq(['123', new Text(registry, '456')])).toBe(true);
    });

    it('finds the index of an value', (): void => {
      const myId = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
      const vec = new Vec(registry, AccountId, [
        '5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw', '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty', '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'
      ]);

      expect(vec.indexOf(myId)).toEqual(2);
    });

    it('allows a slice operator', (): void => {
      const vec = registry.createType('Vec<AccountId>', [
        randomAsU8a(), randomAsU8a(), randomAsU8a(), randomAsU8a(), randomAsU8a(), randomAsU8a(), randomAsU8a(), randomAsU8a(), randomAsU8a(), randomAsU8a()
      ]);

      expect(vec).toHaveLength(10);
      expect(vec.slice(2, 7)).toHaveLength(5);
    });

    it('has a sane inspect', (): void => {
      const addrs = [
        '5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw', '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty', '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'
      ];
      const vec = registry.createType('Vec<AccountId>', addrs);

      expect(vec.inspect()).toEqual({
        inner: addrs.map((a) => ({
          outer: [decodeAddress(a)]
        })),
        outer: [new Uint8Array([3 << 2])]
      });
    });
  });

  perf('Vec<U32>', 40_000, [[new Uint8Array([3 << 2, 11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34])]], (v: Uint8Array) => new VecU32(registry, v));
});
