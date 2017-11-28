// ISC, Copyright 2017 Jaco Greeff

describe('http/polyfill', () => {
  it('adds polyfills with no exceptions', () => {
    expect(require('./polyfill')).toBeDefined();
  });

  describe('interfaces', () => {
    it('fetch is available', () => {
      expect(fetch).toBeDefined();
    });
  });
});
