// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Global } from './../mock/types';

declare const global: Global;

describe('http/polyfill', (): void => {
  let origFetch: any;

  beforeEach((): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    origFetch = global.fetch;
  });

  afterEach((): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    global.fetch = origFetch;
  });

  it('polyfills with no exceptions (without fetch)', (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    (global as any).fetch = undefined;
    require('./polyfill');

    expect(global.fetch).toBeDefined();
  });

  it('polyfills with no exceptions (with fetch)', (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    (global as any).fetch = (): boolean => true;
    require('./polyfill');

    expect(global.fetch).toBeDefined();
  });
});
