// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Api from '../../src/promise';
import WsProvider from '../../../rpc-provider/src/ws';

describe.skip('alex queries', () => {
  let api;

  beforeEach(() => {
    jest.setTimeout(3000000);
  });

  describe.skip('Remote RPC queries', () => {
    beforeAll(async () => {
      api = await Api.create({
        provider: new WsProvider('wss://poc3-rpc.polkadot.io/')
      });

      return api;
    });

    it('retrieves the list of validators', (done) => {
      api.query.staking.validators((res) => {
        console.log('api.query.staking.validators():', res.toJSON());

        done();
      });
    });

    it('retrieves a single value', (done) => {
      api.query.staking.validators('5EF7wdkP9XZq38fu2ioAvxoEhHUJUc1E2KbuSQSMGofRKhCL', (res) => {
        console.log('api.query.staking.validators(id):', res.toJSON());

        done();
      });
    });

    it('derives a list of the controllers', (done) => {
      api.derive.staking.controllers((res) => {
        console.log('api.derive.staking.controllers:', JSON.stringify(res));

        done();
      });
    });

    it.skip('retrieves the list of nominators', (done) => {
      let count = 0;
      api.query.staking.nominators((res) => {
        console.log(`[${++count}]:: nominators(${res[0].length}):`, res.toJSON());

        // done();
      });
    });
  });

  describe('Local archive queries (for debug)', () => {
    beforeAll(async () => {
      api = await Api.create({
        provider: new WsProvider('wss://poc3-rpc.polkadot.io/')
      });

      return api;
    });

    // https://github.com/polkadot-js/api/issues/845
    it('retrieves block with no issues', async () => {
      const block = await api.rpc.chain.getBlock('0x6f6f9bba0eed8e3ae9446c37eee763f93118b52a315a7b46090453ba6288da1f')

      console.error(block);

      expect(block).toBeDefined();

      return true;
    });

    // https://github.com/polkadot-js/api/issues/846
    it('handles toJSON with no issues', async () => {
      const signedBlock = await api.rpc.chain.getBlock('0x85c62b581f38cb81c3e443d34392672beb1fb877017fd7237cc87704113259dc');

      signedBlock.block.extrinsics.forEach(extrinsic => {
        try {
          extrinsic.method.toJSON();
        } catch (error) {
          console.log(extrinsic);
          console.error(error);

          expect(true).toBeFalsy();
        }
      });

      return true;
    });
  });
});
