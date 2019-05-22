// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { ProviderInterface } from '@polkadot/rpc-provider/types';

import WsProvider from '@polkadot/rpc-provider/ws';

describe('onMessageSubscribe', () => {
  let ws: ProviderInterface;

  beforeEach(() => {
    ws = new WsProvider('ws://127.0.0.1:1234', false);
  });

  it('calls the subscriber with data', (done) => {
    ws.handlers[11] = {
      callback: (_: any, id: number) => { expect(typeof id).toBe('number'); },
      method: 'test',
      subscription: {
        callback: (_: any, result: String) => {
          expect(result).toEqual('test');
          done();
        },
        type: 'test'
      }
    };

    ws.onSocketMessage({ data: '{"jsonrpc":"2.0","id":11,"result":22}' });
    ws.onSocketMessage({ data: '{"jsonrpc":"2.0","method":"test","params":{"subscription":22,"result":"test"}}' });
  });

  it('calls the subscriber with error', (done) => {
    ws.handlers[11] = {
      callback: (_: any, id: number) => { expect(typeof id).toBe('number'); },
      method: 'test',
      subscription: {
        callback: (error) => {
          expect(error.message).toMatch(/test/);
          done();
        },
        type: 'test'
      }
    };

    ws.onSocketMessage({ data: '{"jsonrpc":"2.0","id":11,"result":22}' });
    ws.onSocketMessage({ data: '{"jsonrpc":"2.0","method":"test","params":{"subscription":22,"error":{"message":"test"}}}' });
  });
});
