// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics/static';

import createType from './createType';
import Method from '../Method';
import Text from '../Text';
import Vector from './Vector';

describe('Vector', () => {
  let vector;

  beforeEach(() => {
    vector = new Vector(Text, ['1', '23', '345', '4567', new Text('56789')]);

    Method.injectExtrinsics(extrinsics);
  });

  it('wraps a sequence of values', () => {
    expect(vector.length).toEqual(5); // eslint-disable-line
  });

  it('has a sane representation for toString', () => {
    expect(vector.toString()).toEqual('1,23,345,4567,56789');
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
      new Vector(Text, ['6', '7']).toString()
    ).toEqual('6,7');
  });

  it('exposes the type', () => {
    expect(vector.Type).toEqual('Text');
  });

  it('decodes a complex type via construction', () => {
    const test = createType('Vec<(PropIndex, Proposal, AccountId)>', new Uint8Array([
      4, 10, 0, 0, 0, 0, 3, 80, 123, 10, 9, 34, 48, 120, 52, 50, 34, 58, 32, 34, 48, 120, 52, 51, 34, 10, 125, 10, 209, 114, 167, 76, 218, 76, 134, 89, 18, 195, 43, 160, 168, 10, 87, 174, 105, 171, 174, 65, 14, 92, 203, 89, 222, 232, 78, 47, 68, 50, 219, 79
    ]));
    const first = test.get(0);

    expect(first.getAtIndex(0).toNumber()).toEqual(10);
    expect(first.getAtIndex(1).callIndex).toEqual(new Uint8Array([0, 3]));
    expect(first.getAtIndex(2).toString()).toEqual('5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ');
  });

  describe('vector-like functions', () => {
    it('allows retrieval of a specific item', () => {
      expect(
        vector.get(2).toString()
      ).toEqual('345');
    });

    it('exposes a working forEach', () => {
      const result = {};

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
        vector.map((e) => e.toString().substr(0, 1)).toArray()
      ).toEqual(['1', '2', '3', '4', '5']);
    });

    it('exposes a working reduce', () => {
      expect(
        vector.reduce((r, e) => `${r}${e}`, '')
      ).toEqual('123345456756789');
    });
  });
});
