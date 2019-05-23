// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from '@polkadot/rpc-provider/ws';

describe('onMessageSubscribe', () => {
  let provider: WsProvider;

  beforeEach(() => {
    provider = new WsProvider('ws://127.0.0.1:1234', false);
  });

  it('calls the subscriber with data', (done) => {
    provider.handlers[3] = {
      callback: (_: any, id: number) => {
        expect(typeof id).toBe('number');
      },
      method: 'test',
      params: [],
      subscription: {
        callback: (_: any) => { return; },
        type: 'test'
      }
    };

    provider.onSocketMessage(new MessageEvent('test',{ data: '{"jsonrpc":"2.0","id":11,"result":22}' }));
    provider.onSocketMessage(new MessageEvent('test',{ data: '{"jsonrpc":"2.0","method":"test","params":{"subscription":22,"result":"test"}}' }));
  });

  it('calls the subscriber with error', (done) => {
    provider.handlers[11] = {
      callback: (_: any, id: number) => {
        expect(typeof id).toBe('number');
      },
      method: 'test',
      params: [],
      subscription: {
        callback: (error: any) => {
          expect(error.message).toMatch(/test/);
          done();
        },
        type: 'test'
      }
    };

    provider.onSocketMessage(new MessageEvent('test', { data: '{"jsonrpc":"2.0","id":11,"result":22}' }));
    provider.onSocketMessage(new MessageEvent('test',{ data: '{"jsonrpc":"2.0","method":"test","params":{"subscription":22,"error":{"message":"test"}}}' }));
  });
});
