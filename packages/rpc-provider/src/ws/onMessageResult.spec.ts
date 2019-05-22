// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';

import WsProvider from '@polkadot/rpc-provider/ws';

describe('onMessageResult', () => {
  let provider: ProviderInterface;

  beforeEach(() => {
    provider = new WsProvider('ws://127.0.0.1:1234', false);
  });

  it('calls the handler when found', (done) => {
    provider.handlers[5] = {
      callback: (_: any, result: any) => {
        expect(result).toEqual('test');
        done();
      }
    };

    provider.onSocketMessage({ data: '{"jsonrpc":"2.0","id":5,"result":"test"}' });
  });
});
