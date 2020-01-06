// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { PropIndex } from '../interfaces/democracy';
import { Codec, CodecTo } from '../types';

import Metadata from '@polkadot/metadata/Metadata';
import rpcMetadata from '@polkadot/metadata/Metadata/static';

import AccountId from '../primitive/Generic/AccountId';
import Text from '../primitive/Text';
import { createTypeUnsafe, TypeRegistry } from './create';
import Vec from './Vec';
import Tuple from './Tuple';

const registry = new TypeRegistry();

// eslint-disable-next-line no-new
new Metadata(registry, rpcMetadata);

describe('Vec', (): void => {
  let vector: Vec<Codec>;

  beforeEach((): void => {
    vector = new Vec(registry, Text, ['1', '23', '345', '4567', new Text(registry, '56789')]);
  });

  it('wraps a sequence of values', (): void => {
    expect(vector.length).toEqual(5); // eslint-disable-line
  });

  it('has a sane representation for toString', (): void => {
    expect(vector.toString()).toEqual('[1, 23, 345, 4567, 56789]');
  });

  it('encodes with length prefix', (): void => {
    expect(vector.toU8a()).toEqual(new Uint8Array([
      5 << 2,
      1 << 2, 49,
      2 << 2, 50, 51,
      3 << 2, 51, 52, 53,
      4 << 2, 52, 53, 54, 55,
      5 << 2, 53, 54, 55, 56, 57
    ]));
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

  it('exposes the type', (): void => {
    expect(vector.Type).toEqual('Text');
  });

  it('decodes a complex type via construction', (): void => {
    const test = createTypeUnsafe(registry, 'Vec<(PropIndex, AccountId)>', [new Uint8Array([
      4, 10, 0, 0, 0, 209, 114, 167, 76, 218, 76, 134, 89, 18, 195, 43, 160, 168, 10, 87, 174, 105, 171, 174, 65, 14, 92, 203, 89, 222, 232, 78, 47, 68, 50, 219, 79
    ])]);
    const first = (test as Vec<Codec>)[0] as Tuple;

    expect((first[0] as PropIndex).toNumber()).toEqual(10);
    expect((first[1] as AccountId).toString()).toEqual('5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaQua');
  });

  describe('vector-like functions', (): void => {
    it('allows retrieval of a specific item', (): void => {
      expect(
        vector[2].toString()
      ).toEqual('345');
    });

    it('exposes a working forEach', (): void => {
      const result: { [index: number]: string } = {};

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

    it('exposes a working filter', (): void => {
      expect(
        vector.filter((e, i): boolean => i >= 3).toString()
      ).toEqual('4567,56789');
    });

    it('exposes a working map', (): void => {
      expect(
        vector.map((e): string => e.toString().substr(0, 1))
      ).toEqual(['1', '2', '3', '4', '5']);
    });

    it('exposes a working reduce', (): void => {
      expect(
        vector.reduce((r, e): string => `${r}${e}`, '')
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
  });
});
