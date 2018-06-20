// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import createState from './state';
import connect from './connect';

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
