// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Api from '../../src/promise';

describe.skip('alex archive queries (local)', () => {
  let api;

  beforeEach(() => {
    jest.setTimeout(30000);
  });

  beforeEach(async () => {
    api = await Api.create();

    return api;
  });

  // https://github.com/polkadot-js/api/issues/845
  it('retrieves block with no issues', async () => {
    const metadata = await api.rpc.state.getMetadata('0x6f6f9bba0eed8e3ae9446c37eee763f93118b52a315a7b46090453ba6288da1f');

    console.error(JSON.stringify(metadata, null, 2));

    const block = await api.rpc.chain.getBlock('0x6f6f9bba0eed8e3ae9446c37eee763f93118b52a315a7b46090453ba6288da1f')

    console.error(block);

    expect(block).toBeDefined();

    return true;
  });

  // https://github.com/polkadot-js/api/issues/846
  it('handles toJSON with no issues', async (done) => {
    const signedBlock = await api.rpc.chain.getBlock('0x85c62b581f38cb81c3e443d34392672beb1fb877017fd7237cc87704113259dc');
    const failed = signedBlock.block.extrinsics.filter((extrinsic) => {
      try {
        const json = extrinsic.method.toJSON();

        console.error(json);

        return false;
      } catch (error) {
        console.log(extrinsic.method);
        console.log(extrinsic.method.keys());
        console.error(error);

        return true;
      }
    });

    expect(failed).toHaveLength(0);

    done();
  });
});
