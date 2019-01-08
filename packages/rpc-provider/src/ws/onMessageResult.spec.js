// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Ws from './index';

describe('onMessageResult', () => {
  let ws;

  beforeEach(() => {
    ws = new Ws('ws://127.0.0.1:1234', false);
  });

  it('calls the handler when found', (done) => {
    ws.handlers[5] = {
      callback: (_, result) => {
        expect(result).toEqual('test');
        done();
      }
    };

    ws.onSocketMessage({ data: '{"jsonrpc":"2.0","id":5,"result":"test"}' });
  });
});
