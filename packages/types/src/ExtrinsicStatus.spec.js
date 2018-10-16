// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import rpc from './ExtrinsicStatus.rpc.json';
import ExtrinsicStatus from './ExtrinsicStatus';

describe('ExtrinsicStatus', () => {
  const status = new ExtrinsicStatus(rpc.params.result);

  it('has the correct type', () => {
    expect(
      status.type
    ).toEqual('Finalised');
  });

  it('has the correct hash', () => {
    expect(
      status.value.toHex()
    ).toEqual('0xc465b92a72b1d20918d64cd4effa70c2bb58b53a3f8c24c3ac8fd8f465f059b4');
  });
});
