// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { Index } from '@polkadot/types';
import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';

import ApiRx from '../../../src/rx';
import { SubmittableResult } from '../../../src';
import describeE2E from '../../util/describeE2E';

describeE2E()('Rx e2e transactions', (wsUrl): void => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: ApiRx;

  beforeEach(async (done): Promise<void> => {
    api = await ApiRx.create(new WsProvider(wsUrl)).toPromise();

    done();
  });

  it('makes a transfer', (done): void => {
    (api.query.system.accountNonce(keyring.alice.address) as Observable<Index>)
      .pipe(
        first(),
        switchMap((nonce: Index): Observable<SubmittableResult> =>
          api.tx.balances
            .transfer(keyring.bob.address, 12345)
            .sign(keyring.alice, { nonce })
            .send()
        )
      )
      .subscribe(({ status }: SubmittableResult): void => {
        if (status.isFinalized) {
          done();
        }
      });
  });

  it('makes a proposal', (done): void => {
    (api.query.system.accountNonce(keyring.alice.address) as Observable<Index>)
      .pipe(
        first(),
        switchMap((nonce: Index): Observable<SubmittableResult> =>
          api.tx.democracy
            .propose(api.tx.system.setCode('0xdeadbeef'), 10000)
            .sign(keyring.alice, { nonce })
            .send()
        )
      )
      .subscribe(({ status }: SubmittableResult): void => {
        if (status.isFinalized) {
          done();
        }
      });
  });
});
