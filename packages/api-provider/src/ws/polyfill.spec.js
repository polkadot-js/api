// ISC, Copyright 2017-2018 Jaco Greeff

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
