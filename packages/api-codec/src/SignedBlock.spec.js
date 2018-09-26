// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import rpc from './SignedBlock.rpc.json';
import SignedBlock from './SignedBlock';

describe('SignedBlock', () => {
  const block = new SignedBlock().fromJSON(rpc.result);

  it('has the correct stateRoot', () => {
    expect(
      block.block.header.stateRoot.toString()
    ).toEqual('0xc372e08fa6edddd0ee415742eb551b8475100a40fe47a3d6470ad46b9b7b460d');
  });

  it('has the justification', () => {
    expect(
      block.justification.hash.toHex()
    ).toEqual('0x737f58ac7f964353c56160187821ef4d2295d196c8479c21c7ae37f708550b57');
  });
});
