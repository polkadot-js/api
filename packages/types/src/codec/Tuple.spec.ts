// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics/static';

import Text from '../Text';
import U32 from '../U32';
import Tuple from './Tuple';
import BlockNumber from '../BlockNumber';
import Method from '../Method';
import Proposal from '../Proposal';
import VoteThreshold from '../VoteThreshold';

describe('Tuple', () => {
  let tuple: Tuple;

  beforeEach(() => {
    Method.injectExtrinsics(extrinsics);

    // FIXME something weird here, injecting any :(
    tuple = new Tuple([
      Text, U32
    ], ['foo', 69]);
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
    const test = new (Tuple.with(
      [Text, U32, Text])
    )([
      'bazzing', 32
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
    const test = new (Tuple.with([
      BlockNumber, Proposal, VoteThreshold
    ]
    ))('0x62190000000000000003507b0a092230783432223a202230783433220a7d0a01');

    expect((test[0] as BlockNumber).toNumber()).toEqual(6498);
    expect((test[1] as Method).callIndex).toEqual(new Uint8Array([0, 3]));
    expect((test[2] as VoteThreshold).toNumber()).toEqual(1);
  });
});
