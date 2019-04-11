// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

describe('TextEncoder', () => {
  let origTE: TextEncoder;

  beforeEach(() => {
    origTE = (global as any).TextEncoder;
  });

  afterEach(() => {
    (global as any).TextEncoder = origTE;
  });

  it('polyfills with no exceptions (without TextEncoder)', () => {
    (global as any).TextEncoder = null;

    expect(require('./textEncoder')).toBeDefined();
    expect((global as any).TextEncoder).toBeDefined();
  });

  it('polyfills with no exceptions (with TextEncoder)', () => {
    (global as any).TextEncoder = require('util').TextEncoder;

    expect(require('./textEncoder')).toBeDefined();
    expect((global as any).TextEncoder).toBeDefined();
  });
});
