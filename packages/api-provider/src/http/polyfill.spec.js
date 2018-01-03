// ISC, Copyright 2017-2018 Jaco Greeff

describe('http/polyfill', () => {
  let origFetch;

  beforeEach(() => {
    origFetch = global.fetch;
    global.fetch = null;
  });

  afterEach(() => {
    global.fetch = origFetch;
  });

  it('polyfills with no exceptions (without fetch)', () => {
    expect(require('./polyfill')).toBeDefined();
  });

  it('polyfills with no exceptions (with fetch)', () => {
    global.fetch = () => true;

    expect(require('./polyfill')).toBeDefined();
  });
});
