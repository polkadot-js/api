// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Text from '../Text';
import Vector from './Vector';

describe('Vector', () => {
  let array;

  beforeEach(() => {
    array = new Vector(Text, [ '1', '23', '345', '4567', new Text('56789') ]);
  });

  it('wraps a sequence of values', () => {
    expect(array.length).toEqual(5); // eslint-disable-line
  });

  it('has a sane representation for toString', () => {
    expect(array.toString()).toEqual('[1, 23, 345, 4567, 56789]');
  });

  it('encodes with length prefix', () => {
    expect(array.toU8a()).toEqual(new Uint8Array([
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
      new Vector(Text).fromJSON(['6', '7']).toString()
    ).toEqual('[6, 7]');
  });

  it('exposes the type', () => {
    expect(array.Type).toEqual('Text');
  });

  describe('array-like functions', () => {
    it('allows retrieval of a specific item', () => {
      expect(
        array.at(2).toString()
      ).toEqual('345');
    });

    it('exposes a working forEach', () => {
      const result = {};

      array.forEach((e, i) => {
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
        array.filter((e, i) => i >= 3).toString()
      ).toEqual('4567,56789');
    });

    it('exposes a working map', () => {
      expect(
        array.map((e) => e.toString().substr(0, 1))
      ).toEqual(['1', '2', '3', '4', '5']);
    });

    it('exposes a working reduce', () => {
      expect(
        array.reduce((r, e) => `${r}${e}`, '')
      ).toEqual('123345456756789');
    });
  });
});
