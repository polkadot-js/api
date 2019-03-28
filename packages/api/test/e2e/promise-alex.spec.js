// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Api from '../../src/promise';
import WsProvider from '../../../rpc-provider/src/ws';

describe.skip('alex queries', () => {
  let api;

  beforeAll(async () => {
    api = await Api.create({
      provider: new WsProvider('wss://poc3-rpc.polkadot.io/')
    });

    return api;
  });

  beforeEach(() => {
    jest.setTimeout(3000000);
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
