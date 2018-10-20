// Copyright 2017-2018 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Ws from './index';

describe('onError', () => {
  let ws: any;
  let errorSpy: any;

  beforeEach(() => {
    ws = new Ws('ws://127.0.0.1:1234', false);
    errorSpy = jest.spyOn(console, 'error');
  });

  afterEach(() => {
    errorSpy.mockRestore();
  });

  it('logs the error', () => {
    ws.onSocketError('test error');

    expect(errorSpy).toHaveBeenCalledWith(
      expect.anything(), expect.anything(), 'test error'
    );
  });
});
