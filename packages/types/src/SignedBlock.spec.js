// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics/static';

import Method from './Method';
import events from './SignedBlock.events.json';
import rpc from './SignedBlock.rpc.json';
import SignedBlock from './SignedBlock';
import Block from './Block';

describe('SignedBlock', () => {
  let block;

  beforeEach(() => {
    Method.injectExtrinsics(extrinsics);

    block = new SignedBlock(rpc.result);
  });

  it('has the correct stateRoot', () => {
    expect(
      block.block.header.stateRoot.toString()
    ).toEqual('0xbfe02f7c26e5dad1226eccb1f4ef5306312602f7e1edbb9be50e8b87d9c7840b');
  });

  it('has the justification', () => {
    expect(
      block.justification.hash.toHex()
    ).toEqual('0xfab4bb3a8b0a072d3d09858dc865ad2750b2e708536b6dacc89fad369eba781a');
  });

  it('decodes a block with events', () => {
    expect(
      new SignedBlock(events)
    ).toBeDefined();
  });

  describe('extrinsics', () => {
    let extrinsics;

    beforeEach(() => {
      extrinsics = block.block.extrinsics;
    });

    it('has the correct data for the first', () => {
      const x = extrinsics.get(0);

      expect(x.callIndex).toEqual(new Uint8Array([2, 0]));
      expect(x.method.args[0].toU8a()).toEqual(new Uint8Array([70, 41, 195, 91, 0, 0, 0, 0]));
    });

    it('has the correct data for the second', () => {
      const x = extrinsics.get(1);

      expect(x.callIndex).toEqual(new Uint8Array([1, 0]));
      expect(x.method.args[0].toString()).toEqual('5CPaGq4KcmntaboAxg5nyqGXdyzaBV2hj6PvhNA3syigiRg8');
      expect(x.method.args[1].toString()).toEqual('100000000000000');
    });
  });
});
