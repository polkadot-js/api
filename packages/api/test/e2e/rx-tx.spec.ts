// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { Index } from '@polkadot/types';
import testingPairs from '@polkadot/keyring/testingPairs';

import Api from './../../src/rx';
import { SubmittableResult } from './../../src';

describe.skip('Rx e2e transactions', () => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: Api;

  beforeEach(async (done) => {
    api = await Api.create().toPromise();
    jest.setTimeout(30000);
    done();
  });

  afterEach(() => {
    jest.setTimeout(5000);
  });

  it('makes a transfer', (done) => {
    (api.query.system.accountNonce(keyring.alice.address) as Observable<Index>)
      .pipe(
        first(),
        switchMap((nonce: Index) =>
          api.tx.balances
            .transfer(keyring.bob.address, 12345)
            .sign(keyring.alice, { nonce })
            .send()
        )
      )
      .subscribe(({ status }: SubmittableResult) => {
        if (status.isFinalized) {
          done();
        }
      });
  });

  it('makes a proposal', (done) => {
    (api.query.system.accountNonce(keyring.alice.address) as Observable<Index>)
      .pipe(
        first(),
        switchMap((nonce: Index) =>
          api.tx.democracy
            .propose(api.tx.system.setCode('0xdeadbeef'), 10000)
            .sign(keyring.alice, { nonce })
            .send()
        )
      )
      .subscribe(({ status }: SubmittableResult) => {
        if (status.isFinalized) {
          done();
        }
      });
  });
});
