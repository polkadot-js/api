// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import rpc from '../json/SignedBlock.001.json';
import { RhdJustification } from './Justification';

describe('RhdJustification', () => {
  const just = new RhdJustification({
    roundNumber: 32,
    hash: '0xabcd',
    signatures: [
      ['0x1234', '0x5678'],
      ['0x9876', '0x5432']
    ]
  });

  it('has the correct hash', () => {
    expect(just.hash.toHex()).toEqual('0xabcd000000000000000000000000000000000000000000000000000000000000');
  });

  it('has the correct round', () => {
    expect(just.roundNumber.toNumber()).toEqual(32);
  });

  it('has the correct signatures', () => {
    const sig = just.signatures[1];

    expect(sig.authorityId.toHex()).toEqual('0x9876000000000000000000000000000000000000000000000000000000000000');
  });

  it('creates from a JSON strusture', () => {
    const viaRpc = new RhdJustification(rpc.result.justification);

    expect(
      viaRpc.hash.toHex()
    ).toEqual('0xfab4bb3a8b0a072d3d09858dc865ad2750b2e708536b6dacc89fad369eba781a');
  });
});
