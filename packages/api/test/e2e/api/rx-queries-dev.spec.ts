// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { Balance } from '@polkadot/types/interfaces';
import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';

import ApiRx from '../../../src/rx';
import { describeE2E } from '../../util';

describeE2E({
  except: [
    'remote-polkadot-alexander',
    'remote-substrate-1.0'
  ]
})('Rx e2e queries', (wsUrl: string): void => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: ApiRx;

  beforeEach(async (done): Promise<void> => {
    api = await ApiRx.create(new WsProvider(wsUrl)).toPromise();

    done();
  });

  it('queries state for a balance', (done): void => {
    api.query.balances.freeBalance(keyring.alice_stash.address).subscribe((balance): void => {
      expect(balance).toBeInstanceOf(BN);
      expect((balance as Balance).isZero()).toBe(false);
      done();
    });
  });
});
