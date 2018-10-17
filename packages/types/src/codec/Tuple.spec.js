// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics/static';

import Text from '../Text';
import U32 from '../U32';
import Tuple from './Tuple';
import BlockNumber from '../BlockNumber';
import Method from '../Method';
import Proposal from '../Proposal';
import VoteThreshold from '../VoteThreshold';

describe('Tuple', () => {
  let tuple;

  beforeEach(() => {
    Method.injectExtrinsics(extrinsics);

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
    }))([
      'bazzing', 32, ''
    ]);

    expect(
      test.toJSON()
    ).toEqual([
      'bazzing',
      32,
      ''
    ]);
  });

  it('creates properly via actual hex string', () => {
    const test = new (Tuple.with({
      blockNumber: BlockNumber,
      proposal: Proposal,
      threshold: VoteThreshold
    }))('0x62190000000000000003507b0a092230783432223a202230783433220a7d0a01');

    expect(test.getAtIndex(0).toNumber()).toEqual(6498);
    expect(test.getAtIndex(1).callIndex).toEqual(new Uint8Array([0, 3]));
    expect(test.getAtIndex(2).toNumber()).toEqual(1);
  });
});
