// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from './';

describe('WsProvider', () => {
  let provider: WsProvider;

  beforeEach(() => {
    provider = new WsProvider('ws://127.0.0.1:1234', false);
  });

  it('calls the handler when found', (done) => {
    // We need to access the private WsProvider property 'handlers' here which otherwise trigger a tslint error..
    // @ts-ignore
    provider.handlers[5] = {
      callback: (_: any, result: any) => {
        expect(result).toEqual('test');
        done();
      },
      method: '',
      params: []
    };

    // We need to access the private WsProvider property 'onSocketMessage' here which would otherwise trigger a tslint error.
    // @ts-ignore
    provider.onSocketMessage(new MessageEvent('test', { data: '{"jsonrpc":"2.0","id":5,"result":"test"}' }));
  });
});
