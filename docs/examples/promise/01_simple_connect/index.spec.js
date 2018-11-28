// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const ApiPromise = require('../../../../packages/api/src/promise').default;

describe('promise - 01 simple connect', () => {
  let api;

  beforeEach(async () => {
    api = await ApiPromise.create();
  });

  it('makes the rpc.system available', () => {
    expect(api.rpc.system).toBeDefined();
  });

  it('retrieves the chain and node info via rpc calls', async () => {
    const [chain, nodeName, nodeVersion] = await Promise.all([
      api.rpc.system.chain(),
      api.rpc.system.name(),
      api.rpc.system.version()
    ]);

    expect([chain, nodeName, nodeVersion]).toEqual(['Development', 'substrate-node', '0.1.0']);
  });
});
