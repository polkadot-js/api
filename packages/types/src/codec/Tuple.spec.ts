// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';

import { CodecTo } from '../types';
import Method from '../primitive/Method';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';
import BlockNumber from '../type/BlockNumber';
import Proposal from '../type/Proposal';
import VoteThreshold from '../type/VoteThreshold';
import Tuple from './Tuple';

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

  it.skip('creates properly via actual hex string', () => {
    Method.injectMethods(extrinsics);

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

  it('exposes the Types (object creation)', () => {
    const test = new Tuple({
      BlockNumber, VoteThreshold
    }, []);

    expect(test.Types).toEqual(['BlockNumber', 'VoteThreshold']);
  });

  it('exposes filter', () => {
    expect(tuple.filter((v) => v.toJSON() === 69)).toEqual([new U32(69)]);
  });

  it('exposes map', () => {
    expect(tuple.map(v => v.toString())).toEqual(['bazzing', '69']);
  });

  describe('utils', () => {
    it('compares against inputs', () => {
      expect(tuple.eq(['bazzing', 69])).toBe(true);
    });

    it('compares against inputs (mismatch)', () => {
      expect(tuple.eq(['bazzing', 72])).toBe(false);
    });
  });

  describe('toRawType', () => {
    it('generates sane value with array types', () => {
      expect(
        new Tuple([U32, BlockNumber]).toRawType()
      ).toEqual('(u32,u64)');
    });

    it('generates sane value with object types', () => {
      expect(
        new Tuple({ number: U32, blockNumber: BlockNumber }).toRawType()
      ).toEqual('(u32,u64)');
    });
  });
});
