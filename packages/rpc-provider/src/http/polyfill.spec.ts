// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Global } from './../mock/types';

declare const global: Global;

describe('http/polyfill', (): void => {
  let origFetch: GlobalFetch;

  beforeEach((): void => {
    origFetch = global.fetch;
  });

  afterEach((): void => {
    global.fetch = origFetch;
  });

  it('polyfills with no exceptions (without fetch)', (): void => {
    (global as any).fetch = undefined;
    require('./polyfill');

    expect(global.fetch).toBeDefined();
  });

  it('polyfills with no exceptions (with fetch)', (): void => {
    (global as any).fetch = (): boolean => true;
    require('./polyfill');

    expect(global.fetch).toBeDefined();
  });
});
