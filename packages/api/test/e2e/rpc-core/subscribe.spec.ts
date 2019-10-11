// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Decorated from '@polkadot/api-metadata/Decorated';
import rpcMetadata from '@polkadot/api-metadata/Metadata/static';
import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';
import Rpc from '@polkadot/rpc-core';
import { Index, Moment, SessionIndex } from '@polkadot/types/interfaces';
import { ClassOf } from '@polkadot/types';

import { describeE2E } from '../../util';

const decorated = new Decorated(rpcMetadata);

describeE2E({
  except: [
    'remote-polkadot-alexander',
    'remote-substrate-1.0'
  ]
})('RPC-core e2e subscriptions', (wsUrl: string): void => {
  let rpc: Rpc;
  const keyring = testingPairs({ type: 'ed25519' });

  beforeEach((): void => {
    jest.setTimeout(30000);
    rpc = new Rpc(new WsProvider(wsUrl));
  });

  it('subscribes to storage', (done): void => {
    rpc.state
      .subscribeStorage<[Index, SessionIndex]>([
      [decorated.query.system.accountNonce, keyring.eve.address],
      [decorated.query.session.currentIndex]
    ])
      .subscribe((data): void => {
        expect(data).toHaveLength(2);
        expect(data).toEqual(
          expect.arrayContaining([
            expect.any(ClassOf('Index')),
            expect.any(ClassOf('Index'))
          ])
        );

        done();
      });
  });

  it('retrieves current timestamp', (done): void => {
    let count = 0;

    rpc.state
      .subscribeStorage<Moment>([[decorated.query.timestamp.now]])
      .subscribe((data): void => {
        expect(data).toBeDefined();

        if (++count === 3) {
          done();
        }
      });
  });
});
