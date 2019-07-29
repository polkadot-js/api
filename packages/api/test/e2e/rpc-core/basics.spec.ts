// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainProperties, Extrinsic } from '@polkadot/types/interfaces';

import { ClassOf, Vec } from '@polkadot/types';
import WsProvider from '@polkadot/rpc-provider/ws';
import Rpc from '@polkadot/rpc-core';

import { describeE2E } from '../../util';

describeE2E({
  except: [
    'remote-polkadot-alexander',
    'remote-substrate-1.0'
  ]
})('RPC-core e2e basics', (wsUrl: string): void => {
  let rpc: Rpc;

  beforeEach((): void => {
    jest.setTimeout(30000);
    rpc = new Rpc(new WsProvider(wsUrl));
  });

  it('retrieves the pending extrinsics', (done): void => {
    rpc.author
      .pendingExtrinsics()
      .subscribe((extrinsics: Vec<Extrinsic>): void => {
        expect(extrinsics).toBeInstanceOf(Vec);
        done();
      });
  });

  it('retrieves the system properties', (done): void => {
    rpc.system
      .properties()
      .subscribe((properties: ChainProperties): void => {
        expect(properties).toBeInstanceOf(ClassOf('ChainProperties'));
        console.log('properties', properties);
        done();
      });
  });
});
