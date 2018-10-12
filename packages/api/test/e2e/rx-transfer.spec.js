// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { switchMap } from 'rxjs/operators';
import testingPairs from '@polkadot/util-keyring/testingPairs';

import Api from '../../src/rx';

const keyring = testingPairs();

describe.skip('e2e transfer', () => {
  let api;

  beforeEach(async () => {
    api = await Api.create().toPromise();
  });

  it('makes a transfer', (done) => {
    api.query.system
      .accountNonce(keyring.alice.address())
      .pipe(
        switchMap((nonce) =>
          api.tx.balances
            .transfer(keyring.bob.address(), 12345)
            .sign(keyring.alice, nonce)
            .send()
        )
      )
      .subscribe((hash) => {
        expect(
          hash.toString()
        ).not.toEqual('0x');

        done();
      });
  });
});
