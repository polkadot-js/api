// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// @ts-check

import { first, switchMap } from 'rxjs/operators';
import testingPairs from '@polkadot/keyring/testingPairs';

import Api from '../../src/rx';

const keyring = testingPairs();

describe.skip('e2e transactions', () => {
  let api;

  beforeEach(async (done) => {
    api = await Api.create().toPromise();
    jest.setTimeout(30000);
    done()
  });

  afterEach(() => {
    jest.setTimeout(5000);
  });

  it('makes a transfer', (done) => {
    api.query.system
      .accountNonce(keyring.alice.address())
      .pipe(
        first(),
        switchMap((nonce) =>
          api.tx.balances
            .transfer(keyring.bob.address(), 12345)
            .sign(keyring.alice, nonce)
            .send()
        )
      )
      .subscribe((status) => {
        if (status.type === 'Finalised') {
          done();
        }
      });
  });

  it('makes a proposal', (done) => {
    api.query.system
      .accountNonce(keyring.alice.address())
      .pipe(
        first(),
        switchMap((nonce) =>
          api.tx.democracy
            .propose(api.tx.consensus.setCode('0xdeadbeef'), 10000)
            .sign(keyring.alice, nonce)
            .send()
        )
      )
      .subscribe((status) => {
        if (status && status.type === 'Finalised') {
          done();
        }
      });
  });
});
