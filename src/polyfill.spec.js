// ISC, Copyright 2017 Jaco Greeff

/* eslint-disable no-unused-expressions */

describe('polyfill', () => {
  it('adds polyfills with no exceptions', () => {
    expect(require('./polyfill')).to.be.ok;
  });

  describe('interfaces', () => {
    it('fetch is available', () => {
      expect(fetch).to.be.ok;
    });
  });
});
