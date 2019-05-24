// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from './';

describe('onMessageSubscribe', () => {
  let provider: WsProvider;

  beforeEach(() => {
    provider = new WsProvider('ws://127.0.0.1:1234', false);
  });

  it('calls the subscriber with data', (done) => {
    // We need to access the private WsProvider property 'handlers' here which otherwise triggers a tslint error..
    // @ts-ignore
    provider.handlers[11] = {
      callback: (_: any, id: number) => {
        expect(typeof id).toBe('number');
      },
      method: 'test',
      params: [],
      subscription: {
        callback: (_: any, result: any) => {
          expect(result).toEqual('test');
          done();
        },
        type: 'test'
      }
    };

    // We need to access the private WsProvider property 'onSocketMessage' here which would otherwise trigger a tslint error.
    // @ts-ignore
    provider.onSocketMessage(new MessageEvent('test', { data: '{"jsonrpc":"2.0","id":11,"result":22}' }));
    // @ts-ignore
    provider.onSocketMessage(new MessageEvent('test', { data: '{"jsonrpc":"2.0","method":"test","params":{"subscription":22,"result":"test"}}' }));
  });

  it('calls the subscriber with error', (done) => {
    // We need to access the private WsProvider property 'handlers' here which otherwise trigger a tslint error..
    // @ts-ignore
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

    // We need to access the private WsProvider property 'onSocketMessage' here which would otherwise trigger a tslint error.
    // @ts-ignore
    provider.onSocketMessage(new MessageEvent('test', { data: '{"jsonrpc":"2.0","id":11,"result":22}' }));
    // @ts-ignore
    provider.onSocketMessage(new MessageEvent('test', { data: '{"jsonrpc":"2.0","method":"test","params":{"subscription":22,"error":{"message":"test"}}}' }));
  });
});
