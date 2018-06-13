// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const onMessage = require('./onMessage');
const createState = require('./state');

describe('onMessageResult', () => {
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
    onMessage(state)({ data: '{"id":2}' });

    expect(errorSpy).toHaveBeenCalledWith(
      expect.anything(), expect.anything(), 'Unable to find handler for id=2'
    );
  });

  it('calls the handler when found', (done) => {
    state.handlers[5] = {
      callback: (_, result) => {
        expect(result).toEqual('test');
        done();
      }
    };

    onMessage(state)({ data: '{"jsonrpc":"2.0","id":5,"result":"test"}' });
  });
});
