// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Index } from '@polkadot/types/interfaces';

import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';
import { randomAsHex } from '@polkadot/util-crypto';

import ApiRx from '../../../src/rx';
import { SubmittableResult } from '../../../src';
import randomAsHex2097152 from '../../mock-data/randomAsHex_2097152';
import { calculateAccountDeposit, describeE2E } from '../../util';

describeE2E()('Rx e2e transactions', (wsUrl: string): void => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: ApiRx;

  beforeEach(async (done): Promise<void> => {
    api = await ApiRx.create({ provider: new WsProvider(wsUrl) }).toPromise();

    done();
  });

  it('makes a transfer', (done): void => {
    api.query.system
      .accountNonce<Index>(keyring.bob_stash.address)
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
    const proposal = api.tx.system && api.tx.system.setCode
      ? api.tx.system.setCode(randomAsHex2097152) // since impl_version 94 https://github.com/paritytech/substrate/pull/2802
      : api.tx.consensus.setCode(randomAsHex(4096)); // impl_version 0 - 93

    api.query.system
      .accountNonce<Index>(keyring.bob_stash.address)
      .pipe(
        first(),
        switchMap((nonce: Index): Observable<SubmittableResult> =>
          api.tx.democracy
            .propose(proposal, amount)
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
