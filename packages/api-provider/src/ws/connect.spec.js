// Copyright 2017-2018 @polkadot/api-provider authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const { mockWs, TEST_WS_URL } = require('../../test/mockWs');

const createState = require('./state');
const connect = require('./connect');

describe('onError', () => {
  let mock;

  beforeEach(() => {
    mock = mockWs([]);
  });

  afterEach(() => {
    if (mock) {
      mock.done();
      mock = null;
    }
  });

  it('sets up the on* handlers', () => {
    const state = createState(TEST_WS_URL, false);

    connect(state);

    expect(state.websocket.onclose[0]).toBeDefined();
    expect(state.websocket.onerror[0]).toBeDefined();
    expect(state.websocket.onmessage[0]).toBeDefined();
    expect(state.websocket.onopen[0]).toBeDefined();
  });
});
