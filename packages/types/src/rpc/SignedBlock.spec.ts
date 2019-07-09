// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';

import Extrinsics from '../type/Extrinsics';
import Method from '../primitive/Method';
import rpc from '../json/SignedBlock.001.json';
import events from '../json/SignedBlock.002.json';
import SignedBlock from './SignedBlock';

describe.skip('SignedBlock', () => {
  let block: SignedBlock;

  beforeEach(() => {
    Method.injectMethods(extrinsics);

    block = new SignedBlock(rpc.result);
  });

  it('has the correct stateRoot', () => {
    expect(
      block.block.header.stateRoot.toString()
    ).toEqual('0xbfe02f7c26e5dad1226eccb1f4ef5306312602f7e1edbb9be50e8b87d9c7840b');
  });

  it('decodes a block with logs', () => {
    const s = new SignedBlock(events.result);

    expect(s.block.header.digest.logs.length).toBe(1);
    expect(s.block.header.digest.logs[0].type).toBe('AuthoritiesChange');
    expect(s.block.header.digest.logs[0].value.toJSON()).toEqual([
      '5EyrU8k6worwXWfW2LajRvS7XF6eta286tMpHeHUwMPpzQ9F',
      '5Dpq7rU6KAZVdRtcegvpCoeJtZzFPzieRkRz4xajRAiMRkCf',
      '5CCtQPAYtuDXt6H4WMrn5nFNk4gemkVRD3k1r1mA7YiZLPBq',
      '5F2ABwFm3fUhWMZT7Zeu7UjCr1dndjJD7qBeHChJhiJC949V',
      '5CA1n5DSpE46Q9Y7NaqD39T9X7S2dRtscsPvrv2dWuYhFtWr',
      '5CrxmsTCLbPRzHnFPs8Q6cx8jzHweegMSQYEJBGXLjDZW4NR',
      '5EQ4ZxYew2CXPkjGCBuPdTVg7Hp3bmBXiXBwn1iDmvj6CgaF'
    ]);
  });

  describe('extrinsics', () => {
    let extrinsics: Extrinsics;

    beforeEach(() => {
      extrinsics = block.block.extrinsics;
    });

    it('has the correct data for the first', () => {
      const x = extrinsics[0];

      expect(x.callIndex).toEqual(new Uint8Array([2, 0]));
      expect(x.method.args[0].toU8a()).toEqual(new Uint8Array([70, 41, 195, 91, 0, 0, 0, 0]));
    });

    it('has the correct data for the second', () => {
      const x = extrinsics[1];

      expect(x.callIndex).toEqual(new Uint8Array([1, 0]));
      expect(x.method.args[0].toString()).toEqual('5CPaGq4KcmntaboAxg5nyqGXdyzaBV2hj6PvhNA3syigiRg8');
      expect(x.method.args[1].toString()).toEqual('100000000000000');
    });
  });
});
