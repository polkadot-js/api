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
    ).toEqual('0x6e4e88dc766d13c8975e7806e30cc1627e9553a2ebe59ab123f985d1c925c5ff');
  });

  it('has the justification', () => {
    expect(
      block.justification.hash.toHex()
    ).toEqual('0x7ac267bb86a5b674582fba9e84d3e3e9988621124c3e33358f7771224d176795');
  });
});
