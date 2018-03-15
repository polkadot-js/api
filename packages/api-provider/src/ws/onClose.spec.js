// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const { TEST_WS_URL } = require('../../test/mockWs');

const createState = require('./state');

describe('onClose', () => {
  let state;
  let mockConnect;
  let onClose;

  beforeEach(() => {
    mockConnect = jest.fn();

    jest.mock('./connect', () => mockConnect);
    jest.useFakeTimers();

    state = createState(TEST_WS_URL, true);
    onClose = require('./onClose')(state);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('reconnects after delay', () => {
    onClose();

    expect(mockConnect).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(mockConnect).toHaveBeenCalled();
  });

  it('sets isConnected false', () => {
    expect(state.isConnected).toEqual(false);
  });

  it('does not reconnect when autoConnect false', () => {
    onClose();

    expect(mockConnect).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(mockConnect).not.toHaveBeenCalled();
  });
});
