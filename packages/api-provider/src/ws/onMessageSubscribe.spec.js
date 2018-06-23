// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import onMessage from './onMessage';
import createState from './state';

describe('onMessageSubscribe', () => {
  let state;
  let errorSpy;

  beforeEach(() => {
    state = createState('ws://127.0.0.1:1234', false);
    errorSpy = jest.spyOn(console, 'error');
  });

  afterEach(() => {
    errorSpy.mockRestore();
  });

  it('fails with log when handler not found', () => {
    onMessage(state)({ data: '{"method":"test","params":{"subscription":2}}' });

    expect(errorSpy).toHaveBeenCalledWith(
      expect.anything(), expect.anything(), 'Unable to find handler for subscription=2'
    );
  });

  it('calls the subscriber with data', (done) => {
    state.handlers[11] = {
      callback: (_, id) => {},
      subscription: (_, result) => {
        expect(result).toEqual('test');
        done();
      }
    };

    onMessage(state)({ data: '{"jsonrpc":"2.0","id":11,"result":22}' });
    onMessage(state)({ data: '{"jsonrpc":"2.0","method":"test","params":{"subscription":22,"result":"test"}}' });
  });

  it('calls the subscriber with error', (done) => {
    state.handlers[11] = {
      callback: (_, id) => {},
      subscription: (error) => {
        expect(error.message).toMatch(/test/);
        done();
      }
    };

    onMessage(state)({ data: '{"jsonrpc":"2.0","id":11,"result":22}' });
    onMessage(state)({ data: '{"jsonrpc":"2.0","method":"test","params":{"subscription":22,"error":{"message":"test"}}}' });
  });
});
