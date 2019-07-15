// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from '@polkadot/rpc-provider/ws';
import { Extrinsic, SignedBlock } from '@polkadot/types';

import ApiPromise from '../../../src/promise';
import describeE2E from '../../util/describeE2E';

describeE2E({
  only: [] // To run these tests locally you need to run a Alexander full archive node locally
})('Promise e2e alex archive queries (local)', (wsUrl): void => {
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create(new WsProvider(wsUrl));

    done();
  });

  // https://github.com/polkadot-js/api/issues/845
  it('retrieves block with no issues', async (): Promise<boolean> => {
    const metadata = await api.rpc.state.getMetadata('0x6f6f9bba0eed8e3ae9446c37eee763f93118b52a315a7b46090453ba6288da1f');

    console.error(JSON.stringify(metadata, null, 2));

    const block = await api.rpc.chain.getBlock('0x6f6f9bba0eed8e3ae9446c37eee763f93118b52a315a7b46090453ba6288da1f');

    console.error(block);

    expect(block).toBeDefined();

    return true;
  });

  // https://github.com/polkadot-js/api/issues/846
  it('handles toJSON with no issues', async (done): Promise<() => void> => {
    return (
      api.rpc.chain.getBlock('0x85c62b581f38cb81c3e443d34392672beb1fb877017fd7237cc87704113259dc', (result: SignedBlock): void => {
        const failed: Extrinsic[] = result.block.extrinsics.filter((extrinsic: Extrinsic): boolean => {
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
        expect(failed).toBeTruthy();
        done();
      })
    );
  });
});
