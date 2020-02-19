// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from '@polkadot/metadata/Metadata';
import metadataStatic from '@polkadot/metadata/Metadata/static';

import { createType, TypeRegistry } from '../../create';
import events from '../../json/SignedBlock.002.json';
import immortalTxs from '../../json/SignedBlock.004.immortal.json';
import mortalTxs from '../../json/SignedBlock.004.mortal.json';
import knownMehods from '../../json/SignedBlock.005.json';

const registry = new TypeRegistry();

// eslint-disable-next-line no-new
new Metadata(registry, metadataStatic);

describe('SignedBlock', (): void => {
  it('decodes a full block', (): void => {
    const s = createType(registry, 'SignedBlock', events.result);

    expect(
      s.block.header.stateRoot.toString()
    ).toEqual('0x24bab7fe0fee187a57bd0029ba151e81a0bae0fea96ad9f85c579c1ba9d88948');
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

  // Test to replicate https://github.com/polkadot-js/api/issues/1212
  it('decodes to known extrinsics', (): void => {
    const s = createType(registry, 'SignedBlock', knownMehods.result);
    const indexes = s.block.extrinsics.map(({ method: { callIndex } }): Uint8Array => callIndex);

    expect(indexes).toEqual([
      new Uint8Array([0x03, 0x00]),
      new Uint8Array([0x0c, 0x00])
    ]);
  });

  describe('eras', (): void => {
    it('can decode immortals', (): void => {
      const s = createType(registry, 'SignedBlock', immortalTxs.result);
      const immortalTx = s.block.extrinsics[0];

      expect(immortalTx.method.methodName).toEqual('transfer');
      expect(immortalTx.method.sectionName).toEqual('balances');
    });

    it('can decode mortals', (): void => {
      const s = createType(registry, 'SignedBlock', mortalTxs.result);
      const mortalTx = s.block.extrinsics[0];

      expect(mortalTx.method.methodName).toEqual('transfer');
      expect(mortalTx.method.sectionName).toEqual('balances');
    });
  });
});
