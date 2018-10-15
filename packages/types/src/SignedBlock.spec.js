// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import rpc from './SignedBlock.rpc.json';
import SignedBlock from './SignedBlock';

describe('SignedBlock', () => {
  const block = new SignedBlock().fromJSON(rpc.result);

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

  describe('extrinsics', () => {
    const extrinsics = block.block.extrinsics;

    it('has the correct callIndex for the first', () => {
      const x = extrinsics.get(0);

      expect(x.callIndex).toEqual(new Uint8Array([2, 0]));
    });

    it('has the correct callIndex for the second', () => {
      const x = extrinsics.get(1);

      expect(x.callIndex).toEqual(new Uint8Array([1, 0]));
    });
  });
});
