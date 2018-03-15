// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const { TEST_WS_URL } = require('../../test/mockWs');

const createState = require('./state');

describe('onClose', () => {
  let mockConnect;

  beforeEach(() => {
    mockConnect = jest.fn();

    jest.mock('./connect', () => mockConnect);
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('reconnects after delay', () => {
    require('./onClose')(createState(TEST_WS_URL, true))();

    expect(mockConnect).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(mockConnect).toHaveBeenCalled();
  });

  it('does not reconnect when autoConnect false', () => {
    require('./onClose')(createState(TEST_WS_URL, false))();

    expect(mockConnect).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(mockConnect).not.toHaveBeenCalled();
  });
});
