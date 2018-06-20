// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import onError from './onError';
import createState from './state';

describe('onError', () => {
  let state;
  let errorSpy;

  beforeEach(() => {
    state = createState('ws://127.0.0.1:1234', false);
    errorSpy = jest.spyOn(console, 'error');
  });

  afterEach(() => {
    errorSpy.mockRestore();
  });

  it('logs the error', () => {
    onError(state)('test error');

    expect(errorSpy).toHaveBeenCalledWith(
      expect.anything(), expect.anything(), 'test error'
    );
  });
});
