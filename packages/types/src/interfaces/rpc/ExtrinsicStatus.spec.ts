// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createType, TypeRegistry } from '../../codec/create';
import rpc from '../../json/ExtrinsicStatus.001.json';

describe('ExtrinsicStatus', (): void => {
  const registry = new TypeRegistry();

  it('has the correct type', (): void => {
    expect(
      createType(registry, 'ExtrinsicStatus', rpc.params.result).type
    ).toEqual('Finalized');
  });

  it('has an alias to isInBlock', (): void => {
    const status = createType(registry, 'ExtrinsicStatus', rpc.params.result);

    expect(status.isFinalized).toEqual(true);
    expect(status.isInBlock).toEqual(true);
  });

  it('has the correct hash', (): void => {
    expect(
      createType(registry, 'ExtrinsicStatus', rpc.params.result).value.toString()
    ).toEqual('0xc465b92a72b1d20918d64cd4effa70c2bb58b53a3f8c24c3ac8fd8f465f059b4');
  });
});
