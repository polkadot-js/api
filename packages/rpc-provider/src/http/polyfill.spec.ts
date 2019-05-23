// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Global } from '@polkadot/rpc-provider/mock/types';

declare const global: Global;

describe('http/polyfill', () => {
  let origFetch: GlobalFetch;

  beforeEach(() => {
    origFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = origFetch;
  });

  it('polyfills with no exceptions (without fetch)', () => {
    expect(require('./polyfill')).toBeDefined();
  });

  it('polyfills with no exceptions (with fetch)', () => {
    expect(global.fetch).toBeTruthy();

    expect(require('./polyfill')).toBeDefined();
  });
});
