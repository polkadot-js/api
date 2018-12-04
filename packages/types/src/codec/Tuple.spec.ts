// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics/static';

import { CodecTo } from '../types';
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
    tuple = new Tuple(
      [Text, U32],
      ['bazzing', 69]
    );
  });

  describe('decoding', () => {
    const testDecode = (type: string, input: any) =>
      it(`can decode from ${type}`, () => {
        const t = new Tuple([
          Text,
          U32
        ], input);
        expect(
          t.toJSON()
        ).toEqual(['bazzing', 69]);
      });

    testDecode('array', ['bazzing', 69]);
    testDecode('hex', '0x1c62617a7a696e6745000000');
    testDecode('Uint8Array', Uint8Array.from([28, 98, 97, 122, 122, 105, 110, 103, 69, 0, 0, 0]));
  });

  describe('encoding', () => {
    const testEncode = (to: CodecTo | 'toArray', expected: any) =>
      it(`can encode ${to}`, () => {
        expect(tuple[to]()).toEqual(expected);
      });

    testEncode('toHex', '0x1c62617a7a696e6745000000');
    testEncode('toJSON', ['bazzing', 69]);
    testEncode('toU8a', Uint8Array.from([28, 98, 97, 122, 122, 105, 110, 103, 69, 0, 0, 0]));
    testEncode('toString', '["bazzing",69]');
  });

  it('creates properly via actual hex string', () => {
    Method.injectExtrinsics(extrinsics);

    const test = new (Tuple.with([
      BlockNumber, Proposal, VoteThreshold
    ]
    ))('0x62190000000000000003507b0a092230783432223a202230783433220a7d0a01');

    expect((test[0] as BlockNumber).toNumber()).toEqual(6498);
    expect((test[1] as Method).callIndex).toEqual(new Uint8Array([0, 3]));
    expect((test[2] as VoteThreshold).toNumber()).toEqual(1);
  });

  it('exposes the Types', () => {
    expect(tuple.Types).toEqual(['Text', 'U32']);
  });

  it('exposes filter', () => {
    expect(tuple.filter((v) => v.toJSON() === 69)).toEqual([new U32(69)]);
  });

  it('exposes map', () => {
    expect(tuple.map(v => v.toString())).toEqual(['bazzing', '69']);
  });

});
