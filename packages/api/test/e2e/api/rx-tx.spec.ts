// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { Index } from '@polkadot/types';
import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';
import { randomAsHex } from '@polkadot/util-crypto';

import ApiRx from '../../../src/rx';
import { SubmittableResult } from '../../../src';
import randomAsHex262144 from '../../mock-data/randomAsHex';
import { calculateAccountDeposit, describeE2E } from '../../util';

describeE2E()('Rx e2e transactions', (wsUrl: string): void => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: ApiRx;

  beforeEach(async (done): Promise<void> => {
    api = await ApiRx.create(new WsProvider(wsUrl)).toPromise();

    done();
  });

  it('makes a transfer', (done): void => {
    (api.query.system.accountNonce(keyring.bob_stash.address) as Observable<Index>)
      .pipe(
        first(),
        switchMap((nonce: Index): Observable<SubmittableResult> =>
          api.tx.balances
            .transfer(keyring.bob.address, 12345)
            .sign(keyring.bob_stash, { nonce })
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
    const amount = calculateAccountDeposit(api);
    (api.query.system.accountNonce(keyring.bob_stash.address) as Observable<Index>)
      .pipe(
        first(),
        switchMap((nonce: Index): Observable<SubmittableResult> =>
          api.tx.democracy
            .propose(
              api.tx.system && api.tx.system.setCode
                ? api.tx.system.setCode(randomAsHex262144) // since impl_version 94 https://github.com/paritytech/substrate/pull/2802
                : api.tx.consensus.setCode(randomAsHex(4096)) // impl_version 0 - 93
              , amount)
            .sign(keyring.bob_stash, { nonce })
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
