// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

describe('ws/polyfill', () => {
  let origWs;

  beforeEach(() => {
    origWs = global.WebSocket;
    global.WebSocket = null;
  });

  afterEach(() => {
    global.WebSocket = origWs;
  });

  it('polyfills with no exceptions (without WebSocket)', () => {
    expect(require('./polyfill')).toBeDefined();
  });

  it('polyfills with no exceptions (with WebSocket)', () => {
    global.WebSocket = () => true;

    expect(require('./polyfill')).toBeDefined();
  });
});
