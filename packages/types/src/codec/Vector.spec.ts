// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, CodecTo } from '../types';

import extrinsics from '@polkadot/api-metadata/extrinsics/static';

import AccountId from '../primitive/AccountId';
import Method from '../primitive/Method';
import Text from '../primitive/Text';
import PropIndex from '../type/PropIndex';
import Proposal from '../type/Proposal';
import createType from './createType';
import Vector from './Vector';
import Tuple from './Tuple';

describe('Vector', () => {
  let vector: Vector<Codec>;

  beforeEach(() => {
    vector = new Vector(Text, ['1', '23', '345', '4567', new Text('56789')]);

    Method.injectMethods(extrinsics);
  });

  it('wraps a sequence of values', () => {
    expect(vector.length).toEqual(5); // eslint-disable-line
  });

  it('has a sane representation for toString', () => {
    expect(vector.toString()).toEqual('[1, 23, 345, 4567, 56789]');
  });

  it('encodes with length prefix', () => {
    expect(vector.toU8a()).toEqual(new Uint8Array([
      5 << 2,
      1 << 2, 49,
      2 << 2, 50, 51,
      3 << 2, 51, 52, 53,
      4 << 2, 52, 53, 54, 55,
      5 << 2, 53, 54, 55, 56, 57
    ]));
  });

  it('allows contruction via JSON', () => {
    expect(
      new Vector(Text, ['6', '7']).toJSON()
    ).toEqual(['6', '7']);
  });

  it('exposes the type', () => {
    expect(vector.Type).toEqual('Text');
  });

  it.skip('decodes a complex type via construction', () => {
    const test = createType('Vec<(PropIndex, Proposal, AccountId)>', new Uint8Array([
      4, 10, 0, 0, 0, 0, 3, 80, 123, 10, 9, 34, 48, 120, 52, 50, 34, 58, 32, 34, 48, 120, 52, 51, 34, 10, 125, 10, 209, 114, 167, 76, 218, 76, 134, 89, 18, 195, 43, 160, 168, 10, 87, 174, 105, 171, 174, 65, 14, 92, 203, 89, 222, 232, 78, 47, 68, 50, 219, 79
    ]));
    const first = (test as Vector<Codec>)[0] as Tuple;

    expect((first[0] as PropIndex).toNumber()).toEqual(10);
    expect((first[1] as Proposal).callIndex).toEqual(new Uint8Array([0, 3]));
    expect((first[2] as AccountId).toString()).toEqual('5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ');
  });

  describe('vector-like functions', () => {
    it('allows retrieval of a specific item', () => {
      expect(
        vector[2].toString()
      ).toEqual('345');
    });

    it('exposes a working forEach', () => {
      const result: { [index: number]: string } = {};

      vector.forEach((e, i) => {
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

    it('exposes a working filter', () => {
      expect(
        vector.filter((e, i) => i >= 3).toString()
      ).toEqual('4567,56789');
    });

    it('exposes a working map', () => {
      expect(
        vector.map((e) => e.toString().substr(0, 1))
      ).toEqual(['1', '2', '3', '4', '5']);
    });

    it('exposes a working reduce', () => {
      expect(
        vector.reduce((r, e) => `${r}${e}`, '')
      ).toEqual('123345456756789');
    });
  });

  describe('encode', () => {
    const testEncode = (to: CodecTo, expected: any) =>
      it(`can encode ${to}`, () => {
        expect(vector[to]()).toEqual(expected);
      });

    testEncode('toHex', '0x1404310832330c3334351034353637143536373839');
    testEncode('toJSON', ['1', '23', '345', '4567', '56789']);
    testEncode('toString', '[1, 23, 345, 4567, 56789]');
    testEncode('toU8a', Uint8Array.from([20, 4, 49, 8, 50, 51, 12, 51, 52, 53, 16, 52, 53, 54, 55, 20, 53, 54, 55, 56, 57]));
  });

  describe('utils', () => {
    const vec = new Vector(Text, ['123', '456']);

    it('compares against codec types', () => {
      expect(vec.eq([new Text('123'), new Text('456')])).toBe(true);
    });

    it('compares against codec + primitive types', () => {
      expect(vec.eq(['123', new Text('456')])).toBe(true);
    });

    it('finds the index of an value', () => {
      const myId = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
      const vec = new Vector(AccountId, [
        '5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw', '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty', '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'
      ]);

      expect(vec.indexOf(myId)).toEqual(2);
    });
  });
});
