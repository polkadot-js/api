// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Header, RuntimeVersion } from '@polkadot/types';
import WsProvider from '@polkadot/rpc-provider/ws';

import Rpc from '@polkadot/rpc-core';

describe.skip('e2e chain', (): void => {
  let rpc: Rpc;

  beforeEach((): void => {
    jest.setTimeout(30000);
    rpc = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

  it('subscribes via subscribeNewHead', (done): void => {
    let count = 0;

    rpc.chain
      .subscribeNewHead()
      .subscribe((header: Header): void => {
        expect(header).toBeInstanceOf(Header);

        if (++count === 3) {
          done();
        }
      });
  });

  it('retrieves the runtime version', (done): void => {
    rpc.chain
      .getRuntimeVersion()
      .subscribe((version: RuntimeVersion): void => {
        expect(version).toBeInstanceOf(RuntimeVersion);
        done();
      });
  });
});
