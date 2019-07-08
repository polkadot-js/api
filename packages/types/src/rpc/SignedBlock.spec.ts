// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics/static';

// import Extrinsics from '../type/Extrinsics';
import Method from '../primitive/Method';
import rpc from '../json/SignedBlock.001.json';
import events from '../json/SignedBlock.002.json';
import immortalTxs from '../json/SignedBlock.004.immortal.json';
import mortalTxs from '../json/SignedBlock.004.mortal.json';
import SignedBlock from './SignedBlock';

describe('SignedBlock', () => {
  Method.injectMethods(extrinsics);

  let block: SignedBlock;

  beforeEach(() => {
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
      '5EyrU8k6worwXWfW2LajRvS7XF6eta286tMpHeHUwMPpzUwT',
      '5Dpq7rU6KAZVdRtcegvpCoeJtZzFPzieRkRz4xajRAiMRxCd',
      '5CCtQPAYtuDXt6H4WMrn5nFNk4gemkVRD3k1r1mA7YiZLPP5',
      '5F2ABwFm3fUhWMZT7Zeu7UjCr1dndjJD7qBeHChJhiJC99UH',
      '5CA1n5DSpE46Q9Y7NaqD39T9X7S2dRtscsPvrv2dWuYhFg5U',
      '5CrxmsTCLbPRzHnFPs8Q6cx8jzHweegMSQYEJBGXLjDZWDNv',
      '5EQ4ZxYew2CXPkjGCBuPdTVg7Hp3bmBXiXBwn1iDmvj6CY3u'
    ]);
  });

  describe('extrinsics', () => {
    // FIXME This is better than skipping the whole describe block (which is what is was), however
    // we have issues with the first 2 tests - trying to get the 3rd one going, so focus is on that
    //
    // let extrinsics: Extrinsics;

    // beforeEach(() => {
    //   extrinsics = block.block.extrinsics;
    // });

    // it('has the correct data for the first', () => {
    //   const x = extrinsics[0];

    //   expect(x.callIndex).toEqual(new Uint8Array([2, 0]));
    //   expect(x.method.args[0].toU8a()).toEqual(new Uint8Array([70, 41, 195, 91, 0, 0, 0, 0]));
    // });

    // it('has the correct data for the second', () => {
    //   const x = extrinsics[1];

    //   expect(x.callIndex).toEqual(new Uint8Array([1, 0]));
    //   expect(x.method.args[0].toString()).toEqual('5CPaGq4KcmntaboAxg5nyqGXdyzaBV2hj6PvhNA3syigiRg8');
    //   expect(x.method.args[1].toString()).toEqual('100000000000000');
    // });

    // we have this type of thing elsewhere, but needed to compare the one below byte-by-byte
    // to an immortal with the same info
    it.only('can decode immortals', () => {

// 0x2502
// 81
// ff
// 90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22
// c0568aef3c66aa966955788b836f3779ab1a190829d1abe937388db660f5d83f
// aaafd6abce095478a75b754837300765b59ac410ea75bd4e4582c58a60bff604
// 54000400
// ff
// e659a7a1628cdd93febc04a4e0646ea20e9f5f0ce097d9a05290d4a9e054df4e
// e5c0

// 0x2902
// 81
// ff
// 90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22
// 1acf5b0ac972a70fffc566ed5e28fcfe68450f889647083b37a163495add7712
// 27b152a5c400fe687370d6be74901923753c85a6e2b9f7dc503d6f8fd52e2503
// 4c
// 53000400
// ff
// e659a7a1628cdd93febc04a4e0646ea20e9f5f0ce097d9a05290d4a9e054df4e
// e5c0

      const immortalBlock = new SignedBlock(immortalTxs.result);
      const immortalTx = immortalBlock.block.extrinsics[1];

      expect(immortalTx.method.methodName).toEqual('transfer');
      expect(immortalTx.method.sectionName).toEqual('balances');
    });

    it('can decode mortals', () => {
      const mortalBlock = new SignedBlock(mortalTxs.result);
      const mortalTx = mortalBlock.block.extrinsics[1];

      expect(mortalTx.method.methodName).toEqual('transfer');
      expect(mortalTx.method.sectionName).toEqual('balances');
    });
  });
});
