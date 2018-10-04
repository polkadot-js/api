// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Text from '../Text';
import U32 from '../U32';
import Tuple from './Tuple';

describe('Tuple', () => {
  let tuple;

  beforeEach(() => {
    tuple = new Tuple({
      foo: Text,
      bar: U32
    }, { foo: 'foo', bar: 69 });
  });

  it('returns array with toJSON', () => {
    expect(
      tuple.toJSON()
    ).toEqual([
      'foo',
      69
    ]);
  });

  it('initialises via JSON array', () => {
    const test = new (Tuple.with({
      a: Text,
      b: U32,
      c: Text
    }))();

    expect(
      test.fromJSON([
        'bazzing', 32
      ]).toJSON()
    ).toEqual([
      'bazzing',
      32,
      ''
    ]);
  });
});
