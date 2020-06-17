// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';

import { Global } from './../mock/types';
import getWSClass from './getWSClass';

declare const global: Global;

describe('getWebScoket', (): void => {
  let origWs: Constructor<WebSocket>;

  beforeEach((): void => {
    origWs = global.WebSocket;
  });

  afterEach((): void => {
    global.WebSocket = origWs;
  });

  it('polyfills with no exceptions (with WebSocket)', async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    (global as any).WebSocket = undefined;

    const WS = await getWSClass();

    expect(WS).toBeDefined();
  });

  it('polyfills with no exceptions (without WebSocket)', async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    (global as any).WebSocket = (): boolean => true;

    const WS = await getWSClass();

    expect(WS).toBeDefined();
  });
});
