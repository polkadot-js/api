// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';

import { Global } from './../mock/types';

declare let global: Global;

describe('ws/polyfill', () => {
  let origWs: Constructor<WebSocket>;

  beforeEach(() => {
    origWs = global.WebSocket;
  });

  afterEach(() => {
    global.WebSocket = origWs;
  });

  it('polyfills with no exceptions (with WebSocket)', () => {
    (global as any).WebSocket = undefined;
    require('./polyfill');

    expect(global.WebSocket).toBeDefined();
  });

  it('polyfills with no exceptions (without WebSocket)', () => {
    (global as any).WebSocket = () => true;
    require('./polyfill');

    expect(global.WebSocket).toBeDefined();
  });
});
