// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Balance, Header } from '@polkadot/types';
import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';

import ApiRx from '../../../src/rx';
import describeE2E from '../../util/describeE2E';

describeE2E()('Rx e2e queries', (wsUrl): void => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: ApiRx;

  beforeEach(async (done): Promise<void> => {
    api = await ApiRx.create(new WsProvider(wsUrl)).toPromise();

    done();
  });

  it('makes the runtime, rpc, state & extrinsics available', (): void => {
    expect(api.genesisHash).toBeDefined();
    expect(api.runtimeMetadata).toBeDefined();
    expect(api.runtimeVersion).toBeDefined();
    expect(api.rpc).toBeDefined();
    expect(api.query).toBeDefined();
    expect(api.tx).toBeDefined();
    expect(api.derive).toBeDefined();
  });

  it('queries state for a balance', (done): void => {
    api.query.balances.freeBalance(keyring.alice_stash.address).subscribe((balance): void => {
      expect(balance).toBeInstanceOf(BN);
      expect((balance as Balance).isZero()).toBe(false);
      done();
    });
  });

  it('makes a query at a specific block', (done): void => {
    (api.rpc.chain.getHeader() as Observable<Header>)
      .pipe(
        switchMap(({ hash }: Header): Observable<any> =>
          api.query.system.events.at(hash)
        )
      )
      .subscribe((events: any): void => {
        expect(events.length).not.toEqual(0);
        done();
      });
  });
});
