// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

describe('TextDecoder', () => {
  let origTD: TextDecoder;

  beforeEach(() => {
    origTD = (global as any).TextDecoder;
  });

  afterEach(() => {
    (global as any).TextDecoder = origTD;
  });

  it('polyfills with no exceptions (without TextDecoder)', () => {
    (global as any).TextDecoder = null;

    expect(require('./textDecoder')).toBeDefined();
    expect((global as any).TextDecoder).toBeDefined();
  });

  it('polyfills with no exceptions (with TextDecoder)', () => {
    (global as any).TextDecoder = require('util').TextDecoder;

    expect(require('./textDecoder')).toBeDefined();
    expect((global as any).TextDecoder).toBeDefined();
  });
});
