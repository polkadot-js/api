// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MockProvider from '@polkadot/rpc-provider/mock';

import Rpc from '.';

describe('Api', () => {
  it('requires a provider with a send method', () => {
    expect(
      () => new Rpc({} as any)
    ).toThrow(/Expected Provider/);
  });

  it('creates an instance with all sections', () => {
    const rpc = new Rpc(new MockProvider());

    expect(
      Object.keys(rpc)
    ).toEqual([
      'provider',
      'author', 'chain', 'state', 'system'
    ]);
  });
});
